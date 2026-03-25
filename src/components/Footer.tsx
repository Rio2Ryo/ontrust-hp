export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-12 px-6 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-serif-jp font-bold text-trust-400 text-xl mb-2">
              on<span className="text-white">Trust</span>
            </p>
            <p className="text-gray-500 text-sm leading-relaxed">
              行動が、信頼になる。<br />
              AIアプリが積み重ねる行動データで、<br />
              本当の相性を解き明かす。
            </p>
            <div className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-400/40 text-amber-400 text-xs">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              特許取得済
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Navigation</p>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                { label: "Problem", href: "#problem" },
                { label: "Solution", href: "#solution" },
                { label: "Applications", href: "#applications" },
                { label: "Technology", href: "#contact" },
                { label: "Partnership", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Contact</p>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:info@ontrust.co.jp" className="hover:text-white transition-colors flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  info@ontrust.co.jp
                </a>
              </li>

            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-gray-600">
          <span>© 2025 onTrust Inc. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">プライバシーポリシー</a>
            <a href="#" className="hover:text-gray-400 transition-colors">利用規約</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
