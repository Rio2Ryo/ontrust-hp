import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "onTrust — Relative Intelligence",
  description:
    "静的情報×動的情報による相対的信頼評価。人と人の価値観レベルでの相性マッチングを実現するプラットフォーム。",
  openGraph: {
    title: "onTrust — Relative Intelligence",
    description: "信頼は、相対的だ。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
