export default function HowItWorks() {
  return (
    <section id="solution" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">How It Works</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink mb-5">
            信頼スコアの<span className="text-trust-600">作られ方</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            静的情報 × 動的情報（AIアプリ利用データ）をAIが統合し、
            見る人の価値観に合わせた相対スコアを算出します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: data inputs */}
          <div className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4 font-semibold">静的情報</p>
              <div className="space-y-3">
                {["職歴・学歴", "収入・資産", "居住地・生活環境", "基本プロフィール"].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-cream rounded-xl px-5 py-3 border border-gray-100">
                    <span className="w-2 h-2 rounded-full bg-gray-400 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-trust-600 uppercase tracking-widest mb-4 font-semibold">動的情報（AIアプリ利用データ）</p>
              <div className="space-y-3">
                {[
                  "アプリ上の選択・行動パターン",
                  "継続率・反応傾向",
                  "価値観・優先順位の変化",
                  "コミュニケーションスタイル",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-trust-50 rounded-xl px-5 py-3 border border-trust-100">
                    <span className="w-2 h-2 rounded-full bg-trust-500 flex-shrink-0" />
                    <span className="text-trust-800 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: score output */}
          <div className="bg-ink rounded-2xl p-8 border border-white/10 text-center">
            <div className="text-5xl font-bold text-white mb-2">87<span className="text-gray-500 text-2xl">/100</span></div>
            <p className="text-gray-400 text-sm mb-6">信頼スコア（対: Aさん）</p>
            <div className="space-y-3 text-left">
              {[
                { label: "価値観の一致度", val: 94 },
                { label: "ライフスタイル相性", val: 81 },
                { label: "コミュニケーション相性", val: 88 },
              ].map((item) => (
                <div key={item.label}>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>{item.label}</span>
                    <span>{item.val}</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full">
                    <div
                      className="h-full bg-trust-500 rounded-full"
                      style={{ width: `${item.val}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-6">
              ※スコアは見る人・文脈によって変化する相対評価です
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
