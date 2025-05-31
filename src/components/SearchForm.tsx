"use client";

import { useState } from "react";

interface SearchFormProps {
  onSearch: (prefecture: string, city: string) => void;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const prefectures = [
    "東京都",
    "神奈川県",
    "埼玉県",
    "千葉県",
    // 他の都道府県も追加
  ];

  const cities = {
    "東京都": ["渋谷区", "新宿区", "港区", "千代田区", "世田谷区", "中野区", "目黒区", "品川区", "大田区", "江東区", "墨田区", "江戸川区", "葛飾区", "足立区", "荒川区", "台東区", "文京区", "豊島区", "北区", "板橋区", "練馬区", "杉並区"],
    "神奈川県": ["横浜市", "川崎市", "相模原市"],
    "埼玉県": ["さいたま市", "川口市", "所沢市"],
    "千葉県": ["千葉市", "船橋市", "松戸市"],
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(selectedPrefecture, selectedCity);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-screen-md mx-auto mt-6 p-4 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-1">
            都道府県
          </label>
          <select
            id="prefecture"
            value={selectedPrefecture}
            onChange={(e) => {
              setSelectedPrefecture(e.target.value);
              setSelectedCity("");
            }}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">選択してください</option>
            {prefectures.map((prefecture) => (
              <option key={prefecture} value={prefecture}>
                {prefecture}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
            市区町村
          </label>
          <select
            id="city"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            disabled={!selectedPrefecture}
          >
            <option value="">選択してください</option>
            {selectedPrefecture &&
              cities[selectedPrefecture as keyof typeof cities]?.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
          </select>
        </div>
      </div>
      <div className="mt-4">
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          disabled={!selectedPrefecture || !selectedCity}
        >
          検索する
        </button>
      </div>
    </form>
  );
} 