export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/85 backdrop-blur-sm border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          <a href="#top" className="font-serif-jp font-bold text-lg sm:text-xl text-trust-700 tracking-tight">
            on<span className="text-ink">Trust</span>
          </a>
          <a
            href="#inquiry"
            className="text-sm font-semibold text-white bg-trust-600 hover:bg-trust-700 px-5 py-2.5 rounded-full transition-colors"
          >
            Contact
          </a>
        </div>

        <nav className="flex items-center gap-5 sm:gap-8 text-xs sm:text-sm font-medium text-gray-600 mt-3 overflow-x-auto whitespace-nowrap">
          <a href="#problem" className="hover:text-trust-600 transition-colors">Problem</a>
          <a href="#solution" className="hover:text-trust-600 transition-colors">Solution</a>
          <a href="#applications" className="hover:text-trust-600 transition-colors">Applications</a>
          <a href="#contact" className="hover:text-trust-600 transition-colors">Technology</a>
          <a href="#company" className="hover:text-trust-600 transition-colors">Company</a>
        </nav>
      </div>
    </header>
  );
}
