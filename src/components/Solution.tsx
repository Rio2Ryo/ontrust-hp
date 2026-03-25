const steps = [
  {
    num: "01",
    title: "静的情報を収集",
    desc: "職歴・学歴・所得・資格など、従来の信用評価情報を取り込みます。",
    color: "bg-trust-100 text-trust-700",
  },
  {
    num: "02",
    title: "動的情報を収集",
    desc: "会話ログ・活動パターン・SNS・アプリ連携で、リアルな行動データを取得。",
    color: "bg-purple-100 text-purple-700",
  },
  {
    num: "03",
    title: "相対スコアを算出",
    desc: "見る人の価値観・優先度に合わせてAIがスコアを計算。同じ人でも相手次第で変わります。",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    num: "04",
    title: "価値観マッチング",
    desc: "相性スコアに基づいて、採用・婚活・ビジネスパートナー探しを最適化。",
    color: "bg-emerald-100 text-emerald-700",
  },
];

export default function Solution() {
  return (
    <section id="solution" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Solution</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            onTrustの<span className="text-trust-600">相対評価</span>の仕組み
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            静的 × 動的情報をAIが統合し、見る人の価値観に合わせたスコアを算出します。
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${s.color} flex items-center justify-center font-bold text-sm`}>
                {s.num}
              </div>
              <div>
                <h3 className="font-semibold text-ink text-lg mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison diagram */}
        <div className="bg-ink rounded-3xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-center">
          {/* Absolute (old) */}
          <div className="text-center">
            <p className="text-gray-400 text-xs uppercase tracking-widest mb-4">従来の絶対評価</p>
            <div className="relative mx-auto w-32 h-32 mb-4">
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="#1e1b4b" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#374151" strokeWidth="8" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="#6b7280" strokeWidth="8"
                  strokeDasharray="251" strokeDashoffset="75" strokeLinecap="round"
                  transform="rotate(-90 60 60)" />
                <text x="60" y="55" textAnchor="middle" fill="white" fontSize="22" fontWeight="800">70</text>
                <text x="60" y="72" textAnchor="middle" fill="#9ca3af" fontSize="10">全員同じ</text>
              </svg>
            </div>
            <p className="text-gray-500 text-sm">誰が見ても同じスコア</p>
          </div>

          {/* Divider */}
          <div className="hidden md:flex items-center justify-center">
            <div className="w-px h-32 bg-white/10" />
          </div>

          {/* Relative (onTrust) — spans full in mobile */}
          <div className="md:col-start-2 md:row-start-1 text-center">
            <p className="text-trust-400 text-xs uppercase tracking-widest mb-4">onTrust の相対評価</p>
            <div className="flex justify-center gap-4 mb-4">
              {/* Score from A */}
              <div className="text-center">
                <svg viewBox="0 0 80 80" className="w-20 h-20">
                  <circle cx="40" cy="40" r="34" fill="#1e1b4b" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#312e81" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#4f46e5" strokeWidth="6"
                    strokeDasharray="214" strokeDashoffset="21" strokeLinecap="round"
                    transform="rotate(-90 40 40)" />
                  <text x="40" y="37" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">92</text>
                  <text x="40" y="50" textAnchor="middle" fill="#818cf8" fontSize="8">A→B</text>
                </svg>
              </div>
              {/* Score from C */}
              <div className="text-center">
                <svg viewBox="0 0 80 80" className="w-20 h-20">
                  <circle cx="40" cy="40" r="34" fill="#1e1b4b" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#4c0519" strokeWidth="6" />
                  <circle cx="40" cy="40" r="34" fill="none" stroke="#e11d48" strokeWidth="6"
                    strokeDasharray="214" strokeDashoffset="147" strokeLinecap="round"
                    transform="rotate(-90 40 40)" />
                  <text x="40" y="37" textAnchor="middle" fill="white" fontSize="16" fontWeight="800">31</text>
                  <text x="40" y="50" textAnchor="middle" fill="#fda4af" fontSize="8">C→B</text>
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-sm">見る人によってスコアが変わる</p>
          </div>
        </div>
      </div>
    </section>
  );
}
