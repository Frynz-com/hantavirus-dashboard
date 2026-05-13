import { Link } from 'react-router';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

export default function Impressum() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page Header */}
        <section className="bg-brand-black pt-32 pb-16">
          <div className="max-w-[1280px] mx-auto px-6">
            <span className="text-brand-red text-sm font-semibold uppercase tracking-normal mb-4 block">
              Rechtliches
            </span>
            <h1
              className="text-white font-black leading-[0.95] tracking-normal"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              Impressum
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="space-y-10">
              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Angaben gemäß § 5 TMG
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Amira Gebäudereinigung
                  <br />
                  Stuttgart und Umgebung
                  <br />
                  Deutschland
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Vertreten durch
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Verantwortliche Angaben bitte final mit dem Betreiber
                  abgleichen.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Kontakt
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Telefon: 0711 27 350 523
                  <br />
                  Mobil: 0172 80 60 586
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:Amirareinigung@gmail.com"
                    className="text-brand-red hover:underline"
                  >
                    Amirareinigung@gmail.com
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Registereintrag
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Eintragung im Handelsregister.
                  <br />
                  Registergericht: Angaben bitte ergänzen
                  <br />
                  Registernummer: Angaben bitte ergänzen
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Umsatzsteuer-ID
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
                  <br />
                  Angaben bitte ergänzen, falls vorhanden
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Streitschlichtung
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Die Europäische Kommission stellt eine Plattform zur
                  Online-Streitbeilegung (OS) bereit:{" "}
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-red hover:underline"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                  .<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  Haftung für Inhalte
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                  Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                  verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                  gespeicherte fremde Informationen zu überwachen oder nach
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                  hinweisen.
                </p>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-black/10">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-brand-red font-medium uppercase tracking-normal text-sm hover:text-brand-black transition-colors"
              >
                ← Zurück zur Startseite
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
