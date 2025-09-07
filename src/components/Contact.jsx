import { useState } from 'react';

function Contact() {
  const [status, setStatus] = useState('idle'); // 'idle' | 'sending' | 'success' | 'error'
  const [notice, setNotice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formId = import.meta.env.VITE_FORMSPREE_ID; // e.g., abcdwxyz

    if (!formId) {
      setStatus('error');
      setNotice('Contact form not configured yet. Please email me directly at Jonnypit@outlook.com.');
      return;
    }

    try {
      setStatus('sending');
      setNotice('');

      const fd = new FormData(e.currentTarget);

      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: fd,
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        setStatus('success');
        setNotice('Thanks! Your message was sent. I\'ll get back to you soon.');
        e.currentTarget.reset();
      } else {
        const msg = (data && data.errors && data.errors[0] && data.errors[0].message) || 'Something went wrong. Please email me directly.';
        setStatus('error');
        setNotice(msg);
      }
    } catch (err) {
      setStatus('error');
      setNotice('Network error. Please try again or email me directly.');
    }
  };

  return (
    <div
      id="main"
      className="pt-[207px] min-h-[1000px] w-screen bg-scroll md:bg-fixed bg-center bg-no-repeat bg-cover relative"
      style={{ backgroundImage: "url('/assets/contact-bg.jpg')" }}
    >
      {/* Phone with hand image */}
      <div
        className="absolute top-[250px] left-1/2 -translate-x-1/2 md:left-[150px] md:translate-x-0 w-[320px] sm:w-[360px] md:w-[460px]"
      >
        <img
          src="/assets/phone-hand.png"
          alt="Phone held in hand"
          className="w-full h-auto drop-shadow-xl"
        />

        {/* Contact form positioned inside phone */}
        <div className="absolute top-[50px] left-[110px] sm:left-[125px] md:left-[148px] w-[180px] sm:w-[210px] md:w-[240px] bg-black/40 border border-cyan-400/30 shadow-[0_0_22px_rgba(56,189,248,0.18)] backdrop-blur-sm p-4 rounded text-white">
          {/* Logo above form */}
          <div className="mb-4 flex justify-center">
            <img src="/assets/aira_icon.png" alt="J. Henry personal logo (AIRA icon)" className="w-1/4 h-auto" />
          </div>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label htmlFor="name" className="sr-only">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                autoComplete="name"
                required
                className="w-full px-3 py-2 bg-gray-800/90 border border-gray-700 rounded outline-none focus:border-cyan-400/60"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 bg-gray-800/90 border border-gray-700 rounded outline-none focus:border-cyan-400/60"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="w-full px-3 py-2 bg-gray-800/90 border border-gray-700 rounded h-24 resize-none outline-none focus:border-cyan-400/60"
                required
              />
            </div>
            {/* Status notice */}
            {status !== 'idle' && (
              <div
                className={
                  `text-xs rounded px-3 py-2 border ` +
                  (status === 'success'
                    ? 'text-emerald-300 border-emerald-400/40 bg-emerald-500/10'
                    : status === 'error'
                    ? 'text-red-300 border-red-400/40 bg-red-500/10'
                    : 'text-cyan-200 border-cyan-400/30 bg-cyan-500/10')
                }
              >
                {notice}
              </div>
            )}
            <button
              type="submit"
              disabled={status === 'sending'}
              aria-busy={status === 'sending'}
              className={`!bg-[#1bc9e3] !text-black px-4 py-2 rounded font-bold w-full focus:outline-none focus:ring-2 focus:ring-cyan-400/70 hover:!bg-[#00a5bd] shadow-[0_0_18px_rgba(27,201,227,0.35)] ${status === 'sending' ? 'opacity-60 cursor-not-allowed' : ''}`}
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* Right‑side contact text (desktop and up) */}
      <div className="hidden md:block absolute top-[260px] right-[160px] w-[420px] text-white">
        <h2 className="text-3xl font-bold text-[#1bc9e3] mb-4">The Contact Engine</h2>
        <p className="text-slate-200/90 leading-relaxed mb-6">
          Just like the apps I build, this contact engine is designed to be clear, direct, and reliable.
          Whether it’s crafting intuitive iOS apps with SwiftUI, refining Android experiences with Kotlin/Compose,
          or bringing ideas to life with React, I’m only a message away.
        </p>
        <div className="space-y-2 text-slate-300 text-sm">
          <p>📧 <a href="mailto:Jonnypit@outlook.com" className="hover:text-[#1bc9e3]">Jonnypit@outlook.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/jhenry2615" target="_blank" rel="noopener noreferrer" className="hover:text-[#1bc9e3]">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/Jonnypit" target="_blank" rel="noopener noreferrer" className="hover:text-[#1bc9e3]">GitHub</a></p>
        </div>
      </div>

      {/* Stacked contact text (mobile) */}
      <div className="md:hidden text-white px-6 mt-[780px]">
        <h2 className="text-2xl font-bold text-[#1bc9e3] mb-3 text-center">The Contact Engine</h2>
        <p className="text-slate-200/90 leading-relaxed mb-5 text-center">
          Clear, direct, reliable. iOS • Android • React — I’m only a message away.
        </p>
        <div className="space-y-2 text-slate-300 text-sm text-center">
          <p>📧 <a href="mailto:Jonnypit@outlook.com" className="hover:text-[#1bc9e3]">Jonnypit@outlook.com</a></p>
          <p>🔗 <a href="https://www.linkedin.com/in/jhenry2615" target="_blank" rel="noopener noreferrer" className="hover:text-[#1bc9e3]">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/Jonnypit" target="_blank" rel="noopener noreferrer" className="hover:text-[#1bc9e3]">GitHub</a></p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
