export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm text-zinc-500 uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            信頼スコアの<br />作られ方
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: data inputs */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">静的情報</p>
              <div className="space-y-3">
                {["職歴・学歴", "収入・資産", "居住地・生活環境", "基本プロフィール"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-zinc-900 rounded-xl px-5 py-3 border border-zinc-800">
                    <span className="w-2 h-2 rounded-full bg-zinc-500 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase tracking-widest mb-4">動的情報（アプリ利用データ）</p>
              <div className="space-y-3">
                {[
                  "アプリ上の選択・行動パターン",
                  "継続率・反応傾向",
                  "価値観・優先順位の変化",
                  "コミュニケーションスタイル",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-zinc-900 rounded-xl px-5 py-3 border border-amber-400/20">
                    <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: score output */}
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 text-center">
            <div className="text-5xl font-bold text-white mb-2">87<span className="text-zinc-500 text-2xl">/100</span></div>
            <p className="text-zinc-400 text-sm mb-6">信頼スコア（対: Aさん）</p>
            <div className="space-y-3 text-left">
              {[
                { label: "価値観の一致度", val: 94 },
                { label: "ライフスタイル相性", val: 81 },
                { label: "コミュニケーション相性", val: 88 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs text-zinc-400 mb-1">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-1.5 bg-zinc-800 rounded-full">
                    <div
                      className="h-full bg-white rounded-full"
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-zinc-600 text-xs mt-6">
              ※スコアは見る人・文脈によって変化する相対評価です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
