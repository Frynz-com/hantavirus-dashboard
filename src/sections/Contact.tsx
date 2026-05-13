import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, ArrowRight, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(leftRef.current, {
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

      gsap.from(rightRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
        opacity: 0,
        x: 40,
        duration: 0.8,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="kontakt"
      className="bg-white py-[88px] md:py-[120px]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr]">
          <div ref={leftRef}>
            <span className="section-label block mb-4">KONTAKT</span>
            <h2
              className="text-brand-black font-bold leading-[1] tracking-normal mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Objekt zeigen,
              <br />
              Angebot erhalten.
            </h2>
            <p className="text-brand-dark-gray text-base md:text-lg leading-relaxed mb-10 max-w-[440px]">
              Rufen Sie direkt an oder senden Sie eine kurze Anfrage. Amira
              erstellt Ihnen ein kostenloses und unverbindliches Angebot.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                <div className="flex flex-col gap-1">
                  <a href="tel:+4971127350523" className="text-brand-black text-xl md:text-2xl font-black hover:text-brand-red transition-colors">
                    0711 27 350 523
                  </a>
                  <a href="tel:+491728060586" className="text-brand-black text-xl md:text-2xl font-black hover:text-brand-red transition-colors">
                    0172 80 60 586
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                <a
                  href="mailto:Amirareinigung@gmail.com"
                  className="text-brand-red font-medium underline underline-offset-4 hover:text-brand-black transition-colors"
                >
                  Amirareinigung@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4 text-brand-dark-gray">
                <MapPin className="w-5 h-5 text-brand-red" strokeWidth={1.5} />
                <span>Stuttgart und Umgebung</span>
              </div>
            </div>
          </div>

          <div ref={rightRef}>
            <div className="bg-brand-black p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-brand-red text-5xl font-black mb-4">
                    ✓
                  </div>
                  <h3 className="text-white text-xl font-semibold mb-2">
                    Anfrage gesendet!
                  </h3>
                  <p className="text-brand-medium-gray">
                    Wir melden uns so schnell wie möglich bei Ihnen.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div>
                    <label className="block text-brand-medium-gray text-xs uppercase tracking-normal mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 text-white py-3 px-0 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-medium-gray"
                      placeholder="Ihr Name"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-medium-gray text-xs uppercase tracking-normal mb-2">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 text-white py-3 px-0 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-medium-gray"
                      placeholder="ihre@email.de"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-medium-gray text-xs uppercase tracking-normal mb-2">
                      Nachricht
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-transparent border-b border-white/30 text-white py-3 px-0 focus:outline-none focus:border-brand-red transition-colors placeholder:text-brand-medium-gray resize-none"
                      placeholder="Wie können wir Ihnen helfen?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center bg-brand-red py-4 text-sm font-semibold uppercase tracking-normal text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E01236] hover:shadow-[0_8px_24px_rgba(200,16,46,0.3)]"
                  >
                    Anfrage senden
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
