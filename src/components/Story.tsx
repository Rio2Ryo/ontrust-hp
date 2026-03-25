const steps = [
  {
    num: "01",
    title: "AI駆動で大量のアプリを開発",
    desc: "onTrustはAIを活用し、従来の半分以下のコスト・期間で多様なカスタマイズアプリを量産する。恋愛・転職・副業・シェアハウス——あらゆる「信頼が必要な場面」にアプリを提供。",
  },
  {
    num: "02",
    title: "利用データが信頼スコアに蓄積",
    desc: "ユーザーのアプリ利用行動——選択・反応・継続・離脱——が継続的にデータ化される。静的なプロフィール情報では見えない「リアルな行動パターン」がスコアを形成する。",
  },
  {
    num: "03",
    title: "データフライホイールで精度向上",
    desc: "アプリが増えるほど、データが蓄積され、スコアの精度が上がる。精度が上がると、よりよいマッチングが生まれ、さらにアプリへの需要が高まる。この循環がonTrustの本質的な競争優位だ。",
  },
];

export default function Story() {
  return (
    <section id="story" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Our Story</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            アプリが育てる、
            <span className="text-trust-600">信頼のインフラ。</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            onTrustは信頼スコアを「作る」のではなく、行動データから「育てる」。
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-6 items-start bg-white rounded-2xl p-7 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-trust-50 border border-trust-200 flex items-center justify-center">
                <span className="text-trust-600 text-sm font-bold font-sans">{step.num}</span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-semibold text-ink text-xl mb-2">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flywheel visual */}
        <div className="rounded-2xl bg-ink border border-white/10 p-10 text-center">
          <p className="text-trust-400 text-sm mb-8 uppercase tracking-widest font-semibold">Data Flywheel</p>
          <div className="flex flex-wrap justify-center items-center gap-3 text-sm">
            {[
              "AI大量アプリ開発",
              "→",
              "利用データ蓄積",
              "→",
              "スコア精度向上",
              "→",
              "より良いマッチング",
              "→",
              "アプリ需要増加",
              "→",
              "AI大量アプリ開発…",
            ].map((item, i) => (
              <span
                key={i}
                className={
                  item === "→"
                    ? "text-trust-600 font-bold text-lg"
                    : "px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-12">
          {[
            { num: "1/2", label: "通常比の開発コスト・期間" },
            { num: "∞", label: "カスタマイズ可能なアプリ数" },
            { num: "2軸", label: "静的 × 動的データ評価" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-serif-jp text-4xl font-bold text-trust-600 mb-2">{m.num}</p>
              <p className="text-gray-500 text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
