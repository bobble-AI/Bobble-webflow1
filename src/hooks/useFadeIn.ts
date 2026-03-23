import { useEffect, useRef } from 'react';

export function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const el = ref.current;
    if (el) {
      const fadeElements = el.querySelectorAll('.fade-in');
      fadeElements.forEach((element) => observer.observe(element));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
