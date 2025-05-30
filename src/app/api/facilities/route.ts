import { NextResponse } from 'next/server';
import { searchFacilities } from '@/lib/elasticsearch';

// Node.jsランタイムを強制
export const runtime = 'nodejs';
// 動的レンダリングを強制
export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    // URLからクエリパラメータを取得
    const { searchParams } = new URL(request.url);
    const query = Object.fromEntries(searchParams.entries());

    // 検索実行（Node.js環境でのみ実行）
    const { results, total } = await searchFacilities(query);

    return NextResponse.json({ results, total });
  } catch (error) {
    console.error('Error fetching facilities:', error);
    return NextResponse.json(
      { error: 'Failed to fetch facilities' },
      { status: 500 }
    );
  }
} 