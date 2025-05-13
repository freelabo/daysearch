"use client";

import { useState, useMemo } from "react";
import Image from "next/image";

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
      <main className="w-full max-w-md mx-auto flex-1 flex flex-col items-center p-4">
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
              <h2 className="text-lg font-semibold text-blue-600">未来キッズ渋谷センター</h2>
              <p className="text-sm text-gray-600">所在地：東京都渋谷区渋谷1-1-1</p>
              <p className="text-sm text-gray-600">提供サービス：放課後等デイサービス</p>
              <p className="text-sm text-gray-600">対象児童：発達障害・自閉症スペクトラムの小中学生</p>
              <p className="text-sm text-gray-600">対応時間：平日 14:00〜18:00、土曜 10:00〜16:00</p>
              <p className="text-sm text-gray-600">料金：月額 2,000円〜（世帯収入に応じて変動）</p>
              <a
                href={`https://example.com/facility-${i + 1}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
                aria-label={`未来キッズ渋谷センターのWebサイトを新しいタブで開く`}
              >
                Webサイト
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
} 