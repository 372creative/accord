import { Availability } from '../types';

/**
 * Mock retailer / sample availability, keyed by dataset fragrance id.
 *
 * This is a UI-only layer. Availability, retailer links and affiliate status
 * MUST NOT influence recommendation match scores — those are computed purely
 * from taste, profile, climate, budget, collection and goal signals.
 *
 * URLs are placeholders ("#") for the prototype.
 */
export const AVAILABILITY: Record<string, Availability> = {
  'terre-dhermes-edt': {
    marketRegions: ['EU', 'UK', 'US'],
    sampleLinks: [
      { id: 's-terre-eu-1', retailerName: 'Nose Paris', type: 'sample', region: 'EU', country: 'France', size: '1.5ml', price: 4, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-terre-eu-2', retailerName: 'Aus Liebe zum Duft', type: 'decant', region: 'EU', country: 'Germany', size: '5ml', price: 9, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-terre-us-1', retailerName: 'Scent Split', type: 'decant', region: 'US', size: '5ml', price: 11, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-terre-uk-1', retailerName: 'Bloom Perfumery', type: 'sample', region: 'UK', size: '2ml', price: 5, currency: 'GBP', affiliateUrl: '#', inStock: false, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-terre-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '100ml', price: 82, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 'b-terre-eu-2', retailerName: 'Parfumdreams', type: 'full_bottle', region: 'EU', size: '50ml', price: 61, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: true },
      { id: 'b-terre-us-1', retailerName: 'FragranceNet', type: 'full_bottle', region: 'US', size: '100ml', price: 96, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'terre-dhermes-eau-givree': {
    marketRegions: ['EU', 'UK'],
    sampleLinks: [
      { id: 's-givree-eu-1', retailerName: 'Essenza Nobile', type: 'sample', region: 'EU', country: 'Germany', size: '2ml', price: 5, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-givree-uk-1', retailerName: 'Fragrance Samples UK', type: 'decant', region: 'UK', size: '5ml', price: 8, currency: 'GBP', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-givree-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '100ml', price: 104, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'dior-eau-sauvage': {
    marketRegions: ['EU', 'US'],
    sampleLinks: [
      { id: 's-sauvage-eu-1', retailerName: 'Skins Cosmetics', type: 'sample', region: 'EU', country: 'Netherlands', size: '2ml', price: 4, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-sauvage-us-1', retailerName: 'MicroPerfumes', type: 'sample', region: 'US', size: '2ml', price: 6, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-sauvage-eu-1', retailerName: 'Parfumdreams', type: 'full_bottle', region: 'EU', size: '100ml', price: 78, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'bleu-de-chanel-edp': {
    marketRegions: ['EU', 'UK', 'US', 'MENA'],
    sampleLinks: [
      { id: 's-bleu-eu-1', retailerName: 'Aus Liebe zum Duft', type: 'sample', region: 'EU', country: 'Germany', size: '1.5ml', price: 5, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-bleu-us-1', retailerName: 'LuckyScent', type: 'sample', region: 'US', size: '2ml', price: 6, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-bleu-mena-1', retailerName: 'Faces', type: 'sample', region: 'MENA', country: 'UAE', size: '2ml', price: 22, currency: 'AED', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-bleu-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '100ml', price: 118, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 'b-bleu-mena-1', retailerName: 'Sephora UAE', type: 'full_bottle', region: 'MENA', country: 'UAE', size: '100ml', price: 480, currency: 'AED', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'lalique-encre-noire': {
    marketRegions: ['EU', 'UK'],
    sampleLinks: [
      { id: 's-encre-eu-1', retailerName: 'Notino', type: 'sample', region: 'EU', size: '1.5ml', price: 3, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-encre-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '100ml', price: 34, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 'b-encre-eu-2', retailerName: 'Parfumdreams', type: 'full_bottle', region: 'EU', size: '100ml', price: 31, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: true },
    ],
  },
  'rasasi-fattan': {
    marketRegions: ['MENA', 'EU', 'US'],
    sampleLinks: [
      { id: 's-fattan-mena-1', retailerName: 'Local Perfumery (Dubai)', type: 'decant', region: 'MENA', country: 'UAE', size: '5ml', price: 18, currency: 'AED', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-fattan-us-1', retailerName: 'Scent Split', type: 'decant', region: 'US', size: '5ml', price: 7, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-fattan-mena-1', retailerName: 'Faces', type: 'full_bottle', region: 'MENA', country: 'UAE', size: '100ml', price: 120, currency: 'AED', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'afnan-turathi-blue': {
    marketRegions: ['MENA', 'SEA', 'EU'],
    sampleLinks: [
      { id: 's-turathi-sea-1', retailerName: 'Local Decant Shop (SG)', type: 'decant', region: 'SEA', country: 'Singapore', size: '5ml', price: 9, currency: 'SGD', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-turathi-mena-1', retailerName: 'Faces', type: 'full_bottle', region: 'MENA', country: 'UAE', size: '100ml', price: 95, currency: 'AED', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 'b-turathi-sea-1', retailerName: 'Sephora Singapore', type: 'full_bottle', region: 'SEA', country: 'Singapore', size: '100ml', price: 42, currency: 'SGD', affiliateUrl: '#', inStock: false, sponsored: false },
    ],
  },
  'dandg-light-blue-eau-intense': {
    marketRegions: ['EU', 'UK', 'US'],
    sampleLinks: [
      { id: 's-lbei-eu-1', retailerName: 'Notino', type: 'sample', region: 'EU', size: '1.5ml', price: 4, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-lbei-uk-1', retailerName: 'The Perfume Shop', type: 'sample', region: 'UK', size: '2ml', price: 4, currency: 'GBP', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-lbei-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '100ml', price: 74, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'givenchy-gentleman-society-ambree': {
    marketRegions: ['EU'],
    sampleLinks: [
      { id: 's-gsa-eu-1', retailerName: 'Aus Liebe zum Duft', type: 'sample', region: 'EU', country: 'Germany', size: '2ml', price: 5, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-gsa-eu-1', retailerName: 'Parfumdreams', type: 'full_bottle', region: 'EU', size: '100ml', price: 92, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'creed-aventus': {
    marketRegions: ['EU', 'UK', 'US'],
    sampleLinks: [
      { id: 's-aventus-eu-1', retailerName: 'Nose Paris', type: 'sample', region: 'EU', country: 'France', size: '2ml', price: 9, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-aventus-us-1', retailerName: 'LuckyScent', type: 'discovery_set', region: 'US', size: '4×2ml', price: 34, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-aventus-us-2', retailerName: 'Scent Split', type: 'decant', region: 'US', size: '5ml', price: 28, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-aventus-eu-1', retailerName: 'Essenza Nobile', type: 'full_bottle', region: 'EU', size: '100ml', price: 295, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'tom-ford-tobacco-vanille': {
    marketRegions: ['EU', 'US', 'UK'],
    sampleLinks: [
      { id: 's-tv-us-1', retailerName: 'MicroPerfumes', type: 'sample', region: 'US', size: '2ml', price: 8, currency: 'USD', affiliateUrl: '#', inStock: true, sponsored: false },
      { id: 's-tv-eu-1', retailerName: 'Essenza Nobile', type: 'decant', region: 'EU', size: '5ml', price: 16, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-tv-eu-1', retailerName: 'Notino', type: 'full_bottle', region: 'EU', size: '50ml', price: 238, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
  'guerlain-vetiver': {
    marketRegions: ['EU', 'UK'],
    sampleLinks: [
      { id: 's-guerlain-eu-1', retailerName: 'Skins Cosmetics', type: 'sample', region: 'EU', country: 'Netherlands', size: '2ml', price: 4, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
    fullBottleLinks: [
      { id: 'b-guerlain-eu-1', retailerName: 'Parfumdreams', type: 'full_bottle', region: 'EU', size: '100ml', price: 84, currency: 'EUR', affiliateUrl: '#', inStock: true, sponsored: false },
    ],
  },
};

export const availabilityFor = (fragranceId: string): Availability | undefined =>
  AVAILABILITY[fragranceId];
