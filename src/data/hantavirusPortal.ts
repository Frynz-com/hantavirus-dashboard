export type RiskLevel = "low" | "medium" | "high"

export type Supplier = {
  id: string
  name: string
  category: string
  description: string
  website: string
  region: string
  suitableFor: string[]
  riskLevel: RiskLevel
  notes: string
  status: string
  tags: string[]
  lastChecked: string
  linkType: "Produktseite" | "Herstellerseite" | "Fachstelle" | "Software"
}

export type PortalResource = {
  title: string
  organization: string
  description: string
  url: string
  area: string
  riskNote: string
}

export type TemplateFile = {
  title: string
  description: string
  category: string
}

export type MemberDocument = {
  title: string
  description: string
  category: string
  file: string
  size: string
  audience: string
  note: string
}

export type NewsItem = {
  title: string
  source: string
  dateLabel: string
  summary: string
  url: string
  type: "Offizielle Quelle" | "Monitoring" | "Fachdaten" | "Presse prüfen"
}

export type AuthorityContact = {
  title: string
  organization: string
  description: string
  url: string
  useFor: string[]
  note: string
}

const labNotice =
  "Nur für qualifizierte Labore/Fachstellen. Nicht für Laienanwendungen oder eigenständige Testangebote verwenden. Zweckbestimmung, regulatorischen Status und IVDR/CE-IVD-Informationen direkt beim Anbieter prüfen."

