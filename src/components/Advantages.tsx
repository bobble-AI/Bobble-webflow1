const advantages = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
    title: 'Экологичные материалы',
    description: 'Используем только сертифицированную древесину из возобновляемых лесов Финляндии. Безопасные утеплители и краски без токсинов.',
    stat: '100%',
    statLabel: 'экологичность',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Быстрое строительство',
    description: 'Благодаря каркасной технологии и заводской подготовке комплектов, возведение дома занимает от 3 месяцев — без потери качества.',
    stat: '3 мес.',
    statLabel: 'средний срок',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'Гарантия 15 лет',
    description: 'Предоставляем расширенную гарантию на конструктив, кровлю и инженерные системы. Бесплатное сервисное обслуживание первый год.',
    stat: '15 лет',
    statLabel: 'гарантия',
  },
];

export default function Advantages() {
  return (
    <section id="advantages" className="py-20 lg:py-32 bg-grey-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-in text-center mb-16 lg:mb-20">
          <span className="text-xs tracking-[0.3em] text-wood uppercase font-medium">
            Почему мы
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
            Наши преимущества
          </h2>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          {advantages.map((item, index) => (
            <div
              key={index}
              className={`fade-in fade-in-delay-${index + 1} text-center group`}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-stone rounded-full text-wood group-hover:border-wood group-hover:bg-wood/5 transition-all duration-500">
                {item.icon}
              </div>

              {/* Stat */}
              <div className="mb-4">
                <span className="text-3xl lg:text-4xl font-light text-charcoal tracking-tight">
                  {item.stat}
                </span>
                <span className="block text-[10px] tracking-[0.2em] text-grey-warm uppercase mt-1">
                  {item.statLabel}
                </span>
              </div>

              {/* Text */}
              <h3 className="text-base font-medium text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-grey-warm font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom divider line */}
        <div className="fade-in mt-16 lg:mt-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-stone" />
          <span className="text-[10px] tracking-[0.3em] text-grey-warm uppercase">Более 350 домов построено</span>
          <div className="h-px w-12 bg-stone" />
        </div>
      </div>
    </section>
  );
}
