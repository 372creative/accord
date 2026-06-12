/**
 * Converts the Accord fragrance seed spreadsheet into src/data/fragrances.ts.
 *
 * Usage:
 *   node scripts/convert-fragrances.mjs <path-to-xlsx>
 *
 * Normalization rules:
 * - "A; B; C" cells become ["A", "B", "C"]
 * - seasons/occasions are mapped onto a canonical vocabulary (e.g. "Rainy
 *   spring" → Spring, "Night out" → Evening); unknown values are logged
 * - a `directions` array (the app's 18-direction taste taxonomy) is derived
 *   from accords + style tags + notes via keyword matching
 * - priceCategory is derived from the price tier's midpoint
 * - similar_to / cheaper_alternative names are resolved to dataset ids where
 *   a fuzzy name match exists; the raw names are kept alongside
 * - bottle gradient colours are picked from the dominant scent direction
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import * as XLSX from 'xlsx';

const __dir = dirname(fileURLToPath(import.meta.url));
const src = process.argv[2];
if (!src) {
  console.error('usage: node scripts/convert-fragrances.mjs <xlsx>');
  process.exit(1);
}

const wb = XLSX.read(readFileSync(src));
const rows = XLSX.utils.sheet_to_json(wb.Sheets['Fragrance Seed Data'], { defval: null });

const list = (v) =>
  String(v ?? '')
    .split(';')
    .map((s) => s.trim())
    .filter(Boolean);

// --- canonical seasons -----------------------------------------------------
const ALL_SEASONS = ['Spring', 'Summer', 'Autumn', 'Winter'];
function seasons(v) {
  const out = new Set();
  for (const raw of list(v)) {
    const s = raw.toLowerCase();
    if (s.includes('all year')) {
      (s.includes('except high heat') ? ['Spring', 'Autumn', 'Winter'] : ALL_SEASONS).forEach(
        (x) => out.add(x)
      );
      continue;
    }
    if (s.includes('spring')) out.add('Spring');
    if (s.includes('summer')) out.add('Summer');
    if (s.includes('autumn') || s.includes('fall')) out.add('Autumn');
    if (s.includes('winter')) out.add('Winter');
  }
  return [...out];
}

// --- canonical occasions ----------------------------------------------------
const OCCASION_MAP = {
  daily: 'Daily', beginner: 'Daily',
  office: 'Office', 'creative office': 'Office',
  casual: 'Casual', 'smart casual': 'Casual', 'mature casual': 'Casual',
  'casual evening': 'Casual', minimal: 'Casual', mountain: 'Casual', lounge: 'Casual',
  date: 'Date', intimate: 'Date', 'date night': 'Date',
  evening: 'Evening', 'night out': 'Evening', club: 'Evening', party: 'Evening',
  'cozy evening': 'Evening', 'summer evenings': 'Evening',
  formal: 'Formal', 'formal daytime': 'Formal', 'daytime formal': 'Formal',
  'formal casual': 'Formal', dressy: 'Formal', 'special occasion': 'Formal',
  beach: 'Beach', holiday: 'Beach', 'beach luxury': 'Beach', 'hot weather': 'Beach', summer: 'Beach',
  gym: 'Gym',
  'cold weather': 'Cold weather', winter: 'Cold weather',
  signature: 'Signature', 'fresh signature': 'Signature', 'soft signature': 'Signature',
  statement: 'Signature', 'solo wear': 'Signature', artistic: 'Signature', creative: 'Signature',
};
const unknownOccasions = new Set();
function occasions(v) {
  const out = new Set();
  for (const raw of list(v)) {
    const mapped = OCCASION_MAP[raw.toLowerCase()];
    if (mapped) out.add(mapped);
    else unknownOccasions.add(raw);
  }
  return [...out];
}

// --- direction taxonomy -----------------------------------------------------
const DIRECTION_RULES = [
  ['Citrus', ['citrus', 'lemon', 'bergamot', 'grapefruit', 'citron', 'yuzu', 'neroli', 'mandarin', 'lime', 'orange']],
  ['Fresh / aquatic', ['fresh', 'aquatic', 'marine', 'blue', 'sea ', 'seaweed', 'water']],
  ['Green', ['green', 'herbal', 'sage', 'violet leaf', 'tea', 'mint', 'oregano', 'cypress', 'oakmoss', 'mossy', 'fig', 'lavender', 'basil', 'juniper', 'gin-like', 'fougère']],
  ['Woody', ['woody', 'cedar', 'sandalwood', 'wood', 'iso e super', 'patchouli']],
  ['Spicy', ['spicy', 'pepper', 'cardamom', 'cinnamon', 'ginger', 'saffron', 'spices']],
  ['Tobacco', ['tobacco']],
  ['Leather', ['leather', 'suede']],
  ['Amber', ['amber', 'ambergris', 'amberwood', 'labdanum']],
  ['Vanilla', ['vanilla', 'tonka']],
  ['Sweet', ['sweet', 'gourmand', 'praline', 'toffee', 'caramel', 'honey', 'dessert', 'kulfi', 'dates', 'date syrup', 'chestnut', 'almond', 'boozy', 'rum', 'whisky', 'dried fruits']],
  ['Floral', ['floral', 'iris', 'violet', 'rose', 'jasmine']],
  ['Powdery', ['powdery', 'barbershop', 'soapy']],
  ['Smoky / incense', ['smoky', 'smoke', 'incense', 'fireplace', 'gasoline', 'petrol']],
  ['Oud', ['oud']],
  ['Musky / clean', ['musk', 'clean', 'skin scent', 'molecular', 'airy', 'ambroxan']],
  ['Vetiver', ['vetiver']],
  ['Salty', ['salty', 'seaweed']],
  ['Mineral', ['mineral', 'metallic', 'flint']],
];
function directions(tokens) {
  const haystack = tokens.map((t) => t.toLowerCase());
  const out = [];
  for (const [dir, keys] of DIRECTION_RULES) {
    if (keys.some((k) => haystack.some((h) => h.includes(k)))) out.push(dir);
  }
  return out;
}

// --- price tier → category ---------------------------------------------------
function priceCategory(tier) {
  const nums = (tier.match(/\d+/g) ?? []).map(Number);
  let mid;
  if (/under/i.test(tier)) mid = nums[0] * 0.8;
  else if (/\+/.test(tier)) mid = nums[0];
  else mid = nums.length >= 2 ? (nums[0] + nums[1]) / 2 : nums[0] ?? 100;
  if (mid < 45) return 'budget';
  if (mid < 80) return 'mid';
  if (mid < 135) return 'designer';
  if (mid < 215) return 'premium';
  return 'niche';
}

// --- bottle colours by dominant direction ------------------------------------
const PALETTES = [
  ['Fresh / aquatic', ['#5d9fc7', '#1d4868']],
  ['Salty', ['#58a8a0', '#1e5650']],
  ['Vetiver', ['#7fa06a', '#34492a']],
  ['Citrus', ['#d2b35e', '#75591e']],
  ['Green', ['#8aa37b', '#3c5034']],
  ['Oud', ['#6e4a3f', '#2a1713']],
  ['Tobacco', ['#a67847', '#4a2f15']],
  ['Leather', ['#7d5a3c', '#33200f']],
  ['Smoky / incense', ['#5d5a64', '#1f1d24']],
  ['Vanilla', ['#c9a376', '#6b4d2a']],
  ['Sweet', ['#b87f5e', '#5c3322']],
  ['Amber', ['#c08f4f', '#5e3d17']],
  ['Spicy', ['#b06a4a', '#52250f']],
  ['Powdery', ['#b9b2c4', '#5b5468']],
  ['Floral', ['#a285a8', '#4a3550']],
  ['Mineral', ['#9fb3c8', '#46586b']],
  ['Musky / clean', ['#aab3b0', '#4c5553']],
  ['Woody', ['#8a6a48', '#3c2a16']],
];
function colors(dirs) {
  for (const [dir, pal] of PALETTES) if (dirs.includes(dir)) return pal;
  return ['#8a8f96', '#3a3e45'];
}

// --- name → id resolution -----------------------------------------------------
const norm = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9 ]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
const index = rows.map((r) => ({
  id: r.id,
  keys: [norm(r.name), norm(`${r.brand} ${r.name}`), norm(`${r.name} ${r.brand}`)],
}));
function resolve(names, selfId) {
  const ids = [];
  for (const n of names) {
    const q = norm(n);
    const hit = index.find(
      (e) => e.id !== selfId && e.keys.some((k) => k === q || k.includes(q) || q.includes(k))
    );
    if (hit && !ids.includes(hit.id)) ids.push(hit.id);
  }
  return ids;
}

// --- recommend_if signal extraction -------------------------------------------
function signals(v) {
  const m = String(v ?? '').match(/include\s+(.+?)\.?$/i);
  return m ? list(m[1].replace(/;/g, ';')) : [];
}

// --- build ---------------------------------------------------------------------
const out = rows.map((r) => {
  const topNotes = list(r.top_notes);
  const heartNotes = list(r.heart_notes);
  const baseNotes = list(r.base_notes);
  const accordProfile = list(r.key_accords);
  const styleTags = list(r.style_tags);
  const dirs = directions([...accordProfile, ...styleTags, ...topNotes, ...heartNotes, ...baseNotes]);
  const similarFragrances = list(r.similar_to);
  const cheaperAlternatives = list(r.cheaper_alternative);
  return {
    id: r.id,
    name: r.name,
    brand: r.brand,
    concentration: r.concentration,
    category: r.segment,
    priceTier: r.price_tier,
    popularity: r.popularity_bucket,
    topNotes,
    heartNotes,
    baseNotes,
    accordProfile,
    styleTags,
    sweetnessLevel: r.sweetness_1_10,
    freshnessLevel: r.freshness_1_10,
    darknessLevel: r.darkness_1_10,
    uniquenessLevel: r.uniqueness_1_10,
    projectionLevel: r.projection_1_10,
    longevityLevel: r.longevity_1_10,
    seasonTags: seasons(r.best_seasons),
    occasionTags: occasions(r.best_occasions),
    description: r.original_description,
    caution: r.caution,
    bestFor: list(r.best_for.replace(/\.$/, '')),
    avoidIf: list(r.avoid_if.replace(/\.$/, '')),
    similarFragrances,
    cheaperAlternatives,
    similarIds: resolve(similarFragrances, r.id),
    cheaperAlternativeIds: resolve(cheaperAlternatives, r.id),
    recommendationLogic: { recommendIf: r.recommend_if, avoidIf: r.avoid_recommendation_if },
    recommendSignals: signals(r.recommend_if),
    imageFileName: r.image_filename,
    image: `/fragrances/${r.image_filename}`,
    directions: dirs,
    priceCategory: priceCategory(r.price_tier),
    priceLabel: r.price_tier,
    colors: colors(dirs),
    notes: [...new Set([...topNotes, ...heartNotes, ...baseNotes])],
    accords: accordProfile,
  };
});

const header = `import { Fragrance } from '../types';

/**
 * Generated from accord_100_mens_fragrances_seed_dataset.xlsx by
 * scripts/convert-fragrances.mjs — do not edit by hand; re-run the script.
 */
