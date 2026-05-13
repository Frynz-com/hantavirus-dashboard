import { useMemo, useState, type ComponentType, type ReactNode } from "react"
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Building2,
  CalendarDays,
  Check,
  ClipboardCheck,
  Download,
  ExternalLink,
  FileText,
  FlaskConical,
  HeartHandshake,
  HelpCircle,
  Home,
  Info,
  LayoutDashboard,
  LifeBuoy,
  LockKeyhole,
  MessageCircle,
  Microscope,
  Newspaper,
  PackageCheck,
  Send,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  SprayCan,
  Star,
  Wrench,
} from "lucide-react"
import { authorityContacts, authorityWorkflow, equipmentGroups, newsItems, portalResources, supplierFilters, suppliers, templates, type PortalResource, type RiskLevel, type Supplier } from "@/data/hantavirusPortal"

type NavKey =
  | "overview"
  | "steps"
  | "suppliers"
  | "equipment"
  | "cleaning"
  | "pests"
  | "labs"
  | "updates"
  | "templates"
  | "checks"
  | "community"
  | "legal"
  | "support"

type NavItem = {
  key: NavKey
  label: string
  icon: ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { key: "overview", label: "Übersicht", icon: LayoutDashboard },
  { key: "steps", label: "Erste Schritte", icon: Sparkles },
  { key: "suppliers", label: "Lieferanten", icon: Building2 },
  { key: "equipment", label: "Ausrüstung", icon: PackageCheck },
  { key: "cleaning", label: "Reinigung & Desinfektion", icon: SprayCan },
  { key: "pests", label: "Schädlingsprävention", icon: ShieldCheck },
  { key: "labs", label: "Labor- & Fachpartner", icon: FlaskConical },
  { key: "updates", label: "Aktuelles & Behörden", icon: Newspaper },
  { key: "templates", label: "Vorlagen", icon: FileText },
  { key: "checks", label: "Checklisten", icon: ClipboardCheck },
  { key: "community", label: "Community", icon: MessageCircle },
  { key: "legal", label: "Rechtliche Hinweise", icon: ShieldAlert },
  { key: "support", label: "Support", icon: LifeBuoy },
]

const statuses = ["Offen", "In Prüfung", "Beschafft", "Nicht relevant"]

const checklistItems = [
  "Lieferantenprüfung",
  "Ausrüstung beschaffen",
  "Rechtliche Prüfung",
  "Fachpartner kontaktieren",
  "Website-/Marketing-Hinweise prüfen",
  "Keine medizinischen Versprechen verwenden",
  "Keine Heilungs-/Diagnoseversprechen machen",
  "Keine Zulassung suggerieren",
  "Keine Garantie auf Umsatz/Kunden geben",
]

const cleaningItems = [
  "Staubaufwirbelung vermeiden",
  "nicht trocken fegen",
  "nicht normal staubsaugen",
  "vorher lüften",
  "Exkremente/Nestmaterial anfeuchten",
  "PSA tragen",
  "feucht aufnehmen",
  "Flächen reinigen/desinfizieren",
  "korrekt entsorgen",
  "Hände reinigen/desinfizieren",
]

const legalItems = [
  "Keine medizinische Beratung",
  "Keine rechtliche Beratung",
  "Keine Steuerberatung",
  "Keine Zulassungsberatung",
  "Keine Garantie für Produktzulassung",
  "Keine Garantie für Lieferbarkeit",
  "Keine Garantie für Umsatz oder Erfolg",
  "Keine Haftung für Drittanbieter",
  "Links führen zu externen Anbietern",
  "Jeder Nutzer muss selbst prüfen, ob Produkte und Dienstleistungen für seinen Zweck geeignet und zulässig sind",
  "Diagnostik am Menschen nur durch berechtigte medizinische Stellen",
]

function riskLabel(level: RiskLevel) {
  if (level === "high") return "Medizinisch sensibel"
  if (level === "medium") return "Fachprüfung empfohlen"
  return "Allgemeine Ausrüstung"
}

function riskClass(level: RiskLevel) {
  if (level === "high") return "border-rose-200 bg-rose-50 text-rose-700"
  if (level === "medium") return "border-amber-200 bg-amber-50 text-amber-700"
  return "border-emerald-200 bg-emerald-50 text-emerald-700"
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`rounded-[22px] border border-slate-200/80 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] ${className}`}>{children}</div>
}

