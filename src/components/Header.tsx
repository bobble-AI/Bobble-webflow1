import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#projects', label: 'Проекты' },
    { href: '#advantages', label: 'Преимущества' },
    { href: '#catalog', label: 'Каталог' },
    { href: '#contacts', label: 'Контакты' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_rgba(0,0,0,0.05)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="transition-transform duration-300 group-hover:scale-105">
              <path d="M14 2L2 12h4v14h16V12h4L14 2z" stroke={scrolled ? '#1A1A1A' : '#fff'} strokeWidth="1.5" fill="none" className="transition-colors duration-500"/>
              <path d="M10 26V18h8v8" stroke={scrolled ? '#B8916A' : '#D4B896'} strokeWidth="1.5" fill="none" className="transition-colors duration-500"/>
            </svg>
            <span className={`text-lg font-semibold tracking-tight transition-colors duration-500 ${scrolled ? 'text-charcoal' : 'text-white'}`}>
              Nord<span className={`transition-colors duration-500 ${scrolled ? 'text-wood' : 'text-wood-light'}`}>House</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-light tracking-wide transition-colors duration-300 hover:text-wood ${
                  scrolled ? 'text-grey-warm' : 'text-white/80 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+78001234567"
              className={`text-sm font-medium transition-colors duration-300 ${
                scrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              8 800 123-45-67
            </a>
          </nav>

          {/* Mobile burger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Меню"
          >
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}/>
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? 'opacity-0' : ''}`}/>
            <span className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-charcoal' : 'bg-white'} ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-400 ${menuOpen ? 'max-h-80' : 'max-h-0'}`}>
        <div className="bg-white/95 backdrop-blur-sm border-t border-stone px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-sm text-grey-warm hover:text-wood transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="tel:+78001234567" className="block text-sm font-medium text-charcoal pt-2 border-t border-stone">
            8 800 123-45-67
          </a>
        </div>
      </div>
    </header>
  );
}
