const technologies = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "AI駆動の高速開発",
    desc: "最新のAIツールを活用し、従来の半分以下のコスト・期間でカスタマイズアプリを量産。アイデアを素早く形にする開発力。",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "行動データ収集・分析",
    desc: "アプリ上のあらゆるユーザー行動をリアルタイムに収集・構造化。信頼スコアの精度を支える行動データ基盤を構築。",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
    title: "スコアエンジン連携",
    desc: "各アプリはonTrustの信頼スコアエンジンとシームレスに連携。アプリが増えるほどスコアの精度も上がるフライホイール設計。",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "UX最適化",
    desc: "ユーザーが自然に行動データを提供したくなるUX設計。データ品質と利用継続率の両立が信頼スコアの質に直結する。",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "プライバシー・セキュリティ",
    desc: "データの取り扱いには最高水準のプライバシー保護を実装。ユーザーの信頼があってはじめて、信頼スコアは成立する。",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "スケーラブルなインフラ",
    desc: "アプリ数・ユーザー数が増えても安定稼働するクラウドインフラ。信頼インフラとして社会に根付くための耐久性を設計から実装。",
  },
];

export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Technology</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            信頼スコアを支える、<br />
            <span className="text-trust-600">アプリ開発技術</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            onTrustの信頼スコアは、AIで量産されるアプリ群から生まれる行動データによって育てられる。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-20">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-trust-300 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-trust-100 flex items-center justify-center text-trust-600 mb-4">
                {tech.icon}
              </div>
              <h3 className="font-semibold text-ink text-base mb-2">{tech.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="bg-ink rounded-3xl p-10 md:p-16 text-center text-white">
          <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-4">Partnership</p>
          <h3 className="font-serif-jp text-3xl md:text-4xl font-bold mb-5">
            信頼インフラを、<br />一緒に構築しませんか。
          </h3>
          <p className="text-gray-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            正しい企業・組織と手を組み、信頼の新しい標準をともに作りたい。
            まずはカジュアルな相談から歓迎します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ontrust.co.jp"
              className="bg-trust-600 hover:bg-trust-500 text-white font-semibold px-10 py-4 rounded-full transition-colors"
            >
              パートナーシップを相談する
            </a>
            <a
              href="mailto:info@ontrust.co.jp"
              className="border border-white/20 hover:border-trust-400 text-white font-semibold px-10 py-4 rounded-full transition-colors"
            >
              技術・API のお問い合わせ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
