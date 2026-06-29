const SEASON = 2026;
const API_BASE = `https://api.jolpi.ca/ergast/f1/${SEASON}`;
const NEWS_FEEDS = [
  'https://feeds.bbci.co.uk/sport/formula1/rss.xml',
  'https://www.motorsport.com/rss/f1/news/'
];
const RACE_FOCUS_IMAGE = 'assets/race-focus-antonelli.png';

const POLYMARKET_EVENTS_API = 'https://gamma-api.polymarket.com/events';
const KALSHI_MARKETS_API = 'https://api.elections.kalshi.com/trade-api/v2/markets';
const VOTE_STORAGE_KEY = `f1-${SEASON}-race-votes`;

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
  'Spielberg|Austria': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/2021-09-01_Spielberg_Stadtplatz.jpg/640px-2021-09-01_Spielberg_Stadtplatz.jpg'
};

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
    source: 'Formula 1'
  },
  {
    title: 'Driver market and team updates',
    description: 'The news panel is ready for driver-focused headlines as feeds become available.',
    link: 'https://www.bbc.com/sport/formula1',
    source: 'BBC Sport'
  },
  {
    title: 'Race weekend reports',
    description: 'Headlines refresh independently from schedule, standings, and result data.',
    link: 'https://www.motorsport.com/f1/news/',
    source: 'Motorsport.com'
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
  }
};

const CURRENT_DRIVER_POINTS = {
  antonelli: { points: 171, wins: 5 },
  russell: { points: 131, wins: 2 },
  hamilton: { points: 125, wins: 1 },
  piastri: { points: 80, wins: 0 },
  norris: { points: 79, wins: 0 },
  leclerc: { points: 79, wins: 0 },
  max_verstappen: { points: 73, wins: 0 },
  hadjar: { points: 42, wins: 0 },
  gasly: { points: 41, wins: 0 },
  lawson: { points: 30, wins: 0 },
  bearman: { points: 18, wins: 0 },
  colapinto: { points: 16, wins: 0 },
  arvid_lindblad: { points: 14, wins: 0 },
  sainz: { points: 6, wins: 0 },
  albon: { points: 5, wins: 0 },
  ocon: { points: 3, wins: 0 },
  bortoleto: { points: 2, wins: 0 },
  alonso: { points: 1, wins: 0 }
};

const CURRENT_CONSTRUCTOR_POINTS = {
  mercedes: { points: 302, wins: 7 },
  ferrari: { points: 204, wins: 1 },
  mclaren: { points: 159, wins: 0 },
  red_bull: { points: 115, wins: 0 },
  alpine: { points: 57, wins: 0 },
  rb: { points: 44, wins: 0 },
  haas: { points: 21, wins: 0 },
  williams: { points: 11, wins: 0 },
  audi: { points: 2, wins: 0 },
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
  pendingVoteDriverId: null
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
  raceFocus: document.querySelector('#raceFocus'),
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

function voteRaceKey() {
  const race = nextRace();
  return race ? `${SEASON}-round-${race.round}` : `${SEASON}-next-race`;
}

function emptyVoteCategory() {
  return { totals: {}, userVote: null };
}

function getVoteCategory(categoryId) {
  const store = readVoteStore();
  const raceKey = voteRaceKey();
  return store[raceKey]?.categories?.[categoryId] || emptyVoteCategory();
}

function saveVote(categoryId, driverId) {
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
    'Silverstone|UK': 'Silverstone Circuit',
    'Zandvoort|Netherlands': 'Zandvoort'
  };
  return specialTitles[cityImageKey(location)] || [city, country].filter(Boolean).join(', ');
}

