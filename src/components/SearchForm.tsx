'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';

// 都道府県のリスト
const PREFECTURES = [
  '東京都', '神奈川県', '千葉県', '埼玉県', '茨城県', '栃木県', '群馬県',
  '山梨県', '新潟県', '長野県', '富山県', '石川県', '福井県', '静岡県',
  '愛知県', '三重県', '滋賀県', '京都府', '大阪府', '兵庫県', '奈良県',
  '和歌山県', '鳥取県', '島根県', '岡山県', '広島県', '山口県', '徳島県',
  '香川県', '愛媛県', '高知県', '福岡県', '佐賀県', '長崎県', '熊本県',
  '大分県', '宮崎県', '鹿児島県', '沖縄県'
];

// 対象年齢のリスト
const AGE_RANGES = [
  '未就学児（3-6歳）',
  '小学生（6-12歳）',
  '中学生（12-15歳）',
  '高校生（15-18歳）',
  '全年齢対象'
];

// プログラムのリスト
const PROGRAMS = [
  '学習支援',
  '運動療育',
  '音楽療法',
  'アートセラピー',
  'SST（ソーシャルスキルトレーニング）',
  '感覚統合療法',
  '作業療法',
  '言語療法',
  '余暇支援',
  '生活スキル訓練'
];

// フィルター項目のリスト
const FILTERS = [
  { id: 'dayService', label: '通所介護・デイサービス' },
  { id: 'noExperience', label: '未経験可' },
  { id: 'socialInsurance', label: '社会保険完備' },
  { id: 'carCommute', label: '車通勤可' },
  { id: 'bonus', label: 'ボーナス・賞与あり' },
  { id: 'transportation', label: '交通費支給' }
];

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // フォームの状態管理
  const [formData, setFormData] = useState({
    q: searchParams.get('q') || '',
    prefecture: searchParams.get('prefecture') || '',
    city: searchParams.get('city') || '',
    ageRange: searchParams.get('ageRange') || '',
    program: searchParams.get('program') || '',
    filters: searchParams.getAll('filters') || []
  });

  // フォームの入力値が変更されたときの処理
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // フィルターのチェックボックスが変更されたときの処理
  const handleFilterChange = (filterId: string) => {
    setFormData(prev => {
      const currentFilters = prev.filters;
      const newFilters = currentFilters.includes(filterId)
        ? currentFilters.filter(id => id !== filterId)
        : [...currentFilters, filterId];
      
      return {
        ...prev,
        filters: newFilters
      };
    });
  };

  // 検索実行時の処理
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // 検索パラメータの構築
    const params = new URLSearchParams();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === 'filters') {
        // フィルターは配列なので、それぞれの値を追加
        value.forEach(filter => {
          params.append('filters', filter);
        });
      } else if (value) {
        params.append(key, value);
      }
    });

    // 検索ページへ遷移
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="q" className="block text-sm font-medium text-gray-700 mb-1">
          キーワード検索
        </label>
        <input
          type="text"
          id="q"
          name="q"
          value={formData.q}
          onChange={handleChange}
          placeholder="施設名や特徴を入力"
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="prefecture" className="block text-sm font-medium text-gray-700 mb-1">
            都道府県
          </label>
          <select
            id="prefecture"
            name="prefecture"
            value={formData.prefecture}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">選択してください</option>
            {PREFECTURES.map(prefecture => (
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
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="例：横浜市"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="ageRange" className="block text-sm font-medium text-gray-700 mb-1">
            対象年齢
          </label>
          <select
            id="ageRange"
            name="ageRange"
            value={formData.ageRange}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">選択してください</option>
            {AGE_RANGES.map(ageRange => (
              <option key={ageRange} value={ageRange}>
                {ageRange}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="program" className="block text-sm font-medium text-gray-700 mb-1">
            プログラム
          </label>
          <select
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">選択してください</option>
            {PROGRAMS.map(program => (
              <option key={program} value={program}>
                {program}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* フィルター項目 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          フィルター
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {FILTERS.map(filter => (
            <label key={filter.id} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.filters.includes(filter.id)}
                onChange={() => handleFilterChange(filter.id)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">{filter.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          検索する
        </button>
      </div>
    </form>
  );
} 