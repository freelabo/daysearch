"use client";

import { useState } from "react";
import Image from "next/image";
import Footer from "./components/Footer";

export default function Home() {
  const [selectedPrefecture, setSelectedPrefecture] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

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
        <p className="text-sm text-gray-600 leading-relaxed mt-4 px-4 text-center">
          放課後等デイサービスは、発達に特性のある子どもたちを対象に、放課後や休日に療育や支援を行う福祉サービスです。<br />
          デイサーチでは、全国の事業所情報を地域・ニーズ別に検索できます。
        </p>
        <div className="w-full max-w-screen-md mx-auto mt-6">
          {Array.from({ length: 20 }).map((_, i) => (
            <article key={i} className="border rounded p-4 shadow-md mb-4 bg-white">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div className="flex-1 min-w-0">
                  <h2 className="text-lg font-semibold text-blue-600">
                    <a
                      href={`https://example.com/facility-${i + 1}`}
                      className="hover:underline"
                    >
                      未来キッズ渋谷センター
                    </a>
                  </h2>
                  <p className="text-sm text-gray-600">所在地：東京都渋谷区渋谷1-1-1</p>
                  <p className="text-sm text-gray-600">提供サービス：放課後等デイサービス</p>
                  <p className="text-sm text-gray-600">対象児童：発達障害・自閉症スペクトラムの小中学生</p>
                  <p className="text-sm text-gray-600">対応時間：平日 14:00〜18:00、土曜 10:00〜16:00</p>
                  <p className="text-sm text-gray-600">料金：月額 2,000円〜（世帯収入に応じて変動）</p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="tel:03-1234-5678"
                      className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                      電話する
                    </a>
                    <a
                      href={`https://example.com/facility-${i + 1}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                    >
                      公式ホームページ
                    </a>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4 md:mt-0 md:ml-4 md:justify-end md:max-w-xs">
                  {[
                    '通所介護・デイサービス',
                    '未経験可',
                    '社会保険完備',
                    '車通勤可',
                    'ボーナス・賞与あり',
                    '交通費支給',
                  ].map((label) => (
                    <span
                      key={label}
                      className="border border-blue-300 text-blue-700 text-xs rounded-full px-3 py-1 bg-white"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
} 