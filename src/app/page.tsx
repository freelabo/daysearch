"use client";

import { useState } from "react";
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
            </article>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-8 w-full">
        <div className="max-w-3xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">デイサーチ</h2>
              <p className="text-gray-600">
                放課後等デイサービスを探すならデイサーチ。
                施設の特徴、料金、口コミを比較して、お子様にぴったりの施設を見つけましょう。
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">運営会社</h2>
              <p className="text-gray-600">
                株式会社フリーラボ<br />
                〒224-0003<br />
                神奈川県横浜市都筑区中川中央1-30-1
              </p>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">リンク</h2>
              <ul className="space-y-2">
                <li>
                  <a href="/company" className="text-blue-600 hover:text-blue-800 hover:underline">
                    企業情報
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-blue-600 hover:text-blue-800 hover:underline">
                    プライバシーポリシー
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-blue-600 hover:text-blue-800 hover:underline">
                    利用規約
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} デイサーチ All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 