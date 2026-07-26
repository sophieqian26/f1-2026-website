const SEASON = 2026;
const API_BASE = `https://api.jolpi.ca/ergast/f1/${SEASON}`;
const NEWS_FEEDS = [
  'https://feeds.bbci.co.uk/sport/formula1/rss.xml',
  'https://www.motorsport.com/rss/f1/news/'
];
const RACE_FOCUS_IMAGE = 'assets/feature-images/odds-kimi-antonelli.png';
const SILVERSTONE_IMAGE = 'assets/feature-images/silverstone-circuit.jpg';

const POLYMARKET_EVENTS_API = 'https://gamma-api.polymarket.com/events';
const KALSHI_MARKETS_API = 'https://api.elections.kalshi.com/trade-api/v2/markets';
const VOTE_STORAGE_KEY = `f1-${SEASON}-race-votes`;
const VOTE_USER_KEY = `f1-${SEASON}-vote-user-id`;
const THEME_STORAGE_KEY = `f1-${SEASON}-theme`;
const FIREBASE_SDK_VERSION = '10.12.5';
const STARTING_F1_BUCKS = 50;
const PREDICTION_LOCK_HOLD_MS = 6 * 60 * 60 * 1000;
const CREATOR_UID = '';
const KIMI_WIN_SETTLEMENT = {
  raceKey: `${SEASON}-round-10`,
  categoryId: 'race_winner',
  driverId: 'antonelli',
  winnerName: 'Kimi Antonelli',
  raceName: 'Belgian Grand Prix',
  oddsLabel: '13/8',
  oddsNumerator: 13,
  oddsDenominator: 8,
  source: 'JustBookies Belgian Grand Prix odds'
};
const LANDO_POLE_SETTLEMENT = {
  raceKey: `${SEASON}-round-11`,
  categoryId: 'pole_position',
  driverId: 'norris',
  winnerName: 'Lando Norris',
  raceName: 'Hungarian Grand Prix',
  oddsLabel: '8.00',
  oddsNumerator: 7,
  oddsDenominator: 1,
  source: 'BetMGM Hungarian Grand Prix qualifying winner odds'
};
const MANUAL_KIMI_STAKE_OVERRIDES = [
  {
    username: 'kimiantonelli12',
    points: 20,
    creditMode: 'profit_only',
    note: 'Manual correction for the Kimi race-winner stake that was not saved live.'
  }
];

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

const POINT_PREDICTION_CATEGORIES = [
  { id: 'pole_position', title: 'Pole position' },
  { id: 'p3', title: 'P3' },
  { id: 'p2', title: 'P2' },
  { id: 'race_winner', title: 'Race winner' }
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

const TEAM_CARS = {
  ferrari: 'assets/team-cars/ferrari.png',
  mclaren: 'assets/team-cars/mclaren.png',
  mercedes: 'assets/team-cars/mercedes.png',
  red_bull: 'assets/team-cars/red_bull.png',
  redbull: 'assets/team-cars/red_bull.png',
  aston_martin: 'assets/team-cars/aston_martin.png',
  alpine: 'assets/team-cars/alpine.png',
  williams: 'assets/team-cars/williams.png',
  rb: 'assets/team-cars/rb.png',
  racing_bulls: 'assets/team-cars/rb.png',
  haas: 'assets/team-cars/haas.png',
  audi: 'assets/team-cars/audi.png',
  cadillac: 'assets/team-cars/cadillac.png'
};
const TEAM_CAR_ASSET_VERSION = '20260722-clean-full-cars';

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
  '4': { id: '1284', slug: 'miami' },
  '5': { id: '1285', slug: 'canada' },
  '6': { id: '1286', slug: 'monaco' },
  '7': { id: '1287', slug: 'barcelona-catalunya' },
  '8': { id: '1288', slug: 'austria' },
  '9': { id: '1289', slug: 'great-britain' },
  '10': { id: '1290', slug: 'belgium' },
  '11': { id: '1291', slug: 'hungary' }
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
  },
  'Hungary|2026': {
    source: 'BetMGM Hungarian Grand Prix winner odds via OddsChecker',
    url: 'https://www.oddschecker.com/motorsport/formula-1/hungarian-grand-prix/winner',
    note: 'BetMGM decimal odds converted to implied win probability.',
    rows: [
      { name: 'Kimi Antonelli', percent: 40.0, odds: '2.50' },
      { name: 'Charles Leclerc', percent: 20.0, odds: '5.00' },
      { name: 'Lewis Hamilton', percent: 20.0, odds: '5.00' },
      { name: 'George Russell', percent: 14.3, odds: '7.00' },
      { name: 'Max Verstappen', percent: 11.1, odds: '9.00' },
      { name: 'Lando Norris', percent: 11.1, odds: '9.00' },
      { name: 'Oscar Piastri', percent: 4.3, odds: '23.00' },
      { name: 'Isack Hadjar', percent: 1.5, odds: '67.00' },
      { name: 'Arvid Lindblad', percent: 0.1, odds: '751.00' },
      { name: 'Liam Lawson', percent: 0.1, odds: '751.00' },
      { name: 'Gabriel Bortoleto', percent: 0.1, odds: '1001.00' },
      { name: 'Nico Hulkenberg', percent: 0.1, odds: '1001.00' },
      { name: 'Franco Colapinto', percent: 0.1, odds: '1001.00' },
      { name: 'Pierre Gasly', percent: 0.1, odds: '1001.00' },
      { name: 'Fernando Alonso', percent: 0.1, odds: '1001.00' },
      { name: 'Carlos Sainz', percent: 0.1, odds: '1501.00' },
      { name: 'Oliver Bearman', percent: 0.1, odds: '1501.00' },
      { name: 'Lance Stroll', percent: 0.1, odds: '1501.00' },
      { name: 'Alexander Albon', percent: 0.1, odds: '2001.00' },
      { name: 'Esteban Ocon', percent: 0.1, odds: '2001.00' },
      { name: 'Sergio Perez', percent: 0.1, odds: '3001.00' },
      { name: 'Valtteri Bottas', percent: 0.1, odds: '3001.00' }
    ]
  }
};

