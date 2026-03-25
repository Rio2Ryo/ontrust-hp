export default function Problem() {
  const problems = [
    {
      icon: "📋",
      title: "スペックだけでは分からない",
      desc: "学歴・職歴・年収——既存の評価軸は静的な情報に偏りすぎている。行動や価値観は見えてこない。",
    },
    {
      icon: "🎭",
      title: "自己申告の限界",
      desc: "プロフィールは「自分をよく見せるもの」。本当の人柄や信頼性は、実際の行動の積み重ねにしか現れない。",
    },
    {
      icon: "🔢",
      title: "絶対評価は意味を持たない",
      desc: "同じスコアでも、見る人・文脈・関係性によって意味は変わる。信頼は相対的なものだ。",
    },
  ];

  return (
    <section className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-zinc-500 uppercase tracking-widest mb-3">Problem</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            今の信頼評価に、<br />何かが足りない。
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div key={i} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{p.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
