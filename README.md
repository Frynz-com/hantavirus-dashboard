# Hantavirus Präventionsnetzwerk

Modernes Mitglieder-Dashboard für eine Informations- und Orientierungsplattform rund um Hantavirus-Prävention, Schutzmaterial, Reinigung, Desinfektion, Schädlingsprävention, Lieferantenrecherche und mögliche Fachpartner.

## Wichtiger Hinweis

Dieses Projekt verkauft keine medizinischen Tests, gibt keine medizinische Beratung, erteilt keine Zulassungen und übernimmt keine Haftung für die konkrete Verwendung einzelner Produkte, Anbieter oder Dienstleistungen. Alle Inhalte dienen ausschließlich der allgemeinen Orientierung. Vor Veröffentlichung und Verkauf sollten Inhalte, Betreibertexte und Prozesse rechtlich und fachlich geprüft werden.

## Inhalte

- Lieferanten- und Ausrüstungsübersicht mit Suche, Filtern, Risiko-Badges und Favoriten
- Dokumenten-Bibliothek mit 12 PDF-Unterlagen
- Aktuelles & Behörden mit offiziellen Quellen, Monitoring und Behördenfinder
- Reinigung, Desinfektion und Schädlingsprävention als vorsichtige Orientierung
- Labor- und Fachpartnerbereich mit regulatorisch sensiblen Hinweisen
- Community-Bereich mit Telegram-Kanal
- Vorlagen-Center als “Demnächst verfügbar”
- Rechtliche Hinweise und Go-live-Check für Betreiber

## Entwicklung

```bash
npm install
npm run dev
```

Lokale App: `http://127.0.0.1:3001/` oder der von Vite angezeigte Port.

## Prüfung

```bash
npm run lint
npm run build
```

Beide Kommandos sollten vor jedem Deployment sauber laufen.

## Cloudflare Workers Deployment

Die Wrangler-Konfiguration ist vorbereitet für den kurzen Worker-Namen:

```txt
hv-dashboard
```

Ziel-URL nach erfolgreichem Deploy:

```txt
https://hv-dashboard.noebel59.workers.dev
```

Deployment:

```bash
export CLOUDFLARE_API_TOKEN="DEIN_TOKEN_HIER"
npm run deploy:cloudflare
```

Ohne API Token kann Wrangler in nicht-interaktiven Umgebungen nicht deployen.

## Dokumente

PDF-Dateien liegen unter:

```txt
public/downloads/hantavirus
```

Sie werden im Dashboard im Bereich **Dokumente** angezeigt.

## Vorlagen

Der Bereich **Vorlagen** ist bewusst als “Demnächst verfügbar” markiert. Unfertige editierbare Vorlagen werden nicht öffentlich ausgeliefert, bis sie geprüft und freigegeben sind.

## Go-live Hinweise

Vor Verkauf oder öffentlichem Betrieb sind mindestens zu klären:

- echter Zugriffsschutz, z. B. Cloudflare Access oder Membership-System
- Impressum, Datenschutz, AGB und Widerrufstexte
- fachliche und rechtliche Prüfung der Inhalte und PDFs
- finaler Cloudflare-Deploy unter gewünschtem Worker-Namen
- laufender Prozess zur Link- und Quellenprüfung
