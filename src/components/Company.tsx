const details = [
  { label: "会社名", value: "onTrust株式会社" },
  { label: "設立", value: "2024年（※要確認）" },
  { label: "代表取締役", value: "（代表者名）" },
  { label: "所在地", value: "東京都（※要確認）" },
  { label: "事業内容", value: "信頼スコアエンジンの開発・提供、AIアプリケーション開発" },
  { label: "特許", value: "特許取得済（信頼スコア算出方法）" },
  { label: "お問い合わせ", value: "hello@ontrust.ai" },
];

export default function Company() {
  return (
    <section id="company" className="py-24 px-6 bg-cream">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-trust-600 text-sm font-semibold tracking-widest uppercase mb-3">Company</p>
          <h2 className="font-serif-jp text-4xl font-bold text-ink">会社概要</h2>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">
          {details.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-start gap-2 px-8 py-5 ${
                i !== details.length - 1 ? "border-b border-gray-100" : ""
              }`}
            >
              <dt className="text-sm text-gray-500 sm:w-36 flex-shrink-0 font-medium">{item.label}</dt>
              <dd className="text-sm text-ink leading-relaxed">
                {item.label === "お問い合わせ" ? (
                  <a href={`mailto:${item.value}`} className="text-trust-600 hover:underline">
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
