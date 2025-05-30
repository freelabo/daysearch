import type { Metadata } from 'next';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: '企業情報｜デイサーチ',
  description: 'デイサーチを運営する株式会社フリーラボの企業情報をご紹介します。放課後等デイサービスを探す保護者や支援者の方々が、信頼できる情報に基づいて施設を比較・検討できる環境づくりを目指しています。',
};

export default function CompanyPage() {
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
            <li>企業情報</li>
          </ol>
        </nav>
        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">企業情報</h1>
          <p className="text-gray-600 leading-relaxed mb-6">
            デイサーチは、株式会社フリーラボが運営しています。<br />
            私たちは、放課後等デイサービスを探す保護者や支援者の方々が、信頼できる情報に基づいて施設を比較・検討できる環境づくりを目指しています。
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">運営会社</h2>
            <p className="text-gray-600">
              株式会社フリーラボ<br />
              代表取締役 西川 涼
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">所在地</h2>
            <p className="text-gray-600">
              〒224-0003<br />
              神奈川県横浜市都筑区中川中央1-30-1
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">お問い合わせ窓口</h2>
            <p className="text-gray-600">
              <a href="https://freelabo.co.jp/contact/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                https://freelabo.co.jp/contact/
              </a>
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
} 