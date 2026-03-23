const projects = [
  {
    id: 1,
    name: 'Fjord 85',
    image: '/images/project1.jpg',
    area: '85 м²',
    bedrooms: '2 спальни',
    duration: '3 месяца',
    price: 'от 4.2 млн ₽',
    description: 'Компактный одноэтажный дом с открытой планировкой. Идеален для небольшой семьи или загородной резиденции.',
  },
  {
    id: 2,
    name: 'Bergen 140',
    image: '/images/project2.jpg',
    area: '140 м²',
    bedrooms: '3 спальни',
    duration: '4 месяца',
    price: 'от 6.8 млн ₽',
    description: 'Двухэтажный дом с панорамными окнами и просторной террасой. Классика скандинавского стиля.',
  },
  {
    id: 3,
    name: 'Oslo 110',
    image: '/images/project3.jpg',
    area: '110 м²',
    bedrooms: '3 спальни',
    duration: '3.5 месяца',
    price: 'от 5.5 млн ₽',
    description: 'Уютный дом А-фрейм с вторым светом в гостиной. Современная интерпретация скандинавской классики.',
  },
  {
    id: 4,
    name: 'Stockholm 200',
    image: '/images/project4.jpg',
    area: '200 м²',
    bedrooms: '4 спальни',
    duration: '5 месяцев',
    price: 'от 9.5 млн ₽',
    description: 'Премиальный проект с сауной, вторым светом и панорамным остеклением. Для тех, кто ценит пространство.',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="fade-in text-center mb-16 lg:mb-20">
          <span className="text-xs tracking-[0.3em] text-wood uppercase font-medium">
            Проекты
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light text-charcoal tracking-tight">
            Готовые решения
          </h2>
          <p className="mt-4 text-grey-warm font-light max-w-md mx-auto">
            Каждый проект можно адаптировать под ваши потребности и особенности участка
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`fade-in fade-in-delay-${index + 1} group cursor-pointer`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] mb-6">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5">
                  <span className="text-xs font-medium text-charcoal tracking-wide">
                    {project.name}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-3">
                <p className="text-sm text-grey-warm font-light leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 pt-2 border-t border-stone">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
                    </svg>
                    <span className="text-xs text-charcoal">{project.area}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-xs text-charcoal">{project.duration}</span>
                  </div>
                  <div className="ml-auto">
                    <span className="text-sm font-medium text-charcoal">{project.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