const STARTING_GRID_OVERRIDES = {
  '1': {
    raceName: 'Australian Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1279/australia/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1279/australia/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:19.507', q2: '1:18.934', q3: '1:18.518', laps: '22' }),
      makeGridResult('2', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:20.120', q2: '1:19.435', q3: '1:18.811', laps: '18' }),
      makeGridResult('3', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:20.023', q2: '1:19.653', q3: '1:19.303', laps: '19' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:20.226', q2: '1:19.357', q3: '1:19.327', laps: '24' }),
      makeGridResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:19.664', q2: '1:19.525', q3: '1:19.380', laps: '26' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:20.010', q2: '1:19.882', q3: '1:19.475', laps: '26' }),
      makeGridResult('7', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:19.811', q2: '1:19.921', q3: '1:19.478', laps: '25' }),
      makeGridResult('8', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:20.491', q2: '1:20.144', q3: '1:19.994', laps: '24' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:20.409', q2: '1:19.971', q3: '1:21.247', laps: '25' }),
      makeGridResult('10', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:20.495', q2: '1:20.221', q3: '', laps: '14' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:21.024', q2: '1:20.303', q3: '', laps: '18' }),
      makeGridResult('12', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:21.247', q2: '1:20.311', q3: '', laps: '18' }),
      makeGridResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:20.759', q2: '1:20.491', q3: '', laps: '18' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:21.138', q2: '1:20.501', q3: '', laps: '18' }),
      makeGridResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:21.051', q2: '1:20.941', q3: '', laps: '19' }),
      makeGridResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:21.200', q2: '1:21.270', q3: '', laps: '18' }),
      makeGridResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:21.969', q2: '', q3: '', laps: '10' }),
      makeGridResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:22.605', q2: '', q3: '', laps: '7' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:23.244', q2: '', q3: '', laps: '8' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:18.518' }),
      makeGridResult('2', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:18.811' }),
      makeGridResult('3', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:19.303' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:19.327' }),
      makeGridResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:19.380' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:19.475' }),
      makeGridResult('7', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:19.478' }),
      makeGridResult('8', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:19.994' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:21.247' }),
      makeGridResult('10', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:20.303' }),
      makeGridResult('12', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:20.311' }),
      makeGridResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:20.491' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:20.501' }),
      makeGridResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:20.941' }),
      makeGridResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:21.270' }),
      makeGridResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:21.969' }),
      makeGridResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:22.605' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:23.244' }),
      makeGridResult('20', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '' }),
      makeGridResult('21', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '' })
    ]
  },
  '2': {
    raceName: 'Chinese Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1280/china/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1280/china/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:33.305', q2: '1:32.443', q3: '1:32.064', laps: '15' }),
      makeGridResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:33.262', q2: '1:32.523', q3: '1:32.286', laps: '13' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:33.522', q2: '1:32.567', q3: '1:32.415', laps: '19' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:33.175', q2: '1:32.486', q3: '1:32.428', laps: '20' }),
      makeGridResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:33.590', q2: '1:33.130', q3: '1:32.550', laps: '20' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:33.535', q2: '1:32.910', q3: '1:32.608', laps: '20' }),
      makeGridResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:33.788', q2: '1:33.003', q3: '1:32.873', laps: '21' }),
      makeGridResult('8', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:33.417', q2: '1:33.098', q3: '1:33.002', laps: '20' }),
      makeGridResult('9', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:33.632', q2: '1:33.352', q3: '1:33.121', laps: '20' }),
      makeGridResult('10', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:33.687', q2: '1:33.197', q3: '1:33.292', laps: '19' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:34.116', q2: '1:33.354', q3: '', laps: '12' }),
      makeGridResult('12', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:33.634', q2: '1:33.357', q3: '', laps: '15' }),
      makeGridResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:33.974', q2: '1:33.538', q3: '', laps: '14' }),
      makeGridResult('14', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:34.139', q2: '1:33.765', q3: '', laps: '15' }),
      makeGridResult('15', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:33.906', q2: '1:33.784', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:33.549', q2: '1:33.965', q3: '', laps: '14' }),
      makeGridResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:34.317', q2: '', q3: '', laps: '10' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:34.772', q2: '', q3: '', laps: '10' }),
      makeGridResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:35.203', q2: '', q3: '', laps: '9' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:35.436', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:35.995', q2: '', q3: '', laps: '9' }),
      makeGridResult('22', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:36.906', q2: '', q3: '', laps: '6' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:32.064' }),
      makeGridResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:32.286' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:32.415' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:32.428' }),
      makeGridResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:32.550' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:32.608' }),
      makeGridResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:32.873' }),
      makeGridResult('8', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:33.002' }),
      makeGridResult('9', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:33.121' }),
      makeGridResult('10', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:33.292' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:33.354' }),
      makeGridResult('12', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:33.357' }),
      makeGridResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:33.538' }),
      makeGridResult('14', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:33.765' }),
      makeGridResult('15', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:33.784' }),
      makeGridResult('16', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:33.965' }),
      makeGridResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:34.317' }),
      makeGridResult('18', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:35.203' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:35.436' }),
      makeGridResult('20', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:35.995' }),
      makeGridResult('21', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:36.906' }),
      makeGridResult('22', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:34.772' })
    ]
  },
  '3': {
    raceName: 'Japanese Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1281/japan/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1281/japan/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:30.035', q2: '1:29.048', q3: '1:28.778', laps: '15' }),
      makeGridResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:29.967', q2: '1:29.686', q3: '1:29.076', laps: '21' }),
      makeGridResult('3', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:30.200', q2: '1:29.451', q3: '1:29.132', laps: '20' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:29.915', q2: '1:29.303', q3: '1:29.405', laps: '18' }),
      makeGridResult('5', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:30.401', q2: '1:29.795', q3: '1:29.409', laps: '20' }),
      makeGridResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:30.309', q2: '1:29.589', q3: '1:29.567', laps: '20' }),
      makeGridResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:30.584', q2: '1:29.874', q3: '1:29.691', laps: '18' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:30.662', q2: '1:30.104', q3: '1:29.978', laps: '17' }),
      makeGridResult('9', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:30.359', q2: '1:29.990', q3: '1:30.274', laps: '20' }),
      makeGridResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:30.781', q2: '1:30.109', q3: '1:30.319', laps: '21' }),
      makeGridResult('11', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:30.519', q2: '1:30.262', q3: '', laps: '12' }),
      makeGridResult('12', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:30.915', q2: '1:30.309', q3: '', laps: '15' }),
      makeGridResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:30.358', q2: '1:30.387', q3: '', laps: '14' }),
      makeGridResult('14', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:30.657', q2: '1:30.495', q3: '', laps: '15' }),
      makeGridResult('15', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:30.931', q2: '1:30.627', q3: '', laps: '12' }),
      makeGridResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:30.927', q2: '1:31.033', q3: '', laps: '15' }),
      makeGridResult('17', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:31.088', q2: '', q3: '', laps: '9' }),
      makeGridResult('18', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:31.090', q2: '', q3: '', laps: '9' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:32.206', q2: '', q3: '', laps: '6' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:32.330', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:32.646', q2: '', q3: '', laps: '9' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:32.920', q2: '', q3: '', laps: '9' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:28.778' }),
      makeGridResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:29.076' }),
      makeGridResult('3', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:29.132' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:29.405' }),
      makeGridResult('5', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:29.409' }),
      makeGridResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:29.567' }),
      makeGridResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:29.691' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:29.978' }),
      makeGridResult('9', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:30.274' }),
      makeGridResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:30.319' }),
      makeGridResult('11', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:30.262' }),
      makeGridResult('12', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:30.309' }),
      makeGridResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:30.387' }),
      makeGridResult('14', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:30.495' }),
      makeGridResult('15', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:30.627' }),
      makeGridResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:31.033' }),
      makeGridResult('17', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:31.088' }),
      makeGridResult('18', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:31.090' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:32.206' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:32.330' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:32.646' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:32.920' })
    ]
  },
  '4': {
    raceName: 'US Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1284/miami/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1284/miami/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:28.653', q2: '1:28.289', q3: '1:27.798', laps: '17' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:29.099', q2: '1:28.116', q3: '1:27.964', laps: '15' }),
      makeGridResult('3', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:28.938', q2: '1:28.315', q3: '1:28.143', laps: '21' }),
      makeGridResult('4', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:29.183', q2: '1:28.920', q3: '1:28.183', laps: '20' }),
      makeGridResult('5', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:29.492', q2: '1:28.477', q3: '1:28.197', laps: '18' }),
      makeGridResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:29.483', q2: '1:28.477', q3: '1:28.319', laps: '21' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:29.920', q2: '1:28.332', q3: '1:28.500', laps: '20' }),
      makeGridResult('8', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:29.584', q2: '1:28.975', q3: '1:28.762', laps: '19' }),
      makeGridResult('9', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:29.914', q2: '1:29.070', q3: '1:28.810', laps: '20' }),
      makeGridResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:29.645', q2: '1:29.439', q3: '', laps: '14' }),
      makeGridResult('11', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:29.595', q2: '1:29.499', q3: '', laps: '14' }),
      makeGridResult('12', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:29.340', q2: '1:29.567', q3: '', laps: '12' }),
      makeGridResult('13', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:29.540', q2: '1:29.568', q3: '', laps: '15' }),
      makeGridResult('14', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:29.838', q2: '1:29.772', q3: '', laps: '15' }),
      makeGridResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:29.720', q2: '1:29.946', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:30.133', q2: '', q3: '', laps: '9' }),
      makeGridResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:31.098', q2: '', q3: '', laps: '8' }),
      makeGridResult('18', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:31.164', q2: '', q3: '', laps: '9' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:31.629', q2: '', q3: '', laps: '9' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:31.967', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:33.737', q2: '', q3: '', laps: '3' }),
      makeGridResult('DQ', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '', q2: '1:28.941', q3: '1:28.789', laps: '0' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:27.798' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:27.964' }),
      makeGridResult('3', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:28.143' }),
      makeGridResult('4', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:28.183' }),
      makeGridResult('5', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:28.197' }),
      makeGridResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:28.319' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:28.500' }),
      makeGridResult('8', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:28.762' }),
      makeGridResult('9', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:28.810' }),
      makeGridResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:29.439' }),
      makeGridResult('11', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:29.499' }),
      makeGridResult('12', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:29.567' }),
      makeGridResult('13', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:29.568' }),
      makeGridResult('14', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:29.772' }),
      makeGridResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:29.946' }),
      makeGridResult('16', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:30.133' }),
      makeGridResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:31.098' }),
      makeGridResult('18', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:31.164' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:31.629' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:31.967' }),
      makeGridResult('21', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:33.737' }),
      makeGridResult('22', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '' })
    ]
  },
  '5': {
    raceName: 'Canadian Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1285/canada/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1285/canada/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:13.953', q2: '1:13.079', q3: '1:12.578', laps: '24' }),
      makeGridResult('2', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:13.380', q2: '1:13.076', q3: '1:12.646', laps: '24' }),
      makeGridResult('3', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:13.503', q2: '1:13.049', q3: '1:12.729', laps: '28' }),
      makeGridResult('4', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:13.559', q2: '1:13.285', q3: '1:12.781', laps: '29' }),
      makeGridResult('5', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:13.767', q2: '1:13.041', q3: '1:12.868', laps: '27' }),
      makeGridResult('6', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:14.067', q2: '1:13.479', q3: '1:12.907', laps: '23' }),
      makeGridResult('7', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:13.654', q2: '1:12.975', q3: '1:12.935', laps: '22' }),
      makeGridResult('8', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:13.825', q2: '1:13.496', q3: '1:12.976', laps: '29' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:13.895', q2: '1:13.548', q3: '1:13.280', laps: '28' }),
      makeGridResult('10', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:14.466', q2: '1:13.857', q3: '1:13.697', laps: '27' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:14.562', q2: '1:13.886', q3: '', laps: '21' }),
      makeGridResult('12', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:14.346', q2: '1:13.897', q3: '', laps: '22' }),
      makeGridResult('13', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:14.775', q2: '1:14.071', q3: '', laps: '22' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:14.698', q2: '1:14.187', q3: '', laps: '20' }),
      makeGridResult('15', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:14.276', q2: '1:14.273', q3: '', laps: '21' }),
      makeGridResult('16', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:14.449', q2: '1:14.416', q3: '', laps: '22' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:14.845', q2: '', q3: '', laps: '12' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:14.851', q2: '', q3: '', laps: '13' }),
      makeGridResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:15.196', q2: '', q3: '', laps: '11' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:15.429', q2: '', q3: '', laps: '11' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:16.195', q2: '', q3: '', laps: '10' }),
      makeGridResult('22', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:16.272', q2: '', q3: '', laps: '10' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:12.578' }),
      makeGridResult('2', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:12.646' }),
      makeGridResult('3', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:12.729' }),
      makeGridResult('4', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:12.781' }),
      makeGridResult('5', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:12.868' }),
      makeGridResult('6', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:12.907' }),
      makeGridResult('7', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:12.935' }),
      makeGridResult('8', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:12.976' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:13.280' }),
      makeGridResult('10', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:13.697' }),
      makeGridResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:13.886' }),
      makeGridResult('12', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:13.897' }),
      makeGridResult('13', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:14.071' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:14.187' }),
      makeGridResult('15', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:14.273' }),
      makeGridResult('16', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:14.416' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:14.845' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:14.851' }),
      makeGridResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:15.196' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:15.429' }),
      makeGridResult('21', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:16.272' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:16.195' })
    ]
  },
  '6': {
    raceName: 'Monaco Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1286/monaco/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1286/monaco/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:13.599', q2: '1:12.704', q3: '1:12.051', laps: '28' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:13.490', q2: '1:12.499', q3: '1:12.094', laps: '26' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:13.777', q2: '1:12.934', q3: '1:12.279', laps: '28' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:13.293', q2: '1:12.774', q3: '1:12.351', laps: '29' }),
      makeGridResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:14.408', q2: '1:12.722', q3: '1:12.434', laps: '25' }),
      makeGridResult('6', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:14.214', q2: '1:13.238', q3: '1:12.445', laps: '28' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:14.159', q2: '1:12.983', q3: '1:12.624', laps: '29' }),
      makeGridResult('8', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:13.630', q2: '1:12.919', q3: '1:12.765', laps: '28' }),
      makeGridResult('9', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:14.469', q2: '1:13.762', q3: '1:13.226', laps: '32' }),
      makeGridResult('10', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:14.498', q2: '1:13.471', q3: '1:13.412', laps: '29' }),
      makeGridResult('11', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:14.321', q2: '1:13.787', q3: '', laps: '24' }),
      makeGridResult('12', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:14.348', q2: '1:13.815', q3: '', laps: '23' }),
      makeGridResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:13.923', q2: '1:13.902', q3: '', laps: '21' }),
      makeGridResult('14', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:14.573', q2: '1:13.995', q3: '', laps: '24' }),
      makeGridResult('15', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:14.685', q2: '1:14.248', q3: '', laps: '23' }),
      makeGridResult('16', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:14.683', q2: '', q3: '', laps: '10' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:14.722', q2: '', q3: '', laps: '14' }),
      makeGridResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:14.747', q2: '', q3: '', laps: '12' }),
      makeGridResult('19', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:14.814', q2: '', q3: '', laps: '14' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:15.283', q2: '', q3: '', laps: '13' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:15.349', q2: '', q3: '', laps: '13' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:16.061', q2: '', q3: '', laps: '11' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:12.051' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:12.094' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:12.279' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:12.351' }),
      makeGridResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:12.434' }),
      makeGridResult('6', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:12.445' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:12.624' }),
      makeGridResult('8', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:12.765' }),
      makeGridResult('9', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:13.226' }),
      makeGridResult('10', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:13.412' }),
      makeGridResult('11', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:13.787' }),
      makeGridResult('12', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:13.815' }),
      makeGridResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:13.902' }),
      makeGridResult('14', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:13.995' }),
      makeGridResult('15', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:14.248' }),
      makeGridResult('16', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:14.722' }),
      makeGridResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:14.747' }),
      makeGridResult('19', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:14.814' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:15.283' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:15.349' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:16.061' })
    ]
  },
  '7': {
    raceName: 'Spanish Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1287/barcelona-catalunya/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1287/barcelona-catalunya/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:15.717', q2: '1:15.228', q3: '1:14.679', laps: '13' }),
      makeGridResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:15.625', q2: '1:15.418', q3: '1:14.743', laps: '14' }),
      makeGridResult('3', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:15.977', q2: '1:15.295', q3: '1:14.998', laps: '14' }),
      makeGridResult('4', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:16.287', q2: '1:15.361', q3: '1:15.001', laps: '14' }),
      makeGridResult('5', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:16.352', q2: '1:15.484', q3: '1:15.021', laps: '12' }),
      makeGridResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:16.427', q2: '1:15.754', q3: '1:15.077', laps: '14' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:16.138', q2: '1:15.518', q3: '1:15.090', laps: '15' }),
      makeGridResult('8', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:16.673', q2: '1:15.585', q3: '1:16.542', laps: '14' }),
      makeGridResult('9', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:16.066', q2: '1:15.768', q3: '1:16.657', laps: '17' }),
      makeGridResult('10', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:15.964', q2: '1:15.281', q3: 'DNF', laps: '8' }),
      makeGridResult('11', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:16.425', q2: '1:15.840', q3: '', laps: '8' }),
      makeGridResult('12', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:16.616', q2: '1:16.001', q3: '', laps: '9' }),
      makeGridResult('13', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:16.590', q2: '1:16.191', q3: '', laps: '12' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:16.599', q2: '1:16.261', q3: '', laps: '12' }),
      makeGridResult('15', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:16.571', q2: '1:16.389', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:16.881', q2: '1:17.827', q3: '', laps: '15' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:17.073', q2: '', q3: '', laps: '9' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:17.424', q2: '', q3: '', laps: '9' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:17.545', q2: '', q3: '', laps: '6' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:17.757', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:18.758', q2: '', q3: '', laps: '8' }),
      makeGridResult('22', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:18.815', q2: '', q3: '', laps: '8' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:14.679' }),
      makeGridResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:14.743' }),
      makeGridResult('3', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:14.998' }),
      makeGridResult('4', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:15.001' }),
      makeGridResult('5', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:15.021' }),
      makeGridResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:15.077' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:15.090' }),
      makeGridResult('8', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:16.542' }),
      makeGridResult('9', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:16.657' }),
      makeGridResult('10', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '' }),
      makeGridResult('11', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:15.840' }),
      makeGridResult('12', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:16.001' }),
      makeGridResult('13', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:16.191' }),
      makeGridResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:16.261' }),
      makeGridResult('15', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:16.389' }),
      makeGridResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:17.827' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:17.073' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:17.424' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:17.545' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:17.757' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:18.758' }),
      makeGridResult('22', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:18.815' })
    ]
  },
  '8': {
    raceName: 'Austrian Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1288/austria/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1288/austria/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:07.398', q2: '1:06.979', q3: '1:06.113', laps: '20' }),
      makeGridResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:07.543', q2: '1:07.030', q3: '1:06.349', laps: '15' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:07.290', q2: '1:06.994', q3: '1:06.408', laps: '14' }),
      makeGridResult('4', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:07.083', q2: '1:06.763', q3: '1:06.414', laps: '17' }),
      makeGridResult('5', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:07.407', q2: '1:07.183', q3: '1:06.475', laps: '11' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:07.259', q2: '1:06.897', q3: '1:06.502', laps: '15' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:07.487', q2: '1:06.890', q3: '1:06.511', laps: '14' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:07.408', q2: '1:07.086', q3: '1:06.632', laps: '18' }),
      makeGridResult('9', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:07.385', q2: '1:07.136', q3: '1:06.955', laps: '18' }),
      makeGridResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:07.549', q2: '1:07.155', q3: '1:07.007', laps: '18' }),
      makeGridResult('11', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:08.038', q2: '1:07.223', q3: '', laps: '12' }),
      makeGridResult('12', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:08.035', q2: '1:07.293', q3: '', laps: '12' }),
      makeGridResult('13', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:08.061', q2: '1:07.523', q3: '', laps: '12' }),
      makeGridResult('14', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:08.066', q2: '1:07.611', q3: '', laps: '15' }),
      makeGridResult('15', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:08.231', q2: '1:07.817', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:07.894', q2: '1:08.171', q3: '', laps: '11' }),
      makeGridResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:08.252', q2: '', q3: '', laps: '9' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:08.509', q2: '', q3: '', laps: '9' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:08.945', q2: '', q3: '', laps: '9' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:09.030', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:09.942', q2: '', q3: '', laps: '9' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:10.363', q2: '', q3: '', laps: '8' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:06.113' }),
      makeGridResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:06.349' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:06.408' }),
      makeGridResult('4', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:06.414' }),
      makeGridResult('5', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:06.475' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:06.502' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:06.511' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:06.632' }),
      makeGridResult('9', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:06.955' }),
      makeGridResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:07.007' }),
      makeGridResult('11', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:07.223' }),
      makeGridResult('12', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:07.293' }),
      makeGridResult('13', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:07.523' }),
      makeGridResult('14', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:07.611' }),
      makeGridResult('15', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:07.817' }),
      makeGridResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:08.171' }),
      makeGridResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:08.252' }),
      makeGridResult('18', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:08.509' }),
      makeGridResult('19', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:08.945' }),
      makeGridResult('20', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:09.030' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:09.942' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:10.363' })
    ]
  },
  '9': {
    raceName: 'British Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1289/great-britain/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1289/great-britain/starting-grid',
    note: 'Official F1 qualifying results.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:29.719', q2: '1:28.493', q3: '1:28.111', laps: '19' }),
      makeGridResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:29.534', q2: '1:28.626', q3: '1:28.286', laps: '18' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:29.644', q2: '1:28.864', q3: '1:28.458', laps: '17' }),
      makeGridResult('4', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:29.985', q2: '1:28.920', q3: '1:28.481', laps: '17' }),
      makeGridResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:29.276', q2: '1:29.069', q3: '1:28.746', laps: '18' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:30.186', q2: '1:29.383', q3: '1:28.877', laps: '17' }),
      makeGridResult('7', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:29.549', q2: '1:29.113', q3: '1:28.893', laps: '18' }),
      makeGridResult('8', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:29.971', q2: '1:29.218', q3: '1:29.032', laps: '18' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:29.661', q2: '1:29.324', q3: '1:29.305', laps: '17' }),
      makeGridResult('10', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:29.300', q2: '1:29.429', q3: '1:29.716', laps: '20' }),
      makeGridResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:30.269', q2: '1:29.461', q3: '', laps: '10' }),
      makeGridResult('12', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:30.345', q2: '1:30.063', q3: '', laps: '12' }),
      makeGridResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:29.539', q2: '1:30.076', q3: '', laps: '15' }),
      makeGridResult('14', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:30.570', q2: '1:30.501', q3: '', laps: '15' }),
      makeGridResult('15', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:30.562', q2: '1:30.623', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:30.638', q2: '1:31.341', q3: '', laps: '14' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:30.680', q2: '', q3: '', laps: '9' }),
      makeGridResult('18', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:31.227', q2: '', q3: '', laps: '8' }),
      makeGridResult('19', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:31.321', q2: '', q3: '', laps: '5' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:31.451', q2: '', q3: '', laps: '9' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:32.863', q2: '', q3: '', laps: '9' }),
      makeGridResult('22', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:33.025', q2: '', q3: '', laps: '9' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:28.111' }),
      makeGridResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:28.286' }),
      makeGridResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:28.458' }),
      makeGridResult('4', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:28.481' }),
      makeGridResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:28.746' }),
      makeGridResult('6', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:28.877' }),
      makeGridResult('7', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:28.893' }),
      makeGridResult('8', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:29.032' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:29.305' }),
      makeGridResult('10', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:29.716' }),
      makeGridResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:29.461' }),
      makeGridResult('12', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:30.076' }),
      makeGridResult('13', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:30.501' }),
      makeGridResult('14', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:30.623' }),
      makeGridResult('15', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:30.063' }),
      makeGridResult('16', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:31.341' }),
      makeGridResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:30.680' }),
      makeGridResult('18', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:31.227' }),
      makeGridResult('19', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:31.321' }),
      makeGridResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:31.451' }),
      makeGridResult('21', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:33.025' }),
      makeGridResult('22', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:32.863' })
    ]
  },
  '10': {
    raceName: 'Belgian Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1290/belgium/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1290/belgium/starting-grid',
    note: 'Official F1 qualifying results. Alonso, Hadjar, Stroll, and Sainz started from the back after additional power unit elements; Norris started from the pit lane after Parc Ferme changes.',
    rows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:44.829', q2: '1:44.218', q3: '1:43.305', laps: '17' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:44.918', q2: '1:43.635', q3: '1:43.768', laps: '14' }),
      makeGridResult('3', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:43.754', q2: '1:44.283', q3: '1:44.360', laps: '18' }),
      makeGridResult('4', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:45.306', q2: '1:44.632', q3: '1:44.498', laps: '17' }),
      makeGridResult('5', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:45.564', q2: '1:44.595', q3: '1:44.501', laps: '17' }),
      makeGridResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:44.581', q2: '1:44.863', q3: '1:44.531', laps: '18' }),
      makeGridResult('7', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:44.945', q2: '1:44.964', q3: '1:44.543', laps: '20' }),
      makeGridResult('8', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:45.744', q2: '1:44.793', q3: '1:45.126', laps: '21' }),
      makeGridResult('9', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:45.528', q2: '1:45.102', q3: '1:45.273', laps: '22' }),
      makeGridResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:44.772', q2: '1:45.224', q3: '1:45.871', laps: '18' }),
      makeGridResult('11', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:46.073', q2: '1:45.577', q3: '', laps: '18' }),
      makeGridResult('12', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:45.879', q2: '1:45.685', q3: '', laps: '18' }),
      makeGridResult('13', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:45.886', q2: '1:46.092', q3: '', laps: '16' }),
      makeGridResult('14', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:46.106', q2: '1:46.274', q3: '', laps: '18' }),
      makeGridResult('15', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:46.123', q2: '1:46.447', q3: '', laps: '15' }),
      makeGridResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:46.179', q2: '', q3: '', laps: '11' }),
      makeGridResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:46.270', q2: '', q3: '', laps: '10' }),
      makeGridResult('18', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:46.279', q2: '', q3: '', laps: '10' }),
      makeGridResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:46.297', q2: '', q3: '', laps: '9' }),
      makeGridResult('20', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:46.402', q2: '', q3: '', laps: '7' }),
      makeGridResult('21', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:46.576', q2: '', q3: '', laps: '9' }),
      makeGridResult('22', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:47.340', q2: '', q3: '', laps: '9' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:43.305' }),
      makeGridResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:43.768' }),
      makeGridResult('3', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:44.498' }),
      makeGridResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:44.501' }),
      makeGridResult('5', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:44.531' }),
      makeGridResult('6', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:44.543' }),
      makeGridResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:45.126' }),
      makeGridResult('8', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:45.273' }),
      makeGridResult('9', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:45.871' }),
      makeGridResult('10', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:45.577' }),
      makeGridResult('11', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:46.092' }),
      makeGridResult('12', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:46.274' }),
      makeGridResult('13', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:44.360' }),
      makeGridResult('14', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:46.279' }),
      makeGridResult('15', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:46.297' }),
      makeGridResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:46.402' }),
      makeGridResult('17', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:46.576' }),
      makeGridResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:47.340' }),
      makeGridResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:46.270' }),
      makeGridResult('20', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:45.685' }),
      makeGridResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:46.447' }),
      makeGridResult('22', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:46.179' })
    ]
  },
  '11': {
    raceName: 'Hungarian Grand Prix',
    sourceUrl: 'https://www.formula1.com/en/results/2026/races/1291/hungary/qualifying',
    startingGridSourceUrl: 'https://www.formula1.com/en/results/2026/races/1291/hungary/starting-grid',
    note: 'Official F1 qualifying results. Starting grid reflects the published race-start order.',
    rows: [
      makeGridResult('1', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q1: '1:18.277', q2: '1:17.456', q3: '1:17.207', laps: '16' }),
      makeGridResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q1: '1:18.730', q2: '1:17.803', q3: '1:17.219', laps: '15' }),
      makeGridResult('3', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q1: '1:18.984', q2: '1:17.626', q3: '1:17.445', laps: '20' }),
      makeGridResult('4', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q1: '1:18.726', q2: '1:18.393', q3: '1:17.479', laps: '20' }),
      makeGridResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q1: '1:18.891', q2: '1:17.928', q3: '1:17.684', laps: '15' }),
      makeGridResult('6', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q1: '1:18.656', q2: '1:18.249', q3: '1:17.725', laps: '18' }),
      makeGridResult('7', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q1: '1:18.856', q2: '1:18.445', q3: '1:17.760', laps: '20' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q1: '1:18.754', q2: '1:17.872', q3: '1:17.856', laps: '14' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q1: '1:19.233', q2: '1:18.360', q3: '1:18.281', laps: '18' }),
      makeGridResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q1: '1:18.796', q2: '1:18.639', q3: '1:18.686', laps: '18' }),
      makeGridResult('11', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q1: '1:19.161', q2: '1:18.765', q3: '', laps: '12' }),
      makeGridResult('12', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q1: '1:19.741', q2: '1:18.844', q3: '', laps: '12' }),
      makeGridResult('13', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q1: '1:19.771', q2: '1:19.027', q3: '', laps: '12' }),
      makeGridResult('14', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q1: '1:19.069', q2: '1:19.105', q3: '', laps: '11' }),
      makeGridResult('15', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q1: '1:20.010', q2: '1:19.734', q3: '', laps: '12' }),
      makeGridResult('16', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q1: '1:20.126', q2: '1:19.808', q3: '', laps: '15' }),
      makeGridResult('17', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q1: '1:20.233', q2: '', q3: '', laps: '6' }),
      makeGridResult('18', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q1: '1:20.621', q2: '', q3: '', laps: '9' }),
      makeGridResult('19', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q1: '1:20.658', q2: '', q3: '', laps: '9' }),
      makeGridResult('20', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q1: '1:20.659', q2: '', q3: '', laps: '8' }),
      makeGridResult('21', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q1: '1:20.886', q2: '', q3: '', laps: '10' }),
      makeGridResult('22', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q1: '1:21.322', q2: '', q3: '', laps: '9' })
    ],
    startingGridRows: [
      makeGridResult('1', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', q3: '1:17.207' }),
      makeGridResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', q3: '1:17.445' }),
      makeGridResult('3', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', q3: '1:17.684' }),
      makeGridResult('4', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', q3: '1:17.725' }),
      makeGridResult('5', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', q3: '1:17.219' }),
      makeGridResult('6', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', q3: '1:17.760' }),
      makeGridResult('7', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', q3: '1:17.479' }),
      makeGridResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', q3: '1:17.856' }),
      makeGridResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', q3: '1:18.281' }),
      makeGridResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', q3: '1:18.686' }),
      makeGridResult('11', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', q3: '1:18.765' }),
      makeGridResult('12', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', q3: '1:18.844' }),
      makeGridResult('13', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', q3: '1:19.027' }),
      makeGridResult('14', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', q3: '1:19.105' }),
      makeGridResult('15', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', q3: '1:19.734' }),
      makeGridResult('16', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', q3: '1:19.808' }),
      makeGridResult('17', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', q3: '1:20.233' }),
      makeGridResult('18', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', q3: '1:20.621' }),
      makeGridResult('19', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', q3: '1:20.658' }),
      makeGridResult('20', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', q3: '1:20.659' }),
      makeGridResult('21', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', q3: '1:20.886' }),
      makeGridResult('22', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', q3: '1:21.322' })
    ],
    practiceSessions: [
      {
        title: 'Practice 1',
        sourceUrl: 'https://www.formula1.com/en/results/2026/races/1291/hungary/practice/1',
        rows: [
          makePracticeResult('1', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', time: '1:19.075', laps: '19' }),
          makePracticeResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', gap: '+0.484s', laps: '25' }),
          makePracticeResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', gap: '+0.543s', laps: '23' }),
          makePracticeResult('4', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', gap: '+0.922s', laps: '25' }),
          makePracticeResult('5', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', gap: '+0.991s', laps: '21' }),
          makePracticeResult('6', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', gap: '+1.285s', laps: '30' }),
          makePracticeResult('7', { driverId: 'vesti', givenName: 'Frederik', familyName: 'Vesti', nationality: 'Danish' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '72', gap: '+1.392s', laps: '24' }),
          makePracticeResult('8', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', gap: '+1.548s', laps: '29' }),
          makePracticeResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', gap: '+1.685s', laps: '28' }),
          makePracticeResult('10', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', gap: '+1.791s', laps: '28' }),
          makePracticeResult('11', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', gap: '+1.949s', laps: '26' }),
          makePracticeResult('12', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', gap: '+1.976s', laps: '24' }),
          makePracticeResult('13', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', gap: '+2.475s', laps: '20' }),
          makePracticeResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', gap: '+2.629s', laps: '29' }),
          makePracticeResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', gap: '+2.744s', laps: '28' }),
          makePracticeResult('16', { driverId: 'fornaroli', givenName: 'Leonardo', familyName: 'Fornaroli', nationality: 'Italian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '67', gap: '+2.815s', laps: '29' }),
          makePracticeResult('17', { driverId: 'hirakawa', givenName: 'Ryo', familyName: 'Hirakawa', nationality: 'Japanese' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '50', gap: '+2.926s', laps: '25' }),
          makePracticeResult('18', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', gap: '+3.014s', laps: '22' }),
          makePracticeResult('19', { driverId: 'paul_aron', givenName: 'Paul', familyName: 'Aron', nationality: 'Estonian' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '61', gap: '+3.093s', laps: '28' }),
          makePracticeResult('20', { driverId: 'herta', givenName: 'Colton', familyName: 'Herta', nationality: 'American' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '25', gap: '+4.043s', laps: '28' }),
          makePracticeResult('21', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', gap: '+4.396s', laps: '11' }),
          makePracticeResult('22', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', gap: '+4.659s', laps: '23' })
        ]
      },
      {
        title: 'Practice 2',
        sourceUrl: 'https://www.formula1.com/en/results/2026/races/1291/hungary/practice/2',
        rows: [
          makePracticeResult('1', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', time: '1:18.729', laps: '26' }),
          makePracticeResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', gap: '+0.148s', laps: '30' }),
          makePracticeResult('3', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', gap: '+0.499s', laps: '30' }),
          makePracticeResult('4', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', gap: '+0.692s', laps: '27' }),
          makePracticeResult('5', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', gap: '+0.933s', laps: '30' }),
          makePracticeResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', gap: '+1.071s', laps: '20' }),
          makePracticeResult('7', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', gap: '+1.312s', laps: '29' }),
          makePracticeResult('8', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', gap: '+1.372s', laps: '28' }),
          makePracticeResult('9', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', gap: '+1.396s', laps: '30' }),
          makePracticeResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', gap: '+1.524s', laps: '29' }),
          makePracticeResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', gap: '+1.745s', laps: '27' }),
          makePracticeResult('12', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', gap: '+1.828s', laps: '26' }),
          makePracticeResult('13', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', gap: '+1.964s', laps: '30' }),
          makePracticeResult('14', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', gap: '+2.087s', laps: '24' }),
          makePracticeResult('15', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', gap: '+2.221s', laps: '28' }),
          makePracticeResult('16', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', gap: '+2.244s', laps: '33' }),
          makePracticeResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', gap: '+2.697s', laps: '31' }),
          makePracticeResult('18', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', gap: '+2.713s', laps: '31' }),
          makePracticeResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', gap: '+2.990s', laps: '24' }),
          makePracticeResult('20', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', gap: '+3.063s', laps: '28' }),
          makePracticeResult('21', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', gap: '+3.802s', laps: '11' })
        ]
      },
      {
        title: 'Practice 3',
        sourceUrl: 'https://www.formula1.com/en/results/2026/races/1291/hungary/practice/3',
        rows: [
          makePracticeResult('1', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '1', time: '1:17.939', laps: '20' }),
          makePracticeResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '44', gap: '+0.117s', laps: '22' }),
          makePracticeResult('3', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '12', gap: '+0.129s', laps: '16' }),
          makePracticeResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, { number: '16', gap: '+0.352s', laps: '24' }),
          makePracticeResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, { number: '81', gap: '+0.499s', laps: '22' }),
          makePracticeResult('6', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, { number: '63', gap: '+0.602s', laps: '18' }),
          makePracticeResult('7', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '3', gap: '+0.717s', laps: '14' }),
          makePracticeResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, { number: '6', gap: '+1.004s', laps: '17' }),
          makePracticeResult('9', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '30', gap: '+1.149s', laps: '23' }),
          makePracticeResult('10', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, { number: '27', gap: '+1.221s', laps: '24' }),
          makePracticeResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, { number: '5', gap: '+1.399s', laps: '22' }),
          makePracticeResult('12', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '10', gap: '+1.784s', laps: '20' }),
          makePracticeResult('13', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, { number: '41', gap: '+1.956s', laps: '6' }),
          makePracticeResult('14', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, { number: '43', gap: '+2.116s', laps: '30' }),
          makePracticeResult('15', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '31', gap: '+2.356s', laps: '18' }),
          makePracticeResult('16', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, { number: '87', gap: '+2.373s', laps: '14' }),
          makePracticeResult('17', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '14', gap: '+2.454s', laps: '17' }),
          makePracticeResult('18', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, { number: '18', gap: '+2.994s', laps: '20' }),
          makePracticeResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '77', gap: '+3.360s', laps: '15' }),
          makePracticeResult('20', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, { number: '55', gap: '+3.467s', laps: '17' }),
          makePracticeResult('21', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, { number: '23', gap: '+3.574s', laps: '13' }),
          makePracticeResult('22', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, { number: '11', gap: '', laps: '1' })
        ]
      }
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
    driver: 'Lewis Hamilton',
    driverId: 'hamilton',
    teamColor: TEAM_COLORS.mercedes,
    quote: 'Bono my tyres are gone.',
    context: 'Classic Lewis radio tension over tyre life.',
    source: 'Fan clip',
    sourceUrl: 'https://www.google.com/search?q=Lewis+Hamilton+Bono+my+tyres+are+gone',
    wikiTitle: 'Lewis_Hamilton',
    imageUrl: 'assets/quote-drivers/lewis-hamilton.jpg',
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
  '1': {
    raceName: 'Australian Grand Prix',
    Results: [
      makeResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '58', status: '1:23:06.801' }),
      makeResult('2', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18, { grid: '2', laps: '58', status: '+2.974s' }),
      makeResult('3', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 15, { grid: '4', laps: '58', status: '+15.519s' }),
      makeResult('4', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 12, { grid: '7', laps: '58', status: '+16.144s' }),
      makeResult('5', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 10, { grid: '6', laps: '58', status: '+51.741s' }),
      makeResult('6', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 8, { grid: '20', laps: '58', status: '+54.617s' }),
      makeResult('7', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 6, { grid: '12', laps: '57', status: '+1 lap' }),
      makeResult('8', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 4, { grid: '9', laps: '57', status: '+1 lap' }),
      makeResult('9', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 2, { grid: '10', laps: '57', status: '+1 lap' }),
      makeResult('10', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '14', laps: '57', status: '+1 lap' }),
      makeResult('11', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '13', laps: '57', status: '+1 lap' }),
      makeResult('12', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '15', laps: '57', status: '+1 lap' }),
      makeResult('13', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '8', laps: '57', status: '+1 lap' }),
      makeResult('14', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '16', laps: '56', status: '+2 laps' }),
      makeResult('15', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '21', laps: '56', status: '+2 laps' }),
      makeResult('16', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '18', laps: '55', status: '+3 laps' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '43', status: '+15 laps' }),
      makeResult('NC', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '17', laps: '21', status: 'DNF' }),
      makeResult('NC', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '15', status: 'DNF' }),
      makeResult('NC', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '3', laps: '10', status: 'DNF' }),
      makeResult('NC', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '5', laps: '0', status: 'DNS' }),
      makeResult('NC', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '11', laps: '0', status: 'DNS' })
    ]
  },
  '2': {
    raceName: 'Chinese Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '56', status: '1:33:15.607' }),
      makeResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18, { grid: '2', laps: '56', status: '+5.515s' }),
      makeResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 15, { grid: '3', laps: '56', status: '+25.267s' }),
      makeResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 12, { grid: '4', laps: '56', status: '+28.894s' }),
      makeResult('5', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 10, { grid: '10', laps: '56', status: '+57.268s' }),
      makeResult('6', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 8, { grid: '7', laps: '56', status: '+59.647s' }),
      makeResult('7', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 6, { grid: '14', laps: '56', status: '+80.588s' }),
      makeResult('8', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 4, { grid: '9', laps: '56', status: '+87.247s' }),
      makeResult('9', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 2, { grid: '17', laps: '55', status: '+1 lap' }),
      makeResult('10', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '12', laps: '55', status: '+1 lap' }),
      makeResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '11', laps: '55', status: '+1 lap' }),
      makeResult('12', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '15', laps: '55', status: '+1 lap' }),
      makeResult('13', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '55', status: '+1 lap' }),
      makeResult('14', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '13', laps: '55', status: '+1 lap' }),
      makeResult('15', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '21', laps: '55', status: '+1 lap' }),
      makeResult('NC', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '8', laps: '45', status: 'DNF' }),
      makeResult('NC', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '18', laps: '32', status: 'DNF' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '20', laps: '9', status: 'DNF' }),
      makeResult('NC', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '5', laps: '0', status: 'DNS' }),
      makeResult('NC', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '6', laps: '0', status: 'DNS' }),
      makeResult('NC', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '16', laps: '0', status: 'DNS' }),
      makeResult('NC', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '22', laps: '0', status: 'DNS' })
    ]
  },
  '3': {
    raceName: 'Japanese Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '53', status: '1:28:03.403' }),
      makeResult('2', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 18, { grid: '3', laps: '53', status: '+13.722s' }),
      makeResult('3', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 15, { grid: '4', laps: '53', status: '+15.270s' }),
      makeResult('4', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 12, { grid: '2', laps: '53', status: '+15.754s' }),
      makeResult('5', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 10, { grid: '5', laps: '53', status: '+23.479s' }),
      makeResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 8, { grid: '6', laps: '53', status: '+25.037s' }),
      makeResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 6, { grid: '7', laps: '53', status: '+32.340s' }),
      makeResult('8', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 4, { grid: '11', laps: '53', status: '+32.677s' }),
      makeResult('9', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 2, { grid: '14', laps: '53', status: '+50.180s' }),
      makeResult('10', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 1, { grid: '12', laps: '53', status: '+51.216s' }),
      makeResult('11', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '13', laps: '53', status: '+52.280s' }),
      makeResult('12', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '8', laps: '53', status: '+56.154s' }),
      makeResult('13', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '9', laps: '53', status: '+59.078s' }),
      makeResult('14', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '10', laps: '53', status: '+59.848s' }),
      makeResult('15', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '16', laps: '53', status: '+65.008s' }),
      makeResult('16', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '15', laps: '53', status: '+65.773s' }),
      makeResult('17', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '53', status: '+92.453s' }),
      makeResult('18', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '52', status: '+1 lap' }),
      makeResult('19', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '52', status: '+1 lap' }),
      makeResult('20', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '17', laps: '51', status: '+2 laps' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '30', status: 'DNF' }),
      makeResult('NC', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '18', laps: '20', status: 'DNF' })
    ]
  },
  '4': {
    raceName: 'US Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '57', status: '1:33:19.273' }),
      makeResult('2', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 18, { grid: '4', laps: '57', status: '+3.264s' }),
      makeResult('3', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 15, { grid: '7', laps: '57', status: '+27.092s' }),
      makeResult('4', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 12, { grid: '5', laps: '57', status: '+43.051s' }),
      makeResult('5', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 10, { grid: '2', laps: '57', status: '+48.949s' }),
      makeResult('6', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 8, { grid: '6', laps: '57', status: '+53.753s' }),
      makeResult('7', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 6, { grid: '8', laps: '57', status: '+61.871s' }),
      makeResult('8', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 4, { grid: '3', laps: '57', status: '+64.245s' }),
      makeResult('9', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 2, { grid: '13', laps: '57', status: '+82.072s' }),
      makeResult('10', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 1, { grid: '15', laps: '57', status: '+90.972s' }),
      makeResult('11', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '12', laps: '56', status: '+1 lap' }),
      makeResult('12', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '21', laps: '56', status: '+1 lap' }),
      makeResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '14', laps: '56', status: '+1 lap' }),
      makeResult('14', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '16', laps: '56', status: '+1 lap' }),
      makeResult('15', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '17', laps: '56', status: '+1 lap' }),
      makeResult('16', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '56', status: '+1 lap' }),
      makeResult('17', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '18', laps: '56', status: '+1 lap' }),
      makeResult('18', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '55', status: '+2 laps' }),
      makeResult('NC', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '10', laps: '7', status: 'DNF' }),
      makeResult('NC', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '11', laps: '6', status: 'DNF' }),
      makeResult('NC', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '9', laps: '4', status: 'DNF' }),
      makeResult('NC', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '22', laps: '4', status: 'DNF' })
    ]
  },
  '5': {
    raceName: 'Canadian Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '2', laps: '68', status: '1:28:15.758' }),
      makeResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 18, { grid: '5', laps: '68', status: '+10.768s' }),
      makeResult('3', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 15, { grid: '6', laps: '68', status: '+11.276s' }),
      makeResult('4', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 12, { grid: '8', laps: '68', status: '+44.151s' }),
      makeResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 10, { grid: '7', laps: '67', status: '+1 lap' }),
      makeResult('6', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 8, { grid: '10', laps: '67', status: '+1 lap' }),
      makeResult('7', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 6, { grid: '12', laps: '67', status: '+1 lap' }),
      makeResult('8', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 4, { grid: '14', laps: '67', status: '+1 lap' }),
      makeResult('9', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 2, { grid: '15', laps: '67', status: '+1 lap' }),
      makeResult('10', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 1, { grid: '16', laps: '67', status: '+1 lap' }),
      makeResult('11', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '4', laps: '66', status: '+2 laps' }),
      makeResult('12', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '11', laps: '66', status: '+2 laps' }),
      makeResult('13', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '13', laps: '66', status: '+2 laps' }),
      makeResult('14', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '17', laps: '66', status: '+2 laps' }),
      makeResult('15', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '64', status: '+4 laps' }),
      makeResult('16', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '21', laps: '64', status: '+4 laps' }),
      makeResult('NC', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '39', status: 'DNF' }),
      makeResult('NC', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '3', laps: '38', status: 'DNF' }),
      makeResult('NC', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '1', laps: '29', status: 'DNF' }),
      makeResult('NC', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '19', laps: '23', status: 'DNF' }),
      makeResult('NC', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '18', laps: '11', status: 'DNF' }),
      makeResult('NC', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '9', laps: '0', status: 'DNS' })
    ]
  },
  '6': {
    raceName: 'Monaco Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '78', status: '2:23:31.243' }),
      makeResult('2', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 18, { grid: '3', laps: '78', status: '+6.271s' }),
      makeResult('3', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 15, { grid: '9', laps: '78', status: '+20.369s' }),
      makeResult('4', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 12, { grid: '5', laps: '78', status: '+23.394s' }),
      makeResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 10, { grid: '7', laps: '78', status: '+24.261s' }),
      makeResult('6', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 8, { grid: '10', laps: '78', status: '+26.553s' }),
      makeResult('7', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 6, { grid: '15', laps: '78', status: '+29.010s' }),
      makeResult('8', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 4, { grid: '11', laps: '78', status: '+33.413s' }),
      makeResult('9', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 2, { grid: '17', laps: '78', status: '+37.140s' }),
      makeResult('10', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 1, { grid: '21', laps: '78', status: '+41.899s' }),
      makeResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '16', laps: '78', status: '+42.748s' }),
      makeResult('12', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '6', laps: '78', status: '+43.353s' }),
      makeResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '13', laps: '78', status: '+44.102s' }),
      makeResult('14', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '14', laps: '78', status: '+48.964s' }),
      makeResult('15', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '18', laps: '78', status: '+49.153s' }),
      makeResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '12', laps: '70', status: 'DNF' }),
      makeResult('NC', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 0, { grid: '4', laps: '64', status: 'DNF' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '56', status: 'DNF' }),
      makeResult('NC', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '8', laps: '43', status: 'DNF' }),
      makeResult('NC', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '19', laps: '27', status: 'DNF' }),
      makeResult('NC', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '15', status: 'DNF' }),
      makeResult('NC', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '2', laps: '0', status: 'DNF' })
    ]
  },
  '7': {
    raceName: 'Spanish Grand Prix',
    Results: [
      makeResult('1', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 25, { grid: '2', laps: '66', status: '1:32:28.105' }),
      makeResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18, { grid: '1', laps: '66', status: '+19.561s' }),
      makeResult('3', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 15, { grid: '4', laps: '66', status: '+23.719s' }),
      makeResult('4', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 12, { grid: '5', laps: '66', status: '+40.497s' }),
      makeResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 10, { grid: '7', laps: '66', status: '+58.661s' }),
      makeResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 8, { grid: '6', laps: '65', status: '+1 lap' }),
      makeResult('7', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 6, { grid: '14', laps: '65', status: '+1 lap' }),
      makeResult('8', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 4, { grid: '8', laps: '65', status: '+1 lap' }),
      makeResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 2, { grid: '11', laps: '65', status: '+1 lap' }),
      makeResult('10', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '13', laps: '65', status: '+1 lap' }),
      makeResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '12', laps: '64', status: '+2 laps' }),
      makeResult('12', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '16', laps: '64', status: '+2 laps' }),
      makeResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '17', laps: '64', status: '+2 laps' }),
      makeResult('14', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '63', status: '+3 laps' }),
      makeResult('15', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 0, { grid: '10', laps: '62', status: 'DNF' }),
      makeResult('16', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '3', laps: '61', status: 'DNF' }),
      makeResult('17', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '15', laps: '60', status: 'DNF' }),
      makeResult('NC', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '18', laps: '55', status: '+11 laps' }),
      makeResult('NC', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '37', status: 'DNF' }),
      makeResult('NC', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '9', laps: '29', status: 'DNF' }),
      makeResult('NC', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '15', status: 'DNF' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '5', status: 'DNF' })
    ]
  },
  '8': {
    raceName: 'Austrian Grand Prix',
    Results: [
      makeResult('1', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '71', status: '1:26:37.979' }),
      makeResult('2', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 18, { grid: '5', laps: '71', status: '+1.611s' }),
      makeResult('3', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 15, { grid: '4', laps: '71', status: '+1.986s' }),
      makeResult('4', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 12, { grid: '7', laps: '71', status: '+21.809s' }),
      makeResult('5', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 10, { grid: '3', laps: '71', status: '+26.393s' }),
      makeResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 8, { grid: '8', laps: '71', status: '+29.399s' }),
      makeResult('7', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 6, { grid: '6', laps: '71', status: '+31.505s' }),
      makeResult('8', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 4, { grid: '2', laps: '71', status: '+45.659s' }),
      makeResult('9', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 2, { grid: '9', laps: '70', status: '+1 lap' }),
      makeResult('10', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 1, { grid: '10', laps: '70', status: '+1 lap' }),
      makeResult('11', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '12', laps: '70', status: '+1 lap' }),
      makeResult('12', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '14', laps: '70', status: '+1 lap' }),
      makeResult('13', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '11', laps: '70', status: '+1 lap' }),
      makeResult('14', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '13', laps: '70', status: '+1 lap' }),
      makeResult('15', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '16', laps: '70', status: '+1 lap' }),
      makeResult('16', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '15', laps: '69', status: '+2 laps' }),
      makeResult('17', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '18', laps: '69', status: '+2 laps' }),
      makeResult('18', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '68', status: '+3 laps' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '45', status: 'DNF' }),
      makeResult('NC', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '17', laps: '23', status: 'DNF' }),
      makeResult('NC', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '19', laps: '4', status: 'DNF' }),
      makeResult('NC', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '2', status: 'DNF' })
    ]
  },
  '9': {
    raceName: 'British Grand Prix',
    Results: [
      makeResult('1', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 25, { grid: '2', laps: '52', status: '1:27:11.335' }),
      makeResult('2', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 18, { grid: '4', laps: '52', status: '+0.427s' }),
      makeResult('3', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 15, { grid: '3', laps: '52', status: '+0.772s' }),
      makeResult('4', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 12, { grid: '6', laps: '52', status: '+1.149s' }),
      makeResult('5', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 10, { grid: '5', laps: '52', status: '+1.598s' }),
      makeResult('6', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 8, { grid: '10', laps: '52', status: '+2.023s' }),
      makeResult('7', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 6, { grid: '9', laps: '52', status: '+2.214s' }),
      makeResult('8', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 4, { grid: '11', laps: '52', status: '+2.413s' }),
      makeResult('9', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 2, { grid: '19', laps: '52', status: '+3.229s' }),
      makeResult('10', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '15', laps: '52', status: '+3.445s' }),
      makeResult('11', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 0, { grid: '8', laps: '52', status: '+4.014s' }),
      makeResult('12', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '13', laps: '52', status: '+5.245s' }),
      makeResult('13', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '17', laps: '52', status: '+5.512s' }),
      makeResult('14', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '20', laps: '52', status: '+7.403s' }),
      makeResult('15', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '1', laps: '52', status: '+8.005s' }),
      makeResult('16', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '18', laps: '52', status: '+8.162s' }),
      makeResult('17', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '14', laps: '51', status: '+1 lap' }),
      makeResult('18', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '51', status: '+1 lap' }),
      makeResult('19', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '22', laps: '51', status: '+1 lap' }),
      makeResult('20', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 0, { grid: '7', laps: '46', status: 'DNF' }),
      makeResult('NC', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '16', laps: '43', status: 'DNF' }),
      makeResult('NC', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '12', laps: '36', status: 'DNF' })
    ]
  },
  '10': {
    raceName: 'Belgian Grand Prix',
    Results: [
      makeResult('1', { driverId: 'antonelli', givenName: 'Kimi', familyName: 'Antonelli', nationality: 'Italian' }, { constructorId: 'mercedes', name: 'Mercedes' }, 25, { grid: '1', laps: '44', status: '1:24:42.479' }),
      makeResult('2', { driverId: 'leclerc', givenName: 'Charles', familyName: 'Leclerc', nationality: 'Monegasque' }, { constructorId: 'ferrari', name: 'Ferrari' }, 18, { grid: '4', laps: '44', status: '+1.952s' }),
      makeResult('3', { driverId: 'max_verstappen', givenName: 'Max', familyName: 'Verstappen', nationality: 'Dutch' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 15, { grid: '2', laps: '44', status: '+11.586s' }),
      makeResult('4', { driverId: 'hamilton', givenName: 'Lewis', familyName: 'Hamilton', nationality: 'British' }, { constructorId: 'ferrari', name: 'Ferrari' }, 12, { grid: '5', laps: '44', status: '+17.245s' }),
      makeResult('5', { driverId: 'piastri', givenName: 'Oscar', familyName: 'Piastri', nationality: 'Australian' }, { constructorId: 'mclaren', name: 'McLaren' }, 10, { grid: '6', laps: '44', status: '+18.988s' }),
      makeResult('6', { driverId: 'hadjar', givenName: 'Isack', familyName: 'Hadjar', nationality: 'French' }, { constructorId: 'red_bull', name: 'Red Bull Racing' }, 8, { grid: '20', laps: '44', status: '+23.307s' }),
      makeResult('7', { driverId: 'norris', givenName: 'Lando', familyName: 'Norris', nationality: 'British' }, { constructorId: 'mclaren', name: 'McLaren' }, 6, { grid: '13', laps: '44', status: '+35.009s' }),
      makeResult('8', { driverId: 'bortoleto', givenName: 'Gabriel', familyName: 'Bortoleto', nationality: 'Brazilian' }, { constructorId: 'audi', name: 'Audi' }, 4, { grid: '8', laps: '44', status: '+39.820s' }),
      makeResult('9', { driverId: 'arvid_lindblad', givenName: 'Arvid', familyName: 'Lindblad', nationality: 'British' }, { constructorId: 'rb', name: 'Racing Bulls' }, 2, { grid: '17', laps: '44', status: '+44.201s' }),
      makeResult('10', { driverId: 'colapinto', givenName: 'Franco', familyName: 'Colapinto', nationality: 'Argentine' }, { constructorId: 'alpine', name: 'Alpine' }, 1, { grid: '16', laps: '44', status: '+45.000s' }),
      makeResult('11', { driverId: 'gasly', givenName: 'Pierre', familyName: 'Gasly', nationality: 'French' }, { constructorId: 'alpine', name: 'Alpine' }, 0, { grid: '7', laps: '44', status: '+45.628s' }),
      makeResult('12', { driverId: 'lawson', givenName: 'Liam', familyName: 'Lawson', nationality: 'New Zealander' }, { constructorId: 'rb', name: 'Racing Bulls' }, 0, { grid: '11', laps: '44', status: '+46.157s' }),
      makeResult('13', { driverId: 'hulkenberg', givenName: 'Nico', familyName: 'Hulkenberg', nationality: 'German' }, { constructorId: 'audi', name: 'Audi' }, 0, { grid: '9', laps: '44', status: '+46.514s' }),
      makeResult('14', { driverId: 'bearman', givenName: 'Oliver', familyName: 'Bearman', nationality: 'British' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '10', laps: '43', status: '+1 lap' }),
      makeResult('15', { driverId: 'albon', givenName: 'Alexander', familyName: 'Albon', nationality: 'Thai' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '12', laps: '43', status: '+1 lap' }),
      makeResult('16', { driverId: 'sainz', givenName: 'Carlos', familyName: 'Sainz', nationality: 'Spanish' }, { constructorId: 'williams', name: 'Williams' }, 0, { grid: '22', laps: '43', status: '+1 lap' }),
      makeResult('17', { driverId: 'ocon', givenName: 'Esteban', familyName: 'Ocon', nationality: 'French' }, { constructorId: 'haas', name: 'Haas F1 Team' }, 0, { grid: '14', laps: '43', status: '+1 lap' }),
      makeResult('18', { driverId: 'bottas', givenName: 'Valtteri', familyName: 'Bottas', nationality: 'Finnish' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '15', laps: '43', status: '+1 lap' }),
      makeResult('19', { driverId: 'alonso', givenName: 'Fernando', familyName: 'Alonso', nationality: 'Spanish' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '19', laps: '43', status: '+1 lap' }),
      makeResult('NC', { driverId: 'stroll', givenName: 'Lance', familyName: 'Stroll', nationality: 'Canadian' }, { constructorId: 'aston_martin', name: 'Aston Martin' }, 0, { grid: '21', laps: '30', status: 'DNF' }),
      makeResult('NC', { driverId: 'perez', givenName: 'Sergio', familyName: 'Perez', nationality: 'Mexican' }, { constructorId: 'cadillac', name: 'Cadillac' }, 0, { grid: '18', laps: '19', status: 'DNF' }),
      makeResult('NC', { driverId: 'russell', givenName: 'George', familyName: 'Russell', nationality: 'British' }, { constructorId: 'mercedes', name: 'Mercedes' }, 0, { grid: '3', laps: '3', status: 'DNF' })
    ]
  }
};

