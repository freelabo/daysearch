import type { Metadata } from 'next';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: 'お問い合わせ｜デイサーチ',
  description: '放課後等デイサービス比較サイト「デイサーチ」へのご質問・ご相談は、運営元である株式会社フリーラボのお問い合わせフォームより承っております。',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 max-w-3xl mx-auto px-4 pt-8 pb-2">
        <a href="/" className="flex items-center">
          <img src="/logo2.png" alt="デイサーチロゴ" className="h-10 w-auto" />
        </a>
      </div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-6">
          <nav className="text-sm mb-4" aria-label="パンくずリスト">
            <ol className="list-reset flex text-gray-600">
              <li><a href="/" className="hover:underline text-blue-600">ホーム</a></li>
              <li className="mx-2">/</li>
              <li>お問い合わせ</li>
            </ol>
          </nav>
          <h1 className="text-2xl font-bold text-gray-800 mb-6">お問い合わせ</h1>
          <p className="text-gray-700 mb-4">「デイサーチ」は、全国の放課後等デイサービスを比較できる情報サイトです。</p>
          <p className="text-gray-700 mb-4">
            サービスに関するご質問・取材依頼・掲載希望などは、以下の運営会社フォームよりお問い合わせください。
          </p>
          <p className="text-gray-700 mb-8">
            <a href="https://freelabo.co.jp/contact/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              株式会社フリーラボのお問い合わせフォームはこちら
            </a>
          </p>
        </article>
      </main>
      <Footer />
    </div>
  );
} 