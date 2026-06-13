import { ClimateRegion, MarketRegion, UserLocation } from '../types';

interface CountryInfo {
  climate: ClimateRegion;
  market: MarketRegion;
  currency: string;
  southernHemisphere?: boolean;
}

/** Simple MVP mapping — country → climate / market / currency. */
const COUNTRY_INFO: Record<string, CountryInfo> = {
  // cold temperate
  Estonia: { climate: 'cold_temperate', market: 'EU', currency: 'EUR' },
  Finland: { climate: 'cold_temperate', market: 'EU', currency: 'EUR' },
  Sweden: { climate: 'cold_temperate', market: 'EU', currency: 'SEK' },
  Norway: { climate: 'cold_temperate', market: 'OTHER', currency: 'NOK' },
  Latvia: { climate: 'cold_temperate', market: 'EU', currency: 'EUR' },
  Lithuania: { climate: 'cold_temperate', market: 'EU', currency: 'EUR' },
  Denmark: { climate: 'cold_temperate', market: 'EU', currency: 'DKK' },
  Iceland: { climate: 'cold_temperate', market: 'OTHER', currency: 'ISK' },
  Canada: { climate: 'cold_temperate', market: 'OTHER', currency: 'CAD' },
  // mild temperate
  'United Kingdom': { climate: 'mild_temperate', market: 'UK', currency: 'GBP' },
  Ireland: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Germany: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Netherlands: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Belgium: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  France: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Poland: { climate: 'mild_temperate', market: 'EU', currency: 'PLN' },
  'Czech Republic': { climate: 'mild_temperate', market: 'EU', currency: 'CZK' },
  Austria: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Switzerland: { climate: 'mild_temperate', market: 'OTHER', currency: 'CHF' },
  Hungary: { climate: 'mild_temperate', market: 'EU', currency: 'HUF' },
  Slovakia: { climate: 'mild_temperate', market: 'EU', currency: 'EUR' },
  Ukraine: { climate: 'mild_temperate', market: 'OTHER', currency: 'UAH' },
  'United States': { climate: 'mild_temperate', market: 'US', currency: 'USD' },
  Japan: { climate: 'mild_temperate', market: 'OTHER', currency: 'JPY' },
  'South Korea': { climate: 'mild_temperate', market: 'OTHER', currency: 'KRW' },
  'New Zealand': { climate: 'mild_temperate', market: 'OTHER', currency: 'NZD', southernHemisphere: true },
  // mediterranean
  Spain: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Italy: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Greece: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Portugal: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Malta: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Croatia: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Cyprus: { climate: 'mediterranean', market: 'EU', currency: 'EUR' },
  Turkey: { climate: 'mediterranean', market: 'OTHER', currency: 'TRY' },
  Australia: { climate: 'mediterranean', market: 'OTHER', currency: 'AUD', southernHemisphere: true },
  // tropical humid
  Thailand: { climate: 'tropical_humid', market: 'SEA', currency: 'THB' },
  Singapore: { climate: 'tropical_humid', market: 'SEA', currency: 'SGD' },
  Malaysia: { climate: 'tropical_humid', market: 'SEA', currency: 'MYR' },
  Indonesia: { climate: 'tropical_humid', market: 'SEA', currency: 'IDR' },
  Philippines: { climate: 'tropical_humid', market: 'SEA', currency: 'PHP' },
  Vietnam: { climate: 'tropical_humid', market: 'SEA', currency: 'VND' },
  India: { climate: 'tropical_humid', market: 'OTHER', currency: 'INR' },
  Brazil: { climate: 'tropical_humid', market: 'OTHER', currency: 'BRL', southernHemisphere: true },
  Mexico: { climate: 'tropical_humid', market: 'OTHER', currency: 'MXN' },
  // hot dry
  'United Arab Emirates': { climate: 'hot_dry', market: 'MENA', currency: 'AED' },
  'Saudi Arabia': { climate: 'hot_dry', market: 'MENA', currency: 'SAR' },
  Qatar: { climate: 'hot_dry', market: 'MENA', currency: 'QAR' },
  Kuwait: { climate: 'hot_dry', market: 'MENA', currency: 'KWD' },
  Bahrain: { climate: 'hot_dry', market: 'MENA', currency: 'BHD' },
  Oman: { climate: 'hot_dry', market: 'MENA', currency: 'OMR' },
  Egypt: { climate: 'hot_dry', market: 'MENA', currency: 'EGP' },
  'South Africa': { climate: 'mild_temperate', market: 'OTHER', currency: 'ZAR', southernHemisphere: true },
};

