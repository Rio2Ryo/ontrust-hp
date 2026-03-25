const apps = [
  {
    emoji: "💑",
    title: "恋愛マッチング",
    desc: "スペックではなく価値観・行動パターンで相性を判定。AI開発で従来の1/2以下のコスト・期間で提供。",
    tags: ["コンシューマー", "SDK"],
  },
  {
    emoji: "💼",
    title: "採用・転職",
    desc: "職歴だけでは見えない「働き方の相性」をスコア化。企業と個人の本当の適合度を可視化する。",
    tags: ["エンタープライズ", "API"],
  },
  {
    emoji: "🏠",
    title: "シェアハウス・ルームシェア",
    desc: "生活リズム・価値観・ライフスタイルの相性を事前に確認。入居後のトラブルを根本から減らす。",
    tags: ["プロパティテック", "API"],
  },
  {
    emoji: "🤝",
    title: "ビジネスパートナー",
    desc: "起業・副業のパートナー探しに。ビジョン・行動特性・信頼性をデータで確認してから組む。",
    tags: ["スタートアップ", "API"],
  },
  {
    emoji: "🎓",
    title: "メンタリング・コーチング",
    desc: "メンターとメンティーの相性をスコアで判定。学習スタイル・コミュニケーション傾向を考慮。",
    tags: ["EdTech", "SDK"],
  },
  {
    emoji: "🏘️",
    title: "地域コミュニティ",
    desc: "移住・コミュニティ参加の際に、地域の価値観・文化との相性を事前確認できる。",
    tags: ["プラットフォーム", "API"],
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Applications</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            AI駆動で展開する、
            <span className="text-trust-600">信頼スコアの活用領域</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            従来の<strong>半分以下のコスト・期間</strong>でカスタマイズアプリを開発。
            あらゆる「信頼が必要な場面」に信頼インフラを届ける。
          </p>
        </div>

        {/* AI Development highlight */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 bg-trust-50 border border-trust-200 rounded-full px-6 py-3">
            <svg className="w-5 h-5 text-trust-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-trust-700 text-sm font-semibold">
              AI活用で開発期間・コストを<span className="text-trust-600 font-bold">1/2以下</span>に
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-trust-300 hover:shadow-md transition-all"
            >
              <div className="text-3xl mb-4">{app.emoji}</div>
              <h3 className="font-semibold text-ink text-lg mb-2">{app.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{app.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-trust-600 bg-trust-50 border border-trust-100 rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