export const suppliers: Supplier[] = [
  {
    id: "euroimmun-hanta-elisa",
    name: "EUROIMMUN - Hantavirus ELISA / Labordiagnostik",
    category: "Labor / Diagnostik",
    description: "Beispiel / Angaben prüfen: Orientierung zu Hantavirus-ELISA-Produkten für fachliche Labordiagnostik.",
    website: "https://www.euroimmun.com/products/infection/pd/emerging-diseases/278h-1/2/180988/",
    region: "Deutschland / EU",
    suitableFor: ["Qualifizierte Labore", "Fachstellen", "Diagnostikhersteller-Recherche"],
    riskLevel: "high",
    notes: labNotice,
    status: "Muss fachlich geprüft werden",
    tags: ["Labor / Diagnostik", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "mikrogen-recomline-hantaplus",
    name: "MIKROGEN - recomLine / HantaPlus / Hantavirus-Serologie",
    category: "Labor / Diagnostik",
    description: "Beispiel / Angaben prüfen: Serologische Line-Immunoassays für qualifizierte Labore und Fachpartner.",
    website: "https://www.mikrogen.de/produkte-automation/produktfinder/recomline-hantaplus-igm",
    region: "Deutschland / EU",
    suitableFor: ["Medizinische Labore", "Fachpartner", "Regulatorische Vorprüfung"],
    riskLevel: "high",
    notes: labNotice,
    status: "Nur Anfrage erforderlich",
    tags: ["Labor / Diagnostik", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "ibl-tecan-hantavirus-igg",
    name: "IBL International / Tecan - Hantavirus IgG ELISA",
    category: "Labor / Diagnostik",
    description: "Beispiel / Angaben prüfen: IVD-orientierte Produktrecherche für fachlich berechtigte Laborumgebungen.",
    website: "https://ibl-international.com/media/mageworx/downloads/attachment/file/3/0/30114042_ifu_eu_multi_hanta_igg_ifu_rev01_fromlot_041n_sym.pdf",
    region: "Deutschland / EU",
    suitableFor: ["Labore", "Diagnostik-Recherche", "Fachpartnergespräche"],
    riskLevel: "high",
    notes: labNotice,
    status: "Muss fachlich geprüft werden",
    tags: ["Labor / Diagnostik", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "bioactiva-novatec-hantavirus",
    name: "Bioactiva / NovaTec - Hantavirus IgG ELISA",
    category: "Labor / Diagnostik",
    description: "Beispiel / Angaben prüfen: Produktübersicht für fachliche Labor- und Diagnostikrecherche.",
    website: "https://bioactiva.com/de/hantavirus-igg/",
    region: "Deutschland / EU",
    suitableFor: ["Qualifizierte Labore", "Diagnostikhersteller-Recherche", "Fachliche Anfrage"],
    riskLevel: "high",
    notes: labNotice,
    status: "Nur Anfrage erforderlich",
    tags: ["Labor / Diagnostik", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "drg-hanta-virus-eia",
    name: "DRG Diagnostics - Hanta Virus IgM EIA",
    category: "Labor / Diagnostik",
    description: "Beispiel / Angaben prüfen: Diagnostikprodukt-Recherche für medizinisch berechtigte Stellen.",
    website: "https://drg-international.com/shop/hantavirus-hantaan-iggigm/",
    region: "EU / International",
    suitableFor: ["Labore", "Fachpartner", "Regulatorische Prüfung"],
    riskLevel: "high",
    notes: labNotice,
    status: "Muss fachlich geprüft werden",
    tags: ["Labor / Diagnostik", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "3m-ffp3-partikelmaske-8833",
    name: "3M - Partikelmaske FFP3 8833",
    category: "Persönliche Schutzausrüstung",
    description: "Beispiel / Angaben prüfen: FFP3-Partikelmaske als Orientierung für Atemschutz-Beschaffung.",
    website: "https://www.3mdeutschland.de/3M/de_DE/p/dc/v000223581/",
    region: "Deutschland / EU",
    suitableFor: ["Beschaffung", "PSA-Planung", "Objektvorbereitung"],
    riskLevel: "medium",
    notes: "Normen, Passform, Verwendungszweck, Verfügbarkeit und Arbeitsschutzanforderungen eigenverantwortlich prüfen.",
    status: "Muss fachlich geprüft werden",
    tags: ["Persönliche Schutzausrüstung", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "uvex-ffp3-atemschutz",
    name: "uvex safety - FFP3-Atemschutzmasken",
    category: "Persönliche Schutzausrüstung",
    description: "Beispiel / Angaben prüfen: Herstellerübersicht zu FFP3-Atemschutzmasken und Auswahlkriterien.",
    website: "https://www.uvex-safety.com/de/ffp3-atemschutzmasken/",
    region: "Deutschland / EU",
    suitableFor: ["PSA-Planung", "Atemschutz-Recherche", "Arbeitsschutzabstimmung"],
    riskLevel: "medium",
    notes: "Passform, Dichtsitz, Norm, Tragezeit, Unterweisung und konkrete Einsatzgrenzen mit Arbeitsschutz/Fachstelle prüfen.",
    status: "Muss fachlich geprüft werden",
    tags: ["Persönliche Schutzausrüstung", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Herstellerseite",
  },
  {
    id: "draeger-xplore-3300",
    name: "Dräger - X-plore 3300/3500 Halbmasken",
    category: "Persönliche Schutzausrüstung",
    description: "Beispiel / Angaben prüfen: Halbmasken-System für Filterkombinationen, z. B. P3-Konfigurationen.",
    website: "https://www.draeger.com/en-us_us/Products/X-plore-3000",
    region: "EU / International",
    suitableFor: ["P3-Halbmasken", "Atemschutzkonzept", "Fachliche PSA-Auswahl"],
    riskLevel: "medium",
    notes: "Filtertyp, Dichtsitz, Wartung, Unterweisung und Eignung für den konkreten Einsatz fachlich prüfen.",
    status: "Muss fachlich geprüft werden",
    tags: ["Persönliche Schutzausrüstung", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "ansell-nitril-handschuhe",
    name: "Ansell - MICRO-TOUCH Nitril-Handschuhe",
    category: "Persönliche Schutzausrüstung",
    description: "Beispiel / Angaben prüfen: Nitril-Einmalhandschuhe als Orientierung für PSA-Beschaffung.",
    website: "https://www.ansell.com/de/de/products/micro-touch-royal-blue-nitrile",
    region: "Deutschland / EU",
    suitableFor: ["Nitril-Handschuhe", "PSA-Planung", "Beschaffung"],
    riskLevel: "medium",
    notes: "Material, Normen, Chemikalienbeständigkeit, Allergierisiken, Größen und Einsatzgrenzen direkt prüfen.",
    status: "Direkt bestellbar",
    tags: ["Persönliche Schutzausrüstung", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "psa-schutzanzuege",
    name: "DuPont - Tyvek 500 Xpert Schutzanzug Typ 5/6",
    category: "Persönliche Schutzausrüstung",
    description: "Beispiel / Angaben prüfen: Einweg-Schutzanzug Kat. III Typ 5-B/6-B als PSA-Orientierung.",
    website: "https://www.dupont.de/products/tyvek-500-xpert-tychf5swhxp-tychf5swhxb.html",
    region: "Deutschland / EU",
    suitableFor: ["Reinigungsdienstleistung", "Schutzmaterial", "Einsatzvorbereitung"],
    riskLevel: "medium",
    notes: "Kategorie, Normen, Größen, Tragekonzept und Eignung mit Lieferanten oder Fachstellen prüfen.",
    status: "Direkt bestellbar",
    tags: ["Persönliche Schutzausrüstung", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "hartmann-bacillol-af",
    name: "HARTMANN - Bacillol AF Flächendesinfektion",
    category: "Reinigung",
    description: "Beispiel / Angaben prüfen: alkoholisches Flächendesinfektionsmittel für alkoholbeständige Oberflächen.",
    website: "https://www.hartmann.info/en/products/disinfection-and-hygiene/surface/surface-desinfection-ready-to-use-solutions/bacillol%C2%AE-af",
    region: "Deutschland / EU",
    suitableFor: ["Reinigung", "Desinfektion", "Objektorganisation"],
    riskLevel: "medium",
    notes: "Wirksamkeit, Anwendungsbereich, Materialverträglichkeit und Sicherheitsdatenblätter beim Anbieter prüfen.",
    status: "Muss fachlich geprüft werden",
    tags: ["Reinigung", "Desinfektion", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "schuelke-mikrozid-wipes",
    name: "schülke - mikrozid universal p wipes premium",
    category: "Reinigung",
    description: "Beispiel / Angaben prüfen: gebrauchsfertige Tücher zur Reinigung und Desinfektion von Flächen.",
    website: "https://www.schuelke.com/de-de/produkte/914012/mikrozid-universal-p-wipes-premium/",
    region: "Deutschland / EU",
    suitableFor: ["Einweg-Wischtücher", "Flächendesinfektion", "Materialschonende Reinigung"],
    riskLevel: "medium",
    notes: "Vor Gebrauch Etikett, Produktinformationen, Einwirkzeiten, Wirkspektrum und Materialverträglichkeit prüfen.",
    status: "Direkt bestellbar",
    tags: ["Reinigung", "Desinfektion", "Deutschland", "EU", "Direkt bestellbar", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "kaercher-nt-30-h",
    name: "Kärcher - NT 30/1 Ap Te H Sicherheitssauger",
    category: "Reinigung",
    description: "Beispiel / Angaben prüfen: Sicherheitssauger der Staubklasse H als technische Orientierungsquelle.",
    website: "https://www.kaercher.com/de/professional/sauger/nass-trockensauger/sicherheitssauger/nt-30-1-ap-te-h-11482530.html",
    region: "Deutschland / EU",
    suitableFor: ["Staubklasse H", "Reinigungsplanung", "Technische Fachprüfung"],
    riskLevel: "medium",
    notes: "Eignung nicht pauschal annehmen. Technische Spezifikation und Einsatzgrenzen fachlich klären.",
    status: "Nur Anfrage erforderlich",
    tags: ["Reinigung", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "nilfisk-ivb-5-h",
    name: "Nilfisk - IVB 5 H Sicherheitssauger",
    category: "Reinigung",
    description: "Beispiel / Angaben prüfen: Industriesauger mit Staubklasse-H-Bezug für fachliche Geräteauswahl.",
    website: "https://www.nilfisk.com/de-de/professional/produkte/industriesauger/gesundheitsschutz-und-sicherheit-nass-trockensauger/ivb-5-h%2B302001891/",
    region: "Deutschland / EU",
    suitableFor: ["Staubklasse H", "Nass-/Trockensauger", "Reinigungsplanung"],
    riskLevel: "medium",
    notes: "Technische Angaben, Filterkonzept, Zubehör und Einsatzgrenzen direkt beim Anbieter prüfen.",
    status: "Nur Anfrage erforderlich",
    tags: ["Reinigung", "Deutschland", "EU", "Nur Anfrage erforderlich", "Muss fachlich geprüft werden"],
    lastChecked: "13.05.2026",
    linkType: "Produktseite",
  },
  {
    id: "anticimex-schaedlingspraevention",
    name: "Anticimex - Schädlingsbekämpfung und Monitoring",
    category: "Schädlingsprävention",
    description: "Beispiel / Angaben prüfen: Fachbetrieb mit digitalem Monitoring und Schädlingsprävention.",
    website: "https://www.anticimex.de/",
    region: "Deutschland / EU",
    suitableFor: ["Schädlingsprävention", "Objektkontrolle", "Fachbetrieb-Recherche"],
    riskLevel: "medium",
    notes: "Objektbezogene Prüfung, rechtliche Anforderungen und fachliche Ausführung mit qualifizierten Partnern klären.",
    status: "Nur Anfrage erforderlich",
    tags: ["Schädlingsprävention", "Fachpartner", "Deutschland", "EU", "Nur Anfrage erforderlich"],
    lastChecked: "13.05.2026",
    linkType: "Herstellerseite",
  },
  {
    id: "rentokil-schaedlingsbekaempfung",
    name: "Rentokil - Schädlingsbekämpfung Deutschland",
    category: "Schädlingsprävention",
    description: "Beispiel / Angaben prüfen: Deutschlandweiter Fachanbieter für Schädlingsbekämpfung und Beratung.",
    website: "https://www.rentokil.com/de/",
    region: "Deutschland",
    suitableFor: ["Fachbetrieb-Recherche", "Mäuse/Ratten", "Objektbegehung"],
    riskLevel: "medium",
    notes: "Leistungsumfang, regionale Verfügbarkeit, Dokumentation und rechtliche Anforderungen direkt klären.",
    status: "Nur Anfrage erforderlich",
    tags: ["Schädlingsprävention", "Fachpartner", "Deutschland", "Nur Anfrage erforderlich"],
    lastChecked: "13.05.2026",
    linkType: "Herstellerseite",
  },
  {
    id: "apc-integrierte-schaedlingsbekaempfung",
    name: "APC AG - Integrierte Schädlingsbekämpfung",
    category: "Schädlingsprävention",
    description: "Beispiel / Angaben prüfen: B2B-orientierter Fachanbieter für Prävention, Monitoring und Dokumentation.",
    website: "https://www.apc-ag.de/praevention-monitoring/integrierte-schaedlingsbekaempfung",
    region: "Deutschland",
    suitableFor: ["B2B-Objektkontrolle", "Monitoring", "Dokumentation"],
    riskLevel: "medium",
    notes: "Objektbezogene Prüfung, vertraglicher Leistungsumfang und gesetzliche Anforderungen mit dem Anbieter klären.",
    status: "Nur Anfrage erforderlich",
    tags: ["Schädlingsprävention", "Fachpartner", "Deutschland", "Nur Anfrage erforderlich"],
    lastChecked: "13.05.2026",
    linkType: "Herstellerseite",
  },
  {
    id: "dokumentation-software",
    name: "Capmo - Dokumentation / Aufgaben- und Fotoprotokolle",
    category: "Dokumentation / Software",
    description: "Beispiel / Angaben prüfen: Software-Orientierung für Dokumentation, Aufgaben, Fotos und Protokolle.",
    website: "https://www.capmo.com/",
    region: "Deutschland / EU",
    suitableFor: ["Einsatzdokumentation", "Qualitätsmanagement", "Kundenkommunikation"],
    riskLevel: "low",
    notes: "Datenschutz, Aufbewahrung, Rollenrechte und Exportmöglichkeiten eigenverantwortlich prüfen.",
    status: "Direkt bestellbar",
    tags: ["Dokumentation / Software", "Deutschland", "EU", "Direkt bestellbar"],
    lastChecked: "13.05.2026",
    linkType: "Software",
  },
]

export const supplierFilters = [
  "Persönliche Schutzausrüstung",
  "Reinigung",
  "Desinfektion",
  "Schädlingsprävention",
  "Labor / Diagnostik",
  "Fachpartner",
  "Dokumentation / Software",
  "Deutschland",
  "EU",
  "Nur Anfrage erforderlich",
  "Direkt bestellbar",
  "Muss fachlich geprüft werden",
]

export const equipmentGroups = [
  {
    title: "Persönliche Schutzausrüstung",
    items: ["FFP3-Masken", "P3-Halbmaske", "Einweg-Schutzanzüge Typ 5/6", "Nitril-Handschuhe", "robuste Gummihandschuhe", "Schutzbrille", "Gesichtsschutz", "Überschuhe", "Händedesinfektion"],
  },
  {
    title: "Reinigung",
    items: ["Flächendesinfektionsmittel", "Drucksprüher", "Einweg-Tücher", "Nasswischsystem", "Müllsäcke", "Doppelsack-System", "Greifer / Zange", "Warnschild", "Absperrband"],
  },
  {
    title: "Dokumentation",
    items: ["Einsatzprotokoll", "Vorher-/Nachher-Fotos", "Kundeneinweisung", "Unterschriftsfeld", "Hinweisbogen"],
  },
]

export const portalResources: PortalResource[] = [
  {
    title: "Hantavirus-Erkrankung RKI-Ratgeber",
    organization: "Robert Koch-Institut",
    description: "Fachinformation zu Erreger, Infektionsweg, Diagnostik, Infektionsschutz und gesetzlichen Grundlagen.",
    url: "https://www.rki.de/DE/Aktuelles/Publikationen/RKI-Ratgeber/Ratgeber/Ratgeber_Hantaviren.html",
    area: "Fachinformation",
    riskNote: "Für Fachkreise und Orientierung. Keine individuelle medizinische Beratung.",
  },
  {
    title: "Hantavirus-Infektionen",
    organization: "Robert Koch-Institut",
    description: "Themenseite mit Ratgeber, Merkblatt, epidemiologischen Informationen und Spezialdiagnostik-Hinweisen.",
    url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Infektionskrankheiten-A-Z/H/Hantavirus/hantavirus-node.html",
    area: "Fachstellen",
    riskNote: "Aktualität der Unterseiten direkt beim RKI prüfen.",
  },
  {
    title: "Erregersteckbrief Hantaviren",
    organization: "BIÖG / infektionsschutz.de",
    description: "Allgemein verständliche Informationen zu Übertragung, Schutz, Reinigung und weiteren Beratungsstellen.",
    url: "https://www.infektionsschutz.de/erregersteckbriefe/hantaviren/",
    area: "Kundeninformation",
    riskNote: "Als allgemeine Information nutzen, nicht als Ersatz für ärztliche oder behördliche Beratung.",
  },
  {
    title: "Biostoffe im Arbeitsschutz",
    organization: "BAuA",
    description: "Orientierung zu biologischen Arbeitsstoffen, Gefährdungsbeurteilung und Arbeitsschutz-Regelwerk.",
    url: "https://www.baua.de/Biologische-Arbeitsstoffe",
    area: "Arbeitsschutz",
    riskNote: "Gefährdungsbeurteilung und konkrete Schutzmaßnahmen fachlich erstellen lassen.",
  },
  {
    title: "Technische Regeln für Biologische Arbeitsstoffe",
    organization: "BAuA / ABAS",
    description: "Übersicht über TRBA-Regelwerk, unter anderem Gefährdungsbeurteilung sowie Hygiene- und Desinfektionsmaßnahmen.",
    url: "https://www.baua.de/DE/Angebote/Regelwerk/TRBA/TRBA",
    area: "Regelwerk",
    riskNote: "Regelwerk ist kontextabhängig auszulegen; Fachberatung empfohlen.",
  },
  {
    title: "Nationales Konsiliarlaboratorium für Hantaviren",
    organization: "Charité Berlin",
    description: "Fachliche Anlaufstelle für Spezialuntersuchungen und Beratung zu Hantaviren.",
    url: "https://virologie-ccm.charite.de/diagnostik/konsiliarlaboratorium_fuer_hantaviren",
    area: "Labor / Fachpartner",
    riskNote: "Kontaktaufnahme nur im passenden fachlichen Kontext; keine Laien-Teststruktur.",
  },
  {
    title: "Hantavirus Prevention",
    organization: "CDC",
    description: "Internationale Orientierung zu Prävention, Exposition und sicherem Umgang mit Nagerkontamination.",
    url: "https://www.cdc.gov/hantavirus/prevention/index.html",
    area: "Internationale Orientierung",
    riskNote: "US-Kontext beachten; deutsche Anforderungen separat prüfen.",
  },
  {
    title: "Hantavirus Fact Sheet",
    organization: "WHO",
    description: "Globale Übersicht zu Übertragung, Krankheitsbildern, Diagnostik, Behandlung und Prävention.",
    url: "https://www.who.int/news-room/fact-sheets/detail/hantavirus",
    area: "Internationale Orientierung",
    riskNote: "Globale Information; lokale Fachstellen bleiben maßgeblich.",
  },
  {
    title: "Nationales Referenzlabor für Hantaviren",
    organization: "Friedrich-Loeffler-Institut",
    description: "Veterinärmedizinische Fachinformationen zu Hantaviren, Reservoiren und aktueller Situation.",
    url: "https://www.fli.de/de/institute/institut-fuer-neue-und-neuartige-tierseuchenerreger-innt/referenzlabore/nrl-fuer-hantaviren/",
    area: "Forschung / Tiergesundheit",
    riskNote: "Fachinformation; Humanmedizin und öffentliche Gesundheit separat klären.",
  },
  {
    title: "SurvStat@RKI",
    organization: "Robert Koch-Institut",
    description: "Abfrage von Meldedaten nach Infektionsschutzgesetz über das Web.",
    url: "https://www.rki.de/DE/Aktuelles/Publikationen/Forschungsdaten/survstat_inhalt.html",
    area: "Fachdaten",
    riskNote: "Dateninterpretation erfordert Kontext; keine Prognose oder Beratung ableiten.",
  },
  {
    title: "Online PLZ-Tool des RKI",
    organization: "Robert Koch-Institut",
    description: "Ermittelt anhand von Postleitzahl oder Ort das zuständige Gesundheitsamt.",
    url: "https://tools.rki.de/plztool/",
    area: "Behördenkontakt",
    riskNote: "Für Zuständigkeitsrecherche; konkrete Anfrage über offizielle Kontaktwege stellen.",
  },
]

export const newsItems: NewsItem[] = [
  {
    title: "WHO Fact Sheet: Hantavirus",
    source: "WHO",
    dateLabel: "Aktualisiert: 06.05.2026",
    summary: "Globale Übersicht zu Übertragung, Symptomen, Prävention und regionalen Unterschieden. Für lokale Entscheidungen immer deutsche Fachstellen einbeziehen.",
    url: "https://www.who.int/news-room/fact-sheets/detail/hantavirus",
    type: "Offizielle Quelle",
  },
  {
    title: "CDC: About Andes Virus",
    source: "CDC",
    dateLabel: "Aktualisiert: 07.05.2026",
    summary: "Einordnung zum Andes-Virus als besonderem Hantavirus-Typ. Wichtig für internationales Monitoring, aber nicht 1:1 auf deutsche Objektarbeit übertragen.",
    url: "https://www.cdc.gov/hantavirus/about/andesvirus.html",
    type: "Offizielle Quelle",
  },
  {
    title: "RKI Hantavirus-Infektionen",
    source: "Robert Koch-Institut",
    dateLabel: "Themenseite",
    summary: "Zentrale deutsche Fachseite mit Ratgeber, Merkblättern, Spezialdiagnostik, epidemiologischen Hinweisen und weiterführenden Quellen.",
    url: "https://www.rki.de/DE/Themen/Infektionskrankheiten/Infektionskrankheiten-A-Z/H/Hantavirus/hantavirus-node.html",
    type: "Offizielle Quelle",
  },
  {
    title: "RKI RSS-Feeds",
    source: "Robert Koch-Institut",
    dateLabel: "Monitoring",
    summary: "RSS-Übersicht des RKI. Nutzer können relevante RKI-Feeds im eigenen Reader abonnieren und Änderungen an RKI-Dokumenten verfolgen.",
    url: "https://www.rki.de/DE/Aktuelles/Neuigkeiten-und-Presse/Newsletter-und-RSS-Feeds/RSSFeed_Verweis.html",
    type: "Monitoring",
  },
  {
    title: "SurvStat@RKI Meldedaten",
    source: "Robert Koch-Institut",
    dateLabel: "Fachdaten",
    summary: "Webzugang zu meldepflichtigen Krankheitsfällen und Erregernachweisen. Daten nur mit fachlichem Kontext interpretieren.",
    url: "https://www.rki.de/DE/Aktuelles/Publikationen/Forschungsdaten/survstat_inhalt.html",
    type: "Fachdaten",
  },
  {
    title: "Google News Monitoring: Hantavirus Deutschland",
    source: "Medienmonitoring",
    dateLabel: "Live-Suche",
    summary: "Medienlage beobachten. Einzelne Presseberichte immer gegen offizielle Quellen, Behörden und Fachstellen prüfen.",
    url: "https://news.google.com/search?q=Hantavirus%20Deutschland&hl=de&gl=DE&ceid=DE%3Ade",
    type: "Presse prüfen",
  },
]

export const authorityContacts: AuthorityContact[] = [
  {
    title: "Zuständiges Gesundheitsamt finden",
    organization: "RKI PLZ-Tool",
    description: "Schnelle Zuständigkeitsrecherche über Postleitzahl oder Ort.",
    url: "https://tools.rki.de/plztool/",
    useFor: ["Gesundheitsamt finden", "Zuständigkeit klären", "Kontaktweg recherchieren"],
    note: "Keine medizinischen Einzelfragen im Portal beantworten; Zuständigkeit und Kontaktweg offiziell prüfen.",
  },
  {
    title: "Öffentlicher Gesundheitsdienst PLZ-Suche",
    organization: "ÖGD",
    description: "Alternative PLZ-Suche und Kontext zum öffentlichen Gesundheitsdienst.",
    url: "https://www.oeffentlichergesundheitsdienst.de/plz-suche",
    useFor: ["ÖGD-Anlaufstelle", "Kommunale Zuständigkeit", "Landes-/Kommunalstruktur"],
    note: "Je nach Bundesland unterscheiden sich Zuständigkeiten und digitale Kontaktwege.",
  },
  {
    title: "BMG Kontakt",
    organization: "Bundesministerium für Gesundheit",
    description: "Allgemeiner Kontakt, Bürgertelefon und Hinweise des Bundesministeriums.",
    url: "https://www.bundesgesundheitsministerium.de/service/kontakt",
    useFor: ["Allgemeine Orientierung", "Bundesweite Kontaktwege", "Bürgertelefon"],
    note: "Für konkrete lokale Objektfragen ist in der Regel die kommunale Stelle passender.",
  },
  {
    title: "RKI Kontakt",
    organization: "Robert Koch-Institut",
    description: "Kontakt- und Serviceinformationen des RKI.",
    url: "https://www.rki.de/DE/Institut/Service-und-Besucherinformation/Kontakt/adressen_inhalt.html",
    useFor: ["Fachinformation", "Quellenprüfung", "Weiterleitung an passende RKI-Stellen"],
    note: "Das RKI ersetzt keine lokale behördliche Abstimmung oder individuelle medizinische Beratung.",
  },
]

export const authorityWorkflow = [
  {
    title: "Zuständigkeit recherchieren",
    text: "Über PLZ, Kommune oder Objektadresse klären, welches Gesundheitsamt, welche Stadtverwaltung oder welche Fachstelle zuständig sein könnte.",
  },
  {
    title: "Neutralen Sachverhalt formulieren",
    text: "Nur beobachtbare Fakten nennen: Objektart, sichtbare Hinweise, geplante Reinigung, gewünschte organisatorische Klärung. Keine Diagnose- oder Gefahrenbehauptung formulieren.",
  },
  {
    title: "Fragen klar trennen",
    text: "Gesundheitliche, arbeitsschutzfachliche, ordnungsrechtliche und gewerbliche Fragen getrennt stellen, damit die Anfrage intern richtig weitergeleitet werden kann.",
  },
  {
    title: "Keine Freigabe suggerieren",
    text: "Antworten von Behörden oder Städten nicht als allgemeine Zulassung, Zertifizierung oder Verkaufsargument verwenden.",
  },
  {
    title: "Dokumentation ablegen",
    text: "Datum, Kontaktstelle, Antwort, offene Punkte und Folgeaufgaben im Portal oder in der Einsatzdokumentation festhalten.",
  },
]

export const memberDocuments: MemberDocument[] = [
  {
    title: "Hantavirus Informations",
    description: "Allgemeines Informationsdokument zum Thema Hantavirus und Orientierung für Nutzer.",
    category: "Grundlagen",
    file: "/downloads/hantavirus/hantavirus-information.pdf",
    size: "1,9 MB",
    audience: "Allgemeine Orientierung",
    note: "Inhalt vor Weitergabe auf Aktualität und Zielgruppe prüfen.",
  },
  {
    title: "Hantavirus Factsheet",
    description: "Kompakte Zusammenfassung als schneller Überblick.",
    category: "Grundlagen",
    file: "/downloads/hantavirus/hantavirus-factsheet.pdf",
    size: "407 KB",
    audience: "Schnellüberblick",
    note: "Nicht als medizinische Beratung oder verbindliche Handlungsanweisung verwenden.",
  },
  {
    title: "Hantavirus Schnellreferenz",
    description: "Kurzreferenz für die schnelle interne Orientierung.",
    category: "Schnellreferenz",
    file: "/downloads/hantavirus/hantavirus-schnellreferenz.pdf",
    size: "359 KB",
    audience: "Interne Nutzung",
    note: "Als Checkhilfe nutzen; konkrete Entscheidungen fachlich prüfen.",
  },
  {
    title: "Hantavirus FAQ",
    description: "Fragen-und-Antworten-Dokument für häufige organisatorische Themen.",
    category: "FAQ",
    file: "/downloads/hantavirus/hantavirus-faq.pdf",
    size: "376 KB",
    audience: "Kundenkontakt / intern",
    note: "Antworten nicht als Diagnose-, Rechts- oder Zulassungsaussagen einsetzen.",
  },
  {
    title: "Hantavirus Symptome",
    description: "Informationsdokument zu Symptomen und Einordnung.",
    category: "Gesundheitsinformation",
    file: "/downloads/hantavirus/hantavirus-symptome.pdf",
    size: "1,2 MB",
    audience: "Sensibler Informationsbereich",
    note: "Medizinische Fragen ausschließlich an qualifizierte medizinische Stellen verweisen.",
  },
  {
    title: "Hantavirus Immunsupprimierte",
    description: "Informationsdokument für besonders sensible Personengruppen.",
    category: "Gesundheitsinformation",
    file: "/downloads/hantavirus/hantavirus-immunsupprimierte.pdf",
    size: "560 KB",
    audience: "Sensibler Informationsbereich",
    note: "Keine individuelle Beratung; ärztliche Abklärung ist Sache qualifizierter medizinischer Stellen.",
  },
  {
    title: "Hantavirus Prävention",
    description: "Orientierung zu Prävention und Schutzmaßnahmen.",
    category: "Prävention",
    file: "/downloads/hantavirus/hantavirus-praevention.pdf",
    size: "744 KB",
    audience: "Prävention / Organisation",
    note: "Nicht als Ersatz für Gefährdungsbeurteilung oder behördliche Prüfung verwenden.",
  },
  {
    title: "Hantavirus Homeprep",
    description: "Vorbereitungsorientierte Informationen für Objekte und häusliche Bereiche.",
    category: "Vorbereitung",
    file: "/downloads/hantavirus/hantavirus-homeprep.pdf",
    size: "946 KB",
    audience: "Objektvorbereitung",
    note: "Tätigkeiten und Schutzbedarf eigenverantwortlich mit Fachstellen prüfen.",
  },
  {
    title: "Hantavirus Reinigungsanleitung",
    description: "Reinigungsbezogene Orientierung und strukturierte Hinweise.",
    category: "Reinigung",
    file: "/downloads/hantavirus/hantavirus-reinigungsanleitung.pdf",
    size: "1,1 MB",
    audience: "Reinigung / Desinfektion",
    note: "Nur als allgemeine Orientierung; keine verbindliche Arbeitsanweisung.",
  },
  {
    title: "Hantavirus Leitfaden",
    description: "Übergreifender Leitfaden für Struktur, Vorbereitung und Einordnung.",
    category: "Leitfaden",
    file: "/downloads/hantavirus/hantavirus-leitfaden.pdf",
    size: "234 KB",
    audience: "Mitglieder / interne Nutzung",
    note: "Vor externer Nutzung juristisch und fachlich prüfen.",
  },
  {
    title: "Hantavirus Reiseratgeber",
    description: "Orientierung mit Bezug zu Reisen und Aufenthalten.",
    category: "Reise",
    file: "/downloads/hantavirus/hantavirus-reiseratgeber.pdf",
    size: "123 KB",
    audience: "Allgemeine Orientierung",
    note: "Reise- und Gesundheitsfragen mit offiziellen Stellen oder Ärzten klären.",
  },
  {
    title: "Schädlingsbekämpfung",
    description: "Dokument zur Schädlingsbekämpfung und organisatorischen Einordnung.",
    category: "Schädlingsprävention",
    file: "/downloads/hantavirus/schaedlingsbekaempfung.pdf",
    size: "132 KB",
    audience: "Objektkontrolle / Fachbetrieb",
    note: "Maßnahmen, Zulässigkeit und Durchführung mit qualifizierten Fachbetrieben prüfen.",
  },
]

export const templates: TemplateFile[] = [
  { title: "Lieferanten-Anfrage", description: "Strukturierte Fragen zu Preis, Verfügbarkeit, Zweckbestimmung und Nachweisen.", category: "Beschaffung" },
  { title: "Kunden-Erstgespräch", description: "Leitfaden für organisatorische Erstklärung ohne medizinische Aussagen.", category: "Kundenkontakt" },
  { title: "Ausrüstungs-Checkliste", description: "Prüfliste für PSA, Reinigung, Dokumentation und Entsorgung.", category: "Ausrüstung" },
  { title: "Risiko-Checkliste Objekt", description: "Objektbezogene Orientierung für Vorprüfung und Fachstellenkontakt.", category: "Objekt" },
  { title: "Einsatz-Dokumentation", description: "Protokollstruktur für Fotos, Zeiten, Beteiligte und Hinweise.", category: "Dokumentation" },
  { title: "Angebotstext für Reinigungsdienstleister", description: "Vorsichtige Angebotsbausteine ohne Garantie- oder Diagnoseversprechen.", category: "Marketing" },
  { title: "Hinweistext für Kunden", description: "Neutraler Kundenhinweis zu Eigenverantwortung und Fachprüfung.", category: "Recht" },
  { title: "Community-Regeln", description: "Regelwerk für sachlichen Austausch ohne riskante Aussagen.", category: "Community" },
  { title: "Haftungsausschluss / Eigenverantwortung", description: "Textbaustein für allgemeine Orientierung und Drittanbieterhinweise.", category: "Recht" },
  { title: "Anfrage an Gesundheitsamt / Stadt", description: "Neutraler Anfragebaustein für Zuständigkeit, organisatorische Hinweise und Weiterleitung.", category: "Behördenkontakt" },
  { title: "Objektklärung Schädlingsprävention", description: "Vorlage für Fachbetriebe oder Objektverantwortliche zur sachlichen Vorabklärung.", category: "Schädlingsprävention" },
]
