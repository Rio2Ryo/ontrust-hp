const apps = [
  {
    emoji: "💼",
    title: "採用・HR",
    desc: "候補者の価値観・行動特性を相対評価。採用ミスマッチを大幅に削減。",
    tags: ["エンタープライズ", "API"],
  },
  {
    emoji: "💑",
    title: "マッチングアプリ",
    desc: "外見・条件ではなく、価値観レベルでの相性を算出。真剣度の高いマッチングを実現。",
    tags: ["コンシューマー", "SDK"],
  },
  {
    emoji: "🤝",
    title: "ビジネスパートナー",
    desc: "共同創業者・投資家・取引先との相性をデータで可視化。信頼できる関係構築を支援。",
    tags: ["スタートアップ", "API"],
  },
  {
    emoji: "🏘️",
    title: "コミュニティ",
    desc: "メンバー同士の相性スコアで、心理的安全性の高いグループを設計。",
    tags: ["プラットフォーム", "SDK"],
  },
  {
    emoji: "🏠",
    title: "不動産・シェアハウス",
    desc: "ルームメイトや近隣との価値観相性をスクリーニング。トラブルを未然に防止。",
    tags: ["プロパティテック", "API"],
  },
  {
    emoji: "🎓",
    title: "教育・メンタリング",
    desc: "指導者と学習者の相性を測定。最適なメンタリングペアを自動マッチング。",
    tags: ["EdTech", "API"],
  },
];

export default function Applications() {
  return (
    <section id="applications" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Applications</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            あらゆる場面で
            <span className="text-trust-600">活用できる</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            onTrustエンジンをベースに、用途別のカスタマイズアプリを
            <strong>通常の半分以下のコスト・期間</strong>で開発できます。
          </p>
        </div>

        {/* AI Development highlight */}
        <div className="flex justify-center mb-8">
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

        {/* Flywheel note */}
        <div className="bg-trust-50 border border-trust-100 rounded-2xl p-6 mb-12 text-center">
          <p className="text-trust-800 text-sm leading-relaxed">
            <span className="font-bold">データフライホイール：</span>
            アプリが増えるほど利用データが蓄積され、信頼スコアの精度が向上。
            精度が上がるほど良いマッチングが生まれ、さらにアプリへの需要が高まる——この循環がonTrustの本質的な強みです。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={i}
              className="bg-cream border border-gray-100 rounded-2xl p-6 hover:border-trust-300 hover:shadow-md transition-all"
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
