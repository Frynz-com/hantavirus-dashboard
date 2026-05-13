import { Link, Navigate, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Check } from 'lucide-react';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';
import { services } from '../data/services';

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <Navigation />
      <main>
        <section className="bg-brand-black pt-32 pb-20 text-white">
          <div className="max-w-[1280px] mx-auto px-6">
            <Link
              to="/#leistungen"
              className="mb-10 inline-flex items-center gap-2 text-sm font-semibold uppercase text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Leistungen
            </Link>
            <span className="section-label block mb-4">Amira Stuttgart</span>
            <h1
              className="max-w-[900px] font-black leading-[0.95] tracking-normal"
              style={{ fontSize: 'clamp(2.7rem, 6vw, 6rem)' }}
            >
              {service.title}
            </h1>
            <p className="mt-8 max-w-[620px] text-lg leading-relaxed text-white/72">
              {service.intro}
            </p>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="max-w-[1280px] mx-auto grid gap-14 px-6 lg:grid-cols-[0.72fr_0.28fr]">
            <div>
              <h2 className="mb-8 text-3xl font-bold text-brand-black md:text-5xl">
                Sauber geplant. Gründlich ausgeführt.
              </h2>
              <p className="max-w-[760px] text-lg leading-relaxed text-brand-dark-gray">
                {service.details}
              </p>
              <div className="mt-10 grid gap-px bg-black/10 md:grid-cols-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-center gap-3 bg-brand-gray p-5">
                    <Check className="h-5 w-5 shrink-0 text-brand-red" />
                    <span className="font-medium text-brand-black">{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            <aside className="bg-brand-black p-8 text-white">
              <h3 className="text-2xl font-bold">Kostenlos anfragen</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/65">
                Beschreiben Sie kurz Ihr Objekt. Amira meldet sich mit einem
                unverbindlichen Angebot.
              </p>
              <a href="tel:+491728060586" className="mt-8 block text-2xl font-black">
                0172 80 60 586
              </a>
              <Link
                to="/#kontakt"
                className="mt-8 inline-flex items-center justify-center bg-brand-red px-6 py-4 text-sm font-semibold uppercase text-white"
              >
                Kontakt öffnen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
