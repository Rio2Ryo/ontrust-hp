export default function Applications() {
  const apps = [
    {
      emoji: "💑",
      title: "恋愛マッチング",
      desc: "スペックではなく価値観・行動パターンで相性を判定。AI開発で従来の1/2以下のコスト・期間で提供。",
    },
    {
      emoji: "💼",
      title: "採用・転職",
      desc: "職歴だけでは見えない「働き方の相性」をスコア化。企業と個人の本当の適合度を可視化する。",
    },
    {
      emoji: "🏠",
      title: "シェアハウス・ルームシェア",
      desc: "生活リズム・価値観・ライフスタイルの相性を事前に確認。入居後のトラブルを根本から減らす。",
    },
    {
      emoji: "🤝",
      title: "ビジネスパートナー",
      desc: "起業・副業のパートナー探しに。ビジョン・行動特性・信頼性をデータで確認してから組む。",
    },
    {
      emoji: "🎓",
      title: "メンタリング・コーチング",
      desc: "メンターとメンティーの相性をスコアで判定。学習スタイル・コミュニケーション傾向を考慮。",
    },
    {
      emoji: "🏘️",
      title: "地域コミュニティ",
      desc: "移住・コミュニティ参加の際に、地域の価値観・文化との相性を事前確認できる。",
    },
  ];

  return (
    <section className="py-24 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-zinc-500 uppercase tracking-widest mb-3">Applications</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            AI駆動で展開する、<br />信頼スコアの活用領域
          </h2>
          <p className="text-zinc-400 mt-4 max-w-xl mx-auto">
            従来の半分以下のコスト・期間でカスタマイズアプリを開発。<br />
            あらゆる「信頼が必要な場面」に信頼インフラを届ける。
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {apps.map((app, i) => (
            <div
              key={i}
              className="bg-zinc-950 rounded-2xl p-7 border border-zinc-800 hover:border-zinc-600 transition-colors"
            >
              <div className="text-3xl mb-4">{app.emoji}</div>
              <h3 className="text-base font-semibold mb-2">{app.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
