import RelativeGraph from "./RelativeGraph";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 px-6 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-trust-50/40 via-cream to-cream pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-trust-100/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center md:text-left">
          <p className="inline-block text-xs font-semibold tracking-widest text-trust-600 uppercase mb-4 border border-trust-200 rounded-full px-4 py-1">
            Relative Intelligence
          </p>
          <h1 className="font-serif-jp text-5xl md:text-6xl font-bold text-ink leading-tight mb-6">
            信頼は、
            <br />
            <span className="text-trust-600">相対的</span>だ。
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            あなたにとっての"信頼できる人"は、
            <br className="hidden sm:block" />
            誰かの"合わない人"かもしれない。
            <br /><br />
            静的情報×動的情報を組み合わせた
            相対評価が、本当の相性を見つけます。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-trust-600 hover:bg-trust-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-center"
            >
              まず話してみる
            </a>
            <a
              href="#solution"
              className="border border-trust-300 hover:border-trust-500 text-trust-700 font-semibold px-8 py-4 rounded-full transition-colors text-center"
            >
              仕組みを見る
            </a>
          </div>
        </div>

        {/* Animated Graph */}
        <div className="flex justify-center">
          <div className="bg-ink/5 border border-ink/10 rounded-3xl p-6 w-full max-w-sm">
            <RelativeGraph />
            <p className="text-center text-xs text-gray-400 mt-4 font-sans">
              同じBさんでも、見る人によってスコアが変わる
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 mt-16 flex flex-col items-center gap-2 text-gray-400">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
      </div>
    </section>
  );
}
