const SEASON = 2026;
const API_BASE = `https://api.jolpi.ca/ergast/f1/${SEASON}`;
const NEWS_FEEDS = [
  'https://feeds.bbci.co.uk/sport/formula1/rss.xml',
  'https://www.motorsport.com/rss/f1/news/'
];
const RACE_FOCUS_IMAGE = 'assets/race-focus-antonelli.png';
const SILVERSTONE_IMAGE = 'assets/feature-images/silverstone-circuit.jpg';

const POLYMARKET_EVENTS_API = 'https://gamma-api.polymarket.com/events';
const KALSHI_MARKETS_API = 'https://api.elections.kalshi.com/trade-api/v2/markets';
const VOTE_STORAGE_KEY = `f1-${SEASON}-race-votes`;
const VOTE_USER_KEY = `f1-${SEASON}-vote-user-id`;
const FIREBASE_SDK_VERSION = '10.12.5';

const VOTE_CATEGORIES = [
  {
    id: 'pole_position',
    title: 'Pole position',
    shortTitle: 'Pole',
    imageUrl: 'assets/vote-drivers/lewis-hamilton.avif',
    imagePosition: 'center 18%'
  },
  {
    id: 'race_winner',
    title: 'Race winner',
    shortTitle: 'Winner',
    imageUrl: 'https://telegrafi.com/media-library/image.jpg?coordinates=24%2C0%2C24%2C0&height=700&id=61376729&quality=90&width=1245',
    imagePosition: 'center 20%'
  },
  {
    id: 'p2',
    title: 'P2',
    shortTitle: 'P2',
    imageUrl: 'https://hips.hearstapps.com/hmg-prod/images/sebastian-vettel-of-germany-and-infiniti-red-bull-racing-news-photo-1672327385.jpg?crop=1.00xw%3A1.00xh%3B0%2C0&resize=640%3A%2A',
    imagePosition: 'center 18%'
  },
  {
    id: 'p3',
    title: 'P3',
    shortTitle: 'P3',
    imageUrl: 'assets/vote-drivers/max-verstappen.jpg',
    imagePosition: 'center 22%'
  },
  {
    id: 'sprint_winner',
    title: 'Sprint race winner',
    shortTitle: 'Sprint',
    imageUrl: SILVERSTONE_IMAGE,
    imagePosition: 'center'
  },
  {
    id: 'world_champion',
    title: 'World champion',
    shortTitle: 'Champion',
    imageUrl: 'https://s.ndtvimg.com/images/content/2014/apr/806/ayrton-senna.jpg',
    imagePosition: 'center 20%'
  }
];

const TEAM_COLORS = {
  ferrari: '#ed1131',
  mclaren: '#ff8000',
  mercedes: '#27f4d2',
  red_bull: '#3671c6',
  redbull: '#3671c6',
  aston_martin: '#229971',
  alpine: '#0f7dff',
  williams: '#64c4ff',
  rb: '#6692ff',
  racing_bulls: '#6692ff',
  haas: '#b6babd',
  sauber: '#52e252',
  audi: '#c8c8c8',
  cadillac: '#b9975b'
};

const TEAM_LOGOS = {
  ferrari: 'assets/team-logos/ferrari.png',
  mclaren: 'assets/team-logos/mclaren.png',
  mercedes: 'assets/team-logos/mercedes.png',
  red_bull: 'assets/team-logos/red_bull.png',
  redbull: 'assets/team-logos/red_bull.png',
  aston_martin: 'assets/team-logos/aston_martin.png',
  alpine: 'assets/team-logos/alpine.png',
  williams: 'assets/team-logos/williams.png',
  rb: 'assets/team-logos/rb.png',
  racing_bulls: 'assets/team-logos/rb.png',
  haas: 'assets/team-logos/haas.png',
  sauber: '',
  audi: 'assets/team-logos/audi.png',
  cadillac: 'assets/team-logos/cadillac.png'
};

const TEAM_LOGO_LABELS = {
  ferrari: 'Ferrari',
  mclaren: 'McLaren',
  mercedes: 'Mercedes',
  red_bull: 'Red Bull',
  aston_martin: 'Aston Martin',
  alpine: 'Alpine',
  williams: 'Williams',
  rb: 'RB',
  haas: 'Haas',
  sauber: 'Sauber',
  audi: 'Audi',
  cadillac: 'Cadillac'
};

const NATIONALITY_FLAGS = {
  Argentine: '🇦🇷',
  Australian: '🇦🇺',
  Brazilian: '🇧🇷',
  British: '🇬🇧',
  Canadian: '🇨🇦',
  Chinese: '🇨🇳',
  Dutch: '🇳🇱',
  Finnish: '🇫🇮',
  French: '🇫🇷',
  German: '🇩🇪',
  Italian: '🇮🇹',
  Japanese: '🇯🇵',
  Mexican: '🇲🇽',
  Monegasque: '🇲🇨',
  New_Zealander: '🇳🇿',
  'New Zealander': '🇳🇿',
  Spanish: '🇪🇸',
  Thai: '🇹🇭',
  American: '🇺🇸'
};

const NATIONALITY_COUNTRIES = {
  Argentine: 'Argentina',
  Australian: 'Australia',
  Brazilian: 'Brazil',
  British: 'United Kingdom',
  Canadian: 'Canada',
  Chinese: 'China',
  Dutch: 'Netherlands',
  Finnish: 'Finland',
  French: 'France',
  German: 'Germany',
  Italian: 'Italy',
  Japanese: 'Japan',
  Mexican: 'Mexico',
  Monegasque: 'Monaco',
  New_Zealander: 'New Zealand',
  'New Zealander': 'New Zealand',
  Spanish: 'Spain',
  Thai: 'Thailand',
  American: 'United States'
};

const GRAND_PRIX_TITLE_BY_COUNTRY = {
  Australia: 'Australian Grand Prix',
  China: 'Chinese Grand Prix',
  Japan: 'Japanese Grand Prix',
  USA: 'US Grand Prix',
  Canada: 'Canadian Grand Prix',
  Monaco: 'Monaco Grand Prix',
  Spain: 'Spanish Grand Prix',
  Austria: 'Austrian Grand Prix',
  UK: 'British Grand Prix',
  Belgium: 'Belgian Grand Prix',
  Hungary: 'Hungarian Grand Prix',
  Netherlands: 'Dutch Grand Prix',
  Italy: 'Italian Grand Prix',
  Azerbaijan: 'Azerbaijan Grand Prix',
  Singapore: 'Singapore Grand Prix',
  Mexico: 'Mexican Grand Prix',
  Brazil: 'Brazilian Grand Prix',
  Qatar: 'Qatar Grand Prix',
  UAE: 'UAE Grand Prix',
  'Saudi Arabia': 'Saudi Arabian Grand Prix',
  Bahrain: 'Bahrain Grand Prix'
};

const CITY_IMAGE_FALLBACKS = {
  'Silverstone|UK': 'https://commons.wikimedia.org/wiki/Special:FilePath/High_Street%2C_Silverstone_-_geograph.org.uk_-_5075390.jpg'
};

const OFFICIAL_F1_RACE_PAGES = {
  '1': { id: '1279', slug: 'australia' },
  '2': { id: '1280', slug: 'china' },
  '3': { id: '1281', slug: 'japan' },
  '4': { id: '1282', slug: 'miami' },
  '5': { id: '1283', slug: 'canada' },
  '6': { id: '1284', slug: 'monaco' },
  '7': { id: '1285', slug: 'spain' },
  '8': { id: '1287', slug: 'austria' },
  '9': { id: '1289', slug: 'great-britain' },
  '10': { id: '1290', slug: 'belgium' }
};

const NEWS_IMAGE_FALLBACKS = [
  'assets/feature-images/george-russell.avif',
  'assets/feature-images/mercedes-car.webp',
  SILVERSTONE_IMAGE,
  'assets/race-focus-antonelli.png',
  'assets/f1-hero-2026.png'
];

const EXTERNAL_ODDS_PREVIEWS = {
  'Austria|2026': {
    source: 'talkSPORT betting preview',
    url: 'https://talksport.com/motorsport/4369319/austrian-grand-prix-betting-tips-predictions/',
    note: 'Preview names Antonelli as the justified favourite and highlights Hadjar and Colapinto as value picks.',
    rows: [
      { name: 'Andrea Kimi Antonelli', percent: 38 },
      { name: 'Lewis Hamilton', percent: 22 },
      { name: 'George Russell', percent: 18 },
      { name: 'Isack Hadjar', percent: 9 },
      { name: 'Franco Colapinto', percent: 6 },
      { name: 'Lando Norris', percent: 4 },
      { name: 'Charles Leclerc', percent: 3 }
    ]
  },
  'UK|2026': {
    source: '2026 form-based Silverstone prediction',
    url: '#standings',
    note: 'No reliable live 2026 Silverstone betting market was found, so these percentages use current championship form until Polymarket or Kalshi publish a matching market.',
    rows: [
      { name: 'George Russell', percent: 30 },
      { name: 'Andrea Kimi Antonelli', percent: 26 },
      { name: 'Lewis Hamilton', percent: 18 },
      { name: 'Lando Norris', percent: 11 },
      { name: 'Oscar Piastri', percent: 8 },
      { name: 'Charles Leclerc', percent: 5 },
      { name: 'Max Verstappen', percent: 2 }
    ]
  },
  'Belgium|2026': {
    source: 'JustBookies Belgian Grand Prix odds',
    url: 'https://www.justbookies.com/belgian-grand-prix-odds/',
    note: 'Fractional odds converted to implied win probability.',
    rows: [
      { name: 'Kimi Antonelli', percent: 38.1, odds: '13/8' },
      { name: 'George Russell', percent: 26.7, odds: '11/4' },
      { name: 'Lewis Hamilton', percent: 22.2, odds: '7/2' },
      { name: 'Charles Leclerc', percent: 15.4, odds: '11/2' },
      { name: 'Max Verstappen', percent: 8.3, odds: '11/1' },
      { name: 'Lando Norris', percent: 3.8, odds: '25/1' },
      { name: 'Oscar Piastri', percent: 2.4, odds: '40/1' },
      { name: 'Isack Hadjar', percent: 1.0, odds: '100/1' },
      { name: 'Arvid Lindblad', percent: 0.3, odds: '300/1' },
      { name: 'Gabriel Bortoleto', percent: 0.2, odds: '500/1' },
      { name: 'Pierre Gasly', percent: 0.2, odds: '500/1' },
      { name: 'Nico Hulkenberg', percent: 0.2, odds: '500/1' },
      { name: 'Franco Colapinto', percent: 0.2, odds: '500/1' },
      { name: 'Oliver Bearman', percent: 0.2, odds: '500/1' },
      { name: 'Liam Lawson', percent: 0.2, odds: '500/1' },
      { name: 'Carlos Sainz', percent: 0.2, odds: '500/1' },
      { name: 'Esteban Ocon', percent: 0.2, odds: '500/1' },
      { name: 'Alex Albon', percent: 0.2, odds: '500/1' },
      { name: 'Valtteri Bottas', percent: 0.2, odds: '500/1' },
      { name: 'Sergio Perez', percent: 0.2, odds: '500/1' },
      { name: 'Lance Stroll', percent: 0.2, odds: '500/1' },
      { name: 'Fernando Alonso', percent: 0.2, odds: '500/1' }
    ]
  }
};

