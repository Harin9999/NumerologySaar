export interface Gemstone {
  name: string;
  planet: string;
  benefits: string[];
  imageUrl: string;
  affiliateLink: string;
}

export interface CoreNumber {
  number: number;
  title: string;
  characteristics: string;
  gemstone: {
    name: string;
    planet: string;
    benefits: string[];
  };
  growth: string;
}

export const coreNumbers: CoreNumber[] = [
  {
    number: 1,
    title: "The Pioneer",
    characteristics: "Leadership, independence, originality",
    gemstone: {
      name: "Ruby",
      planet: "Sun",
      benefits: ["Boosts self-confidence and determination", "Enhances leadership qualities", "Protects against negative energies"]
    },
    growth: "Take initiative, start new projects, develop self-reliance"
  },
  {
    number: 2,
    title: "The Mediator",
    characteristics: "Harmony, cooperation, sensitivity",
    gemstone: {
      name: "Pearl or Moonstone",
      planet: "Moon",
      benefits: ["Promotes emotional balance", "Enhances intuition", "Encourages harmonious relationships"]
    },
    growth: "Practice diplomacy, develop intuition, foster partnerships"
  },
  {
    number: 3,
    title: "The Creator",
    characteristics: "Expression, joy, creativity",
    gemstone: {
      name: "Yellow Sapphire",
      planet: "Jupiter",
      benefits: ["Attracts wealth and success", "Boosts creativity", "Promotes wisdom"]
    },
    growth: "Embrace creativity, improve communication, express yourself"
  },
  {
    number: 4,
    title: "The Builder",
    characteristics: "Stability, organization, dedication",
    gemstone: {
      name: "Hessonite (Gomed)",
      planet: "Rahu/Uranus",
      benefits: ["Strengthens focus", "Brings stability", "Protects against negativity"]
    },
    growth: "Build strong foundations, establish routines, create order"
  },
  {
    number: 5,
    title: "The Freedom Seeker",
    characteristics: "Change, adventure, versatility",
    gemstone: {
      name: "Emerald",
      planet: "Mercury",
      benefits: ["Improves communication", "Enhances mental clarity", "Attracts prosperity"]
    },
    growth: "Embrace change, seek new experiences, maintain flexibility"
  },
  {
    number: 6,
    title: "The Nurturer",
    characteristics: "Love, responsibility, harmony",
    gemstone: {
      name: "Diamond",
      planet: "Venus",
      benefits: ["Promotes love and harmony", "Attracts wealth", "Enhances creativity"]
    },
    growth: "Care for others, create beauty, balance responsibilities"
  },
  {
    number: 7,
    title: "The Seeker",
    characteristics: "Wisdom, spirituality, analysis",
    gemstone: {
      name: "Cat's Eye",
      planet: "Ketu/Neptune",
      benefits: ["Protects against negativity", "Enhances intuition", "Brings clarity"]
    },
    growth: "Study deeply, practice meditation, seek inner wisdom"
  },
  {
    number: 8,
    title: "The Achiever",
    characteristics: "Power, abundance, success",
    gemstone: {
      name: "Blue Sapphire",
      planet: "Saturn",
      benefits: ["Brings wealth and success", "Protects against obstacles", "Enhances focus"]
    },
    growth: "Set ambitious goals, master material realm, lead with authority"
  },
  {
    number: 9,
    title: "The Humanitarian",
    characteristics: "Compassion, universal love, completion",
    gemstone: {
      name: "Red Coral",
      planet: "Mars",
      benefits: ["Boosts vitality", "Protects against enemies", "Balances emotions"]
    },
    growth: "Serve others, practice forgiveness, embrace completion"
  }
];

