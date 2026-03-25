export default function CTA() {
  return (
    <section id="contact" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-4">Contact</p>
        <h2 className="font-serif-jp text-4xl md:text-5xl font-bold mb-6">
          まず、話してみませんか。
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
          onTrustエンジンを使って、あなたのサービスに相対的信頼評価を組み込みませんか。
          ご相談はお気軽に。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="mailto:hello@ontrust.ai"
            className="bg-trust-600 hover:bg-trust-500 text-white font-semibold px-10 py-4 rounded-full transition-colors"
          >
            まず話してみる
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
            { num: "∞", label: "カスタマイズの自由度" },
            { num: "2軸", label: "静的 × 動的評価" },
          ].map((m) => (
            <div key={m.label} className="text-center">
              <p className="font-serif-jp text-3xl font-bold text-trust-400 mb-1">{m.num}</p>
              <p className="text-gray-500 text-xs">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
