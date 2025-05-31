import { NextResponse } from "next/server";
import { searchFacilities } from "@/lib/elasticsearch";

export async function GET(request: Request) {
  try {
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
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return NextResponse.json(
      { error: "施設データの取得に失敗しました", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 