const STARTING_GRID_OVERRIDES = {
  '9': {
    raceName: 'British Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1289/great-britain/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1289/great-britain/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult(1, { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:29.719', q2: '1:28.493', q3: '1:28.111', laps: '19' }),
      makeGridResult(2, { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:29.534', q2: '1:28.626', q3: '1:28.286', laps: '18' }),
      makeGridResult(3, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:29.644', q2: '1:28.864', q3: '1:28.458', laps: '17' }),
      makeGridResult(4, { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:29.985', q2: '1:28.920', q3: '1:28.481', laps: '17' }),
      makeGridResult(5, { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:29.276', q2: '1:29.069', q3: '1:28.746', laps: '18' }),
      makeGridResult(6, { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:30.186', q2: '1:29.383', q3: '1:28.877', laps: '17' }),
      makeGridResult(7, { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:29.549', q2: '1:29.113', q3: '1:28.893', laps: '18' }),
      makeGridResult(8, { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:29.971', q2: '1:29.218', q3: '1:29.032', laps: '18' }),
      makeGridResult(9, { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:29.661', q2: '1:29.324', q3: '1:29.305', laps: '17' }),
      makeGridResult(10, { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:29.300', q2: '1:29.429', q3: '1:29.716', laps: '20' }),
      makeGridResult(11, { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:30.269', q2: '1:29.461', laps: '10' }),
      makeGridResult(12, { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:30.345', q2: '1:30.063', laps: '12' }),
      makeGridResult(13, { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:29.539', q2: '1:30.076', laps: '15' }),
      makeGridResult(14, { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:30.570', q2: '1:30.501', laps: '15' }),
      makeGridResult(15, { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:30.562', q2: '1:30.623', laps: '15' }),
      makeGridResult(16, { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:30.638', q2: '1:31.341', laps: '14' }),
      makeGridResult(17, { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:30.680', laps: '9' }),
      makeGridResult(18, { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:31.227', laps: '8' }),
      makeGridResult(19, { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:31.321', laps: '5' }),
      makeGridResult(20, { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:31.451', laps: '9' }),
      makeGridResult(21, { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:32.863', laps: '9' }),
      makeGridResult(22, { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:33.025', laps: '9' })
    ],
    startingGridRows: [
      makeGridResult(1, { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:28.111' }),
      makeGridResult(2, { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:28.286' }),
      makeGridResult(3, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:28.458' }),
      makeGridResult(4, { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:28.481' }),
      makeGridResult(5, { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:28.746' }),
      makeGridResult(6, { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:28.877' }),
      makeGridResult(7, { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:28.893' }),
      makeGridResult(8, { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:29.032' }),
      makeGridResult(9, { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:29.305' }),
      makeGridResult(10, { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:29.716' }),
      makeGridResult(11, { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q2: '1:29.461' }),
      makeGridResult(12, { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q2: '1:30.076' }),
      makeGridResult(13, { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q2: '1:30.501' }),
      makeGridResult(14, { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q2: '1:30.623' }),
      makeGridResult(15, { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q2: '1:31.341' }),
      makeGridResult(16, { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:30.680' }),
      makeGridResult(17, { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:31.227' }),
      makeGridResult(18, { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:31.321' }),
      makeGridResult(19, { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:31.451' }),
      makeGridResult(20, { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q2: '1:30.063', note: 'Grid penalty applied' }),
      makeGridResult(21, { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:33.025' }),
      makeGridResult(22, { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:32.863', note: 'Grid penalty applied' })
    ]
  }
};

const WISDOM_QUOTES = [
  {
    driver: 'Charles Leclerc',
    driverId: 'leclerc',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'I have the seat full of water.',
    context: 'Radio gold after water leaked into the cockpit.',
    source: 'The Sun',
    sourceUrl: 'https://www.thesun.co.uk/sport/34009377/lewis-hamilton-monaco-grand-prix-f1-charles-leclerc/',
    wikiTitle: 'Charles_Leclerc',
    imageUrl: 'assets/quote-drivers/charles-leclerc.png',
    imagePosition: 'center'
  },
  {
    driver: 'Lando Norris',
    driverId: 'norris',
    teamColor: TEAM_COLORS.mclaren,
    quote: "It's Friday then, it's Saturday, Sunday, what?",
    context: 'A fan-favorite Lando weekend mood line.',
    source: 'Fan clip',
    sourceUrl: 'https://www.youtube.com/results?search_query=lando+norris+friday+then+saturday+sunday+what',
    wikiTitle: 'Lando_Norris',
    imageUrl: 'assets/quote-drivers/lando-norris.png',
    imagePosition: 'center'
  },
  {
    driver: 'George Russell',
    driverId: 'russell',
    teamColor: TEAM_COLORS.mercedes,
    quote: 'Welcome to skibidi toilet Baku, my dudes.',
    context: 'A deeply unserious George Russell internet-era quote.',
    source: 'Fan clip',
    sourceUrl: 'https://www.google.com/search?q=George+Russell+welcome+to+skibidi+toilet+Baku+my+dudes',
    wikiTitle: 'George_Russell_(racing_driver)',
    imageUrl: 'assets/quote-drivers/george-russell.png',
    imagePosition: 'center'
  },
  {
    driver: 'Kimi Raikkonen',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'Just leave me alone, I know what to do.',
    context: 'Peak Kimi radio, delivered while leading in Abu Dhabi.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
    wikiTitle: 'Kimi_Räikkönen',
    imageUrl: 'assets/quote-drivers/kimi-raikkonen.png',
    imagePosition: 'center'
  },
  {
    driver: 'Fernando Alonso',
    teamColor: TEAM_COLORS.mclaren,
    quote: 'GP2 engine! GP2!',
    context: 'A brutally memorable Honda-era radio message.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Fernando_Alonso',
    wikiTitle: 'Fernando_Alonso',
    imageUrl: 'assets/quote-drivers/fernando-alonso.png',
    imagePosition: 'center'
  },
  {
    driver: 'Charles Leclerc',
    driverId: 'leclerc',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'I am stupid. I am stupid.',
    context: 'A very honest Baku qualifying self-review.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Charles_Leclerc',
    wikiTitle: 'Charles_Leclerc',
    imageUrl: 'assets/quote-drivers/charles-leclerc.png',
    imagePosition: 'center'
  },
  {
    driver: 'Kimi Raikkonen',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'I was having a shit.',
    context: 'The most direct explanation for missing a ceremony.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
    wikiTitle: 'Kimi_Räikkönen',
    imageUrl: 'assets/quote-drivers/kimi-raikkonen.png',
    imagePosition: 'center'
  },
  {
    driver: 'Lando Norris',
    driverId: 'norris',
    teamColor: TEAM_COLORS.mclaren,
    quote: 'Simply lovely, huh?',
    context: 'A cheeky nod after winning in Australia.',
    source: 'news.com.au',
    sourceUrl: 'https://www.news.com.au/sport/motorsport/formula-one/lando-norris-famous-words-come-back-to-haunt-max-verstappen-after-australian-grand-prix/news-story/2beac94a302aa47462d3e2a54b557d1c',
    wikiTitle: 'Lando_Norris',
    imageUrl: 'assets/quote-drivers/lando-norris.png',
    imagePosition: 'center'
  }
];

const FALLBACK_NEWS = [
  {
    title: 'Formula 1 2026 season coverage',
    description: 'Live news feeds can be connected through public RSS proxies or a production news API.',
    link: 'https://www.formula1.com/en/latest',
    source: 'Formula 1',
    imageUrl: 'assets/f1-hero-2026.png'
  },
  {
    title: 'Driver market and team updates',
    description: 'The news panel is ready for driver-focused headlines as feeds become available.',
    link: 'https://www.bbc.com/sport/formula1',
    source: 'BBC Sport',
    imageUrl: 'assets/feature-images/mercedes-car.webp'
  },
  {
    title: 'Race weekend reports',
    description: 'Headlines refresh independently from schedule, standings, and result data.',
    link: 'https://www.motorsport.com/f1/news/',
    source: 'Motorsport.com',
    imageUrl: SILVERSTONE_IMAGE
  }
];

const RESULT_OVERRIDES = {
  '6': {
    raceName: 'Monaco Grand Prix',
    Results: [
      makeResult(1, { driverId: 'antonelli', givenName: 'Andrea Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25),
      makeResult(2, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 18),
      makeResult(3, { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 15)
    ]
  },
  '7': {
    raceName: 'Barcelona Grand Prix',
    Results: [
      makeResult(1, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 25),
      makeResult(2, { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18),
      makeResult(3, { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 15)
    ]
  },
  '8': {
    raceName: 'Austrian Grand Prix',
    Results: [
      makeResult(1, { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '71' }),
      makeResult(2, { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull' }, 18, { grid: '5', laps: '71' }),
      makeResult(3, { driverId: 'antonelli', givenName: 'Andrea Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 15, { grid: '4', laps: '71' }),
      makeResult(4, { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 12, { grid: '7', laps: '71' }),
      makeResult(5, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 10, { grid: '3', laps: '71' }),
      makeResult(6, { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull' }, 8, { grid: '8', laps: '71' }),
      makeResult(7, { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 6, { grid: '6', laps: '71' }),
      makeResult(8, { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 4, { grid: '2', laps: '71' }),
      makeResult(9, { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'RB F1 Team' }, 2, { grid: '9', laps: '70', status: 'Lapped' }),
      makeResult(10, { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'RB F1 Team' }, 1, { grid: '10', laps: '70', status: 'Lapped' }),
      makeResult(11, { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '12', laps: '70', status: 'Lapped' }),
      makeResult(12, { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '14', laps: '70', status: 'Lapped' }),
      makeResult(13, { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine F1 Team' }, 0, { grid: '11', laps: '70', status: 'Lapped' }),
      makeResult(14, { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '13', laps: '70', status: 'Lapped' }),
      makeResult(15, { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine F1 Team' }, 0, { grid: '16', laps: '70', status: 'Lapped' }),
      makeResult(16, { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '15', laps: '69', status: 'Lapped' }),
      makeResult(17, { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '18', laps: '69', status: 'Lapped' }),
      makeResult(18, { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '68', status: 'Lapped' }),
      makeResult(19, { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '45', status: 'Retired' }),
      makeResult(20, { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '17', laps: '23', status: 'Retired' }),
      makeResult(21, { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac F1 Team' }, 0, { grid: '19', laps: '4', status: 'Retired' }),
      makeResult(22, { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac F1 Team' }, 0, { grid: '20', laps: '2', status: 'Retired' })
    ]
  },
  '9': {
    raceName: 'British Grand Prix',
    Results: [
      makeResult(1, { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 25, { grid: '2', laps: '52', status: '1:27:11.335' }),
      makeResult(2, { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18, { grid: '4', laps: '52', status: '+0.427s' }),
      makeResult(3, { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 15, { grid: '3', laps: '52', status: '+0.772s' }),
      makeResult(4, { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 12, { grid: '6', laps: '52', status: '+1.149s' }),
      makeResult(5, { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 10, { grid: '5', laps: '52', status: '+1.598s' }),
      makeResult(6, { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 8, { grid: '10', laps: '52', status: '+2.023s' }),
      makeResult(7, { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 6, { grid: '9', laps: '52', status: '+2.214s' }),
      makeResult(8, { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 4, { grid: '11', laps: '52', status: '+2.413s' }),
      makeResult(9, { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 2, { grid: '19', laps: '52', status: '+3.229s' }),
      makeResult(10, { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '12', laps: '52', status: '+3.445s' }),
      makeResult(11, { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '8', laps: '52', status: '+4.014s' }),
      makeResult(12, { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '14', laps: '52', status: '+5.245s' }),
      makeResult(13, { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '17', laps: '52', status: '+5.512s' }),
      makeResult(14, { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '52', status: '+7.403s' }),
      makeResult(15, { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '1', laps: '52', status: '+8.005s' }),
      makeResult(16, { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '18', laps: '52', status: '+8.162s' }),
      makeResult(17, { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '15', laps: '51', status: '+1 lap' }),
      makeResult(18, { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '51', status: '+1 lap' }),
      makeResult(19, { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '51', status: '+1 lap' }),
      makeResult(20, { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '7', laps: '46', status: 'DNF' }),
      makeResult('NC', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '16', laps: '43', status: 'DNF' }),
      makeResult('NC', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '13', laps: '36', status: 'DNF' })
    ]
  }
};

const CURRENT_DRIVER_POINTS = {
  antonelli: { points: 171, wins: 5 },
  russell: { points: 149, wins: 2 },
  hamilton: { points: 140, wins: 1 },
  leclerc: { points: 104, wins: 1 },
  norris: { points: 91, wins: 0 },
  piastri: { points: 80, wins: 0 },
  max_verstappen: { points: 73, wins: 0 },
  hadjar: { points: 52, wins: 0 },
  gasly: { points: 42, wins: 0 },
  lawson: { points: 38, wins: 0 },
  bearman: { points: 18, wins: 0 },
  arvid_lindblad: { points: 20, wins: 0 },
  colapinto: { points: 18, wins: 0 },
  sainz: { points: 6, wins: 0 },
  bortoleto: { points: 6, wins: 0 },
  albon: { points: 5, wins: 0 },
  ocon: { points: 3, wins: 0 },
  alonso: { points: 1, wins: 0 }
};

const CURRENT_CONSTRUCTOR_POINTS = {
  mercedes: { points: 320, wins: 7 },
  ferrari: { points: 244, wins: 2 },
  mclaren: { points: 171, wins: 0 },
  red_bull: { points: 125, wins: 0 },
  alpine: { points: 60, wins: 0 },
  rb: { points: 58, wins: 0 },
  haas: { points: 21, wins: 0 },
  williams: { points: 11, wins: 0 },
  audi: { points: 6, wins: 0 },
  aston_martin: { points: 1, wins: 0 },
  cadillac: { points: 0, wins: 0 }
};

const state = {
  races: [],
  results: [],
  drivers: [],
  constructors: [],
  news: [],
  cityImages: {},
  driverImages: {},
  quoteImages: {},
  driverCareer: {},
  odds: {
    status: 'loading',
    raceRound: null,
    rows: [],
    sources: []
  },
  filter: 'all',
  selectedRaceRound: null,
  activeVoteCategory: null,
  pendingVoteDriverId: null,
  voteSubmitting: false,
  voteError: '',
  firebaseVotes: {},
  firebaseUserVotes: {},
  voteMode: 'local',
  votesReady: false,
  firebaseUnsubscribers: []
};

function makeResult(position, driver, constructor, points, details = {}) {
  return {
    position: String(position),
    positionText: String(position),
    Driver: driver,
    Constructor: constructor,
    grid: details.grid || '-',
    laps: details.laps || '-',
    status: details.status || 'Finished',
    points: String(points)
  };
}

function makeGridResult(position, driver, constructor, details = {}) {
  return {
    position: String(position),
    Driver: driver,
    Constructor: constructor,
    number: details.number || '',
    q1: details.q1 || '',
    q2: details.q2 || '',
    q3: details.q3 || '',
    laps: details.laps || '',
    note: details.note || ''
  };
}

const els = {
  dataStatus: document.querySelector('#dataStatus'),
  completedCount: document.querySelector('#completedCount'),
  upcomingCount: document.querySelector('#upcomingCount'),
  driverLeader: document.querySelector('#driverLeader'),
  nextRace: document.querySelector('#nextRace'),
  nextRaceMeta: document.querySelector('#nextRaceMeta'),
  latestWinner: document.querySelector('#latestWinner'),
  latestWinnerMeta: document.querySelector('#latestWinnerMeta'),
  constructorLeader: document.querySelector('#constructorLeader'),
  constructorLeaderMeta: document.querySelector('#constructorLeaderMeta'),
  newsCount: document.querySelector('#newsCount'),
  raceList: document.querySelector('#raceList'),
  raceDetail: document.querySelector('#raceDetail'),
  raceFocus: document.querySelector('#raceFocus'),
  startingGridMeta: document.querySelector('#startingGridMeta'),
  startingGridList: document.querySelector('#startingGridList'),
  startingGridSource: document.querySelector('#startingGridSource'),
  resultRaceSelect: document.querySelector('#resultRaceSelect'),
  resultsBody: document.querySelector('#resultsBody'),
  nextRaceVotePanel: document.querySelector('#prediction'),
  voteRaceName: document.querySelector('#voteRaceName'),
  voteCategoryGrid: document.querySelector('#voteCategoryGrid'),
  votePicker: document.querySelector('#votePicker'),
  driversStandingsBody: document.querySelector('#driversStandingsBody'),
  constructorStandingsBody: document.querySelector('#constructorStandingsBody'),
  leaderboard: document.querySelector('#leaderboard'),
  profileGrid: document.querySelector('#profileGrid'),
  quoteGrid: document.querySelector('#quoteGrid'),
  newsGrid: document.querySelector('#newsGrid'),
  refreshNews: document.querySelector('#refreshNews'),
  lastUpdated: document.querySelector('#lastUpdated')
};

const PAGE_IDS = ['home', 'next-race', 'schedule', 'race-detail', 'standings', 'profiles', 'news', 'wisdom'];

function pageFromHash() {
  const hash = window.location.hash.replace('#', '');
  if (/^race-\d+$/.test(hash)) return 'race-detail';
  if (!hash || hash === 'top') return 'home';
  if (hash === 'prediction') return 'next-race';
  if (hash === 'results') return 'schedule';
  return PAGE_IDS.includes(hash) ? hash : 'home';
}

function setActivePage(pageId = pageFromHash()) {
  const activePage = PAGE_IDS.includes(pageId) ? pageId : 'home';

  document.body.classList.toggle('page-mode', activePage !== 'home');
  document.querySelectorAll('.page-section').forEach(section => {
    const isActive = section.id === activePage;
    section.classList.toggle('is-page-active', isActive);
    section.toggleAttribute('hidden', !isActive);
  });

  document.querySelectorAll('.nav a').forEach(link => {
    const href = link.getAttribute('href');
    const isActive = href === `#${activePage}` || (activePage === 'race-detail' && href === '#schedule');
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  window.scrollTo(0, 0);
}

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[char]);
}

function teamColor(constructorId = '') {
  return TEAM_COLORS[String(constructorId).toLowerCase()] || '#e10600';
}

function formatDate(date, time) {
  if (!date) return 'Date TBC';
  const iso = time ? `${date}T${time}` : `${date}T12:00:00Z`;
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date(iso));
}

function dateValue(race) {
  return new Date(`${race.date || '2099-12-31'}T${race.time || '12:00:00Z'}`);
}

function driverName(driver = {}) {
  return [driver.givenName, driver.familyName].filter(Boolean).join(' ') || driver.driverId || 'TBC';
}

function driverFlag(driver = {}) {
  return NATIONALITY_FLAGS[driver.nationality] || '🏁';
}

function driverNationality(driver = {}) {
  return NATIONALITY_COUNTRIES[driver.nationality] || driver.nationality || 'TBC';
}

function driverIdentityHtml(driver = {}) {
  const name = escapeHtml(driverName(driver));
  const nationality = escapeHtml(driverNationality(driver));
  return `
    <span class="driver-identity">
      <span class="driver-name">${name}</span>
      <span class="driver-nationality" title="${nationality}" aria-label="${nationality}">${driverFlag(driver)} ${nationality}</span>
    </span>
  `;
}

function driverAge(driver = {}) {
  if (!driver.dateOfBirth) return 'TBC';
  const birth = new Date(`${driver.dateOfBirth}T00:00:00Z`);
  const today = new Date();
  let age = today.getUTCFullYear() - birth.getUTCFullYear();
  const birthdayPassed = today.getUTCMonth() > birth.getUTCMonth()
    || (today.getUTCMonth() === birth.getUTCMonth() && today.getUTCDate() >= birth.getUTCDate());
  if (!birthdayPassed) age -= 1;
  return String(age);
}

function ordinal(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return 'TBC';
  const suffix = number % 100 >= 11 && number % 100 <= 13
    ? 'th'
    : ({ 1: 'st', 2: 'nd', 3: 'rd' }[number % 10] || 'th');
  return `${number}${suffix}`;
}

function constructorName(constructor = {}) {
  return constructor.name || constructor.constructorId || 'TBC';
}

function teamInitials(name = '') {
  return name.split(/\s+/).filter(Boolean).map(part => part[0]).join('').slice(0, 3).toUpperCase() || 'F1';
}

function teamLogoLabel(constructor = {}) {
  return TEAM_LOGO_LABELS[constructor.constructorId] || teamInitials(constructorName(constructor));
}

function teamLogoHtml(constructor = {}) {
  const id = constructor.constructorId;
  const name = constructorName(constructor);
  const logo = TEAM_LOGOS[id];
  if (!logo) {
    return `<span class="team-logo-fallback" style="--team-color: ${teamColor(id)}" aria-label="${escapeHtml(name)} logo">${escapeHtml(teamLogoLabel(constructor))}</span>`;
  }
  return `
    <span class="team-logo-wrap">
      <img class="team-logo" src="${escapeHtml(logo)}" alt="${escapeHtml(name)} logo" loading="lazy" onerror="this.closest('.team-logo-wrap').classList.add('logo-failed')">
      <span class="team-logo-fallback" aria-hidden="true">${escapeHtml(teamLogoLabel(constructor))}</span>
    </span>
  `;
}

function driverTeam(driver = {}) {
  return state.drivers.find(item => item.Driver?.driverId === driver.driverId)?.Constructors?.[0] || {};
}

function displayRaceName(race = {}) {
  const scheduleRace = race.Circuit ? race : state.races.find(item => item.round === race.round);
  const country = scheduleRace?.Circuit?.Location?.country;
  return GRAND_PRIX_TITLE_BY_COUNTRY[country] || race.raceName || 'Grand Prix';
}

function nextRace() {
  return state.races.find(race => raceBucket(race) === 'upcoming') || null;
}

function normalizeName(value = '') {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

function findDriverByMarketName(name = '') {
  const normalized = normalizeName(name);
  if (!normalized) return null;
  return state.drivers.find(row => {
    const full = normalizeName(driverName(row.Driver));
    const family = normalizeName(row.Driver?.familyName);
    const given = normalizeName(row.Driver?.givenName);
    return normalized.includes(full) || full.includes(normalized) || normalized.includes(family) || (family && given && normalized.includes(given) && normalized.includes(family));
  })?.Driver || null;
}

function storyImageFromItem(item) {
  const media = item.querySelector('media\\:content, content, media\\:thumbnail, thumbnail');
  const enclosure = item.querySelector('enclosure');
  const description = item.querySelector('description')?.textContent || '';
  const htmlImage = description.match(/<img[^>]+src=["']([^"']+)["']/i)?.[1];
  return media?.getAttribute('url')
    || enclosure?.getAttribute('url')
    || htmlImage
    || '';
}

function readVoteStore() {
  try {
    return JSON.parse(localStorage.getItem(VOTE_STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
}

function writeVoteStore(store) {
  localStorage.setItem(VOTE_STORAGE_KEY, JSON.stringify(store));
}

function voteUserId() {
  const existing = localStorage.getItem(VOTE_USER_KEY);
  if (existing) return existing;
  const id = window.crypto?.randomUUID ? window.crypto.randomUUID() : `user-${Date.now()}-${Math.random().toString(16).slice(2)}`;
  localStorage.setItem(VOTE_USER_KEY, id);
  return id;
}

function voteRaceKey() {
  const race = nextRace();
  return race ? `${SEASON}-round-${race.round}` : `${SEASON}-next-race`;
}

function emptyVoteCategory() {
  return { totals: {}, userVote: null };
}

function getVoteCategory(categoryId) {
  if (state.voteMode === 'firebase') {
    return {
      totals: state.firebaseVotes[categoryId] || {},
      userVote: state.firebaseUserVotes[categoryId] || null
    };
  }

  const store = readVoteStore();
  const raceKey = voteRaceKey();
  return store[raceKey]?.categories?.[categoryId] || emptyVoteCategory();
}

function saveLocalVote(categoryId, driverId) {
  const store = readVoteStore();
  const raceKey = voteRaceKey();
  store[raceKey] ||= { categories: {} };
  store[raceKey].categories[categoryId] ||= emptyVoteCategory();
  const category = store[raceKey].categories[categoryId];

  if (category.userVote && category.totals[category.userVote]) {
    category.totals[category.userVote] = Math.max(0, category.totals[category.userVote] - 1);
    if (category.totals[category.userVote] === 0) delete category.totals[category.userVote];
  }

  category.userVote = driverId;
  category.totals[driverId] = (category.totals[driverId] || 0) + 1;
  writeVoteStore(store);
}

async function saveVote(categoryId, driverId) {
  if (state.voteMode === 'firebase' && window.F1FirebaseVotes?.saveVote) {
    await window.F1FirebaseVotes.saveVote(voteRaceKey(), categoryId, driverId, voteUserId());
    return;
  }
  saveLocalVote(categoryId, driverId);
}

function voteDrivers() {
  return [...state.drivers].sort((a, b) => driverName(a.Driver).localeCompare(driverName(b.Driver)));
}

function voteResults(categoryId) {
  const category = getVoteCategory(categoryId);
  const totalVotes = Object.values(category.totals).reduce((sum, value) => sum + Number(value || 0), 0);
  const driverRows = voteDrivers();
  return Object.entries(category.totals)
    .map(([driverId, votes]) => {
      const row = driverRows.find(item => item.Driver?.driverId === driverId);
      return row ? {
        driver: row.Driver,
        team: row.Constructors?.[0],
        votes,
        percent: totalVotes ? Math.round((votes / totalVotes) * 100) : 0
      } : null;
    })
    .filter(Boolean)
    .sort((a, b) => b.votes - a.votes || driverName(a.driver).localeCompare(driverName(b.driver)));
}

function firebaseConfigReady() {
  const config = window.F1_FIREBASE_CONFIG;
  return Boolean(config?.apiKey && config?.projectId && config?.appId);
}

async function initializeFirebaseVotes() {
  if (!firebaseConfigReady()) {
    state.voteMode = 'local';
    state.votesReady = true;
    renderVotingPanel();
    return;
  }

  try {
    const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app.js`);
    const {
      getFirestore,
      doc,
      collection,
      onSnapshot,
      runTransaction,
      setDoc,
      serverTimestamp
    } = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`);

    const app = initializeApp(window.F1_FIREBASE_CONFIG);
    const db = getFirestore(app);

    window.F1FirebaseVotes = {
      listen(raceKey) {
        state.firebaseUnsubscribers.forEach(unsubscribe => unsubscribe());
        state.firebaseUnsubscribers = [];
        state.firebaseVotes = {};
        state.firebaseUserVotes = {};

        const totalsRef = collection(db, 'raceVotes', raceKey, 'categories');
        const userRef = collection(db, 'raceVotes', raceKey, 'users', voteUserId(), 'categories');

        state.firebaseUnsubscribers.push(onSnapshot(totalsRef, snapshot => {
          snapshot.forEach(categoryDoc => {
            state.firebaseVotes[categoryDoc.id] = categoryDoc.data()?.totals || {};
          });
          renderVotingPanel();
        }));

        state.firebaseUnsubscribers.push(onSnapshot(userRef, snapshot => {
          snapshot.forEach(categoryDoc => {
            state.firebaseUserVotes[categoryDoc.id] = categoryDoc.data()?.driverId || null;
          });
          renderVotingPanel();
        }));
      },

      async saveVote(raceKey, categoryId, driverId, userId) {
        const categoryRef = doc(db, 'raceVotes', raceKey, 'categories', categoryId);
        const userVoteRef = doc(db, 'raceVotes', raceKey, 'users', userId, 'categories', categoryId);

        await runTransaction(db, async transaction => {
          const categorySnapshot = await transaction.get(categoryRef);
          const userSnapshot = await transaction.get(userVoteRef);
          const totals = categorySnapshot.exists() ? { ...(categorySnapshot.data().totals || {}) } : {};
          const previousDriverId = userSnapshot.exists() ? userSnapshot.data().driverId : null;

          if (previousDriverId && totals[previousDriverId]) {
            totals[previousDriverId] = Math.max(0, Number(totals[previousDriverId]) - 1);
            if (totals[previousDriverId] === 0) delete totals[previousDriverId];
          }

          totals[driverId] = (Number(totals[driverId]) || 0) + 1;
          transaction.set(categoryRef, { totals, updatedAt: serverTimestamp() }, { merge: true });
          transaction.set(userVoteRef, { driverId, updatedAt: serverTimestamp() }, { merge: true });
        });

        await setDoc(doc(db, 'raceVotes', raceKey), {
          season: SEASON,
          raceKey,
          updatedAt: serverTimestamp()
        }, { merge: true });
      }
    };

    state.voteMode = 'firebase';
    state.votesReady = true;
    window.F1FirebaseVotes.listen(voteRaceKey());
  } catch (error) {
    console.warn('Firebase voting unavailable, falling back to local votes.', error);
    state.voteMode = 'local';
    state.votesReady = true;
    renderVotingPanel();
  }
}

async function fetchJson(url) {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 9000);
  try {
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

async function loadSeasonData() {
  els.dataStatus.textContent = 'Connecting';
  const [schedule, results, drivers, constructors] = await Promise.allSettled([
    fetchJson(`${API_BASE}/races/?limit=100`),
    fetchJson(`${API_BASE}/results/?limit=1000`),
    fetchJson(`${API_BASE}/driverstandings/?limit=100`),
    fetchJson(`${API_BASE}/constructorstandings/?limit=100`)
  ]);

  state.races = schedule.value?.MRData?.RaceTable?.Races || [];
  state.results = results.value?.MRData?.RaceTable?.Races || [];
  state.drivers = drivers.value?.MRData?.StandingsTable?.StandingsLists?.[0]?.DriverStandings || [];
  state.constructors = constructors.value?.MRData?.StandingsTable?.StandingsLists?.[0]?.ConstructorStandings || [];
  applyCurrentPointTotals();

  if (!state.races.length) {
    els.dataStatus.textContent = 'API waiting';
    state.races = [];
  } else {
    els.dataStatus.textContent = 'Live data';
  }

  state.selectedRaceRound = [...allResultRaces()].pop()?.round || state.races[0]?.round || state.results[0]?.round || null;
  renderAll();
  loadCityImages();
  loadDriverImages();
  loadQuoteImages();
  loadNextRaceOdds();
}

function applyCurrentPointTotals() {
  const hasRaceAfterAustria = state.results.some(race => Number(race.round) > 8 && race.Results?.length);
  if (hasRaceAfterAustria) return;

  state.drivers = state.drivers
    .map(row => {
      const override = CURRENT_DRIVER_POINTS[row.Driver?.driverId];
      return override ? {
        ...row,
        points: String(override.points),
        wins: String(override.wins)
      } : row;
    })
    .sort((a, b) => Number(b.points) - Number(a.points) || Number(b.wins) - Number(a.wins))
    .map((row, index) => ({
      ...row,
      position: String(index + 1),
      positionText: String(index + 1)
    }));

  state.constructors = state.constructors
    .map(row => {
      const override = CURRENT_CONSTRUCTOR_POINTS[row.Constructor?.constructorId];
      return override ? {
        ...row,
        points: String(override.points),
        wins: String(override.wins)
      } : row;
    })
    .sort((a, b) => Number(b.points) - Number(a.points) || Number(b.wins) - Number(a.wins))
    .map((row, index) => ({
      ...row,
      position: String(index + 1),
      positionText: String(index + 1)
    }));
}

function wikiTitleFromUrl(url = '') {
  try {
    return decodeURIComponent(new URL(url).pathname.split('/').filter(Boolean).pop() || '');
  } catch (error) {
    return '';
  }
}

function cityImageKey(location = {}) {
  return [location.locality, location.country].filter(Boolean).join('|');
}

function cityWikiTitle(location = {}) {
  const city = location.locality || '';
  const country = location.country || '';
  const specialTitles = {
    'Miami|USA': 'Miami',
    'Las Vegas|USA': 'Las Vegas',
    'Monaco|Monaco': 'Monaco',
    'Imola|Italy': 'Imola',
    'Spielberg|Austria': 'Spielberg, Styria',
    'Marina Bay|Singapore': 'Marina Bay, Singapore',
    'Yas Island|UAE': 'Yas Island',
    'Lusail|Qatar': 'Lusail',
    'Jeddah|Saudi Arabia': 'Jeddah',
    'São Paulo|Brazil': 'São Paulo',
    'Suzuka|Japan': 'Suzuka, Mie',
    'Silverstone|UK': 'Silverstone',
    'Zandvoort|Netherlands': 'Zandvoort',
    'Spa-Francorchamps|Belgium': 'Spa, Belgium',
    'Melbourne|Australia': 'Melbourne',
    'Shanghai|China': 'Shanghai',
    'Montreal|Canada': 'Montreal',
    'Barcelona|Spain': 'Barcelona',
    'Budapest|Hungary': 'Budapest',
    'Monza|Italy': 'Monza',
    'Baku|Azerbaijan': 'Baku',
    'Austin|USA': 'Austin, Texas',
    'Mexico City|Mexico': 'Mexico City',
    'Lusail|Qatar': 'Lusail',
    'Yas Island|UAE': 'Yas Island'
  };
  return specialTitles[cityImageKey(location)] || [city, country].filter(Boolean).join(', ');
}

function raceByRound(round) {
  return state.races.find(race => race.round === String(round))
    || state.results.find(race => race.round === String(round))
    || raceResult(String(round));
}

function raceImage(race) {
  const location = race?.Circuit?.Location || {};
  const imageKey = cityImageKey(location);
  return CITY_IMAGE_FALLBACKS[imageKey] || state.cityImages[imageKey] || '';
}

function officialF1ResultsUrl(race, category = 'race-result') {
  const override = STARTING_GRID_OVERRIDES[race?.round];
  if (category === 'qualifying' && override?.sourceUrl) return override.sourceUrl;
  if (category === 'starting-grid' && override?.startingGridSourceUrl) return override.startingGridSourceUrl;
  const official = OFFICIAL_F1_RACE_PAGES[String(race?.round || '')];
  if (official) {
    return `https://www.formula1.com/en/results/2026/races/${official.id}/${official.slug}/${category}`;
  }
  return 'https://www.formula1.com/en/results.html';
}

async function loadCityImages() {
  const locations = state.races
    .map(race => race.Circuit?.Location)
    .filter(location => location?.locality && !state.cityImages[cityImageKey(location)]);

  await Promise.allSettled(locations.map(async location => {
    const title = cityWikiTitle(location);
    if (!title) return;
    const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    const image = summary.originalimage?.source || summary.thumbnail?.source;
    if (image) state.cityImages[cityImageKey(location)] = image;
  }));

  renderSchedule();
  if (pageFromHash() === 'race-detail') renderRaceDetail();
}

async function loadDriverImages() {
  const drivers = state.drivers
    .map(row => row.Driver)
    .filter(driver => driver?.driverId && driver?.url && !state.driverImages[driver.driverId]);

  await Promise.allSettled(drivers.map(async driver => {
    const title = wikiTitleFromUrl(driver.url);
    if (!title) return;
    const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    const image = summary.thumbnail?.source || summary.originalimage?.source;
    if (image) state.driverImages[driver.driverId] = image;
  }));

  renderProfiles();
  renderRaceFocus(nextRace());
}

async function loadQuoteImages() {
  await Promise.allSettled(WISDOM_QUOTES.map(async item => {
    if (item.imageUrl) {
      state.quoteImages[item.driver] = item.imageUrl;
      return;
    }
    if (item.driverId && state.driverImages[item.driverId]) {
      state.quoteImages[item.driver] = state.driverImages[item.driverId];
      return;
    }
    if (state.quoteImages[item.driver] || !item.wikiTitle) return;
    const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(item.wikiTitle)}`);
    const image = summary.thumbnail?.source || summary.originalimage?.source;
    if (image) state.quoteImages[item.driver] = image;
  }));
  renderQuotes();
}

function cleanWikiText(value = '') {
  return String(value)
    .replace(/\[[^\]]*\]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function formatFirstEntry(value = '') {
  const clean = cleanWikiText(value);
  const match = clean.match(/^(\d{4})\s+(.+)$/);
  return match ? `${match[2]} ${match[1]}` : clean || 'TBC';
}

function extractFirstYear(value = '') {
  const match = cleanWikiText(value).match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : null;
}

function wikiInfoboxValue(doc, wantedLabel) {
  const rows = [...doc.querySelectorAll('.infobox tr')];
  const wanted = normalizeName(wantedLabel);
  for (const row of rows) {
    const label = normalizeName(row.querySelector('th')?.textContent || '');
    if (label === wanted) return cleanWikiText(row.querySelector('td')?.textContent || '');
  }
  return '';
}

function extractWikiF1Teams(doc, currentTeamIds = new Set()) {
  const currentNames = new Set([...currentTeamIds].map(id => normalizeName(TEAM_LOGO_LABELS[id] || id)));
  const teams = [];
  let inF1Career = false;
  [...doc.querySelectorAll('h2, h3')].forEach(heading => {
    const text = cleanWikiText(heading.textContent);
    if (heading.tagName === 'H2') {
      inF1Career = normalizeName(text).includes('formula one career');
      return;
    }
    if (!inF1Career) return;
    const match = text.match(/^(.+?)\s*\((?:19|20)\d{2}/);
    if (!match) return;
    const team = cleanWikiText(match[1]).replace(/:.*$/, '');
    if (!team || normalizeName(team).includes('formula one')) return;
    const normalized = normalizeName(team);
    const isCurrent = [...currentNames].some(name => normalized.includes(name) || name.includes(normalized));
    if (!isCurrent && !teams.some(existing => normalizeName(existing) === normalized)) teams.push(team);
  });
  return teams;
}

async function loadWikipediaCareer(driver, currentTeamIds) {
  const title = wikiTitleFromUrl(driver.url);
  if (!title) return null;
  const data = await fetchJson(`https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(title)}&prop=text&format=json&origin=*`);
  const html = data.parse?.text?.['*'];
  if (!html) return null;
  const doc = new DOMParser().parseFromString(html, 'text/html');
  const firstEntry = wikiInfoboxValue(doc, 'First entry');
  const debutYear = extractFirstYear(firstEntry);
  const wins = wikiInfoboxValue(doc, 'Wins');
  const podiums = wikiInfoboxValue(doc, 'Podiums');
  const points = wikiInfoboxValue(doc, 'Career points');
  if (!wins && !podiums && !points) return null;

  const previousTeams = extractWikiF1Teams(doc, currentTeamIds);
  return {
    status: 'ready',
    seasons: debutYear ? SEASON - debutYear + 1 : 'TBC',
    wins: wins || 'TBC',
    podiums: podiums || 'TBC',
    points: points || 'TBC',
    debut: formatFirstEntry(firstEntry),
    previousTeams: previousTeams.length ? previousTeams : ['None'],
    source: 'Wikipedia Formula One career infobox'
  };
}

async function loadDriverCareer(driverId) {
  if (!driverId || state.driverCareer[driverId]?.status === 'ready') return state.driverCareer[driverId];
  state.driverCareer[driverId] = { status: 'loading' };
  updateProfileBack(driverId);

  try {
    const standingsRow = state.drivers.find(row => row.Driver?.driverId === driverId);
    const currentTeamIds = new Set(standingsRow?.Constructors?.map(constructor => constructor.constructorId) || []);
    const wikiCareer = standingsRow?.Driver ? await loadWikipediaCareer(standingsRow.Driver, currentTeamIds) : null;
    if (wikiCareer) {
      state.driverCareer[driverId] = wikiCareer;
      updateProfileBack(driverId);
      return wikiCareer;
    }

    const data = await fetchJson(`https://api.jolpi.ca/ergast/f1/drivers/${driverId}/results/?limit=2000`);
    const races = data.MRData?.RaceTable?.Races || [];
    const existingKeys = new Set(races.map(race => `${race.season}-${race.round}`));
    Object.entries(RESULT_OVERRIDES).forEach(([round, override]) => {
      const result = override.Results.find(item => item.Driver?.driverId === driverId);
      const scheduleRace = state.races.find(race => race.round === round);
      const key = `${SEASON}-${round}`;
      if (result && !existingKeys.has(key)) {
        races.push({
          season: String(SEASON),
          round,
          raceName: override.raceName,
          Circuit: scheduleRace?.Circuit,
          Results: [result]
        });
        existingKeys.add(key);
      }
    });
    races.sort((a, b) => Number(a.season) - Number(b.season) || Number(a.round) - Number(b.round));

    const seasons = new Set();
    const constructors = new Map();
    let wins = 0;
    let podiums = 0;
    let points = 0;
    let debut = null;

    races.forEach(race => {
      seasons.add(race.season);
      if (!debut) debut = race;
      const result = race.Results?.[0];
      if (!result) return;
      const position = Number(result.position);
      if (position === 1) wins += 1;
      if (position >= 1 && position <= 3) podiums += 1;
      points += Number(result.points) || 0;
      const constructor = result.Constructor;
      if (constructor?.constructorId) constructors.set(constructor.constructorId, constructorName(constructor));
    });
    if (state.drivers.some(row => row.Driver?.driverId === driverId)) seasons.add(String(SEASON));

    const previousTeams = [...constructors.entries()]
      .filter(([id]) => !currentTeamIds.has(id))
      .map(([, name]) => name);

    state.driverCareer[driverId] = {
      status: 'ready',
      seasons: seasons.size,
      wins,
      podiums,
      points: points.toFixed(points % 1 ? 1 : 0),
      debut: debut ? `${displayRaceName(debut)} ${debut.season}` : 'TBC',
      previousTeams: previousTeams.length ? previousTeams : ['None'],
      source: 'Jolpica career results + verified 2026 Monaco/Barcelona overrides'
    };
  } catch (error) {
    state.driverCareer[driverId] = { status: 'error' };
  }

  updateProfileBack(driverId);
  return state.driverCareer[driverId];
}

function parseMaybeJson(value) {
  if (Array.isArray(value)) return value;
  if (typeof value !== 'string') return [];
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function raceSearchTerms(race) {
  const location = race?.Circuit?.Location || {};
  return [
    displayRaceName(race),
    race?.raceName,
    location.locality,
    location.country,
    'Formula 1',
    'F1',
    'winner'
  ].filter(Boolean);
}

function marketMatchesRace(text = '', race) {
  const haystack = normalizeName(text);
  const terms = raceSearchTerms(race).map(normalizeName).filter(Boolean);
  const hasRaceTerm = terms.some(term => term && haystack.includes(term));
  const hasF1 = haystack.includes('formula 1') || haystack.includes('f1') || haystack.includes('grand prix');
  const hasWinner = haystack.includes('winner') || haystack.includes('win') || haystack.includes('winning');
  return hasRaceTerm && hasF1 && hasWinner;
}

function percentFromPrice(price) {
  const value = Number(price);
  if (!Number.isFinite(value)) return null;
  if (value > 1) return Math.max(0, Math.min(100, value));
  return Math.max(0, Math.min(100, value * 100));
}

function addOddsRow(map, name, source, percent, url = '', oddsLabel = '') {
  if (!name || !Number.isFinite(percent)) return;
  const driver = findDriverByMarketName(name);
  const displayName = driver ? driverName(driver) : name;
  const key = normalizeName(displayName);
  if (!key || key === 'yes' || key === 'no') return;
  const existing = map.get(key) || { name: displayName, driver, polymarket: null, kalshi: null, external: null, sources: {} };
  existing[source] = percent;
  if (oddsLabel) existing.oddsLabel = oddsLabel;
  if (url) existing.sources[source] = url;
  if (!existing.driver && driver) existing.driver = driver;
  map.set(key, existing);
}

function normalizeOddsRows(map) {
  return [...map.values()].map(row => {
    const values = [row.polymarket, row.kalshi, row.external].filter(value => Number.isFinite(value));
    const average = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    return { ...row, average };
  }).filter(row => row.average > 0).sort((a, b) => b.average - a.average).slice(0, 22);
}

function oddsSourceText() {
  if (!state.odds.sources.length) return 'Polymarket: checking · Kalshi: checking';
  return state.odds.sources.map(source => `${source.name}: ${source.ok ? 'connected' : 'unreachable'}`).join(' · ');
}

function oddsSliceColor(row, index) {
  const constructor = row.driver ? driverTeam(row.driver) : {};
  const fallback = ['#27f4d2', '#ed1131', '#64c4ff', '#3671c6', '#ff8000', '#ff87bc', '#f2c94c'];
  return teamColor(constructor.constructorId) || fallback[index % fallback.length];
}

function oddsPieStyle(rows) {
  const total = rows.reduce((sum, row) => sum + row.average, 0) || 1;
  let cursor = 0;
  const slices = rows.map((row, index) => {
    const start = cursor;
    cursor += (row.average / total) * 100;
    return `${oddsSliceColor(row, index)} ${start.toFixed(2)}% ${cursor.toFixed(2)}%`;
  });
  return `background: conic-gradient(${slices.join(', ')});`;
}

function oddsSliceMarkers(rows) {
  const total = rows.reduce((sum, row) => sum + row.average, 0) || 1;
  let cursor = 0;
  return rows.slice(0, 3).map((row, index) => {
    const share = (row.average / total) * 100;
    const midpoint = cursor + share / 2;
    cursor += share;
    const angle = (midpoint / 100) * 360 - 90;
    const radius = 36;
    const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
    const y = 50 + radius * Math.sin((angle * Math.PI) / 180);
    return { row, index, x, y };
  });
}

function driverPhotoHtml(driver = {}, className = 'odds-photo') {
  const image = state.driverImages[driver.driverId];
  const initials = driverName(driver).split(' ').map(part => part[0]).join('').slice(0, 2);
  return image
    ? `<img class="${className}" src="${escapeHtml(image)}" alt="${escapeHtml(driverName(driver))}">`
    : `<span class="${className} odds-photo-fallback" aria-hidden="true">${escapeHtml(initials)}</span>`;
}

async function loadPolymarketOdds(race, map) {
  const query = encodeURIComponent(`${displayRaceName(race)} winner Formula 1`);
  const data = await fetchJson(`${POLYMARKET_EVENTS_API}?closed=false&limit=20&search=${query}`);
  const events = Array.isArray(data) ? data : data.events || [];
  events.forEach(event => {
    const eventText = [event.title, event.slug, event.description].filter(Boolean).join(' ');
    if (!marketMatchesRace(eventText, race)) return;
    (event.markets || []).forEach(market => {
      const marketText = [eventText, market.question, market.slug].filter(Boolean).join(' ');
      if (!marketMatchesRace(marketText, race)) return;
      const outcomes = parseMaybeJson(market.outcomes);
      const prices = parseMaybeJson(market.outcomePrices);
      outcomes.forEach((outcome, index) => {
        addOddsRow(map, outcome, 'polymarket', percentFromPrice(prices[index]), `https://polymarket.com/event/${event.slug || ''}`);
      });
    });
  });
}

async function loadKalshiOdds(race, map) {
  const query = encodeURIComponent(`${displayRaceName(race)} winner`);
  const data = await fetchJson(`${KALSHI_MARKETS_API}?limit=100&status=open&search=${query}`);
  const markets = data.markets || [];
  markets.forEach(market => {
    const text = [market.title, market.subtitle, market.event_title, market.ticker].filter(Boolean).join(' ');
    if (!marketMatchesRace(text, race)) return;
    const title = market.title || '';
    const name = title
      .replace(/will|win|winner|the|grand prix|formula 1|f1|race/gi, ' ')
      .replace(/[?:]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const midpoint = Number.isFinite(market.yes_bid) && Number.isFinite(market.yes_ask)
      ? (market.yes_bid + market.yes_ask) / 2
      : market.last_price;
    addOddsRow(map, name, 'kalshi', percentFromPrice(midpoint), market.ticker ? `https://kalshi.com/markets/${market.ticker}` : 'https://kalshi.com/markets');
  });
}

async function loadExternalPreviewOdds(race, map) {
  const key = `${race.Circuit?.Location?.country}|${SEASON}`;
  const preview = EXTERNAL_ODDS_PREVIEWS[key];
  if (!preview) return;
  preview.rows.forEach(row => addOddsRow(map, row.name, 'external', row.percent, preview.url, row.odds));
}

function oddsSourceText(race) {
  const key = `${race.Circuit?.Location?.country}|${SEASON}`;
  const preview = EXTERNAL_ODDS_PREVIEWS[key];
  if (preview) {
    return `Odds source: ${preview.source}. ${preview.note} Prediction-market sync is checked in the background when matching markets are available.`;
  }
  return 'Odds source: Polymarket and Kalshi winner-market sync, when matching markets are available.';
}

async function loadNextRaceOdds() {
  const race = nextRace();
  if (!race) return;
  state.odds = { status: 'loading', raceRound: race.round, rows: [], sources: [] };
  renderRaceFocus(race);

  const map = new Map();
  const results = await Promise.allSettled([
    loadPolymarketOdds(race, map),
    loadKalshiOdds(race, map),
    loadExternalPreviewOdds(race, map)
  ]);
  const rows = normalizeOddsRows(map);
  state.odds = {
    status: rows.length ? 'live' : 'unavailable',
    raceRound: race.round,
    rows,
    sources: results.map((result, index) => ({
      name: ['Polymarket', 'Kalshi', 'Preview'][index],
      ok: result.status === 'fulfilled'
    }))
  };
  renderRaceFocus(race);
}

async function loadNews() {
  const stories = [];
  for (const feed of NEWS_FEEDS) {
    try {
      const proxyUrl = `https://api.allorigins.win/raw?url=${encodeURIComponent(feed)}`;
      const xmlText = await fetch(proxyUrl).then(response => {
        if (!response.ok) throw new Error('News feed unavailable');
        return response.text();
      });
      const doc = new DOMParser().parseFromString(xmlText, 'text/xml');
      const items = [...doc.querySelectorAll('item')].slice(0, 5);
      items.forEach(item => {
        stories.push({
          title: item.querySelector('title')?.textContent || 'Formula 1 headline',
          description: item.querySelector('description')?.textContent?.replace(/<[^>]+>/g, '') || '',
          link: item.querySelector('link')?.textContent || '#',
          source: doc.querySelector('channel > title')?.textContent || 'Motorsport news',
          pubDate: item.querySelector('pubDate')?.textContent || '',
          imageUrl: storyImageFromItem(item)
        });
      });
    } catch (error) {
      // Public RSS proxies can be intermittent; fallback cards keep the section useful.
    }
  }
  state.news = stories.length ? stories.slice(0, 6) : FALLBACK_NEWS;
  renderNews();
}

function raceResult(round) {
  const apiResult = state.results.find(race => race.round === round);
  if (apiResult?.Results?.length) return apiResult;
  const override = RESULT_OVERRIDES[round];
  return override ? { round, ...override, isOverride: true } : apiResult;
}

function allResultRaces() {
  const byRound = new Map();
  state.results.forEach(race => {
    if (race.Results?.length) byRound.set(race.round, race);
  });
  Object.entries(RESULT_OVERRIDES).forEach(([round, override]) => {
    if (!byRound.has(round)) byRound.set(round, { round, ...override, isOverride: true });
  });
  return [...byRound.values()].sort((a, b) => Number(a.round) - Number(b.round));
}

function raceStatus(race) {
  if (raceResult(race.round)?.Results?.length) return 'Completed';
  return dateValue(race) < new Date() ? 'Completed - results pending' : 'Upcoming';
}

function raceBucket(race) {
  return dateValue(race) < new Date() || raceStatus(race) === 'Completed' ? 'completed' : 'upcoming';
}

function racePodium(race) {
  const result = raceResult(race.round);
  return result?.Results?.slice(0, 3).map(item => ({
    position: item.positionText || item.position,
    driver: item.Driver,
    name: driverName(item.Driver),
    team: constructorName(item.Constructor),
    color: teamColor(item.Constructor?.constructorId)
  })) || [];
}

function renderSummary() {
  const completed = state.races.filter(race => raceBucket(race) === 'completed');
  const upcoming = state.races.filter(race => raceBucket(race) === 'upcoming');
  const next = upcoming[0];
  const latest = [...allResultRaces()].reverse().find(race => race.Results?.length);
  const latestWinner = latest?.Results?.[0];
  const driverLeader = state.drivers[0];
  const constructorLeader = state.constructors[0];

  els.completedCount.textContent = String(completed.length || 0);
  els.upcomingCount.textContent = String(upcoming.length || 0);
  els.driverLeader.textContent = driverLeader ? driverName(driverLeader.Driver) : 'TBC';
  els.nextRace.textContent = next ? displayRaceName(next) : 'Schedule loading';
  els.nextRaceMeta.textContent = next ? `${formatDate(next.date, next.time)} · ${next.Circuit?.Location?.country || ''}` : 'No upcoming race found yet';
  els.latestWinner.textContent = latestWinner ? driverName(latestWinner.Driver) : 'No winner yet';
  els.latestWinnerMeta.textContent = latest ? displayRaceName(latest) : 'Waiting for classified results';
  els.constructorLeader.textContent = constructorLeader ? constructorName(constructorLeader.Constructor) : 'TBC';
  els.constructorLeaderMeta.textContent = constructorLeader ? `${constructorLeader.points} pts` : 'Team standings';
  els.lastUpdated.textContent = `Last updated: ${new Intl.DateTimeFormat('en-US', { dateStyle: 'medium', timeStyle: 'short' }).format(new Date())}`;
}

function renderStartingGrid() {
  const race = nextRace();
  const grid = race ? STARTING_GRID_OVERRIDES[race.round] : null;

  if (!els.startingGridList) return;

  if (!race) {
    els.startingGridMeta.textContent = 'Next race loading';
    els.startingGridList.innerHTML = '<div class="empty-state">Starting grid will appear once the next race is loaded.</div>';
    return;
  }

  if (!grid?.rows?.length) {
    els.startingGridMeta.textContent = `${displayRaceName(race)} · Grid pending`;
    els.startingGridList.innerHTML = '<div class="empty-state">Official qualifying and starting-grid results are not available yet.</div>';
    els.startingGridSource.href = 'https://www.formula1.com/en/results.html';
    return;
  }

  els.startingGridMeta.textContent = `${displayRaceName(race)} · ${grid.note}`;
  els.startingGridSource.href = grid.sourceUrl;
  els.startingGridList.innerHTML = gridRowsHtml(grid.rows);
}

function gridRowsHtml(rows = []) {
  if (!rows.length) return '<div class="empty-state">Official qualifying and starting-grid results are not available yet.</div>';
  return `
    <div class="grid-header">
      <span>Pos</span>
      <span>No.</span>
      <span>Driver</span>
      <span>Team</span>
      <span>Q1</span>
      <span>Q2</span>
      <span>Q3</span>
    </div>
    ${rows.map(row => `
    <div class="grid-row" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">
      <span class="grid-position">${escapeHtml(row.position)}</span>
      <span class="grid-number">${escapeHtml(row.number)}</span>
      <span class="grid-driver">${driverIdentityHtml(row.Driver)}</span>
      <span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span>
      <span class="grid-time grid-q1">${escapeHtml(row.q1 || '-')}</span>
      <span class="grid-time grid-q2">${escapeHtml(row.q2 || '-')}</span>
      <span class="grid-time grid-q3">${escapeHtml(row.q3 || '-')}</span>
      ${row.note ? `<span class="grid-note">${escapeHtml(row.note)}</span>` : ''}
    </div>
  `).join('')}
  `;
}

function startingGridRowsHtml(rows = []) {
  if (!rows.length) return '<div class="empty-state">Official race starting grid is not available yet.</div>';
  return `
    <div class="grid-header starting-grid-header">
      <span>Pos</span>
      <span>No.</span>
      <span>Driver</span>
      <span>Team</span>
      <span>Time</span>
    </div>
    ${rows.map(row => {
      const time = row.q3 || row.q2 || row.q1 || '-';
      return `
      <div class="grid-row starting-grid-row" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">
        <span class="grid-position">${escapeHtml(row.position)}</span>
        <span class="grid-number">${escapeHtml(row.number)}</span>
        <span class="grid-driver">${driverIdentityHtml(row.Driver)}</span>
        <span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span>
        <span class="grid-time grid-start-time">${escapeHtml(time)}</span>
        ${row.note ? `<span class="grid-note">${escapeHtml(row.note)}</span>` : ''}
      </div>
    `;
    }).join('')}
  `;
}

function renderSchedule() {
  const filtered = state.races.filter(race => {
    if (state.filter === 'all') return true;
    return raceBucket(race) === state.filter;
  });

  if (!filtered.length) {
    els.raceList.innerHTML = `<div class="empty-state">No ${escapeHtml(state.filter)} races are available from the live 2026 schedule yet.</div>`;
    renderRaceFocus(null);
    return;
  }

  els.raceList.innerHTML = filtered.map(race => {
    const status = raceStatus(race);
    const location = race.Circuit?.Location || {};
    const city = location.locality || 'City TBC';
    const country = location.country || 'Country TBC';
    const imageKey = cityImageKey(location);
    const cityImage = CITY_IMAGE_FALLBACKS[imageKey] || state.cityImages[imageKey];
    const imageStyle = cityImage ? ` style="--race-image: url('${escapeHtml(cityImage)}')"` : '';
    const podium = racePodium(race);
    const podiumHtml = podium.length
      ? podium.map((finisher, index) => `
          <span class="podium-finisher" style="--team-color: ${escapeHtml(finisher.color)}">
            <span class="podium-position">P${escapeHtml(finisher.position || index + 1)}</span>
            <span class="podium-name">${driverIdentityHtml(finisher.driver)}</span>
            <span class="podium-team">${escapeHtml(finisher.team)}</span>
          </span>
        `).join('')
      : `<span class="podium-empty">${raceBucket(race) === 'completed' ? 'Podium pending' : 'Podium TBC'}</span>`;
    return `
      <button class="race-card ${race.round === state.selectedRaceRound ? 'active' : ''}" type="button" data-round="${escapeHtml(race.round)}"${imageStyle}>
        <div class="race-card-top">
          <span>Round ${escapeHtml(race.round)}</span>
          <span class="race-status">${escapeHtml(status)}</span>
        </div>
        <h3>${escapeHtml(displayRaceName(race))}</h3>
        <p>${escapeHtml(formatDate(race.date, race.time))} · ${escapeHtml(city)}, ${escapeHtml(country)}</p>
        <span class="host-city">Host city: ${escapeHtml(city)}</span>
        <div class="podium-list" aria-label="Podium finishers">${podiumHtml}</div>
      </button>
    `;
  }).join('');

  els.raceList.querySelectorAll('.race-card').forEach(button => {
    button.addEventListener('click', () => {
      state.selectedRaceRound = button.dataset.round;
      renderRaceDetail(state.selectedRaceRound);
      history.pushState(null, '', `#race-${state.selectedRaceRound}`);
      setActivePage('race-detail');
      renderSchedule();
    });
  });

  renderRaceFocus(nextRace() || filtered[0]);
}

function renderRaceDetail(roundFromHash = window.location.hash.replace('#race-', '')) {
  if (!els.raceDetail) return;

  const round = String(roundFromHash || state.selectedRaceRound || nextRace()?.round || state.races[0]?.round || '');
  const race = raceByRound(round);

  if (!race) {
    els.raceDetail.innerHTML = `
      <div class="empty-state">Select a race from the schedule to open its race page.</div>
    `;
    return;
  }

  state.selectedRaceRound = round;
  const location = race.Circuit?.Location || {};
  const city = location.locality || 'City TBC';
  const country = location.country || 'Country TBC';
  const image = raceImage(race);
  const imageStyle = image ? ` style="--race-detail-image: url('${escapeHtml(image)}')"` : '';
  const grid = STARTING_GRID_OVERRIDES[round];
  const result = raceResult(round);
  const status = raceStatus(race);
  const sourceUrl = officialF1ResultsUrl(race);
  const qualifyingSourceUrl = officialF1ResultsUrl(race, 'qualifying');
  const startingGridSourceUrl = officialF1ResultsUrl(race, 'starting-grid');
  const startingGridRows = grid?.startingGridRows || grid?.rows || [];
  const gridMeta = grid?.rows?.length
    ? `${grid.note || 'Official qualifying table'}`
    : 'Official qualifying and starting-grid results pending';
  const startingGridMeta = startingGridRows.length
    ? 'Official race starting grid'
    : 'Official race starting grid pending';
  const resultMeta = result?.Results?.length
    ? `${result.Results.length} classified finishers`
    : 'Race result pending';

  els.raceDetail.innerHTML = `
    <div class="race-detail-hero"${imageStyle}>
      <button class="race-detail-back" type="button" data-page-back="schedule">Back to schedule</button>
      <p class="eyebrow">Round ${escapeHtml(round)} race page</p>
      <h2 id="raceDetailTitle">${escapeHtml(displayRaceName(race))}</h2>
      <p>${escapeHtml(race.Circuit?.circuitName || 'Circuit TBC')} · ${escapeHtml(city)}, ${escapeHtml(country)}</p>
      <dl>
        <dt>Date</dt><dd>${escapeHtml(formatDate(race.date, race.time))}</dd>
        <dt>Status</dt><dd>${escapeHtml(status)}</dd>
        <dt>Official tables</dt><dd><a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Formula 1 results center</a></dd>
      </dl>
    </div>

    <div class="race-detail-grid">
      <section class="starting-grid-panel" aria-labelledby="raceQualifyingTitle">
        <div class="starting-grid-head">
          <div>
            <p class="eyebrow">Official table</p>
            <h3 id="raceQualifyingTitle">Qualifying results</h3>
          </div>
          <span>${escapeHtml(gridMeta)}</span>
        </div>
        <div class="starting-grid-list">${gridRowsHtml(grid?.rows || [])}</div>
        <a class="starting-grid-source" href="${escapeHtml(qualifyingSourceUrl)}" target="_blank" rel="noreferrer">Official F1 qualifying table</a>
      </section>

      <section class="starting-grid-panel" aria-labelledby="raceStartingGridTitle">
        <div class="starting-grid-head">
          <div>
            <p class="eyebrow">Race start</p>
            <h3 id="raceStartingGridTitle">Starting grid</h3>
          </div>
          <span>${escapeHtml(startingGridMeta)}</span>
        </div>
        <div class="starting-grid-list">${startingGridRowsHtml(startingGridRows)}</div>
        <a class="starting-grid-source" href="${escapeHtml(startingGridSourceUrl)}" target="_blank" rel="noreferrer">Official F1 starting-grid table</a>
      </section>
    </div>

    <section class="race-result-panel" aria-labelledby="raceResultTitle">
      <div class="starting-grid-head">
        <div>
          <p class="eyebrow">Classified finishers</p>
          <h3 id="raceResultTitle">Race results</h3>
        </div>
        <span>${escapeHtml(resultMeta)}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Pos</th>
              <th>Driver</th>
              <th>Team</th>
              <th>Grid</th>
              <th>Laps</th>
              <th>Status</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            ${result?.Results?.length ? resultRowsHtml(result.Results) : '<tr><td colspan="7">No official race result is available yet.</td></tr>'}
          </tbody>
        </table>
      </div>
      <a class="starting-grid-source" href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">Official F1 race result table</a>
    </section>
  `;

  els.raceDetail.querySelector('[data-page-back="schedule"]')?.addEventListener('click', () => {
    history.pushState(null, '', '#schedule');
    setActivePage('schedule');
    renderSchedule();
  });
}

function renderRaceFocus(race) {
  if (!race) {
    els.raceFocus.innerHTML = `
      <p class="eyebrow">Race focus</p>
      <h3>2026 calendar pending</h3>
      <p>The public API has not returned race rows for this season in this browser session.</p>
    `;
    return;
  }
  const location = race.Circuit?.Location || {};
  const oddsRows = state.odds.raceRound === race.round ? state.odds.rows : [];
  const topPick = oddsRows[0];
  const imageKey = cityImageKey(location);
  const cityImage = CITY_IMAGE_FALLBACKS[imageKey] || state.cityImages[imageKey];
  const focusImage = location.country === 'UK' ? SILVERSTONE_IMAGE : (RACE_FOCUS_IMAGE || cityImage);
  if (focusImage) {
    els.raceFocus.style.setProperty('--focus-image', `url('${focusImage}')`);
  } else {
    els.raceFocus.style.removeProperty('--focus-image');
  }
  const oddsHtml = oddsRows.length ? `
    <div class="odds-chart-wrap" aria-label="Next winner odds pie chart">
      <div class="odds-pie" style="${escapeHtml(oddsPieStyle(oddsRows))}">
        ${oddsSliceMarkers(oddsRows).map(marker => `
          <span class="odds-slice-marker" style="--marker-x: ${marker.x.toFixed(2)}%; --marker-y: ${marker.y.toFixed(2)}%; --slice-color: ${oddsSliceColor(marker.row, marker.index)}">
            ${marker.row.driver ? driverPhotoHtml(marker.row.driver, 'odds-slice-photo') : '<span class="odds-slice-photo odds-photo-fallback" aria-hidden="true">F1</span>'}
          </span>
        `).join('')}
        <div class="odds-pie-center">
          ${topPick?.driver ? driverPhotoHtml(topPick.driver, 'odds-center-photo') : ''}
          <strong>${escapeHtml(topPick?.name || 'Top pick')}</strong>
          <span>${escapeHtml(topPick ? `${topPick.average.toFixed(1)}%${topPick.oddsLabel ? ` · ${topPick.oddsLabel}` : ''}` : '--')}</span>
        </div>
      </div>
      <div class="odds-legend">
        ${oddsRows.map((row, index) => {
          const constructor = row.driver ? driverTeam(row.driver) : {};
          return `
            <div class="odds-legend-row ${row === topPick ? 'top-pick' : ''}" style="--slice-color: ${oddsSliceColor(row, index)}">
              ${row.driver ? driverPhotoHtml(row.driver) : '<span class="odds-photo odds-photo-fallback" aria-hidden="true">F1</span>'}
              <span class="odds-legend-driver">
                ${row.driver ? driverIdentityHtml(row.driver) : escapeHtml(row.name)}
              </span>
              <span class="team-chip" style="--team-color: ${teamColor(constructor.constructorId)}">${escapeHtml(constructorName(constructor))}</span>
              <strong>${row.average.toFixed(1)}%${row.oddsLabel ? ` · ${escapeHtml(row.oddsLabel)}` : ''}</strong>
            </div>
          `;
        }).join('')}
      </div>
    </div>
  ` : `
    <div class="odds-empty">
      ${state.odds.status === 'loading' ? 'Searching Polymarket and Kalshi winner markets...' : 'No matching live winner market found from Polymarket or Kalshi.'}
    </div>
  `;
  els.raceFocus.innerHTML = `
    <div class="focus-media"></div>
    <p class="eyebrow">Next race focus</p>
    <h3>${escapeHtml(displayRaceName(race))}</h3>
    <p>${escapeHtml(race.Circuit?.circuitName || 'Circuit TBC')}</p>
    <dl>
      <dt>Round</dt><dd>${escapeHtml(race.round)}</dd>
      <dt>Date</dt><dd>${escapeHtml(formatDate(race.date, race.time))}</dd>
      <dt>Status</dt><dd>${escapeHtml(raceStatus(race))}</dd>
      <dt>Location</dt><dd>${escapeHtml([location.locality, location.country].filter(Boolean).join(', ') || 'TBC')}</dd>
    </dl>
    ${oddsHtml}
    <p class="odds-source">${escapeHtml(oddsSourceText(race))}</p>
  `;
}

function renderResultSelector() {
  if (!els.resultRaceSelect || !els.resultsBody) return;
  const resultRaces = allResultRaces();
  els.resultRaceSelect.innerHTML = resultRaces.length
    ? resultRaces.map(race => `<option value="${escapeHtml(race.round)}">${escapeHtml(displayRaceName(race))}</option>`).join('')
    : '<option>No completed race results yet</option>';

  if (resultRaces.length) {
    const latestRound = resultRaces[resultRaces.length - 1].round;
    els.resultRaceSelect.value = latestRound;
    renderResults(latestRound);
  } else {
    renderResults(null);
  }

  els.resultRaceSelect.addEventListener('change', event => renderResults(event.target.value));
}

function renderResults(round) {
  if (!els.resultsBody) return;
  const race = raceResult(round);
  if (!race?.Results?.length) {
    els.resultsBody.innerHTML = '<tr><td colspan="7">No classified 2026 race result is available yet.</td></tr>';
    return;
  }
  els.resultsBody.innerHTML = resultRowsHtml(race.Results);
}

function resultRowsHtml(results = []) {
  return results.map(result => `
    <tr>
        <td>${escapeHtml(result.positionText || result.position)}</td>
        <td>${driverIdentityHtml(result.Driver)}</td>
        <td><span class="team-chip" style="--team-color: ${teamColor(result.Constructor?.constructorId)}">${escapeHtml(constructorName(result.Constructor))}</span></td>
        <td>${escapeHtml(result.grid)}</td>
      <td>${escapeHtml(result.laps)}</td>
      <td>${escapeHtml(result.status)}</td>
      <td>${escapeHtml(result.points)}</td>
    </tr>
  `).join('');
}

function voteCategoryCard(category) {
  const data = getVoteCategory(category.id);
  const results = voteResults(category.id);
  const userDriver = data.userVote
    ? state.drivers.find(row => row.Driver?.driverId === data.userVote)?.Driver
    : null;
  const topResults = results.slice(0, 4);
  const imageStyle = category.imageUrl
    ? `--vote-image: url('${escapeHtml(category.imageUrl)}'); --vote-position: ${escapeHtml(category.imagePosition || 'center')};`
    : '';
  const resultHtml = data.userVote
    ? `
      <div class="vote-results">
        ${topResults.length ? topResults.map(result => `
          <div class="vote-result-row">
            <span>${driverFlag(result.driver)} ${escapeHtml(driverName(result.driver))}</span>
            <strong>${escapeHtml(result.percent)}%</strong>
            <i style="--vote-percent: ${escapeHtml(result.percent)}%; --team-color: ${teamColor(result.team?.constructorId)}"></i>
          </div>
        `).join('') : '<span class="vote-empty">No totals yet</span>'}
      </div>
      <span class="vote-current">Your pick: ${userDriver ? `${driverFlag(userDriver)} ${escapeHtml(driverName(userDriver))}` : 'Saved'}</span>
    `
    : '<div class="vote-empty-space" aria-hidden="true"></div>';

  return `
    <article class="vote-card ${state.activeVoteCategory === category.id ? 'is-active' : ''}" style="${imageStyle}">
      <div>
        <span class="vote-card-kicker">${escapeHtml(category.shortTitle)}</span>
        <h4>${escapeHtml(category.title)}</h4>
      </div>
      ${resultHtml}
      <button class="vote-open" type="button" data-vote-category="${escapeHtml(category.id)}">${data.userVote ? 'Change vote' : 'Vote'}</button>
    </article>
  `;
}

function renderVotePicker() {
  if (!state.activeVoteCategory) {
    els.votePicker.hidden = true;
    els.votePicker.innerHTML = '';
    return;
  }

  const category = VOTE_CATEGORIES.find(item => item.id === state.activeVoteCategory);
  const drivers = voteDrivers();
  const currentVote = getVoteCategory(category.id).userVote;
  const selectedDriverId = state.pendingVoteDriverId || currentVote;

  els.votePicker.hidden = false;
  els.votePicker.innerHTML = `
    <div class="vote-picker-head">
      <div>
        <span class="vote-card-kicker">Choose driver</span>
        <strong>${escapeHtml(category.title)}</strong>
      </div>
      <button class="vote-close" type="button" aria-label="Close vote picker">Close</button>
    </div>
    <div class="vote-driver-list" role="radiogroup" aria-label="${escapeHtml(category.title)} driver choices">
      ${drivers.map(row => {
        const driver = row.Driver;
        const team = row.Constructors?.[0] || {};
        const checked = driver.driverId === selectedDriverId;
        return `
          <label class="vote-driver-option ${checked ? 'is-selected' : ''}" style="--team-color: ${teamColor(team.constructorId)}">
            <input type="radio" name="vote-driver" value="${escapeHtml(driver.driverId)}" ${checked ? 'checked' : ''}>
            <span>${driverIdentityHtml(driver)}</span>
            <small>${escapeHtml(constructorName(team))}</small>
          </label>
        `;
      }).join('')}
    </div>
    <div class="vote-actions">
      ${state.voteError ? `<span class="vote-error">${escapeHtml(state.voteError)}</span>` : ''}
      <button class="vote-submit" type="button" ${(selectedDriverId && !state.voteSubmitting) ? '' : 'disabled'}>${state.voteSubmitting ? 'Saving...' : 'Submit vote'}</button>
      <button class="vote-cancel" type="button" ${state.voteSubmitting ? 'disabled' : ''}>Cancel</button>
    </div>
  `;
}

function renderVotingPanel() {
  const race = nextRace();
  if (!els.nextRaceVotePanel) return;
  if (!race || !state.drivers.length) {
    els.voteRaceName.textContent = 'Waiting for next race';
    els.voteCategoryGrid.innerHTML = '<div class="empty-state">Voting opens when the next race and driver list are loaded.</div>';
    els.votePicker.hidden = true;
    return;
  }

  const modeLabel = state.voteMode === 'firebase' ? 'Shared live voting' : 'Local preview voting';
  els.voteRaceName.textContent = `${displayRaceName(race)} · Round ${race.round} · ${modeLabel}`;
  els.voteCategoryGrid.innerHTML = VOTE_CATEGORIES.map(voteCategoryCard).join('');
  renderVotePicker();
}

function renderStandings() {
  els.driversStandingsBody.innerHTML = state.drivers.length ? state.drivers.map(row => `
    <tr>
      <td>${escapeHtml(row.position)}</td>
      <td>${driverIdentityHtml(row.Driver)}</td>
      <td><span class="team-chip" style="--team-color: ${teamColor(row.Constructors?.[0]?.constructorId)}">${escapeHtml(constructorName(row.Constructors?.[0]))}</span></td>
      <td>${escapeHtml(row.wins)}</td>
      <td>${escapeHtml(row.points)}</td>
    </tr>
  `).join('') : '<tr><td colspan="5">Driver standings have not been published by the live API yet.</td></tr>';

  els.constructorStandingsBody.innerHTML = state.constructors.length ? state.constructors.map(row => `
    <tr>
      <td>${escapeHtml(row.position)}</td>
      <td><span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span></td>
      <td>${teamLogoHtml(row.Constructor)}</td>
      <td>${escapeHtml(row.wins)}</td>
      <td>${escapeHtml(row.points)}</td>
    </tr>
  `).join('') : '<tr><td colspan="5">Constructor standings have not been published by the live API yet.</td></tr>';

  renderLeaderboard('Driver leaders', state.drivers.slice(0, 5).map(row => ({
    name: driverName(row.Driver),
    meta: constructorName(row.Constructors?.[0]),
    points: row.points,
    color: teamColor(row.Constructors?.[0]?.constructorId)
  })));
}

function renderLeaderboard(title, rows) {
  els.leaderboard.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    ${rows.length ? rows.map((row, index) => `
      <div class="leader-item" style="--team-color: ${row.color}">
        <span class="rank">${index + 1}</span>
        <span class="team-chip" style="--team-color: ${row.color}">
          <span><strong>${escapeHtml(row.name)}</strong><br><small>${escapeHtml(row.meta)}</small></span>
        </span>
        <strong>${escapeHtml(row.points)}</strong>
      </div>
    `).join('') : '<p class="empty-state">No points data available yet.</p>'}
  `;
}

function careerBackHtml(row) {
  const driver = row.Driver;
  const career = state.driverCareer[driver.driverId] || { status: 'idle' };
  const image = state.driverImages[driver.driverId];
  const imageHtml = image
    ? `<img class="profile-back-photo" src="${escapeHtml(image)}" alt="${escapeHtml(driverName(driver))}">`
    : `<div class="profile-back-photo profile-photo-fallback" aria-hidden="true">${escapeHtml(driverName(driver).split(' ').map(part => part[0]).join('').slice(0, 2))}</div>`;

  if (career.status === 'loading' || career.status === 'idle') {
    return `
      ${imageHtml}
      <div class="profile-back-copy">
        <strong>${escapeHtml(driverName(driver))}</strong>
        <p class="profile-meta">Loading career card...</p>
      </div>
    `;
  }

  if (career.status === 'error') {
    return `
      ${imageHtml}
      <div class="profile-back-copy">
        <strong>${escapeHtml(driverName(driver))}</strong>
        <p class="profile-meta">Career stats unavailable from the live API right now.</p>
      </div>
    `;
  }

  return `
    ${imageHtml}
    <div class="profile-back-copy">
      <strong>${escapeHtml(driverName(driver))}</strong>
      <div class="career-stats">
        <span>Age</span><b>${escapeHtml(driverAge(driver))}</b>
        <span>Nationality</span><b>${driverFlag(driver)} ${escapeHtml(driverNationality(driver))}</b>
        <span>Season</span><b>${escapeHtml(ordinal(career.seasons))}</b>
        <span>Career wins</span><b>${escapeHtml(career.wins)}</b>
        <span>Career podiums</span><b>${escapeHtml(career.podiums)}</b>
        <span>Career points</span><b>${escapeHtml(career.points)}</b>
        <span>Debut</span><b>${escapeHtml(career.debut)}</b>
        <span>Other teams</span><b>${escapeHtml(career.previousTeams.join(', '))}</b>
      </div>
      <p class="career-source">${escapeHtml(career.source)}</p>
    </div>
  `;
}

function updateProfileBack(driverId) {
  const card = document.querySelector(`[data-driver-id="${CSS.escape(driverId)}"]`);
  const row = state.drivers.find(item => item.Driver?.driverId === driverId);
  if (!card || !row) return;
  const back = card.querySelector('.profile-card-back');
  if (back) back.innerHTML = careerBackHtml(row);
}

function renderProfiles() {
  const profiles = state.drivers.length ? state.drivers : [];
  els.profileGrid.innerHTML = profiles.length ? profiles.map(row => {
    const team = row.Constructors?.[0] || {};
    const image = state.driverImages[row.Driver?.driverId];
    const imageHtml = image
      ? `<img class="profile-photo" src="${escapeHtml(image)}" alt="${escapeHtml(driverName(row.Driver))}">`
      : `<div class="profile-photo profile-photo-fallback" aria-hidden="true">${escapeHtml(driverName(row.Driver).split(' ').map(part => part[0]).join('').slice(0, 2))}</div>`;
    return `
      <article class="profile-card" style="--team-color: ${teamColor(team.constructorId)}" data-driver-id="${escapeHtml(row.Driver?.driverId)}" tabindex="0" role="button" aria-label="${escapeHtml(driverName(row.Driver))} profile card">
        <div class="profile-card-inner">
          <div class="profile-card-face profile-card-front">
            <div class="profile-copy">
              <span class="profile-meta">${escapeHtml(constructorName(team))}</span>
              <strong>${escapeHtml(driverName(row.Driver))}</strong>
              <p>${escapeHtml(row.points)} championship points · ${escapeHtml(row.wins)} wins</p>
              <span class="profile-meta">Nationality: ${driverFlag(row.Driver)} ${escapeHtml(driverNationality(row.Driver))}</span>
              <span class="flip-hint">Click to flip</span>
            </div>
            ${imageHtml}
          </div>
          <div class="profile-card-face profile-card-back">
            ${careerBackHtml(row)}
          </div>
        </div>
      </article>
    `;
  }).join('') : `
    <article class="profile-card">
      <span class="profile-meta">Live API</span>
      <strong>Driver profiles pending</strong>
      <p>Profiles fill automatically from the 2026 driver standings once the public API has rows.</p>
      <span class="profile-meta">No manual editing required</span>
    </article>
  `;

  els.profileGrid.onclick = event => {
    const card = event.target.closest('.profile-card[data-driver-id]');
    if (!card) return;
    flipProfileCard(card);
  };
  els.profileGrid.onkeydown = event => {
    const card = event.target.closest('.profile-card[data-driver-id]');
    if (!card || (event.key !== 'Enter' && event.key !== ' ')) return;
    event.preventDefault();
    flipProfileCard(card);
  };
}

function flipProfileCard(card) {
  card.classList.toggle('is-flipped');
  card.setAttribute('aria-pressed', String(card.classList.contains('is-flipped')));
  if (card.classList.contains('is-flipped')) loadDriverCareer(card.dataset.driverId);
}

function renderNews() {
  els.newsCount.textContent = state.news.length ? `${state.news.length} stories` : 'No stories';
  els.newsGrid.innerHTML = state.news.map((story, index) => {
    const image = story.imageUrl || NEWS_IMAGE_FALLBACKS[index % NEWS_IMAGE_FALLBACKS.length];
    return `
    <article class="news-card" style="--news-image: url('${escapeHtml(image)}')">
      <div class="news-image" aria-hidden="true"></div>
      <div>
        <span class="news-meta">${escapeHtml(story.source || 'Motorsport news')}</span>
        <strong>${escapeHtml(story.title)}</strong>
        <p>${escapeHtml(story.description || 'Open the story for the full report.')}</p>
      </div>
      <a href="${escapeHtml(story.link)}" target="_blank" rel="noreferrer">Read story</a>
    </article>
  `;
  }).join('');
}

function renderQuotes() {
  els.quoteGrid.innerHTML = WISDOM_QUOTES.map(item => {
    const image = (item.driverId && state.driverImages[item.driverId]) || state.quoteImages[item.driver];
    const imageStyle = image ? `--quote-image: url('${escapeHtml(image)}');` : '';
    const positionStyle = item.imagePosition ? `--quote-position: ${escapeHtml(item.imagePosition)};` : '';
    const cardStyle = `--quote-color: ${escapeHtml(item.teamColor || TEAM_COLORS.red_bull)}; ${imageStyle} ${positionStyle}`;
    return `
      <article class="quote-card" style="${cardStyle}">
        <div class="quote-copy">
          <blockquote>${escapeHtml(item.quote)}</blockquote>
          <strong>${escapeHtml(item.driver)}</strong>
          <a href="${escapeHtml(item.sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(item.source)}</a>
        </div>
      </article>
    `;
  }).join('');
}

function renderAll() {
  renderSummary();
  renderStartingGrid();
  renderSchedule();
  renderRaceDetail();
  renderResultSelector();
  renderVotingPanel();
  renderStandings();
  renderProfiles();
  renderQuotes();
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', event => {
    const targetId = link.getAttribute('href').slice(1);
    const pageId = targetId === 'top' ? 'home' : (PAGE_IDS.includes(targetId) ? targetId : 'home');

    event.preventDefault();
    if (window.location.hash !== `#${pageId}`) {
      history.pushState(null, '', `#${pageId}`);
    }
    if (pageId === 'race-detail') renderRaceDetail();
    setActivePage(pageId);
  });
});

window.addEventListener('popstate', () => {
  if (pageFromHash() === 'race-detail') renderRaceDetail();
  setActivePage();
});
window.addEventListener('hashchange', () => {
  if (pageFromHash() === 'race-detail') renderRaceDetail();
  setActivePage();
});
setActivePage();

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter;
    renderSchedule();
  });
});

els.refreshNews.addEventListener('click', loadNews);

els.nextRaceVotePanel?.addEventListener('click', async event => {
  const openButton = event.target.closest('[data-vote-category]');
  if (openButton) {
    state.activeVoteCategory = openButton.dataset.voteCategory;
    state.pendingVoteDriverId = getVoteCategory(state.activeVoteCategory).userVote;
    state.voteError = '';
    state.voteSubmitting = false;
    renderVotingPanel();
    return;
  }

  if (event.target.closest('.vote-close') || event.target.closest('.vote-cancel')) {
    if (state.voteSubmitting) return;
    state.activeVoteCategory = null;
    state.pendingVoteDriverId = null;
    state.voteError = '';
    renderVotingPanel();
    return;
  }

  if (event.target.closest('.vote-submit')) {
    if (!state.activeVoteCategory || !state.pendingVoteDriverId || state.voteSubmitting) return;
    state.voteSubmitting = true;
    state.voteError = '';
    renderVotingPanel();
    try {
      await saveVote(state.activeVoteCategory, state.pendingVoteDriverId);
      state.activeVoteCategory = null;
      state.pendingVoteDriverId = null;
      state.voteError = '';
    } catch (error) {
      console.error(error);
      saveLocalVote(state.activeVoteCategory, state.pendingVoteDriverId);
      state.voteError = 'Vote saved only on this browser. Publish the updated Firestore rules from FIREBASE_SETUP.md, then refresh and try again.';
    } finally {
      state.voteSubmitting = false;
      renderVotingPanel();
    }
  }
});

els.nextRaceVotePanel?.addEventListener('change', event => {
  if (event.target.name !== 'vote-driver') return;
  state.pendingVoteDriverId = event.target.value;
  state.voteError = '';
  renderVotePicker();
});

loadSeasonData()
  .then(initializeFirebaseVotes)
  .catch(error => {
    console.error(error);
    els.dataStatus.textContent = 'Offline';
    renderAll();
    initializeFirebaseVotes();
  });
loadNews();