function SectionTitle({ eyebrow, title, text }: { eyebrow?: string; title: string; text?: string }) {
  return (
    <div className="mb-6">
      {eyebrow ? <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-teal-700">{eyebrow}</p> : null}
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950 md:text-3xl">{title}</h2>
      {text ? <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">{text}</p> : null}
    </div>
  )
}

function ResourceGrid({ resources, title = "Fachquellen und Orientierung" }: { resources: PortalResource[]; title?: string }) {
  return (
    <div className="mt-7">
      <h3 className="mb-4 text-lg font-semibold text-slate-950">{title}</h3>
      <div className="grid gap-4 md:grid-cols-2">
        {resources.map((resource) => (
          <Card key={resource.url} className="p-5">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">{resource.area}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{resource.organization}</span>
            </div>
            <h4 className="text-base font-semibold text-slate-950">{resource.title}</h4>
            <p className="mt-2 text-sm leading-6 text-slate-600">{resource.description}</p>
            <p className="mt-3 rounded-2xl bg-amber-50 p-3 text-xs font-semibold leading-5 text-amber-900">{resource.riskNote}</p>
            <a href={resource.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white hover:bg-teal-700">
              Quelle öffnen <ExternalLink className="h-4 w-4" />
            </a>
          </Card>
        ))}
      </div>
    </div>
  )
}

function ImportantNotice() {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-[28px] border border-teal-200 bg-white p-5 shadow-[0_22px_70px_rgba(13,148,136,0.16)] md:p-7">
      <div className="absolute right-0 top-0 h-full w-2 bg-teal-500" />
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-600 text-white shadow-lg shadow-teal-600/25">
            <Info className="h-6 w-6" />
          </div>
          <div>
            <span className="inline-flex rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-teal-800">Wichtiger Hinweis</span>
            <p className="mt-4 max-w-5xl text-base font-medium leading-7 text-slate-800">
              Du erhältst Zugang zu einer strukturierten Lieferanten- und Ausrüstungsübersicht rund um Hantavirus-Prävention, Schutzmaterial, Reinigung, Desinfektion, Schädlingsprävention und mögliche Labor-/Fachpartner. Welche Produkte oder Dienstleistungen für dein konkretes Vorhaben geeignet sind, prüfst du eigenverantwortlich mit den jeweiligen Anbietern und Fachstellen. Es erfolgt keine medizinische Beratung, keine rechtliche Beratung, keine Zulassungsprüfung und keine Haftungsübernahme.
            </p>
          </div>
        </div>
        <button
          className={`inline-flex h-12 shrink-0 items-center justify-center gap-2 rounded-2xl px-5 text-sm font-bold transition ${acknowledged ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200" : "bg-slate-950 text-white hover:bg-teal-700"}`}
          onClick={() => setAcknowledged(true)}
        >
          {acknowledged ? <Check className="h-4 w-4" /> : <BadgeCheck className="h-4 w-4" />}
          {acknowledged ? "Verstanden" : "Hinweis verstanden"}
        </button>
      </div>
    </div>
  )
}

function Sidebar({ active, setActive }: { active: NavKey; setActive: (key: NavKey) => void }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[290px] shrink-0 border-r border-slate-800/70 bg-slate-950 px-4 py-5 text-white lg:block">
      <div className="mb-7 flex items-center gap-3 px-2">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-400 text-slate-950">
          <Shield className="h-6 w-6" />
        </div>
        <div>
          <p className="text-sm font-semibold leading-tight">Hantavirus</p>
          <p className="text-xs text-slate-400">Präventionsnetzwerk</p>
        </div>
      </div>
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const selected = active === item.key
          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`flex w-full items-center gap-3 rounded-2xl px-3 py-2.5 text-left text-sm font-medium transition ${selected ? "bg-white text-slate-950 shadow-lg" : "text-slate-300 hover:bg-slate-900 hover:text-white"}`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          )
        })}
      </nav>
      <div className="mt-8 rounded-[20px] border border-slate-800 bg-slate-900 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-teal-200">
          <LockKeyhole className="h-4 w-4" />
          Geschützter Bereich
        </div>
        <p className="text-xs leading-5 text-slate-400">Interne Orientierung für Beschaffung, Dokumentation und Fachstellenkontakt.</p>
      </div>
    </aside>
  )
}

