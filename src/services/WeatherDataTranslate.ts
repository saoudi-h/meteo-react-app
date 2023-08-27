export interface WeatherCondition {
  id: number
  main: string
  description: string
  icon: string
}
export const weatherConditions: WeatherCondition[] = [
  // Group 2xx: Orages
  {
    id: 200,
    main: 'Orages',
    description: 'Orages avec pluie légère',
    icon: '11d'
  },
  { id: 201, main: 'Orages', description: 'Orages avec pluie', icon: '11d' },
  {
    id: 202,
    main: 'Orages',
    description: 'Orages avec fortes pluies',
    icon: '11d'
  },
  { id: 210, main: 'Orages', description: 'Orages légers', icon: '11d' },
  { id: 211, main: 'Orages', description: 'Orages', icon: '11d' },
  { id: 212, main: 'Orages', description: 'Orages forts', icon: '11d' },
  { id: 221, main: 'Orages', description: 'Orages déchiquetés', icon: '11d' },
  {
    id: 230,
    main: 'Orages',
    description: 'Orages avec bruine légère',
    icon: '11d'
  },
  { id: 231, main: 'Orages', description: 'Orages avec bruine', icon: '11d' },
  {
    id: 232,
    main: 'Orages',
    description: 'Orages avec fortes bruines',
    icon: '11d'
  },

  // Group 3xx: Bruine
  { id: 300, main: 'Bruine', description: 'Bruine légère', icon: '09d' },
  { id: 301, main: 'Bruine', description: 'Bruine', icon: '09d' },
  { id: 302, main: 'Bruine', description: 'Bruine forte', icon: '09d' },
  {
    id: 310,
    main: 'Bruine',
    description: 'Pluie légère et bruine',
    icon: '09d'
  },
  { id: 311, main: 'Bruine', description: 'Pluie et bruine', icon: '09d' },
  {
    id: 312,
    main: 'Bruine',
    description: 'Pluie forte et bruine',
    icon: '09d'
  },
  {
    id: 313,
    main: 'Bruine',
    description: 'Averses de pluie et bruine',
    icon: '09d'
  },
  {
    id: 314,
    main: 'Bruine',
    description: 'Averses de pluie fortes et bruine',
    icon: '09d'
  },
  { id: 321, main: 'Bruine', description: 'Averses de bruine', icon: '09d' },

  // Group 5xx: Pluie
  { id: 500, main: 'Pluie', description: 'Pluie légère', icon: '10d' },
  { id: 501, main: 'Pluie', description: 'Pluie modérée', icon: '10d' },
  { id: 502, main: 'Pluie', description: 'Pluie forte', icon: '10d' },
  { id: 503, main: 'Pluie', description: 'Pluie très forte', icon: '10d' },
  { id: 504, main: 'Pluie', description: 'Pluie extrême', icon: '10d' },
  { id: 511, main: 'Pluie', description: 'Pluie verglaçante', icon: '13d' },
  {
    id: 520,
    main: 'Pluie',
    description: 'Pluie légère par intermittence',
    icon: '09d'
  },
  { id: 521, main: 'Pluie', description: 'Pluie intermittente', icon: '09d' },
  {
    id: 522,
    main: 'Pluie',
    description: 'Pluie forte par intermittence',
    icon: '09d'
  },
  {
    id: 531,
    main: 'Pluie',
    description: 'Pluie intermittente déchiquetée',
    icon: '09d'
  },

  // Group 6xx: Neige
  { id: 600, main: 'Neige', description: 'Neige légère', icon: '13d' },
  { id: 601, main: 'Neige', description: 'Neige', icon: '13d' },
  { id: 602, main: 'Neige', description: 'Neige forte', icon: '13d' },
  { id: 611, main: 'Neige', description: 'Grésil', icon: '13d' },
  {
    id: 612,
    main: 'Neige',
    description: 'Légères averses de grésil',
    icon: '13d'
  },
  { id: 613, main: 'Neige', description: 'Averses de grésil', icon: '13d' },
  { id: 615, main: 'Neige', description: 'Pluie légère et neige', icon: '13d' },
  { id: 616, main: 'Neige', description: 'Pluie et neige', icon: '13d' },
  {
    id: 620,
    main: 'Neige',
    description: 'Légères averses de neige',
    icon: '13d'
  },
  { id: 621, main: 'Neige', description: 'Averses de neige', icon: '13d' },
  {
    id: 622,
    main: 'Neige',
    description: 'Fortes averses de neige',
    icon: '13d'
  },
  // Group 7xx: Atmosphère (suite)
  { id: 701, main: 'Brouillard', description: 'Brouillard', icon: '50d' },
  { id: 711, main: 'Fumée', description: 'Fumée', icon: '50d' },
  { id: 721, main: 'Brume', description: 'Brume', icon: '50d' },
  {
    id: 731,
    main: 'Poussière',
    description: 'Tourbillons de sable/poussière',
    icon: '50d'
  },
  { id: 741, main: 'Brouillard', description: 'Brouillard', icon: '50d' },
  { id: 751, main: 'Sable', description: 'Sable', icon: '50d' },
  { id: 761, main: 'Poussière', description: 'Poussière', icon: '50d' },
  { id: 762, main: 'Cendres', description: 'Cendres volcaniques', icon: '50d' },
  { id: 771, main: 'Rafales', description: 'Rafales', icon: '50d' },
  { id: 781, main: 'Tornade', description: 'Tornade', icon: '50d' },

  // Group 800: Ciel dégagé
  { id: 800, main: 'Ciel dégagé', description: 'Ciel dégagé', icon: '01d' },

  // Group 80x: Nuages
  {
    id: 801,
    main: 'Nuages',
    description: 'Quelques nuages: 11-25%',
    icon: '02d'
  },
  { id: 802, main: 'Nuages', description: 'Nuages épars: 25-50%', icon: '03d' },
  {
    id: 803,
    main: 'Nuages',
    description: 'Nuages fragmentés: 51-84%',
    icon: '04d'
  },
  {
    id: 804,
    main: 'Nuages',
    description: 'Nuages couverts: 85-100%',
    icon: '04d'
  }
]
