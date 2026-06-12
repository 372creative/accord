export const EXPERIENCE_LEVELS = [
  'Just getting started',
  'I own a few',
  "I'm into it",
  'Collector / fragrance head',
];

export const COLLECTION_SIZES = ['0–2', '3–5', '6–15', '16–40', '40+'];

export const BUDGET_RANGES = ['Under €30', '€30–70', '€70–120', '€120–200', '€200+'];

export const CLONE_OPENNESS = [
  'Yes, definitely',
  'Sometimes, if quality is good',
  'Prefer originals',
  'No clones',
];

export const LOVE_CHIPS = [
  'Fresh',
  'Dry',
  'Masculine',
  'Elegant',
  'Unique',
  'Long-lasting',
  'Not too sweet',
  'Salty',
  'Green',
  'Woody',
  'Tobacco',
  'Complimented',
  'Works on my skin',
];

export const DISLIKE_CHIPS = [
  'Too sweet',
  'Too synthetic',
  'Too loud',
  'Too weak',
  'Too common',
  'Too powdery',
  'Too smoky',
  'Too aquatic',
  'Too mature',
  'Too young',
  'Headache',
  'Bad on my skin',
  'Boring',
  'Overhyped',
];

export const DIRECTIONS = [
  'Citrus',
  'Fresh / aquatic',
  'Green',
  'Woody',
  'Spicy',
  'Tobacco',
  'Leather',
  'Amber',
  'Vanilla',
  'Sweet',
  'Floral',
  'Powdery',
  'Smoky / incense',
  'Oud',
  'Musky / clean',
  'Vetiver',
  'Salty',
  'Mineral',
];

export const AVOIDED_DIRECTIONS = [
  'Very sweet fragrances',
  'Heavy vanilla',
  'Bubblegum / candy',
  'Strong oud',
  'Heavy leather',
  'Animalic notes',
  'Powdery scents',
  'Barbershop style',
  'Blue shower-gel freshness',
  'Heavy rose',
  'Coconut / sunscreen',
  'Smoky incense',
  'None yet',
];

export const GOALS = [
  'Daily signature scent',
  'Summer freshie',
  'Office scent',
  'Date night',
  'Evening fragrance',
  'Gym / casual',
  'Holiday / beach',
  'Cold weather scent',
  'Something unique',
  'Cheap hidden gems',
  'Niche discovery',
  'Clones / alternatives',
  'Build a small wardrobe',
];

export const REACTIONS: { id: string; label: string; score: number }[] = [
  { id: 'avoid', label: 'Avoid', score: -10 },
  { id: 'not_for_me', label: 'Not for me', score: -5 },
  { id: 'depends', label: 'Depends', score: 2 },
  { id: 'enjoy', label: 'Enjoy', score: 7 },
  { id: 'love', label: 'Love', score: 10 },
];

/** Directions that get a "Set your boundaries" follow-up when rated "Depends". */
export const POLARISING_DIRECTIONS = [
  'Sweet',
  'Vanilla',
  'Amber',
  'Oud',
  'Leather',
  'Powdery',
  'Fresh / aquatic',
  'Smoky / incense',
  'Floral',
];

export interface ConditionalOptions {
  question: string;
  helper?: string;
  worksForMe: string[];
  notForMe: string[];
}

export const CONDITIONAL_OPTIONS: Record<string, ConditionalOptions> = {
  Sweet: {
    question: 'What kind of sweetness works for you?',
    helper: 'Sweetness can be elegant or too much. Tell Accord where the line is.',
    worksForMe: [
      'Restrained sweetness',
      'Tobacco sweetness',
      'Amber sweetness',
      'Boozy sweetness',
      'Warm spicy sweetness',
      'Light vanilla',
    ],
    notForMe: [
      'Syrupy sweetness',
      'Bubblegum / candy',
      'Heavy gourmand',
      'Synthetic sweetness',
      'Fruity sweetness',
      'Overly sweet club scents',
    ],
  },
  'Fresh / aquatic': {
    question: 'What kind of freshness works for you?',
    worksForMe: ['Salty aquatic', 'Mineral fresh', 'Citrus fresh', 'Green fresh', 'Clean musky fresh'],
    notForMe: [
      'Blue shower-gel freshness',
      'Generic aquatic',
      'Synthetic ambroxan freshness',
      'Too sporty',
      'Too soapy',
    ],
  },
  Oud: {
    question: 'What kind of oud works for you?',
    worksForMe: ['Smooth oud', 'Woody oud', 'Rose-oud if balanced', 'Dry oud', 'Incense oud'],
    notForMe: ['Barnyard oud', 'Medicinal oud', 'Overpowering oud', 'Sweet oud', 'Too animalic'],
  },
  Leather: {
    question: 'What kind of leather works for you?',
    worksForMe: ['Smooth leather', 'Suede', 'Dry leather', 'Tobacco leather', 'Elegant leather'],
    notForMe: ['Harsh leather', 'Animalic leather', 'Smoky leather overload', 'Rubber-like leather'],
  },
  Powdery: {
    question: 'What kind of powder works for you?',
    worksForMe: ['Clean powder', 'Iris powder', 'Soft elegant powder', 'Barbershop powder'],
    notForMe: ['Makeup powder', 'Dusty powder', 'Old-fashioned powder', 'Too dry / chalky'],
  },
  'Smoky / incense': {
    question: 'What kind of smoke works for you?',
    worksForMe: ['Dry incense', 'Churchy incense', 'Resinous smoke', 'Tobacco smoke', 'Subtle smokiness'],
    notForMe: ['Campfire smoke', 'Ashtray smoke', 'Burnt rubber', 'Too heavy incense'],
  },
  Amber: {
    question: 'What kind of amber works for you?',
    worksForMe: ['Dry amber', 'Resinous amber', 'Spicy amber', 'Tobacco amber'],
    notForMe: ['Syrupy amber', 'Very sweet amber', 'Heavy vanilla amber', 'Sticky amber'],
  },
  Vanilla: {
    question: 'What kind of vanilla works for you?',
    worksForMe: ['Dry vanilla', 'Spiced vanilla', 'Tobacco vanilla', 'Light vanilla'],
    notForMe: ['Cupcake vanilla', 'Heavy gourmand vanilla', 'Syrupy vanilla', 'Synthetic vanilla'],
  },
  Floral: {
    question: 'What kind of floral works for you?',
    worksForMe: ['Fresh floral', 'Clean neroli', 'Iris', 'Geranium', 'Lavender'],
    notForMe: ['Heavy rose', 'Sweet white florals', 'Powdery florals', 'Too feminine / cosmetic'],
  },
};

export const CARD_FEEDBACK_OPTIONS = [
  'Not for me',
  'Too sweet',
  'Too common',
  'Already tried',
  'Own it',
] as const;

export const PROJECTION_LEVELS = [
  'Very subtle',
  'Noticeable but tasteful',
  'Strong projection',
  'Beast mode',
  'Depends on situation',
];

export const DECISION_TAGS = [
  'Keeper',
  'Would buy again',
  'Would not buy again',
  'Want full bottle',
  'Sample only',
  'Sold / decluttered',
  'Good, but redundant',
  'Not for me',
  'Overhyped',
];
