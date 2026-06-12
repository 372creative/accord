import { Fragrance } from '../types';

/**
 * Generated from accord_100_mens_fragrances_seed_dataset.xlsx by
 * scripts/convert-fragrances.mjs — do not edit by hand; re-run the script.
 */
export const fragrances: Fragrance[] = [
  {
    "id": "dior-sauvage-edt",
    "name": "Sauvage",
    "brand": "Dior",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Sichuan pepper",
      "Geranium"
    ],
    "baseNotes": [
      "Ambroxan",
      "Cedar",
      "Labdanum"
    ],
    "accordProfile": [
      "Fresh spicy",
      "Ambroxan",
      "Citrus",
      "Aromatic"
    ],
    "styleTags": [
      "Fresh",
      "Spicy",
      "Blue",
      "Daily",
      "Compliment"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Casual"
    ],
    "description": "A bright peppery blue fragrance with citrus lift and a clean ambroxan drydown.",
    "caution": "Can feel common, loud, and synthetic.",
    "bestFor": [
      "Users who like fresh / spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike fresh spicy or ambroxan"
    ],
    "similarFragrances": [
      "Bleu de Chanel",
      "Prada Luna Rossa Carbon"
    ],
    "cheaperAlternatives": [
      "Armaf Ventana"
    ],
    "similarIds": [
      "bleu-de-chanel-edp",
      "prada-luna-rossa-carbon"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Spicy; Blue; Daily; Compliment.",
      "avoidIf": "Downrank if user avoids Fresh spicy or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Spicy",
      "Blue",
      "Daily",
      "Compliment"
    ],
    "imageFileName": "dior-sauvage-edt.png",
    "image": "/fragrances/dior-sauvage-edt.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Pepper",
      "Lavender",
      "Sichuan pepper",
      "Geranium",
      "Ambroxan",
      "Cedar",
      "Labdanum"
    ],
    "accords": [
      "Fresh spicy",
      "Ambroxan",
      "Citrus",
      "Aromatic"
    ]
  },
  {
    "id": "dior-sauvage-edp",
    "name": "Sauvage",
    "brand": "Dior",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Star anise",
      "Nutmeg"
    ],
    "baseNotes": [
      "Ambroxan",
      "Vanilla"
    ],
    "accordProfile": [
      "Ambroxan",
      "Vanilla",
      "Fresh spicy"
    ],
    "styleTags": [
      "Fresh",
      "Spicy",
      "Sweet",
      "Evening",
      "Versatile"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Daily",
      "Date",
      "Evening"
    ],
    "description": "A warmer and smoother Sauvage profile with fresh spice, lavender and sweet ambered depth.",
    "caution": "Still recognisable and ambroxan-heavy.",
    "bestFor": [
      "Users who like fresh / spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike ambroxan or vanilla"
    ],
    "similarFragrances": [
      "Sauvage EDT",
      "Bleu de Chanel EDP"
    ],
    "cheaperAlternatives": [
      "Afnan Modest Une"
    ],
    "similarIds": [
      "dior-sauvage-edt",
      "bleu-de-chanel-edp"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Spicy; Sweet; Evening; Versatile.",
      "avoidIf": "Downrank if user avoids Ambroxan or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Spicy",
      "Sweet",
      "Evening",
      "Versatile"
    ],
    "imageFileName": "dior-sauvage-edp.png",
    "image": "/fragrances/dior-sauvage-edp.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Spicy",
      "Vanilla",
      "Sweet",
      "Musky / clean"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Lavender",
      "Star anise",
      "Nutmeg",
      "Ambroxan",
      "Vanilla"
    ],
    "accords": [
      "Ambroxan",
      "Vanilla",
      "Fresh spicy"
    ]
  },
  {
    "id": "bleu-de-chanel-edp",
    "name": "Bleu de Chanel",
    "brand": "Chanel",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€100–150",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Grapefruit",
      "Lemon",
      "Mint"
    ],
    "heartNotes": [
      "Ginger",
      "Jasmine",
      "Nutmeg"
    ],
    "baseNotes": [
      "Incense",
      "Sandalwood",
      "Cedar",
      "Amberwood"
    ],
    "accordProfile": [
      "Citrus",
      "Woody",
      "Amber",
      "Fresh spicy"
    ],
    "styleTags": [
      "Blue",
      "Woody",
      "Elegant",
      "Office",
      "Versatile"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Evening"
    ],
    "description": "A polished blue woody fragrance with citrus, ginger spice and smooth incense woods.",
    "caution": "Safe rather than unusual.",
    "bestFor": [
      "Users who like blue / woody profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or woody"
    ],
    "similarFragrances": [
      "Dior Sauvage",
      "YSL Y EDP"
    ],
    "cheaperAlternatives": [
      "Armaf Club de Nuit Blue Iconic"
    ],
    "similarIds": [
      "dior-sauvage-edt"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Blue; Woody; Elegant; Office; Versatile.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Blue",
      "Woody",
      "Elegant",
      "Office",
      "Versatile"
    ],
    "imageFileName": "bleu-de-chanel-edp.png",
    "image": "/fragrances/bleu-de-chanel-edp.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Floral",
      "Smoky / incense"
    ],
    "priceCategory": "designer",
    "priceLabel": "€100–150",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Grapefruit",
      "Lemon",
      "Mint",
      "Ginger",
      "Jasmine",
      "Nutmeg",
      "Incense",
      "Sandalwood",
      "Cedar",
      "Amberwood"
    ],
    "accords": [
      "Citrus",
      "Woody",
      "Amber",
      "Fresh spicy"
    ]
  },
  {
    "id": "bleu-de-chanel-parfum",
    "name": "Bleu de Chanel",
    "brand": "Chanel",
    "concentration": "Parfum",
    "category": "Designer",
    "priceTier": "€120–180",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Lemon zest",
      "Bergamot"
    ],
    "heartNotes": [
      "Lavender",
      "Geranium"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "Tonka"
    ],
    "accordProfile": [
      "Woody",
      "Citrus",
      "Sandalwood",
      "Amber"
    ],
    "styleTags": [
      "Elegant",
      "Woody",
      "Smooth",
      "Mature",
      "Office"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Office",
      "Formal",
      "Signature"
    ],
    "description": "A deeper, creamier Bleu with restrained citrus and polished sandalwood-cedar depth.",
    "caution": "Less projecting than louder blue fragrances.",
    "bestFor": [
      "Users who like elegant / woody profiles"
    ],
    "avoidIf": [
      "Users who dislike woody or citrus"
    ],
    "similarFragrances": [
      "Bleu de Chanel EDP",
      "Dior Homme 2020"
    ],
    "cheaperAlternatives": [
      "Club de Nuit Blue Iconic"
    ],
    "similarIds": [
      "bleu-de-chanel-edp",
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Elegant; Woody; Smooth; Mature; Office.",
      "avoidIf": "Downrank if user avoids Woody or tags this style negatively."
    },
    "recommendSignals": [
      "Elegant",
      "Woody",
      "Smooth",
      "Mature",
      "Office"
    ],
    "imageFileName": "bleu-de-chanel-parfum.png",
    "image": "/fragrances/bleu-de-chanel-parfum.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Amber",
      "Vanilla"
    ],
    "priceCategory": "premium",
    "priceLabel": "€120–180",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Lemon zest",
      "Bergamot",
      "Lavender",
      "Geranium",
      "Sandalwood",
      "Cedar",
      "Tonka"
    ],
    "accords": [
      "Woody",
      "Citrus",
      "Sandalwood",
      "Amber"
    ]
  },
  {
    "id": "ysl-y-edp",
    "name": "Y Eau de Parfum",
    "brand": "Yves Saint Laurent",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Apple",
      "Ginger",
      "Bergamot"
    ],
    "heartNotes": [
      "Sage",
      "Juniper",
      "Geranium"
    ],
    "baseNotes": [
      "Amberwood",
      "Tonka",
      "Cedar"
    ],
    "accordProfile": [
      "Apple",
      "Sage",
      "Amberwood",
      "Fresh spicy"
    ],
    "styleTags": [
      "Blue",
      "Sweet",
      "Modern",
      "Club",
      "Compliment"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Daily",
      "Evening",
      "Date"
    ],
    "description": "A sweet modern blue fragrance with apple, sage and dense amberwood projection.",
    "caution": "Can be too sweet and youthful.",
    "bestFor": [
      "Users who like blue / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike apple or sage"
    ],
    "similarFragrances": [
      "Dior Sauvage EDP",
      "Invictus Platinum"
    ],
    "cheaperAlternatives": [
      "Lattafa Fakhar Black"
    ],
    "similarIds": [
      "dior-sauvage-edt",
      "paco-rabanne-invictus"
    ],
    "cheaperAlternativeIds": [
      "lattafa-fakhar-black"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Blue; Sweet; Modern; Club; Compliment.",
      "avoidIf": "Downrank if user avoids Apple or tags this style negatively."
    },
    "recommendSignals": [
      "Blue",
      "Sweet",
      "Modern",
      "Club",
      "Compliment"
    ],
    "imageFileName": "ysl-y-edp.png",
    "image": "/fragrances/ysl-y-edp.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Apple",
      "Ginger",
      "Bergamot",
      "Sage",
      "Juniper",
      "Geranium",
      "Amberwood",
      "Tonka",
      "Cedar"
    ],
    "accords": [
      "Apple",
      "Sage",
      "Amberwood",
      "Fresh spicy"
    ]
  },
  {
    "id": "ysl-la-nuit-de-lhomme",
    "name": "La Nuit de L’Homme",
    "brand": "Yves Saint Laurent",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Cedar",
      "Bergamot"
    ],
    "baseNotes": [
      "Vetiver",
      "Caraway"
    ],
    "accordProfile": [
      "Cardamom",
      "Lavender",
      "Woody",
      "Spicy"
    ],
    "styleTags": [
      "Spicy",
      "Smooth",
      "Date",
      "Elegant",
      "Soft"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 5,
    "darknessLevel": 4,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Date",
      "Evening"
    ],
    "description": "A smooth cardamom-lavender scent with soft woody warmth and intimate date-night character.",
    "caution": "Performance is modest by modern standards.",
    "bestFor": [
      "Users who like spicy / smooth profiles"
    ],
    "avoidIf": [
      "Users who dislike cardamom or lavender"
    ],
    "similarFragrances": [
      "D&G The One EDP",
      "Bleu Electrique"
    ],
    "cheaperAlternatives": [
      "Maison Alhambra Trono"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Spicy; Smooth; Date; Elegant; Soft.",
      "avoidIf": "Downrank if user avoids Cardamom or tags this style negatively."
    },
    "recommendSignals": [
      "Spicy",
      "Smooth",
      "Date",
      "Elegant",
      "Soft"
    ],
    "imageFileName": "ysl-la-nuit-de-lhomme.png",
    "image": "/fragrances/ysl-la-nuit-de-lhomme.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Cardamom",
      "Lavender",
      "Cedar",
      "Bergamot",
      "Vetiver",
      "Caraway"
    ],
    "accords": [
      "Cardamom",
      "Lavender",
      "Woody",
      "Spicy"
    ]
  },
  {
    "id": "dandg-the-one-edp",
    "name": "The One for Men",
    "brand": "Dolce & Gabbana",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€60–100",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Grapefruit",
      "Coriander",
      "Basil"
    ],
    "heartNotes": [
      "Cardamom",
      "Ginger",
      "Orange blossom"
    ],
    "baseNotes": [
      "Tobacco",
      "Amber",
      "Cedar"
    ],
    "accordProfile": [
      "Tobacco",
      "Amber",
      "Spicy",
      "Warm"
    ],
    "styleTags": [
      "Tobacco",
      "Warm",
      "Date",
      "Smooth",
      "Sweet"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening"
    ],
    "description": "A warm amber-tobacco fragrance with cardamom spice and smooth close-up charm.",
    "caution": "Not a strong projector.",
    "bestFor": [
      "Users who like tobacco / warm profiles"
    ],
    "avoidIf": [
      "Users who dislike tobacco or amber"
    ],
    "similarFragrances": [
      "YSL La Nuit",
      "Armani Code"
    ],
    "cheaperAlternatives": [
      "Lattafa Al Noble Safeer"
    ],
    "similarIds": [
      "armani-code-parfum"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Tobacco; Warm; Date; Smooth; Sweet.",
      "avoidIf": "Downrank if user avoids Tobacco or tags this style negatively."
    },
    "recommendSignals": [
      "Tobacco",
      "Warm",
      "Date",
      "Smooth",
      "Sweet"
    ],
    "imageFileName": "dandg-the-one-edp.png",
    "image": "/fragrances/dandg-the-one-edp.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Tobacco",
      "Amber",
      "Sweet"
    ],
    "priceCategory": "designer",
    "priceLabel": "€60–100",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Grapefruit",
      "Coriander",
      "Basil",
      "Cardamom",
      "Ginger",
      "Orange blossom",
      "Tobacco",
      "Amber",
      "Cedar"
    ],
    "accords": [
      "Tobacco",
      "Amber",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "dandg-light-blue-eau-intense",
    "name": "Light Blue Eau Intense Pour Homme",
    "brand": "Dolce & Gabbana",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€60–100",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Grapefruit",
      "Mandarin"
    ],
    "heartNotes": [
      "Sea notes",
      "Juniper"
    ],
    "baseNotes": [
      "Amberwood",
      "Musk"
    ],
    "accordProfile": [
      "Aquatic",
      "Citrus",
      "Salty",
      "Musky"
    ],
    "styleTags": [
      "Fresh",
      "Salty",
      "Aquatic",
      "Summer",
      "Low sweetness"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Beach",
      "Casual"
    ],
    "description": "A salty citrus-aquatic with grapefruit brightness, marine freshness and clean musky amberwood.",
    "caution": "Avoid if marine notes feel synthetic.",
    "bestFor": [
      "Users who like fresh / salty profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or citrus"
    ],
    "similarFragrances": [
      "Bvlgari Aqva Marine",
      "Acqua di Gio Profondo"
    ],
    "cheaperAlternatives": [
      "Missoni Wave"
    ],
    "similarIds": [
      "acqua-di-gio-profondo"
    ],
    "cheaperAlternativeIds": [
      "missoni-wave"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Salty; Aquatic; Summer; Low sweetness.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Salty",
      "Aquatic",
      "Summer",
      "Low sweetness"
    ],
    "imageFileName": "dandg-light-blue-eau-intense.png",
    "image": "/fragrances/dandg-light-blue-eau-intense.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Sweet",
      "Musky / clean",
      "Salty"
    ],
    "priceCategory": "designer",
    "priceLabel": "€60–100",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Grapefruit",
      "Mandarin",
      "Sea notes",
      "Juniper",
      "Amberwood",
      "Musk"
    ],
    "accords": [
      "Aquatic",
      "Citrus",
      "Salty",
      "Musky"
    ]
  },
  {
    "id": "chanel-allure-homme-sport-ee",
    "name": "Allure Homme Sport Eau Extrême",
    "brand": "Chanel",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€100–150",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Mandarin",
      "Mint",
      "Cypress"
    ],
    "heartNotes": [
      "Pepper"
    ],
    "baseNotes": [
      "Tonka",
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "accordProfile": [
      "Citrus",
      "Tonka",
      "Fresh spicy",
      "Musky"
    ],
    "styleTags": [
      "Sporty",
      "Creamy",
      "Fresh",
      "Versatile",
      "Clean"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Casual"
    ],
    "description": "A polished sporty fresh scent with minty citrus and a creamy tonka-woods base.",
    "caution": "Sweeter and creamier than dry fresh scents.",
    "bestFor": [
      "Users who like sporty / creamy profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or tonka"
    ],
    "similarFragrances": [
      "Bleu de Chanel",
      "Versace Pour Homme"
    ],
    "cheaperAlternatives": [
      "Missoni Wave"
    ],
    "similarIds": [
      "bleu-de-chanel-edp",
      "versace-pour-homme"
    ],
    "cheaperAlternativeIds": [
      "missoni-wave"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sporty; Creamy; Fresh; Versatile; Clean.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Sporty",
      "Creamy",
      "Fresh",
      "Versatile",
      "Clean"
    ],
    "imageFileName": "chanel-allure-homme-sport-ee.png",
    "image": "/fragrances/chanel-allure-homme-sport-ee.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Musky / clean"
    ],
    "priceCategory": "designer",
    "priceLabel": "€100–150",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Mandarin",
      "Mint",
      "Cypress",
      "Pepper",
      "Tonka",
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "accords": [
      "Citrus",
      "Tonka",
      "Fresh spicy",
      "Musky"
    ]
  },
  {
    "id": "chanel-allure-homme-edition-blanche",
    "name": "Allure Homme Édition Blanche",
    "brand": "Chanel",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€100–150",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Sandalwood",
      "Pink pepper"
    ],
    "baseNotes": [
      "Vanilla",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "accordProfile": [
      "Lemon",
      "Creamy",
      "Vanilla",
      "Woody"
    ],
    "styleTags": [
      "Citrus",
      "Creamy",
      "Elegant",
      "Summer",
      "Soft sweet"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Casual",
      "Office",
      "Date"
    ],
    "description": "A refined lemon-cream fragrance with smooth woods and soft vanilla-vetiver warmth.",
    "caution": "May feel too soft or creamy.",
    "bestFor": [
      "Users who like citrus / creamy profiles"
    ],
    "avoidIf": [
      "Users who dislike lemon or creamy"
    ],
    "similarFragrances": [
      "Dior Homme Cologne",
      "Xerjoff Uden"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Citrus; Creamy; Elegant; Summer; Soft sweet.",
      "avoidIf": "Downrank if user avoids Lemon or tags this style negatively."
    },
    "recommendSignals": [
      "Citrus",
      "Creamy",
      "Elegant",
      "Summer",
      "Soft sweet"
    ],
    "imageFileName": "chanel-allure-homme-edition-blanche.png",
    "image": "/fragrances/chanel-allure-homme-edition-blanche.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€100–150",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Lemon",
      "Bergamot",
      "Sandalwood",
      "Pink pepper",
      "Vanilla",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "accords": [
      "Lemon",
      "Creamy",
      "Vanilla",
      "Woody"
    ]
  },
  {
    "id": "terre-dhermes-edt",
    "name": "Terre d’Hermès",
    "brand": "Hermès",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Orange",
      "Grapefruit"
    ],
    "heartNotes": [
      "Pepper",
      "Geranium"
    ],
    "baseNotes": [
      "Vetiver",
      "Cedar",
      "Benzoin",
      "Patchouli"
    ],
    "accordProfile": [
      "Citrus",
      "Vetiver",
      "Woody",
      "Earthy",
      "Mineral"
    ],
    "styleTags": [
      "Dry",
      "Citrus",
      "Vetiver",
      "Gentlemanly",
      "Earthy"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Signature"
    ],
    "description": "A dry citrus-vetiver classic with earthy woods, pepper and mineral masculine character.",
    "caution": "Can feel mature, sharp or earthy.",
    "bestFor": [
      "Users who like dry / citrus profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or vetiver"
    ],
    "similarFragrances": [
      "Terre d’Hermès Eau Givrée",
      "Guerlain Vetiver"
    ],
    "cheaperAlternatives": [
      "Rasasi Fattan"
    ],
    "similarIds": [
      "terre-dhermes-eau-givree",
      "guerlain-vetiver"
    ],
    "cheaperAlternativeIds": [
      "rasasi-fattan"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Dry; Citrus; Vetiver; Gentlemanly; Earthy.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Dry",
      "Citrus",
      "Vetiver",
      "Gentlemanly",
      "Earthy"
    ],
    "imageFileName": "terre-dhermes-edt.png",
    "image": "/fragrances/terre-dhermes-edt.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Vetiver",
      "Mineral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Orange",
      "Grapefruit",
      "Pepper",
      "Geranium",
      "Vetiver",
      "Cedar",
      "Benzoin",
      "Patchouli"
    ],
    "accords": [
      "Citrus",
      "Vetiver",
      "Woody",
      "Earthy",
      "Mineral"
    ]
  },
  {
    "id": "terre-dhermes-eau-givree",
    "name": "Terre d’Hermès Eau Givrée",
    "brand": "Hermès",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Citron"
    ],
    "heartNotes": [
      "Juniper",
      "Timur pepper"
    ],
    "baseNotes": [
      "Woody notes",
      "Mineral notes"
    ],
    "accordProfile": [
      "Citron",
      "Juniper",
      "Mineral",
      "Woody"
    ],
    "styleTags": [
      "Bitter citrus",
      "Fresh spicy",
      "Mineral",
      "Low sweetness"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Beach"
    ],
    "description": "A bright bitter-citrus Terre variant with juniper and mineral freshness.",
    "caution": "Can feel sharp and linear.",
    "bestFor": [
      "Users who like bitter citrus / fresh spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike citron or juniper"
    ],
    "similarFragrances": [
      "Terre d’Hermès",
      "Dior Homme Cologne"
    ],
    "cheaperAlternatives": [
      "Rasasi Fattan"
    ],
    "similarIds": [
      "terre-dhermes-edt",
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [
      "rasasi-fattan"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Bitter citrus; Fresh spicy; Mineral; Low sweetness.",
      "avoidIf": "Downrank if user avoids Citron or tags this style negatively."
    },
    "recommendSignals": [
      "Bitter citrus",
      "Fresh spicy",
      "Mineral",
      "Low sweetness"
    ],
    "imageFileName": "terre-dhermes-eau-givree.png",
    "image": "/fragrances/terre-dhermes-eau-givree.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Sweet",
      "Mineral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Citron",
      "Juniper",
      "Timur pepper",
      "Woody notes",
      "Mineral notes"
    ],
    "accords": [
      "Citron",
      "Juniper",
      "Mineral",
      "Woody"
    ]
  },
  {
    "id": "hermes-h24-edt",
    "name": "H24",
    "brand": "Hermès",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Popular modern designer",
    "topNotes": [
      "Clary sage"
    ],
    "heartNotes": [
      "Narcissus",
      "Rosewood"
    ],
    "baseNotes": [
      "Sclarene",
      "Metallic notes"
    ],
    "accordProfile": [
      "Green",
      "Metallic",
      "Aromatic",
      "Floral"
    ],
    "styleTags": [
      "Green",
      "Modern",
      "Clean",
      "Metallic",
      "Office"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A clean green aromatic with a modern metallic edge and soft herbal-floral character.",
    "caution": "The metallic facet can feel cold.",
    "bestFor": [
      "Users who like green / modern profiles"
    ],
    "avoidIf": [
      "Users who dislike green or metallic"
    ],
    "similarFragrances": [
      "Prada Luna Rossa",
      "Cartier Declaration"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "prada-luna-rossa-carbon"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Green; Modern; Clean; Metallic; Office.",
      "avoidIf": "Downrank if user avoids Green or tags this style negatively."
    },
    "recommendSignals": [
      "Green",
      "Modern",
      "Clean",
      "Metallic",
      "Office"
    ],
    "imageFileName": "hermes-h24-edt.png",
    "image": "/fragrances/hermes-h24-edt.png",
    "directions": [
      "Green",
      "Woody",
      "Floral",
      "Musky / clean",
      "Mineral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Clary sage",
      "Narcissus",
      "Rosewood",
      "Sclarene",
      "Metallic notes"
    ],
    "accords": [
      "Green",
      "Metallic",
      "Aromatic",
      "Floral"
    ]
  },
  {
    "id": "guerlain-vetiver",
    "name": "Vetiver",
    "brand": "Guerlain",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Classic masculine",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Vetiver",
      "Tobacco",
      "Pepper"
    ],
    "baseNotes": [
      "Oakmoss",
      "Myrrh",
      "Tonka",
      "Leather"
    ],
    "accordProfile": [
      "Vetiver",
      "Tobacco",
      "Citrus",
      "Earthy"
    ],
    "styleTags": [
      "Classic",
      "Vetiver",
      "Gentlemanly",
      "Green",
      "Dry"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Summer"
    ],
    "occasionTags": [
      "Office",
      "Formal",
      "Daily"
    ],
    "description": "A benchmark masculine vetiver with citrus, tobacco nuance and old-school green woody depth.",
    "caution": "May feel too traditional.",
    "bestFor": [
      "Users who like classic / vetiver profiles"
    ],
    "avoidIf": [
      "Users who dislike vetiver or tobacco"
    ],
    "similarFragrances": [
      "Terre d’Hermès",
      "Tom Ford Grey Vetiver"
    ],
    "cheaperAlternatives": [
      "Lalique Encre Noire Sport"
    ],
    "similarIds": [
      "terre-dhermes-edt",
      "tom-ford-grey-vetiver"
    ],
    "cheaperAlternativeIds": [
      "lalique-encre-noire"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Classic; Vetiver; Gentlemanly; Green; Dry.",
      "avoidIf": "Downrank if user avoids Vetiver or tags this style negatively."
    },
    "recommendSignals": [
      "Classic",
      "Vetiver",
      "Gentlemanly",
      "Green",
      "Dry"
    ],
    "imageFileName": "guerlain-vetiver.png",
    "image": "/fragrances/guerlain-vetiver.png",
    "directions": [
      "Citrus",
      "Green",
      "Spicy",
      "Tobacco",
      "Leather",
      "Vanilla",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Lemon",
      "Bergamot",
      "Neroli",
      "Vetiver",
      "Tobacco",
      "Pepper",
      "Oakmoss",
      "Myrrh",
      "Tonka",
      "Leather"
    ],
    "accords": [
      "Vetiver",
      "Tobacco",
      "Citrus",
      "Earthy"
    ]
  },
  {
    "id": "tom-ford-grey-vetiver",
    "name": "Grey Vetiver",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€120–200",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Grapefruit",
      "Orange blossom",
      "Sage"
    ],
    "heartNotes": [
      "Nutmeg",
      "Orris",
      "Pimento"
    ],
    "baseNotes": [
      "Vetiver",
      "Oakmoss",
      "Amberwood"
    ],
    "accordProfile": [
      "Vetiver",
      "Citrus",
      "Woody",
      "Spicy"
    ],
    "styleTags": [
      "Clean vetiver",
      "Office",
      "Elegant",
      "Dry",
      "Formal"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Formal",
      "Daily"
    ],
    "description": "A crisp polished vetiver fragrance with citrus lift and refined office-ready woods.",
    "caution": "Can feel restrained or formal.",
    "bestFor": [
      "Users who like clean vetiver / office profiles"
    ],
    "avoidIf": [
      "Users who dislike vetiver or citrus"
    ],
    "similarFragrances": [
      "Guerlain Vetiver",
      "Terre d’Hermès"
    ],
    "cheaperAlternatives": [
      "Lalique Encre Noire Sport"
    ],
    "similarIds": [
      "guerlain-vetiver",
      "terre-dhermes-edt"
    ],
    "cheaperAlternativeIds": [
      "lalique-encre-noire"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean vetiver; Office; Elegant; Dry; Formal.",
      "avoidIf": "Downrank if user avoids Vetiver or tags this style negatively."
    },
    "recommendSignals": [
      "Clean vetiver",
      "Office",
      "Elegant",
      "Dry",
      "Formal"
    ],
    "imageFileName": "tom-ford-grey-vetiver.png",
    "image": "/fragrances/tom-ford-grey-vetiver.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "premium",
    "priceLabel": "€120–200",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Grapefruit",
      "Orange blossom",
      "Sage",
      "Nutmeg",
      "Orris",
      "Pimento",
      "Vetiver",
      "Oakmoss",
      "Amberwood"
    ],
    "accords": [
      "Vetiver",
      "Citrus",
      "Woody",
      "Spicy"
    ]
  },
  {
    "id": "prada-lhomme",
    "name": "L’Homme",
    "brand": "Prada",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Neroli",
      "Pepper",
      "Cardamom"
    ],
    "heartNotes": [
      "Iris",
      "Violet",
      "Geranium"
    ],
    "baseNotes": [
      "Amber",
      "Cedar",
      "Sandalwood"
    ],
    "accordProfile": [
      "Iris",
      "Clean",
      "Powdery",
      "Amber"
    ],
    "styleTags": [
      "Clean",
      "Soapy",
      "Office",
      "Iris",
      "Powdery"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Formal"
    ],
    "description": "A clean elegant iris scent with soft powder, neroli brightness and polished amber woods.",
    "caution": "May feel too powdery or laundry-clean.",
    "bestFor": [
      "Users who like clean / soapy profiles"
    ],
    "avoidIf": [
      "Users who dislike iris or clean"
    ],
    "similarFragrances": [
      "Dior Homme 2020",
      "Prada Amber"
    ],
    "cheaperAlternatives": [
      "Ajmal Evoke Gold"
    ],
    "similarIds": [
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean; Soapy; Office; Iris; Powdery.",
      "avoidIf": "Downrank if user avoids Iris or tags this style negatively."
    },
    "recommendSignals": [
      "Clean",
      "Soapy",
      "Office",
      "Iris",
      "Powdery"
    ],
    "imageFileName": "prada-lhomme.png",
    "image": "/fragrances/prada-lhomme.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Amber",
      "Floral",
      "Powdery",
      "Musky / clean"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Neroli",
      "Pepper",
      "Cardamom",
      "Iris",
      "Violet",
      "Geranium",
      "Amber",
      "Cedar",
      "Sandalwood"
    ],
    "accords": [
      "Iris",
      "Clean",
      "Powdery",
      "Amber"
    ]
  },
  {
    "id": "prada-luna-rossa-carbon",
    "name": "Luna Rossa Carbon",
    "brand": "Prada",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€60–100",
    "popularity": "Popular modern designer",
    "topNotes": [
      "Bergamot",
      "Pepper"
    ],
    "heartNotes": [
      "Lavender",
      "Metallic notes"
    ],
    "baseNotes": [
      "Ambroxan",
      "Patchouli"
    ],
    "accordProfile": [
      "Lavender",
      "Ambroxan",
      "Metallic",
      "Fresh spicy"
    ],
    "styleTags": [
      "Fresh",
      "Clean",
      "Metallic",
      "Ambroxan",
      "Office"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A clean lavender-ambroxan fragrance with mineral-metallic freshness and polished daily wearability.",
    "caution": "Can feel synthetic if ambroxan bothers you.",
    "bestFor": [
      "Users who like fresh / clean profiles"
    ],
    "avoidIf": [
      "Users who dislike lavender or ambroxan"
    ],
    "similarFragrances": [
      "Dior Sauvage EDT",
      "Montblanc Explorer Platinum"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-sauvage-edt",
      "montblanc-explorer"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Clean; Metallic; Ambroxan; Office.",
      "avoidIf": "Downrank if user avoids Lavender or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Clean",
      "Metallic",
      "Ambroxan",
      "Office"
    ],
    "imageFileName": "prada-luna-rossa-carbon.png",
    "image": "/fragrances/prada-luna-rossa-carbon.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Musky / clean",
      "Mineral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€60–100",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Pepper",
      "Lavender",
      "Metallic notes",
      "Ambroxan",
      "Patchouli"
    ],
    "accords": [
      "Lavender",
      "Ambroxan",
      "Metallic",
      "Fresh spicy"
    ]
  },
  {
    "id": "versace-dylan-blue",
    "name": "Dylan Blue",
    "brand": "Versace",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–80",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Bergamot",
      "Grapefruit",
      "Fig leaf"
    ],
    "heartNotes": [
      "Violet leaf",
      "Black pepper",
      "Patchouli"
    ],
    "baseNotes": [
      "Ambroxan",
      "Musk",
      "Tonka",
      "Saffron"
    ],
    "accordProfile": [
      "Ambroxan",
      "Aquatic",
      "Citrus",
      "Woody"
    ],
    "styleTags": [
      "Blue",
      "Aquatic",
      "Ambroxan",
      "Versatile",
      "Affordable"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Casual",
      "Evening"
    ],
    "description": "A versatile aquatic-blue fragrance with citrus, ambroxan and slightly sweet woody-musk depth.",
    "caution": "Can feel generic and synthetic.",
    "bestFor": [
      "Users who like blue / aquatic profiles"
    ],
    "avoidIf": [
      "Users who dislike ambroxan or aquatic"
    ],
    "similarFragrances": [
      "Dior Sauvage",
      "Bleu de Chanel"
    ],
    "cheaperAlternatives": [
      "Armaf Aura Fresh"
    ],
    "similarIds": [
      "dior-sauvage-edt",
      "bleu-de-chanel-edp"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Blue; Aquatic; Ambroxan; Versatile; Affordable.",
      "avoidIf": "Downrank if user avoids Ambroxan or tags this style negatively."
    },
    "recommendSignals": [
      "Blue",
      "Aquatic",
      "Ambroxan",
      "Versatile",
      "Affordable"
    ],
    "imageFileName": "versace-dylan-blue.png",
    "image": "/fragrances/versace-dylan-blue.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Floral",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–80",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Grapefruit",
      "Fig leaf",
      "Violet leaf",
      "Black pepper",
      "Patchouli",
      "Ambroxan",
      "Musk",
      "Tonka",
      "Saffron"
    ],
    "accords": [
      "Ambroxan",
      "Aquatic",
      "Citrus",
      "Woody"
    ]
  },
  {
    "id": "versace-pour-homme",
    "name": "Pour Homme",
    "brand": "Versace",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€40–70",
    "popularity": "Beginner classic",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Neroli"
    ],
    "heartNotes": [
      "Hyacinth",
      "Cedar",
      "Sage"
    ],
    "baseNotes": [
      "Tonka",
      "Musk",
      "Amber"
    ],
    "accordProfile": [
      "Citrus",
      "Aromatic",
      "Clean",
      "Musky"
    ],
    "styleTags": [
      "Clean",
      "Citrus",
      "Fresh",
      "Office",
      "Gym"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Office",
      "Gym",
      "Casual"
    ],
    "description": "A clean citrus-aromatic fresh scent with neroli brightness and soft musky warmth.",
    "caution": "Safe but not very distinctive.",
    "bestFor": [
      "Users who like clean / citrus profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or aromatic"
    ],
    "similarFragrances": [
      "Chanel Allure Homme Sport",
      "Missoni Wave"
    ],
    "cheaperAlternatives": [
      "Nautica Voyage"
    ],
    "similarIds": [
      "chanel-allure-homme-sport-ee",
      "missoni-wave"
    ],
    "cheaperAlternativeIds": [
      "nautica-voyage"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean; Citrus; Fresh; Office; Gym.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Clean",
      "Citrus",
      "Fresh",
      "Office",
      "Gym"
    ],
    "imageFileName": "versace-pour-homme.png",
    "image": "/fragrances/versace-pour-homme.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Vanilla",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€40–70",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Lemon",
      "Bergamot",
      "Neroli",
      "Hyacinth",
      "Cedar",
      "Sage",
      "Tonka",
      "Musk",
      "Amber"
    ],
    "accords": [
      "Citrus",
      "Aromatic",
      "Clean",
      "Musky"
    ]
  },
  {
    "id": "versace-eros-edt",
    "name": "Eros",
    "brand": "Versace",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–80",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Mint",
      "Green apple",
      "Lemon"
    ],
    "heartNotes": [
      "Tonka",
      "Ambroxan",
      "Geranium"
    ],
    "baseNotes": [
      "Vanilla",
      "Cedar",
      "Vetiver"
    ],
    "accordProfile": [
      "Vanilla",
      "Mint",
      "Sweet",
      "Green apple"
    ],
    "styleTags": [
      "Sweet",
      "Club",
      "Loud",
      "Mint",
      "Youthful"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Evening",
      "Date"
    ],
    "description": "A loud mint-apple-vanilla fragrance with youthful energy and strong performance.",
    "caution": "Very sweet and loud.",
    "bestFor": [
      "Users who like sweet / club profiles"
    ],
    "avoidIf": [
      "Users who dislike vanilla or mint"
    ],
    "similarFragrances": [
      "Azzaro Wanted",
      "Invictus"
    ],
    "cheaperAlternatives": [
      "Lattafa Najdia"
    ],
    "similarIds": [
      "azzaro-wanted-by-night",
      "paco-rabanne-invictus"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet; Club; Loud; Mint; Youthful.",
      "avoidIf": "Downrank if user avoids Vanilla or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet",
      "Club",
      "Loud",
      "Mint",
      "Youthful"
    ],
    "imageFileName": "versace-eros-edt.png",
    "image": "/fragrances/versace-eros-edt.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Vanilla",
      "Sweet",
      "Oud",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–80",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Mint",
      "Green apple",
      "Lemon",
      "Tonka",
      "Ambroxan",
      "Geranium",
      "Vanilla",
      "Cedar",
      "Vetiver"
    ],
    "accords": [
      "Vanilla",
      "Mint",
      "Sweet",
      "Green apple"
    ]
  },
  {
    "id": "acqua-di-gio-profondo",
    "name": "Acqua di Giò Profondo",
    "brand": "Giorgio Armani",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Sea notes",
      "Bergamot",
      "Green mandarin"
    ],
    "heartNotes": [
      "Rosemary",
      "Lavender",
      "Cypress"
    ],
    "baseNotes": [
      "Mineral amber",
      "Musk",
      "Patchouli"
    ],
    "accordProfile": [
      "Aquatic",
      "Mineral",
      "Aromatic",
      "Citrus"
    ],
    "styleTags": [
      "Blue aquatic",
      "Mineral",
      "Fresh",
      "Modern",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Beach"
    ],
    "description": "A modern marine-aromatic fragrance with mineral freshness and smooth musky depth.",
    "caution": "May feel too blue or aquatic.",
    "bestFor": [
      "Users who like blue aquatic / mineral profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or mineral"
    ],
    "similarFragrances": [
      "Light Blue Eau Intense",
      "Aqva Marine"
    ],
    "cheaperAlternatives": [
      "Missoni Wave"
    ],
    "similarIds": [
      "dandg-light-blue-eau-intense"
    ],
    "cheaperAlternativeIds": [
      "missoni-wave"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Blue aquatic; Mineral; Fresh; Modern; Summer.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Blue aquatic",
      "Mineral",
      "Fresh",
      "Modern",
      "Summer"
    ],
    "imageFileName": "acqua-di-gio-profondo.png",
    "image": "/fragrances/acqua-di-gio-profondo.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Floral",
      "Musky / clean",
      "Mineral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Sea notes",
      "Bergamot",
      "Green mandarin",
      "Rosemary",
      "Lavender",
      "Cypress",
      "Mineral amber",
      "Musk",
      "Patchouli"
    ],
    "accords": [
      "Aquatic",
      "Mineral",
      "Aromatic",
      "Citrus"
    ]
  },
  {
    "id": "armani-code-parfum",
    "name": "Armani Code",
    "brand": "Giorgio Armani",
    "concentration": "Parfum",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Clary sage"
    ],
    "baseNotes": [
      "Tonka",
      "Cedar"
    ],
    "accordProfile": [
      "Iris",
      "Tonka",
      "Woody",
      "Aromatic"
    ],
    "styleTags": [
      "Elegant",
      "Tonka",
      "Iris",
      "Evening",
      "Smooth"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 5,
    "darknessLevel": 4,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Office"
    ],
    "description": "A refined modern Code profile with bergamot, iris and smooth tonka-cedar warmth.",
    "caution": "May be too polished or sweet for dry tastes.",
    "bestFor": [
      "Users who like elegant / tonka profiles"
    ],
    "avoidIf": [
      "Users who dislike iris or tonka"
    ],
    "similarFragrances": [
      "Prada L’Homme",
      "Dior Homme Intense"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "prada-lhomme",
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Elegant; Tonka; Iris; Evening; Smooth.",
      "avoidIf": "Downrank if user avoids Iris or tags this style negatively."
    },
    "recommendSignals": [
      "Elegant",
      "Tonka",
      "Iris",
      "Evening",
      "Smooth"
    ],
    "imageFileName": "armani-code-parfum.png",
    "image": "/fragrances/armani-code-parfum.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Vanilla",
      "Floral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Bergamot",
      "Iris",
      "Clary sage",
      "Tonka",
      "Cedar"
    ],
    "accords": [
      "Iris",
      "Tonka",
      "Woody",
      "Aromatic"
    ]
  },
  {
    "id": "jpg-le-male-le-parfum",
    "name": "Le Male Le Parfum",
    "brand": "Jean Paul Gaultier",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Lavender",
      "Iris"
    ],
    "baseNotes": [
      "Vanilla",
      "Oriental woods"
    ],
    "accordProfile": [
      "Cardamom",
      "Vanilla",
      "Lavender",
      "Amber"
    ],
    "styleTags": [
      "Sweet spicy",
      "Warm",
      "Date",
      "Smooth",
      "Modern"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening"
    ],
    "description": "A darker smoother Le Male with cardamom spice, lavender-iris elegance and rich vanilla warmth.",
    "caution": "Sweetness can dominate.",
    "bestFor": [
      "Users who like sweet spicy / warm profiles"
    ],
    "avoidIf": [
      "Users who dislike cardamom or vanilla"
    ],
    "similarFragrances": [
      "YSL La Nuit",
      "Spicebomb Extreme"
    ],
    "cheaperAlternatives": [
      "Lattafa Ramz Silver"
    ],
    "similarIds": [
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet spicy; Warm; Date; Smooth; Modern.",
      "avoidIf": "Downrank if user avoids Cardamom or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet spicy",
      "Warm",
      "Date",
      "Smooth",
      "Modern"
    ],
    "imageFileName": "jpg-le-male-le-parfum.png",
    "image": "/fragrances/jpg-le-male-le-parfum.png",
    "directions": [
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Cardamom",
      "Lavender",
      "Iris",
      "Vanilla",
      "Oriental woods"
    ],
    "accords": [
      "Cardamom",
      "Vanilla",
      "Lavender",
      "Amber"
    ]
  },
  {
    "id": "jpg-ultra-male",
    "name": "Ultra Male",
    "brand": "Jean Paul Gaultier",
    "concentration": "EDT Intense",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Mainstream club pick",
    "topNotes": [
      "Pear",
      "Mint",
      "Lavender"
    ],
    "heartNotes": [
      "Cinnamon",
      "Clary sage"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Patchouli"
    ],
    "accordProfile": [
      "Pear",
      "Vanilla",
      "Sweet",
      "Lavender"
    ],
    "styleTags": [
      "Very sweet",
      "Club",
      "Fruity",
      "Loud",
      "Youthful"
    ],
    "sweetnessLevel": 7,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening"
    ],
    "description": "A loud pear-vanilla fragrance with minty freshness and heavy sweet club energy.",
    "caution": "Very sweet and youthful.",
    "bestFor": [
      "Users who like very sweet / club profiles"
    ],
    "avoidIf": [
      "Users who dislike pear or vanilla"
    ],
    "similarFragrances": [
      "Afnan 9PM",
      "Versace Eros"
    ],
    "cheaperAlternatives": [
      "Afnan 9PM"
    ],
    "similarIds": [
      "afnan-9pm",
      "versace-eros-edt"
    ],
    "cheaperAlternativeIds": [
      "afnan-9pm"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Very sweet; Club; Fruity; Loud; Youthful.",
      "avoidIf": "Downrank if user avoids Pear or tags this style negatively."
    },
    "recommendSignals": [
      "Very sweet",
      "Club",
      "Fruity",
      "Loud",
      "Youthful"
    ],
    "imageFileName": "jpg-ultra-male.png",
    "image": "/fragrances/jpg-ultra-male.png",
    "directions": [
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Oud"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Pear",
      "Mint",
      "Lavender",
      "Cinnamon",
      "Clary sage",
      "Vanilla",
      "Amber",
      "Patchouli"
    ],
    "accords": [
      "Pear",
      "Vanilla",
      "Sweet",
      "Lavender"
    ]
  },
  {
    "id": "paco-rabanne-invictus",
    "name": "Invictus",
    "brand": "Rabanne",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Grapefruit",
      "Sea notes"
    ],
    "heartNotes": [
      "Bay leaf",
      "Jasmine"
    ],
    "baseNotes": [
      "Guaiac wood",
      "Oakmoss",
      "Ambergris"
    ],
    "accordProfile": [
      "Aquatic",
      "Sweet",
      "Ambergris",
      "Citrus"
    ],
    "styleTags": [
      "Sweet aquatic",
      "Youthful",
      "Sporty",
      "Mass appealing"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Casual",
      "Gym",
      "Evening"
    ],
    "description": "A sweet sporty aquatic with grapefruit, marine freshness and an ambergris-style base.",
    "caution": "Can feel synthetic and young.",
    "bestFor": [
      "Users who like sweet aquatic / youthful profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or sweet"
    ],
    "similarFragrances": [
      "Invictus Aqua",
      "Dylan Blue"
    ],
    "cheaperAlternatives": [
      "Lattafa Najdia"
    ],
    "similarIds": [
      "versace-dylan-blue"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet aquatic; Youthful; Sporty; Mass appealing.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet aquatic",
      "Youthful",
      "Sporty",
      "Mass appealing"
    ],
    "imageFileName": "paco-rabanne-invictus.png",
    "image": "/fragrances/paco-rabanne-invictus.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Grapefruit",
      "Sea notes",
      "Bay leaf",
      "Jasmine",
      "Guaiac wood",
      "Oakmoss",
      "Ambergris"
    ],
    "accords": [
      "Aquatic",
      "Sweet",
      "Ambergris",
      "Citrus"
    ]
  },
  {
    "id": "paco-rabanne-1-million-edt",
    "name": "1 Million",
    "brand": "Rabanne",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Blood mandarin",
      "Grapefruit",
      "Mint"
    ],
    "heartNotes": [
      "Cinnamon",
      "Rose",
      "Spices"
    ],
    "baseNotes": [
      "Leather",
      "Amber",
      "Patchouli"
    ],
    "accordProfile": [
      "Sweet",
      "Cinnamon",
      "Leather",
      "Amber"
    ],
    "styleTags": [
      "Sweet",
      "Club",
      "Leather",
      "Cinnamon",
      "Loud"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date"
    ],
    "description": "A bold sweet-spicy leather-amber fragrance with cinnamon warmth and club-ready projection.",
    "caution": "Very recognisable and sweet.",
    "bestFor": [
      "Users who like sweet / club profiles"
    ],
    "avoidIf": [
      "Users who dislike sweet or cinnamon"
    ],
    "similarFragrances": [
      "Azzaro Wanted by Night",
      "Ultra Male"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "azzaro-wanted-by-night",
      "jpg-ultra-male"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet; Club; Leather; Cinnamon; Loud.",
      "avoidIf": "Downrank if user avoids Sweet or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet",
      "Club",
      "Leather",
      "Cinnamon",
      "Loud"
    ],
    "imageFileName": "paco-rabanne-1-million-edt.png",
    "image": "/fragrances/paco-rabanne-1-million-edt.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Sweet",
      "Floral",
      "Oud"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Blood mandarin",
      "Grapefruit",
      "Mint",
      "Cinnamon",
      "Rose",
      "Spices",
      "Leather",
      "Amber",
      "Patchouli"
    ],
    "accords": [
      "Sweet",
      "Cinnamon",
      "Leather",
      "Amber"
    ]
  },
  {
    "id": "viktor-rolf-spicebomb-extreme",
    "name": "Spicebomb Extreme",
    "brand": "Viktor & Rolf",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Lavender",
      "Caraway",
      "Black pepper"
    ],
    "heartNotes": [
      "Cinnamon",
      "Saffron",
      "Cumin"
    ],
    "baseNotes": [
      "Tobacco",
      "Vanilla",
      "Amber"
    ],
    "accordProfile": [
      "Tobacco",
      "Vanilla",
      "Spicy",
      "Warm"
    ],
    "styleTags": [
      "Warm spicy",
      "Tobacco",
      "Vanilla",
      "Winter",
      "Loud"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Cold weather",
      "Evening",
      "Date"
    ],
    "description": "A powerful cold-weather tobacco-vanilla scent with cinnamon and dense spice warmth.",
    "caution": "Heavy and sweet; not for heat.",
    "bestFor": [
      "Users who like warm spicy / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike tobacco or vanilla"
    ],
    "similarFragrances": [
      "Tobacco Vanille",
      "Wanted by Night"
    ],
    "cheaperAlternatives": [
      "Cremo Spice & Black Vanilla"
    ],
    "similarIds": [
      "tom-ford-tobacco-vanille",
      "azzaro-wanted-by-night"
    ],
    "cheaperAlternativeIds": [
      "nishane-ani"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Warm spicy; Tobacco; Vanilla; Winter; Loud.",
      "avoidIf": "Downrank if user avoids Tobacco or tags this style negatively."
    },
    "recommendSignals": [
      "Warm spicy",
      "Tobacco",
      "Vanilla",
      "Winter",
      "Loud"
    ],
    "imageFileName": "viktor-rolf-spicebomb-extreme.png",
    "image": "/fragrances/viktor-rolf-spicebomb-extreme.png",
    "directions": [
      "Green",
      "Spicy",
      "Tobacco",
      "Amber",
      "Vanilla",
      "Oud"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Lavender",
      "Caraway",
      "Black pepper",
      "Cinnamon",
      "Saffron",
      "Cumin",
      "Tobacco",
      "Vanilla",
      "Amber"
    ],
    "accords": [
      "Tobacco",
      "Vanilla",
      "Spicy",
      "Warm"
    ]
  },
  {
    "id": "azzaro-wanted-by-night",
    "name": "Wanted by Night",
    "brand": "Azzaro",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Popular designer",
    "topNotes": [
      "Cinnamon",
      "Mandarin",
      "Lavender"
    ],
    "heartNotes": [
      "Fruity notes",
      "Incense",
      "Cumin"
    ],
    "baseNotes": [
      "Tobacco",
      "Vanilla",
      "Leather"
    ],
    "accordProfile": [
      "Cinnamon",
      "Tobacco",
      "Fruity",
      "Warm spicy"
    ],
    "styleTags": [
      "Sweet spicy",
      "Tobacco",
      "Night out",
      "Warm"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date"
    ],
    "description": "A warm cinnamon-tobacco scent with fruity sweetness, leather and evening-focused projection.",
    "caution": "Can feel sweet and synthetic if oversprayed.",
    "bestFor": [
      "Users who like sweet spicy / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike cinnamon or tobacco"
    ],
    "similarFragrances": [
      "1 Million",
      "Spicebomb Extreme"
    ],
    "cheaperAlternatives": [
      "Lattafa Ansaam Silver"
    ],
    "similarIds": [
      "paco-rabanne-1-million-edt",
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet spicy; Tobacco; Night out; Warm.",
      "avoidIf": "Downrank if user avoids Cinnamon or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet spicy",
      "Tobacco",
      "Night out",
      "Warm"
    ],
    "imageFileName": "azzaro-wanted-by-night.png",
    "image": "/fragrances/azzaro-wanted-by-night.png",
    "directions": [
      "Citrus",
      "Green",
      "Spicy",
      "Tobacco",
      "Leather",
      "Vanilla",
      "Sweet",
      "Smoky / incense"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Cinnamon",
      "Mandarin",
      "Lavender",
      "Fruity notes",
      "Incense",
      "Cumin",
      "Tobacco",
      "Vanilla",
      "Leather"
    ],
    "accords": [
      "Cinnamon",
      "Tobacco",
      "Fruity",
      "Warm spicy"
    ]
  },
  {
    "id": "azzaro-the-most-wanted-parfum",
    "name": "The Most Wanted",
    "brand": "Azzaro",
    "concentration": "Parfum",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Modern popular",
    "topNotes": [
      "Ginger"
    ],
    "heartNotes": [
      "Woodsy notes"
    ],
    "baseNotes": [
      "Bourbon vanilla"
    ],
    "accordProfile": [
      "Toffee",
      "Bourbon vanilla",
      "Amber",
      "Woody"
    ],
    "styleTags": [
      "Sweet",
      "Amber",
      "Vanilla",
      "Club",
      "Date"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening"
    ],
    "description": "A sweet dense amber-vanilla fragrance with ginger lift and smooth woody depth.",
    "caution": "Very sweet and cold-weather focused.",
    "bestFor": [
      "Users who like sweet / amber profiles"
    ],
    "avoidIf": [
      "Users who dislike toffee or bourbon vanilla"
    ],
    "similarFragrances": [
      "Stronger With You Intensely",
      "Le Male Le Parfum"
    ],
    "cheaperAlternatives": [
      "Lattafa Ansaam Silver"
    ],
    "similarIds": [
      "jpg-le-male-le-parfum"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet; Amber; Vanilla; Club; Date.",
      "avoidIf": "Downrank if user avoids Toffee or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet",
      "Amber",
      "Vanilla",
      "Club",
      "Date"
    ],
    "imageFileName": "azzaro-the-most-wanted-parfum.png",
    "image": "/fragrances/azzaro-the-most-wanted-parfum.png",
    "directions": [
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#c9a376",
      "#6b4d2a"
    ],
    "notes": [
      "Ginger",
      "Woodsy notes",
      "Bourbon vanilla"
    ],
    "accords": [
      "Toffee",
      "Bourbon vanilla",
      "Amber",
      "Woody"
    ]
  },
  {
    "id": "valentino-uomo-born-in-roma-intense",
    "name": "Uomo Born in Roma Intense",
    "brand": "Valentino",
    "concentration": "EDP Intense",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Modern popular",
    "topNotes": [
      "Vanilla"
    ],
    "heartNotes": [
      "Lavender"
    ],
    "baseNotes": [
      "Vetiver"
    ],
    "accordProfile": [
      "Vanilla",
      "Lavender",
      "Amber",
      "Aromatic"
    ],
    "styleTags": [
      "Sweet aromatic",
      "Vanilla",
      "Modern",
      "Date",
      "Club"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Casual"
    ],
    "description": "A sweet modern masculine built around vanilla, lavender and a vetiver base.",
    "caution": "Can be too sweet and familiar.",
    "bestFor": [
      "Users who like sweet aromatic / vanilla profiles"
    ],
    "avoidIf": [
      "Users who dislike vanilla or lavender"
    ],
    "similarFragrances": [
      "Le Male Le Parfum",
      "Armani Code Parfum"
    ],
    "cheaperAlternatives": [
      "Lattafa Ramz Silver"
    ],
    "similarIds": [
      "jpg-le-male-le-parfum",
      "armani-code-parfum"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet aromatic; Vanilla; Modern; Date; Club.",
      "avoidIf": "Downrank if user avoids Vanilla or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet aromatic",
      "Vanilla",
      "Modern",
      "Date",
      "Club"
    ],
    "imageFileName": "valentino-uomo-born-in-roma-intense.png",
    "image": "/fragrances/valentino-uomo-born-in-roma-intense.png",
    "directions": [
      "Green",
      "Amber",
      "Vanilla",
      "Sweet",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Vanilla",
      "Lavender",
      "Vetiver"
    ],
    "accords": [
      "Vanilla",
      "Lavender",
      "Amber",
      "Aromatic"
    ]
  },
  {
    "id": "valentino-uomo-intense",
    "name": "Uomo Intense",
    "brand": "Valentino",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Mandarin",
      "Clary sage"
    ],
    "heartNotes": [
      "Iris",
      "Tonka"
    ],
    "baseNotes": [
      "Leather",
      "Vanilla"
    ],
    "accordProfile": [
      "Iris",
      "Leather",
      "Vanilla",
      "Powdery"
    ],
    "styleTags": [
      "Iris",
      "Leather",
      "Sweet",
      "Dressy",
      "Powdery"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Formal",
      "Evening"
    ],
    "description": "A dressy iris-leather fragrance with tonka and vanilla warmth.",
    "caution": "May feel too powdery or sweet.",
    "bestFor": [
      "Users who like iris / leather profiles"
    ],
    "avoidIf": [
      "Users who dislike iris or leather"
    ],
    "similarFragrances": [
      "Dior Homme Intense",
      "Givenchy Gentleman Reserve Privee"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-homme-2020",
      "givenchy-gentleman-reserve-privee"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Iris; Leather; Sweet; Dressy; Powdery.",
      "avoidIf": "Downrank if user avoids Iris or tags this style negatively."
    },
    "recommendSignals": [
      "Iris",
      "Leather",
      "Sweet",
      "Dressy",
      "Powdery"
    ],
    "imageFileName": "valentino-uomo-intense.png",
    "image": "/fragrances/valentino-uomo-intense.png",
    "directions": [
      "Citrus",
      "Green",
      "Leather",
      "Vanilla",
      "Sweet",
      "Floral",
      "Powdery"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Mandarin",
      "Clary sage",
      "Iris",
      "Tonka",
      "Leather",
      "Vanilla"
    ],
    "accords": [
      "Iris",
      "Leather",
      "Vanilla",
      "Powdery"
    ]
  },
  {
    "id": "dior-homme-2020",
    "name": "Dior Homme",
    "brand": "Dior",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Popular designer",
    "topNotes": [
      "Bergamot",
      "Pink pepper",
      "Elemi"
    ],
    "heartNotes": [
      "Cashmere wood",
      "Atlas cedar",
      "Patchouli"
    ],
    "baseNotes": [
      "Iso E Super",
      "Vetiver",
      "White musk"
    ],
    "accordProfile": [
      "Woody",
      "Iso E Super",
      "Musk",
      "Cedar"
    ],
    "styleTags": [
      "Woody",
      "Clean",
      "Modern",
      "Office",
      "Low sweetness"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A clean modern woody scent with cedar, musk and airy synthetic woods.",
    "caution": "May feel simple if you want richness.",
    "bestFor": [
      "Users who like woody / clean profiles"
    ],
    "avoidIf": [
      "Users who dislike woody or iso e super"
    ],
    "similarFragrances": [
      "Prada L’Homme",
      "Bleu de Chanel Parfum"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "prada-lhomme",
      "bleu-de-chanel-edp"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Woody; Clean; Modern; Office; Low sweetness.",
      "avoidIf": "Downrank if user avoids Woody or tags this style negatively."
    },
    "recommendSignals": [
      "Woody",
      "Clean",
      "Modern",
      "Office",
      "Low sweetness"
    ],
    "imageFileName": "dior-homme-2020.png",
    "image": "/fragrances/dior-homme-2020.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Sweet",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Bergamot",
      "Pink pepper",
      "Elemi",
      "Cashmere wood",
      "Atlas cedar",
      "Patchouli",
      "Iso E Super",
      "Vetiver",
      "White musk"
    ],
    "accords": [
      "Woody",
      "Iso E Super",
      "Musk",
      "Cedar"
    ]
  },
  {
    "id": "dior-homme-intense",
    "name": "Dior Homme Intense",
    "brand": "Dior",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€100–160",
    "popularity": "Popular enthusiast pick",
    "topNotes": [
      "Lavender"
    ],
    "heartNotes": [
      "Iris",
      "Ambrette",
      "Pear"
    ],
    "baseNotes": [
      "Cedar",
      "Vetiver"
    ],
    "accordProfile": [
      "Iris",
      "Amber",
      "Powdery",
      "Woody"
    ],
    "styleTags": [
      "Iris",
      "Powdery",
      "Elegant",
      "Dressy",
      "Sweet"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Formal",
      "Date",
      "Evening"
    ],
    "description": "A refined powdery iris fragrance with soft amber, ambrette and woods.",
    "caution": "Not casual; can feel makeup-like.",
    "bestFor": [
      "Users who like iris / powdery profiles"
    ],
    "avoidIf": [
      "Users who dislike iris or amber"
    ],
    "similarFragrances": [
      "Valentino Uomo Intense",
      "Givenchy Gentleman Reserve Privee"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "valentino-uomo-intense",
      "givenchy-gentleman-reserve-privee"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Iris; Powdery; Elegant; Dressy; Sweet.",
      "avoidIf": "Downrank if user avoids Iris or tags this style negatively."
    },
    "recommendSignals": [
      "Iris",
      "Powdery",
      "Elegant",
      "Dressy",
      "Sweet"
    ],
    "imageFileName": "dior-homme-intense.png",
    "image": "/fragrances/dior-homme-intense.png",
    "directions": [
      "Green",
      "Woody",
      "Amber",
      "Sweet",
      "Floral",
      "Powdery",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€100–160",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Lavender",
      "Iris",
      "Ambrette",
      "Pear",
      "Cedar",
      "Vetiver"
    ],
    "accords": [
      "Iris",
      "Amber",
      "Powdery",
      "Woody"
    ]
  },
  {
    "id": "dior-fahrenheit-edt",
    "name": "Fahrenheit",
    "brand": "Dior",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Classic masculine",
    "topNotes": [
      "Lavender",
      "Mandarin",
      "Hawthorn"
    ],
    "heartNotes": [
      "Violet leaf",
      "Cedar",
      "Honeysuckle"
    ],
    "baseNotes": [
      "Leather",
      "Vetiver",
      "Musk",
      "Patchouli"
    ],
    "accordProfile": [
      "Leather",
      "Violet leaf",
      "Gasoline",
      "Woody"
    ],
    "styleTags": [
      "Leather",
      "Violet",
      "Classic",
      "Petrol",
      "Masculine"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Signature",
      "Evening",
      "Casual"
    ],
    "description": "A bold leather-violet classic with a petrol-like edge and masculine dry woods.",
    "caution": "Distinctive and polarising.",
    "bestFor": [
      "Users who like leather / violet profiles"
    ],
    "avoidIf": [
      "Users who dislike leather or violet leaf"
    ],
    "similarFragrances": [
      "Gucci Guilty Absolute",
      "Fahrenheit Parfum"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Leather; Violet; Classic; Petrol; Masculine.",
      "avoidIf": "Downrank if user avoids Leather or tags this style negatively."
    },
    "recommendSignals": [
      "Leather",
      "Violet",
      "Classic",
      "Petrol",
      "Masculine"
    ],
    "imageFileName": "dior-fahrenheit-edt.png",
    "image": "/fragrances/dior-fahrenheit-edt.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Leather",
      "Sweet",
      "Floral",
      "Smoky / incense",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Lavender",
      "Mandarin",
      "Hawthorn",
      "Violet leaf",
      "Cedar",
      "Honeysuckle",
      "Leather",
      "Vetiver",
      "Musk",
      "Patchouli"
    ],
    "accords": [
      "Leather",
      "Violet leaf",
      "Gasoline",
      "Woody"
    ]
  },
  {
    "id": "dior-eau-sauvage",
    "name": "Eau Sauvage",
    "brand": "Dior",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€70–120",
    "popularity": "Classic masculine",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Basil",
      "Rosemary"
    ],
    "heartNotes": [
      "Hedione",
      "Jasmine",
      "Coriander"
    ],
    "baseNotes": [
      "Oakmoss",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "accordProfile": [
      "Citrus",
      "Aromatic",
      "Oakmoss",
      "Fresh spicy"
    ],
    "styleTags": [
      "Classic citrus",
      "Gentlemanly",
      "Fresh",
      "Mossy",
      "Elegant"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Formal"
    ],
    "description": "A timeless citrus-aromatic fragrance with mossy depth and elegant old-school freshness.",
    "caution": "Lighter performance by modern standards.",
    "bestFor": [
      "Users who like classic citrus / gentlemanly profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or aromatic"
    ],
    "similarFragrances": [
      "Chanel Pour Monsieur",
      "Terre Eau Givrée"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Classic citrus; Gentlemanly; Fresh; Mossy; Elegant.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Classic citrus",
      "Gentlemanly",
      "Fresh",
      "Mossy",
      "Elegant"
    ],
    "imageFileName": "dior-eau-sauvage.png",
    "image": "/fragrances/dior-eau-sauvage.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Spicy",
      "Amber",
      "Floral",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€70–120",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Lemon",
      "Bergamot",
      "Basil",
      "Rosemary",
      "Hedione",
      "Jasmine",
      "Coriander",
      "Oakmoss",
      "Vetiver",
      "Musk",
      "Amber"
    ],
    "accords": [
      "Citrus",
      "Aromatic",
      "Oakmoss",
      "Fresh spicy"
    ]
  },
  {
    "id": "creed-aventus",
    "name": "Aventus",
    "brand": "Creed",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€250+",
    "popularity": "Niche icon",
    "topNotes": [
      "Pineapple",
      "Bergamot",
      "Blackcurrant",
      "Apple"
    ],
    "heartNotes": [
      "Birch",
      "Patchouli",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss",
      "Ambergris",
      "Vanilla"
    ],
    "accordProfile": [
      "Fruity",
      "Smoky",
      "Woody",
      "Musk"
    ],
    "styleTags": [
      "Fruity chypre",
      "Smoky",
      "Masculine",
      "Signature",
      "Expensive"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Signature",
      "Office",
      "Evening"
    ],
    "description": "A fruity-smoky masculine icon with pineapple brightness, birch smoke and musky oakmoss depth.",
    "caution": "Expensive, cloned heavily, and batch expectations vary.",
    "bestFor": [
      "Users who like fruity chypre / smoky profiles"
    ],
    "avoidIf": [
      "Users who dislike fruity or smoky"
    ],
    "similarFragrances": [
      "Montblanc Explorer",
      "Nishane Hacivat"
    ],
    "cheaperAlternatives": [
      "Club de Nuit Intense Man"
    ],
    "similarIds": [
      "montblanc-explorer",
      "nishane-hacivat"
    ],
    "cheaperAlternativeIds": [
      "armaf-club-de-nuit-intense-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fruity chypre; Smoky; Masculine; Signature; Expensive.",
      "avoidIf": "Downrank if user avoids Fruity or tags this style negatively."
    },
    "recommendSignals": [
      "Fruity chypre",
      "Smoky",
      "Masculine",
      "Signature",
      "Expensive"
    ],
    "imageFileName": "creed-aventus.png",
    "image": "/fragrances/creed-aventus.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Amber",
      "Vanilla",
      "Floral",
      "Smoky / incense",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Pineapple",
      "Bergamot",
      "Blackcurrant",
      "Apple",
      "Birch",
      "Patchouli",
      "Jasmine",
      "Rose",
      "Musk",
      "Oakmoss",
      "Ambergris",
      "Vanilla"
    ],
    "accords": [
      "Fruity",
      "Smoky",
      "Woody",
      "Musk"
    ]
  },
  {
    "id": "creed-green-irish-tweed",
    "name": "Green Irish Tweed",
    "brand": "Creed",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€250+",
    "popularity": "Niche classic",
    "topNotes": [
      "Lemon verbena",
      "Iris"
    ],
    "heartNotes": [
      "Violet leaf"
    ],
    "baseNotes": [
      "Ambergris",
      "Sandalwood"
    ],
    "accordProfile": [
      "Green",
      "Iris",
      "Violet leaf",
      "Fresh spicy"
    ],
    "styleTags": [
      "Green",
      "Classic",
      "Fresh",
      "Elegant",
      "Gentlemanly"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Signature",
      "Formal"
    ],
    "description": "A refined green fragrance with violet leaf freshness, iris elegance and smooth sandalwood depth.",
    "caution": "Can feel mature or classic.",
    "bestFor": [
      "Users who like green / classic profiles"
    ],
    "avoidIf": [
      "Users who dislike green or iris"
    ],
    "similarFragrances": [
      "Davidoff Cool Water",
      "Parfums de Marly Greenley"
    ],
    "cheaperAlternatives": [
      "Armaf Tres Nuit"
    ],
    "similarIds": [
      "davidoff-cool-water",
      "parfums-de-marly-greenley"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Green; Classic; Fresh; Elegant; Gentlemanly.",
      "avoidIf": "Downrank if user avoids Green or tags this style negatively."
    },
    "recommendSignals": [
      "Green",
      "Classic",
      "Fresh",
      "Elegant",
      "Gentlemanly"
    ],
    "imageFileName": "creed-green-irish-tweed.png",
    "image": "/fragrances/creed-green-irish-tweed.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Lemon verbena",
      "Iris",
      "Violet leaf",
      "Ambergris",
      "Sandalwood"
    ],
    "accords": [
      "Green",
      "Iris",
      "Violet leaf",
      "Fresh spicy"
    ]
  },
  {
    "id": "creed-millesime-imperial",
    "name": "Millésime Impérial",
    "brand": "Creed",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€250+",
    "popularity": "Niche classic",
    "topNotes": [
      "Fruity notes",
      "Sea salt"
    ],
    "heartNotes": [
      "Sicilian lemon",
      "Bergamot",
      "Iris"
    ],
    "baseNotes": [
      "Musk",
      "Woody notes",
      "Marine notes"
    ],
    "accordProfile": [
      "Marine",
      "Citrus",
      "Fruity",
      "Musky"
    ],
    "styleTags": [
      "Salty",
      "Citrus",
      "Luxurious",
      "Summer",
      "Soft"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Beach",
      "Casual"
    ],
    "description": "A luxurious salty citrus-marine scent with fruit, iris and soft musky woods.",
    "caution": "Often considered soft in performance.",
    "bestFor": [
      "Users who like salty / citrus profiles"
    ],
    "avoidIf": [
      "Users who dislike marine or citrus"
    ],
    "similarFragrances": [
      "Sean John Unforgivable",
      "Bvlgari Aqva"
    ],
    "cheaperAlternatives": [
      "Armaf Milestone"
    ],
    "similarIds": [
      "bvlgari-aqva-pour-homme"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Salty; Citrus; Luxurious; Summer; Soft.",
      "avoidIf": "Downrank if user avoids Marine or tags this style negatively."
    },
    "recommendSignals": [
      "Salty",
      "Citrus",
      "Luxurious",
      "Summer",
      "Soft"
    ],
    "imageFileName": "creed-millesime-imperial.png",
    "image": "/fragrances/creed-millesime-imperial.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Floral",
      "Musky / clean",
      "Salty"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Fruity notes",
      "Sea salt",
      "Sicilian lemon",
      "Bergamot",
      "Iris",
      "Musk",
      "Woody notes",
      "Marine notes"
    ],
    "accords": [
      "Marine",
      "Citrus",
      "Fruity",
      "Musky"
    ]
  },
  {
    "id": "creed-silver-mountain-water",
    "name": "Silver Mountain Water",
    "brand": "Creed",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€250+",
    "popularity": "Niche classic",
    "topNotes": [
      "Bergamot",
      "Mandarin"
    ],
    "heartNotes": [
      "Green tea",
      "Blackcurrant"
    ],
    "baseNotes": [
      "Musk",
      "Petitgrain",
      "Sandalwood",
      "Galbanum"
    ],
    "accordProfile": [
      "Tea",
      "Citrus",
      "Musky",
      "Green"
    ],
    "styleTags": [
      "Clean",
      "Tea",
      "Fresh",
      "Metallic",
      "Mountain"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Signature"
    ],
    "description": "A clean green tea and citrus fragrance with musky mineral freshness.",
    "caution": "Can feel metallic or too soft.",
    "bestFor": [
      "Users who like clean / tea profiles"
    ],
    "avoidIf": [
      "Users who dislike tea or citrus"
    ],
    "similarFragrances": [
      "Mefisto",
      "Wulong Cha"
    ],
    "cheaperAlternatives": [
      "Armaf Sillage"
    ],
    "similarIds": [
      "nishane-wulong-cha"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean; Tea; Fresh; Metallic; Mountain.",
      "avoidIf": "Downrank if user avoids Tea or tags this style negatively."
    },
    "recommendSignals": [
      "Clean",
      "Tea",
      "Fresh",
      "Metallic",
      "Mountain"
    ],
    "imageFileName": "creed-silver-mountain-water.png",
    "image": "/fragrances/creed-silver-mountain-water.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Musky / clean",
      "Mineral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Mandarin",
      "Green tea",
      "Blackcurrant",
      "Musk",
      "Petitgrain",
      "Sandalwood",
      "Galbanum"
    ],
    "accords": [
      "Tea",
      "Citrus",
      "Musky",
      "Green"
    ]
  },
  {
    "id": "parfums-de-marly-layton",
    "name": "Layton",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Niche mainstream",
    "topNotes": [
      "Apple",
      "Lavender",
      "Bergamot"
    ],
    "heartNotes": [
      "Geranium",
      "Violet",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Cardamom",
      "Sandalwood",
      "Patchouli"
    ],
    "accordProfile": [
      "Apple",
      "Vanilla",
      "Spicy",
      "Aromatic"
    ],
    "styleTags": [
      "Sweet spicy",
      "Apple",
      "Vanilla",
      "Compliment",
      "Date"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 4,
    "uniquenessLevel": 6,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Signature"
    ],
    "description": "A rich apple-lavender fragrance with spicy vanilla woods and strong performance.",
    "caution": "Sweet and powerful; sample first if you prefer dry scents.",
    "bestFor": [
      "Users who like sweet spicy / apple profiles"
    ],
    "avoidIf": [
      "Users who dislike apple or vanilla"
    ],
    "similarFragrances": [
      "Boss Bottled Absolu",
      "Pegasus Exclusif"
    ],
    "cheaperAlternatives": [
      "Al Haramain Detour Noir"
    ],
    "similarIds": [
      "boss-bottled-edt",
      "parfums-de-marly-pegasus"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet spicy; Apple; Vanilla; Compliment; Date.",
      "avoidIf": "Downrank if user avoids Apple or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet spicy",
      "Apple",
      "Vanilla",
      "Compliment",
      "Date"
    ],
    "imageFileName": "parfums-de-marly-layton.png",
    "image": "/fragrances/parfums-de-marly-layton.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Apple",
      "Lavender",
      "Bergamot",
      "Geranium",
      "Violet",
      "Jasmine",
      "Vanilla",
      "Cardamom",
      "Sandalwood",
      "Patchouli"
    ],
    "accords": [
      "Apple",
      "Vanilla",
      "Spicy",
      "Aromatic"
    ]
  },
  {
    "id": "parfums-de-marly-pegasus",
    "name": "Pegasus",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Bergamot",
      "Heliotrope",
      "Cumin"
    ],
    "heartNotes": [
      "Bitter almond",
      "Lavender",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "accordProfile": [
      "Almond",
      "Vanilla",
      "Metallic",
      "Powdery"
    ],
    "styleTags": [
      "Almond",
      "Sweet",
      "Powdery",
      "Metallic",
      "Dressy"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 4,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Formal",
      "Date"
    ],
    "description": "A distinctive almond-vanilla fragrance with lavender, sandalwood and metallic powdery facets.",
    "caution": "Polarising due to almond and metallic facets.",
    "bestFor": [
      "Users who like almond / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike almond or vanilla"
    ],
    "similarFragrances": [
      "Givenchy Gentleman Reserve Privee",
      "Dior Homme Intense"
    ],
    "cheaperAlternatives": [
      "Armaf Craze"
    ],
    "similarIds": [
      "givenchy-gentleman-reserve-privee",
      "dior-homme-2020"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Almond; Sweet; Powdery; Metallic; Dressy.",
      "avoidIf": "Downrank if user avoids Almond or tags this style negatively."
    },
    "recommendSignals": [
      "Almond",
      "Sweet",
      "Powdery",
      "Metallic",
      "Dressy"
    ],
    "imageFileName": "parfums-de-marly-pegasus.png",
    "image": "/fragrances/parfums-de-marly-pegasus.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Amber",
      "Vanilla",
      "Sweet",
      "Floral",
      "Powdery",
      "Mineral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Bergamot",
      "Heliotrope",
      "Cumin",
      "Bitter almond",
      "Lavender",
      "Jasmine",
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "accords": [
      "Almond",
      "Vanilla",
      "Metallic",
      "Powdery"
    ]
  },
  {
    "id": "parfums-de-marly-herod",
    "name": "Herod",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Cinnamon",
      "Pepper"
    ],
    "heartNotes": [
      "Tobacco leaf",
      "Incense",
      "Osmanthus"
    ],
    "baseNotes": [
      "Vanilla",
      "Iso E Super",
      "Musk",
      "Cedar"
    ],
    "accordProfile": [
      "Tobacco",
      "Vanilla",
      "Cinnamon",
      "Woody"
    ],
    "styleTags": [
      "Tobacco",
      "Vanilla",
      "Warm spicy",
      "Smooth",
      "Winter"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Cold weather"
    ],
    "description": "A smooth tobacco-vanilla scent with cinnamon warmth, incense nuance and woody depth.",
    "caution": "Softer projection than some expect.",
    "bestFor": [
      "Users who like tobacco / vanilla profiles"
    ],
    "avoidIf": [
      "Users who dislike tobacco or vanilla"
    ],
    "similarFragrances": [
      "Tobacco Vanille",
      "Spicebomb Extreme"
    ],
    "cheaperAlternatives": [
      "Al Haramain Amber Oud Tobacco Edition"
    ],
    "similarIds": [
      "tom-ford-tobacco-vanille",
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Tobacco; Vanilla; Warm spicy; Smooth; Winter.",
      "avoidIf": "Downrank if user avoids Tobacco or tags this style negatively."
    },
    "recommendSignals": [
      "Tobacco",
      "Vanilla",
      "Warm spicy",
      "Smooth",
      "Winter"
    ],
    "imageFileName": "parfums-de-marly-herod.png",
    "image": "/fragrances/parfums-de-marly-herod.png",
    "directions": [
      "Woody",
      "Spicy",
      "Tobacco",
      "Vanilla",
      "Smoky / incense",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#a67847",
      "#4a2f15"
    ],
    "notes": [
      "Cinnamon",
      "Pepper",
      "Tobacco leaf",
      "Incense",
      "Osmanthus",
      "Vanilla",
      "Iso E Super",
      "Musk",
      "Cedar"
    ],
    "accords": [
      "Tobacco",
      "Vanilla",
      "Cinnamon",
      "Woody"
    ]
  },
  {
    "id": "parfums-de-marly-carlisle",
    "name": "Carlisle",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€200–300",
    "popularity": "Popular niche",
    "topNotes": [
      "Green apple",
      "Nutmeg",
      "Saffron"
    ],
    "heartNotes": [
      "Tonka",
      "Rose",
      "Osmanthus"
    ],
    "baseNotes": [
      "Patchouli",
      "Vanilla",
      "Opoponax"
    ],
    "accordProfile": [
      "Apple",
      "Patchouli",
      "Vanilla",
      "Spicy"
    ],
    "styleTags": [
      "Dark sweet",
      "Patchouli",
      "Apple",
      "Luxury",
      "Winter"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Evening",
      "Formal"
    ],
    "description": "A dense dark sweet fragrance with apple, spice, rose-tonka facets and patchouli-vanilla depth.",
    "caution": "Heavy and sweet; not versatile in heat.",
    "bestFor": [
      "Users who like dark sweet / patchouli profiles"
    ],
    "avoidIf": [
      "Users who dislike apple or patchouli"
    ],
    "similarFragrances": [
      "Layton Exclusif",
      "Initio Side Effect"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "parfums-de-marly-layton",
      "initio-side-effect"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Dark sweet; Patchouli; Apple; Luxury; Winter.",
      "avoidIf": "Downrank if user avoids Apple or tags this style negatively."
    },
    "recommendSignals": [
      "Dark sweet",
      "Patchouli",
      "Apple",
      "Luxury",
      "Winter"
    ],
    "imageFileName": "parfums-de-marly-carlisle.png",
    "image": "/fragrances/parfums-de-marly-carlisle.png",
    "directions": [
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Green apple",
      "Nutmeg",
      "Saffron",
      "Tonka",
      "Rose",
      "Osmanthus",
      "Patchouli",
      "Vanilla",
      "Opoponax"
    ],
    "accords": [
      "Apple",
      "Patchouli",
      "Vanilla",
      "Spicy"
    ]
  },
  {
    "id": "parfums-de-marly-sedley",
    "name": "Sedley",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche fresh",
    "topNotes": [
      "Bergamot",
      "Spearmint",
      "Water notes"
    ],
    "heartNotes": [
      "Lavender",
      "Rosemary",
      "Geranium"
    ],
    "baseNotes": [
      "Ambroxan",
      "Sandalwood",
      "Cedar",
      "Incense"
    ],
    "accordProfile": [
      "Mint",
      "Citrus",
      "Ambroxan",
      "Aromatic"
    ],
    "styleTags": [
      "Fresh",
      "Minty",
      "Modern",
      "Niche fresh",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Beach"
    ],
    "description": "A bright mint-citrus aromatic with water notes, herbs and clean woody ambroxan depth.",
    "caution": "Can feel expensive for a familiar fresh style.",
    "bestFor": [
      "Users who like fresh / minty profiles"
    ],
    "avoidIf": [
      "Users who dislike mint or citrus"
    ],
    "similarFragrances": [
      "Percival",
      "Bleu de Chanel"
    ],
    "cheaperAlternatives": [
      "Missoni Wave"
    ],
    "similarIds": [
      "bleu-de-chanel-edp"
    ],
    "cheaperAlternativeIds": [
      "missoni-wave"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Minty; Modern; Niche fresh; Summer.",
      "avoidIf": "Downrank if user avoids Mint or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Minty",
      "Modern",
      "Niche fresh",
      "Summer"
    ],
    "imageFileName": "parfums-de-marly-sedley.png",
    "image": "/fragrances/parfums-de-marly-sedley.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Floral",
      "Smoky / incense",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Spearmint",
      "Water notes",
      "Lavender",
      "Rosemary",
      "Geranium",
      "Ambroxan",
      "Sandalwood",
      "Cedar",
      "Incense"
    ],
    "accords": [
      "Mint",
      "Citrus",
      "Ambroxan",
      "Aromatic"
    ]
  },
  {
    "id": "parfums-de-marly-greenley",
    "name": "Greenley",
    "brand": "Parfums de Marly",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche fresh",
    "topNotes": [
      "Green apple",
      "Bergamot",
      "Mandarin"
    ],
    "heartNotes": [
      "Petitgrain",
      "Cashmeran",
      "Cedar"
    ],
    "baseNotes": [
      "Oakmoss",
      "Musk",
      "Amberwood"
    ],
    "accordProfile": [
      "Green apple",
      "Citrus",
      "Woody",
      "Musky"
    ],
    "styleTags": [
      "Green",
      "Apple",
      "Fresh woody",
      "Spring",
      "Modern"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Casual",
      "Office"
    ],
    "description": "A crisp green apple-woody scent with citrus, petitgrain and musky oakmoss depth.",
    "caution": "May feel too fruity-green for serious woody tastes.",
    "bestFor": [
      "Users who like green / apple profiles"
    ],
    "avoidIf": [
      "Users who dislike green apple or citrus"
    ],
    "similarFragrances": [
      "Green Irish Tweed",
      "H24"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-green-irish-tweed",
      "hermes-h24-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Green; Apple; Fresh woody; Spring; Modern.",
      "avoidIf": "Downrank if user avoids Green apple or tags this style negatively."
    },
    "recommendSignals": [
      "Green",
      "Apple",
      "Fresh woody",
      "Spring",
      "Modern"
    ],
    "imageFileName": "parfums-de-marly-greenley.png",
    "image": "/fragrances/parfums-de-marly-greenley.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Green apple",
      "Bergamot",
      "Mandarin",
      "Petitgrain",
      "Cashmeran",
      "Cedar",
      "Oakmoss",
      "Musk",
      "Amberwood"
    ],
    "accords": [
      "Green apple",
      "Citrus",
      "Woody",
      "Musky"
    ]
  },
  {
    "id": "mfk-baccarat-rouge-540",
    "name": "Baccarat Rouge 540",
    "brand": "Maison Francis Kurkdjian",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€250+",
    "popularity": "Niche mainstream",
    "topNotes": [
      "Saffron",
      "Jasmine"
    ],
    "heartNotes": [
      "Amberwood",
      "Ambergris"
    ],
    "baseNotes": [
      "Fir resin",
      "Cedar"
    ],
    "accordProfile": [
      "Amber",
      "Saffron",
      "Sweet",
      "Woody"
    ],
    "styleTags": [
      "Sweet amber",
      "Airy",
      "Molecular",
      "Luxury",
      "Unisex"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Signature",
      "Formal"
    ],
    "description": "An airy saffron-amberwood fragrance with sweet resinous warmth and crystalline trail.",
    "caution": "Very recognisable and polarising.",
    "bestFor": [
      "Users who like sweet amber / airy profiles"
    ],
    "avoidIf": [
      "Users who dislike amber or saffron"
    ],
    "similarFragrances": [
      "Ariana Grande Cloud",
      "Amber Oud Ruby"
    ],
    "cheaperAlternatives": [
      "Lattafa Ana Abiyedh Rouge"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet amber; Airy; Molecular; Luxury; Unisex.",
      "avoidIf": "Downrank if user avoids Amber or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet amber",
      "Airy",
      "Molecular",
      "Luxury",
      "Unisex"
    ],
    "imageFileName": "mfk-baccarat-rouge-540.png",
    "image": "/fragrances/mfk-baccarat-rouge-540.png",
    "directions": [
      "Woody",
      "Spicy",
      "Amber",
      "Sweet",
      "Floral",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#b87f5e",
      "#5c3322"
    ],
    "notes": [
      "Saffron",
      "Jasmine",
      "Amberwood",
      "Ambergris",
      "Fir resin",
      "Cedar"
    ],
    "accords": [
      "Amber",
      "Saffron",
      "Sweet",
      "Woody"
    ]
  },
  {
    "id": "mfk-gentle-fluidity-silver",
    "name": "Gentle Fluidity Silver",
    "brand": "Maison Francis Kurkdjian",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€180–250",
    "popularity": "Popular niche fresh",
    "topNotes": [
      "Juniper berries",
      "Nutmeg"
    ],
    "heartNotes": [
      "Coriander",
      "Musks"
    ],
    "baseNotes": [
      "Amber woods",
      "Vanilla"
    ],
    "accordProfile": [
      "Juniper",
      "Aromatic",
      "Musky",
      "Woody"
    ],
    "styleTags": [
      "Clean",
      "Gin-like",
      "Musky",
      "Elegant",
      "Fresh spicy"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A crisp juniper-musk fragrance with nutmeg spice and polished amber-woods warmth.",
    "caution": "Soft and refined rather than loud.",
    "bestFor": [
      "Users who like clean / gin-like profiles"
    ],
    "avoidIf": [
      "Users who dislike juniper or aromatic"
    ],
    "similarFragrances": [
      "Creed Silver Mountain Water",
      "Terre Eau Givrée"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-silver-mountain-water"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean; Gin-like; Musky; Elegant; Fresh spicy.",
      "avoidIf": "Downrank if user avoids Juniper or tags this style negatively."
    },
    "recommendSignals": [
      "Clean",
      "Gin-like",
      "Musky",
      "Elegant",
      "Fresh spicy"
    ],
    "imageFileName": "mfk-gentle-fluidity-silver.png",
    "image": "/fragrances/mfk-gentle-fluidity-silver.png",
    "directions": [
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Juniper berries",
      "Nutmeg",
      "Coriander",
      "Musks",
      "Amber woods",
      "Vanilla"
    ],
    "accords": [
      "Juniper",
      "Aromatic",
      "Musky",
      "Woody"
    ]
  },
  {
    "id": "le-labo-santal-33",
    "name": "Santal 33",
    "brand": "Le Labo",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Niche mainstream",
    "topNotes": [
      "Cardamom",
      "Violet"
    ],
    "heartNotes": [
      "Iris",
      "Ambrox",
      "Papyrus"
    ],
    "baseNotes": [
      "Sandalwood",
      "Cedar",
      "Leather"
    ],
    "accordProfile": [
      "Sandalwood",
      "Leather",
      "Iris",
      "Woody"
    ],
    "styleTags": [
      "Woody",
      "Leathery",
      "Dry",
      "Signature",
      "Polarising"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Spring",
      "Winter"
    ],
    "occasionTags": [
      "Signature",
      "Casual",
      "Office"
    ],
    "description": "A dry sandalwood-leather scent with cardamom, iris and papyrus texture.",
    "caution": "Some perceive a pickle-like facet.",
    "bestFor": [
      "Users who like woody / leathery profiles"
    ],
    "avoidIf": [
      "Users who dislike sandalwood or leather"
    ],
    "similarFragrances": [
      "Maison Louis Marie No.04",
      "Tam Dao"
    ],
    "cheaperAlternatives": [
      "Cremo Palo Santo"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Woody; Leathery; Dry; Signature; Polarising.",
      "avoidIf": "Downrank if user avoids Sandalwood or tags this style negatively."
    },
    "recommendSignals": [
      "Woody",
      "Leathery",
      "Dry",
      "Signature",
      "Polarising"
    ],
    "imageFileName": "le-labo-santal-33.png",
    "image": "/fragrances/le-labo-santal-33.png",
    "directions": [
      "Woody",
      "Spicy",
      "Leather",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#7d5a3c",
      "#33200f"
    ],
    "notes": [
      "Cardamom",
      "Violet",
      "Iris",
      "Ambrox",
      "Papyrus",
      "Sandalwood",
      "Cedar",
      "Leather"
    ],
    "accords": [
      "Sandalwood",
      "Leather",
      "Iris",
      "Woody"
    ]
  },
  {
    "id": "le-labo-another-13",
    "name": "Another 13",
    "brand": "Le Labo",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Niche mainstream",
    "topNotes": [
      "Ambrette",
      "Pear"
    ],
    "heartNotes": [
      "Jasmine",
      "Moss"
    ],
    "baseNotes": [
      "Ambroxan",
      "Iso E Super",
      "Musk"
    ],
    "accordProfile": [
      "Ambroxan",
      "Musky",
      "Woody",
      "Pear"
    ],
    "styleTags": [
      "Molecular",
      "Musky",
      "Clean",
      "Skin scent",
      "Minimal"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 5,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Date"
    ],
    "description": "A musky molecular fragrance with pear nuance, ambroxan and airy synthetic woods.",
    "caution": "Can feel subtle, abstract or overpriced.",
    "bestFor": [
      "Users who like molecular / musky profiles"
    ],
    "avoidIf": [
      "Users who dislike ambroxan or musky"
    ],
    "similarFragrances": [
      "Not A Perfume",
      "Molecule 02"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Molecular; Musky; Clean; Skin scent; Minimal.",
      "avoidIf": "Downrank if user avoids Ambroxan or tags this style negatively."
    },
    "recommendSignals": [
      "Molecular",
      "Musky",
      "Clean",
      "Skin scent",
      "Minimal"
    ],
    "imageFileName": "le-labo-another-13.png",
    "image": "/fragrances/le-labo-another-13.png",
    "directions": [
      "Woody",
      "Floral",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#a285a8",
      "#4a3550"
    ],
    "notes": [
      "Ambrette",
      "Pear",
      "Jasmine",
      "Moss",
      "Ambroxan",
      "Iso E Super",
      "Musk"
    ],
    "accords": [
      "Ambroxan",
      "Musky",
      "Woody",
      "Pear"
    ]
  },
  {
    "id": "le-labo-the-noir-29",
    "name": "Thé Noir 29",
    "brand": "Le Labo",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Fig",
      "Bay leaf",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Vetiver",
      "Musk"
    ],
    "baseNotes": [
      "Tobacco",
      "Hay"
    ],
    "accordProfile": [
      "Tea",
      "Fig",
      "Tobacco",
      "Woody"
    ],
    "styleTags": [
      "Tea",
      "Tobacco",
      "Fig",
      "Dry",
      "Sophisticated"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Spring",
      "Winter"
    ],
    "occasionTags": [
      "Casual",
      "Evening",
      "Office"
    ],
    "description": "A textured tea scent with fig, bay, cedar, vetiver and dry tobacco-hay depth.",
    "caution": "More atmospheric than crowd-pleasing.",
    "bestFor": [
      "Users who like tea / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike tea or fig"
    ],
    "similarFragrances": [
      "Gris Charnel",
      "Tobacco Oud"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Tea; Tobacco; Fig; Dry; Sophisticated.",
      "avoidIf": "Downrank if user avoids Tea or tags this style negatively."
    },
    "recommendSignals": [
      "Tea",
      "Tobacco",
      "Fig",
      "Dry",
      "Sophisticated"
    ],
    "imageFileName": "le-labo-the-noir-29.png",
    "image": "/fragrances/le-labo-the-noir-29.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Tobacco",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Fig",
      "Bay leaf",
      "Bergamot",
      "Cedar",
      "Vetiver",
      "Musk",
      "Tobacco",
      "Hay"
    ],
    "accords": [
      "Tea",
      "Fig",
      "Tobacco",
      "Woody"
    ]
  },
  {
    "id": "byredo-bal-dafrique",
    "name": "Bal d’Afrique",
    "brand": "Byredo",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Neroli"
    ],
    "heartNotes": [
      "Violet",
      "Jasmine",
      "Cyclamen"
    ],
    "baseNotes": [
      "Vetiver",
      "Musk",
      "Amber",
      "Cedar"
    ],
    "accordProfile": [
      "Citrus",
      "Vetiver",
      "Floral",
      "Musky"
    ],
    "styleTags": [
      "Fresh",
      "Citrus",
      "Vetiver",
      "Clean",
      "Artistic"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Signature"
    ],
    "description": "A bright citrus-vetiver fragrance with soft florals, clean musk and elegant warmth.",
    "caution": "Performance is moderate and style leans soft.",
    "bestFor": [
      "Users who like fresh / citrus profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or vetiver"
    ],
    "similarFragrances": [
      "Terre d’Hermès fresh side",
      "Chanel Paris-Edimbourg"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "terre-dhermes-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Citrus; Vetiver; Clean; Artistic.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Citrus",
      "Vetiver",
      "Clean",
      "Artistic"
    ],
    "imageFileName": "byredo-bal-dafrique.png",
    "image": "/fragrances/byredo-bal-dafrique.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Amber",
      "Floral",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Lemon",
      "Neroli",
      "Violet",
      "Jasmine",
      "Cyclamen",
      "Vetiver",
      "Musk",
      "Amber",
      "Cedar"
    ],
    "accords": [
      "Citrus",
      "Vetiver",
      "Floral",
      "Musky"
    ]
  },
  {
    "id": "byredo-gypsy-water",
    "name": "Gypsy Water",
    "brand": "Byredo",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Pepper",
      "Juniper"
    ],
    "heartNotes": [
      "Incense",
      "Pine needles",
      "Orris"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "accordProfile": [
      "Juniper",
      "Vanilla",
      "Woody",
      "Citrus"
    ],
    "styleTags": [
      "Woody fresh",
      "Incense",
      "Soft vanilla",
      "Bohemian"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Summer"
    ],
    "occasionTags": [
      "Casual",
      "Signature"
    ],
    "description": "A soft woody scent with juniper, citrus, pine-incense nuance and gentle vanilla-sandalwood warmth.",
    "caution": "Known for modest performance.",
    "bestFor": [
      "Users who like woody fresh / incense profiles"
    ],
    "avoidIf": [
      "Users who dislike juniper or vanilla"
    ],
    "similarFragrances": [
      "Diptyque Tam Dao",
      "Commodity Moss"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Woody fresh; Incense; Soft vanilla; Bohemian.",
      "avoidIf": "Downrank if user avoids Juniper or tags this style negatively."
    },
    "recommendSignals": [
      "Woody fresh",
      "Incense",
      "Soft vanilla",
      "Bohemian"
    ],
    "imageFileName": "byredo-gypsy-water.png",
    "image": "/fragrances/byredo-gypsy-water.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Smoky / incense"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Lemon",
      "Pepper",
      "Juniper",
      "Incense",
      "Pine needles",
      "Orris",
      "Vanilla",
      "Sandalwood",
      "Amber"
    ],
    "accords": [
      "Juniper",
      "Vanilla",
      "Woody",
      "Citrus"
    ]
  },
  {
    "id": "tom-ford-ombre-leather",
    "name": "Ombré Leather",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€120–180",
    "popularity": "Mainstream luxury",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Leather",
      "Jasmine"
    ],
    "baseNotes": [
      "Amber",
      "Moss",
      "Patchouli"
    ],
    "accordProfile": [
      "Leather",
      "Amber",
      "Floral",
      "Spicy"
    ],
    "styleTags": [
      "Leather",
      "Smooth",
      "Bold",
      "Evening",
      "Masculine"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Formal"
    ],
    "description": "A bold but smooth leather fragrance with cardamom spice, jasmine softness and amber-moss depth.",
    "caution": "Leather-forward and heavy in heat.",
    "bestFor": [
      "Users who like leather / smooth profiles"
    ],
    "avoidIf": [
      "Users who dislike leather or amber"
    ],
    "similarFragrances": [
      "Tuscan Leather",
      "Dior Fahrenheit"
    ],
    "cheaperAlternatives": [
      "Maison Alhambra Amber & Leather"
    ],
    "similarIds": [
      "dior-fahrenheit-edt"
    ],
    "cheaperAlternativeIds": [
      "maison-alhambra-amber-and-leather"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Leather; Smooth; Bold; Evening; Masculine.",
      "avoidIf": "Downrank if user avoids Leather or tags this style negatively."
    },
    "recommendSignals": [
      "Leather",
      "Smooth",
      "Bold",
      "Evening",
      "Masculine"
    ],
    "imageFileName": "tom-ford-ombre-leather.png",
    "image": "/fragrances/tom-ford-ombre-leather.png",
    "directions": [
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Floral"
    ],
    "priceCategory": "premium",
    "priceLabel": "€120–180",
    "colors": [
      "#7d5a3c",
      "#33200f"
    ],
    "notes": [
      "Cardamom",
      "Leather",
      "Jasmine",
      "Amber",
      "Moss",
      "Patchouli"
    ],
    "accords": [
      "Leather",
      "Amber",
      "Floral",
      "Spicy"
    ]
  },
  {
    "id": "tom-ford-noir-extreme",
    "name": "Noir Extreme",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€120–180",
    "popularity": "Popular luxury",
    "topNotes": [
      "Mandarin",
      "Neroli",
      "Saffron",
      "Nutmeg"
    ],
    "heartNotes": [
      "Kulfi",
      "Rose",
      "Jasmine"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Sandalwood"
    ],
    "accordProfile": [
      "Kulfi",
      "Amber",
      "Vanilla",
      "Spicy"
    ],
    "styleTags": [
      "Sweet spicy",
      "Dessert",
      "Date",
      "Luxurious",
      "Warm"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Formal"
    ],
    "description": "A creamy sweet-spicy amber fragrance with dessert nuance, florals and sandalwood-vanilla depth.",
    "caution": "Too sweet and dense for fresh-fragrance lovers.",
    "bestFor": [
      "Users who like sweet spicy / dessert profiles"
    ],
    "avoidIf": [
      "Users who dislike kulfi or amber"
    ],
    "similarFragrances": [
      "Spicebomb Extreme",
      "Code Profumo"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet spicy; Dessert; Date; Luxurious; Warm.",
      "avoidIf": "Downrank if user avoids Kulfi or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet spicy",
      "Dessert",
      "Date",
      "Luxurious",
      "Warm"
    ],
    "imageFileName": "tom-ford-noir-extreme.png",
    "image": "/fragrances/tom-ford-noir-extreme.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "premium",
    "priceLabel": "€120–180",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Mandarin",
      "Neroli",
      "Saffron",
      "Nutmeg",
      "Kulfi",
      "Rose",
      "Jasmine",
      "Vanilla",
      "Amber",
      "Sandalwood"
    ],
    "accords": [
      "Kulfi",
      "Amber",
      "Vanilla",
      "Spicy"
    ]
  },
  {
    "id": "tom-ford-tobacco-vanille",
    "name": "Tobacco Vanille",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€250+",
    "popularity": "Luxury icon",
    "topNotes": [
      "Tobacco leaf",
      "Spices"
    ],
    "heartNotes": [
      "Vanilla",
      "Cacao",
      "Tonka"
    ],
    "baseNotes": [
      "Dried fruits",
      "Woody notes"
    ],
    "accordProfile": [
      "Tobacco",
      "Vanilla",
      "Spices",
      "Dried fruits"
    ],
    "styleTags": [
      "Tobacco",
      "Vanilla",
      "Sweet",
      "Rich",
      "Winter"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Evening",
      "Formal"
    ],
    "description": "A rich tobacco-vanilla scent with spices, cacao, tonka and dried fruit warmth.",
    "caution": "Very sweet, strong and expensive.",
    "bestFor": [
      "Users who like tobacco / vanilla profiles"
    ],
    "avoidIf": [
      "Users who dislike tobacco or vanilla"
    ],
    "similarFragrances": [
      "Herod",
      "Spicebomb Extreme"
    ],
    "cheaperAlternatives": [
      "Al Haramain Amber Oud Tobacco Edition"
    ],
    "similarIds": [
      "parfums-de-marly-herod",
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Tobacco; Vanilla; Sweet; Rich; Winter.",
      "avoidIf": "Downrank if user avoids Tobacco or tags this style negatively."
    },
    "recommendSignals": [
      "Tobacco",
      "Vanilla",
      "Sweet",
      "Rich",
      "Winter"
    ],
    "imageFileName": "tom-ford-tobacco-vanille.png",
    "image": "/fragrances/tom-ford-tobacco-vanille.png",
    "directions": [
      "Woody",
      "Spicy",
      "Tobacco",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#a67847",
      "#4a2f15"
    ],
    "notes": [
      "Tobacco leaf",
      "Spices",
      "Vanilla",
      "Cacao",
      "Tonka",
      "Dried fruits",
      "Woody notes"
    ],
    "accords": [
      "Tobacco",
      "Vanilla",
      "Spices",
      "Dried fruits"
    ]
  },
  {
    "id": "tom-ford-oud-wood",
    "name": "Oud Wood",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€200–300",
    "popularity": "Luxury icon",
    "topNotes": [
      "Rosewood",
      "Cardamom",
      "Pepper"
    ],
    "heartNotes": [
      "Oud",
      "Sandalwood",
      "Vetiver"
    ],
    "baseNotes": [
      "Tonka",
      "Vanilla",
      "Amber"
    ],
    "accordProfile": [
      "Oud",
      "Woody",
      "Spicy",
      "Amber"
    ],
    "styleTags": [
      "Woody",
      "Soft oud",
      "Elegant",
      "Dry",
      "Luxury"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Office",
      "Evening",
      "Formal"
    ],
    "description": "A smooth accessible oud-wood fragrance with cardamom spice, sandalwood and soft amber-tonka warmth.",
    "caution": "More polished and subtle than heavy oud lovers expect.",
    "bestFor": [
      "Users who like woody / soft oud profiles"
    ],
    "avoidIf": [
      "Users who dislike oud or woody"
    ],
    "similarFragrances": [
      "Oud Wood Intense",
      "Versace Oud Noir"
    ],
    "cheaperAlternatives": [
      "Maison Alhambra Woody Oud"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "maison-alhambra-woody-oud"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Woody; Soft oud; Elegant; Dry; Luxury.",
      "avoidIf": "Downrank if user avoids Oud or tags this style negatively."
    },
    "recommendSignals": [
      "Woody",
      "Soft oud",
      "Elegant",
      "Dry",
      "Luxury"
    ],
    "imageFileName": "tom-ford-oud-wood.png",
    "image": "/fragrances/tom-ford-oud-wood.png",
    "directions": [
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Floral",
      "Oud",
      "Vetiver"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Rosewood",
      "Cardamom",
      "Pepper",
      "Oud",
      "Sandalwood",
      "Vetiver",
      "Tonka",
      "Vanilla",
      "Amber"
    ],
    "accords": [
      "Oud",
      "Woody",
      "Spicy",
      "Amber"
    ]
  },
  {
    "id": "tom-ford-beau-de-jour",
    "name": "Beau de Jour",
    "brand": "Tom Ford",
    "concentration": "EDP",
    "category": "Designer/Luxury",
    "priceTier": "€120–180",
    "popularity": "Popular luxury",
    "topNotes": [
      "Lavender"
    ],
    "heartNotes": [
      "Rosemary",
      "Geranium",
      "Mint",
      "Basil"
    ],
    "baseNotes": [
      "Oakmoss",
      "Patchouli",
      "Amber"
    ],
    "accordProfile": [
      "Lavender",
      "Aromatic",
      "Oakmoss",
      "Patchouli"
    ],
    "styleTags": [
      "Fougère",
      "Barbershop",
      "Gentlemanly",
      "Green",
      "Formal"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Formal",
      "Casual"
    ],
    "description": "A refined aromatic fougère with lavender, herbs, mossy patchouli and mature masculine polish.",
    "caution": "Can feel too traditional or barbershop-like.",
    "bestFor": [
      "Users who like fougère / barbershop profiles"
    ],
    "avoidIf": [
      "Users who dislike lavender or aromatic"
    ],
    "similarFragrances": [
      "Rive Gauche Pour Homme",
      "Azzaro Pour Homme"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "versace-pour-homme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fougère; Barbershop; Gentlemanly; Green; Formal.",
      "avoidIf": "Downrank if user avoids Lavender or tags this style negatively."
    },
    "recommendSignals": [
      "Fougère",
      "Barbershop",
      "Gentlemanly",
      "Green",
      "Formal"
    ],
    "imageFileName": "tom-ford-beau-de-jour.png",
    "image": "/fragrances/tom-ford-beau-de-jour.png",
    "directions": [
      "Green",
      "Woody",
      "Amber",
      "Floral",
      "Powdery"
    ],
    "priceCategory": "premium",
    "priceLabel": "€120–180",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Lavender",
      "Rosemary",
      "Geranium",
      "Mint",
      "Basil",
      "Oakmoss",
      "Patchouli",
      "Amber"
    ],
    "accords": [
      "Lavender",
      "Aromatic",
      "Oakmoss",
      "Patchouli"
    ]
  },
  {
    "id": "nishane-hacivat",
    "name": "Hacivat",
    "brand": "Nishane",
    "concentration": "Extrait",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Pineapple",
      "Grapefruit",
      "Bergamot"
    ],
    "heartNotes": [
      "Cedar",
      "Patchouli",
      "Jasmine"
    ],
    "baseNotes": [
      "Oakmoss",
      "Woody notes"
    ],
    "accordProfile": [
      "Pineapple",
      "Oakmoss",
      "Woody",
      "Citrus"
    ],
    "styleTags": [
      "Fruity chypre",
      "Mossy",
      "Powerful",
      "Sharp",
      "Niche"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Signature",
      "Office",
      "Casual"
    ],
    "description": "A powerful pineapple-citrus chypre with dense oakmoss and woody patchouli depth.",
    "caution": "Can feel sharp, mossy and assertive.",
    "bestFor": [
      "Users who like fruity chypre / mossy profiles"
    ],
    "avoidIf": [
      "Users who dislike pineapple or oakmoss"
    ],
    "similarFragrances": [
      "Creed Aventus",
      "Cedrat Boise"
    ],
    "cheaperAlternatives": [
      "Afnan Supremacy Not Only Intense"
    ],
    "similarIds": [
      "creed-aventus"
    ],
    "cheaperAlternativeIds": [
      "afnan-supremacy-not-only-intense"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fruity chypre; Mossy; Powerful; Sharp; Niche.",
      "avoidIf": "Downrank if user avoids Pineapple or tags this style negatively."
    },
    "recommendSignals": [
      "Fruity chypre",
      "Mossy",
      "Powerful",
      "Sharp",
      "Niche"
    ],
    "imageFileName": "nishane-hacivat.png",
    "image": "/fragrances/nishane-hacivat.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Pineapple",
      "Grapefruit",
      "Bergamot",
      "Cedar",
      "Patchouli",
      "Jasmine",
      "Oakmoss",
      "Woody notes"
    ],
    "accords": [
      "Pineapple",
      "Oakmoss",
      "Woody",
      "Citrus"
    ]
  },
  {
    "id": "nishane-wulong-cha",
    "name": "Wulong Cha",
    "brand": "Nishane",
    "concentration": "Extrait",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche fresh",
    "topNotes": [
      "Bergamot",
      "Orange",
      "Mandarin"
    ],
    "heartNotes": [
      "Oolong tea",
      "Nutmeg"
    ],
    "baseNotes": [
      "Fig",
      "Musk"
    ],
    "accordProfile": [
      "Tea",
      "Citrus",
      "Green",
      "Musky"
    ],
    "styleTags": [
      "Tea",
      "Citrus",
      "Fresh",
      "Elegant",
      "Unisex"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Beach"
    ],
    "description": "A bright tea-citrus fragrance with oolong, soft spice, fig and clean musky depth.",
    "caution": "Refined rather than traditionally masculine.",
    "bestFor": [
      "Users who like tea / citrus profiles"
    ],
    "avoidIf": [
      "Users who dislike tea or citrus"
    ],
    "similarFragrances": [
      "Silver Mountain Water",
      "Imagination"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-silver-mountain-water"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Tea; Citrus; Fresh; Elegant; Unisex.",
      "avoidIf": "Downrank if user avoids Tea or tags this style negatively."
    },
    "recommendSignals": [
      "Tea",
      "Citrus",
      "Fresh",
      "Elegant",
      "Unisex"
    ],
    "imageFileName": "nishane-wulong-cha.png",
    "image": "/fragrances/nishane-wulong-cha.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Orange",
      "Mandarin",
      "Oolong tea",
      "Nutmeg",
      "Fig",
      "Musk"
    ],
    "accords": [
      "Tea",
      "Citrus",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "nishane-ani",
    "name": "Ani",
    "brand": "Nishane",
    "concentration": "Extrait",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Bergamot",
      "Ginger",
      "Pink pepper"
    ],
    "heartNotes": [
      "Blackcurrant",
      "Cardamom",
      "Rose"
    ],
    "baseNotes": [
      "Vanilla",
      "Benzoin",
      "Sandalwood",
      "Cedar"
    ],
    "accordProfile": [
      "Vanilla",
      "Ginger",
      "Spicy",
      "Green"
    ],
    "styleTags": [
      "Vanilla",
      "Spicy",
      "Rich",
      "Niche",
      "Warm"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 4,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Cold weather"
    ],
    "description": "A rich spicy vanilla fragrance with ginger lift, green nuance and resinous woods.",
    "caution": "Sweet and dense; not for hot weather.",
    "bestFor": [
      "Users who like vanilla / spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike vanilla or ginger"
    ],
    "similarFragrances": [
      "Grand Soir",
      "Spicebomb Extreme"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "viktor-rolf-spicebomb-extreme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Vanilla; Spicy; Rich; Niche; Warm.",
      "avoidIf": "Downrank if user avoids Vanilla or tags this style negatively."
    },
    "recommendSignals": [
      "Vanilla",
      "Spicy",
      "Rich",
      "Niche",
      "Warm"
    ],
    "imageFileName": "nishane-ani.png",
    "image": "/fragrances/nishane-ani.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Floral"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Bergamot",
      "Ginger",
      "Pink pepper",
      "Blackcurrant",
      "Cardamom",
      "Rose",
      "Vanilla",
      "Benzoin",
      "Sandalwood",
      "Cedar"
    ],
    "accords": [
      "Vanilla",
      "Ginger",
      "Spicy",
      "Green"
    ]
  },
  {
    "id": "xerjoff-naxos",
    "name": "Naxos",
    "brand": "Xerjoff",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Lavender"
    ],
    "heartNotes": [
      "Honey",
      "Cinnamon",
      "Cashmeran"
    ],
    "baseNotes": [
      "Tobacco leaf",
      "Tonka",
      "Vanilla"
    ],
    "accordProfile": [
      "Honey",
      "Tobacco",
      "Lavender",
      "Citrus"
    ],
    "styleTags": [
      "Honey tobacco",
      "Sweet",
      "Luxurious",
      "Warm spicy"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Formal"
    ],
    "description": "A luxurious honey-tobacco fragrance with lavender-citrus lift, cinnamon warmth and tonka-vanilla depth.",
    "caution": "Sweet honey is prominent.",
    "bestFor": [
      "Users who like honey tobacco / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike honey or tobacco"
    ],
    "similarFragrances": [
      "Herod",
      "Tobacco Vanille"
    ],
    "cheaperAlternatives": [
      "Insurrection II Wild"
    ],
    "similarIds": [
      "parfums-de-marly-herod",
      "tom-ford-tobacco-vanille"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Honey tobacco; Sweet; Luxurious; Warm spicy.",
      "avoidIf": "Downrank if user avoids Honey or tags this style negatively."
    },
    "recommendSignals": [
      "Honey tobacco",
      "Sweet",
      "Luxurious",
      "Warm spicy"
    ],
    "imageFileName": "xerjoff-naxos.png",
    "image": "/fragrances/xerjoff-naxos.png",
    "directions": [
      "Citrus",
      "Green",
      "Spicy",
      "Tobacco",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Bergamot",
      "Lemon",
      "Lavender",
      "Honey",
      "Cinnamon",
      "Cashmeran",
      "Tobacco leaf",
      "Tonka",
      "Vanilla"
    ],
    "accords": [
      "Honey",
      "Tobacco",
      "Lavender",
      "Citrus"
    ]
  },
  {
    "id": "xerjoff-erba-pura",
    "name": "Erba Pura",
    "brand": "Xerjoff",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Niche mainstream",
    "topNotes": [
      "Orange",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Fruits"
    ],
    "baseNotes": [
      "White musk",
      "Amber",
      "Vanilla"
    ],
    "accordProfile": [
      "Fruity",
      "Sweet",
      "Musky",
      "Amber"
    ],
    "styleTags": [
      "Very fruity",
      "Sweet",
      "Loud",
      "Musky",
      "Unisex"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Evening",
      "Signature"
    ],
    "description": "A powerful fruity musk fragrance with citrus opening, mixed fruits and sweet amber-vanilla base.",
    "caution": "Very sweet, loud and polarising.",
    "bestFor": [
      "Users who like very fruity / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike fruity or sweet"
    ],
    "similarFragrances": [
      "Kirkè",
      "Ana Abiyedh"
    ],
    "cheaperAlternatives": [
      "Lattafa Ana Abiyedh"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Very fruity; Sweet; Loud; Musky; Unisex.",
      "avoidIf": "Downrank if user avoids Fruity or tags this style negatively."
    },
    "recommendSignals": [
      "Very fruity",
      "Sweet",
      "Loud",
      "Musky",
      "Unisex"
    ],
    "imageFileName": "xerjoff-erba-pura.png",
    "image": "/fragrances/xerjoff-erba-pura.png",
    "directions": [
      "Citrus",
      "Amber",
      "Vanilla",
      "Sweet",
      "Oud",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Orange",
      "Lemon",
      "Bergamot",
      "Fruits",
      "White musk",
      "Amber",
      "Vanilla"
    ],
    "accords": [
      "Fruity",
      "Sweet",
      "Musky",
      "Amber"
    ]
  },
  {
    "id": "xerjoff-renaissance",
    "name": "Renaissance",
    "brand": "Xerjoff",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€180–250",
    "popularity": "Popular niche fresh",
    "topNotes": [
      "Lemon",
      "Bergamot",
      "Mandarin"
    ],
    "heartNotes": [
      "Mint",
      "Lily-of-the-valley",
      "Rose"
    ],
    "baseNotes": [
      "Cedar",
      "Patchouli",
      "Amber",
      "Musk"
    ],
    "accordProfile": [
      "Citrus",
      "Mint",
      "Green",
      "Musky"
    ],
    "styleTags": [
      "Citrus",
      "Mint",
      "Fresh",
      "Luxury",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Beach",
      "Office"
    ],
    "description": "A sparkling citrus fragrance with minty green freshness and a clean woody musky base.",
    "caution": "High-end fresh profile but not dark or complex.",
    "bestFor": [
      "Users who like citrus / mint profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or mint"
    ],
    "similarFragrances": [
      "Sedley",
      "Imagination"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "parfums-de-marly-sedley"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Citrus; Mint; Fresh; Luxury; Summer.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Citrus",
      "Mint",
      "Fresh",
      "Luxury",
      "Summer"
    ],
    "imageFileName": "xerjoff-renaissance.png",
    "image": "/fragrances/xerjoff-renaissance.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Floral",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€180–250",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Lemon",
      "Bergamot",
      "Mandarin",
      "Mint",
      "Lily-of-the-valley",
      "Rose",
      "Cedar",
      "Patchouli",
      "Amber",
      "Musk"
    ],
    "accords": [
      "Citrus",
      "Mint",
      "Green",
      "Musky"
    ]
  },
  {
    "id": "amouage-reflection-man",
    "name": "Reflection Man",
    "brand": "Amouage",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€200–300",
    "popularity": "Niche classic",
    "topNotes": [
      "Rosemary",
      "Red pepper",
      "Bitter orange leaf"
    ],
    "heartNotes": [
      "Neroli",
      "Orris",
      "Jasmine"
    ],
    "baseNotes": [
      "Sandalwood",
      "Vetiver",
      "Cedar"
    ],
    "accordProfile": [
      "White floral",
      "Woody",
      "Powdery",
      "Clean"
    ],
    "styleTags": [
      "Clean floral",
      "Elegant",
      "Powdery",
      "Luxury",
      "Masculine"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Formal",
      "Signature"
    ],
    "description": "A polished white-floral woody fragrance with neroli, jasmine, orris and creamy sandalwood-vetiver depth.",
    "caution": "May feel too floral or powdery.",
    "bestFor": [
      "Users who like clean floral / elegant profiles"
    ],
    "avoidIf": [
      "Users who dislike white floral or woody"
    ],
    "similarFragrances": [
      "Prada L’Homme",
      "Le Male fresh side"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "prada-lhomme"
    ],
    "cheaperAlternativeIds": [
      "amouage-interlude-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Clean floral; Elegant; Powdery; Luxury; Masculine.",
      "avoidIf": "Downrank if user avoids White floral or tags this style negatively."
    },
    "recommendSignals": [
      "Clean floral",
      "Elegant",
      "Powdery",
      "Luxury",
      "Masculine"
    ],
    "imageFileName": "amouage-reflection-man.png",
    "image": "/fragrances/amouage-reflection-man.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Floral",
      "Powdery",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Rosemary",
      "Red pepper",
      "Bitter orange leaf",
      "Neroli",
      "Orris",
      "Jasmine",
      "Sandalwood",
      "Vetiver",
      "Cedar"
    ],
    "accords": [
      "White floral",
      "Woody",
      "Powdery",
      "Clean"
    ]
  },
  {
    "id": "amouage-interlude-man",
    "name": "Interlude Man",
    "brand": "Amouage",
    "concentration": "EDP",
    "category": "Niche/Luxury",
    "priceTier": "€200–300",
    "popularity": "Niche classic",
    "topNotes": [
      "Oregano",
      "Pepper",
      "Bergamot"
    ],
    "heartNotes": [
      "Incense",
      "Opoponax",
      "Amber"
    ],
    "baseNotes": [
      "Leather",
      "Oud",
      "Patchouli"
    ],
    "accordProfile": [
      "Incense",
      "Amber",
      "Oregano",
      "Smoke"
    ],
    "styleTags": [
      "Smoky",
      "Incense",
      "Dark",
      "Complex",
      "Beast mode"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Formal",
      "Signature"
    ],
    "description": "A dense smoky incense fragrance with oregano, amber resins, leather, oud and serious power.",
    "caution": "Extremely strong and polarising.",
    "bestFor": [
      "Users who like smoky / incense profiles"
    ],
    "avoidIf": [
      "Users who dislike incense or amber"
    ],
    "similarFragrances": [
      "Black Afgano",
      "Epic Man"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Smoky; Incense; Dark; Complex; Beast mode.",
      "avoidIf": "Downrank if user avoids Incense or tags this style negatively."
    },
    "recommendSignals": [
      "Smoky",
      "Incense",
      "Dark",
      "Complex",
      "Beast mode"
    ],
    "imageFileName": "amouage-interlude-man.png",
    "image": "/fragrances/amouage-interlude-man.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Smoky / incense",
      "Oud"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Oregano",
      "Pepper",
      "Bergamot",
      "Incense",
      "Opoponax",
      "Amber",
      "Leather",
      "Oud",
      "Patchouli"
    ],
    "accords": [
      "Incense",
      "Amber",
      "Oregano",
      "Smoke"
    ]
  },
  {
    "id": "initio-side-effect",
    "name": "Side Effect",
    "brand": "Initio Parfums Privés",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€200–300",
    "popularity": "Popular niche",
    "topNotes": [
      "Rum"
    ],
    "heartNotes": [
      "Cinnamon",
      "Tobacco"
    ],
    "baseNotes": [
      "Vanilla",
      "Hedione",
      "Saffron",
      "Sandalwood"
    ],
    "accordProfile": [
      "Rum",
      "Tobacco",
      "Vanilla",
      "Cinnamon"
    ],
    "styleTags": [
      "Boozy",
      "Tobacco",
      "Vanilla",
      "Sweet",
      "Date night"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening"
    ],
    "description": "A boozy tobacco-vanilla fragrance with cinnamon warmth and seductive ambered depth.",
    "caution": "Sweet and rich; not versatile in heat.",
    "bestFor": [
      "Users who like boozy / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike rum or tobacco"
    ],
    "similarFragrances": [
      "Herod",
      "Naxos",
      "Jazz Club"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "parfums-de-marly-herod",
      "xerjoff-naxos",
      "replica-jazz-club"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Boozy; Tobacco; Vanilla; Sweet; Date night.",
      "avoidIf": "Downrank if user avoids Rum or tags this style negatively."
    },
    "recommendSignals": [
      "Boozy",
      "Tobacco",
      "Vanilla",
      "Sweet",
      "Date night"
    ],
    "imageFileName": "initio-side-effect.png",
    "image": "/fragrances/initio-side-effect.png",
    "directions": [
      "Woody",
      "Spicy",
      "Tobacco",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#a67847",
      "#4a2f15"
    ],
    "notes": [
      "Rum",
      "Cinnamon",
      "Tobacco",
      "Vanilla",
      "Hedione",
      "Saffron",
      "Sandalwood"
    ],
    "accords": [
      "Rum",
      "Tobacco",
      "Vanilla",
      "Cinnamon"
    ]
  },
  {
    "id": "initio-oud-for-greatness",
    "name": "Oud for Greatness",
    "brand": "Initio Parfums Privés",
    "concentration": "EDP",
    "category": "Niche",
    "priceTier": "€200–300",
    "popularity": "Popular niche",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Lavender"
    ],
    "heartNotes": [
      "Agarwood"
    ],
    "baseNotes": [
      "Patchouli",
      "Musk"
    ],
    "accordProfile": [
      "Oud",
      "Saffron",
      "Lavender",
      "Musky"
    ],
    "styleTags": [
      "Oud",
      "Saffron",
      "Powerful",
      "Clean",
      "Statement"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Signature",
      "Formal"
    ],
    "description": "A strong saffron-lavender oud fragrance with clean musky patchouli depth and huge projection.",
    "caution": "Very assertive and widely cloned.",
    "bestFor": [
      "Users who like oud / saffron profiles"
    ],
    "avoidIf": [
      "Users who dislike oud or saffron"
    ],
    "similarFragrances": [
      "Oud for Glory",
      "Haltane"
    ],
    "cheaperAlternatives": [
      "Lattafa Oud for Glory"
    ],
    "similarIds": [
      "lattafa-oud-for-glory"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Oud; Saffron; Powerful; Clean; Statement.",
      "avoidIf": "Downrank if user avoids Oud or tags this style negatively."
    },
    "recommendSignals": [
      "Oud",
      "Saffron",
      "Powerful",
      "Clean",
      "Statement"
    ],
    "imageFileName": "initio-oud-for-greatness.png",
    "image": "/fragrances/initio-oud-for-greatness.png",
    "directions": [
      "Green",
      "Woody",
      "Spicy",
      "Oud",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€200–300",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Saffron",
      "Nutmeg",
      "Lavender",
      "Agarwood",
      "Patchouli",
      "Musk"
    ],
    "accords": [
      "Oud",
      "Saffron",
      "Lavender",
      "Musky"
    ]
  },
  {
    "id": "replica-jazz-club",
    "name": "Replica Jazz Club",
    "brand": "Maison Margiela",
    "concentration": "EDT",
    "category": "Designer/Niche",
    "priceTier": "€80–130",
    "popularity": "Popular designer niche",
    "topNotes": [
      "Pink pepper",
      "Neroli",
      "Lemon"
    ],
    "heartNotes": [
      "Rum",
      "Clary sage",
      "Vetiver"
    ],
    "baseNotes": [
      "Tobacco leaf",
      "Vanilla",
      "Styrax"
    ],
    "accordProfile": [
      "Rum",
      "Tobacco",
      "Vanilla",
      "Woody"
    ],
    "styleTags": [
      "Boozy",
      "Tobacco",
      "Sweet",
      "Cozy",
      "Evening"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Casual"
    ],
    "description": "A warm rum-tobacco scent with vanilla, styrax and soft woody-vetiver depth.",
    "caution": "Cozy rather than powerful.",
    "bestFor": [
      "Users who like boozy / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike rum or tobacco"
    ],
    "similarFragrances": [
      "Side Effect",
      "The One EDP"
    ],
    "cheaperAlternatives": [
      "Cremo Bourbon & Oak"
    ],
    "similarIds": [
      "initio-side-effect"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Boozy; Tobacco; Sweet; Cozy; Evening.",
      "avoidIf": "Downrank if user avoids Rum or tags this style negatively."
    },
    "recommendSignals": [
      "Boozy",
      "Tobacco",
      "Sweet",
      "Cozy",
      "Evening"
    ],
    "imageFileName": "replica-jazz-club.png",
    "image": "/fragrances/replica-jazz-club.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Tobacco",
      "Vanilla",
      "Sweet",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Pink pepper",
      "Neroli",
      "Lemon",
      "Rum",
      "Clary sage",
      "Vetiver",
      "Tobacco leaf",
      "Vanilla",
      "Styrax"
    ],
    "accords": [
      "Rum",
      "Tobacco",
      "Vanilla",
      "Woody"
    ]
  },
  {
    "id": "replica-by-the-fireplace",
    "name": "Replica By the Fireplace",
    "brand": "Maison Margiela",
    "concentration": "EDT",
    "category": "Designer/Niche",
    "priceTier": "€80–130",
    "popularity": "Popular designer niche",
    "topNotes": [
      "Clove",
      "Pink pepper",
      "Orange blossom"
    ],
    "heartNotes": [
      "Chestnut",
      "Guaiac wood",
      "Juniper"
    ],
    "baseNotes": [
      "Vanilla",
      "Peru balsam",
      "Cashmeran"
    ],
    "accordProfile": [
      "Smoke",
      "Chestnut",
      "Vanilla",
      "Woody"
    ],
    "styleTags": [
      "Smoky",
      "Sweet",
      "Cozy",
      "Winter",
      "Fireplace"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Cold weather",
      "Evening"
    ],
    "description": "A cozy smoky-sweet fragrance with roasted chestnut, woods, vanilla and balsamic warmth.",
    "caution": "Smoke plus sweetness can be polarising.",
    "bestFor": [
      "Users who like smoky / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike smoke or chestnut"
    ],
    "similarFragrances": [
      "Ameer Al Oudh Intense Oud",
      "Bois d’Ascese"
    ],
    "cheaperAlternatives": [
      "Lattafa Ameer Al Oudh Intense Oud"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Smoky; Sweet; Cozy; Winter; Fireplace.",
      "avoidIf": "Downrank if user avoids Smoke or tags this style negatively."
    },
    "recommendSignals": [
      "Smoky",
      "Sweet",
      "Cozy",
      "Winter",
      "Fireplace"
    ],
    "imageFileName": "replica-by-the-fireplace.png",
    "image": "/fragrances/replica-by-the-fireplace.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Vanilla",
      "Sweet",
      "Smoky / incense"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Clove",
      "Pink pepper",
      "Orange blossom",
      "Chestnut",
      "Guaiac wood",
      "Juniper",
      "Vanilla",
      "Peru balsam",
      "Cashmeran"
    ],
    "accords": [
      "Smoke",
      "Chestnut",
      "Vanilla",
      "Woody"
    ]
  },
  {
    "id": "lalique-encre-noire",
    "name": "Encre Noire",
    "brand": "Lalique",
    "concentration": "EDT",
    "category": "Affordable/Designer",
    "priceTier": "€20–40",
    "popularity": "Affordable icon",
    "topNotes": [
      "Cypress"
    ],
    "heartNotes": [
      "Vetiver"
    ],
    "baseNotes": [
      "Cashmere wood",
      "Musk"
    ],
    "accordProfile": [
      "Vetiver",
      "Woody",
      "Earthy",
      "Cypress"
    ],
    "styleTags": [
      "Dark",
      "Vetiver",
      "Earthy",
      "Minimal",
      "Gothic"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Signature",
      "Evening"
    ],
    "description": "A dark minimalist vetiver fragrance with cypress, rooty earthiness and dry cashmere woods.",
    "caution": "Can feel austere or sombre.",
    "bestFor": [
      "Users who like dark / vetiver profiles"
    ],
    "avoidIf": [
      "Users who dislike vetiver or woody"
    ],
    "similarFragrances": [
      "Encre Noire à L’Extrême",
      "Sycomore"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "lalique-encre-noire-a-lextreme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Dark; Vetiver; Earthy; Minimal; Gothic.",
      "avoidIf": "Downrank if user avoids Vetiver or tags this style negatively."
    },
    "recommendSignals": [
      "Dark",
      "Vetiver",
      "Earthy",
      "Minimal",
      "Gothic"
    ],
    "imageFileName": "lalique-encre-noire.png",
    "image": "/fragrances/lalique-encre-noire.png",
    "directions": [
      "Green",
      "Woody",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Cypress",
      "Vetiver",
      "Cashmere wood",
      "Musk"
    ],
    "accords": [
      "Vetiver",
      "Woody",
      "Earthy",
      "Cypress"
    ]
  },
  {
    "id": "lalique-encre-noire-a-lextreme",
    "name": "Encre Noire à L’Extrême",
    "brand": "Lalique",
    "concentration": "EDP",
    "category": "Affordable/Designer",
    "priceTier": "€25–50",
    "popularity": "Affordable icon",
    "topNotes": [
      "Bergamot",
      "Cypress",
      "Elemi"
    ],
    "heartNotes": [
      "Vetiver",
      "Incense",
      "Orris"
    ],
    "baseNotes": [
      "Benzoin",
      "Sandalwood",
      "Patchouli"
    ],
    "accordProfile": [
      "Vetiver",
      "Incense",
      "Woody",
      "Cypress"
    ],
    "styleTags": [
      "Dark vetiver",
      "Incense",
      "Woody",
      "Masculine",
      "Dry"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Signature",
      "Cold weather"
    ],
    "description": "A richer darker Encre Noire with incense, elemi, vetiver and resinous woods.",
    "caution": "Still dry and serious; not mass appealing.",
    "bestFor": [
      "Users who like dark vetiver / incense profiles"
    ],
    "avoidIf": [
      "Users who dislike vetiver or incense"
    ],
    "similarFragrances": [
      "Encre Noire",
      "Amouage Memoir Man"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "lalique-encre-noire"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Dark vetiver; Incense; Woody; Masculine; Dry.",
      "avoidIf": "Downrank if user avoids Vetiver or tags this style negatively."
    },
    "recommendSignals": [
      "Dark vetiver",
      "Incense",
      "Woody",
      "Masculine",
      "Dry"
    ],
    "imageFileName": "lalique-encre-noire-a-lextreme.png",
    "image": "/fragrances/lalique-encre-noire-a-lextreme.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Smoky / incense",
      "Vetiver"
    ],
    "priceCategory": "budget",
    "priceLabel": "€25–50",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Bergamot",
      "Cypress",
      "Elemi",
      "Vetiver",
      "Incense",
      "Orris",
      "Benzoin",
      "Sandalwood",
      "Patchouli"
    ],
    "accords": [
      "Vetiver",
      "Incense",
      "Woody",
      "Cypress"
    ]
  },
  {
    "id": "montblanc-explorer",
    "name": "Explorer",
    "brand": "Montblanc",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€40–70",
    "popularity": "Affordable popular",
    "topNotes": [
      "Bergamot",
      "Pink pepper",
      "Clary sage"
    ],
    "heartNotes": [
      "Vetiver",
      "Leather"
    ],
    "baseNotes": [
      "Ambroxan",
      "Akigalawood",
      "Patchouli"
    ],
    "accordProfile": [
      "Bergamot",
      "Ambroxan",
      "Woody",
      "Patchouli"
    ],
    "styleTags": [
      "Aventus-style",
      "Woody",
      "Fresh",
      "Affordable",
      "Versatile"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Casual"
    ],
    "description": "A fresh woody fragrance with bergamot brightness, vetiver-leather nuance and ambroxan-patchouli depth.",
    "caution": "Less smoky/fruity than many Aventus clones.",
    "bestFor": [
      "Users who like aventus-style / woody profiles"
    ],
    "avoidIf": [
      "Users who dislike bergamot or ambroxan"
    ],
    "similarFragrances": [
      "Creed Aventus",
      "Hacivat"
    ],
    "cheaperAlternatives": [
      "Club de Nuit Intense Man"
    ],
    "similarIds": [
      "creed-aventus",
      "nishane-hacivat"
    ],
    "cheaperAlternativeIds": [
      "armaf-club-de-nuit-intense-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Aventus-style; Woody; Fresh; Affordable; Versatile.",
      "avoidIf": "Downrank if user avoids Bergamot or tags this style negatively."
    },
    "recommendSignals": [
      "Aventus-style",
      "Woody",
      "Fresh",
      "Affordable",
      "Versatile"
    ],
    "imageFileName": "montblanc-explorer.png",
    "image": "/fragrances/montblanc-explorer.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Leather",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "mid",
    "priceLabel": "€40–70",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Pink pepper",
      "Clary sage",
      "Vetiver",
      "Leather",
      "Ambroxan",
      "Akigalawood",
      "Patchouli"
    ],
    "accords": [
      "Bergamot",
      "Ambroxan",
      "Woody",
      "Patchouli"
    ]
  },
  {
    "id": "montblanc-legend-edt",
    "name": "Legend",
    "brand": "Montblanc",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€30–60",
    "popularity": "Beginner classic",
    "topNotes": [
      "Lavender",
      "Pineapple",
      "Bergamot"
    ],
    "heartNotes": [
      "Dried fruits",
      "Oakmoss",
      "Geranium"
    ],
    "baseNotes": [
      "Tonka",
      "Sandalwood"
    ],
    "accordProfile": [
      "Aromatic",
      "Fruity",
      "Lavender",
      "Fresh"
    ],
    "styleTags": [
      "Fresh",
      "Aromatic",
      "Easy",
      "Office",
      "Affordable"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Office"
    ],
    "description": "An easy aromatic fresh fragrance with lavender, pineapple and soft tonka-woods warmth.",
    "caution": "Safe and familiar.",
    "bestFor": [
      "Users who like fresh / aromatic profiles"
    ],
    "avoidIf": [
      "Users who dislike aromatic or fruity"
    ],
    "similarFragrances": [
      "Abercrombie Fierce",
      "Percival"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Aromatic; Easy; Office; Affordable.",
      "avoidIf": "Downrank if user avoids Aromatic or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Aromatic",
      "Easy",
      "Office",
      "Affordable"
    ],
    "imageFileName": "montblanc-legend-edt.png",
    "image": "/fragrances/montblanc-legend-edt.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Lavender",
      "Pineapple",
      "Bergamot",
      "Dried fruits",
      "Oakmoss",
      "Geranium",
      "Tonka",
      "Sandalwood"
    ],
    "accords": [
      "Aromatic",
      "Fruity",
      "Lavender",
      "Fresh"
    ]
  },
  {
    "id": "nautica-voyage",
    "name": "Voyage",
    "brand": "Nautica",
    "concentration": "EDT",
    "category": "Affordable",
    "priceTier": "Under €30",
    "popularity": "Beginner classic",
    "topNotes": [
      "Green leaves",
      "Apple"
    ],
    "heartNotes": [
      "Lotus",
      "Mimosa"
    ],
    "baseNotes": [
      "Musk",
      "Cedar",
      "Oakmoss",
      "Amber"
    ],
    "accordProfile": [
      "Aquatic",
      "Green",
      "Apple",
      "Musky"
    ],
    "styleTags": [
      "Fresh",
      "Aquatic",
      "Cheapie",
      "Gym",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Gym",
      "Casual",
      "Beach"
    ],
    "description": "A simple affordable aquatic with green apple, watery florals and clean musky woods.",
    "caution": "Basic but useful for casual freshness.",
    "bestFor": [
      "Users who like fresh / aquatic profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or green"
    ],
    "similarFragrances": [
      "Cool Water",
      "Versace Pour Homme"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "davidoff-cool-water",
      "versace-pour-homme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Aquatic; Cheapie; Gym; Summer.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Aquatic",
      "Cheapie",
      "Gym",
      "Summer"
    ],
    "imageFileName": "nautica-voyage.png",
    "image": "/fragrances/nautica-voyage.png",
    "directions": [
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "budget",
    "priceLabel": "Under €30",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Green leaves",
      "Apple",
      "Lotus",
      "Mimosa",
      "Musk",
      "Cedar",
      "Oakmoss",
      "Amber"
    ],
    "accords": [
      "Aquatic",
      "Green",
      "Apple",
      "Musky"
    ]
  },
  {
    "id": "davidoff-cool-water",
    "name": "Cool Water",
    "brand": "Davidoff",
    "concentration": "EDT",
    "category": "Affordable",
    "priceTier": "Under €30",
    "popularity": "Classic cheapie",
    "topNotes": [
      "Sea water",
      "Lavender",
      "Mint"
    ],
    "heartNotes": [
      "Sandalwood",
      "Geranium",
      "Neroli"
    ],
    "baseNotes": [
      "Musk",
      "Oakmoss",
      "Cedar",
      "Tobacco"
    ],
    "accordProfile": [
      "Aquatic",
      "Aromatic",
      "Green",
      "Lavender"
    ],
    "styleTags": [
      "Aquatic",
      "Classic",
      "Green",
      "Fresh",
      "Affordable"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Gym",
      "Casual"
    ],
    "description": "A landmark aquatic aromatic with mint, lavender, sea-water freshness and mossy woods.",
    "caution": "Can feel dated compared with modern aquatics.",
    "bestFor": [
      "Users who like aquatic / classic profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or aromatic"
    ],
    "similarFragrances": [
      "Green Irish Tweed",
      "Nautica Voyage"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-green-irish-tweed",
      "nautica-voyage"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Aquatic; Classic; Green; Fresh; Affordable.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Aquatic",
      "Classic",
      "Green",
      "Fresh",
      "Affordable"
    ],
    "imageFileName": "davidoff-cool-water.png",
    "image": "/fragrances/davidoff-cool-water.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Tobacco",
      "Musky / clean"
    ],
    "priceCategory": "budget",
    "priceLabel": "Under €30",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Sea water",
      "Lavender",
      "Mint",
      "Sandalwood",
      "Geranium",
      "Neroli",
      "Musk",
      "Oakmoss",
      "Cedar",
      "Tobacco"
    ],
    "accords": [
      "Aquatic",
      "Aromatic",
      "Green",
      "Lavender"
    ]
  },
  {
    "id": "missoni-wave",
    "name": "Wave",
    "brand": "Missoni",
    "concentration": "EDT",
    "category": "Affordable/Designer",
    "priceTier": "€30–60",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Sea notes",
      "Citruses",
      "Mandarin"
    ],
    "heartNotes": [
      "Lavender",
      "Sage",
      "Rosemary"
    ],
    "baseNotes": [
      "Vanilla orchid",
      "Oakmoss",
      "Vetiver"
    ],
    "accordProfile": [
      "Citrus",
      "Marine",
      "Aromatic",
      "Fresh spicy"
    ],
    "styleTags": [
      "Fresh",
      "Marine",
      "Citrus",
      "Affordable",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Casual",
      "Gym"
    ],
    "description": "A bright citrus-marine fragrance with lavender herbs and slightly creamy woody base.",
    "caution": "Derivative but useful summer value.",
    "bestFor": [
      "Users who like fresh / marine profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or marine"
    ],
    "similarFragrances": [
      "Chanel Allure Homme Sport",
      "Versace Pour Homme"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "chanel-allure-homme-sport-ee",
      "versace-pour-homme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Marine; Citrus; Affordable; Summer.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Marine",
      "Citrus",
      "Affordable",
      "Summer"
    ],
    "imageFileName": "missoni-wave.png",
    "image": "/fragrances/missoni-wave.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Spicy",
      "Vanilla",
      "Floral",
      "Vetiver"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Sea notes",
      "Citruses",
      "Mandarin",
      "Lavender",
      "Sage",
      "Rosemary",
      "Vanilla orchid",
      "Oakmoss",
      "Vetiver"
    ],
    "accords": [
      "Citrus",
      "Marine",
      "Aromatic",
      "Fresh spicy"
    ]
  },
  {
    "id": "armaf-club-de-nuit-intense-man",
    "name": "Club de Nuit Intense Man",
    "brand": "Armaf",
    "concentration": "EDT/EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Clone icon",
    "topNotes": [
      "Lemon",
      "Pineapple",
      "Blackcurrant",
      "Apple"
    ],
    "heartNotes": [
      "Birch",
      "Jasmine",
      "Rose"
    ],
    "baseNotes": [
      "Musk",
      "Ambergris",
      "Patchouli",
      "Vanilla"
    ],
    "accordProfile": [
      "Citrus",
      "Smoky",
      "Woody",
      "Pineapple-like"
    ],
    "styleTags": [
      "Aventus-style",
      "Smoky",
      "Loud",
      "Affordable",
      "Masculine"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Evening",
      "Signature"
    ],
    "description": "A bold Aventus-style fragrance with sharp citrus opening, smoky birch and musky woods.",
    "caution": "Opening can be harsh.",
    "bestFor": [
      "Users who like aventus-style / smoky profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or smoky"
    ],
    "similarFragrances": [
      "Creed Aventus",
      "Montblanc Explorer"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-aventus",
      "montblanc-explorer"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Aventus-style; Smoky; Loud; Affordable; Masculine.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Aventus-style",
      "Smoky",
      "Loud",
      "Affordable",
      "Masculine"
    ],
    "imageFileName": "armaf-club-de-nuit-intense-man.png",
    "image": "/fragrances/armaf-club-de-nuit-intense-man.png",
    "directions": [
      "Citrus",
      "Woody",
      "Amber",
      "Vanilla",
      "Floral",
      "Smoky / incense",
      "Oud",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Lemon",
      "Pineapple",
      "Blackcurrant",
      "Apple",
      "Birch",
      "Jasmine",
      "Rose",
      "Musk",
      "Ambergris",
      "Patchouli",
      "Vanilla"
    ],
    "accords": [
      "Citrus",
      "Smoky",
      "Woody",
      "Pineapple-like"
    ]
  },
  {
    "id": "armaf-club-de-nuit-sillage",
    "name": "Club de Nuit Sillage",
    "brand": "Armaf",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Clone icon",
    "topNotes": [
      "Bergamot",
      "Lemon",
      "Blackcurrant",
      "Lime"
    ],
    "heartNotes": [
      "Rose",
      "Iris",
      "Jasmine"
    ],
    "baseNotes": [
      "Ambroxan",
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "accordProfile": [
      "Metallic",
      "Citrus",
      "Musky",
      "Green"
    ],
    "styleTags": [
      "Silver Mountain Water-style",
      "Metallic",
      "Fresh",
      "Musky"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Signature"
    ],
    "description": "A strong metallic citrus-musk fragrance inspired by clean mountain-water style scents.",
    "caution": "Can feel sharp and metallic.",
    "bestFor": [
      "Users who like silver mountain water-style / metallic profiles"
    ],
    "avoidIf": [
      "Users who dislike metallic or citrus"
    ],
    "similarFragrances": [
      "Creed Silver Mountain Water"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-silver-mountain-water"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Silver Mountain Water-style; Metallic; Fresh; Musky.",
      "avoidIf": "Downrank if user avoids Metallic or tags this style negatively."
    },
    "recommendSignals": [
      "Silver Mountain Water-style",
      "Metallic",
      "Fresh",
      "Musky"
    ],
    "imageFileName": "armaf-club-de-nuit-sillage.png",
    "image": "/fragrances/armaf-club-de-nuit-sillage.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Floral",
      "Musky / clean",
      "Mineral"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Bergamot",
      "Lemon",
      "Blackcurrant",
      "Lime",
      "Rose",
      "Iris",
      "Jasmine",
      "Ambroxan",
      "Musk",
      "Sandalwood",
      "Cedar"
    ],
    "accords": [
      "Metallic",
      "Citrus",
      "Musky",
      "Green"
    ]
  },
  {
    "id": "armaf-club-de-nuit-milestone",
    "name": "Club de Nuit Milestone",
    "brand": "Armaf",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Clone icon",
    "topNotes": [
      "Sea notes",
      "Red fruits",
      "Bergamot"
    ],
    "heartNotes": [
      "Violet",
      "White woods",
      "Sandalwood"
    ],
    "baseNotes": [
      "Musk",
      "Ambroxan",
      "Vetiver"
    ],
    "accordProfile": [
      "Marine",
      "Fruity",
      "Salty",
      "Musky"
    ],
    "styleTags": [
      "Millesime-style",
      "Salty",
      "Fruity",
      "Summer",
      "Affordable"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Beach",
      "Casual"
    ],
    "description": "A salty fruity marine fragrance with musky woods and breezy summer character.",
    "caution": "Can feel synthetic and less refined.",
    "bestFor": [
      "Users who like millesime-style / salty profiles"
    ],
    "avoidIf": [
      "Users who dislike marine or fruity"
    ],
    "similarFragrances": [
      "Creed Millésime Impérial"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "creed-millesime-imperial"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Millesime-style; Salty; Fruity; Summer; Affordable.",
      "avoidIf": "Downrank if user avoids Marine or tags this style negatively."
    },
    "recommendSignals": [
      "Millesime-style",
      "Salty",
      "Fruity",
      "Summer",
      "Affordable"
    ],
    "imageFileName": "armaf-club-de-nuit-milestone.png",
    "image": "/fragrances/armaf-club-de-nuit-milestone.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Floral",
      "Musky / clean",
      "Vetiver",
      "Salty"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Sea notes",
      "Red fruits",
      "Bergamot",
      "Violet",
      "White woods",
      "Sandalwood",
      "Musk",
      "Ambroxan",
      "Vetiver"
    ],
    "accords": [
      "Marine",
      "Fruity",
      "Salty",
      "Musky"
    ]
  },
  {
    "id": "afnan-9pm",
    "name": "9PM",
    "brand": "Afnan",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Clone icon",
    "topNotes": [
      "Apple",
      "Cinnamon",
      "Lavender",
      "Bergamot"
    ],
    "heartNotes": [
      "Orange blossom",
      "Lily-of-the-valley"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka",
      "Amber",
      "Patchouli"
    ],
    "accordProfile": [
      "Vanilla",
      "Apple",
      "Cinnamon",
      "Sweet"
    ],
    "styleTags": [
      "Ultra Male-style",
      "Sweet",
      "Club",
      "Loud",
      "Affordable"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening"
    ],
    "description": "A loud sweet apple-vanilla fragrance with cinnamon warmth and nightlife character.",
    "caution": "Very sweet and youthful.",
    "bestFor": [
      "Users who like ultra male-style / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike vanilla or apple"
    ],
    "similarFragrances": [
      "JPG Ultra Male"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "jpg-ultra-male"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Ultra Male-style; Sweet; Club; Loud; Affordable.",
      "avoidIf": "Downrank if user avoids Vanilla or tags this style negatively."
    },
    "recommendSignals": [
      "Ultra Male-style",
      "Sweet",
      "Club",
      "Loud",
      "Affordable"
    ],
    "imageFileName": "afnan-9pm.png",
    "image": "/fragrances/afnan-9pm.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Oud"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Apple",
      "Cinnamon",
      "Lavender",
      "Bergamot",
      "Orange blossom",
      "Lily-of-the-valley",
      "Vanilla",
      "Tonka",
      "Amber",
      "Patchouli"
    ],
    "accords": [
      "Vanilla",
      "Apple",
      "Cinnamon",
      "Sweet"
    ]
  },
  {
    "id": "afnan-turathi-blue",
    "name": "Turathi Blue",
    "brand": "Afnan",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Citruses"
    ],
    "heartNotes": [
      "Amber",
      "Woods"
    ],
    "baseNotes": [
      "Musk",
      "Patchouli",
      "Spices"
    ],
    "accordProfile": [
      "Citrus",
      "Musky",
      "Amber",
      "Fresh spicy"
    ],
    "styleTags": [
      "Grapefruit-like",
      "Fresh",
      "Amber",
      "Masculine",
      "Affordable"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 6,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Office",
      "Casual"
    ],
    "description": "A strong citrus-amber fresh scent with musky woods and spicy masculine depth.",
    "caution": "Can feel dense compared with light citrus scents.",
    "bestFor": [
      "Users who like grapefruit-like / fresh profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or musky"
    ],
    "similarFragrances": [
      "Bvlgari Tygar",
      "Bleu-ish citrus ambers"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "bvlgari-tygar"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Grapefruit-like; Fresh; Amber; Masculine; Affordable.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Grapefruit-like",
      "Fresh",
      "Amber",
      "Masculine",
      "Affordable"
    ],
    "imageFileName": "afnan-turathi-blue.png",
    "image": "/fragrances/afnan-turathi-blue.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Spicy",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Citruses",
      "Amber",
      "Woods",
      "Musk",
      "Patchouli",
      "Spices"
    ],
    "accords": [
      "Citrus",
      "Musky",
      "Amber",
      "Fresh spicy"
    ]
  },
  {
    "id": "afnan-supremacy-not-only-intense",
    "name": "Supremacy Not Only Intense",
    "brand": "Afnan",
    "concentration": "Extrait",
    "category": "Middle Eastern",
    "priceTier": "€40–70",
    "popularity": "Popular alternative",
    "topNotes": [
      "Blackcurrant",
      "Bergamot",
      "Apple"
    ],
    "heartNotes": [
      "Lavender",
      "Patchouli",
      "Oakmoss"
    ],
    "baseNotes": [
      "Ambergris",
      "Saffron",
      "Musk"
    ],
    "accordProfile": [
      "Blackcurrant",
      "Oakmoss",
      "Smoky",
      "Fruity"
    ],
    "styleTags": [
      "Hacivat/Aventus-style",
      "Powerful",
      "Fruity",
      "Mossy"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Signature",
      "Office",
      "Evening"
    ],
    "description": "A strong fruity-mossy scent with blackcurrant brightness, oakmoss and musky ambergris-style depth.",
    "caution": "Can feel sharp and intense.",
    "bestFor": [
      "Users who like hacivat/aventus-style / powerful profiles"
    ],
    "avoidIf": [
      "Users who dislike blackcurrant or oakmoss"
    ],
    "similarFragrances": [
      "Nishane Hacivat",
      "Creed Aventus"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "nishane-hacivat",
      "creed-aventus"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Hacivat/Aventus-style; Powerful; Fruity; Mossy.",
      "avoidIf": "Downrank if user avoids Blackcurrant or tags this style negatively."
    },
    "recommendSignals": [
      "Hacivat/Aventus-style",
      "Powerful",
      "Fruity",
      "Mossy"
    ],
    "imageFileName": "afnan-supremacy-not-only-intense.png",
    "image": "/fragrances/afnan-supremacy-not-only-intense.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Smoky / incense",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€40–70",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Blackcurrant",
      "Bergamot",
      "Apple",
      "Lavender",
      "Patchouli",
      "Oakmoss",
      "Ambergris",
      "Saffron",
      "Musk"
    ],
    "accords": [
      "Blackcurrant",
      "Oakmoss",
      "Smoky",
      "Fruity"
    ]
  },
  {
    "id": "rasasi-hawas-for-him",
    "name": "Hawas for Him",
    "brand": "Rasasi",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€40–70",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Apple",
      "Bergamot",
      "Lemon",
      "Cinnamon"
    ],
    "heartNotes": [
      "Watery notes",
      "Plum",
      "Cardamom"
    ],
    "baseNotes": [
      "Ambergris",
      "Musk",
      "Driftwood"
    ],
    "accordProfile": [
      "Aquatic",
      "Sweet",
      "Fruity",
      "Ambergris"
    ],
    "styleTags": [
      "Sweet aquatic",
      "Fruity",
      "Compliment",
      "Summer night",
      "Loud"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Casual",
      "Evening",
      "Gym"
    ],
    "description": "A sweet fruity-aquatic fragrance with spice and ambergris-musky projection.",
    "caution": "Can be too sweet for daytime heat.",
    "bestFor": [
      "Users who like sweet aquatic / fruity profiles"
    ],
    "avoidIf": [
      "Users who dislike aquatic or sweet"
    ],
    "similarFragrances": [
      "Invictus Aqua",
      "Paco Rabanne Invictus"
    ],
    "cheaperAlternatives": [
      "Lattafa Najdia"
    ],
    "similarIds": [
      "paco-rabanne-invictus"
    ],
    "cheaperAlternativeIds": [],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sweet aquatic; Fruity; Compliment; Summer night; Loud.",
      "avoidIf": "Downrank if user avoids Aquatic or tags this style negatively."
    },
    "recommendSignals": [
      "Sweet aquatic",
      "Fruity",
      "Compliment",
      "Summer night",
      "Loud"
    ],
    "imageFileName": "rasasi-hawas-for-him.png",
    "image": "/fragrances/rasasi-hawas-for-him.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Spicy",
      "Amber",
      "Sweet",
      "Oud",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€40–70",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Apple",
      "Bergamot",
      "Lemon",
      "Cinnamon",
      "Watery notes",
      "Plum",
      "Cardamom",
      "Ambergris",
      "Musk",
      "Driftwood"
    ],
    "accords": [
      "Aquatic",
      "Sweet",
      "Fruity",
      "Ambergris"
    ]
  },
  {
    "id": "rasasi-fattan",
    "name": "Fattan Pour Homme",
    "brand": "Rasasi",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€25–50",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Grapefruit",
      "Bergamot",
      "Pink pepper"
    ],
    "heartNotes": [
      "Cedar",
      "Patchouli",
      "Lily-of-the-valley"
    ],
    "baseNotes": [
      "Vetiver",
      "Amber",
      "Oakmoss"
    ],
    "accordProfile": [
      "Citrus",
      "Vetiver",
      "Earthy",
      "Woody"
    ],
    "styleTags": [
      "Terre-style",
      "Vetiver",
      "Dry citrus",
      "Affordable",
      "Masculine"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A dry citrus-vetiver fragrance with earthy woods in an affordable Terre-like direction.",
    "caution": "Rougher and less refined than Hermès.",
    "bestFor": [
      "Users who like terre-style / vetiver profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or vetiver"
    ],
    "similarFragrances": [
      "Terre d’Hermès"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "terre-dhermes-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Terre-style; Vetiver; Dry citrus; Affordable; Masculine.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Terre-style",
      "Vetiver",
      "Dry citrus",
      "Affordable",
      "Masculine"
    ],
    "imageFileName": "rasasi-fattan.png",
    "image": "/fragrances/rasasi-fattan.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vetiver"
    ],
    "priceCategory": "budget",
    "priceLabel": "€25–50",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Grapefruit",
      "Bergamot",
      "Pink pepper",
      "Cedar",
      "Patchouli",
      "Lily-of-the-valley",
      "Vetiver",
      "Amber",
      "Oakmoss"
    ],
    "accords": [
      "Citrus",
      "Vetiver",
      "Earthy",
      "Woody"
    ]
  },
  {
    "id": "lattafa-asad",
    "name": "Asad",
    "brand": "Lattafa",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€20–40",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Black pepper",
      "Pineapple",
      "Tobacco"
    ],
    "heartNotes": [
      "Coffee",
      "Patchouli",
      "Iris"
    ],
    "baseNotes": [
      "Vanilla",
      "Amber",
      "Dry woods"
    ],
    "accordProfile": [
      "Amber",
      "Vanilla",
      "Spicy",
      "Tobacco-like"
    ],
    "styleTags": [
      "Sauvage Elixir-style",
      "Spicy",
      "Sweet",
      "Loud",
      "Affordable"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Cold weather"
    ],
    "description": "A dense spicy amber-vanilla fragrance with tobacco-like warmth and strong performance.",
    "caution": "Too heavy for warm weather.",
    "bestFor": [
      "Users who like sauvage elixir-style / spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike amber or vanilla"
    ],
    "similarFragrances": [
      "Dior Sauvage Elixir"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-sauvage-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Sauvage Elixir-style; Spicy; Sweet; Loud; Affordable.",
      "avoidIf": "Downrank if user avoids Amber or tags this style negatively."
    },
    "recommendSignals": [
      "Sauvage Elixir-style",
      "Spicy",
      "Sweet",
      "Loud",
      "Affordable"
    ],
    "imageFileName": "lattafa-asad.png",
    "image": "/fragrances/lattafa-asad.png",
    "directions": [
      "Woody",
      "Spicy",
      "Tobacco",
      "Amber",
      "Vanilla",
      "Sweet",
      "Floral",
      "Oud"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#6e4a3f",
      "#2a1713"
    ],
    "notes": [
      "Black pepper",
      "Pineapple",
      "Tobacco",
      "Coffee",
      "Patchouli",
      "Iris",
      "Vanilla",
      "Amber",
      "Dry woods"
    ],
    "accords": [
      "Amber",
      "Vanilla",
      "Spicy",
      "Tobacco-like"
    ]
  },
  {
    "id": "lattafa-khamrah",
    "name": "Khamrah",
    "brand": "Lattafa",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€30–60",
    "popularity": "Popular cheapie",
    "topNotes": [
      "Cinnamon",
      "Nutmeg",
      "Bergamot"
    ],
    "heartNotes": [
      "Dates",
      "Praline",
      "Tuberose"
    ],
    "baseNotes": [
      "Vanilla",
      "Tonka",
      "Amberwood",
      "Benzoin"
    ],
    "accordProfile": [
      "Cinnamon",
      "Dates",
      "Vanilla",
      "Praline",
      "Amber"
    ],
    "styleTags": [
      "Gourmand",
      "Sweet",
      "Spicy",
      "Date syrup",
      "Winter"
    ],
    "sweetnessLevel": 8,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Winter",
      "Autumn"
    ],
    "occasionTags": [
      "Evening",
      "Beach",
      "Cold weather"
    ],
    "description": "A rich spiced gourmand with dates, praline, vanilla, amber and resinous warmth.",
    "caution": "Very sweet; not safe for low-sweetness users.",
    "bestFor": [
      "Users who like gourmand / sweet profiles"
    ],
    "avoidIf": [
      "Users who dislike cinnamon or dates"
    ],
    "similarFragrances": [
      "Angels' Share style direction"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Gourmand; Sweet; Spicy; Date syrup; Winter.",
      "avoidIf": "Downrank if user avoids Cinnamon or tags this style negatively."
    },
    "recommendSignals": [
      "Gourmand",
      "Sweet",
      "Spicy",
      "Date syrup",
      "Winter"
    ],
    "imageFileName": "lattafa-khamrah.png",
    "image": "/fragrances/lattafa-khamrah.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Cinnamon",
      "Nutmeg",
      "Bergamot",
      "Dates",
      "Praline",
      "Tuberose",
      "Vanilla",
      "Tonka",
      "Amberwood",
      "Benzoin"
    ],
    "accords": [
      "Cinnamon",
      "Dates",
      "Vanilla",
      "Praline",
      "Amber"
    ]
  },
  {
    "id": "lattafa-oud-for-glory",
    "name": "Bade’e Al Oud Oud for Glory",
    "brand": "Lattafa",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€20–40",
    "popularity": "Popular clone",
    "topNotes": [
      "Saffron",
      "Nutmeg",
      "Lavender"
    ],
    "heartNotes": [
      "Oud",
      "Patchouli"
    ],
    "baseNotes": [
      "Musk",
      "Patchouli"
    ],
    "accordProfile": [
      "Oud",
      "Saffron",
      "Lavender",
      "Patchouli"
    ],
    "styleTags": [
      "Oud",
      "Saffron",
      "Powerful",
      "Dark",
      "Affordable"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Signature",
      "Cold weather"
    ],
    "description": "A strong saffron-oud fragrance with lavender and musky patchouli depth.",
    "caution": "Very assertive and clone-like.",
    "bestFor": [
      "Users who like oud / saffron profiles"
    ],
    "avoidIf": [
      "Users who dislike oud or saffron"
    ],
    "similarFragrances": [
      "Initio Oud for Greatness"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "initio-oud-for-greatness"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Oud; Saffron; Powerful; Dark; Affordable.",
      "avoidIf": "Downrank if user avoids Oud or tags this style negatively."
    },
    "recommendSignals": [
      "Oud",
      "Saffron",
      "Powerful",
      "Dark",
      "Affordable"
    ],
    "imageFileName": "lattafa-oud-for-glory.png",
    "image": "/fragrances/lattafa-oud-for-glory.png",
    "directions": [
      "Green",
      "Woody",
      "Spicy",
      "Oud",
      "Musky / clean"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#8aa37b",
      "#3c5034"
    ],
    "notes": [
      "Saffron",
      "Nutmeg",
      "Lavender",
      "Oud",
      "Patchouli",
      "Musk"
    ],
    "accords": [
      "Oud",
      "Saffron",
      "Lavender",
      "Patchouli"
    ]
  },
  {
    "id": "lattafa-fakhar-black",
    "name": "Fakhar Black",
    "brand": "Lattafa",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€20–40",
    "popularity": "Popular clone",
    "topNotes": [
      "Apple",
      "Bergamot",
      "Ginger"
    ],
    "heartNotes": [
      "Lavender",
      "Sage",
      "Juniper"
    ],
    "baseNotes": [
      "Tonka",
      "Amberwood",
      "Cedar"
    ],
    "accordProfile": [
      "Apple",
      "Ginger",
      "Sage",
      "Amberwood"
    ],
    "styleTags": [
      "Y EDP-style",
      "Sweet fresh",
      "Affordable",
      "Blue"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Autumn",
      "Summer"
    ],
    "occasionTags": [
      "Daily",
      "Casual",
      "Evening"
    ],
    "description": "A sweet fresh blue-style fragrance with apple, ginger, sage and amberwood-tonka depth.",
    "caution": "Can feel synthetic and sweet.",
    "bestFor": [
      "Users who like y edp-style / sweet fresh profiles"
    ],
    "avoidIf": [
      "Users who dislike apple or ginger"
    ],
    "similarFragrances": [
      "YSL Y EDP"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Y EDP-style; Sweet fresh; Affordable; Blue.",
      "avoidIf": "Downrank if user avoids Apple or tags this style negatively."
    },
    "recommendSignals": [
      "Y EDP-style",
      "Sweet fresh",
      "Affordable",
      "Blue"
    ],
    "imageFileName": "lattafa-fakhar-black.png",
    "image": "/fragrances/lattafa-fakhar-black.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Sweet"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Apple",
      "Bergamot",
      "Ginger",
      "Lavender",
      "Sage",
      "Juniper",
      "Tonka",
      "Amberwood",
      "Cedar"
    ],
    "accords": [
      "Apple",
      "Ginger",
      "Sage",
      "Amberwood"
    ]
  },
  {
    "id": "maison-alhambra-woody-oud",
    "name": "Woody Oud",
    "brand": "Maison Alhambra",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€20–40",
    "popularity": "Popular clone",
    "topNotes": [
      "Rosewood",
      "Cardamom",
      "Pepper"
    ],
    "heartNotes": [
      "Oud",
      "Sandalwood",
      "Vetiver"
    ],
    "baseNotes": [
      "Tonka",
      "Vanilla",
      "Amber"
    ],
    "accordProfile": [
      "Oud",
      "Woody",
      "Spicy",
      "Amber"
    ],
    "styleTags": [
      "Oud Wood-style",
      "Woody",
      "Soft oud",
      "Affordable"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Evening",
      "Office",
      "Casual"
    ],
    "description": "A soft woody oud scent with cardamom spice and amber-tonka warmth.",
    "caution": "Less smooth than luxury references.",
    "bestFor": [
      "Users who like oud wood-style / woody profiles"
    ],
    "avoidIf": [
      "Users who dislike oud or woody"
    ],
    "similarFragrances": [
      "Tom Ford Oud Wood"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "tom-ford-oud-wood"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Oud Wood-style; Woody; Soft oud; Affordable.",
      "avoidIf": "Downrank if user avoids Oud or tags this style negatively."
    },
    "recommendSignals": [
      "Oud Wood-style",
      "Woody",
      "Soft oud",
      "Affordable"
    ],
    "imageFileName": "maison-alhambra-woody-oud.png",
    "image": "/fragrances/maison-alhambra-woody-oud.png",
    "directions": [
      "Woody",
      "Spicy",
      "Amber",
      "Vanilla",
      "Floral",
      "Oud",
      "Vetiver"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Rosewood",
      "Cardamom",
      "Pepper",
      "Oud",
      "Sandalwood",
      "Vetiver",
      "Tonka",
      "Vanilla",
      "Amber"
    ],
    "accords": [
      "Oud",
      "Woody",
      "Spicy",
      "Amber"
    ]
  },
  {
    "id": "maison-alhambra-amber-and-leather",
    "name": "Amber & Leather",
    "brand": "Maison Alhambra",
    "concentration": "EDP",
    "category": "Middle Eastern",
    "priceTier": "€20–40",
    "popularity": "Popular clone",
    "topNotes": [
      "Cardamom"
    ],
    "heartNotes": [
      "Leather",
      "Jasmine"
    ],
    "baseNotes": [
      "Amber",
      "Moss",
      "Patchouli"
    ],
    "accordProfile": [
      "Leather",
      "Amber",
      "Spicy",
      "Floral"
    ],
    "styleTags": [
      "Ombré Leather-style",
      "Leather",
      "Affordable",
      "Bold"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Cold weather"
    ],
    "description": "A leather-forward scent with cardamom spice, jasmine softness and amber-moss depth.",
    "caution": "Less refined than Tom Ford but strong value.",
    "bestFor": [
      "Users who like ombré leather-style / leather profiles"
    ],
    "avoidIf": [
      "Users who dislike leather or amber"
    ],
    "similarFragrances": [
      "Tom Ford Ombré Leather"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "tom-ford-ombre-leather"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Ombré Leather-style; Leather; Affordable; Bold.",
      "avoidIf": "Downrank if user avoids Leather or tags this style negatively."
    },
    "recommendSignals": [
      "Ombré Leather-style",
      "Leather",
      "Affordable",
      "Bold"
    ],
    "imageFileName": "maison-alhambra-amber-and-leather.png",
    "image": "/fragrances/maison-alhambra-amber-and-leather.png",
    "directions": [
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Floral"
    ],
    "priceCategory": "budget",
    "priceLabel": "€20–40",
    "colors": [
      "#7d5a3c",
      "#33200f"
    ],
    "notes": [
      "Cardamom",
      "Leather",
      "Jasmine",
      "Amber",
      "Moss",
      "Patchouli"
    ],
    "accords": [
      "Leather",
      "Amber",
      "Spicy",
      "Floral"
    ]
  },
  {
    "id": "givenchy-gentleman-society-ambree",
    "name": "Gentleman Society Ambrée",
    "brand": "Givenchy",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Modern designer",
    "topNotes": [
      "Clary sage",
      "Nutmeg"
    ],
    "heartNotes": [
      "Narcissus",
      "Vetiver",
      "Tobacco"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Cedar"
    ],
    "accordProfile": [
      "Amber",
      "Tobacco",
      "Vetiver",
      "Vanilla",
      "Woody"
    ],
    "styleTags": [
      "Amber woody",
      "Tobacco",
      "Elegant",
      "Sweet",
      "Modern"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter",
      "Spring"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Office"
    ],
    "description": "A refined modern amber-woody fragrance with tobacco nuance, vetiver and smooth vanilla-sandalwood depth.",
    "caution": "May be too warm for summer.",
    "bestFor": [
      "Users who like amber woody / tobacco profiles"
    ],
    "avoidIf": [
      "Users who dislike amber or tobacco"
    ],
    "similarFragrances": [
      "Boss Bottled Absolu",
      "Armani Code Parfum"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "boss-bottled-edt",
      "armani-code-parfum"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Amber woody; Tobacco; Elegant; Sweet; Modern.",
      "avoidIf": "Downrank if user avoids Amber or tags this style negatively."
    },
    "recommendSignals": [
      "Amber woody",
      "Tobacco",
      "Elegant",
      "Sweet",
      "Modern"
    ],
    "imageFileName": "givenchy-gentleman-society-ambree.png",
    "image": "/fragrances/givenchy-gentleman-society-ambree.png",
    "directions": [
      "Green",
      "Woody",
      "Tobacco",
      "Amber",
      "Vanilla",
      "Sweet",
      "Vetiver"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#7fa06a",
      "#34492a"
    ],
    "notes": [
      "Clary sage",
      "Nutmeg",
      "Narcissus",
      "Vetiver",
      "Tobacco",
      "Vanilla",
      "Sandalwood",
      "Cedar"
    ],
    "accords": [
      "Amber",
      "Tobacco",
      "Vetiver",
      "Vanilla",
      "Woody"
    ]
  },
  {
    "id": "givenchy-gentleman-reserve-privee",
    "name": "Gentleman Reserve Privée",
    "brand": "Givenchy",
    "concentration": "EDP",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Popular designer",
    "topNotes": [
      "Bergamot"
    ],
    "heartNotes": [
      "Iris",
      "Chestnut",
      "Whisky"
    ],
    "baseNotes": [
      "Amber",
      "Woody notes"
    ],
    "accordProfile": [
      "Whisky",
      "Iris",
      "Chestnut",
      "Amber"
    ],
    "styleTags": [
      "Iris",
      "Boozy",
      "Sweet",
      "Elegant",
      "Date"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Date",
      "Evening",
      "Formal"
    ],
    "description": "A warm boozy iris fragrance with chestnut sweetness and amber woods.",
    "caution": "Sweet, powdery and dressed-up.",
    "bestFor": [
      "Users who like iris / boozy profiles"
    ],
    "avoidIf": [
      "Users who dislike whisky or iris"
    ],
    "similarFragrances": [
      "Dior Homme Intense",
      "Valentino Uomo Intense"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-homme-2020",
      "valentino-uomo-intense"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Iris; Boozy; Sweet; Elegant; Date.",
      "avoidIf": "Downrank if user avoids Whisky or tags this style negatively."
    },
    "recommendSignals": [
      "Iris",
      "Boozy",
      "Sweet",
      "Elegant",
      "Date"
    ],
    "imageFileName": "givenchy-gentleman-reserve-privee.png",
    "image": "/fragrances/givenchy-gentleman-reserve-privee.png",
    "directions": [
      "Citrus",
      "Woody",
      "Amber",
      "Sweet",
      "Floral"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Bergamot",
      "Iris",
      "Chestnut",
      "Whisky",
      "Amber",
      "Woody notes"
    ],
    "accords": [
      "Whisky",
      "Iris",
      "Chestnut",
      "Amber"
    ]
  },
  {
    "id": "boss-bottled-edt",
    "name": "Boss Bottled",
    "brand": "Hugo Boss",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Mainstream classic",
    "topNotes": [
      "Apple",
      "Plum",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Cinnamon",
      "Mahogany",
      "Carnation"
    ],
    "baseNotes": [
      "Vanilla",
      "Sandalwood",
      "Cedar"
    ],
    "accordProfile": [
      "Apple",
      "Cinnamon",
      "Woody",
      "Vanilla"
    ],
    "styleTags": [
      "Apple",
      "Warm spicy",
      "Office",
      "Easy",
      "Classic"
    ],
    "sweetnessLevel": 6,
    "freshnessLevel": 3,
    "darknessLevel": 4,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Spring",
      "Winter"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Casual"
    ],
    "description": "A classic apple-cinnamon masculine with vanilla woods and easy office-friendly warmth.",
    "caution": "Familiar and not very distinctive.",
    "bestFor": [
      "Users who like apple / warm spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike apple or cinnamon"
    ],
    "similarFragrances": [
      "Boss Bottled Infinite",
      "Layton softer direction"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "parfums-de-marly-layton"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Apple; Warm spicy; Office; Easy; Classic.",
      "avoidIf": "Downrank if user avoids Apple or tags this style negatively."
    },
    "recommendSignals": [
      "Apple",
      "Warm spicy",
      "Office",
      "Easy",
      "Classic"
    ],
    "imageFileName": "boss-bottled-edt.png",
    "image": "/fragrances/boss-bottled-edt.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Vanilla"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Apple",
      "Plum",
      "Lemon",
      "Bergamot",
      "Cinnamon",
      "Mahogany",
      "Carnation",
      "Vanilla",
      "Sandalwood",
      "Cedar"
    ],
    "accords": [
      "Apple",
      "Cinnamon",
      "Woody",
      "Vanilla"
    ]
  },
  {
    "id": "boss-bottled-absolu",
    "name": "Boss Bottled Absolu",
    "brand": "Hugo Boss",
    "concentration": "Parfum Intense",
    "category": "Designer",
    "priceTier": "€80–130",
    "popularity": "Modern designer",
    "topNotes": [
      "Apple",
      "Cinnamon"
    ],
    "heartNotes": [
      "Incense",
      "Patchouli"
    ],
    "baseNotes": [
      "Leather",
      "Cedar",
      "Labdanum"
    ],
    "accordProfile": [
      "Leather",
      "Incense",
      "Apple",
      "Patchouli"
    ],
    "styleTags": [
      "Dark apple",
      "Leather",
      "Incense",
      "Masculine",
      "Modern"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 3,
    "darknessLevel": 6,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Autumn",
      "Winter"
    ],
    "occasionTags": [
      "Evening",
      "Date",
      "Casual"
    ],
    "description": "A darker Boss Bottled direction with apple-cinnamon warmth, incense, patchouli and leathered woods.",
    "caution": "Less fresh and more serious than the original.",
    "bestFor": [
      "Users who like dark apple / leather profiles"
    ],
    "avoidIf": [
      "Users who dislike leather or incense"
    ],
    "similarFragrances": [
      "Givenchy Gentleman Society Ambrée",
      "Carlisle"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "givenchy-gentleman-society-ambree",
      "parfums-de-marly-carlisle"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Dark apple; Leather; Incense; Masculine; Modern.",
      "avoidIf": "Downrank if user avoids Leather or tags this style negatively."
    },
    "recommendSignals": [
      "Dark apple",
      "Leather",
      "Incense",
      "Masculine",
      "Modern"
    ],
    "imageFileName": "boss-bottled-absolu.png",
    "image": "/fragrances/boss-bottled-absolu.png",
    "directions": [
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Smoky / incense"
    ],
    "priceCategory": "designer",
    "priceLabel": "€80–130",
    "colors": [
      "#7d5a3c",
      "#33200f"
    ],
    "notes": [
      "Apple",
      "Cinnamon",
      "Incense",
      "Patchouli",
      "Leather",
      "Cedar",
      "Labdanum"
    ],
    "accords": [
      "Leather",
      "Incense",
      "Apple",
      "Patchouli"
    ]
  },
  {
    "id": "coach-for-men",
    "name": "Coach for Men",
    "brand": "Coach",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€30–60",
    "popularity": "Affordable popular",
    "topNotes": [
      "Pear",
      "Kumquat",
      "Bergamot"
    ],
    "heartNotes": [
      "Cardamom",
      "Coriander",
      "Geranium"
    ],
    "baseNotes": [
      "Suede",
      "Ambergris",
      "Amberwood"
    ],
    "accordProfile": [
      "Pear",
      "Ambroxan",
      "Aromatic",
      "Woody"
    ],
    "styleTags": [
      "Fresh",
      "Pear",
      "Blue",
      "Affordable",
      "Easy"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Daily",
      "Casual",
      "Office"
    ],
    "description": "A clean fresh scent with pear-citrus opening, aromatic spice and suede-amberwood base.",
    "caution": "Pleasant but not distinctive.",
    "bestFor": [
      "Users who like fresh / pear profiles"
    ],
    "avoidIf": [
      "Users who dislike pear or ambroxan"
    ],
    "similarFragrances": [
      "YSL Y EDT",
      "Montblanc Legend Spirit"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "montblanc-legend-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Fresh; Pear; Blue; Affordable; Easy.",
      "avoidIf": "Downrank if user avoids Pear or tags this style negatively."
    },
    "recommendSignals": [
      "Fresh",
      "Pear",
      "Blue",
      "Affordable",
      "Easy"
    ],
    "imageFileName": "coach-for-men.png",
    "image": "/fragrances/coach-for-men.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Spicy",
      "Leather",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Pear",
      "Kumquat",
      "Bergamot",
      "Cardamom",
      "Coriander",
      "Geranium",
      "Suede",
      "Ambergris",
      "Amberwood"
    ],
    "accords": [
      "Pear",
      "Ambroxan",
      "Aromatic",
      "Woody"
    ]
  },
  {
    "id": "john-varvatos-artisan-pure",
    "name": "Artisan Pure",
    "brand": "John Varvatos",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€30–60",
    "popularity": "Affordable enthusiast pick",
    "topNotes": [
      "Clementine",
      "Lemon",
      "Bergamot",
      "Thyme"
    ],
    "heartNotes": [
      "Petitgrain",
      "Ginger"
    ],
    "baseNotes": [
      "Musk",
      "Orris",
      "Woody notes"
    ],
    "accordProfile": [
      "Citrus",
      "White floral",
      "Herbal",
      "Musky"
    ],
    "styleTags": [
      "Citrus",
      "Clean",
      "Herbal",
      "Summer",
      "Affordable"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 4,
    "longevityLevel": 5,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Casual",
      "Office",
      "Beach"
    ],
    "description": "A bright herbal citrus fragrance with petitgrain, ginger and a soft musky woody base.",
    "caution": "Performance is light to moderate.",
    "bestFor": [
      "Users who like citrus / clean profiles"
    ],
    "avoidIf": [
      "Users who dislike citrus or white floral"
    ],
    "similarFragrances": [
      "Dior Homme Cologne",
      "Eau Sauvage Cologne"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-homme-2020",
      "dior-sauvage-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Citrus; Clean; Herbal; Summer; Affordable.",
      "avoidIf": "Downrank if user avoids Citrus or tags this style negatively."
    },
    "recommendSignals": [
      "Citrus",
      "Clean",
      "Herbal",
      "Summer",
      "Affordable"
    ],
    "imageFileName": "john-varvatos-artisan-pure.png",
    "image": "/fragrances/john-varvatos-artisan-pure.png",
    "directions": [
      "Citrus",
      "Green",
      "Woody",
      "Spicy",
      "Floral",
      "Musky / clean"
    ],
    "priceCategory": "mid",
    "priceLabel": "€30–60",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Clementine",
      "Lemon",
      "Bergamot",
      "Thyme",
      "Petitgrain",
      "Ginger",
      "Musk",
      "Orris",
      "Woody notes"
    ],
    "accords": [
      "Citrus",
      "White floral",
      "Herbal",
      "Musky"
    ]
  },
  {
    "id": "issey-miyake-leau-dissey-pour-homme",
    "name": "L’Eau d’Issey Pour Homme",
    "brand": "Issey Miyake",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€40–80",
    "popularity": "Classic fresh",
    "topNotes": [
      "Yuzu",
      "Lemon",
      "Bergamot"
    ],
    "heartNotes": [
      "Nutmeg",
      "Water lily",
      "Cinnamon"
    ],
    "baseNotes": [
      "Vetiver",
      "Musk",
      "Cedar",
      "Tobacco"
    ],
    "accordProfile": [
      "Yuzu",
      "Citrus",
      "Aquatic",
      "Spicy"
    ],
    "styleTags": [
      "Yuzu",
      "Fresh spicy",
      "Aquatic",
      "Classic",
      "Low sweetness"
    ],
    "sweetnessLevel": 5,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 5,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Spring",
      "Summer"
    ],
    "occasionTags": [
      "Office",
      "Daily",
      "Beach"
    ],
    "description": "A crisp yuzu-citrus classic with watery florals, spice and woody musky base.",
    "caution": "Can feel sharp or dated.",
    "bestFor": [
      "Users who like yuzu / fresh spicy profiles"
    ],
    "avoidIf": [
      "Users who dislike yuzu or citrus"
    ],
    "similarFragrances": [
      "Eau Sauvage",
      "Terre Eau Givrée"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dior-sauvage-edt"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Yuzu; Fresh spicy; Aquatic; Classic; Low sweetness.",
      "avoidIf": "Downrank if user avoids Yuzu or tags this style negatively."
    },
    "recommendSignals": [
      "Yuzu",
      "Fresh spicy",
      "Aquatic",
      "Classic",
      "Low sweetness"
    ],
    "imageFileName": "issey-miyake-leau-dissey-pour-homme.png",
    "image": "/fragrances/issey-miyake-leau-dissey-pour-homme.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Spicy",
      "Tobacco",
      "Sweet",
      "Musky / clean",
      "Vetiver"
    ],
    "priceCategory": "mid",
    "priceLabel": "€40–80",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Yuzu",
      "Lemon",
      "Bergamot",
      "Nutmeg",
      "Water lily",
      "Cinnamon",
      "Vetiver",
      "Musk",
      "Cedar",
      "Tobacco"
    ],
    "accords": [
      "Yuzu",
      "Citrus",
      "Aquatic",
      "Spicy"
    ]
  },
  {
    "id": "bvlgari-aqva-pour-homme",
    "name": "Aqva Pour Homme",
    "brand": "Bvlgari",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Classic aquatic",
    "topNotes": [
      "Mandarin",
      "Orange",
      "Petitgrain"
    ],
    "heartNotes": [
      "Seaweed",
      "Lavender",
      "Cotton flower"
    ],
    "baseNotes": [
      "Woody notes",
      "Patchouli",
      "Cedar"
    ],
    "accordProfile": [
      "Marine",
      "Seaweed",
      "Citrus",
      "Aromatic"
    ],
    "styleTags": [
      "Aquatic",
      "Seaweed",
      "Mineral",
      "Masculine",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 7,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Beach",
      "Casual",
      "Daily"
    ],
    "description": "A distinctive marine fragrance with citrus, seaweed and mineral woody depth.",
    "caution": "Seaweed facet can be polarising.",
    "bestFor": [
      "Users who like aquatic / seaweed profiles"
    ],
    "avoidIf": [
      "Users who dislike marine or seaweed"
    ],
    "similarFragrances": [
      "Aqva Marine",
      "Acqua di Giò Profondo"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "acqua-di-gio-profondo"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Aquatic; Seaweed; Mineral; Masculine; Summer.",
      "avoidIf": "Downrank if user avoids Marine or tags this style negatively."
    },
    "recommendSignals": [
      "Aquatic",
      "Seaweed",
      "Mineral",
      "Masculine",
      "Summer"
    ],
    "imageFileName": "bvlgari-aqva-pour-homme.png",
    "image": "/fragrances/bvlgari-aqva-pour-homme.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Green",
      "Woody",
      "Salty",
      "Mineral"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Mandarin",
      "Orange",
      "Petitgrain",
      "Seaweed",
      "Lavender",
      "Cotton flower",
      "Woody notes",
      "Patchouli",
      "Cedar"
    ],
    "accords": [
      "Marine",
      "Seaweed",
      "Citrus",
      "Aromatic"
    ]
  },
  {
    "id": "bvlgari-aqva-marine",
    "name": "Aqva Pour Homme Marine",
    "brand": "Bvlgari",
    "concentration": "EDT",
    "category": "Designer",
    "priceTier": "€50–90",
    "popularity": "Classic aquatic",
    "topNotes": [
      "Grapefruit",
      "Neroli"
    ],
    "heartNotes": [
      "Water notes",
      "Seaweed",
      "Rosemary"
    ],
    "baseNotes": [
      "White cedar"
    ],
    "accordProfile": [
      "Marine",
      "Grapefruit",
      "Neroli",
      "Aquatic"
    ],
    "styleTags": [
      "Aquatic",
      "Grapefruit",
      "Salty",
      "Fresh",
      "Summer"
    ],
    "sweetnessLevel": 3,
    "freshnessLevel": 7,
    "darknessLevel": 3,
    "uniquenessLevel": 6,
    "projectionLevel": 6,
    "longevityLevel": 7,
    "seasonTags": [
      "Summer",
      "Spring"
    ],
    "occasionTags": [
      "Beach",
      "Casual"
    ],
    "description": "A fresh marine aquatic with grapefruit, neroli and seaweed-water notes.",
    "caution": "Performance is moderate.",
    "bestFor": [
      "Users who like aquatic / grapefruit profiles"
    ],
    "avoidIf": [
      "Users who dislike marine or grapefruit"
    ],
    "similarFragrances": [
      "Light Blue Eau Intense",
      "Aqva Pour Homme"
    ],
    "cheaperAlternatives": [
      "N/A"
    ],
    "similarIds": [
      "dandg-light-blue-eau-intense",
      "versace-pour-homme"
    ],
    "cheaperAlternativeIds": [
      "amouage-reflection-man"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Aquatic; Grapefruit; Salty; Fresh; Summer.",
      "avoidIf": "Downrank if user avoids Marine or tags this style negatively."
    },
    "recommendSignals": [
      "Aquatic",
      "Grapefruit",
      "Salty",
      "Fresh",
      "Summer"
    ],
    "imageFileName": "bvlgari-aqva-marine.png",
    "image": "/fragrances/bvlgari-aqva-marine.png",
    "directions": [
      "Citrus",
      "Fresh / aquatic",
      "Woody",
      "Floral",
      "Salty"
    ],
    "priceCategory": "mid",
    "priceLabel": "€50–90",
    "colors": [
      "#5d9fc7",
      "#1d4868"
    ],
    "notes": [
      "Grapefruit",
      "Neroli",
      "Water notes",
      "Seaweed",
      "Rosemary",
      "White cedar"
    ],
    "accords": [
      "Marine",
      "Grapefruit",
      "Neroli",
      "Aquatic"
    ]
  },
  {
    "id": "bvlgari-tygar",
    "name": "Tygar",
    "brand": "Bvlgari",
    "concentration": "EDP",
    "category": "Luxury",
    "priceTier": "€250+",
    "popularity": "Luxury fresh icon",
    "topNotes": [
      "Grapefruit"
    ],
    "heartNotes": [
      "Ginger",
      "Ambroxan"
    ],
    "baseNotes": [
      "Woody notes",
      "Musk"
    ],
    "accordProfile": [
      "Grapefruit",
      "Ambroxan",
      "Woody",
      "Amber"
    ],
    "styleTags": [
      "Grapefruit",
      "Amber",
      "Modern",
      "Powerful",
      "Luxury"
    ],
    "sweetnessLevel": 4,
    "freshnessLevel": 5,
    "darknessLevel": 5,
    "uniquenessLevel": 7,
    "projectionLevel": 8,
    "longevityLevel": 8,
    "seasonTags": [
      "Spring",
      "Summer",
      "Autumn"
    ],
    "occasionTags": [
      "Office",
      "Signature",
      "Casual"
    ],
    "description": "A powerful grapefruit-amber woody scent with clean musky projection and modern luxury feel.",
    "caution": "Expensive and ambroxan-heavy.",
    "bestFor": [
      "Users who like grapefruit / amber profiles"
    ],
    "avoidIf": [
      "Users who dislike grapefruit or ambroxan"
    ],
    "similarFragrances": [
      "Afnan Turathi Blue",
      "LV Afternoon Swim"
    ],
    "cheaperAlternatives": [
      "Afnan Turathi Blue"
    ],
    "similarIds": [
      "afnan-turathi-blue"
    ],
    "cheaperAlternativeIds": [
      "afnan-turathi-blue"
    ],
    "recommendationLogic": {
      "recommendIf": "Recommend when profile signals include Grapefruit; Amber; Modern; Powerful; Luxury.",
      "avoidIf": "Downrank if user avoids Grapefruit or tags this style negatively."
    },
    "recommendSignals": [
      "Grapefruit",
      "Amber",
      "Modern",
      "Powerful",
      "Luxury"
    ],
    "imageFileName": "bvlgari-tygar.png",
    "image": "/fragrances/bvlgari-tygar.png",
    "directions": [
      "Citrus",
      "Woody",
      "Spicy",
      "Amber",
      "Musky / clean"
    ],
    "priceCategory": "niche",
    "priceLabel": "€250+",
    "colors": [
      "#d2b35e",
      "#75591e"
    ],
    "notes": [
      "Grapefruit",
      "Ginger",
      "Ambroxan",
      "Woody notes",
      "Musk"
    ],
    "accords": [
      "Grapefruit",
      "Ambroxan",
      "Woody",
      "Amber"
    ]
  }
];

export const FRAGRANCES = fragrances;

export const VALID_IDS = new Set(fragrances.map((f) => f.id));

export const byId = (id: string): Fragrance => {
  const f = fragrances.find((x) => x.id === id);
  if (!f) throw new Error(`Unknown fragrance: ${id}`);
  return f;
};

export const findById = (id?: string): Fragrance | undefined =>
  fragrances.find((x) => x.id === id);
