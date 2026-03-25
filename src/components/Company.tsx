const details = [
  { label: "会社名", value: "株式会社onTrust" },
  { label: "代表取締役", value: "松浦　亮介" },
  { label: "所在地", value: "〒550-0014　大阪府大阪市西区北堀江１丁目１番２７号８Ｈ" },
  { label: "事業内容", value: "信頼スコアエンジンの開発・提供、AIアプリケーション開発" },
  { label: "特許", value: "特許取得済（信頼スコア算出方法）" },
  { label: "お問い合わせ", value: "info@ontrust.co.jp" },
];

export default function Company() {
  return (
    <section id="company" className="py-24 px-6 bg-ink text-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-trust-400 text-sm font-semibold tracking-widest uppercase mb-3">Company</p>
          <h2 className="font-serif-jp text-4xl font-bold text-white">会社概要</h2>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
          {details.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col sm:flex-row sm:items-start gap-2 px-8 py-5 ${
                i !== details.length - 1 ? "border-b border-white/10" : ""
              }`}
            >
              <dt className="text-sm text-gray-400 sm:w-36 flex-shrink-0 font-medium">{item.label}</dt>
              <dd className="text-sm text-white leading-relaxed">
                {item.label === "お問い合わせ" ? (
                  <a href={`mailto:${item.value}`} className="text-trust-300 hover:underline">
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
