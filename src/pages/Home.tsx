import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  ChevronDown,
  LockKeyhole,
  Radar,
  ShieldCheck,
} from 'lucide-react'
import type { ReactNode } from 'react'

const thesisPoints = [
  {
    kicker: '01 / Marktveränderung',
    title: 'Unternehmen müssen künftig beweisen, ob ein echter Mensch handelt.',
    body: 'KI-Agenten, Deepfakes und automatisierte Identitäten verändern Logins, Zahlungen, Verträge und Video-Prüfungen grundlegend.',
  },
  {
    kicker: '02 / Patentansatz',
    title: 'Kaican setzt nicht auf Aussehen, sondern auf physische Anwesenheit.',
    body: 'Der Ansatz zielt auf den Nachweis realer Präsenz über vorhandene Smartphone-Signale, ohne Iris-Scan, ohne Spezialgerät und ohne öffentlich offengelegte technische Detailmechanik.',
  },
  {
    kicker: '03 / Kapitalfenster',
    title: 'Das Timing ist selten: Patent, Marktbedarf und Regulierung treffen zusammen.',
    body: 'Noebel Investments öffnet ausgewählten Kapitalgebern einen vertraulichen Zugang zu einer Beteiligungsprüfung, bevor technische Einzelheiten öffentlich kommuniziert werden.',
  },
]

const signals = [
  'Patent angemeldet',
  'Bewertungsgutachten vorhanden',
  'Keine Spezialhardware',
  'Keine biometrischen Templates',
]

const markets = [
  'Banken & KYC-Prüfung',
  'Unternehmenssicherheit',
  'Versicherungsbetrug',
  'Remote-Arbeit & Zeiterfassung',
  'Plattform-Vertrauen',
  'Digitale Identität',
]

const accessSteps = [
  ['01', 'Interesse anmelden', 'Kurze Qualifikation des Investorentyps und des unverbindlichen Beteiligungsrahmens.'],
  ['02', 'Gespräch freigeben', 'Nach Prüfung wird ein vertrauliches Gespräch mit Noebel Investments koordiniert.'],
  ['03', 'Unterlagen erhalten', 'Weitere Details, Gutachten und Struktur werden ausschließlich im vertraulichen Prozess geteilt.'],
]

