import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

const ELASTICSEARCH_URL = process.env.ELASTICSEARCH_URL || 'http://localhost:9200';
const ELASTICSEARCH_USERNAME = process.env.ELASTICSEARCH_USERNAME || 'elastic';
const ELASTICSEARCH_PASSWORD = process.env.ELASTICSEARCH_PASSWORD || 'changeme';

interface Facility {
  id: string;
  name: string;
  address: string;
  prefecture: string;
  city: string;
  ageRange: string;
  programs: string;
  features: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  labels: string;
}

async function importFacilities() {
  try {
    // CSVファイルを読み込む
    const csvFilePath = path.join(process.cwd(), 'facilities.csv');
    const fileContent = fs.readFileSync(csvFilePath, 'utf-8');
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      relax_quotes: true,
    }) as Facility[];

    // Bulk API用のデータを作成
    const bulkData = records.flatMap((record) => [
      { index: { _index: 'facilities', _id: record.id } },
      {
        name: record.name,
        address: record.address,
        prefecture: record.prefecture,
        city: record.city,
        ageRange: record.ageRange,
        programs: record.programs.split(','),
        features: record.features.split(','),
        description: record.description,
        createdAt: record.createdAt,
        updatedAt: record.updatedAt,
        labels: JSON.parse(record.labels),
      },
    ]);

    // Bulk APIリクエストを送信
    const response = await fetch(`${ELASTICSEARCH_URL}/_bulk`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-ndjson',
        'Authorization': `Basic ${Buffer.from(`${ELASTICSEARCH_USERNAME}:${ELASTICSEARCH_PASSWORD}`).toString('base64')}`,
      },
      body: bulkData.map((item) => JSON.stringify(item)).join('\n') + '\n',
    });

    if (!response.ok) {
      throw new Error(`Elasticsearch bulk request failed: ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Import completed:', result);
  } catch (error) {
    console.error('Import failed:', error);
  }
}

importFacilities(); 