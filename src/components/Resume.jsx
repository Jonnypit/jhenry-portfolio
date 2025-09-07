function Resume() {
  return (
    <main id="main" className="w-screen min-h-screen bg-[#0b1220] text-white pt-[80px]">
      <div className="max-w-[1100px] mx-auto px-6 md:px-12 py-10">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold">Jonathon Henry</h1>
          <p className="mt-1 text-sm md:text-base text-slate-300">
            Punta Gorda, FL · <a className="underline hover:text-cyan-300" href="mailto:jonnypit@outlook.com">jonnypit@outlook.com</a> · <a className="hover:text-cyan-300" href="tel:+19412863050">941‑286‑3050</a>
          </p>
          <p className="text-sm text-slate-300">
            <a className="underline hover:text-cyan-300" href="https://www.linkedin.com/in/jhenry2615" target="_blank" rel="noopener noreferrer">linkedin.com/in/jhenry2615</a>
            {' '}·{' '}
            <a className="underline hover:text-cyan-300" href="https://github.com/Jonnypit" target="_blank" rel="noopener noreferrer">github.com/Jonnypit</a>
          </p>
        </header>

        {/* Summary */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold border-b border-cyan-500/40 pb-1 mb-3">Professional Summary</h2>
          <p className="text-sm leading-relaxed text-slate-200">
            Aspiring software developer seeking an internship to complete an A.S. in Programming and Analysis, bringing 12+ years of supervisory and process optimization experience in manufacturing. Adept at leading cross‑functional teams, streamlining workflows, and applying analytical problem‑solving to deliver efficient, scalable solutions. Strong programming foundation in Python, Java, Swift, and Kotlin, with hands‑on project work in AI system design, mobile applications, and real‑time data processing. Experienced in prompt engineering, clean architecture principles, and integrating REST APIs across mobile, web, and backend environments. Combines technical expertise with leadership skills to bridge the gap between complex technical goals and practical, results‑driven execution.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold border-b border-cyan-500/40 pb-1 mb-3">Technical Skills</h2>
          <div className="grid sm:grid-cols-2 gap-6 text-sm">
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Programming Foundation:</span> Python, Java, Swift, Kotlin, SQL, HTML, CSS — applied across mobile, web, and backend development, with a strong grasp of prompt engineering for AI‑driven solutions.</li>
              <li><span className="font-semibold">Frameworks & Tools (Working Knowledge):</span> React, REST APIs, Git, Agile Development.</li>
            </ul>
            <ul className="list-disc pl-5 space-y-1">
              <li><span className="font-semibold">Specialized Applications (Personal Projects):</span> AI System Design, Machine Learning Fundamentals, Real‑Time Data Processing, Predictive Maintenance, Process Automation.</li>
              <li><span className="font-semibold">Professional Skills:</span> Analytical Thinking, Systems Optimization, Client Relationship Management, Cross‑Functional Leadership.</li>
            </ul>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold border-b border-cyan-500/40 pb-1 mb-3">Projects</h2>

          <article className="mb-5">
            <h3 className="font-semibold">Self‑Evolving AI System (Personal Project, Work in Progress – 2025) <span className="text-xs text-slate-400">| Architect &amp; Developer</span></h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-1">
              <li>Designing and implementing a modular AI architecture featuring perception, cognition, ethics, and reflex layers capable of autonomous retraining and dataset evolution.</li>
              <li>Developed primarily in Python with a supporting React web interface for testing and user interaction.</li>
              <li>Applying prompt engineering to improve AI decision‑making accuracy, adaptability, and contextual understanding.</li>
              <li>Building a real‑time data processing pipeline to support predictive maintenance and process automation logic.</li>
              <li>Utilizing machine learning fundamentals to enable self‑improving classification models for ethical decision‑making and domain‑specific queries.</li>
              <li>Integrating REST API endpoints between the Python backend and React interface for maintainability and scalability.</li>
              <li>Continuously improving system responsiveness, dataset quality, and autonomous learning efficiency through iterative development cycles.</li>
              <li><span className="font-semibold">Current Focus:</span> Enhancing the perception and cognition layers to support more accurate intent recognition and decision‑making.</li>
              <li><span className="font-semibold">Skills Applied:</span> Python, React, Prompt Engineering, Machine Learning Fundamentals, REST APIs, Real‑Time Data Processing, Process Automation.</li>
            </ul>
          </article>

          <article className="mb-5">
            <h3 className="font-semibold">CryptoTrackerMVVM – Cryptocurrency Tracking App (Portfolio Project, 2025) <span className="text-xs text-slate-400">| iOS Developer</span></h3>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-1">
              <li>Built an iOS application using Swift and MVVM architecture to ensure a clean separation of concerns between data, logic, and UI layers.</li>
              <li>Integrated a public REST API to fetch live cryptocurrency data, including prices, market trends, and top gainers/losers.</li>
              <li>Implemented a “Bring Your Own API Key” feature so users can securely input and store personal API keys for customization and privacy.</li>
              <li>Added Favorites, currency picker, and a real‑time news section to increase engagement.</li>
              <li>Implemented historical price charts using <span className="whitespace-nowrap">Swift Charts</span> for investor‑focused insights.</li>
              <li>Designed a responsive UI optimized for iOS performance; managed the codebase with Git.</li>
              <li><span className="font-semibold">Skills Applied:</span> Swift, MVVM, REST APIs, API Key Management, Swift Charts, Git, Real‑Time Data Integration, iOS UI Design.</li>
            </ul>
          </article>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold border-b border-cyan-500/40 pb-1 mb-3">Education</h2>
          <p className="text-sm leading-relaxed">
            <span className="font-semibold">A.S. in Programming and Analysis</span> (In Progress, 2022–Present) — Saint Petersburg College, Saint Petersburg, FL
            <span className="block text-slate-400">Programming Certificate earned; completing internship to finalize degree. Continuing toward a B.S. in Computer Science with emphasis on AI technology.</span>
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold border-b border-cyan-500/40 pb-1 mb-3">Professional Experience</h2>
          <div className="mb-5">
            <h3 className="font-semibold">Licensed Realtor — Coldwell Banker Sunstar Realty</h3>
            <p className="text-sm italic text-slate-400">2019–2022</p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-1">
              <li>Generated $1.2M in sales in year two through targeted marketing strategies and analytics‑based client acquisition.</li>
              <li>Managed the complete transaction lifecycle, ensuring client satisfaction and repeat referrals.</li>
              <li>Utilized data tracking and market analysis tools to identify opportunities and improve client engagement.</li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold">Full‑Time Foster Parent</h3>
            <p className="text-sm italic text-slate-400">2016–2020</p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-1">
              <li>Provided structured care for children in foster placement, fostering resilience, adaptability, and trust.</li>
              <li>Managed complex schedules and coordinated with multiple support services to ensure consistent care.</li>
              <li>Developed strong conflict resolution, communication, and time‑management skills.</li>
            </ul>
          </div>
          <div className="mb-5">
            <h3 className="font-semibold">Operations &amp; Plant Supervisor — Corrugated Manufacturing</h3>
            <p className="text-sm italic text-slate-400">2003–2016</p>
            <ul className="list-disc pl-5 text-sm leading-relaxed space-y-1 mt-1">
              <li>Delivered multi‑million‑dollar operational gains through automation, workflow redesign, and predictive maintenance strategies.</li>
              <li>Directed high‑output production teams, ensuring quality, safety, and efficiency across shifts.</li>
              <li>Developed and implemented data‑driven monitoring systems to optimize throughput and minimize downtime.</li>
              <li>Applied process optimization and systems thinking to streamline operations and improve scalability.</li>
            </ul>
          </div>
        </section>

        {/* Actions */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/assets/Jonathon_Henry_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500/20 text-cyan-200 border border-cyan-400/40 font-semibold px-6 py-2 rounded hover:bg-cyan-500/30 transition"
          >
            Download PDF Resume
          </a>
          <button
            onClick={() => window.print()}
            className="inline-block bg-white/5 text-white border border-white/10 font-semibold px-6 py-2 rounded hover:bg-white/10 transition"
          >
            Print
          </button>
        </div>
      </div>
    </main>
  );
}

export default Resume;
