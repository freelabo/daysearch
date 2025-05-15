import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '企業情報｜デイサーチ',
  description: '放課後等デイサービス比較サイト「デイサーチ」の運営会社情報をご案内します。運営元や所在地、お問い合わせ窓口をご確認いただけます。',
};

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 max-w-3xl mx-auto px-4 pt-8 pb-2">
        <a href="/" className="flex items-center gap-2">
          <img src="/logo-daysearch.svg" alt="デイサーチロゴ" className="h-10 w-auto" />
          <span className="text-xl font-bold text-gray-800">デイサーチ</span>
        </a>
      </div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">企業情報</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            デイサーチは、株式会社フリーラボが運営しています。<br />
            私たちは、放課後等デイサービスを探す保護者や支援者の方々が、信頼できる情報に基づいて施設を比較・検討できる環境づくりを目指しています。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">運営会社</h2>
          <p className="text-gray-600 mb-8">
            株式会社フリーラボ<br />
            代表取締役　西川 涼
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">所在地</h2>
          <p className="text-gray-600 mb-8">
            〒224-0003<br />
            神奈川県横浜市都筑区中川中央1-30-1
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">代表電話番号</h2>
          <p className="text-gray-600 mb-8">045-297-2093</p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">お問い合わせ窓口</h2>
          <p className="text-gray-600">
            <a
              href="https://freelabo.co.jp/contact/"
              rel="nofollow"
              className="text-blue-600 hover:text-blue-800 hover:underline"
            >
              https://freelabo.co.jp/contact/
            </a>
          </p>
        </article>
      </main>
    </div>
  );
} 