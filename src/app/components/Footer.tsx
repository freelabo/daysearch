export default function Footer() {
  return (
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
  );
} 