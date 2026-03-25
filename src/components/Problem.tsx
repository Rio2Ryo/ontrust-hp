const problems = [
  {
    icon: "📋",
    title: "スペックだけでは分からない",
    description:
      "学歴・職歴・年収——既存の評価軸は静的な情報に偏りすぎている。行動や価値観は見えてこない。",
  },
  {
    icon: "🎭",
    title: "自己申告の限界",
    description:
      "プロフィールは「自分をよく見せるもの」。本当の人柄や信頼性は、実際の行動の積み重ねにしか現れない。",
  },
  {
    icon: "🔢",
    title: "絶対評価は意味を持たない",
    description:
      "同じスコアでも、見る人・文脈・関係性によって意味は変わる。信頼は、本来相対的なものだ。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-3">Problem</p>
          <h2 className="font-serif-jp text-4xl font-bold mb-5">
            今の信頼評価に、
            <span className="text-trust-400">何かが足りない。</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            採用・婚活・ビジネスマッチング。どのシーンでも、同じ課題が繰り返されている。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-trust-500/40 transition-colors"
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
