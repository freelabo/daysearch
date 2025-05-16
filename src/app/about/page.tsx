import type { Metadata } from 'next';
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: '運営方針｜デイサーチについて',
  description: '自閉症の子どもを育てる保護者が立ち上げた放課後等デイサービス比較サイト「デイサーチ」の運営方針をご紹介します。経験と専門性に基づき、安心と信頼のある情報をお届けします。',
};

export default function AboutPage() {
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
            <li>デイサーチについて</li>
          </ol>
        </nav>
        <article className="bg-white rounded-lg shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">運営方針｜デイサーチについて</h1>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">代表者からのメッセージ</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              放課後等デイサービスは、子どもたちにとって単なる預かりの場ではなく、「豊かな時間」を過ごすための大切な居場所です。私自身、自閉症スペクトラムの子どもを育てる保護者として、日々このサービスの価値と課題の両方に向き合っています。
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>子どもたちには、安心してのびのびと過ごせる場所を。</li>
              <li>保護者には、子育てと生活のバランスをとれる安心感を。</li>
              <li>そして、地域社会には、発達に特性のある子どもたちと自然に交わる機会を。</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              このような関わりを通して、社会の中にある差別や偏見が少しずつでも解けていくことを願っています。
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">このプロダクトを立ち上げた理由</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              デイサーチは、「自分自身が本当に必要としていたものを形にしたい」という強い思いから始まりました。
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>自閉症のある我が子に合った放課後等デイサービスを探す中で、情報の少なさ・偏り・比較のしづらさに直面したこと。</li>
              <li>特性に応じた支援のあり方や、施設ごとの特色をもっとわかりやすく届けられる仕組みが必要だと感じたこと。</li>
            </ul>
            <p className="text-gray-600 leading-relaxed">
              当事者である保護者の視点と、福祉・療育に関する専門的な知識を組み合わせ、必要とされる情報を正確かつ誠実に届ける。その使命感が、デイサーチの原点です。
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
} 