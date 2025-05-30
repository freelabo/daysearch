import type { Metadata } from 'next';
import Footer from "../components/Footer";
import SearchForm from "@/components/SearchForm";

export const metadata: Metadata = {
  title: '放課後等デイサービスの検索結果｜デイサーチ',
  description: '放課後等デイサービスの施設情報や療育プログラムを検索・一覧表示します。児童福祉の専門知識を持つスタッフの実体験を踏まえた情報を掲載。',
};

interface SearchPageProps {
  searchParams: {
    q?: string;
    prefecture?: string;
    city?: string;
    ageRange?: string;
    program?: string;
    filters?: string[];
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  // クエリパラメータをAPI Route用に組み立て
  const params = new URLSearchParams();
  Object.entries(searchParams).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(v => params.append(key, v));
    } else if (value) {
      params.append(key, value);
    }
  });

  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/facilities?${params.toString()}`, {
    cache: 'no-store'
  });
  if (!response.ok) {
    throw new Error('検索結果の取得に失敗しました');
  }
  const { results = [], total = 0 } = await response.json();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 max-w-3xl mx-auto px-4 pt-8 pb-2">
        <a href="/" className="flex items-center">
          <img src="/logo2.png" alt="デイサーチロゴ" className="h-10 w-auto" />
        </a>
      </div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <nav className="text-sm mb-4" aria-label="パンくずリスト">
          <ol className="list-reset flex text-gray-600">
            <li><a href="/" className="hover:underline text-blue-600">ホーム</a></li>
            <li className="mx-2">/</li>
            <li>検索結果</li>
          </ol>
        </nav>

        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">放課後等デイサービスの検索結果</h1>
          
          <section className="mb-8">
            <p className="text-gray-600 leading-relaxed mb-4">
              こちらでは私たちが実際に放課後等デイサービスを運営・利用している経験をもとに、
              児童福祉や療育サービスの専門的な知見を活かした施設情報を掲載しています。
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              施設の対象年齢やプログラム内容など、利用者の皆さまのニーズに合わせた検索が可能です。
              各施設の特徴や療育方針を詳しくご確認いただけます。
            </p>

            {/* 検索フォーム */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <SearchForm />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">検索結果</h2>
            <div className="space-y-4">
              {results.length > 0 ? (
                <>
                  <p className="text-gray-600 mb-4">
                    {total}件の施設が見つかりました。
                  </p>
                  <ul className="space-y-6">
                    {results.map((facility: any) => (
                      <li key={facility.id} className="border-b pb-6 last:border-b-0">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          <a href={`/facility/${facility.id}`} className="hover:underline">
                            {facility.name}
                          </a>
                        </h3>
                        <p className="text-gray-600 mb-2">
                          {facility.prefecture} {facility.city}
                        </p>
                        <p className="text-gray-600 mb-2">
                          対象年齢: {facility.ageRange}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                          {facility.programs.map((program: string, index: number) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded"
                            >
                              {program}
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 line-clamp-2">
                          {facility.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {facility.labels?.dayService && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              通所介護・デイサービス
                            </span>
                          )}
                          {facility.labels?.noExperience && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              未経験可
                            </span>
                          )}
                          {facility.labels?.socialInsurance && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              社会保険完備
                            </span>
                          )}
                          {facility.labels?.carCommute && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              車通勤可
                            </span>
                          )}
                          {facility.labels?.bonus && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              ボーナス・賞与あり
                            </span>
                          )}
                          {facility.labels?.transportation && (
                            <span className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white">
                              交通費支給
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="text-gray-600">
                  検索条件に一致する施設が見つかりませんでした。
                  別の条件で検索をお試しください。
                </p>
              )}
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
} 