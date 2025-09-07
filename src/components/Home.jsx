function Home() {
  return (
    <main id="main" className="w-screen text-white min-h-screen bg-[#0b1220]">
      {/* HERO */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="J. Henry — Mobile App Developer"
      >
        {/* Background image with responsive behavior (no fixed on mobile to avoid jank) */}
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
        />

        {/* Gradient + vignette overlays for legibility */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1220]/80 via-[#0b1220]/50 to-transparent" />
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_120px_#0b1220]" />

        {/* Content */}
        <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 py-10 md:py-16">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-cyan-300/80">Mobile App Developer</p>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold leading-[1.05]">
              <span className="text-white">I design & build </span>
              <span className="text-cyan-300">SwiftUI</span>
              <span className="text-white"> & </span>
              <span className="text-emerald-300">Android</span>
              <span className="text-white"> apps that feel </span>
              <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">fast, clear, and alive</span>
            </h1>

            <p className="mt-4 md:mt-6 text-slate-200 md:text-lg max-w-2xl">
              I craft production‑ready experiences with SwiftUI, MVVM, and modern APIs — and mirror them on Android with Compose. Clean architecture, thoughtful motion, real results.
            </p>

            {/* CTAs */}
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a
                href="/portfolio"
                className="px-5 py-3 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 shadow-[0_0_25px] shadow-cyan-500/20"
              >
                Explore Projects
              </a>
              <a
                href="/contact"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
              >
                Get in Touch
              </a>
              <a
                href="/resume"
                className="px-5 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10"
              >
                Resume
              </a>
            </div>

            {/* Tech badges */}
            <div className="mt-6 flex flex-wrap items-center gap-2 text-[12px] text-slate-300/90">
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">SwiftUI · MVVM</span>
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">Kotlin · Compose</span>
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">REST APIs · Charts</span>
              <span className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5">React · Vite · Tailwind</span>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">Scroll</div>
      </section>

      {/* FEATURE STRIP */}
      <section className="relative bg-[#0b1220] border-t border-white/10">
        <div className="max-w-[1500px] mx-auto px-6 md:px-12 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: 'CryptoTracker MVVM',
              desc: 'Live market data, charts, favorites — built with SwiftUI + MVVM and a clean data layer.',
              href: '/portfolio#crypto',
            },
            {
              title: 'WeatherWise',
              desc: 'Real‑time forecasts with polished UI, smooth animations, and accessible design.',
              href: '/portfolio#weather',
            },
            {
              title: 'TrailQuest',
              desc: 'GPS + CoreLocation + AR‑ready concepts for an outdoors companion app.',
              href: '/portfolio#trail',
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] p-5 hover:bg-white/[0.06] transition"
            >
              <div className="text-cyan-300/90 text-xs mb-1">Case Study</div>
              <div className="font-semibold">{c.title}</div>
              <p className="mt-1 text-sm text-slate-300/90">{c.desc}</p>
              <div className="mt-3 text-cyan-300 text-sm opacity-0 group-hover:opacity-100 transition">View →</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;

