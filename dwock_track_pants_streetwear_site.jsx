export default function DwockTrackPantsSite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16 gap-12">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 via-black to-blue-600/10" />

        {/* Left Content */}
        <div className="relative z-10 flex-1 max-w-xl">
          <p className="uppercase tracking-[0.3em] text-gray-400 text-sm mb-4">
            DWOCK STREETWEAR
          </p>

          <h1 className="text-6xl lg:text-8xl font-black leading-none mb-6">
            TRACK
            <br />
            PANTS
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-8">
            Lightweight nylon track pants inspired by fast street culture.
            Clean black base with bold red and blue side panels made to stand
            out on every ride.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-red-600 hover:bg-red-500 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-bold shadow-2xl">
              SHOP NOW
            </button>

            <button className="border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl text-lg font-bold">
              VIEW DETAILS
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-14">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-3xl font-black">4.9</p>
              <p className="text-gray-400 text-sm">Rating</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-3xl font-black">100%</p>
              <p className="text-gray-400 text-sm">Nylon</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
              <p className="text-3xl font-black">NEW</p>
              <p className="text-gray-400 text-sm">Drop</p>
            </div>
          </div>
        </div>

        {/* Right Product Display */}
        <div className="relative z-10 flex-1 flex justify-center items-center">
          <div className="relative group">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-red-500/30 to-blue-500/30 blur-3xl scale-110 rounded-full" />

            {/* Pants Mockup */}
            <div className="relative bg-zinc-900 rounded-[3rem] p-8 border border-white/10 shadow-2xl overflow-hidden">
              <img
                src="/mnt/data/unnamed.png"
                alt="DWOCK Track Pants"
                className="w-full max-w-md object-contain drop-shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-6 lg:px-20 py-20 border-t border-white/10">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-red-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center text-2xl mb-6">
              ⚡
            </div>
            <h3 className="text-2xl font-bold mb-4">Lightweight Feel</h3>
            <p className="text-gray-400 leading-relaxed">
              Smooth nylon material made for comfort while riding, chilling, or
              everyday wear.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-blue-500/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-2xl mb-6">
              🔥
            </div>
            <h3 className="text-2xl font-bold mb-4">Bold Color Blocking</h3>
            <p className="text-gray-400 leading-relaxed">
              Clean red and blue side panels with sharp white trim for a strong
              streetwear look.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10 hover:border-white/40 transition-all duration-300">
            <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center text-2xl mb-6">
              🏁
            </div>
            <h3 className="text-2xl font-bold mb-4">Street Ready</h3>
            <p className="text-gray-400 leading-relaxed">
              Designed for bike life, city fits, and standout everyday outfits.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 lg:px-20 py-24">
        <div className="rounded-[3rem] bg-gradient-to-r from-red-600 to-blue-600 p-[1px]">
          <div className="bg-black rounded-[3rem] px-10 py-20 text-center">
            <h2 className="text-5xl font-black mb-6">READY FOR THE DROP?</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              Premium streetwear inspired by motion, speed, and bike culture.
              Join the DWOCK movement.
            </p>

            <button className="bg-white text-black hover:scale-105 transition-transform duration-300 px-10 py-5 rounded-2xl text-lg font-black shadow-2xl">
              BUY NOW
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
