import { Link } from 'react-router';
import { ArrowUp } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const leistungenLinks = [
  { label: 'Fensterreinigung', href: '/leistungen/fensterreinigung' },
  { label: 'Büroreinigung', href: '/leistungen/buero-reinigung' },
  { label: 'Treppenhausreinigung', href: '/leistungen/treppenhausreinigung' },
  { label: 'Unterhaltsreinigung', href: '/leistungen/unterhaltsreinigung' },
];

const unternehmenLinks = [
  { label: 'Über uns', href: '#ueber-uns', type: 'anchor' },
  { label: 'Unser Prozess', href: '#prozess', type: 'anchor' },
  { label: 'Referenzen', href: '#referenzen', type: 'anchor' },
  { label: 'Kontakt', href: '#kontakt', type: 'anchor' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brand-black text-white">
      <div className="max-w-[1280px] mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Logo Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <BrandLogo inverted />
            </Link>
            <p className="text-brand-medium-gray text-sm leading-relaxed">
              Professionelle Gebäudereinigung in Stuttgart mit fairen Preisen,
              flexiblen Abläufen und gründlicher Ausführung.
            </p>
          </div>

          {/* Leistungen Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-normal mb-6">
              Leistungen
            </h4>
            <ul className="space-y-3">
              {leistungenLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="text-brand-medium-gray text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-normal mb-6">
              Unternehmen
            </h4>
            <ul className="space-y-3">
              {unternehmenLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-brand-medium-gray text-sm hover:text-brand-red transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt Column */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-normal mb-6">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-brand-medium-gray">
              <li>Amira Gebäudereinigung</li>
              <li>Stuttgart und Umgebung</li>
              <li className="pt-2">
                <a
                  href="tel:+4971127350523"
                  className="hover:text-brand-red transition-colors"
                >
                  0711 27 350 523
                </a>
              </li>
              <li>
                <a
                  href="tel:+491728060586"
                  className="hover:text-brand-red transition-colors"
                >
                  0172 80 60 586
                </a>
              </li>
              <li>
                <a
                  href="mailto:Amirareinigung@gmail.com"
                  className="hover:text-brand-red transition-colors"
                >
                  Amirareinigung@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-medium-gray text-xs">
            © {new Date().getFullYear()} Amira Gebäudereinigung. Alle Rechte
            vorbehalten.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/impressum"
              className="text-brand-medium-gray text-xs hover:text-white transition-colors"
            >
              Impressum
            </Link>
            <Link
              to="/datenschutz"
              className="text-brand-medium-gray text-xs hover:text-white transition-colors"
            >
              Datenschutz
            </Link>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 bg-brand-red flex items-center justify-center hover:bg-[#E01236] transition-colors"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
