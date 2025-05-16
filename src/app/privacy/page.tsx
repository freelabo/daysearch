import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プライバシーポリシー｜デイサーチ',
  description: 'デイサーチのプライバシーポリシーです。個人情報の取り扱いについてご確認いただけます。',
};

export default function PrivacyPage() {
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
            <li>プライバシーポリシー</li>
          </ol>
        </nav>
        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">プライバシーポリシー</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            デイサーチ（以下、「当サイト」といいます）は、ユーザーの個人情報保護の重要性を認識し、以下の方針に基づき個人情報を適切に取り扱います。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">1. 個人情報の取得と利用目的</h2>
          <p className="text-gray-600 mb-4">当サイトでは、以下の目的のために、ユーザーから氏名、メールアドレス、電話番号などの個人情報を取得する場合があります。</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>放課後等デイサービス施設への問い合わせ対応</li>
            <li>サービス向上のためのアンケート依頼・統計分析</li>
            <li>不正アクセス・不正利用の防止などのセキュリティ対策</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">2. 個人情報の管理</h2>
          <p className="text-gray-600 mb-8">
            取得した個人情報は、漏洩・改ざん・不正アクセスなどを防止するために、適切な管理措置を講じます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">3. 第三者提供の制限</h2>
          <p className="text-gray-600 mb-8">
            法令に基づく場合を除き、ユーザーの同意なく第三者に個人情報を提供することはありません。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">4. クッキー（Cookie）の使用について</h2>
          <p className="text-gray-600 mb-8">
            当サイトでは、利便性の向上やアクセス解析のためにCookieを使用することがあります。ユーザーはブラウザの設定によりCookieの受け取りを拒否できます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">5. プライバシーポリシーの変更</h2>
          <p className="text-gray-600 mb-8">
            当サイトは、法令の変更やサービス内容の変更に伴い、本ポリシーの内容を変更することがあります。変更後の内容は本ページに掲載し、掲載日から適用されます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">6. お問い合わせ先</h2>
          <p className="text-gray-600 mb-4">プライバシーに関するご質問・ご相談は、下記までご連絡ください。</p>
          <p className="text-gray-600">
            株式会社フリーラボ（<a href="https://freelabo.co.jp/contact/" rel="nofollow" className="text-blue-600 hover:text-blue-800 hover:underline">企業情報</a>）<br />
            〒224-0003 神奈川県横浜市都筑区中川中央1-30-1<br />
            電話番号：045-297-2093（代表）
          </p>
        </article>
      </main>

      <footer className="bg-white border-t mt-8">
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