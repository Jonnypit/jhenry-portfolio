import aboutBg from '../assets/aboutbg.jpg';
import profileImg from '../assets/jhenry-profile.png';

function About() {
  return (
    <main className="w-screen text-white min-h-screen bg-[#0b1220]">
      <section
        className="w-full min-h-screen bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed pt-0"
        style={{ backgroundImage: `url(${aboutBg})` }}
        aria-label="About Jonathon Henry"
      >
        <div className="max-w-[1500px] mx-auto px-6 md:px-16 py-12">
          <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-start">
            {/* Left: Text */}
            <header className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold text-[#ff4500] mb-2">
                About Jonathon Henry
              </h1>
              <p className="text-[#1bc9e3] font-semibold text-sm mb-4">
                Swift Craftsman · React Rising Star · Aspiring iOS & Full-Stack Mobile Developer
              </p>

              <div className="text-sm md:text-[17px] leading-relaxed space-y-6">
                <p>
                  Jonathon Henry builds intuitive, high-performance mobile experiences from the ground up.
                  With a solid foundation in Swift and iOS, he merges elegant UI with efficient architecture,
                  leveraging SwiftUI and MVVM for clean, scalable, future-ready apps. He’s also expanding into
                  React and modern web tooling to ship across platforms with equal precision.
                </p>
                <p>
                  Driven by a relentless problem-solving instinct, Jon integrates APIs, manages async data flows,
                  and fine-tunes responsiveness with a calm, methodical approach. Every bug is an opportunity;
                  every user flow, a canvas for innovation.
                </p>
                <p>
                  He’s not chasing trends—he’s stacking durable skills with a sharp eye on the future of
                  app development.
                </p>
              </div>
            </header>

            {/* Right: Image */}
            <figure className="w-[150px] md:w-[300px] flex-shrink-0 p-1 mx-auto md:mx-0 rounded-xl ring-1 ring-white/10 bg-black/20">
              <img
                src={profileImg}
                alt="Portrait of Jonathon Henry, mobile app developer"
                className="w-full h-auto object-cover rounded-lg"
                loading="eager"
              />
            </figure>
          </div>

          {/* Quote */}
          <figure className="mt-12 max-w-3xl mx-auto text-center">
            <blockquote className="italic text-[#7de3ff] leading-relaxed">
              “I don’t just write code—I architect possibilities. Every bug I squash, every feature I ship,
              is a line closer to the legacy I’m building—one app at a time.”
            </blockquote>
          </figure>
        </div>
      </section>
    </main>
  );
}

export default About;
