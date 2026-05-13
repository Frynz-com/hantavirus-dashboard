import { Link } from 'react-router';
import Navigation from '../sections/Navigation';
import Footer from '../sections/Footer';

export default function Datenschutz() {
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
              Datenschutz
            </h1>
          </div>
        </section>

        {/* Content */}
        <section className="bg-white py-16 md:py-24">
          <div className="max-w-[800px] mx-auto px-6">
            <div className="space-y-10">
              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  1. Datenschutz auf einen Blick
                </h2>
                <h3 className="text-brand-black font-semibold mb-2 mt-4">
                  Allgemeine Hinweise
                </h3>
                <p className="text-brand-dark-gray leading-relaxed">
                  Die folgenden Hinweise geben einen einfachen Überblick
                  darüber, was mit Ihren personenbezogenen Daten passiert, wenn
                  Sie diese Website besuchen. Personenbezogene Daten sind alle
                  Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  2. Verantwortlicher
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Verantwortlicher für die Datenverarbeitung auf dieser Website
                  ist:
                  <br />
                  <br />
                  Amira Gebäudereinigung GmbH
                  <br />
                  Musterstraße 123
                  <br />
                  10115 Berlin
                  <br />
                  Deutschland
                  <br />
                  <br />
                  Telefon: 0800 – 123 456 78
                  <br />
                  E-Mail:{" "}
                  <a
                    href="mailto:info@amira-reinigung.de"
                    className="text-brand-red hover:underline"
                  >
                    info@amira-reinigung.de
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  3. Datenerfassung auf dieser Website
                </h2>
                <h3 className="text-brand-black font-semibold mb-2 mt-4">
                  Kontaktformular
                </h3>
                <p className="text-brand-dark-gray leading-relaxed">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                  werden Ihre Angaben aus dem Anfrageformular inklusive der von
                  Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                  Anfrage und für den Fall von Anschlussfragen bei uns
                  gespeichert. Diese Daten geben wir nicht ohne Ihre
                  Einwilligung weiter.
                </p>
                <h3 className="text-brand-black font-semibold mb-2 mt-4">
                  Server-Log-Dateien
                </h3>
                <p className="text-brand-dark-gray leading-relaxed">
                  Der Provider der Seiten erhebt und speichert automatisch
                  Informationen in so genannten Server-Log-Dateien, die Ihr
                  Browser automatisch an uns übermittelt. Dies sind: Browsertyp
                  und Browserversion, verwendetes Betriebssystem, Referrer URL,
                  Hostname des zugreifenden Rechners, Uhrzeit der
                  Serveranfrage, IP-Adresse.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  4. Ihre Rechte
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Sie haben jederzeit das Recht auf unentgeltliche Auskunft
                  über Ihre gespeicherten personenbezogenen Daten, deren
                  Herkunft und Empfänger und den Zweck der Datenverarbeitung
                  sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                  Hierzu sowie zu weiteren Fragen zum Thema personenbezogene
                  Daten können Sie sich jederzeit an uns wenden.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  5. Widerspruch gegen Werbe-Mails
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Der Nutzung von im Rahmen der Impressumspflicht
                  veröffentlichten Kontaktdaten zur Übersendung von nicht
                  ausdrücklich angeforderter Werbung und
                  Informationsmaterialien wird hiermit widersprochen. Die
                  Betreiber der Seiten behalten sich ausdrücklich rechtliche
                  Schritte im Falle der unverlangten Zusendung von
                  Werbeinformationen, etwa durch Spam-E-Mails, vor.
                </p>
              </div>

              <div>
                <h2 className="text-brand-black text-xl font-bold mb-4 uppercase tracking-normal">
                  6. Änderungen dieser Datenschutzerklärung
                </h2>
                <p className="text-brand-dark-gray leading-relaxed">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
                  damit sie stets den aktuellen rechtlichen Anforderungen
                  entspricht oder um Änderungen unserer Leistungen in der
                  Datenschutzerklärung umzusetzen.
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
