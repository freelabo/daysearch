import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '利用規約｜デイサーチ',
  description: 'デイサーチの利用規約ページです。ご利用の前に必ずお読みください。',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex items-center gap-4 max-w-3xl mx-auto px-4 pt-8 pb-2">
        <a href="/" className="flex items-center">
          <img src="/logo2.png" alt="デイサーチロゴ" className="h-10 w-auto" />
        </a>
      </div>
      <main className="max-w-3xl mx-auto px-4 py-8">
        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">利用規約</h1>
          <p className="text-gray-600 leading-relaxed mb-8">
            この利用規約（以下「本規約」といいます。）は、株式会社フリーラボ（以下「当社」といいます。）が運営する「デイサーチ」（以下「本サービス」といいます。）における利用条件を定めるものです。ユーザーは、本サービスの利用にあたり、本規約に同意したものとみなされます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第1条（適用）</h2>
          <p className="text-gray-600 mb-8">
            本規約は、ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第2条（禁止事項）</h2>
          <p className="text-gray-600 mb-4">ユーザーは、以下の行為をしてはなりません：</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>法令または公序良俗に違反する行為</li>
            <li>犯罪行為に関連する行為</li>
            <li>当社のサーバー・ネットワークに支障を与える行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第3条（本サービスの提供の停止等）</h2>
          <p className="text-gray-600 mb-4">当社は、以下のいずれかの事由があると判断した場合、ユーザーに事前に通知することなく、本サービスの全部または一部の提供を停止または中断することができます：</p>
          <ul className="list-disc pl-6 text-gray-600 mb-8">
            <li>システムの保守点検または更新を行う場合</li>
            <li>地震・火災・停電など不可抗力による場合</li>
            <li>その他、当社がサービス提供が困難と判断した場合</li>
          </ul>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第4条（著作権）</h2>
          <p className="text-gray-600 mb-8">
            本サービスに関する著作権は、すべて当社または正当な権利を有する者に帰属します。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第5条（利用制限および登録抹消）</h2>
          <p className="text-gray-600 mb-8">
            当社は、ユーザーが本規約に違反したと判断した場合、事前の通知なく、利用制限・登録抹消等の措置を講ずることができます。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第6条（免責事項）</h2>
          <p className="text-gray-600 mb-8">
            本サービスの内容の変更、中断、終了等によりユーザーに生じた損害について、当社は一切の責任を負いません。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第7条（サービス内容の変更）</h2>
          <p className="text-gray-600 mb-8">
            当社は、ユーザーに通知することなく、本サービスの内容を変更することがあります。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第8条（利用規約の変更）</h2>
          <p className="text-gray-600 mb-8">
            当社は、必要と判断した場合には、ユーザーに通知することなく、本規約を変更できるものとします。
          </p>

          <h2 className="text-xl font-semibold text-gray-800 mb-4">第9条（準拠法および管轄裁判所）</h2>
          <p className="text-gray-600 mb-8">
            本規約の解釈にあたっては、日本法を準拠法とし、訴訟は横浜地方裁判所を第一審の専属的合意管轄裁判所とします。
          </p>

          <div className="mt-8 pt-8 border-t">
            <p className="text-gray-600">制定日：2025年5月15日</p>
            <p className="text-gray-600">株式会社フリーラボ</p>
          </div>
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