import { useState, type FormEvent } from 'react';

export default function CatalogForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="catalog" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="fade-in bg-sand p-8 sm:p-12 lg:p-16">
            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center mb-10 lg:mb-12">
                  <span className="text-xs tracking-[0.3em] text-wood uppercase font-medium">
                    Бесплатно
                  </span>
                  <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-light text-charcoal tracking-tight">
                    Получите каталог проектов
                  </h2>
                  <p className="mt-3 text-sm text-grey-warm font-light max-w-md mx-auto">
                    48 проектов с планировками, фотографиями и ценами. Отправим на&nbsp;email в&nbsp;течение 5&nbsp;минут.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
                  <div>
                    <label htmlFor="name" className="block text-[11px] tracking-[0.15em] text-grey-warm uppercase mb-2">
                      Ваше имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Александр"
                      className="w-full px-4 py-3.5 bg-white border border-stone text-charcoal text-sm font-light placeholder:text-grey-warm/50 focus:outline-none focus:border-wood transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] tracking-[0.15em] text-grey-warm uppercase mb-2">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full px-4 py-3.5 bg-white border border-stone text-charcoal text-sm font-light placeholder:text-grey-warm/50 focus:outline-none focus:border-wood transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[11px] tracking-[0.15em] text-grey-warm uppercase mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3.5 bg-white border border-stone text-charcoal text-sm font-light placeholder:text-grey-warm/50 focus:outline-none focus:border-wood transition-colors duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-charcoal hover:bg-wood text-white text-sm font-medium tracking-wide transition-all duration-500 mt-2"
                  >
                    Получить каталог бесплатно
                  </button>
                  <p className="text-[11px] text-grey-warm/60 text-center font-light">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              </>
            ) : (
              /* Success State */
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-wood/10">
                  <svg className="w-8 h-8 text-wood" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-2xl font-light text-charcoal mb-3">
                  Каталог отправлен!
                </h3>
                <p className="text-sm text-grey-warm font-light">
                  Проверьте вашу почту {formData.email}
                  <br />
                  Наш менеджер свяжется с вами в ближайшее время
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
