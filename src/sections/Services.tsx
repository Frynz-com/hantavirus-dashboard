import { useRef, useLayoutEffect } from 'react';
import { Link } from 'react-router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Building2, Home, Sparkles } from 'lucide-react';
import { services } from '../data/services';

gsap.registerPlugin(ScrollTrigger);

const icons = [Sparkles, Building2, Home, Sparkles, Building2, Home];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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

      const cards = cardsRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.from(cards, {
          scrollTrigger: {
            trigger: cardsRef.current,
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
      id="leistungen"
      className="bg-white py-[88px] md:py-[120px]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
          <span className="section-label block mb-4">UNSERE LEISTUNGEN</span>
          <h2
            className="text-brand-black font-bold leading-[1] tracking-normal"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Leistungen,
            <br />
            die sauber greifen.
          </h2>
          </div>
          <p className="max-w-[360px] text-brand-dark-gray leading-relaxed">
            Kurz auf der Startseite. Ausführlich auf den Leistungsseiten.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid gap-px bg-black/10 border-y border-black/10 md:grid-cols-3"
        >
          {services.map((service, index) => (
            <Link
              key={index}
              to={`/leistungen/${service.slug}`}
              className="service-card group bg-white p-7 transition-colors duration-300 hover:bg-brand-gray md:min-h-[230px] md:p-8"
            >
              <div className="flex items-center gap-5">
                <div className="flex h-12 w-12 items-center justify-center bg-brand-black transition-colors duration-300 group-hover:bg-brand-red">
                  {(() => {
                    const Icon = icons[index] || Sparkles;
                    return <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />;
                  })()}
                </div>
                <span className="text-sm font-black text-brand-red">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-brand-black text-2xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-brand-dark-gray">
                  {service.short}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase text-brand-red">
                  Details
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
