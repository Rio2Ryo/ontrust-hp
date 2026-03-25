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
          {/* Patent badge */}
          <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full border border-amber-400/60 bg-amber-50 text-amber-700 text-xs font-semibold tracking-wide">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            特許取得済
          </div>
          <p className="inline-block text-xs font-semibold tracking-widest text-trust-600 uppercase mb-4 border border-trust-200 rounded-full px-4 py-1 ml-2">
            Relative Intelligence
          </p>
          <h1 className="font-serif-jp text-4xl md:text-5xl font-bold text-ink leading-tight mb-4">
            嘘をつかないのは、<br />
            <span className="text-trust-600">行動だけだ。</span>
          </h1>
          <p className="text-gray-800 text-xl font-semibold mb-4">行動が、信頼になる。</p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            スペックでも、自己申告でもなく。<br />
            AIアプリが積み重ねる行動データが、<br />
            本当の相性を解き明かす。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#contact"
              className="bg-trust-600 hover:bg-trust-700 text-white font-semibold px-8 py-4 rounded-full transition-colors text-center"
            >
              パートナーになる
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
          <div className="bg-ink/5 border border-ink/10 rounded-3xl p-6 pb-8 w-full max-w-sm">
            <RelativeGraph />
            <p className="text-center text-xs text-gray-400 mt-6 font-sans">
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
