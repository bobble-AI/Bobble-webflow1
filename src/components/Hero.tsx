export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Скандинавский дом"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          <div className="inline-block mb-6 px-4 py-1.5 border border-white/20 rounded-full">
            <span className="text-xs font-light tracking-[0.2em] text-white/70 uppercase">
              Строительство с 2010 года
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-[1.1] tracking-tight mb-6">
            Скандинавские
            <br />
            дома{' '}
            <span className="text-wood-light font-normal">под ключ</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/70 font-light leading-relaxed mb-10 max-w-lg">
            Энергоэффективно, экологично, красиво.
            <br className="hidden sm:block" />
            Дома, в которых хочется жить.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-8 py-4 bg-wood hover:bg-wood-light text-white text-sm font-medium tracking-wide rounded-none transition-all duration-300 hover:shadow-lg"
            >
              Выбрать проект
              <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center px-8 py-4 border border-white/30 text-white text-sm font-light tracking-wide rounded-none transition-all duration-300 hover:bg-white/10 hover:border-white/50"
            >
              Получить каталог
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
          <rect x="0.5" y="0.5" width="15" height="23" rx="7.5" stroke="rgba(255,255,255,0.3)" />
          <circle cx="8" cy="8" r="2" fill="rgba(255,255,255,0.5)">
            <animate attributeName="cy" values="8;16;8" dur="2s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>
    </section>
  );
}
