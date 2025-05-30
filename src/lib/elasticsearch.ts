import { Client } from '@elastic/elasticsearch';
import type { SearchResult as ElasticSearchResult, SearchQuery as ElasticSearchQuery } from '@/types/elasticsearch';

// Node.js環境でのみElasticsearchクライアントを初期化
let client: Client | null = null;

if (typeof window === 'undefined') {
  client = new Client({
    node: process.env.ELASTICSEARCH_URL || 'http://localhost:9200',
    auth: {
      username: process.env.ELASTICSEARCH_USERNAME || 'elastic',
      password: process.env.ELASTICSEARCH_PASSWORD || 'changeme'
    }
  });
}

// 検索結果の型定義
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
}

// 検索クエリの型定義
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

// 検索クエリの構築
function buildSearchQuery(query: SearchQuery) {
  const must: any[] = [];

  // キーワード検索
  if (query.q) {
    must.push({
      multi_match: {
        query: query.q,
        fields: ['name^3', 'description^2', 'programs^2', 'features'],
        type: 'best_fields',
        fuzziness: 'AUTO'
      }
    });
  }

  // 都道府県
  if (query.prefecture) {
    must.push({ term: { prefecture: query.prefecture } });
  }

  // 市区町村
  if (query.city) {
    must.push({ term: { city: query.city } });
  }

  // 対象年齢
  if (query.ageRange) {
    must.push({ term: { ageRange: query.ageRange } });
  }

  // プログラム
  if (query.program) {
    must.push({ term: { programs: query.program } });
  }

  // フィルター条件
  if (query.filters && query.filters.length > 0) {
    const filterQueries = query.filters.map(filter => {
      switch (filter) {
        case 'dayService':
          return { term: { 'labels.dayService': true } };
        case 'noExperience':
          return { term: { 'labels.noExperience': true } };
        case 'socialInsurance':
          return { term: { 'labels.socialInsurance': true } };
        case 'carCommute':
          return { term: { 'labels.carCommute': true } };
        case 'bonus':
          return { term: { 'labels.bonus': true } };
        case 'transportation':
          return { term: { 'labels.transportation': true } };
        default:
          return null;
      }
    }).filter(Boolean);

    if (filterQueries.length > 0) {
      must.push({ bool: { must: filterQueries } });
    }
  }

  return {
    index: 'facilities',
    size: 50, // 最大50件
    sort: [
      { _score: { order: 'desc' as const } } // スコアの降順
    ],
    query: {
      bool: {
        must: must.length > 0 ? must : [{ match_all: {} }]
      }
    }
  };
}

// 施設の検索
export async function searchFacilities(query: SearchQuery) {
  if (!client) {
    throw new Error('Elasticsearch client is not initialized');
  }

  try {
    const searchQuery = buildSearchQuery(query);
    const response = await client.search(searchQuery);

    const results = response.hits.hits.map(hit => ({
      id: hit._id,
      score: hit._score || 0,
      ...(hit._source as Omit<SearchResult, 'id' | 'score'>)
    }));

    return {
      results,
      total: typeof response.hits.total === 'number' 
        ? response.hits.total 
        : response.hits.total?.value || 0
    };
  } catch (error) {
    console.error('Elasticsearch search error:', error);
    throw new Error('施設の検索中にエラーが発生しました。');
  }
}

export default client; 