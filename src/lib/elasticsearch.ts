// Node.js環境でのみElasticsearchクライアントを初期化
const ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL || 'http://localhost:9200';
const ELASTICSEARCH_USERNAME = process.env.ELASTICSEARCH_USERNAME || 'elastic';
const ELASTICSEARCH_PASSWORD = process.env.ELASTICSEARCH_PASSWORD || 'changeme';

export interface SearchQuery {
  q?: string;
  prefecture?: string;
  city?: string;
  ageRange?: string;
  program?: string;
  page?: number;
  limit?: number;
  filters?: string[];
}

export interface SearchResult {
  id: string;
  name: string;
  address: string;
  prefecture: string;
  city: string;
  ageRange: string;
  programs: string[];
  features: string[];
  description: string;
  createdAt: string;
  updatedAt: string;
  labels?: Record<string, boolean>;
}

function buildSearchQuery(query: SearchQuery) {
  const must: any[] = [];
  if (query.q) {
    must.push({
      multi_match: {
        query: query.q,
        fields: ['name^3', 'description^2', 'programs^2', 'features'],
        type: 'best_fields',
        fuzziness: 'AUTO',
      },
    });
  }
  if (query.prefecture) must.push({ term: { prefecture: query.prefecture } });
  if (query.city) must.push({ term: { city: query.city } });
  if (query.ageRange) must.push({ term: { ageRange: query.ageRange } });
  if (query.program) must.push({ term: { programs: query.program } });
  if (query.filters && query.filters.length > 0) {
    const filterQueries = query.filters.map((filter) => {
      switch (filter) {
        case 'dayService': return { term: { 'labels.dayService': true } };
        case 'noExperience': return { term: { 'labels.noExperience': true } };
        case 'socialInsurance': return { term: { 'labels.socialInsurance': true } };
        case 'carCommute': return { term: { 'labels.carCommute': true } };
        case 'bonus': return { term: { 'labels.bonus': true } };
        case 'transportation': return { term: { 'labels.transportation': true } };
        default: return null;
      }
    }).filter(Boolean);
    if (filterQueries.length > 0) must.push({ bool: { must: filterQueries } });
  }
  return {
    index: 'facilities',
    size: query.limit || 50,
    from: query.page && query.limit ? (query.page - 1) * query.limit : 0,
    sort: [{ _score: { order: 'desc' as const } }],
    query: { bool: { must: must.length > 0 ? must : [{ match_all: {} }] } },
  };
}

export async function searchFacilities(query: SearchQuery) {
  const searchQuery = buildSearchQuery(query);
  const response = await fetch(`${ELASTICSEARCH_URL}/facilities/_search`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Basic ${Buffer.from(`${ELASTICSEARCH_USERNAME}:${ELASTICSEARCH_PASSWORD}`).toString('base64')}`,
    },
    body: JSON.stringify(searchQuery),
  });
  if (!response.ok) {
    throw new Error(`Elasticsearch request failed: ${response.statusText}`);
  }
  const data = await response.json();
  const results = data.hits.hits.map((hit: any) => ({
    id: hit._id,
    ...(hit._source as Omit<SearchResult, 'id'>),
  }));
  return {
    results,
    total: typeof data.hits.total === 'number'
      ? data.hits.total
      : data.hits.total?.value || 0,
  };
} 