export const COUNTRIES = Object.keys(COUNTRY_INFO).sort();

/** ISO 3166-1 alpha-2 codes for flag emoji. */
const COUNTRY_ISO: Record<string, string> = {
  Estonia: 'EE', Finland: 'FI', Sweden: 'SE', Norway: 'NO', Latvia: 'LV', Lithuania: 'LT',
  Denmark: 'DK', Iceland: 'IS', Canada: 'CA', 'United Kingdom': 'GB', Ireland: 'IE',
  Germany: 'DE', Netherlands: 'NL', Belgium: 'BE', France: 'FR', Poland: 'PL',
  'Czech Republic': 'CZ', Austria: 'AT', Switzerland: 'CH', Hungary: 'HU', Slovakia: 'SK',
  Ukraine: 'UA', 'United States': 'US', Japan: 'JP', 'South Korea': 'KR', 'New Zealand': 'NZ',
  Spain: 'ES', Italy: 'IT', Greece: 'GR', Portugal: 'PT', Malta: 'MT', Croatia: 'HR',
  Cyprus: 'CY', Turkey: 'TR', Australia: 'AU', Thailand: 'TH', Singapore: 'SG', Malaysia: 'MY',
  Indonesia: 'ID', Philippines: 'PH', Vietnam: 'VN', India: 'IN', Brazil: 'BR', Mexico: 'MX',
  'United Arab Emirates': 'AE', 'Saudi Arabia': 'SA', Qatar: 'QA', Kuwait: 'KW', Bahrain: 'BH',
  Oman: 'OM', Egypt: 'EG', 'South Africa': 'ZA',
};

/** Country name → flag emoji (regional-indicator pair). Empty string if unknown. */
export function countryFlag(country?: string): string {
  const iso = country ? COUNTRY_ISO[country] : undefined;
  if (!iso) return '';
  return iso
    .toUpperCase()
    .replace(/./g, (c) => String.fromCodePoint(127397 + c.charCodeAt(0)));
}

/** Fill in climate / market / currency from a country name (soft fallback). */
export function inferLocation(country: string, city?: string): UserLocation {
  const info = COUNTRY_INFO[country];
  return {
    country,
    city: city || undefined,
    climateRegion: info?.climate ?? 'unknown',
    marketRegion: info?.market ?? 'OTHER',
    currency: info?.currency ?? '',
  };
}

export type Season = 'Winter' | 'Spring' | 'Summer' | 'Autumn';

/** Month-based season; inverted for known Southern Hemisphere countries. */
export function currentSeason(country?: string): Season {
  const month = new Date().getMonth(); // 0–11
  const northern: Season =
    month <= 1 || month === 11 ? 'Winter' : month <= 4 ? 'Spring' : month <= 7 ? 'Summer' : 'Autumn';
  if (country && COUNTRY_INFO[country]?.southernHemisphere) {
    const invert: Record<Season, Season> = {
      Winter: 'Summer',
      Spring: 'Autumn',
      Summer: 'Winter',
      Autumn: 'Spring',
    };
    return invert[northern];
  }
  return northern;
}

export const CLIMATE_LABELS: Record<string, string> = {
  cold_temperate: 'Cold temperate',
  mild_temperate: 'Mild temperate',
  mediterranean: 'Mediterranean',
  tropical_humid: 'Tropical humid',
  hot_dry: 'Hot & dry',
  unknown: '—',
};
