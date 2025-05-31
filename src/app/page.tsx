"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Footer from "./components/Footer";
import CustomSelect from "./components/CustomSelect";

export default function Home() {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [facilities, setFacilities] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 都道府県と市区町村の選択肢（サンプル）
  const prefectures = ["東京都"];
  const cities = [
    "渋谷区", "新宿区", "港区", "千代田区", "世田谷区", "中野区", "目黒区", "品川区", "大田区", "江東区",
    "墨田区", "江戸川区", "葛飾区", "足立区", "荒川区", "台東区", "文京区", "豊島区", "北区", "板橋区",
    "練馬区", "杉並区"
  ];

  // 検索実行
  const fetchFacilities = async () => {
    setLoading(true);
    setError("");
    try {
      const params = new URLSearchParams();
      if (selectedPrefecture) params.append("prefecture", selectedPrefecture);
      if (selectedCity) params.append("city", selectedCity);
      const res = await fetch(`/api/facilities?${params.toString()}`, {
        cache: 'no-store'
      });
      if (!res.ok) throw new Error("データ取得に失敗しました");
      const { results = [], total = 0 } = await res.json();
      setFacilities(results);
    } catch (e: any) {
      setError(e.message || "不明なエラーが発生しました");
      setFacilities([]);
    } finally {
      setLoading(false);
    }
  };

  // 初回表示時に全件取得
  useEffect(() => {
    fetchFacilities();
    // eslint-disable-next-line
  }, []);

  // 検索ボタン押下時
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchFacilities();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center">
      <header className="w-full">
        <Image
          src="/logo2.png"
          alt="デイサーチのロゴ"
          width={192}
          height={60}
          className="w-48 mx-auto mt-6 h-auto"
          priority
        />
      </header>
      <main className="w-full max-w-3xl md:max-w-[1200px] mx-auto flex-1 flex flex-col items-center p-4">
        <h1 className="text-2xl font-bold text-center mt-4 mb-2 text-gray-800">
          放課後等デイサービス検索
        </h1>
        <p className="text-sm text-gray-600 leading-relaxed mt-4 px-4 text-left">
          放課後等デイサービスは、発達に特性のある子どもたちを対象に、放課後や休日に療育や支援を行う福祉サービスです。<br />
          デイサーチでは、全国の事業所情報を地域・ニーズ別に検索できます。
        </p>
        {/* 検索フォーム */}
        <form onSubmit={handleSearch} className="flex flex-wrap gap-4 mt-6 items-end">
          <div>
            <label className="block text-xs text-gray-600 mb-1">都道府県</label>
            <CustomSelect
              options={prefectures}
              value={selectedPrefecture}
              onChange={(value) => {
                setSelectedPrefecture(value);
                setSelectedCity("");
              }}
              placeholder="選択してください"
              className="w-48"
            />
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">市区町村</label>
            <CustomSelect
              options={cities}
              value={selectedCity}
              onChange={setSelectedCity}
              placeholder="選択してください"
              className="w-48"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
            disabled={loading}
          >
            検索
          </button>
        </form>
        {/* 検索結果 */}
        <div className="w-full max-w-screen-md mx-auto mt-6">
          {loading && <div className="text-center text-gray-500">検索中...</div>}
          {error && <div className="text-center text-red-500">{error}</div>}
          {!loading && !error && facilities.length === 0 && (
            <div className="text-center text-gray-500">該当する施設がありません</div>
          )}
          {!loading && !error && facilities.map((facility) => (
            <article key={facility.id} className="border rounded p-4 shadow-md mb-4 bg-white">
              <h2 className="text-lg font-semibold text-blue-600 mb-2">
                <a href={`/facility/${facility.id}`} className="hover:underline">
                  {facility.name}
                </a>
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                {facility.prefecture} {facility.city}
              </p>
              <p className="text-sm text-gray-600 mb-2">
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
              <p className="text-sm text-gray-600 line-clamp-2">
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
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 