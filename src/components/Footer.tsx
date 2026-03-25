export default function Footer() {
  return (
    <footer className="bg-ink border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <p className="font-serif-jp font-bold text-trust-400 text-lg">
            on<span className="text-white">Trust</span>
          </p>
          <p className="text-gray-600 text-xs mt-1">行動が、信頼になる。</p>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-600">
          <span className="px-3 py-1 rounded-full border border-amber-400/40 text-amber-400 text-xs">特許取得済</span>
          <span>© 2025 onTrust. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
