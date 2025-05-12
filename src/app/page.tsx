'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';

// 型定義
type Prefecture = {
  id: number;
  name: string;
};

type City = {
  id: number;
  name: string;
};

type Facility = {
  id: number;
  name: string;
  address: string;
  tel: string;
  website: string;
  prefectureId: number;
  cityId: number;
};

type CitiesMap = {
  [key: number]: City[];
};

// 仮データ
const prefectures: Prefecture[] = [
  { id: 1, name: '東京都' },
  { id: 2, name: '神奈川県' },
  { id: 3, name: '千葉県' },
];

const cities: CitiesMap = {
  1: [
    { id: 1, name: '渋谷区' },
    { id: 2, name: '新宿区' },
    { id: 3, name: '港区' },
  ],
  2: [
    { id: 1, name: '横浜市' },
    { id: 2, name: '川崎市' },
    { id: 3, name: '相模原市' },
  ],
  3: [
    { id: 1, name: '千葉市' },
    { id: 2, name: '船橋市' },
    { id: 3, name: '松戸市' },
  ],
};

const facilities: Facility[] = [
  {
    id: 1,
    name: '渋谷区立文化総合センター',
    address: '東京都渋谷区渋谷2-24-12',
    tel: '03-3463-0211',
    website: 'https://example.com/shibuya',
    prefectureId: 1,
    cityId: 1,
  },
  {
    id: 2,
    name: '新宿区立スポーツセンター',
    address: '東京都新宿区西新宿2-11-4',
    tel: '03-3342-1111',
    website: 'https://example.com/shinjuku',
    prefectureId: 1,
    cityId: 2,
  },
  {
    id: 3,
    name: '横浜市文化体育館',
    address: '神奈川県横浜市中区山下町1-1',
    tel: '045-671-1111',
    website: 'https://example.com/yokohama',
    prefectureId: 2,
    cityId: 1,
  },
];

export default function Home() {
  const [selectedPrefecture, setSelectedPrefecture] = useState<number | ''>('');
  const [selectedCity, setSelectedCity] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);

  const filteredFacilities = useMemo(() => {
    try {
      return facilities.filter((facility) => {
        if (selectedPrefecture && selectedCity) {
          return facility.prefectureId === selectedPrefecture && facility.cityId === selectedCity;
        }
        if (selectedPrefecture) {
          return facility.prefectureId === selectedPrefecture;
        }
        return true;
      });
    } catch (err) {
      setError('施設情報の取得中にエラーが発生しました。');
      return [];
    }
  }, [selectedPrefecture, selectedCity]);

  const availableCities = useMemo(() => {
    try {
      if (!selectedPrefecture) return [];
      return cities[selectedPrefecture] || [];
    } catch (err) {
      setError('市区町村情報の取得中にエラーが発生しました。');
      return [];
    }
  }, [selectedPrefecture]);

  const handlePrefectureChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setError(null);
      setSelectedPrefecture(e.target.value ? Number(e.target.value) : '');
      setSelectedCity('');
    } catch (err) {
      setError('都道府県の選択中にエラーが発生しました。');
    }
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      setError(null);
      setSelectedCity(e.target.value ? Number(e.target.value) : '');
    } catch (err) {
      setError('市区町村の選択中にエラーが発生しました。');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <header>
        <Image
          src="/logo2.png"
          alt="デイサーチのロゴ"
          width={192}
          height={60}
          className="mx-auto mt-8 mb-4 w-48 h-auto"
          priority
        />
      </header>
      <main className="max-w-screen-md mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          放課後等デイサービス検索
        </h1>
        
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-center">{error}</p>
          </div>
        )}

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="max-w-md w-full my-4 mx-auto space-y-4">
            <div>
              <label 
                htmlFor="prefecture" 
                className="block text-sm font-medium text-gray-700 mb-2"
                id="prefecture-label"
              >
                都道府県
              </label>
              <select
                id="prefecture"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={selectedPrefecture}
                onChange={handlePrefectureChange}
                aria-labelledby="prefecture-label"
                aria-describedby="prefecture-description"
              >
                <option value="">選択してください</option>
                {prefectures.map((prefecture) => (
                  <option key={prefecture.id} value={prefecture.id}>
                    {prefecture.name}
                  </option>
                ))}
              </select>
              <p id="prefecture-description" className="sr-only">
                都道府県を選択してください
              </p>
            </div>

            <div>
              <label 
                htmlFor="city" 
                className="block text-sm font-medium text-gray-700 mb-2"
                id="city-label"
              >
                市区町村
              </label>
              <select
                id="city"
                className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                value={selectedCity}
                onChange={handleCityChange}
                disabled={!selectedPrefecture}
                aria-labelledby="city-label"
                aria-describedby="city-description"
              >
                <option value="">選択してください</option>
                {availableCities.map((city) => (
                  <option key={city.id} value={city.id}>
                    {city.name}
                  </option>
                ))}
              </select>
              <p id="city-description" className="sr-only">
                市区町村を選択してください
              </p>
            </div>
          </div>
        </div>

        {filteredFacilities.length === 0 && !error && (
          <div className="text-center text-gray-500 py-8">
            条件に一致する施設が見つかりませんでした。
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFacilities.map((facility) => (
            <div
              key={facility.id}
              className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border-b border-gray-200"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3">{facility.name}</h2>
              <div className="space-y-2 text-gray-600">
                <p className="flex items-start">
                  <span className="inline-block w-16 text-gray-500">住所：</span>
                  <span>{facility.address}</span>
                </p>
                <p className="flex items-center">
                  <span className="inline-block w-16 text-gray-500">電話：</span>
                  <a
                    href={`tel:${facility.tel}`}
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    aria-label={`${facility.name}に電話する`}
                  >
                    {facility.tel}
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="inline-block w-16 text-gray-500">Web：</span>
                  <a
                    href={facility.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline"
                    aria-label={`${facility.name}のWebサイトを新しいタブで開く`}
                  >
                    Webサイト
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
