export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-4">Partnership</p>
        <h2 className="font-serif-jp text-4xl md:text-5xl font-bold mb-6">
          信頼インフラを、<br />一緒に構築しませんか。
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          onTrustは、信頼スコアを「使うもの」として提供するのではなく、
          パートナーとともに育てるエコシステムとして設計されています。
          <br /><br />
          正しい企業・組織と手を組み、信頼の新しい標準をともに作りたい。
        </p>

        {/* Partnership types */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12 text-left">
          {[
            {
              title: "信頼スコア導入",
              desc: "自社サービスにonTrustの相対評価を組み込む。採用・マッチングの精度を高める。",
            },
            {
              title: "アプリ共同開発",
              desc: "onTrustのAI開発力と信頼スコアを活用し、新カテゴリのアプリを共同開発する。",
            },
            {
              title: "データ連携",
              desc: "既存のデータ資産とonTrustの信頼インフラを連携し、相互に価値を高める。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h3 className="font-semibold mb-2 text-sm text-trust-300">{item.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:hello@ontrust.ai"
            className="bg-trust-600 hover:bg-trust-500 text-white font-semibold px-10 py-4 rounded-full transition-colors"
          >
            パートナーシップを相談する
          </a>
          <a
            href="mailto:api@ontrust.ai"
            className="border border-white/20 hover:border-trust-400 text-white font-semibold px-10 py-4 rounded-full transition-colors"
          >
            API・開発のお問い合わせ
          </a>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
          {[
            { num: "1/2", label: "開発コスト・期間" },
            { num: "特許取得済", label: "信頼スコアの仕組み" },
            { num: "2軸", label: "静的 × 動的評価" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-serif-jp text-2xl font-bold text-trust-400 mb-1">{m.num}</p>
              <p className="text-gray-500 text-xs">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
