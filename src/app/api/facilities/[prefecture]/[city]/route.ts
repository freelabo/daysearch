import { NextResponse } from "next/server";
import { createClient, SupabaseClient } from "@supabase/supabase-js";

// 型定義
type Facility = {
  id: string;
  name: string;
  prefecture: string;
  city: string;
  filters: Record<string, boolean>;  // ラベルをfiltersとして統合
  [key: string]: any;
};

type SearchParams = {
  prefecture?: string;
  city?: string;
  filters?: string[];  // フィルター条件の配列
};

// Supabaseクライアントの初期化
const initSupabase = (): SupabaseClient => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Supabase URL or Anon Key is not set.");
  }

  return createClient(supabaseUrl, supabaseAnonKey);
};

// クエリビルダー
const buildFacilityQuery = (
  supabase: SupabaseClient,
  params: SearchParams
) => {
  let query = supabase.from('facilities').select('*');

  if (params.prefecture) {
    query = query.eq('prefecture', params.prefecture);
  }
  if (params.city) {
    query = query.eq('city', params.city);
  }
  if (params.filters?.length) {
    // 各フィルター条件に対して、対応するラベルがtrueの施設のみを取得
    params.filters.forEach(filter => {
      query = query.eq(`filters->>${filter}`, true);
    });
  }

  return query;
};

// エラーレスポンス生成
const createErrorResponse = (error: unknown) => {
  const errorMessage = error instanceof Error ? error.message : String(error);
  const errorStack = error instanceof Error ? error.stack : undefined;

  return NextResponse.json(
    {
      error: "施設データの取得に失敗しました",
      details: errorMessage,
      stack: errorStack,
    },
    { status: 500 }
  );
};

// メインのハンドラー関数
export async function GET(
  request: Request,
  { params: pathParams }: { params: { prefecture?: string; city?: string } }
) {
  try {
    const supabase = initSupabase();
    const { searchParams } = new URL(request.url);

    // URLパスパラメータとクエリパラメータを統合
    const searchParamsObj: SearchParams = {
      prefecture: pathParams.prefecture || searchParams.get("prefecture") || undefined,
      city: pathParams.city || searchParams.get("city") || undefined,
      filters: searchParams.getAll("filters"),
    };

    // 都道府県が指定されていない場合はエラー
    if (!searchParamsObj.prefecture) {
      return NextResponse.json(
        { error: "都道府県が指定されていません" },
        { status: 400 }
      );
    }

    const query = buildFacilityQuery(supabase, searchParamsObj);
    const { data: results, error, count } = await query;

    if (error) {
      throw error;
    }

    return NextResponse.json({
      results: results || [],
      total: count || results?.length || 0,
    });
  } catch (error) {
    console.error("Error fetching facilities:", error);
    return createErrorResponse(error);
  }
} 