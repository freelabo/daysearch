import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.daysearch.jp'),
  title: "放課後等デイサービス検索 | DaySearch",
  description: "放課後等デイサービスの施設を簡単に検索できます。都道府県や市区町村から施設を探せます。",
  alternates: {
    canonical: "https://www.daysearch.jp/",
  },
  openGraph: {
    title: "放課後等デイサービス検索 | DaySearch",
    description: "放課後等デイサービスの施設を簡単に検索できます。都道府県や市区町村から施設を探せます。",
    url: "https://www.daysearch.jp/",
    siteName: "DaySearch",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "放課後等デイサービス検索 | DaySearch",
    description: "放課後等デイサービスの施設を簡単に検索できます。都道府県や市区町村から施設を探せます。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased font-sans bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}
