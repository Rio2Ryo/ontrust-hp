export default function CTA() {
  return (
    <section id="partnership" className="py-24 bg-zinc-950 text-white px-6">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-zinc-500 uppercase tracking-widest mb-4">Partnership</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
          信頼インフラを、<br />
          一緒に構築しませんか。
        </h2>
        <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          onTrustは、信頼スコアを「使うもの」として提供するのではなく、
          パートナーとともに育てるエコシステムとして設計されています。
          <br /><br />
          正しい企業・組織と手を組み、信頼の新しい標準をともに作りたい。
        </p>

        <div className="grid sm:grid-cols-3 gap-6 mb-12 text-left">
          {[
            {
              title: "信頼スコア導入パートナー",
              desc: "自社サービスにonTrustの信頼スコアを組み込む。採用・マッチング・取引などの精度を高める。",
            },
            {
              title: "アプリ共同開発パートナー",
              desc: "onTrustのAI開発力と信頼スコアを活用し、新しいカテゴリのアプリを共同開発する。",
            },
            {
              title: "データ連携パートナー",
              desc: "既存のデータ資産をonTrustの信頼インフラと連携し、相互に価値を高める。",
            },
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 rounded-xl p-6 border border-zinc-800">
              <h3 className="font-semibold mb-2 text-sm">{item.title}</h3>
              <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <a
          href="mailto:hello@ontrust.jp"
          className="inline-block px-10 py-4 rounded-full bg-white text-black font-semibold text-lg hover:bg-zinc-200 transition-colors"
        >
          パートナーシップを相談する
        </a>
        <p className="text-zinc-600 text-sm mt-4">まずはカジュアルな相談から歓迎します</p>
      </div>
    </section>
  );
}
