import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const proofPoints = ['Fenster', 'Büros', 'Treppenhäuser', 'Unterhalt'];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const proofRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.to(labelRef.current, { opacity: 1, y: 0, duration: 0.6, delay: 0.2 })
        .to(titleRef.current, { opacity: 1, y: 0, duration: 1 }, '-=0.3')
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.6')
        .to(ctaRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4')
        .to(
          proofRef.current?.children || [],
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08 },
          '-=0.35'
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-[100svh] flex items-end bg-brand-black overflow-hidden"
    >
      <img
        src="/assets/hero-glove.png"
        alt="Professionelle Oberflächenreinigung mit Mikrofasertuch"
        className="absolute inset-0 h-full w-full object-cover opacity-85"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.94)_0%,rgba(0,0,0,0.72)_38%,rgba(0,0,0,0.16)_78%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-black to-transparent" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-12 pb-14 pt-32 md:pb-20">
        <div className="max-w-[760px] text-left">
            <span
              ref={labelRef}
              className="inline-flex items-center gap-2 text-brand-red text-sm font-semibold uppercase tracking-normal mb-6 opacity-0 translate-y-5"
            >
              <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
              Gebäudereinigung aus Leidenschaft
            </span>

            <h1
              ref={titleRef}
              className="text-white font-black leading-[0.95] tracking-normal mb-8 opacity-0 translate-y-[60px]"
              style={{ fontSize: 'clamp(3rem, 7vw, 7.25rem)' }}
            >
              Amira
              <span className="block text-white/90">
                Gebäude<span className="md:hidden">-</span>
                <span className="block md:inline">reinigung</span>
              </span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-white/80 text-lg md:text-xl font-normal leading-relaxed max-w-[610px] mb-10 opacity-0 translate-y-5"
            >
              Ihre Reinigungsfirma in Stuttgart für Fenster, Büros,
              Treppenhäuser, Teppiche und regelmäßige Unterhaltsreinigung.
            </p>

            <div ref={ctaRef} className="flex flex-wrap gap-4 opacity-0 translate-y-5">
              <a
                href="#kontakt"
                onClick={(e) => handleScrollTo(e, '#kontakt')}
                className="btn-primary"
              >
                Angebot einholen
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#leistungen"
                onClick={(e) => handleScrollTo(e, '#leistungen')}
                className="btn-outline"
              >
                Leistungen ansehen
              </a>
            </div>

            <div ref={proofRef} className="mt-14 grid grid-cols-2 gap-px bg-white/15 md:grid-cols-4">
              {proofPoints.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 bg-brand-black/70 px-4 py-4 text-white/80 opacity-0 translate-y-4 backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-red" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex max-w-[760px] flex-col gap-4 border-l-4 border-brand-red pl-5 text-white/75 md:flex-row md:items-center md:gap-10">
            <div>
              <div className="text-3xl font-black text-white">7+</div>
              <div className="text-sm">Jahre Erfahrung</div>
            </div>
            <div className="h-px w-full bg-white/15 md:h-10 md:w-px" />
            <p className="max-w-[420px] text-sm leading-relaxed">
              Zuverlässig, flexibel und preisbewusst: Amira schafft saubere
              Arbeits- und Wohnumfelder in Stuttgart und Umgebung.
            </p>
          </div>
      </div>
    </section>
  );
}
