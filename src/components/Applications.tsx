const apps = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: "マッチングアプリ",
    desc: "外見・条件ではなく、価値観レベルでの相性を算出。真剣度の高いマッチングを実現。",
    tags: ["コンシューマー", "SDK"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
    title: "採用・HR",
    desc: "候補者の価値観・行動特性を相対評価。採用ミスマッチを大幅に削減。",
    tags: ["エンタープライズ", "API"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title: "不動産・シェアハウス",
    desc: "ルームメイトや近隣との価値観相性をスクリーニング。トラブルを未然に防止。",
    tags: ["プロパティテック", "API"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "コミュニティ",
    desc: "メンバー同士の相性スコアで、心理的安全性の高いグループを設計。",
    tags: ["プラットフォーム", "SDK"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
    title: "ビジネスパートナー",
    desc: "共同創業者・投資家・取引先との相性をデータで可視化。信頼できる関係構築を支援。",
    tags: ["スタートアップ", "API"],
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
      </svg>
    ),
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
            AI駆動で展開する、
            <span className="text-trust-600">信頼スコアの活用領域</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            onTrustエンジンをベースに、用途別のカスタマイズアプリを
            <strong>通常の半分以下のコスト・期間</strong>で開発できます。
          </p>
        </div>

        {/* AI Development highlight */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-trust-50 border border-trust-200 rounded-full px-5 py-2.5">
            <svg className="w-4 h-4 text-trust-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
            </svg>
            <span className="text-trust-700 text-sm font-semibold">
              AI活用で開発期間・コストを<span className="text-trust-600 font-bold">1/2以下</span>に
            </span>
          </div>
        </div>

        {/* Flywheel note */}
        <div className="bg-trust-50 border border-trust-100 rounded-2xl p-5 mb-10 text-center">
          <p className="text-trust-800 text-sm leading-relaxed">
            <span className="font-bold">データフライホイール：</span>
            アプリが増えるほど利用データが蓄積され、信頼スコアの精度が向上。
            精度が上がるほど良いマッチングが生まれ、さらにアプリへの需要が高まる循環。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {apps.map((app, i) => (
            <div
              key={i}
              className="bg-cream border border-gray-100 rounded-2xl p-6 hover:border-trust-300 hover:shadow-md transition-all"
            >
              <div className="w-9 h-9 rounded-lg bg-trust-100 flex items-center justify-center text-trust-600 mb-4">
                {app.icon}
              </div>
              <h3 className="font-semibold text-ink text-base mb-2">{app.title}</h3>
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
