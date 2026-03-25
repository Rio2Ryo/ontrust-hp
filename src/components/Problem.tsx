const problems = [
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#fee2e2" />
        <text x="20" y="26" textAnchor="middle" fontSize="18">📄</text>
      </svg>
    ),
    title: "履歴書・年収だけで判断される",
    description:
      "従来の採用・マッチングは静的な情報だけが頼り。実際の価値観・行動パターンは見えないまま。",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#fef9c3" />
        <text x="20" y="26" textAnchor="middle" fontSize="18">⚖️</text>
      </svg>
    ),
    title: "全員に同じスコアが使われる",
    description:
      "既存の信用スコアは「絶対評価」。でも、相性とは本来、見る人・文脈によって変わるもの。",
  },
  {
    icon: (
      <svg viewBox="0 0 40 40" className="w-8 h-8">
        <circle cx="20" cy="20" r="18" fill="#dcfce7" />
        <text x="20" y="26" textAnchor="middle" fontSize="18">🔒</text>
      </svg>
    ),
    title: "データが孤立している",
    description:
      "会話・活動・SNS上の行動など、リアルな姿を示す動的データが評価に組み込まれていない。",
  },
];

export default function Problem() {
  return (
    <section id="problem" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-3">Problem</p>
          <h2 className="font-serif-jp text-4xl font-bold mb-5">
            既存の信頼評価には
            <span className="text-trust-400">限界</span>がある
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
              <div className="mb-5">{p.icon}</div>
              <h3 className="font-semibold text-lg mb-3">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>

        {/* Visual divider */}
        <div className="mt-16 text-center">
          <p className="text-trust-400 font-serif-jp text-2xl font-bold">
            「なぜ会ってみると、全然違った？」
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            それは、あなたと相手の価値観レベルでの相性が測れていなかったから。
          </p>
        </div>
      </div>
    </section>
  );
}