async function loadCityImages() {
  const locations = state.races
    .map(race => race.Circuit?.Location)
    .filter(location => location?.locality && !state.cityImages[cityImageKey(location)]);

  await Promise.allSettled(locations.map(async location => {
    const title = cityWikiTitle(location);
    if (!title) return;
    const summary = await fetchJson(`https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`);
    const image = summary.thumbnail?.source || summary.originalimage?.source;
    if (image) state.cityImages[cityImageKey(location)] = image;
  }));

  renderSchedule();
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

function addOddsRow(map, name, source, percent, url = '') {
  if (!name || !Number.isFinite(percent)) return;
  const driver = findDriverByMarketName(name);
  const displayName = driver ? driverName(driver) : name;
  const key = normalizeName(displayName);
  if (!key || key === 'yes' || key === 'no') return;
  const existing = map.get(key) || { name: displayName, driver, polymarket: null, kalshi: null, external: null, sources: {} };
  existing[source] = percent;
  if (url) existing.sources[source] = url;
  if (!existing.driver && driver) existing.driver = driver;
  map.set(key, existing);
}

function normalizeOddsRows(map) {
  return [...map.values()].map(row => {
    const values = [row.polymarket, row.kalshi, row.external].filter(value => Number.isFinite(value));
    const average = values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
    return { ...row, average };
  }).filter(row => row.average > 0).sort((a, b) => b.average - a.average).slice(0, 8);
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
  preview.rows.forEach(row => addOddsRow(map, row.name, 'external', row.percent, preview.url));
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
          pubDate: item.querySelector('pubDate')?.textContent || ''
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
    const cityImage = state.cityImages[cityImageKey(location)] || CITY_IMAGE_FALLBACKS[cityImageKey(location)];
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
      renderSchedule();
    });
  });

  renderRaceFocus(nextRace() || filtered[0]);
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
  const cityImage = state.cityImages[cityImageKey(location)] || CITY_IMAGE_FALLBACKS[cityImageKey(location)];
  if (RACE_FOCUS_IMAGE || cityImage) {
    els.raceFocus.style.setProperty('--focus-image', `url('${RACE_FOCUS_IMAGE || cityImage}')`);
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
          <span>${topPick ? `${topPick.average.toFixed(1)}%` : '--'}</span>
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
              <strong>${row.average.toFixed(1)}%</strong>
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
    <p class="odds-source">Odds source: external Austrian Grand Prix betting preview, with prediction-market sync checked in the background when matching markets are available.</p>
  `;
}

function renderResultSelector() {
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
  const race = raceResult(round);
  if (!race?.Results?.length) {
    els.resultsBody.innerHTML = '<tr><td colspan="7">No classified 2026 race result is available yet.</td></tr>';
    return;
  }
  els.resultsBody.innerHTML = race.Results.map(result => `
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
      <button class="vote-submit" type="button" ${selectedDriverId ? '' : 'disabled'}>Submit vote</button>
      <button class="vote-cancel" type="button">Cancel</button>
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

  els.voteRaceName.textContent = `${displayRaceName(race)} · Round ${race.round}`;
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
  els.newsGrid.innerHTML = state.news.map(story => `
    <article class="news-card">
      <div>
        <span class="news-meta">${escapeHtml(story.source || 'Motorsport news')}</span>
        <strong>${escapeHtml(story.title)}</strong>
        <p>${escapeHtml(story.description || 'Open the story for the full report.')}</p>
      </div>
      <a href="${escapeHtml(story.link)}" target="_blank" rel="noreferrer">Read story</a>
    </article>
  `).join('');
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
  renderSchedule();
  renderResultSelector();
  renderVotingPanel();
  renderStandings();
  renderProfiles();
  renderQuotes();
}

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    state.filter = button.dataset.filter;
    renderSchedule();
  });
});

els.refreshNews.addEventListener('click', loadNews);

els.nextRaceVotePanel?.addEventListener('click', event => {
  const openButton = event.target.closest('[data-vote-category]');
  if (openButton) {
    state.activeVoteCategory = openButton.dataset.voteCategory;
    state.pendingVoteDriverId = getVoteCategory(state.activeVoteCategory).userVote;
    renderVotingPanel();
    return;
  }

  if (event.target.closest('.vote-close') || event.target.closest('.vote-cancel')) {
    state.activeVoteCategory = null;
    state.pendingVoteDriverId = null;
    renderVotingPanel();
    return;
  }

  if (event.target.closest('.vote-submit')) {
    if (!state.activeVoteCategory || !state.pendingVoteDriverId) return;
    saveVote(state.activeVoteCategory, state.pendingVoteDriverId);
    state.activeVoteCategory = null;
    state.pendingVoteDriverId = null;
    renderVotingPanel();
  }
});

els.nextRaceVotePanel?.addEventListener('change', event => {
  if (event.target.name !== 'vote-driver') return;
  state.pendingVoteDriverId = event.target.value;
  renderVotePicker();
});

loadSeasonData().catch(error => {
  console.error(error);
  els.dataStatus.textContent = 'Offline';
  renderAll();
});
loadNews();
