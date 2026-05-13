export const services = [
  {
    slug: 'fensterreinigung',
    title: 'Fensterreinigung',
    short: 'Klare Glasflächen ohne Streifen.',
    intro:
      'Amira reinigt Fenster, Glasflächen und Rahmen gründlich und zuverlässig in Stuttgart und Umgebung.',
    details:
      'Saubere Fenster prägen den ersten Eindruck eines Objekts. Wir übernehmen die professionelle Fensterreinigung für Privatkunden, Büros, Praxen und Gewerbeflächen. Dabei achten wir auf streifenfreie Ergebnisse, saubere Rahmen und eine flexible Terminplanung.',
    bullets: ['Fenster und Glasflächen', 'Rahmen und Sichtflächen', 'Privat und Gewerbe'],
  },
  {
    slug: 'buero-reinigung',
    title: 'Büroreinigung',
    short: 'Hygienische Arbeitsplätze, jeden Tag.',
    intro:
      'Regelmäßige Büroreinigung für Arbeitsplätze, Besprechungsräume, Empfang und Sanitärbereiche.',
    details:
      'Ein sauberes Büro sorgt für Wohlbefinden, Konzentration und einen professionellen Eindruck bei Kunden und Mitarbeitern. Amira übernimmt die laufende Büroreinigung zuverlässig, diskret und passend zu Ihren Arbeitszeiten.',
    bullets: ['Arbeitsplätze', 'Besprechungsräume', 'Sanitärbereiche'],
  },
  {
    slug: 'treppenhausreinigung',
    title: 'Treppenhausreinigung',
    short: 'Gepflegte Eingänge und Flure.',
    intro:
      'Gründliche Treppenhausreinigung für Wohnhäuser, Gewerbeobjekte und gemeinschaftliche Bereiche.',
    details:
      'Treppenhäuser werden täglich genutzt und sind oft der erste Kontaktpunkt mit einem Gebäude. Wir reinigen Stufen, Geländer, Eingänge und Flure zuverlässig, damit das Objekt dauerhaft gepflegt wirkt.',
    bullets: ['Treppen und Flure', 'Geländer und Eingänge', 'Regelmäßige Intervalle'],
  },
  {
    slug: 'teppichreinigung',
    title: 'Teppichreinigung',
    short: 'Frische textile Flächen.',
    intro:
      'Professionelle Teppichpflege gegen sichtbaren Schmutz, Laufspuren und Flecken.',
    details:
      'Teppiche nehmen Staub, Flecken und Gerüche schnell auf. Unsere Teppichreinigung frischt textile Flächen auf und sorgt dafür, dass Räume wieder sauberer, gepflegter und angenehmer wirken.',
    bullets: ['Fleckenbehandlung', 'Laufspuren', 'Schonende Pflege'],
  },
  {
    slug: 'unterhaltsreinigung',
    title: 'Unterhaltsreinigung',
    short: 'Dauerhaft sauber im Alltag.',
    intro:
      'Planbare Unterhaltsreinigung für dauerhaft ordentliche Räume und feste Reinigungsabläufe.',
    details:
      'Mit regelmäßiger Unterhaltsreinigung bleiben Büros, Praxen, Wohnbereiche und Gewerbeflächen zuverlässig sauber. Amira richtet den Ablauf nach Ihrem Objekt, Ihrer Frequenz und Ihren Prioritäten aus.',
    bullets: ['Täglich oder wöchentlich', 'Flexible Zeiten', 'Planbare Qualität'],
  },
  {
    slug: 'grundreinigung',
    title: 'Grundreinigung',
    short: 'Intensiv sauber bei Bedarf.',
    intro:
      'Gründliche Reinigung von Böden, Oberflächen und stark beanspruchten Bereichen.',
    details:
      'Eine Grundreinigung eignet sich bei hartnäckigem Schmutz, nach längerer Nutzung, vor Übergaben oder wenn ein Objekt sichtbar aufgefrischt werden soll. Wir reinigen intensiv, strukturiert und mit Blick auf das Ergebnis.',
    bullets: ['Böden und Oberflächen', 'Hartnäckiger Schmutz', 'Objektübergaben'],
  },
];

export type Service = (typeof services)[number];
