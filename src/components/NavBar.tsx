export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-sm border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-serif-jp font-bold text-lg text-trust-700 tracking-tight">
          on<span className="text-ink">Trust</span>
        </span>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#problem" className="hover:text-trust-600 transition-colors">課題</a>
          <a href="#solution" className="hover:text-trust-600 transition-colors">仕組み</a>
          <a href="#applications" className="hover:text-trust-600 transition-colors">活用例</a>
        </nav>
        <a
          href="#contact"
          className="text-sm font-semibold text-white bg-trust-600 hover:bg-trust-700 px-5 py-2 rounded-full transition-colors"
        >
          お問い合わせ
        </a>
      </div>
    </header>
  );
}
