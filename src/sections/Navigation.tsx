import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X } from 'lucide-react';
import BrandLogo from '../components/BrandLogo';

const navLinks = [
  { label: 'Leistungen', href: '#leistungen', type: 'anchor' },
  { label: 'Über uns', href: '#ueber-uns', type: 'anchor' },
  { label: 'Prozess', href: '#prozess', type: 'anchor' },
  { label: 'Referenzen', href: '#referenzen', type: 'anchor' },
  { label: 'Kontakt', href: '#kontakt', type: 'anchor' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHome) return;
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const logoInverted = !scrolled && isHome;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all duration-300 ${
          scrolled || !isHome
            ? 'bg-white/95 backdrop-blur-sm border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <div className="w-full max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span onClick={() => setMobileOpen(false)}>
              <BrandLogo inverted={logoInverted} />
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              isHome ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-[0.85rem] font-medium uppercase tracking-normal transition-colors duration-300 group ${
                    scrolled || !isHome ? 'text-brand-black' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={`/${link.href}`}
                  className="relative text-[0.85rem] font-medium uppercase tracking-normal text-brand-black transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-red transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Desktop CTA */}
          {isHome ? (
            <a
              href="#kontakt"
              onClick={(e) => handleNavClick(e, '#kontakt')}
              className="hidden lg:inline-block bg-brand-red text-white font-semibold uppercase text-[0.8rem] tracking-normal px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,16,46,0.3)]"
            >
              Jetzt Anfragen
            </a>
          ) : (
            <Link
              to="/#kontakt"
              className="hidden lg:inline-block bg-brand-red text-white font-semibold uppercase text-[0.8rem] tracking-normal px-7 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(200,16,46,0.3)]"
            >
              Jetzt Anfragen
            </Link>
          )}

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X
                className={`w-6 h-6 ${
                  scrolled || !isHome ? 'text-brand-black' : 'text-white'
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  scrolled || !isHome ? 'text-brand-black' : 'text-white'
                }`}
              />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link to="/" onClick={() => setMobileOpen(false)} className="mb-4">
          <BrandLogo />
        </Link>
        {navLinks.map((link) =>
          isHome ? (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-xl font-semibold uppercase tracking-normal text-brand-black hover:text-brand-red transition-colors"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              to={`/${link.href}`}
              onClick={() => setMobileOpen(false)}
              className="text-xl font-semibold uppercase tracking-normal text-brand-black hover:text-brand-red transition-colors"
            >
              {link.label}
            </Link>
          )
        )}
        {isHome ? (
          <a
            href="#kontakt"
            onClick={(e) => handleNavClick(e, '#kontakt')}
            className="mt-4 bg-brand-red text-white font-semibold uppercase text-sm tracking-normal px-8 py-4"
          >
            Jetzt Anfragen
          </a>
        ) : (
          <Link
            to="/#kontakt"
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-brand-red text-white font-semibold uppercase text-sm tracking-normal px-8 py-4"
          >
            Jetzt Anfragen
          </Link>
        )}
      </div>
    </>
  );
}