export const gemstoneData: { [key: number]: Gemstone } = {
  1: {
    name: "Ruby",
    planet: "Sun",
    benefits: [
      "Boosts self-confidence and determination",
      "Enhances leadership qualities and creativity",
      "Protects against negative energies"
    ],
    imageUrl: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=ruby+gemstone&crid=1EEEL16FFA71X&sprefix=ruby+ge%2Caps%2C496&linkCode=ll2&tag=mysavingtod0b-20&linkId=0ae5415a9e59b30f7bf353467e5c79ee&language=en_US&ref_=as_li_ss_tl"
  },
  2: {
    name: "Pearl or Moonstone",
    planet: "Moon",
    benefits: [
      "Promotes emotional balance and inner peace",
      "Enhances intuition and spiritual awareness",
      "Encourages harmonious relationships"
    ],
    imageUrl: "https://images.unsplash.com/photo-1612869746134-bd7f8e80c2c7?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=pearl+gemstone&crid=13T262HLUBL44&sprefix=pearl+gemstone%2Caps%2C388&linkCode=ll2&tag=mysavingtod0b-20&linkId=cc17cada0030248442427094412693de&language=en_US&ref_=as_li_ss_tl"
  },
  3: {
    name: "Yellow Sapphire",
    planet: "Jupiter",
    benefits: [
      "Attracts wealth, success, and good fortune",
      "Boosts creativity and communication skills",
      "Promotes wisdom and spiritual growth"
    ],
    imageUrl: "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=Yellow+Sapphire+gemstone&crid=1IKGO5FHKA9E4&sprefix=yellow+sapphire+gemstone%2Caps%2C291&linkCode=ll2&tag=mysavingtod0b-20&linkId=3402985019fea23530fef3dfceeab971&language=en_US&ref_=as_li_ss_tl"
  },
  4: {
    name: "Hessonite (Gomed)",
    planet: "Rahu/Uranus",
    benefits: [
      "Strengthens focus and discipline",
      "Brings stability in finances and personal life",
      "Protects against negative influences"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551122087-f99a4ade46ce?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=hessonite+gemstone&crid=2QZV83HNNMFGQ&sprefix=Hessonite+gemstone%2Caps%2C385&linkCode=ll2&tag=mysavingtod0b-20&linkId=bce45f480d7e2202c7ff3c0d0bf55f28&language=en_US&ref_=as_li_ss_tl"
  },
  5: {
    name: "Emerald",
    planet: "Mercury",
    benefits: [
      "Improves communication skills and self-expression",
      "Enhances mental clarity and decision-making",
      "Attracts prosperity and personal growth"
    ],
    imageUrl: "https://images.unsplash.com/photo-1551996663-79514f6b1e4d?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=Emerald+gemstone&crid=26OOQK0RLAFYD&sprefix=emerald+gemstone%2Caps%2C296&linkCode=ll2&tag=mysavingtod0b-20&linkId=efe26ba790fce16f668d7c7189079f45&language=en_US&ref_=as_li_ss_tl"
  },
  6: {
    name: "Diamond",
    planet: "Venus",
    benefits: [
      "Promotes love, harmony, and emotional healing",
      "Attracts wealth and luxuries",
      "Enhances creativity in art or design-related fields"
    ],
    imageUrl: "https://images.unsplash.com/photo-1615655114865-4cc1bda5901e?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=Diamond+or+Blue+Diamond+gemstone&crid=1VHPRBDDER9GX&sprefix=diamond+or+blue+diamond+gemstone%2Caps%2C328&linkCode=ll2&tag=mysavingtod0b-20&linkId=b639d2e713491d01010f7f3cf36da18e&language=en_US&ref_=as_li_ss_tl"
  },
  7: {
    name: "Cat's Eye",
    planet: "Ketu/Neptune",
    benefits: [
      "Protects against negative energies or psychic attacks",
      "Enhances intuition and spiritual growth",
      "Brings clarity during times of confusion"
    ],
    imageUrl: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=cat+eye+stone&crid=2A5Q82FVDYCQT&sprefix=Cat%E2%80%99s+Eye+gemstone%2Caps%2C345&linkCode=ll2&tag=mysavingtod0b-20&linkId=8db650343af1a1ea8d59dc6e7b738b4d&language=en_US&ref_=as_li_ss_tl"
  },
  8: {
    name: "Blue Sapphire",
    planet: "Saturn",
    benefits: [
      "Brings wealth, success, and financial stability",
      "Protects against accidents or negative karma",
      "Enhances focus on long-term goals"
    ],
    imageUrl: "https://images.unsplash.com/photo-1599827552599-eadf5fb3c75f?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=blue+sapphire+gemstone&crid=1KZ8Y05ZO5K09&sprefix=blue+sapphire+gemstone%2Caps%2C312&linkCode=ll2&tag=mysavingtod0b-20&linkId=e2beb48547b7d267bcf086f3c3ad4b5e&language=en_US&ref_=as_li_ss_tl"
  },
  9: {
    name: "Red Coral",
    planet: "Mars",
    benefits: [
      "Boosts physical vitality and stamina",
      "Protects against enemies or obstacles",
      "Encourages assertiveness while balancing emotions"
    ],
    imageUrl: "https://images.unsplash.com/photo-1612034398277-e8c36d54f4a1?w=800&auto=format&fit=crop&q=80",
    affiliateLink: "https://www.amazon.com/s?k=Red+Coral+gemstone&crid=2KWCTIPH0W2DB&sprefix=red+coral+gemstone%2Caps%2C416&linkCode=ll2&tag=mysavingtod0b-20&linkId=21349121d76855f611f06e9162e59ed4&language=en_US&ref_=as_li_ss_tl"
  }
};