const CURRENT_DRIVER_POINTS = {
  antonelli: { points: 183, wins: 6 },
  hamilton: { points: 141, wins: 1 },
  russell: { points: 128, wins: 2 },
  leclerc: { points: 105, wins: 1 },
  max_verstappen: { points: 82, wins: 0 },
  norris: { points: 77, wins: 0 },
  piastri: { points: 75, wins: 0 },
  hadjar: { points: 60, wins: 0 },
  gasly: { points: 41, wins: 0 },
  lawson: { points: 36, wins: 0 },
  arvid_lindblad: { points: 21, wins: 0 },
  colapinto: { points: 19, wins: 0 },
  bearman: { points: 17, wins: 0 },
  bortoleto: { points: 10, wins: 0 },
  sainz: { points: 6, wins: 0 },
  albon: { points: 5, wins: 0 },
  ocon: { points: 3, wins: 0 },
  alonso: { points: 1, wins: 0 }
};

const CURRENT_CONSTRUCTOR_POINTS = {
  mercedes: { points: 311, wins: 8 },
  ferrari: { points: 246, wins: 2 },
  mclaren: { points: 152, wins: 0 },
  red_bull: { points: 142, wins: 0 },
  alpine: { points: 60, wins: 0 },
  rb: { points: 57, wins: 0 },
  haas: { points: 20, wins: 0 },
  williams: { points: 11, wins: 0 },
  audi: { points: 10, wins: 0 },
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
  accountProfileSaving: false,
  accountProfileError: '',
  accountProfileMessage: '',
  creatorDashboardLoading: false,
  creatorDashboardError: '',
  creatorPayoutSubmitting: false,
  creatorPayoutMessage: '',
  creatorPayoutError: '',
  creatorProfiles: [],
  creatorStakes: [],
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
  firebasePointPredictions: [],
  kimiPayoutStake: null,
  pointPredictionSubmitting: false,
  pointPredictionError: '',
  kimiPayoutSubmitting: false,
  kimiPayoutError: '',
  kimiPayoutMessage: '',
  chatMessages: [],
  chatSubmitting: false,
  chatError: '',
  chatReady: false,
  authReady: false,
  authUser: null,
  wallet: null,
  authError: '',
  voteMode: 'local',
  votesReady: false,
  firebaseUnsubscribers: [],
  walletUnsubscribe: null,
  payoutUnsubscribe: null,
  chatUnsubscribe: null
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

function makePracticeResult(position, driver, constructor, details = {}) {
  return {
    position: String(position),
    Driver: driver,
    Constructor: constructor,
    number: details.number || '',
    time: details.time || '',
    gap: details.gap || '',
    laps: details.laps || ''
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
  accountWidget: document.querySelector('#accountWidget'),
  accountToggle: document.querySelector('#accountToggle'),
  accountPanel: document.querySelector('#accountPanel'),
  accountLabel: document.querySelector('#accountLabel'),
  accountForm: document.querySelector('#accountForm'),
  accountName: document.querySelector('#accountName'),
  accountEmail: document.querySelector('#accountEmail'),
  accountPassword: document.querySelector('#accountPassword'),
  accountSignUp: document.querySelector('#accountSignUp'),
  accountSignOut: document.querySelector('#accountSignOut'),
  accountSignedOut: document.querySelector('#accountSignedOut'),
  accountSignedIn: document.querySelector('#accountSignedIn'),
  accountUserName: document.querySelector('#accountUserName'),
  accountUserEmail: document.querySelector('#accountUserEmail'),
  walletBalance: document.querySelector('#walletBalance'),
  accountError: document.querySelector('#accountError'),
  accountPage: document.querySelector('#accountPage'),
  accountAvatar: document.querySelector('#accountAvatar'),
  accountPageName: document.querySelector('#accountPageName'),
  accountPageStatus: document.querySelector('#accountPageStatus'),
  accountPageBalance: document.querySelector('#accountPageBalance'),
  accountPageSignOut: document.querySelector('#accountPageSignOut'),
  accountPreferencesForm: document.querySelector('#accountPreferencesForm'),
  profilePictureDriver: document.querySelector('#profilePictureDriver'),
  favoriteTeam: document.querySelector('#favoriteTeam'),
  favoriteDriver: document.querySelector('#favoriteDriver'),
  accountPredictionsList: document.querySelector('#accountPredictionsList'),
  accountProfileError: document.querySelector('#accountProfileError'),
  kimiPayoutCard: document.querySelector('#kimiPayoutCard'),
  kimiPayoutBody: document.querySelector('#kimiPayoutBody'),
  creatorDashboard: document.querySelector('#creatorDashboard'),
  refreshCreatorDashboard: document.querySelector('#refreshCreatorDashboard'),
  creatorDashboardBody: document.querySelector('#creatorDashboardBody'),
  voteRaceName: document.querySelector('#voteRaceName'),
  voteCategoryGrid: document.querySelector('#voteCategoryGrid'),
  votePicker: document.querySelector('#votePicker'),
  pointsPredictionForm: document.querySelector('#pointsPredictionForm'),
  pointsPredictionCategory: document.querySelector('#pointsPredictionCategory'),
  pointsPredictionDriver: document.querySelector('#pointsPredictionDriver'),
  pointsPredictionPoints: document.querySelector('#pointsPredictionPoints'),
  pointsPredictionError: document.querySelector('#pointsPredictionError'),
  pointsPredictionList: document.querySelector('#pointsPredictionList'),
  themeToggle: document.querySelector('#themeToggle'),
  driversStandingsBody: document.querySelector('#driversStandingsBody'),
  constructorStandingsBody: document.querySelector('#constructorStandingsBody'),
  leaderboard: document.querySelector('#leaderboard'),
  profileGrid: document.querySelector('#profileGrid'),
  teamProfileGrid: document.querySelector('#teamProfileGrid'),
  quoteGrid: document.querySelector('#quoteGrid'),
  newsGrid: document.querySelector('#newsGrid'),
  refreshNews: document.querySelector('#refreshNews'),
  chatStatus: document.querySelector('#chatStatus'),
  chatMessages: document.querySelector('#chatMessages'),
  chatForm: document.querySelector('#chatForm'),
  chatInput: document.querySelector('#chatInput'),
  chatCount: document.querySelector('#chatCount'),
  chatSubmit: document.querySelector('#chatSubmit'),
  chatError: document.querySelector('#chatError'),
  lastUpdated: document.querySelector('#lastUpdated')
};

const PAGE_IDS = ['home', 'next-race', 'schedule', 'race-detail', 'standings', 'account', 'profiles', 'news', 'chat', 'wisdom'];

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

function currentTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) === 'light' ? 'light' : 'dark';
}