function PatentField() {
  return (
    <div className="patent-field" aria-hidden="true">
      {Array.from({ length: 10 }).map((_, index) => (
        <span key={index} className={`patent-node patent-node-${index + 1}`} />
      ))}
      {Array.from({ length: 7 }).map((_, index) => (
        <span key={index} className={`patent-line patent-line-${index + 1}`} />
      ))}
      <div className="patent-ring patent-ring-one" />
      <div className="patent-ring patent-ring-two" />
      <div className="patent-core">
        <Radar size={42} strokeWidth={1.1} />
      </div>
    </div>
  )
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c7a45b]">{children}</p>
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#14120f] text-[#f8f2e8] selection:bg-[#d8b768] selection:text-[#14120f]">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#e8d5a7]/12 bg-[#14120f]/78 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-4" aria-label="Noebel Investments Start">
            <img
              src="/assets/noebel-investments-logo-transparent.png"
              alt="Noebel Investments"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </a>
          <nav className="hidden items-center gap-9 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f8f2e8]/58 md:flex">
            <a className="transition hover:text-[#d8b768]" href="#thesis">Einordnung</a>
            <a className="transition hover:text-[#d8b768]" href="#moat">Patent</a>
            <a className="transition hover:text-[#d8b768]" href="#access">Zugang</a>
          </nav>
          <a
            href="#briefing"
            className="group inline-flex h-11 items-center gap-3 border border-[#d8b768]/70 px-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#f2d58b] transition hover:bg-[#d8b768] hover:text-[#14120f]"
          >
            Anfrage
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[100svh] items-end border-b border-[#e8d5a7]/12 px-5 pt-28 sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_32%,rgba(199,164,91,0.12),transparent_32%),linear-gradient(120deg,rgba(20,18,15,0.98),rgba(31,28,22,0.8)_52%,rgba(20,18,15,0.98))]" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#14120f] to-transparent" />
        <PatentField />

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] gap-12 pb-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-20">
          <div className="max-w-5xl">
            <div className="hero-reveal mb-8 flex items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d8b768]">
              <span className="h-px w-14 bg-[#d8b768]" />
              Vertraulicher Beteiligungszugang
            </div>
            <img
              src="/assets/noebel-investments-logo-transparent.png"
              alt="Noebel Investments"
              className="hero-reveal mb-9 h-auto w-[min(520px,86vw)] object-contain"
            />
            <h1 className="hero-reveal max-w-6xl text-[clamp(2.55rem,8.5vw,8.8rem)] font-semibold leading-[0.93] tracking-normal text-white">
              Patentbasierte Technologie für digitales Vertrauen.
            </h1>
            <p className="hero-reveal mt-8 max-w-3xl text-xl leading-8 text-[#f8f2e8]/74 md:text-2xl md:leading-9">
              Noebel Investments prüft Anfragen ausgewählter privater Kapitalgeber für eine Beteiligung an einer Technologie mit angemeldetem Patent und vorliegendem Bewertungsgutachten.
            </p>
            <div className="hero-reveal mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#briefing"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-[#d8b768] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#14120f] transition hover:bg-[#f1d994]"
              >
                Anfrage stellen
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a
                href="#thesis"
                className="inline-flex h-14 items-center justify-center gap-3 border border-[#e8d5a7]/18 px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#f8f2e8]/76 transition hover:border-[#e8d5a7]/42 hover:text-white"
              >
                Einordnung lesen
                <ChevronDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="hero-reveal self-end border-l border-[#d8b768]/40 pl-7 text-[#f8f2e8]/70 lg:max-w-md">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#d8b768]">Kurzprofil</p>
            <p className="mt-5 text-2xl leading-8 text-white">
              Ein Patentansatz für die Frage, ob eine digitale Handlung tatsächlich mit einem real anwesenden Menschen verbunden ist.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-5 border-t border-[#e8d5a7]/12 pt-7 sm:grid-cols-2">
              {signals.map((signal) => (
                <div key={signal} className="flex items-start gap-3 text-sm leading-5">
                  <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#d8b768]" />
                  <span>{signal}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section id="thesis" className="relative border-b border-[#e8d5a7]/12 bg-[#1b1712] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="lg:sticky lg:top-28 lg:h-fit">
            <SectionLabel>Warum jetzt</SectionLabel>
            <h2 className="max-w-xl text-5xl font-semibold leading-[0.96] text-white md:text-7xl">
              Der Markt bewegt sich in Richtung Beweisbarkeit.
            </h2>
            <p className="mt-8 max-w-md text-lg leading-8 text-[#f8f2e8]/62">
              Klassische Identitätsprüfung stößt an Grenzen. Die nächste Stufe ist der Nachweis realer Anwesenheit, ohne sensible technische Details öffentlich preiszugeben.
            </p>
          </div>
          <div className="divide-y divide-[#e8d5a7]/12 border-y border-[#e8d5a7]/12">
            {thesisPoints.map((item) => (
              <article key={item.kicker} className="group grid gap-6 py-10 md:grid-cols-[0.34fr_1fr] md:py-14">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8b768]/80">{item.kicker}</p>
                <div>
                  <h3 className="text-3xl font-semibold leading-tight text-white transition group-hover:text-[#f2d58b] md:text-5xl">
                    {item.title}
                  </h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f8f2e8]/62">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="moat" className="relative border-b border-[#e8d5a7]/12 px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#14120f,#211b12)]" />
        <div className="absolute inset-0 opacity-[0.11] [background-image:linear-gradient(rgba(216,183,104,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(216,183,104,.24)_1px,transparent_1px)] [background-size:96px_96px]" />
        <div className="relative mx-auto max-w-[1500px]">
          <SectionLabel>Schutz & Substanz</SectionLabel>
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <h2 className="max-w-5xl text-5xl font-semibold leading-[0.96] text-white md:text-8xl">
              Ein angemeldetes Patent als wirtschaftlicher Schutzraum.
            </h2>
            <p className="max-w-xl text-xl leading-9 text-[#f8f2e8]/68">
              Die Website erklärt den Markt und die Investmentlogik, nicht die technische Blaupause. Details zum Patent, zur Bewertung und zur Struktur werden erst im vertraulichen Prozess geteilt.
            </p>
          </div>

          <div className="mt-20 grid gap-px overflow-hidden border border-[#e8d5a7]/12 bg-[#e8d5a7]/12 md:grid-cols-4">
            {[
              ['Patent', 'Angemeldetes Schutzrecht als Grundlage der Beteiligungsstory.'],
              ['Bewertung', 'Vorliegendes Gutachten als Basis für die vertrauliche Einordnung.'],
              ['Diskretion', 'Keine Veröffentlichung sensibler technischer Patentdetails.'],
              ['Markt', 'Anwendungsfelder in Sicherheit, Identität, KYC und Versicherungen.'],
            ].map(([title, body]) => (
              <div key={title} className="min-h-52 bg-[#17130f]/96 p-7">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d8b768]">{title}</p>
                <p className="mt-8 text-lg leading-7 text-[#f8f2e8]/76">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#d4c29c] bg-[#efe7d6] px-5 py-24 text-[#17130f] sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-[1500px]">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a28]">Mögliche Einsatzbereiche</p>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] md:text-7xl">
              Eine Technologie, mehrere Märkte mit konkretem Bedarf.
            </h2>
            <div className="grid gap-px bg-[#17130f]/14 md:grid-cols-2">
              {markets.map((market, index) => (
                <div key={market} className="group flex min-h-28 items-center justify-between bg-[#efe7d6] p-6">
                  <span className="text-xl font-medium">{market}</span>
                  <span className="text-sm font-semibold text-[#8a6a28]">0{index + 1}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="border-b border-[#e8d5a7]/12 bg-[#14120f] px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionLabel>Investorenprozess</SectionLabel>
            <h2 className="max-w-4xl text-5xl font-semibold leading-[0.98] text-white md:text-7xl">
              Kein öffentlicher Zeichnungsprozess. Erst Prüfung, dann Gespräch.
            </h2>
          </div>
          <div className="divide-y divide-[#e8d5a7]/12 border-y border-[#e8d5a7]/12">
            {accessSteps.map(([number, title, body]) => (
              <div key={number} className="grid gap-5 py-8 sm:grid-cols-[80px_1fr]">
                <p className="text-2xl text-[#d8b768]">{number}</p>
                <div>
                  <h3 className="text-2xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 max-w-2xl text-lg leading-7 text-[#f8f2e8]/62">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="briefing" className="relative bg-[#f4eddf] px-5 py-20 text-[#17130f] sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[0.86fr_1.14fr]">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#8a6a28]">Anfrage</p>
            <h2 className="max-w-3xl text-5xl font-semibold leading-[0.98] md:text-7xl">
              Vertrauliches Gespräch anfragen.
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-8 text-[#17130f]/68">
              Das Formular ist eine unverbindliche Interessensindikation. Es findet keine Zeichnung und kein Anteilserwerb über diese Website statt.
            </p>
            <div className="mt-10 grid gap-4 text-sm text-[#17130f]/74">
              <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#8a6a28]" /> Vertraulicher Qualifikationsprozess</div>
              <div className="flex items-center gap-3"><LockKeyhole className="h-5 w-5 text-[#8a6a28]" /> Keine technischen Patentdetails öffentlich</div>
              <div className="flex items-center gap-3"><CalendarClock className="h-5 w-5 text-[#8a6a28]" /> Termin nach interner Freigabe</div>
            </div>
          </div>

          <form className="border border-[#17130f]/16 bg-[#fbf7ee] p-5 shadow-[0_30px_90px_rgba(23,19,15,0.16)] md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="field-label">
                Name
                <input className="field-input" type="text" placeholder="Vor- und Nachname" />
              </label>
              <label className="field-label">
                E-Mail
                <input className="field-input" type="email" placeholder="name@unternehmen.de" />
              </label>
              <label className="field-label">
                Telefon
                <input className="field-input" type="tel" placeholder="+49 ..." />
              </label>
              <label className="field-label">
                Investorentyp
                <select className="field-input" defaultValue="">
                  <option value="" disabled>Bitte auswählen</option>
                  <option>Privater Kapitalgeber</option>
                  <option>Unternehmer / Business Angel</option>
                  <option>Family Office</option>
                  <option>Strategischer Partner</option>
                </select>
              </label>
              <label className="field-label md:col-span-2">
                Unverbindlicher Beteiligungsrahmen
                <select className="field-input" defaultValue="">
                  <option value="" disabled>Nur als Interessensindikation</option>
                  <option>bis 10.000 EUR</option>
                  <option>10.000 bis 25.000 EUR</option>
                  <option>25.000 bis 75.000 EUR</option>
                  <option>75.000 bis 150.000 EUR</option>
                  <option>über 150.000 EUR</option>
                </select>
              </label>
              <label className="field-label md:col-span-2">
                Nachricht
                <textarea className="field-input min-h-32 resize-none py-4" placeholder="Kurz: Hintergrund, Interesse, gewünschter Terminrahmen" />
              </label>
            </div>
            <label className="mt-6 flex gap-3 text-sm leading-6 text-[#17130f]/68">
              <input type="checkbox" className="mt-1 h-4 w-4 accent-[#8a6a28]" />
              <span>
                Ich verstehe, dass diese Website ausschließlich der Kontaktaufnahme dient und kein öffentliches Angebot, keine Zeichnungsmöglichkeit und keine Anlageberatung darstellt.
              </span>
            </label>
            <button
              type="button"
              className="mt-8 inline-flex h-14 w-full items-center justify-center gap-3 bg-[#17130f] px-7 text-sm font-semibold uppercase tracking-[0.14em] text-[#f2d58b] transition hover:bg-[#2a2418] md:w-auto"
            >
              Anfrage senden
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-[#14120f] px-5 py-10 text-[#f8f2e8]/48 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 border-t border-[#e8d5a7]/12 pt-8 md:flex-row md:items-start md:justify-between">
          <div>
            <img src="/assets/noebel-investments-logo-transparent.png" alt="Noebel Investments" className="h-14 w-auto opacity-90" />
            <p className="mt-5 max-w-3xl text-sm leading-6">
              Diese Website dient ausschließlich der Kontaktaufnahme und der Vereinbarung eines vertraulichen Informationsgesprächs. Sie stellt kein öffentliches Angebot zum Erwerb von Wertpapieren, Vermögensanlagen oder sonstigen Finanzinstrumenten und keine Anlageberatung dar.
            </p>
          </div>
          <div className="flex gap-5 text-sm">
            <a className="hover:text-[#d8b768]" href="/impressum">Impressum</a>
            <a className="hover:text-[#d8b768]" href="/datenschutz">Datenschutz</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
