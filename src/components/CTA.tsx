export default function CTA() {
  const technologies = [
    {
      emoji: "🤖",
      title: "AI駆動の高速開発",
      desc: "最新のAIツールを活用し、従来の半分以下のコスト・期間でカスタマイズアプリを量産。アイデアを素早く形にする開発力。",
    },
    {
      emoji: "📊",
      title: "行動データ収集・分析",
      desc: "アプリ上のあらゆるユーザー行動をリアルタイムに収集・構造化。信頼スコアの精度を支える行動データ基盤を構築。",
    },
    {
      emoji: "🔗",
      title: "スコアエンジン連携",
      desc: "各アプリは onTrust の信頼スコアエンジンとシームレスに連携。アプリが増えるほどスコアの精度も上がるフライホイール設計。",
    },
    {
      emoji: "🎨",
      title: "UX最適化",
      desc: "ユーザーが自然に行動データを提供したくなるUX設計。データ品質と利用継続率の両立が信頼スコアの質に直結する。",
    },
    {
      emoji: "🔒",
      title: "プライバシー・セキュリティ",
      desc: "データの取り扱いには最高水準のプライバシー保護を実装。ユーザーの信頼があってはじめて、信頼スコアは成立する。",
    },
    {
      emoji: "⚡",
      title: "スケーラブルなインフラ",
      desc: "アプリ数・ユーザー数が増えても安定稼働するクラウドインフラ。信頼インフラとして社会に根付くための耐久性を設計段階から実装。",
    },
  ];

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
            それを支えるのが、私たちの開発技術力だ。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-20">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-trust-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{tech.emoji}</div>
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
              href="mailto:hello@ontrust.ai"
              className="bg-trust-600 hover:bg-trust-500 text-white font-semibold px-10 py-4 rounded-full transition-colors"
            >
              パートナーシップを相談する
            </a>
            <a
              href="mailto:api@ontrust.ai"
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
