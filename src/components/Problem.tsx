const problems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
      </svg>
    ),
    title: "スペックだけでは分からない",
    description: "学歴・職歴・年収——既存の評価軸は静的な情報に偏りすぎている。行動や価値観は見えてこない。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "自己申告の限界",
    description: "プロフィールは「自分をよく見せるもの」。本当の人柄や信頼性は、実際の行動の積み重ねにしか現れない。",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    title: "絶対評価は意味を持たない",
    description: "同じスコアでも、見る人・文脈・関係性によって意味は変わる。信頼は、本来相対的なものだ。",
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
              <div className="w-10 h-10 rounded-xl bg-trust-600/20 border border-trust-500/30 flex items-center justify-center text-trust-400 mb-5">
                {p.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
