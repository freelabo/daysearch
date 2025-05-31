import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { parse } from "csv-parse/sync";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const prefecture = searchParams.get("prefecture");
    const city = searchParams.get("city");

    console.log("Search params:", { prefecture, city });

    // CSVファイルを読み込む
    const filePath = path.join(process.cwd(), "facilities.csv");
    console.log("Reading file from:", filePath);
    
    const fileContent = await fs.readFile(filePath, "utf-8");
    console.log("File content length:", fileContent.length);

    // CSVをパース
    const records = parse(fileContent, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      quote: '"',
      escape: '"',
      relax_quotes: true,
    });
    console.log("Total records:", records.length);

    // 都道府県と市区町村でフィルタリング
    let filteredRecords = records;
    if (prefecture) {
      filteredRecords = filteredRecords.filter(
        (record: any) => record.prefecture === prefecture
      );
      console.log("Records after prefecture filter:", filteredRecords.length);
    }
    if (city) {
      filteredRecords = filteredRecords.filter(
        (record: any) => record.city === city
      );
      console.log("Records after city filter:", filteredRecords.length);
    }

    return NextResponse.json(filteredRecords);
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return NextResponse.json(
      { error: "施設データの取得に失敗しました", details: error instanceof Error ? error.message : String(error) },
      { status: 500 }
    );
  }
} 