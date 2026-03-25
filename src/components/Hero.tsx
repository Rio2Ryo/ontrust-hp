"use client";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden px-6 text-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black" />

      {/* Animated ring */}
      <div className="absolute w-[600px] h-[600px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite]" />
      <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10 animate-[spin_20s_linear_infinite_reverse]" />

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Patent badge */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-amber-400/60 bg-amber-400/10 text-amber-300 text-xs font-medium tracking-widest uppercase">
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          特許取得済
        </div>

        {/* Main headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
          行動が、<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-400">
            信頼になる。
          </span>
        </h1>

        {/* Sub copy */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto leading-relaxed mb-10">
          信頼は、誰が見るかで変わる。<br />
          AIアプリが積み重ねる行動データが、<br />
          本当の相性を解き明かす。
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#partnership"
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-zinc-200 transition-colors"
          >
            パートナーになる
          </a>
          <a
            href="#how-it-works"
            className="px-8 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
          >
            仕組みを知る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