function applyTheme(theme = currentTheme()) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-theme', isLight);
  if (els.themeToggle) {
    els.themeToggle.textContent = isLight ? 'Dark mode' : 'Light mode';
    els.themeToggle.setAttribute('aria-pressed', String(isLight));
  }
}

function toggleTheme() {
  const nextTheme = currentTheme() === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  applyTheme(nextTheme);
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

function hexToRgb(hex = '') {
  const value = String(hex).replace('#', '').trim();
  if (!/^[0-9a-f]{6}$/i.test(value)) return null;
  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

function readableTextColor(hex = '') {
  const rgb = hexToRgb(hex);
  if (!rgb) return '#ffffff';
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.58 ? '#08090c' : '#ffffff';
}

function readableMutedColor(hex = '') {
  return readableTextColor(hex) === '#08090c' ? 'rgba(8, 9, 12, 0.72)' : 'rgba(255, 255, 255, 0.76)';
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

function teamCarImage(constructorId = '') {
  const src = TEAM_CARS[String(constructorId).toLowerCase()] || '';
  return src ? `${src}?v=${TEAM_CAR_ASSET_VERSION}` : '';
}

function driverTeam(driver = {}) {
  return state.drivers.find(item => item.Driver?.driverId === driver.driverId)?.Constructors?.[0] || {};
}

function driverTeamById(driverId = '') {
  return state.drivers.find(item => item.Driver?.driverId === driverId)?.Constructors?.[0] || {};
}

function favoriteDriverChatColor(driverId = state.wallet?.favoriteDriverId || '') {
  const constructor = driverTeamById(driverId);
  return teamColor(constructor.constructorId);
}

function displayRaceName(race = {}) {
  const scheduleRace = race.Circuit ? race : state.races.find(item => item.round === race.round);
  const country = scheduleRace?.Circuit?.Location?.country;
  return GRAND_PRIX_TITLE_BY_COUNTRY[country] || race.raceName || 'Grand Prix';
}

function nextRace() {
  return state.races.find(race => raceBucket(race) === 'upcoming') || null;
}

function activePredictionRace() {
  const now = new Date();
  return state.races.find(race => {
    const startsAt = dateValue(race);
    return startsAt <= now && now - startsAt < PREDICTION_LOCK_HOLD_MS;
  }) || nextRace();
}

function racePredictionsLocked(race = activePredictionRace()) {
  return Boolean(race && dateValue(race) <= new Date());
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
  const race = activePredictionRace();
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

function sanitizePredictionName(value = '') {
  return String(value).trim().replace(/\s+/g, ' ').slice(0, 40);
}

function normalizePredictionPoints(value) {
  const points = Math.floor(Number(value));
  return Number.isFinite(points) ? Math.max(1, Math.min(999, points)) : 0;
}

function formatF1Bucks(value) {
  const amount = Math.max(0, Math.floor(Number(value) || 0));
  return `${amount.toLocaleString()} F1 Bucks`;
}

function getLocalPointPredictions() {
  const store = readVoteStore();
  const raceKey = voteRaceKey();
  return store[raceKey]?.pointPredictions || [];
}

function pointPredictions() {
  if (state.voteMode === 'firebase') {
    return state.firebasePointPredictions;
  }
  return getLocalPointPredictions();
}

function accountPointPredictions() {
  return pointPredictions().filter(item => state.authUser && item.userId === state.authUser.uid);
}

function racePointPredictions() {
  return pointPredictions();
}

function payoutProfitForStake(points, settlement = KIMI_WIN_SETTLEMENT) {
  const stake = Math.max(0, Math.floor(Number(points) || 0));
  return Math.floor((stake * settlement.oddsNumerator) / settlement.oddsDenominator);
}

function payoutReturnForStake(points, settlement = KIMI_WIN_SETTLEMENT) {
  const stake = Math.max(0, Math.floor(Number(points) || 0));
  return stake + payoutProfitForStake(stake, settlement);
}

function compactAccountKey(value = '') {
  return String(value).toLowerCase().replace(/[^a-z0-9]/g, '');
}

function manualKimiStakeOverride() {
  if (!state.authUser) return null;
  const accountKeys = [
    authUserName(),
    state.wallet?.displayName,
    state.authUser?.displayName,
    state.authUser?.email?.split('@')[0]
  ].map(compactAccountKey).filter(Boolean);

  const override = MANUAL_KIMI_STAKE_OVERRIDES.find(item => {
    const overrideKey = compactAccountKey(item.username);
    return accountKeys.some(key => key === overrideKey);
  });
  if (!override) return null;

  return {
    id: `${state.authUser.uid}-${KIMI_WIN_SETTLEMENT.categoryId}`,
    userId: state.authUser.uid,
    categoryId: KIMI_WIN_SETTLEMENT.categoryId,
    driverId: KIMI_WIN_SETTLEMENT.driverId,
    voterName: authUserName(),
    points: normalizePredictionPoints(override.points),
    raceKey: KIMI_WIN_SETTLEMENT.raceKey,
    manualStake: true,
    creditMode: override.creditMode,
    overrideNote: override.note
  };
}

function kimiWinStake() {
  const savedStake = accountPointPredictions().find(item => (
    item.raceKey === KIMI_WIN_SETTLEMENT.raceKey
    && item.categoryId === KIMI_WIN_SETTLEMENT.categoryId
    && item.driverId === KIMI_WIN_SETTLEMENT.driverId
  )) || state.kimiPayoutStake || null;
  return savedStake || manualKimiStakeOverride();
}

function saveLocalPointPrediction(prediction) {
  const store = readVoteStore();
  const raceKey = voteRaceKey();
  const userId = state.authUser?.uid || voteUserId();
  const id = `${userId}-${prediction.categoryId}`;
  store[raceKey] ||= { categories: {} };
  store[raceKey].pointPredictions ||= [];
  const savedPrediction = {
    id,
    userId,
    categoryId: prediction.categoryId,
    driverId: prediction.driverId,
    voterName: sanitizePredictionName(prediction.voterName),
    points: normalizePredictionPoints(prediction.points),
    raceKey,
    updatedAt: Date.now()
  };
  store[raceKey].pointPredictions = [
    ...store[raceKey].pointPredictions.filter(item => item.id !== id),
    savedPrediction
  ];
  writeVoteStore(store);
  return savedPrediction;
}

async function saveVote(categoryId, driverId) {
  if (state.voteMode === 'firebase') {
    if (!window.F1FirebaseVotes?.saveVote) throw new Error('Firebase vote API is not ready.');
    await window.F1FirebaseVotes.saveVote(voteRaceKey(), categoryId, driverId, voteUserId());
    return;
  }
  saveLocalVote(categoryId, driverId);
}

async function savePointPrediction(prediction) {
  const savedPrediction = saveLocalPointPrediction(prediction);
  if (state.voteMode === 'firebase') {
    if (!window.F1FirebaseVotes?.savePointPrediction) throw new Error('Firebase point prediction API is not ready.');
    if (!state.authUser) throw new Error('Sign in to stake F1 Bucks.');
    await window.F1FirebaseVotes.savePointPrediction(voteRaceKey(), savedPrediction);
  }
  return savedPrediction;
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

function authUserName() {
  return state.wallet?.displayName || state.authUser?.displayName || state.authUser?.email?.split('@')[0] || 'F1 fan';
}

function isCreator() {
  return Boolean(CREATOR_UID && state.authUser?.uid === CREATOR_UID);
}

function authErrorMessage(error) {
  const code = error?.code || '';
  if (code.includes('email-already-in-use')) return 'That email already has an account. Try signing in.';
  if (code.includes('invalid-credential') || code.includes('wrong-password') || code.includes('user-not-found')) return 'Email or password is incorrect.';
  if (code.includes('weak-password')) return 'Password needs at least 6 characters.';
  if (code.includes('invalid-email')) return 'Enter a valid email address.';
  if (code.includes('operation-not-allowed')) return 'Enable Email/Password sign-in in Firebase Authentication.';
  return error?.message || 'Account action failed. Try again.';
}

function renderAccountPanel() {
  if (!els.accountWidget) return;
  const signedIn = Boolean(state.authUser);
  const balance = state.wallet?.f1BucksBalance;

  els.accountLabel.textContent = signedIn ? authUserName() : 'Sign in';
  els.accountToggle?.setAttribute('aria-expanded', String(!els.accountPanel?.hidden));

  if (els.accountSignedOut) els.accountSignedOut.hidden = signedIn;
  if (els.accountSignedIn) els.accountSignedIn.hidden = !signedIn;
  if (els.accountUserName) els.accountUserName.textContent = authUserName();
  if (els.accountUserEmail) els.accountUserEmail.textContent = 'Open your profile page from the username button.';
  if (els.walletBalance) els.walletBalance.textContent = Number.isFinite(Number(balance))
    ? formatF1Bucks(balance)
    : 'Loading wallet...';
  if (els.accountError) {
    els.accountError.hidden = !state.authError;
    els.accountError.textContent = state.authError;
  }
}

function driverOptionHtml(row, selectedId = '') {
  const driver = row.Driver || {};
  return `<option value="${escapeHtml(driver.driverId)}" ${driver.driverId === selectedId ? 'selected' : ''}>${driverFlag(driver)} ${escapeHtml(driverName(driver))}</option>`;
}

function constructorOptionHtml(row, selectedId = '') {
  const constructor = row.constructor || row.Constructor || {};
  const id = constructor.constructorId;
  return `<option value="${escapeHtml(id)}" ${id === selectedId ? 'selected' : ''}>${escapeHtml(constructorName(constructor))}</option>`;
}

function selectedProfileDriver() {
  const driverId = state.wallet?.profileDriverId || state.wallet?.favoriteDriverId || state.drivers[0]?.Driver?.driverId || '';
  return state.drivers.find(row => row.Driver?.driverId === driverId)?.Driver || state.drivers[0]?.Driver || null;
}

function driverLabelById(driverId = '') {
  const row = state.drivers.find(item => item.Driver?.driverId === driverId);
  return row ? `${driverFlag(row.Driver)} ${driverName(row.Driver)}` : (driverId || 'TBC');
}

function teamLabelById(constructorId = '') {
  const row = teamProfileRows().find(item => item.constructor?.constructorId === constructorId);
  return row ? constructorName(row.constructor) : (constructorId || 'TBC');
}

function categoryLabelById(categoryId = '') {
  return POINT_PREDICTION_CATEGORIES.find(category => category.id === categoryId)?.title || categoryId || 'TBC';
}

function renderCreatorDashboard() {
  if (!els.creatorDashboard || !els.creatorDashboardBody) return;
  const creator = isCreator();
  els.creatorDashboard.hidden = !creator;
  if (!creator) return;

  if (els.refreshCreatorDashboard) {
    els.refreshCreatorDashboard.disabled = state.creatorDashboardLoading;
    els.refreshCreatorDashboard.textContent = state.creatorDashboardLoading ? 'Loading...' : 'Refresh';
  }

  if (state.creatorDashboardError) {
    els.creatorDashboardBody.innerHTML = `<p class="account-error">${escapeHtml(state.creatorDashboardError)}</p>`;
    return;
  }

  const stakesByUser = state.creatorStakes.reduce((map, stake) => {
    map[stake.userId] ||= [];
    map[stake.userId].push(stake);
    return map;
  }, {});
  const landoPoleStakes = state.creatorStakes.filter(stake => (
    stake.raceKey === LANDO_POLE_SETTLEMENT.raceKey
    && stake.categoryId === LANDO_POLE_SETTLEMENT.categoryId
    && stake.driverId === LANDO_POLE_SETTLEMENT.driverId
    && !stake.settledAt
    && !stake.payoutReturn
  ));
  const landoStakeTotal = landoPoleStakes.reduce((total, stake) => total + (Number(stake.points) || 0), 0);
  const landoPayoutTotal = landoPoleStakes.reduce((total, stake) => total + payoutReturnForStake(stake.points, LANDO_POLE_SETTLEMENT), 0);
  const payoutMessage = state.creatorPayoutError || state.creatorPayoutMessage;

  const payoutPanel = `
    <div class="creator-payout-panel">
      <div>
        <span class="account-kicker">Creator payout</span>
        <h4>${escapeHtml(LANDO_POLE_SETTLEMENT.winnerName)} pole settlement</h4>
        <p>${escapeHtml(LANDO_POLE_SETTLEMENT.raceName)} · ${escapeHtml(LANDO_POLE_SETTLEMENT.oddsLabel)} odds · ${escapeHtml(formatF1Bucks(landoStakeTotal))} staked · ${escapeHtml(formatF1Bucks(landoPayoutTotal))} total credit</p>
      </div>
      <button class="account-payout-button" id="creditLandoPolePayouts" type="button" ${state.creatorPayoutSubmitting || !landoPoleStakes.length ? 'disabled' : ''}>
        ${state.creatorPayoutSubmitting ? 'Crediting...' : `Credit ${landoPoleStakes.length} Lando pole payout${landoPoleStakes.length === 1 ? '' : 's'}`}
      </button>
      ${payoutMessage ? `<p class="account-error ${state.creatorPayoutMessage && !state.creatorPayoutError ? 'is-success' : ''}">${escapeHtml(payoutMessage)}</p>` : ''}
    </div>
  `;

  const profileCards = state.creatorProfiles.length ? state.creatorProfiles.map(profile => {
    const uid = profile.id;
    const stakes = stakesByUser[uid] || [];
    return `
      <article class="creator-user-card">
        <div class="creator-user-head">
          <span>
            <strong>${escapeHtml(profile.displayName || 'F1 fan')}</strong>
            <small>${uid === state.authUser?.uid ? 'Creator account' : 'Signed-in user'}</small>
          </span>
          <b>${escapeHtml(formatF1Bucks(profile.f1BucksBalance))}</b>
        </div>
        <div class="creator-profile-grid">
          <span><small>Profile picture</small><strong>${escapeHtml(driverLabelById(profile.profileDriverId))}</strong></span>
          <span><small>Favorite racer</small><strong>${escapeHtml(driverLabelById(profile.favoriteDriverId))}</strong></span>
          <span><small>Favorite team</small><strong>${escapeHtml(teamLabelById(profile.favoriteTeamId))}</strong></span>
        </div>
        <div class="creator-stake-list">
          ${stakes.length ? stakes.map(stake => `
            <div class="creator-stake-row">
              <span>
                <strong>${escapeHtml(categoryLabelById(stake.categoryId))}</strong>
                <small>${escapeHtml(driverLabelById(stake.driverId))} · Round ${escapeHtml(stake.raceKey || 'TBC')}</small>
              </span>
              <b>${escapeHtml(formatF1Bucks(stake.points))}</b>
            </div>
          `).join('') : '<p class="empty-state">No stakes placed.</p>'}
        </div>
      </article>
    `;
  }).join('') : '<p class="empty-state">No signed-in user profiles found yet.</p>';

  els.creatorDashboardBody.innerHTML = payoutPanel + profileCards;
}

function renderAccountPage() {
  if (!els.accountPage) return;
  const signedIn = Boolean(state.authUser);
  const wallet = state.wallet || {};
  const profileDriver = selectedProfileDriver();
  const profileImage = profileDriver ? state.driverImages[profileDriver.driverId] : '';
  const balance = Number.isFinite(Number(wallet.f1BucksBalance)) ? wallet.f1BucksBalance : 0;

  els.accountPageName.textContent = signedIn ? authUserName() : 'Sign in';
  els.accountPageStatus.textContent = signedIn
    ? 'Customize your profile and track every F1 Bucks prediction you place.'
    : 'Sign in from the header to unlock your wallet and profile.';
  els.accountPageBalance.textContent = signedIn ? formatF1Bucks(balance) : '-- F1 Bucks';

  if (els.accountAvatar) {
    els.accountAvatar.innerHTML = profileImage
      ? `<img src="${escapeHtml(profileImage)}" alt="${escapeHtml(driverName(profileDriver))} profile picture">`
      : `<span>${profileDriver ? escapeHtml(driverName(profileDriver).split(' ').map(part => part[0]).join('').slice(0, 2)) : 'F1'}</span>`;
  }

  const drivers = voteDrivers();
  const teams = teamProfileRows();
  if (els.profilePictureDriver) {
    els.profilePictureDriver.disabled = !signedIn;
    els.profilePictureDriver.innerHTML = drivers.length
      ? drivers.map(row => driverOptionHtml(row, wallet.profileDriverId || '')).join('')
      : '<option value="">Drivers loading</option>';
  }
  if (els.favoriteDriver) {
    els.favoriteDriver.disabled = !signedIn;
    els.favoriteDriver.innerHTML = drivers.length
      ? drivers.map(row => driverOptionHtml(row, wallet.favoriteDriverId || '')).join('')
      : '<option value="">Drivers loading</option>';
  }
  if (els.favoriteTeam) {
    els.favoriteTeam.disabled = !signedIn;
    els.favoriteTeam.innerHTML = teams.length
      ? teams.map(row => constructorOptionHtml(row, wallet.favoriteTeamId || '')).join('')
      : '<option value="">Teams loading</option>';
  }

  const saveButton = els.accountPreferencesForm?.querySelector('button[type="submit"]');
  if (saveButton) {
    saveButton.disabled = !signedIn || state.accountProfileSaving;
    saveButton.textContent = state.accountProfileSaving ? 'Saving...' : (signedIn ? 'Save profile' : 'Sign in to save');
  }

  if (els.accountProfileError) {
    const message = state.accountProfileError || state.accountProfileMessage;
    els.accountProfileError.hidden = !message;
    els.accountProfileError.textContent = message;
    els.accountProfileError.classList.toggle('is-success', Boolean(state.accountProfileMessage && !state.accountProfileError));
  }
  if (els.accountPageSignOut) els.accountPageSignOut.disabled = !signedIn;

  const predictions = accountPointPredictions()
    .sort((a, b) => Number(b.updatedAt || 0) - Number(a.updatedAt || 0));
  els.accountPredictionsList.innerHTML = predictions.length ? predictions.map(item => {
    const category = POINT_PREDICTION_CATEGORIES.find(entry => entry.id === item.categoryId);
    const row = state.drivers.find(driverRow => driverRow.Driver?.driverId === item.driverId);
    const team = row?.Constructors?.[0] || {};
    return `
      <div class="account-prediction-row" style="--team-color: ${teamColor(team.constructorId)}">
        <span>
          <strong>${escapeHtml(category?.title || item.categoryId)}</strong>
          <small>${row ? driverIdentityHtml(row.Driver) : escapeHtml(item.driverId)} · ${escapeHtml(constructorName(team))}</small>
        </span>
        <b>${escapeHtml(item.points)} F1 Bucks</b>
      </div>
    `;
  }).join('') : `<p class="empty-state">${signedIn ? 'No F1 Bucks predictions placed yet.' : 'Sign in to see your predictions.'}</p>`;

  if (els.kimiPayoutCard && els.kimiPayoutBody) {
    const stake = signedIn ? kimiWinStake() : null;
    const stakeAmount = Number(stake?.points) || 0;
    const profit = payoutProfitForStake(stakeAmount);
    const savedCredit = Number(stake?.payoutReturn) || 0;
    const creditAmount = savedCredit || (stake?.creditMode === 'profit_only' ? profit : payoutReturnForStake(stakeAmount));
    const settled = Boolean(stake?.settledAt || stake?.payoutReturn);
    const message = state.kimiPayoutError || state.kimiPayoutMessage;
    const note = stake?.payoutNote || (stake?.creditMode === 'profit_only'
      ? 'Manual correction: this stake was not saved live, so claiming credits profit only.'
      : 'Since your stake was already deducted, claiming adds stake plus profit back to your balance.');
    els.kimiPayoutCard.hidden = !signedIn;
    els.kimiPayoutBody.innerHTML = stake ? `
      <div class="payout-summary-grid">
        <span><small>Race</small><strong>${escapeHtml(KIMI_WIN_SETTLEMENT.raceName)}</strong></span>
        <span><small>Winning pick</small><strong>${escapeHtml(KIMI_WIN_SETTLEMENT.winnerName)}</strong></span>
        <span><small>Odds</small><strong>${escapeHtml(KIMI_WIN_SETTLEMENT.oddsLabel)}</strong></span>
        <span><small>Your stake</small><strong>${escapeHtml(formatF1Bucks(stakeAmount))}</strong></span>
        <span><small>Profit</small><strong>${escapeHtml(formatF1Bucks(profit))}</strong></span>
        <span><small>Credit amount</small><strong>${escapeHtml(formatF1Bucks(creditAmount))}</strong></span>
      </div>
      <p class="payout-note">Using ${escapeHtml(KIMI_WIN_SETTLEMENT.source)}. ${escapeHtml(note)}</p>
      <button class="account-payout-button" id="claimKimiPayout" type="button" ${state.kimiPayoutSubmitting || settled || state.voteMode !== 'firebase' ? 'disabled' : ''}>
        ${state.kimiPayoutSubmitting ? 'Crediting...' : (settled ? 'Payout credited' : `Claim ${formatF1Bucks(creditAmount)}`)}
      </button>
      ${message ? `<p class="account-error ${state.kimiPayoutMessage && !state.kimiPayoutError ? 'is-success' : ''}">${escapeHtml(message)}</p>` : ''}
    ` : `
      <p class="empty-state">No eligible Kimi Antonelli race-winner stake found for ${escapeHtml(KIMI_WIN_SETTLEMENT.raceName)}.</p>
      ${message ? `<p class="account-error ${state.kimiPayoutMessage && !state.kimiPayoutError ? 'is-success' : ''}">${escapeHtml(message)}</p>` : ''}
    `;
  }

  renderCreatorDashboard();
}

function chatTimestampLabel(value) {
  const date = value?.toDate?.() || (value ? new Date(value) : null);
  if (!date || Number.isNaN(date.getTime())) return 'Just now';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit'
  }).format(date);
}

function renderChat() {
  if (!els.chatMessages || !els.chatForm) return;
  const signedIn = Boolean(state.authUser);
  const connected = state.voteMode === 'firebase' && state.chatReady;

  if (els.chatStatus) {
    els.chatStatus.textContent = signedIn
      ? (connected ? `${state.chatMessages.length} messages in the race room` : 'Connecting to live chat...')
      : 'Sign in to read and send race chat messages.';
  }

  els.chatMessages.innerHTML = signedIn
    ? (state.chatMessages.length ? state.chatMessages.map(message => {
      const mine = message.userId === state.authUser?.uid;
      const chatColor = message.favoriteTeamColor || favoriteDriverChatColor(message.favoriteDriverId);
      return `
        <article class="chat-message ${mine ? 'is-mine' : ''}" style="--chat-color: ${escapeHtml(chatColor)}; --chat-text-color: ${escapeHtml(readableTextColor(chatColor))}; --chat-muted-color: ${escapeHtml(readableMutedColor(chatColor))}">
          <div class="chat-message-head">
            <strong>${escapeHtml(message.displayName || 'F1 fan')}</strong>
            <time>${escapeHtml(chatTimestampLabel(message.createdAt))}</time>
          </div>
          <p>${escapeHtml(message.text || '')}</p>
        </article>
      `;
    }).join('') : '<p class="empty-state">No messages yet. Start the race chat.</p>')
    : '<p class="empty-state">Sign in from the header to join the live race chat.</p>';

  if (signedIn && state.chatMessages.length) {
    requestAnimationFrame(() => {
      els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
    });
  }

  if (els.chatInput) {
    els.chatInput.disabled = !signedIn || !connected || state.chatSubmitting;
    if (els.chatCount) els.chatCount.textContent = `${els.chatInput.value.length} / 300`;
  }
  if (els.chatSubmit) {
    els.chatSubmit.disabled = !signedIn || !connected || state.chatSubmitting || !els.chatInput?.value.trim();
    els.chatSubmit.textContent = state.chatSubmitting ? 'Sending...' : 'Send';
  }
  if (els.chatError) {
    els.chatError.hidden = !state.chatError;
    els.chatError.textContent = state.chatError;
  }
}

function handleFirebaseVotingError(error) {
  console.warn('Firebase voting unavailable, falling back to local votes.', error);
  state.voteMode = 'local';
  state.votesReady = true;
  state.voteError = 'Firebase rules are blocking shared voting. Publish the Firestore rules from FIREBASE_SETUP.md, then refresh.';
  state.pointPredictionError = 'Firebase rules are blocking live F1 Bucks predictions. Publish the Firestore rules from FIREBASE_SETUP.md, then refresh.';
  state.chatReady = false;
  state.chatError = 'Firebase rules are blocking race chat. Publish the Firestore rules from FIREBASE_SETUP.md, then refresh.';
  renderVotingPanel();
  renderChat();
}

async function initializeFirebaseVotes() {
  if (!firebaseConfigReady()) {
    state.voteMode = 'local';
    state.votesReady = true;
    state.chatReady = false;
    state.chatError = 'Firebase is not configured yet, so live race chat is unavailable.';
    renderVotingPanel();
    renderChat();
    return;
  }

  try {
    const { initializeApp } = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-app.js`);
    const {
      getFirestore,
      doc,
      collection,
      collectionGroup,
      addDoc,
      getDocs,
      onSnapshot,
      query,
      orderBy,
      limit,
      runTransaction,
      setDoc,
      serverTimestamp
    } = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-firestore.js`);
    const {
      getAuth,
      onAuthStateChanged,
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signOut: firebaseSignOut,
      updateProfile,
      setPersistence,
      browserLocalPersistence
    } = await import(`https://www.gstatic.com/firebasejs/${FIREBASE_SDK_VERSION}/firebase-auth.js`);

    const app = initializeApp(window.F1_FIREBASE_CONFIG);
    const db = getFirestore(app);
    const auth = getAuth(app);
    await setPersistence(auth, browserLocalPersistence);

    async function ensureUserWallet(user) {
      if (!user) return;
      const userRef = doc(db, 'users', user.uid);
      await runTransaction(db, async transaction => {
        const snapshot = await transaction.get(userRef);
        const base = {
          email: user.email || '',
          displayName: user.displayName || '',
          updatedAt: serverTimestamp()
        };
        if (snapshot.exists()) {
          transaction.set(userRef, base, { merge: true });
          return;
        }
        transaction.set(userRef, {
          ...base,
          f1BucksBalance: STARTING_F1_BUCKS,
          createdAt: serverTimestamp()
        });
      });
    }

    window.F1FirebaseAccount = {
      async signUp(email, password, displayName) {
        const credential = await createUserWithEmailAndPassword(auth, email, password);
        if (displayName) await updateProfile(credential.user, { displayName });
        await ensureUserWallet({
          uid: credential.user.uid,
          email: credential.user.email || '',
          displayName: displayName || credential.user.displayName || ''
        });
      },

      async signIn(email, password) {
        await signInWithEmailAndPassword(auth, email, password);
      },

      async updateProfilePreferences(preferences) {
        const user = auth.currentUser;
        if (!user) throw new Error('Sign in to save your profile.');
        await setDoc(doc(db, 'users', user.uid), {
          profileDriverId: preferences.profileDriverId || '',
          favoriteTeamId: preferences.favoriteTeamId || '',
          favoriteDriverId: preferences.favoriteDriverId || '',
          updatedAt: serverTimestamp()
        }, { merge: true });
      },

      async sendChatMessage(text) {
        const user = auth.currentUser;
        if (!user) throw new Error('Sign in to send chat messages.');
        const cleanText = String(text || '').replace(/\s+/g, ' ').trim().slice(0, 300);
        if (!cleanText) throw new Error('Write a message before sending.');
        const favoriteDriverId = state.wallet?.favoriteDriverId || '';
        const favoriteTeamColor = favoriteDriverChatColor(favoriteDriverId);
        await addDoc(collection(db, 'raceChat'), {
          text: cleanText,
          userId: user.uid,
          displayName: authUserName().slice(0, 40),
          favoriteDriverId,
          favoriteTeamColor,
          createdAt: serverTimestamp()
        });
      },

      async settleKimiWinPayout() {
        const user = auth.currentUser;
        if (!user) throw new Error('Sign in to claim your payout.');

        const predictionId = `${user.uid}-${KIMI_WIN_SETTLEMENT.categoryId}`;
        const walletRef = doc(db, 'users', user.uid);
        const predictionRef = doc(db, 'raceVotes', KIMI_WIN_SETTLEMENT.raceKey, 'f1BuckStakes', predictionId);

        await runTransaction(db, async transaction => {
          const walletSnapshot = await transaction.get(walletRef);
          const predictionSnapshot = await transaction.get(predictionRef);
          const manualStake = manualKimiStakeOverride();
          const prediction = predictionSnapshot.exists() ? predictionSnapshot.data() : manualStake;
          if (!prediction) throw new Error('No matching Kimi win stake found.');

          const missingSavedStake = !predictionSnapshot.exists();
          if (!missingSavedStake && prediction.userId !== user.uid) throw new Error('This stake belongs to another account.');
          if (prediction.categoryId !== KIMI_WIN_SETTLEMENT.categoryId || prediction.driverId !== KIMI_WIN_SETTLEMENT.driverId) {
            throw new Error('Only the Kimi race-winner stake can be settled here.');
          }
          if (!missingSavedStake && (prediction.settledAt || prediction.payoutReturn)) {
            throw new Error('This Kimi win payout was already credited.');
          }

          const stakeAmount = Math.max(0, Math.floor(Number(prediction.points) || 0));
          const profit = payoutProfitForStake(stakeAmount);
          const payoutCredit = prediction.creditMode === 'profit_only' ? profit : stakeAmount + profit;
          const currentBalance = walletSnapshot.exists()
            ? Number(walletSnapshot.data().f1BucksBalance) || 0
            : STARTING_F1_BUCKS;

          transaction.set(walletRef, {
            email: user.email || '',
            displayName: user.displayName || authUserName(),
            f1BucksBalance: currentBalance + payoutCredit,
            updatedAt: serverTimestamp()
          }, { merge: true });

          transaction.set(predictionRef, {
            userId: user.uid,
            categoryId: KIMI_WIN_SETTLEMENT.categoryId,
            driverId: KIMI_WIN_SETTLEMENT.driverId,
            voterName: prediction.voterName || authUserName(),
            points: stakeAmount,
            raceKey: KIMI_WIN_SETTLEMENT.raceKey,
            settledAt: serverTimestamp(),
            settledResult: `${KIMI_WIN_SETTLEMENT.winnerName} win`,
            payoutOdds: KIMI_WIN_SETTLEMENT.oddsLabel,
            payoutProfit: profit,
            payoutReturn: payoutCredit,
            payoutSource: KIMI_WIN_SETTLEMENT.source,
            payoutNote: missingSavedStake ? manualStake.overrideNote : 'Saved stake settled.',
            updatedAt: serverTimestamp()
          }, { merge: true });
        });
      },

      async settleLandoPolePayouts() {
        const user = auth.currentUser;
        if (!user || user.uid !== CREATOR_UID) throw new Error('Creator access only.');

        const stakesSnapshot = await getDocs(collectionGroup(db, 'f1BuckStakes'));
        const eligibleStakes = stakesSnapshot.docs
          .map(stakeDoc => ({ id: stakeDoc.id, ref: stakeDoc.ref, data: stakeDoc.data() }))
          .filter(stake => (
            (stake.data.raceKey || stake.ref.parent.parent?.id || '') === LANDO_POLE_SETTLEMENT.raceKey
            && stake.data.categoryId === LANDO_POLE_SETTLEMENT.categoryId
            && stake.data.driverId === LANDO_POLE_SETTLEMENT.driverId
            && !stake.data.settledAt
            && !stake.data.payoutReturn
          ));

        if (!eligibleStakes.length) return { creditedUsers: 0, creditedTotal: 0 };

        await runTransaction(db, async transaction => {
          const walletReads = [];
          for (const stake of eligibleStakes) {
            const userId = stake.data.userId;
            if (!userId) continue;
            walletReads.push({
              stake,
              walletRef: doc(db, 'users', userId),
              walletSnapshot: await transaction.get(doc(db, 'users', userId))
            });
          }

          for (const item of walletReads) {
            const prediction = item.stake.data;
            const stakeAmount = Math.max(0, Math.floor(Number(prediction.points) || 0));
            const profit = payoutProfitForStake(stakeAmount, LANDO_POLE_SETTLEMENT);
            const payoutCredit = payoutReturnForStake(stakeAmount, LANDO_POLE_SETTLEMENT);
            const currentBalance = item.walletSnapshot.exists()
              ? Number(item.walletSnapshot.data().f1BucksBalance) || 0
              : STARTING_F1_BUCKS;

            transaction.set(item.walletRef, {
              f1BucksBalance: currentBalance + payoutCredit,
              updatedAt: serverTimestamp()
            }, { merge: true });

            transaction.set(item.stake.ref, {
              raceKey: LANDO_POLE_SETTLEMENT.raceKey,
              settledAt: serverTimestamp(),
              settledResult: `${LANDO_POLE_SETTLEMENT.winnerName} pole`,
              payoutOdds: LANDO_POLE_SETTLEMENT.oddsLabel,
              payoutProfit: profit,
              payoutReturn: payoutCredit,
              payoutSource: LANDO_POLE_SETTLEMENT.source,
              payoutNote: 'Creator-settled Lando Norris pole-position payout.',
              updatedAt: serverTimestamp()
            }, { merge: true });
          }
        });

        return {
          creditedUsers: eligibleStakes.length,
          creditedTotal: eligibleStakes.reduce((total, stake) => total + payoutReturnForStake(stake.data.points, LANDO_POLE_SETTLEMENT), 0)
        };
      },

      async loadCreatorDashboard() {
        const user = auth.currentUser;
        if (!user || user.uid !== CREATOR_UID) throw new Error('Creator access only.');
        const [usersSnapshot, stakesSnapshot] = await Promise.all([
          getDocs(collection(db, 'users')),
          getDocs(collectionGroup(db, 'f1BuckStakes'))
        ]);

        state.creatorProfiles = usersSnapshot.docs.map(userDoc => {
          const data = userDoc.data();
          return {
            id: userDoc.id,
            displayName: data.displayName || 'F1 fan',
            f1BucksBalance: Number(data.f1BucksBalance) || 0,
            profileDriverId: data.profileDriverId || '',
            favoriteTeamId: data.favoriteTeamId || '',
            favoriteDriverId: data.favoriteDriverId || ''
          };
        }).sort((a, b) => a.displayName.localeCompare(b.displayName));

        state.creatorStakes = stakesSnapshot.docs.map(stakeDoc => {
          const data = stakeDoc.data();
          return {
            id: stakeDoc.id,
            raceKey: data.raceKey || stakeDoc.ref.parent.parent?.id || '',
            userId: data.userId || '',
            categoryId: data.categoryId || '',
            driverId: data.driverId || '',
            points: Number(data.points) || 0,
            settledAt: data.settledAt?.toMillis?.() || 0,
            payoutReturn: Number(data.payoutReturn) || 0,
            updatedAt: data.updatedAt?.toMillis?.() || 0
          };
        }).sort((a, b) => Number(b.updatedAt || 0) - Number(a.updatedAt || 0));
      },

      async signOut() {
        await firebaseSignOut(auth);
      }
    };

    onAuthStateChanged(auth, async user => {
      if (state.walletUnsubscribe) {
        state.walletUnsubscribe();
        state.walletUnsubscribe = null;
      }
      if (state.payoutUnsubscribe) {
        state.payoutUnsubscribe();
        state.payoutUnsubscribe = null;
      }
      if (state.chatUnsubscribe) {
        state.chatUnsubscribe();
        state.chatUnsubscribe = null;
      }

      state.authReady = true;
      state.authError = '';
      state.authUser = user ? {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || ''
      } : null;
      state.wallet = null;
      state.kimiPayoutStake = null;
      state.chatMessages = [];
      state.chatReady = false;

      if (!user) {
        window.F1FirebaseVotes?.listen(voteRaceKey());
        renderAccountPanel();
        renderAccountPage();
        renderVotingPanel();
        renderChat();
        return;
      }

      try {
        await ensureUserWallet(user);
        window.F1FirebaseVotes?.listen(voteRaceKey());
        state.walletUnsubscribe = onSnapshot(doc(db, 'users', user.uid), snapshot => {
          state.wallet = snapshot.exists() ? snapshot.data() : null;
          renderAccountPanel();
          renderAccountPage();
          renderVotingPanel();
          renderChat();
          if (isCreator()) loadCreatorDashboard();
        }, error => {
          console.warn('Firebase wallet unavailable.', error);
          state.authError = 'Wallet could not load. Check Firebase users rules.';
          renderAccountPanel();
        });
        const kimiStakeRef = doc(db, 'raceVotes', KIMI_WIN_SETTLEMENT.raceKey, 'f1BuckStakes', `${user.uid}-${KIMI_WIN_SETTLEMENT.categoryId}`);
        state.payoutUnsubscribe = onSnapshot(kimiStakeRef, snapshot => {
          state.kimiPayoutStake = snapshot.exists()
            ? { id: snapshot.id, ...snapshot.data() }
            : null;
          renderAccountPage();
        }, error => {
          console.warn('Kimi payout stake unavailable.', error);
          state.kimiPayoutError = 'Kimi payout stake could not load. Check Firebase f1BuckStakes rules.';
          renderAccountPage();
        });
        const chatQuery = query(collection(db, 'raceChat'), orderBy('createdAt', 'desc'), limit(80));
        state.chatUnsubscribe = onSnapshot(chatQuery, snapshot => {
          state.chatMessages = snapshot.docs
            .map(messageDoc => ({ id: messageDoc.id, ...messageDoc.data() }))
            .sort((a, b) => {
              const left = a.createdAt?.toMillis?.() || 0;
              const right = b.createdAt?.toMillis?.() || 0;
              return left - right;
            });
          state.chatReady = true;
          state.chatError = '';
          renderChat();
        }, error => {
          console.warn('Firebase chat unavailable.', error);
          state.chatReady = false;
          state.chatError = 'Race chat could not load. Publish the raceChat Firestore rules from FIREBASE_SETUP.md, then refresh.';
          renderChat();
        });
      } catch (error) {
        console.warn('Firebase wallet setup failed.', error);
        state.authError = 'Wallet could not be created. Check Firebase users rules.';
        renderAccountPanel();
        renderAccountPage();
        renderChat();
      }
    });

    window.F1FirebaseVotes = {
      listen(raceKey) {
        state.firebaseUnsubscribers.forEach(unsubscribe => unsubscribe());
        state.firebaseUnsubscribers = [];
        state.firebaseVotes = {};
        state.firebaseUserVotes = {};
        state.firebasePointPredictions = [];

        const totalsRef = collection(db, 'raceVotes', raceKey, 'categories');
        const userRef = collection(db, 'raceVotes', raceKey, 'users', voteUserId(), 'categories');
        const stakesRef = collection(db, 'raceVotes', raceKey, 'f1BuckStakes');
        const pointPredictionsRef = auth.currentUser ? stakesRef : null;

        const onFirebaseSnapshotError = error => {
          state.firebaseUnsubscribers.forEach(unsubscribe => unsubscribe());
          state.firebaseUnsubscribers = [];
          handleFirebaseVotingError(error);
        };

        state.firebaseUnsubscribers.push(onSnapshot(totalsRef, snapshot => {
          snapshot.forEach(categoryDoc => {
            state.firebaseVotes[categoryDoc.id] = categoryDoc.data()?.totals || {};
          });
          renderVotingPanel();
        }, onFirebaseSnapshotError));

        state.firebaseUnsubscribers.push(onSnapshot(userRef, snapshot => {
          snapshot.forEach(categoryDoc => {
            state.firebaseUserVotes[categoryDoc.id] = categoryDoc.data()?.driverId || null;
          });
          renderVotingPanel();
        }, onFirebaseSnapshotError));

        if (pointPredictionsRef) {
          state.firebaseUnsubscribers.push(onSnapshot(pointPredictionsRef, snapshot => {
            state.firebasePointPredictions = snapshot.docs.map(predictionDoc => ({
              id: predictionDoc.id,
              ...predictionDoc.data()
            }));
            renderVotingPanel();
            renderAccountPage();
          }, onFirebaseSnapshotError));
        } else {
          state.firebasePointPredictions = [];
          renderVotingPanel();
          renderAccountPage();
        }
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
      },

      async savePointPrediction(raceKey, prediction) {
        const user = auth.currentUser;
        if (!user) throw new Error('Sign in to stake F1 Bucks.');
        const walletRef = doc(db, 'users', user.uid);
        const predictionRef = doc(db, 'raceVotes', raceKey, 'f1BuckStakes', prediction.id);

        await runTransaction(db, async transaction => {
          const walletSnapshot = await transaction.get(walletRef);
          const predictionSnapshot = await transaction.get(predictionRef);
          const currentBalance = walletSnapshot.exists()
            ? Number(walletSnapshot.data().f1BucksBalance) || 0
            : STARTING_F1_BUCKS;
          const previousStake = predictionSnapshot.exists()
            ? Number(predictionSnapshot.data().points) || 0
            : 0;
          const stakeDifference = prediction.points - previousStake;

          if (stakeDifference > currentBalance) {
            throw new Error('Not enough F1 Bucks for that stake.');
          }

          const walletData = {
            email: user.email || '',
            displayName: user.displayName || authUserName(),
            f1BucksBalance: currentBalance - stakeDifference,
            updatedAt: serverTimestamp()
          };
          if (!walletSnapshot.exists()) walletData.createdAt = serverTimestamp();
          transaction.set(walletRef, walletData, { merge: true });

          transaction.set(predictionRef, {
            userId: user.uid,
            categoryId: prediction.categoryId,
            driverId: prediction.driverId,
            voterName: prediction.voterName,
            points: prediction.points,
            raceKey,
            updatedAt: serverTimestamp()
          }, { merge: true });
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
    handleFirebaseVotingError(error);
  }
}

async function loadCreatorDashboard() {
  if (!isCreator()) {
    renderCreatorDashboard();
    return;
  }
  if (!window.F1FirebaseAccount?.loadCreatorDashboard) {
    state.creatorDashboardError = 'Creator dashboard is still connecting.';
    renderCreatorDashboard();
    return;
  }

  state.creatorDashboardLoading = true;
  state.creatorDashboardError = '';
  renderCreatorDashboard();
  try {
    await window.F1FirebaseAccount.loadCreatorDashboard();
  } catch (error) {
    console.warn('Creator dashboard unavailable.', error);
    state.creatorDashboardError = 'Creator dashboard could not load. Check CREATOR_UID and Firebase rules.';
  } finally {
    state.creatorDashboardLoading = false;
    renderCreatorDashboard();
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
  renderAccountPage();
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
  const override = RESULT_OVERRIDES[round];
  if (override?.Results?.length) return { round, ...override, isOverride: true };
  return state.results.find(race => race.round === round);
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
    <table class="session-table qualifying-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>No.</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Q1</th>
          <th>Q2</th>
          <th>Q3</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr style="--team-color: ${teamColor(row.Constructor?.constructorId)}">
            <td><span class="session-position">${escapeHtml(row.position)}</span></td>
            <td>${escapeHtml(row.number)}</td>
            <td>${driverIdentityHtml(row.Driver)}${row.note ? `<small class="grid-note">${escapeHtml(row.note)}</small>` : ''}</td>
            <td><span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span></td>
            <td>${escapeHtml(row.q1 || '-')}</td>
            <td>${escapeHtml(row.q2 || '-')}</td>
            <td>${escapeHtml(row.q3 || '-')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function startingGridRowsHtml(rows = []) {
  if (!rows.length) return '<div class="empty-state">Official race starting grid is not available yet.</div>';
  return `
    <table class="session-table starting-grid-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>No.</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => {
      const time = row.q3 || row.q2 || row.q1 || '-';
      return `
          <tr style="--team-color: ${teamColor(row.Constructor?.constructorId)}">
            <td><span class="session-position">${escapeHtml(row.position)}</span></td>
            <td>${escapeHtml(row.number)}</td>
            <td>${driverIdentityHtml(row.Driver)}${row.note ? `<small class="grid-note">${escapeHtml(row.note)}</small>` : ''}</td>
            <td><span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span></td>
            <td>${escapeHtml(time)}</td>
          </tr>
    `;
    }).join('')}
      </tbody>
    </table>
  `;
}

function practiceRowsHtml(rows = []) {
  if (!rows.length) return '<div class="empty-state">Official practice results are not available yet.</div>';
  return `
    <table class="session-table practice-table">
      <thead>
        <tr>
          <th>Pos</th>
          <th>No.</th>
          <th>Driver</th>
          <th>Team</th>
          <th>Time</th>
          <th>Gap</th>
          <th>Laps</th>
        </tr>
      </thead>
      <tbody>
        ${rows.map(row => `
          <tr style="--team-color: ${teamColor(row.Constructor?.constructorId)}">
            <td><span class="session-position">${escapeHtml(row.position)}</span></td>
            <td>${escapeHtml(row.number)}</td>
            <td>${driverIdentityHtml(row.Driver)}</td>
            <td><span class="team-chip" style="--team-color: ${teamColor(row.Constructor?.constructorId)}">${escapeHtml(constructorName(row.Constructor))}</span></td>
            <td>${escapeHtml(row.time || '-')}</td>
            <td>${escapeHtml(row.gap || '-')}</td>
            <td>${escapeHtml(row.laps || '-')}</td>
          </tr>
        `).join('')}
      </tbody>
    </table>
  `;
}

function practiceSessionsHtml(sessions = []) {
  if (!sessions.length) return '';
  return `
    <section class="starting-grid-panel race-practice-panel" aria-labelledby="racePracticeTitle">
      <div class="starting-grid-head">
        <div>
          <p class="eyebrow">Official practice tables</p>
          <h3 id="racePracticeTitle">Practice results</h3>
        </div>
        <span>${escapeHtml(sessions.length)} sessions published</span>
      </div>
      <div class="practice-session-stack">
        ${sessions.map(session => `
          <article class="practice-session-card">
            <div class="starting-grid-head">
              <div>
                <p class="eyebrow">Hungary</p>
                <h4>${escapeHtml(session.title || 'Practice')}</h4>
              </div>
              ${session.sourceUrl ? `<a class="starting-grid-source" href="${escapeHtml(session.sourceUrl)}" target="_blank" rel="noreferrer">Official F1 ${escapeHtml(session.title || 'practice')}</a>` : ''}
            </div>
            <div class="starting-grid-list">${practiceRowsHtml(session.rows || [])}</div>
          </article>
        `).join('')}
      </div>
    </section>
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

    ${practiceSessionsHtml(grid?.practiceSessions || [])}

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
  const focusImage = location.country === 'UK' ? SILVERSTONE_IMAGE : RACE_FOCUS_IMAGE;
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
    <div class="race-focus-title-row">
      <h3>${escapeHtml(displayRaceName(race))}</h3>
      <button class="practice-results-button" type="button" data-practice-round="${escapeHtml(race.round)}">See practice results</button>
    </div>
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
  els.raceFocus.querySelector('[data-practice-round]')?.addEventListener('click', event => {
    const round = event.currentTarget.dataset.practiceRound;
    state.selectedRaceRound = round;
    renderRaceDetail(round);
    history.pushState(null, '', `#race-${round}`);
    setActivePage('race-detail');
    renderSchedule();
  });
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
  const locked = racePredictionsLocked();
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
      <button class="vote-open" type="button" data-vote-category="${escapeHtml(category.id)}" ${locked ? 'disabled' : ''}>${locked ? 'Locked' : (data.userVote ? 'Change vote' : 'Vote')}</button>
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

function renderPointPredictionPanel() {
  if (!els.pointsPredictionForm) return;
  const race = activePredictionRace();
  const locked = racePredictionsLocked(race);
  const drivers = voteDrivers();
  const modeLabel = locked
    ? 'Stakes locked - race started'
    : (state.voteMode === 'firebase' ? 'Live Firebase F1 Bucks board' : 'Local preview F1 Bucks board');
  const needsSignIn = state.voteMode === 'firebase' && !state.authUser;
  const predictions = racePointPredictions()
    .map(item => {
      const row = drivers.find(driverRow => driverRow.Driver?.driverId === item.driverId);
      return row ? { ...item, row } : null;
    })
    .filter(Boolean)
    .sort((a, b) => Number(b.points) - Number(a.points) || Number(b.updatedAt || 0) - Number(a.updatedAt || 0));
  const selectedCategory = els.pointsPredictionCategory.value || POINT_PREDICTION_CATEGORIES[0]?.id || '';
  const selectedDriver = els.pointsPredictionDriver.value || drivers[0]?.Driver?.driverId || '';

  els.pointsPredictionCategory.innerHTML = POINT_PREDICTION_CATEGORIES
    .map(category => `<option value="${escapeHtml(category.id)}">${escapeHtml(category.title)}</option>`)
    .join('');
  els.pointsPredictionDriver.innerHTML = drivers.length
    ? drivers.map(row => `<option value="${escapeHtml(row.Driver.driverId)}">${driverFlag(row.Driver)} ${escapeHtml(driverName(row.Driver))} · ${escapeHtml(constructorName(row.Constructors?.[0]))}</option>`).join('')
    : '<option value="">Drivers loading</option>';
  els.pointsPredictionCategory.value = selectedCategory;
  els.pointsPredictionDriver.value = selectedDriver;

  els.pointsPredictionCategory.disabled = locked || state.pointPredictionSubmitting;
  els.pointsPredictionDriver.disabled = locked || state.pointPredictionSubmitting;
  els.pointsPredictionPoints.disabled = locked || state.pointPredictionSubmitting;

  els.pointsPredictionForm.querySelector('.points-prediction-submit').disabled = state.pointPredictionSubmitting || !drivers.length || needsSignIn || locked;
  els.pointsPredictionForm.querySelector('.points-prediction-submit').textContent = state.pointPredictionSubmitting
    ? 'Saving...'
    : (locked ? 'Stakes closed' : (needsSignIn ? 'Sign in to stake' : 'Submit F1 Bucks'));

  els.pointsPredictionError.hidden = !state.pointPredictionError;
  els.pointsPredictionError.textContent = state.pointPredictionError;

  const groupedHtml = POINT_PREDICTION_CATEGORIES.map(category => {
    const rows = predictions.filter(item => item.categoryId === category.id).slice(0, 6);
    return `
      <article class="points-prediction-card">
        <h4>${escapeHtml(category.title)}</h4>
        ${rows.length ? rows.map(item => {
          const team = item.row.Constructors?.[0] || {};
          return `
            <div class="points-prediction-row" style="--team-color: ${teamColor(team.constructorId)}">
              <span>
                <strong>${escapeHtml(item.voterName || authUserName())}</strong>
                <small>${driverIdentityHtml(item.row.Driver)} · ${escapeHtml(constructorName(team))}</small>
              </span>
              <b>${escapeHtml(item.points)} F1 Bucks</b>
            </div>
          `;
        }).join('') : '<p class="empty-state">No F1 Bucks predictions yet.</p>'}
      </article>
    `;
  }).join('');

  els.pointsPredictionList.innerHTML = `
    <div class="points-prediction-status">${escapeHtml(modeLabel)}</div>
    ${locked && race ? `<p class="empty-state">Stakes closed when ${escapeHtml(displayRaceName(race))} started. Saved stakes stay visible below.</p>` : ''}
    ${needsSignIn ? '<p class="empty-state">Sign in with email to use your F1 Bucks wallet.</p>' : ''}
    ${groupedHtml}
  `;
}

function renderVotingPanel() {
  const race = activePredictionRace();
  if (!els.nextRaceVotePanel) return;
  if (!race || !state.drivers.length) {
    els.voteRaceName.textContent = 'Waiting for next race';
    els.voteCategoryGrid.innerHTML = '<div class="empty-state">Voting opens when the next race and driver list are loaded.</div>';
    els.votePicker.hidden = true;
    renderPointPredictionPanel();
    return;
  }

  const locked = racePredictionsLocked(race);
  const modeLabel = locked
    ? 'Predictions locked - race started'
    : (state.voteMode === 'firebase' ? 'Shared live voting' : 'Local preview voting');
  if (locked) {
    state.activeVoteCategory = null;
    state.pendingVoteDriverId = null;
  }
  els.voteRaceName.textContent = `${displayRaceName(race)} · Round ${race.round} · ${modeLabel}`;
  els.voteCategoryGrid.innerHTML = VOTE_CATEGORIES.map(voteCategoryCard).join('');
  renderVotePicker();
  renderPointPredictionPanel();
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

function teamProfileRows() {
  const rows = [];
  const seen = new Set();

  state.constructors.forEach((row, index) => {
    const constructor = row.Constructor || {};
    const id = constructor.constructorId;
    if (!id || seen.has(id)) return;
    seen.add(id);
    rows.push({
      constructor,
      points: row.points || '0',
      wins: row.wins || '0',
      rank: row.position || String(index + 1)
    });
  });

  state.drivers.forEach(row => {
    const constructor = row.Constructors?.[0] || {};
    const id = constructor.constructorId;
    if (!id || seen.has(id)) return;
    seen.add(id);
    rows.push({
      constructor,
      points: '0',
      wins: '0',
      rank: 'TBC'
    });
  });

  return rows;
}

function teamDrivers(constructorId = '') {
  return state.drivers
    .filter(row => row.Constructors?.[0]?.constructorId === constructorId)
    .map(row => row.Driver);
}

function renderTeamProfiles() {
  if (!els.teamProfileGrid) return;
  const rows = teamProfileRows();
  els.teamProfileGrid.innerHTML = rows.length ? rows.map((row, index) => {
    const id = row.constructor.constructorId;
    const color = teamColor(id);
    const drivers = teamDrivers(id);
    const carImage = teamCarImage(id);
    const carHtml = carImage
      ? `<img class="team-profile-car" src="${escapeHtml(carImage)}" alt="${escapeHtml(constructorName(row.constructor))} 2026 car" loading="lazy">`
      : '';
    return `
      <article class="team-profile-card ${index % 2 ? 'is-offset' : ''}" style="--team-color: ${color}; --profile-text: ${readableTextColor(color)}; --profile-muted: ${readableMutedColor(color)}">
        <div class="team-profile-content">
          <div class="team-profile-top">
            <div class="team-profile-logo">${teamLogoHtml(row.constructor)}</div>
            <div>
              <span class="profile-meta">Constructor rank ${escapeHtml(row.rank)}</span>
              <strong>${escapeHtml(constructorName(row.constructor))}</strong>
              <p>${escapeHtml(row.points)} championship points · ${escapeHtml(row.wins)} wins</p>
            </div>
          </div>
          <div class="team-profile-drivers" aria-label="${escapeHtml(constructorName(row.constructor))} drivers">
            ${drivers.length ? drivers.map(driver => `
              <span>${driverFlag(driver)} ${escapeHtml(driverName(driver))}</span>
            `).join('') : '<span>Drivers TBC</span>'}
          </div>
        </div>
        ${carHtml}
      </article>
    `;
  }).join('') : `
    <article class="team-profile-card team-profile-empty">
      <span class="profile-meta">Live API</span>
      <strong>Team profiles pending</strong>
      <p>Team cards fill automatically from the 2026 constructor standings.</p>
    </article>
  `;
}

function renderProfiles() {
  const profiles = state.drivers.length ? state.drivers : [];
  els.profileGrid.innerHTML = profiles.length ? profiles.map(row => {
    const team = row.Constructors?.[0] || {};
    const color = teamColor(team.constructorId);
    const image = state.driverImages[row.Driver?.driverId];
    const imageHtml = image
      ? `<img class="profile-photo" src="${escapeHtml(image)}" alt="${escapeHtml(driverName(row.Driver))}">`
      : `<div class="profile-photo profile-photo-fallback" aria-hidden="true">${escapeHtml(driverName(row.Driver).split(' ').map(part => part[0]).join('').slice(0, 2))}</div>`;
    return `
      <article class="profile-card" style="--team-color: ${color}; --profile-text: ${readableTextColor(color)}; --profile-muted: ${readableMutedColor(color)}" data-driver-id="${escapeHtml(row.Driver?.driverId)}" tabindex="0" role="button" aria-label="${escapeHtml(driverName(row.Driver))} profile card">
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

  renderTeamProfiles();
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
  renderAccountPanel();
  renderAccountPage();
  renderSummary();
  renderStartingGrid();
  renderSchedule();
  renderRaceDetail();
  renderResultSelector();
  renderVotingPanel();
  renderStandings();
  renderProfiles();
  renderQuotes();
  renderChat();
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
applyTheme();
els.themeToggle?.addEventListener('click', toggleTheme);
els.accountToggle?.addEventListener('click', () => {
  if (!els.accountPanel) return;
  if (state.authUser) {
    els.accountPanel.hidden = true;
    history.pushState(null, '', '#account');
    setActivePage('account');
    renderAccountPage();
    return;
  }
  els.accountPanel.hidden = !els.accountPanel.hidden;
  renderAccountPanel();
});

els.accountForm?.addEventListener('submit', async event => {
  event.preventDefault();
  const email = els.accountEmail.value.trim();
  const password = els.accountPassword.value;

  if (!window.F1FirebaseAccount?.signIn) {
    state.authError = 'Firebase Auth is still connecting. Try again in a moment.';
    renderAccountPanel();
    return;
  }

  state.authError = '';
  renderAccountPanel();
  try {
    await window.F1FirebaseAccount.signIn(email, password);
    els.accountPassword.value = '';
    els.accountPanel.hidden = true;
    history.pushState(null, '', '#account');
    setActivePage('account');
  } catch (error) {
    state.authError = authErrorMessage(error);
    renderAccountPanel();
  }
});

els.accountSignUp?.addEventListener('click', async () => {
  const email = els.accountEmail.value.trim();
  const password = els.accountPassword.value;
  const displayName = sanitizePredictionName(els.accountName.value);

  if (!window.F1FirebaseAccount?.signUp) {
    state.authError = 'Firebase Auth is still connecting. Try again in a moment.';
    renderAccountPanel();
    return;
  }

  state.authError = '';
  renderAccountPanel();
  try {
    await window.F1FirebaseAccount.signUp(email, password, displayName);
    els.accountPassword.value = '';
    els.accountPanel.hidden = true;
    history.pushState(null, '', '#account');
    setActivePage('account');
  } catch (error) {
    state.authError = authErrorMessage(error);
    renderAccountPanel();
  }
});

els.accountSignOut?.addEventListener('click', async () => {
  if (!window.F1FirebaseAccount?.signOut) return;
  state.authError = '';
  try {
    await window.F1FirebaseAccount.signOut();
  } catch (error) {
    state.authError = authErrorMessage(error);
  }
  renderAccountPanel();
  renderAccountPage();
});

els.accountPageSignOut?.addEventListener('click', async () => {
  if (!window.F1FirebaseAccount?.signOut) return;
  state.authError = '';
  try {
    await window.F1FirebaseAccount.signOut();
    history.pushState(null, '', '#home');
    setActivePage('home');
  } catch (error) {
    state.accountProfileError = authErrorMessage(error);
  }
  renderAccountPanel();
  renderAccountPage();
});

els.chatInput?.addEventListener('input', renderChat);

els.chatForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (state.chatSubmitting) return;
  const text = els.chatInput?.value || '';

  if (!state.authUser) {
    state.chatError = 'Sign in before sending a race chat message.';
    renderChat();
    return;
  }
  if (!window.F1FirebaseAccount?.sendChatMessage) {
    state.chatError = 'Firebase chat is still connecting. Try again in a moment.';
    renderChat();
    return;
  }
  if (!text.trim()) {
    state.chatError = 'Write a message before sending.';
    renderChat();
    return;
  }

  state.chatSubmitting = true;
  state.chatError = '';
  renderChat();
  try {
    await window.F1FirebaseAccount.sendChatMessage(text);
    els.chatInput.value = '';
  } catch (error) {
    console.error(error);
    state.chatError = error?.code?.includes('permission-denied')
      ? 'Firebase rules are blocking race chat. Publish the raceChat rules from FIREBASE_SETUP.md, then refresh.'
      : (error?.message || 'Race chat message did not send. Try again.');
  } finally {
    state.chatSubmitting = false;
    renderChat();
  }
});

els.refreshCreatorDashboard?.addEventListener('click', loadCreatorDashboard);

els.creatorDashboard?.addEventListener('click', async event => {
  if (!event.target.closest('#creditLandoPolePayouts')) return;
  if (state.creatorPayoutSubmitting) return;
  if (!state.authUser || !window.F1FirebaseAccount?.settleLandoPolePayouts) {
    state.creatorPayoutError = 'Sign in with the creator account before crediting Lando pole payouts.';
    state.creatorPayoutMessage = '';
    renderCreatorDashboard();
    return;
  }

  state.creatorPayoutSubmitting = true;
  state.creatorPayoutError = '';
  state.creatorPayoutMessage = '';
  renderCreatorDashboard();

  try {
    const result = await window.F1FirebaseAccount.settleLandoPolePayouts();
    state.creatorPayoutMessage = `Credited ${result.creditedUsers} Lando pole payout${result.creditedUsers === 1 ? '' : 's'} for ${formatF1Bucks(result.creditedTotal)} total.`;
    await loadCreatorDashboard();
  } catch (error) {
    console.error(error);
    state.creatorPayoutError = error?.code?.includes('permission-denied') || error?.message?.toLowerCase?.().includes('permission')
      ? 'Firebase rules are blocking creator payouts. Publish the updated creator payout rules from FIREBASE_SETUP.md, then refresh and try again.'
      : (error?.message || 'Lando pole payouts could not be credited. Check Firebase rules, then try again.');
  } finally {
    state.creatorPayoutSubmitting = false;
    renderCreatorDashboard();
  }
});

els.accountPage?.addEventListener('click', async event => {
  if (!event.target.closest('#claimKimiPayout')) return;
  if (state.kimiPayoutSubmitting) return;
  if (!state.authUser || !window.F1FirebaseAccount?.settleKimiWinPayout) {
    state.kimiPayoutError = 'Sign in before claiming the Kimi payout.';
    state.kimiPayoutMessage = '';
    renderAccountPage();
    return;
  }

  state.kimiPayoutSubmitting = true;
  state.kimiPayoutError = '';
  state.kimiPayoutMessage = '';
  renderAccountPage();

  try {
    await window.F1FirebaseAccount.settleKimiWinPayout();
    state.kimiPayoutMessage = 'Kimi win payout credited to your F1 Bucks balance.';
  } catch (error) {
    console.error(error);
    state.kimiPayoutError = error?.code?.includes('permission-denied') || error?.message?.toLowerCase?.().includes('permission')
      ? 'Firebase rules are blocking your wallet payout. Publish the F1 Bucks payout rules from FIREBASE_SETUP.md, then refresh and claim again.'
      : (error?.message || 'Kimi payout could not be credited. Check Firebase rules, then try again.');
  } finally {
    state.kimiPayoutSubmitting = false;
    renderAccountPage();
  }
});

els.accountPreferencesForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (state.accountProfileSaving) return;
  if (!state.authUser || !window.F1FirebaseAccount?.updateProfilePreferences) {
    state.accountProfileError = 'Sign in before saving your profile.';
    renderAccountPage();
    return;
  }

  const preferences = {
    profileDriverId: els.profilePictureDriver.value,
    favoriteTeamId: els.favoriteTeam.value,
    favoriteDriverId: els.favoriteDriver.value
  };

  state.accountProfileSaving = true;
  state.accountProfileError = '';
  state.accountProfileMessage = '';
  renderAccountPage();

  try {
    await window.F1FirebaseAccount.updateProfilePreferences(preferences);
    state.wallet = {
      ...(state.wallet || {}),
      ...preferences
    };
    state.accountProfileMessage = 'Profile saved.';
  } catch (error) {
    state.accountProfileError = authErrorMessage(error);
  } finally {
    state.accountProfileSaving = false;
    renderAccountPage();
  }
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
    if (racePredictionsLocked()) {
      state.voteError = 'Predictions are locked because the race has started.';
      renderVotingPanel();
      return;
    }
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
    if (racePredictionsLocked()) {
      state.voteError = 'Predictions are locked because the race has started.';
      renderVotingPanel();
      return;
    }
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

els.pointsPredictionForm?.addEventListener('submit', async event => {
  event.preventDefault();
  if (state.pointPredictionSubmitting) return;

  const voterName = sanitizePredictionName(authUserName());
  const categoryId = els.pointsPredictionCategory.value;
  const driverId = els.pointsPredictionDriver.value;
  const points = normalizePredictionPoints(els.pointsPredictionPoints.value);

  if (racePredictionsLocked()) {
    state.pointPredictionError = 'Stakes are closed because the race has started. Saved stakes are still visible.';
    renderPointPredictionPanel();
    return;
  }

  if (state.voteMode === 'firebase' && !state.authUser) {
    state.pointPredictionError = 'Sign in before staking F1 Bucks live.';
    renderPointPredictionPanel();
    return;
  }

  if (!categoryId || !driverId || !points) {
    state.pointPredictionError = 'Choose a driver and add at least 1 F1 Buck.';
    renderPointPredictionPanel();
    return;
  }

  if (state.voteMode === 'firebase' && state.wallet && points > Number(state.wallet.f1BucksBalance || 0)) {
    state.pointPredictionError = `You only have ${formatF1Bucks(state.wallet.f1BucksBalance)} available.`;
    renderPointPredictionPanel();
    return;
  }

  state.pointPredictionSubmitting = true;
  state.pointPredictionError = '';
  renderPointPredictionPanel();

  try {
    await savePointPrediction({ voterName, categoryId, driverId, points });
    els.pointsPredictionPoints.value = '';
  } catch (error) {
    console.error(error);
    state.pointPredictionError = state.voteMode === 'firebase'
      ? 'F1 Bucks prediction did not save live. Check the f1BuckStakes rule in FIREBASE_SETUP.md, then try again.'
      : 'Prediction saved only on this browser. Refresh after Firebase connects to share it live.';
  } finally {
    state.pointPredictionSubmitting = false;
    renderVotingPanel();
  }
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

window.setInterval(() => {
  renderVotingPanel();
}, 60 * 1000);
