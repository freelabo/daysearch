import { NextResponse } from "next/server";
import { searchFacilities } from "@/lib/elasticsearch";

export async function GET(request: Request) {
  try {
    // 環境変数チェック
    if (!process.env.ELASTICSEARCH_URL || !process.env.ELASTICSEARCH_USERNAME || !process.env.ELASTICSEARCH_PASSWORD) {
      return NextResponse.json(
        { error: "Elasticsearch環境変数が未設定です", details: {
          ELASTICSEARCH_URL: process.env.ELASTICSEARCH_URL,
          ELASTICSEARCH_USERNAME: process.env.ELASTICSEARCH_USERNAME,
          ELASTICSEARCH_PASSWORD: process.env.ELASTICSEARCH_PASSWORD ? '***' : undefined,
        } },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const query = {
      prefecture: searchParams.get("prefecture") || undefined,
      city: searchParams.get("city") || undefined,
      ageRange: searchParams.get("ageRange") || undefined,
      program: searchParams.get("program") || undefined,
      q: searchParams.get("q") || undefined,
      filters: searchParams.getAll("filters"),
    };

    const { results, total } = await searchFacilities(query);

    return NextResponse.json({
      results,
      total,
    });
  } catch (error: any) {
    // エラー詳細を返す
    return NextResponse.json(
      { error: "施設データの取得に失敗しました", details: error?.message || String(error), stack: error?.stack },
      { status: 500 }
    );
  }
} 