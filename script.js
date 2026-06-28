const SEASON = 2026;
const API_BASE = `https://api.jolpi.ca/ergast/f1/${SEASON}`;
const NEWS_FEEDS = [
  'https://feeds.bbci.co.uk/sport/formula1/rss.xml',
  'https://www.motorsport.com/rss/f1/news/'
];
const RACE_FOCUS_IMAGE = 'assets/race-focus-antonelli.png';

const POLYMARKET_EVENTS_API = 'https://gamma-api.polymarket.com/events';
const KALSHI_MARKETS_API = 'https://api.elections.kalshi.com/trade-api/v2/markets';

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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/330px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg',
    imagePosition: '72% center'
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg/330px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg',
    imagePosition: '74% center'
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg/330px-KingsLeonSilverstne040724_%2828_of_112%29_%2853838006028%29_%28cropped%29.jpg',
    imagePosition: '75% center'
  },
  {
    driver: 'Kimi Raikkonen',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'Just leave me alone, I know what to do.',
    context: 'Peak Kimi radio, delivered while leading in Abu Dhabi.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
    wikiTitle: 'Kimi_Räikkönen',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg/330px-F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg',
    imagePosition: '75% center'
  },
  {
    driver: 'Fernando Alonso',
    teamColor: TEAM_COLORS.mclaren,
    quote: 'GP2 engine! GP2!',
    context: 'A brutally memorable Honda-era radio message.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Fernando_Alonso',
    wikiTitle: 'Fernando_Alonso',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Alonso-68_%2824710447098%29.jpg/330px-Alonso-68_%2824710447098%29.jpg',
    imagePosition: '76% center'
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg/330px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3978_by_Stepro_%28cropped2%29.jpg',
    imagePosition: '72% center'
  },
  {
    driver: 'Kimi Raikkonen',
    teamColor: TEAM_COLORS.ferrari,
    quote: 'I was having a shit.',
    context: 'The most direct explanation for missing a ceremony.',
    source: 'Wikipedia',
    sourceUrl: 'https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen',
    wikiTitle: 'Kimi_Räikkönen',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg/330px-F12019_Schloss_Gabelhofen_%2822%29_%28cropped%29.jpg',
    imagePosition: '75% center'
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
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg/330px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3968_by_Stepro_%28cropped2%29.jpg',
    imagePosition: '74% center'
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
  }
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
  selectedRaceRound: null
};

function makeResult(position, driver, constructor, points) {
  return {
    position: String(position),
    positionText: String(position),
    Driver: driver,
    Constructor: constructor,
    grid: '-',
    laps: '-',
    status: 'Finished',
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

  if (!state.races.length) {
    els.dataStatus.textContent = 'API waiting';
    state.races = [];
  } else {
    els.dataStatus.textContent = 'Live data';
  }

  state.selectedRaceRound = state.races[0]?.round || state.results[0]?.round || null;
  renderAll();
  loadCityImages();
  loadDriverImages();
  loadQuoteImages();
  loadNextRaceOdds();
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

  if (resultRaces.length) renderResults(resultRaces[resultRaces.length - 1].round);
  else renderResults(null);

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

loadSeasonData().catch(error => {
  console.error(error);
  els.dataStatus.textContent = 'Offline';
  renderAll();
});
loadNews();
