import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: '01',
    title: 'Anfrage',
    description: 'Kontaktieren Sie uns – per Telefon, E-Mail oder Formular.',
  },
  {
    number: '02',
    title: 'Besichtigung',
    description: 'Wir besichtigen Ihre Räumlichkeiten und ermitteln Ihre Bedürfnisse.',
  },
  {
    number: '03',
    title: 'Angebot',
    description: 'Sie erhalten ein transparentes, maßgeschneidertes Angebot.',
  },
  {
    number: '04',
    title: 'Reinigung',
    description: 'Unser Team startet pünktlich und zuverlässig – immer zur vereinbarten Zeit.',
  },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header entrance
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

      // Line draw animation
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scrollTrigger: {
            trigger: nodesRef.current,
            start: 'top 85%',
            once: true,
          },
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 1.2,
          ease: 'power2.out',
        });
      }

      // Nodes pop in
      const nodes = nodesRef.current?.querySelectorAll('.process-node');
      if (nodes) {
        gsap.from(nodes, {
          scrollTrigger: {
            trigger: nodesRef.current,
            start: 'top 85%',
            once: true,
          },
          scale: 0,
          duration: 0.5,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
      }

      // Text fade up
      const texts = nodesRef.current?.querySelectorAll('.process-text');
      if (texts) {
        gsap.from(texts, {
          scrollTrigger: {
            trigger: nodesRef.current,
            start: 'top 85%',
            once: true,
          },
          opacity: 0,
          y: 20,
          duration: 0.6,
          stagger: 0.2,
          delay: 0.5,
          ease: 'power3.out',
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="prozess"
      className="bg-brand-black py-[88px] md:py-[120px]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={headerRef} className="mb-20 max-w-[760px]">
          <span className="section-label block mb-4">SO FUNKTIONIERT'S</span>
          <h2
            className="text-white font-bold leading-[1] tracking-normal"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
          >
            Vom Erstkontakt
            <br />
            bis zum gepflegten Objekt.
          </h2>
        </div>

        <div ref={nodesRef} className="relative">
          <div
            ref={lineRef}
            className="hidden md:block absolute top-[7px] left-0 right-0 h-[2px] bg-white/15"
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-start md:items-center">
                {/* Node */}
                <div className="process-node w-4 h-4 bg-brand-red mb-6 md:mb-8 md:mx-auto shrink-0" />

                {/* Text */}
                <div className="process-text text-left md:text-center">
                  <div className="text-brand-red text-lg font-bold mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-white text-lg font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-white/60 text-sm leading-relaxed max-w-[260px]">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
