export default function Footer() {
  return (
    <footer className="bg-black text-zinc-600 px-6 py-12 border-t border-zinc-900">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-white font-semibold text-lg mb-1">onTrust</p>
          <p className="text-xs">行動が、信頼になる。</p>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <span className="px-3 py-1 rounded-full border border-amber-400/40 text-amber-400">特許取得済</span>
          <span>© 2025 onTrust. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
