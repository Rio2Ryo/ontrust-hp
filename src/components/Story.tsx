export default function Story() {
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

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-zinc-500 uppercase tracking-widest mb-3">Our Story</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            アプリが育てる、<br />信頼のインフラ。
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            onTrustは信頼スコアを「作る」のではなく、行動データから「育てる」。
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
                <span className="text-zinc-400 text-xs font-mono">{step.num}</span>
              </div>
              <div className="flex-1 pt-3">
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Flywheel visual */}
        <div className="mt-20 rounded-2xl bg-zinc-950 border border-zinc-800 p-10 text-center">
          <p className="text-zinc-500 text-sm mb-8 uppercase tracking-widest">Data Flywheel</p>
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
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
                    ? "text-zinc-600"
                    : "px-4 py-2 rounded-full bg-zinc-900 border border-zinc-700 text-white font-medium"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
