function Hero() {
  return (
    <section
      className="w-full min-h-screen bg-black bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/hero-bg.jpg')" }}
    >
      <div className="flex flex-col justify-center items-center text-center text-white h-full px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-extrabold text-[#3DDC84]">
          MAKING YOUR APP A REALITY
        </h1>
        <p className="mt-6 max-w-xl text-lg">
          From concept to code, I bring your mobile and web ideas to life with clean, modern design and solid engineering.
        </p>
      </div>
    </section>
  );
}
export default Hero;