export interface NumerologyMeaning {
  title: string;
  brief: string;
  preview: string;
  traits: string[];
}

export interface NumerologyMeanings {
  [key: number]: NumerologyMeaning;
}

export const numerologyMeanings: NumerologyMeanings = {
  1: {
    title: "The Leader",
    brief: "Independent, ambitious, innovative",
    preview: "You are a natural-born leader with strong drive and determination. Your independent nature and innovative thinking make you a pioneer in your field.",
    traits: [
      "Natural leadership abilities",
      "Creative thinking",
      "Strong independence"
    ]
  },
  2: {
    title: "The Mediator",
    brief: "Diplomatic, intuitive, cooperative",
    preview: "You possess natural diplomatic abilities and excel at bringing harmony to any situation. Your intuitive nature helps you understand others deeply.",
    traits: [
      "Natural peacemaker",
      "Strong intuition",
      "Emotional intelligence"
    ]
  },
  3: {
    title: "The Communicator",
    brief: "Expressive, creative, social",
    preview: "You have a natural gift for self-expression and creativity. Your optimistic nature brings joy to those around you.",
    traits: [
      "Artistic abilities",
      "Social charm",
      "Creative expression"
    ]
  },
  4: {
    title: "The Builder",
    brief: "Practical, reliable, disciplined",
    preview: "You are the foundation builder with strong organizational skills and dedication. Your practical approach ensures lasting success.",
    traits: [
      "Strong work ethic",
      "Organizational skills",
      "Reliability"
    ]
  },
  5: {
    title: "The Freedom Seeker",
    brief: "Adventurous, versatile, progressive",
    preview: "You thrive on change and adventure. Your versatile nature allows you to adapt and succeed in various situations.",
    traits: [
      "Adaptability",
      "Love for freedom",
      "Progressive thinking"
    ]
  },
  6: {
    title: "The Nurturer",
    brief: "Responsible, caring, harmonious",
    preview: "You have a natural ability to care for others and create harmony. Your responsible nature makes you a trusted advisor.",
    traits: [
      "Natural caregiver",
      "Sense of responsibility",
      "Harmonious nature"
    ]
  },
  7: {
    title: "The Seeker",
    brief: "Analytical, spiritual, mysterious",
    preview: "You possess a deeply analytical mind and spiritual awareness. Your quest for knowledge leads to profound insights.",
    traits: [
      "Deep thinking",
      "Spiritual awareness",
      "Research abilities"
    ]
  },
  8: {
    title: "The Achiever",
    brief: "Powerful, abundant, authoritative",
    preview: "You have natural business acumen and leadership abilities. Your path leads to material and professional success.",
    traits: [
      "Business sense",
      "Material success",
      "Leadership skills"
    ]
  },
  9: {
    title: "The Humanitarian",
    brief: "Compassionate, wise, spiritual",
    preview: "You are here to serve humanity with your wisdom and compassion. Your universal understanding brings healing to others.",
    traits: [
      "Universal wisdom",
      "Compassionate nature",
      "Healing abilities"
    ]
  },
  11: {
    title: "The Master Intuitive",
    brief: "Inspirational, intuitive, enlightened",
    preview: "As a master number, you possess heightened intuition and spiritual awareness. Your role is to inspire and guide others.",
    traits: [
      "Spiritual insight",
      "Inspirational leadership",
      "Heightened intuition"
    ]
  },
  22: {
    title: "The Master Builder",
    brief: "Visionary, practical, powerful",
    preview: "You combine practical abilities with grand vision. Your potential to achieve large-scale success is unprecedented.",
    traits: [
      "Visionary thinking",
      "Practical mastery",
      "Large-scale success"
    ]
  },
  33: {
    title: "The Master Teacher",
    brief: "Nurturing, spiritual, influential",
    preview: "Your role is to guide and heal on a spiritual level. You have the potential to influence many through your wisdom.",
    traits: [
      "Spiritual teaching",
      "Healing abilities",
      "Universal love"
    ]
  }
};