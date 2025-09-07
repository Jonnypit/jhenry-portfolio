import React, { useEffect, useState } from 'react';

// Simple error boundary to catch render errors (e.g., inside SpinningApp)
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    // Surface details in the console for quick diagnosis
    // You can wire this to telemetry later
    console.error('ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center text-xs text-red-300 bg-red-900/20 rounded-md p-2">
          {this.props.fallback || 'Preview failed to render.'}
        </div>
      );
    }
    return this.props.children;
  }
}

import SpinningApp from './SpinningApp';

function Portfolio() {
  const [selectedApp, setSelectedApp] = useState(null);

  // TODO: Replace placeholders with real assets/details as they are ready
  const apps = [
    {
      title: 'CryptoTracker MVVM',
      imagePath: '/assets/spin/app1/',
      description:
        'Live market data, charts, favorites — SwiftUI + MVVM with a clean data layer.',
      bullets: [
        'SwiftUI + MVVM architecture with a dedicated data layer',
        'REST API integration for live cryptocurrency prices and news feeds',
        'Realtime price feed (async/await) with graceful reload/empty states',
        'Local caching for fast launches; pull‑to‑refresh for updates',
        'Sparkline charts and theming accessible with Dynamic Type',
      ],
    },
    {
      title: 'Best Dad Jokes!',
      imagePath: '/assets/spin/app2/',
      description:
        'A playful SwiftUI app that showcases resilient networking, state-driven UI, and 60fps motion.',
      bullets: [
        'Resilient networking: async decode with retry/backoff',
        'Fluid UI: state-driven view transitions with haptics',
        'Smart persistence: offline queue + favorites via @StateObject',
        'Delightful motion: Lottie/SwiftUI animations optimized to 60fps',
      ],
    },
    {
      title: 'Ultimate Service',
      imagePath: '/assets/spin/app3/',
      description:
        'Task and service manager exploring persistence and polished UI interactions.',
      bullets: [
        'Task model with recurrence, reminders, and badges',
        'Persistence via Core Data + background saves',
        'Observation (@Observable / Combine) for live list updates',
        'Custom controls: segmented header, progress ring, swipe actions',
      ],
    }
  ];

  // Close on ESC for accessibility
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setSelectedApp(null);
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  }, []);

  return (
    <main
      id="main"
      className="w-screen min-h-screen text-white"
    >
      {/* Background */}
      <section
        className="relative w-full min-h-screen overflow-hidden"
        aria-label="Portfolio projects"
      >
        <div
          className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-scroll md:bg-fixed"
          style={{ backgroundImage: "url('/assets/portfolio-bg.jpg')" }}
        />
        {/* vignette for legibility */}
        <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_140px_#0b1220]" />

        {/* CONTENT */}
        <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 py-12">
          {/* Title / lead */}
          <header className="mb-14 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-400 drop-shadow-lg tracking-tight">
              Selected Work
            </h1>
            <p className="text-lg text-slate-200/90 max-w-3xl mx-auto mt-3 leading-relaxed">
              A few iOS studies and concepts. Tap a card to view details. Each preview is a live spinning render of the app UI.
            </p>
          </header>

          {/* GRID of app cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {apps.map((app, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedApp(app)}
                className="group relative text-left rounded-2xl border border-white/10 bg-transparent hover:bg-white/[0.03] p-4 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 flex flex-col"
                aria-label={`Open ${app.title}`}
              >
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_50px_rgba(56,189,248,0.18)] opacity-0 group-hover:opacity-100 transition pointer-events-none" />

                <div className="relative z-10 flex items-center justify-center h-[180px] mb-8">
                  <div className="absolute inset-3 rounded-xl bg-black/30 backdrop-blur-[2px] border border-cyan-400/10 group-hover:border-cyan-400/20 transition" />
                  <div className="relative scale-[0.7] group-hover:scale-90 transition drop-shadow-[0_10px_25px_rgba(0,0,0,0.45)]">
                    <ErrorBoundary fallback={`Preview error in ${app.title}`}>
                      <SpinningApp path={app.imagePath} />
                    </ErrorBoundary>
                  </div>
                </div>

                {/* Hover details overlay */}
                <div
                  className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity"
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 rounded-2xl bg-black/70 backdrop-blur-sm" />
                  <ul className="relative z-10 m-4 space-y-2 text-[11px] leading-snug text-left">
                    {app.bullets?.map((b, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                        <span className="text-slate-200/95">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative z-30 mt-6 text-center">
                  <h3 className="font-semibold leading-tight text-sm text-white">{app.title}</h3>
                  <p className="text-xs text-slate-300/90 mt-1.5">{app.description}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Sticky GitHub list on wide screens */}
          <aside className="mt-12 lg:mt-16">
            <div className="lg:w-[360px] lg:ml-auto">
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-5">
                <h2 className="font-bold mb-2">GitHub Projects</h2>
                <ul className="space-y-1 text-sm text-slate-200">
                  <li><a href="https://github.com/Jonnypit" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">github.com/Jonnypit</a></li>
                  <li><a href="https://github.com/Jonnypit?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-300">All Repositories →</a></li>
                </ul>
              </div>
            </div>
          </aside>
        </div>

        {/* MODAL: selected app */}
        {selectedApp && (
          <div className="fixed inset-0 z-50">
            <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedApp(null)} />
            <div className="relative h-full w-full flex items-center justify-center p-6">
              <div className="relative w-full max-w-3xl rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-8 shadow-[0_0_80px_rgba(0,0,0,0.6)]">
                <button
                  onClick={() => setSelectedApp(null)}
                  className="absolute top-3 right-3 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full w-9 h-9 flex items-center justify-center"
                  aria-label="Close"
                >
                  ✕
                </button>

                <h2 className="text-2xl md:text-3xl font-bold mb-4 pr-10">{selectedApp.title}</h2>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="relative flex items-center justify-center">
                    <div className="absolute inset-3 rounded-xl bg-black/30 backdrop-blur-[2px] border border-cyan-400/10" />
                    <div className="relative scale-[0.85] drop-shadow-[0_14px_30px_rgba(0,0,0,0.45)]">
                      <ErrorBoundary fallback={`Preview error in ${selectedApp?.title || 'selected app'}` }>
                        {selectedApp && (
                          <SpinningApp path={selectedApp.imagePath} />
                        )}
                      </ErrorBoundary>
                    </div>
                  </div>
                  <div>
                    <p className="text-slate-200 leading-relaxed">{selectedApp.description}</p>
                    {selectedApp.bullets && (
                      <ul className="mt-4 space-y-2 text-sm">
                        {selectedApp.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2 text-slate-200/95">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400/90 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href="https://github.com/Jonnypit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40"
                      >
                        View on GitHub
                      </a>
                      <button
                        onClick={() => setSelectedApp(null)}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default Portfolio;
