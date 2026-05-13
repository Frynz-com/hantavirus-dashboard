import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: '7+', label: 'Jahre Erfahrung' },
  { number: '6', label: 'Kernleistungen' },
  { number: '2', label: 'Direkte Rufnummern' },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const imgInnerRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
      });

      if (imgInnerRef.current) {
        gsap.fromTo(
          imgInnerRef.current,
          { clipPath: 'inset(0 100% 0 0)' },
          {
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 80%',
              once: true,
            },
            clipPath: 'inset(0 0% 0 0)',
            duration: 1.2,
            ease: 'power3.inOut',
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ueber-uns"
      className="bg-brand-gray py-[88px] md:py-[120px]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div ref={textRef}>
            <span className="section-label block mb-4">ÜBER AMIRA</span>
            <h2
              className="text-brand-black font-bold leading-[1] tracking-normal mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Reinigung, die im Alltag
              <br />
              verlässlich bleibt.
            </h2>
            <p className="text-brand-dark-gray text-base md:text-lg leading-relaxed mb-10 max-w-[540px]">
              Seit über 7 Jahren steht Amira Gebäudereinigung für zuverlässige,
              flexible und preisbewusste Reinigung in Stuttgart. Das Team schafft
              saubere Arbeits- und Wohnumfelder, damit Kunden sich nicht selbst
              um die laufende Sauberkeit kümmern müssen.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-10">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-brand-black text-3xl md:text-[2.5rem] font-black leading-none mb-2">
                    {stat.number}
                  </div>
                  <div className="text-brand-medium-gray text-sm font-medium uppercase tracking-normal">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={imageRef} className="w-full">
            <div className="relative overflow-hidden">
              <img
                ref={imgInnerRef}
                src="/assets/about-image.jpg"
                alt="Professionelle Reinigungskraft von Amira Gebäudereinigung"
                className="h-[560px] w-full object-cover"
                style={{ clipPath: 'inset(0 100% 0 0)' }}
              />
              <div className="absolute bottom-0 left-0 max-w-[330px] bg-brand-black px-7 py-6 text-white">
                <div className="mb-2 text-sm font-semibold uppercase text-brand-red">Qualitätsversprechen</div>
                <p className="text-sm leading-relaxed text-white/78">
                  Faire Preise, schnelle Ausführung und gründliche Ergebnisse
                  für private und gewerbliche Objekte.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