function MobileNav({ active, setActive }: { active: NavKey; setActive: (key: NavKey) => void }) {
  return (
    <div className="lg:hidden">
      <div className="flex items-center justify-between bg-slate-950 px-4 py-4 text-white">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-400 text-slate-950">
            <Shield className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Hantavirus Präventionsnetzwerk</p>
            <p className="text-xs text-slate-400">Mitglieder-Dashboard</p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 overflow-x-auto border-b border-slate-200 bg-white px-4 py-3">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${active === item.key ? "bg-slate-950 text-white" : "bg-slate-100 text-slate-700"}`}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

function Overview({ setActive }: { setActive: (key: NavKey) => void }) {
  const tiles = [
    ["Lieferantenübersicht", "Mögliche Anbieter, Kategorien und Prüfhinsweise strukturiert durchsuchen.", Building2, "suppliers" as NavKey],
    ["Ausrüstungs-Checkliste", "PSA, Reinigung und Dokumentation mit Status verfolgen.", PackageCheck, "equipment" as NavKey],
    ["Aktuelles & Behörden", "Offizielle Quellen, Monitoring und Stadt-/Gesundheitsamt-Anfragen.", Newspaper, "updates" as NavKey],
    ["Vorlagen & Dokumente", "Anfragen, Einsatzprotokolle, Kundenhinweise und Behördenkontakt.", FileText, "templates" as NavKey],
  ]
  const info = ["Keine medizinische Beratung", "Eigenverantwortliche Prüfung", "Nur Informations- und Orientierungsplattform", "Keine Garantie für Zulassung oder Eignung"]

  return (
    <section>
      <SectionTitle
        eyebrow="Übersicht"
        title="Willkommen im Hantavirus-Präventionsnetzwerk"
        text="Dieses Dashboard unterstützt dich dabei, dich strukturiert über Ausrüstung, Lieferanten, Schutzmaterial, Reinigungsprozesse, Schädlingsprävention und mögliche Fachpartner zu informieren. Die konkrete Auswahl, Prüfung und rechtliche Bewertung liegt bei dir und den jeweiligen Fachstellen."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiles.map(([title, text, Icon, key]) => (
          <button key={title as string} onClick={() => setActive(key as NavKey)} className="group rounded-[24px] border border-slate-200 bg-white p-5 text-left shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:border-teal-200 hover:shadow-[0_22px_60px_rgba(13,148,136,0.13)]">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-teal-300">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-950">{title as string}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{text as string}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-700">
              Öffnen <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </button>
        ))}
      </div>
      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {info.map((item) => (
          <Card key={item} className="p-5">
            <div className="flex items-center gap-3">
              <ShieldAlert className="h-5 w-5 text-amber-600" />
              <p className="text-sm font-bold text-slate-800">{item}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function Steps() {
  const steps = [
    ["Konzept verstehen", "Das Portal hilft dir, relevante Bereiche wie PSA, Reinigung, Desinfektion, Schädlingsprävention und Fachkontakte zu strukturieren."],
    ["Einsatzbereich wählen", "Reinigungsdienstleistung, Schädlingsprävention, B2B-Präventionsberatung, Vermittlung an Fachstellen oder Informationsangebot."],
    ["Lieferanten prüfen", "Prüfe bei jedem Anbieter selbst Preise, Verfügbarkeit, Zulassung, Verwendungszweck und rechtliche Anforderungen."],
    ["Keine medizinischen Aussagen machen", "Diagnostik, Befundung und medizinische Beratung gehören ausschließlich in die Hände qualifizierter medizinischer Stellen."],
    ["Dokumentation nutzen", "Nutz die bereitgestellten Checklisten und Vorlagen als organisatorische Hilfe."],
  ]
  return (
    <section>
      <SectionTitle eyebrow="Erste Schritte" title="Strukturierter Einstieg" text="Die Schritte sind als organisatorische Orientierung gedacht und ersetzen keine fachliche Prüfung." />
      <div className="grid gap-4">
        {steps.map(([title, text], index) => (
          <Card key={title} className="p-5">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-50 text-lg font-black text-teal-700">{index + 1}</div>
              <div>
                <h3 className="text-lg font-semibold text-slate-950">Schritt {index + 1}: {title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                {index === 1 ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Reinigungsdienstleistung", "Schädlingsprävention", "B2B-Präventionsberatung", "Vermittlung an Fachstellen", "Informationsangebot"].map((option) => (
                      <span key={option} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{option}</span>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function SupplierCard({ supplier, favorite, onFavorite }: { supplier: Supplier; favorite: boolean; onFavorite: () => void }) {
  const disabled = supplier.website === "#"
  return (
    <Card className="flex h-full flex-col p-5">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">{supplier.category}</span>
          <h3 className="mt-3 text-lg font-semibold leading-snug text-slate-950">{supplier.name}</h3>
        </div>
        <button onClick={onFavorite} className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border ${favorite ? "border-teal-200 bg-teal-50 text-teal-700" : "border-slate-200 bg-white text-slate-400"}`} aria-label="Favorit umschalten">
          <Star className={`h-5 w-5 ${favorite ? "fill-current" : ""}`} />
        </button>
      </div>
      <p className="text-sm leading-6 text-slate-600">{supplier.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        <span className={`rounded-full border px-3 py-1 text-xs font-bold ${riskClass(supplier.riskLevel)}`}>{riskLabel(supplier.riskLevel)}</span>
        <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600">Eigenprüfung erforderlich</span>
      </div>
      <div className="mt-4 text-sm">
        <p className="font-semibold text-slate-950">Geeignet für</p>
        <p className="mt-1 leading-6 text-slate-600">{supplier.suitableFor.join(", ")}</p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs font-bold text-slate-600">
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-400">Linktyp</p>
          <p className="mt-1 text-slate-800">{supplier.linkType}</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-3">
          <p className="text-slate-400">Geprüft am</p>
          <p className="mt-1 text-slate-800">{supplier.lastChecked}</p>
        </div>
      </div>
      <div className="mt-4 rounded-2xl bg-amber-50 p-3 text-xs font-medium leading-5 text-amber-900">
        <AlertTriangle className="mr-2 inline h-4 w-4" />
        {supplier.notes}
      </div>
      <div className="mt-auto pt-5">
        <a
          href={disabled ? undefined : supplier.website}
          target={disabled ? undefined : "_blank"}
          rel="noreferrer"
          className={`inline-flex h-11 w-full items-center justify-center gap-2 rounded-2xl text-sm font-bold ${disabled ? "cursor-not-allowed bg-slate-100 text-slate-400" : "bg-slate-950 text-white hover:bg-teal-700"}`}
        >
          Anbieter öffnen <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </Card>
  )
}

function SuppliersPage() {
  const [query, setQuery] = useState("")
  const [activeFilter, setActiveFilter] = useState("Alle")
  const [favorites, setFavorites] = useState<string[]>([])

  const filtered = useMemo(() => {
    const needle = query.toLowerCase()
    return suppliers.filter((supplier) => {
      const matchesText = [supplier.name, supplier.category, supplier.description, supplier.region, supplier.status, supplier.tags.join(" ")].join(" ").toLowerCase().includes(needle)
      const matchesFilter = activeFilter === "Alle" || supplier.tags.includes(activeFilter) || supplier.category === activeFilter
      return matchesText && matchesFilter
    })
  }, [query, activeFilter])

  return (
    <section>
      <SectionTitle eyebrow="Lieferanten" title="Filterbare Lieferanten- und Ausrüstungsübersicht" text="Beispieldaten sind klar markiert. Echte Anbieter, Links und Prüfstati können später zentral in der Supplier-Datenstruktur gepflegt werden." />
      <div className="mb-5 grid gap-4 md:grid-cols-4">
        {[
          ["Einträge", suppliers.length.toString()],
          ["Medizinisch sensibel", suppliers.filter((supplier) => supplier.riskLevel === "high").length.toString()],
          ["Fachprüfung", suppliers.filter((supplier) => supplier.riskLevel === "medium").length.toString()],
          ["Kategorien", new Set(suppliers.map((supplier) => supplier.category)).size.toString()],
        ].map(([label, value]) => (
          <Card key={label} className="p-4">
            <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-400">{label}</p>
            <p className="mt-2 text-2xl font-semibold text-slate-950">{value}</p>
          </Card>
        ))}
      </div>
      <Card className="mb-5 p-4">
        <div className="flex flex-col gap-3 xl:flex-row xl:items-center">
          <label className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Lieferanten, Kategorie, Region oder Status suchen" className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm font-medium text-slate-800 outline-none ring-teal-500 transition focus:bg-white focus:ring-2" />
          </label>
          <select value={activeFilter} onChange={(event) => setActiveFilter(event.target.value)} className="h-12 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700 outline-none ring-teal-500 focus:ring-2">
            <option>Alle</option>
            {supplierFilters.map((filter) => <option key={filter}>{filter}</option>)}
          </select>
        </div>
      </Card>
      {filtered.length ? (
        <>
          <div className="mb-5 overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr] gap-3 border-b border-slate-200 bg-slate-50 px-5 py-3 text-xs font-black uppercase tracking-[0.14em] text-slate-500 max-md:hidden">
              <span>Name</span><span>Kategorie</span><span>Region</span><span>Risiko</span>
            </div>
            {filtered.map((supplier) => (
              <div key={supplier.id} className="grid grid-cols-[1.3fr_0.9fr_0.8fr_0.8fr] gap-3 border-b border-slate-100 px-5 py-4 text-sm last:border-b-0 max-md:hidden">
                <span className="font-semibold text-slate-950">{supplier.name}</span>
                <span className="text-slate-600">{supplier.category}</span>
                <span className="text-slate-600">{supplier.region}</span>
                <span><span className={`rounded-full border px-2.5 py-1 text-xs font-bold ${riskClass(supplier.riskLevel)}`}>{riskLabel(supplier.riskLevel)}</span></span>
              </div>
            ))}
          </div>
          <div className="grid gap-4 xl:grid-cols-2">
            {filtered.map((supplier) => (
              <SupplierCard
                key={supplier.id}
                supplier={supplier}
                favorite={favorites.includes(supplier.id)}
                onFavorite={() => setFavorites((current) => current.includes(supplier.id) ? current.filter((id) => id !== supplier.id) : [...current, supplier.id])}
              />
            ))}
          </div>
        </>
      ) : (
        <Card className="p-8 text-center">
          <Search className="mx-auto h-10 w-10 text-slate-300" />
          <h3 className="mt-4 text-lg font-semibold text-slate-950">Keine Treffer</h3>
          <p className="mt-2 text-sm text-slate-600">Passe Suche oder Filter an. Später gepflegte Anbieter erscheinen automatisch in dieser Ansicht.</p>
        </Card>
      )}
    </section>
  )
}

function EquipmentPage() {
  const allItems = equipmentGroups.flatMap((group) => group.items)
  const [itemStatus, setItemStatus] = useState<Record<string, string>>(() => Object.fromEntries(allItems.map((item) => [item, "Offen"])))
  const complete = allItems.filter((item) => itemStatus[item] === "Beschafft" || itemStatus[item] === "Nicht relevant").length
  const progress = Math.round((complete / allItems.length) * 100)

  return (
    <section>
      <SectionTitle eyebrow="Ausrüstung" title="Einkaufs- und Ausrüstungsübersicht" text="Jede Position kann als offen, in Prüfung, beschafft oder nicht relevant markiert werden." />
      <Card className="mb-5 p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-bold text-slate-950">Fortschritt</p>
            <p className="text-sm text-slate-600">{complete} von {allItems.length} Positionen abgeschlossen oder als nicht relevant markiert</p>
          </div>
          <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100 md:w-72">
            <div className="h-full rounded-full bg-teal-500 transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </Card>
      <div className="grid gap-5 xl:grid-cols-3">
        {equipmentGroups.map((group) => (
          <Card key={group.title} className="p-5">
            <h3 className="mb-4 text-lg font-semibold text-slate-950">{group.title}</h3>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-3">
                  <div className="mb-3 flex items-center gap-3">
                    <input type="checkbox" checked={itemStatus[item] === "Beschafft"} onChange={(event) => setItemStatus((current) => ({ ...current, [item]: event.target.checked ? "Beschafft" : "Offen" }))} className="h-4 w-4 accent-teal-600" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                  <select value={itemStatus[item]} onChange={(event) => setItemStatus((current) => ({ ...current, [item]: event.target.value }))} className="h-10 w-full rounded-xl border border-slate-200 bg-white px-3 text-xs font-bold text-slate-700 outline-none">
                    {statuses.map((status) => <option key={status}>{status}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function CleaningPage() {
  const resources = portalResources.filter((resource) => ["Fachinformation", "Kundeninformation", "Arbeitsschutz", "Regelwerk", "Internationale Orientierung"].includes(resource.area))
  return (
    <section>
      <SectionTitle eyebrow="Reinigung & Desinfektion" title="Allgemeine Orientierung für saubere Abläufe" text="Diese Inhalte ersetzen keine Gefährdungsbeurteilung, keine Hygieneberatung und keine behördliche oder fachliche Prüfung." />
      <div className="grid gap-4 md:grid-cols-2">
        {cleaningItems.map((item) => (
          <Card key={item} className="p-5">
            <div className="flex gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <Check className="h-5 w-5" />
              </div>
              <p className="font-semibold text-slate-800">{item}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-5 rounded-[22px] border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-6 text-amber-900">
        <AlertTriangle className="mr-2 inline h-5 w-5" />
        Als allgemeine Orientierung formuliert, nicht als verbindliche Arbeitsanweisung.
      </div>
      <ResourceGrid resources={resources} />
    </section>
  )
}

function LabsPage() {
  const cards = ["Medizinische Labore", "Diagnostikhersteller", "Betriebsärzte", "Arztpraxen", "Laborlogistik", "Gesundheitsämter / Fachstellen", "Arbeitsschutzberater"]
  const resources = portalResources.filter((resource) => ["Labor / Fachpartner", "Fachstellen", "Fachinformation"].includes(resource.area))
  return (
    <section>
      <SectionTitle
        eyebrow="Labor- & Fachpartner"
        title="Labor-, Diagnostik- und Fachpartner"
        text="Dieser Bereich dient ausschließlich der Orientierung zu möglichen fachlichen Ansprechpartnern. Diagnostische Leistungen am Menschen dürfen nur durch dafür berechtigte medizinische Stellen, Labore, Ärzte oder qualifizierte Partner erfolgen."
      />
      <div className="mb-5 rounded-[22px] border border-amber-300 bg-amber-50 p-5 text-sm font-bold leading-6 text-amber-950">
        <ShieldAlert className="mr-2 inline h-5 w-5" />
        Keine eigenständige Testdurchführung am Menschen ohne berechtigten medizinischen Partner.
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((card) => (
          <Card key={card} className="p-5">
            <Microscope className="mb-4 h-7 w-7 text-teal-700" />
            <h3 className="text-lg font-semibold text-slate-950">{card}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Kontakt und Eignung eigenverantwortlich prüfen; keine Anbieter- oder Zulassungszusage.</p>
          </Card>
        ))}
      </div>
      <ResourceGrid resources={resources} />
    </section>
  )
}

function UpdatesPage() {
  return (
    <section>
      <SectionTitle
        eyebrow="Aktuelles & Behörden"
        title="Monitoring, Fachquellen und Stadtanfragen"
        text="Dieser Bereich hilft Nutzern, offizielle Quellen zu beobachten und Anfragen an Stadt, Gesundheitsamt oder Fachstellen sauber vorzubereiten. Presse- und News-Links sind nur Monitoring-Hilfen und müssen gegen offizielle Quellen geprüft werden."
      />
      <div className="mb-5 rounded-[22px] border border-amber-200 bg-amber-50 p-5 text-sm font-semibold leading-6 text-amber-950">
        <AlertTriangle className="mr-2 inline h-5 w-5" />
        Keine Behörde, Stadt oder Fachstelle wird durch dieses Portal vertreten. Antworten dürfen nicht als pauschale Zulassung, Freigabe oder rechtliche Absicherung vermarktet werden.
      </div>
      <div className="grid gap-4 xl:grid-cols-[1.25fr_0.75fr]">
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-950">News- und Quellenfeed</h3>
          <div className="grid gap-4">
            {newsItems.map((item) => (
              <Card key={item.url} className="p-5">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="mb-3 flex flex-wrap gap-2">
                      <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">{item.type}</span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                        <CalendarDays className="h-3.5 w-3.5" />
                        {item.dateLabel}
                      </span>
                    </div>
                    <h4 className="text-lg font-semibold text-slate-950">{item.title}</h4>
                    <p className="mt-1 text-sm font-bold text-slate-500">{item.source}</p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{item.summary}</p>
                  </div>
                  <a href={item.url} target="_blank" rel="noreferrer" className="inline-flex h-10 shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white hover:bg-teal-700">
                    Öffnen <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-lg font-semibold text-slate-950">Anfrage-Workflow</h3>
          <Card className="p-5">
            <div className="space-y-4">
              {authorityWorkflow.map((step, index) => (
                <div key={step.title} className="flex gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-sm font-black text-teal-700">{index + 1}</div>
                  <div>
                    <p className="font-semibold text-slate-950">{step.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 grid gap-2">
              <a href="/templates/anfrage-gesundheitsamt-stadt.md" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl bg-teal-600 px-4 text-sm font-bold text-white hover:bg-teal-700">
                Stadt-/Gesundheitsamt-Vorlage öffnen <Send className="h-4 w-4" />
              </a>
              <a href="/templates/objektklaerung-schaedlingspraevention.md" target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 text-sm font-bold text-slate-700">
                Objektklärung öffnen <BookOpen className="h-4 w-4" />
              </a>
            </div>
          </Card>
        </div>
      </div>
      <div className="mt-7">
        <h3 className="mb-4 text-lg font-semibold text-slate-950">Behörden- und Fachstellenfinder</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {authorityContacts.map((contact) => (
            <Card key={contact.url} className="p-5">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{contact.organization}</span>
              <h4 className="mt-4 text-lg font-semibold text-slate-950">{contact.title}</h4>
              <p className="mt-2 text-sm leading-6 text-slate-600">{contact.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {contact.useFor.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 px-3 py-1 text-xs font-bold text-slate-600">{item}</span>
                ))}
              </div>
              <p className="mt-4 rounded-2xl bg-amber-50 p-3 text-xs font-semibold leading-5 text-amber-900">{contact.note}</p>
              <a href={contact.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-slate-950 px-4 text-sm font-bold text-white hover:bg-teal-700">
                Kontaktquelle öffnen <ExternalLink className="h-4 w-4" />
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function TemplatesPage() {
  return (
    <section>
      <SectionTitle eyebrow="Vorlagen" title="Download-Karten für Vorlagen" text="Die Dateien sind als sofort nutzbare Textvorlagen vorbereitet und können später durch PDF- oder DOCX-Dokumente ersetzt werden." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {templates.map((template) => (
          <Card key={template.title} className="p-5">
            <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">{template.category}</span>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">{template.title}</h3>
            <p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{template.description}</p>
            <div className="mt-5 flex gap-2">
              <a href={template.file} target="_blank" rel="noreferrer" className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl bg-slate-950 text-sm font-bold text-white"><BookOpen className="h-4 w-4" />Öffnen</a>
              <a href={template.file} download className="inline-flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white text-sm font-bold text-slate-700"><Download className="h-4 w-4" />Herunterladen</a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function ChecklistsPage() {
  const [checked, setChecked] = useState<string[]>([])
  const progress = Math.round((checked.length / checklistItems.length) * 100)

  return (
    <section>
      <SectionTitle eyebrow="Checklisten" title="Interaktive Prüf- und Organisationsliste" text="Die Liste hilft beim strukturierten Arbeiten und schützt vor riskanten Aussagen im Außenauftritt." />
      <Card className="mb-5 p-5">
        <div className="mb-3 flex justify-between text-sm font-bold text-slate-800">
          <span>{checked.length} von {checklistItems.length} erledigt</span>
          <span>{progress}%</span>
        </div>
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div className="h-full rounded-full bg-teal-500" style={{ width: `${progress}%` }} />
        </div>
      </Card>
      <div className="grid gap-3">
        {checklistItems.map((item) => (
          <label key={item} className="flex cursor-pointer items-center gap-3 rounded-[18px] border border-slate-200 bg-white p-4 shadow-sm">
            <input type="checkbox" checked={checked.includes(item)} onChange={(event) => setChecked((current) => event.target.checked ? [...current, item] : current.filter((entry) => entry !== item))} className="h-5 w-5 accent-teal-600" />
            <span className={`font-semibold ${checked.includes(item) ? "text-slate-400 line-through" : "text-slate-800"}`}>{item}</span>
          </label>
        ))}
      </div>
    </section>
  )
}

function CommunityPage() {
  const rules = ["Keine medizinischen Diagnosen", "Keine Heilversprechen", "Keine illegalen Testangebote", "Keine falschen Zulassungsbehauptungen", "Keine Produktempfehlung ohne Eigenprüfung", "Respektvoller Austausch", "Jeder handelt eigenverantwortlich"]
  return (
    <section>
      <SectionTitle eyebrow="Community" title="Community-Zugang" text="Tausche dich mit anderen Interessierten aus, stelle organisatorische Fragen und teile Erfahrungen. Medizinische, rechtliche oder behördliche Fragen müssen mit qualifizierten Fachstellen geklärt werden." />
      <div className="mb-6 rounded-[22px] border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-bold text-amber-950">Telegram-Link noch eintragen</p>
        <p className="mt-2 text-sm leading-6 text-amber-900">Hier sollte vor Veröffentlichung die echte Gruppen-URL hinterlegt werden. Bis dahin wird kein generischer oder falscher Telegram-Link angezeigt.</p>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {rules.map((rule) => (
          <Card key={rule} className="p-4">
            <div className="flex items-center gap-3">
              <HeartHandshake className="h-5 w-5 text-teal-700" />
              <p className="font-semibold text-slate-800">{rule}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

function LegalPage() {
  return (
    <section>
      <SectionTitle eyebrow="Rechtliche Hinweise" title="Disclaimer und Eigenverantwortung" text="Alle Informationen in diesem Dashboard dienen ausschließlich der allgemeinen Orientierung. Es wird keine Gewähr für Aktualität, Vollständigkeit, Richtigkeit, Verfügbarkeit, Zulassung oder Eignung einzelner Produkte, Anbieter oder Verfahren übernommen." />
      <div className="grid gap-3 md:grid-cols-2">
        {legalItems.map((item) => (
          <Card key={item} className="p-4">
            <div className="flex gap-3">
              <ShieldAlert className="h-5 w-5 shrink-0 text-amber-600" />
              <p className="font-semibold text-slate-800">{item}</p>
            </div>
          </Card>
        ))}
      </div>
      <ResourceGrid resources={portalResources.filter((resource) => ["Arbeitsschutz", "Regelwerk", "Fachinformation"].includes(resource.area))} title="Regelwerke und fachliche Orientierung" />
    </section>
  )
}

function SupportPage() {
  return (
    <section>
      <SectionTitle eyebrow="Support" title="Portal-Support" text="Support bezieht sich nur auf den Zugang zum Portal und organisatorische Fragen. Medizinische, rechtliche oder behördliche Fragen können nicht beantwortet werden." />
      <Card className="max-w-3xl p-5">
        <form className="grid gap-4">
          <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:ring-2 focus:ring-teal-500" placeholder="Name" />
          <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:ring-2 focus:ring-teal-500" placeholder="E-Mail" />
          <input className="h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 text-sm outline-none focus:ring-2 focus:ring-teal-500" placeholder="Thema" />
          <textarea className="min-h-36 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-teal-500" placeholder="Nachricht" />
          <button type="button" className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 text-sm font-bold text-white hover:bg-teal-700">
            Anfrage vorbereiten <HelpCircle className="h-4 w-4" />
          </button>
        </form>
      </Card>
    </section>
  )
}

function PestsPage() {
  const items = ["Schädlingsbekämpfer", "Mäusefallen", "Köderstationen", "Abdichtungsmaterial", "Monitoring-Systeme", "Fachbetriebe für Objektkontrolle"]
  const resources = portalResources.filter((resource) => ["Forschung / Tiergesundheit", "Behördenkontakt", "Kundeninformation"].includes(resource.area))
  return (
    <section>
      <SectionTitle eyebrow="Schädlingsprävention" title="Prävention, Monitoring und Fachbetriebe" text="Dieser Bereich bündelt mögliche Kategorien für Objektkontrolle und Prävention. Auswahl, Zulässigkeit und Durchführung müssen fachlich geprüft werden." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <Card key={item} className="p-5">
            <Wrench className="mb-4 h-6 w-6 text-teal-700" />
            <h3 className="text-lg font-semibold text-slate-950">{item}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Kategorie für Anbieterrecherche, Objektklärung und fachliche Eigenprüfung.</p>
          </Card>
        ))}
      </div>
      <ResourceGrid resources={resources} title="Fachquellen für Objekt- und Behördenklärung" />
    </section>
  )
}

function Content({ active, setActive }: { active: NavKey; setActive: (key: NavKey) => void }) {
  if (active === "overview") return <Overview setActive={setActive} />
  if (active === "steps") return <Steps />
  if (active === "suppliers") return <SuppliersPage />
  if (active === "equipment") return <EquipmentPage />
  if (active === "cleaning") return <CleaningPage />
  if (active === "pests") return <PestsPage />
  if (active === "labs") return <LabsPage />
  if (active === "updates") return <UpdatesPage />
  if (active === "templates") return <TemplatesPage />
  if (active === "checks") return <ChecklistsPage />
  if (active === "community") return <CommunityPage />
  if (active === "legal") return <LegalPage />
  return <SupportPage />
}

export default function Dashboard() {
  const [active, setActive] = useState<NavKey>("overview")
  const activeLabel = navItems.find((item) => item.key === active)?.label ?? "Übersicht"

  return (
    <div className="min-h-screen bg-slate-100 text-slate-950">
      <MobileNav active={active} setActive={setActive} />
      <div className="flex">
        <Sidebar active={active} setActive={setActive} />
        <main className="min-w-0 flex-1">
          <div className="border-b border-slate-200 bg-white/85 px-4 py-4 backdrop-blur md:px-8">
            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-teal-700">Mitglieder-Dashboard</p>
                <h1 className="mt-1 text-xl font-semibold tracking-tight text-slate-950 md:text-2xl">{activeLabel}</h1>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700">
                <Home className="h-4 w-4 text-teal-700" />
                Informations- und Orientierungsplattform
              </div>
            </div>
          </div>
          <div className="space-y-7 px-4 py-6 md:px-8 md:py-8">
            <ImportantNotice />
            <Content active={active} setActive={setActive} />
          </div>
        </main>
      </div>
    </div>
  )
}