export const fragrances: Fragrance[] = `;

const footer = `;

export const FRAGRANCES = fragrances;

export const VALID_IDS = new Set(fragrances.map((f) => f.id));

export const byId = (id: string): Fragrance => {
  const f = fragrances.find((x) => x.id === id);
  if (!f) throw new Error(\`Unknown fragrance: \${id}\`);
  return f;
};

export const findById = (id?: string): Fragrance | undefined =>
  fragrances.find((x) => x.id === id);
`;

writeFileSync(
  join(__dir, '../src/data/fragrances.ts'),
  header + JSON.stringify(out, null, 2) + footer
);

console.log('wrote', out.length, 'fragrances');
console.log('unknown occasions dropped:', [...unknownOccasions].join(', ') || 'none');
const noDirs = out.filter((f) => f.directions.length === 0).map((f) => f.id);
console.log('fragrances with no derived directions:', noDirs.join(', ') || 'none');
const simTotal = out.reduce((s, f) => s + f.similarFragrances.length, 0);
const simResolved = out.reduce((s, f) => s + f.similarIds.length, 0);
const altTotal = out.reduce((s, f) => s + f.cheaperAlternatives.length, 0);
const altResolved = out.reduce((s, f) => s + f.cheaperAlternativeIds.length, 0);
console.log(`similar resolved ${simResolved}/${simTotal}, alternatives resolved ${altResolved}/${altTotal}`);
