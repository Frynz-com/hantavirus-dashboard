import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const references = [
  { src: '/assets/ref-1.jpg', alt: 'Gepflegte Praxisräume nach der Reinigung', label: 'Praxisräume' },
  { src: '/assets/ref-2.jpg', alt: 'Glasreinigung in modernen Praxisräumen', label: 'Glasflächen' },
  { src: '/assets/ref-4.jpg', alt: 'Blitzsaubere Praxisflure', label: 'Flurbereiche' },
  { src: '/assets/ref-3.jpg', alt: 'Hygienisch gepflegte Objektfläche', label: 'Objektdetails' },
  { src: '/assets/ref-5.jpg', alt: 'Gepflegte Behandlungsräume', label: 'Behandlungsräume' },
  { src: '/assets/ref-6.jpg', alt: 'Sauberer Sanitärbereich mit großen Fenstern', label: 'Sanitärbereiche' },
];

const testimonials = [
  {
    quote:
      'Sehr zuverlässig, flexibel bei den Zeiten und die Räume sind morgens sichtbar gepflegt.',
    name: 'Praxisleitung',
    meta: 'Gesundheitszentrum Stuttgart',
  },
  {
    quote:
      'Die Unterhaltsreinigung läuft ruhig im Hintergrund. Genau so soll es sein.',
    name: 'Büroleitung',
    meta: 'Dienstleistungsunternehmen',
  },
  {
    quote:
      'Schnelle Ausführung, faire Preise und ein direkter Ansprechpartner.',
    name: 'Hausverwaltung',
    meta: 'Mehrparteienhaus Stuttgart',
  },
];

export default function Referenzen() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headerRef.current, {
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      const items = gridRef.current?.querySelectorAll('.ref-item');
      if (items) {
        gsap.from(items, {
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 40,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
        ref={sectionRef}
        id="referenzen"
        className="bg-white py-[88px] md:py-[120px]"
      >
        <div className="max-w-[1280px] mx-auto px-6">
          <div ref={headerRef} className="mb-16 grid gap-8 md:grid-cols-[0.62fr_0.38fr] md:items-end">
            <div>
            <span className="section-label block mb-4">REFERENZEN</span>
            <h2
              className="text-brand-black font-bold leading-[1] tracking-normal"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Ergebnisse, die
              <br />
              Vertrauen schaffen.
            </h2>
            </div>
            <p className="mt-6 max-w-[560px] text-brand-dark-gray leading-relaxed">
              Systematische Einblicke in gepflegte Praxis-, Glas-, Flur- und
              Sanitärflächen. Ruhig, einheitlich und ohne ablenkende Klickflächen.
            </p>
          </div>

          <div
            ref={gridRef}
            className="grid grid-cols-1 gap-px bg-black/10 sm:grid-cols-2 lg:grid-cols-3"
          >
            {references.map((ref, index) => (
              <div
                key={index}
                className="ref-item group relative aspect-[4/3] overflow-hidden bg-brand-gray"
              >
                <img
                  src={ref.src}
                  alt={ref.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/8 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
                  <span className="text-sm font-semibold uppercase tracking-normal text-white">
                    {ref.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-px bg-black/10 md:grid-cols-3">
            {testimonials.map((item) => (
              <figure key={item.meta} className="bg-brand-gray p-7 md:p-8">
                <blockquote className="text-lg font-semibold leading-relaxed text-brand-black">
                  "{item.quote}"
                </blockquote>
                <figcaption className="mt-8 border-t border-black/10 pt-5">
                  <div className="text-sm font-bold uppercase text-brand-red">
                    {item.name}
                  </div>
                  <div className="mt-1 text-sm text-brand-dark-gray">{item.meta}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
  );
}
