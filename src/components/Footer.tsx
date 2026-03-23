export default function Footer() {
  return (
    <footer id="contacts" className="bg-charcoal text-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none">
                <path d="M14 2L2 12h4v14h16V12h4L14 2z" stroke="#fff" strokeWidth="1.5" fill="none"/>
                <path d="M10 26V18h8v8" stroke="#B8916A" strokeWidth="1.5" fill="none"/>
              </svg>
              <span className="text-base font-semibold text-white tracking-tight">
                Nord<span className="text-wood">House</span>
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Строим скандинавские дома из экологичных материалов с&nbsp;2010&nbsp;года. Более 350 реализованных проектов.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-5">
              Навигация
            </h4>
            <nav className="space-y-3">
              {['Проекты', 'Преимущества', 'Каталог', 'О компании', 'Блог'].map((item) => (
                <a key={item} href="#" className="block text-sm font-light hover:text-wood transition-colors duration-300">
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-5">
              Контакты
            </h4>
            <div className="space-y-3">
              <a href="tel:+78001234567" className="block text-sm font-light hover:text-wood transition-colors duration-300">
                8 800 123-45-67
              </a>
              <a href="mailto:info@nordhouse.ru" className="block text-sm font-light hover:text-wood transition-colors duration-300">
                info@nordhouse.ru
              </a>
              <p className="text-sm font-light">
                Москва, ул. Архитекторов, 12
              </p>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] text-white/40 uppercase mb-5">
              Режим работы
            </h4>
            <div className="space-y-3 text-sm font-light">
              <p>Пн — Пт: 9:00 — 19:00</p>
              <p>Сб: 10:00 — 16:00</p>
              <p>Вс: выходной</p>
            </div>
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {['Telegram', 'WhatsApp', 'VK'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="inline-flex items-center justify-center w-9 h-9 border border-white/10 text-[10px] font-medium tracking-wider text-white/50 hover:border-wood hover:text-wood transition-all duration-300"
                >
                  {social.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-light text-white/30">
            © 2025 NordHouse. Все права защищены.
          </p>
          <a href="#" className="text-xs font-light text-white/30 hover:text-white/60 transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
