import { Question } from "../types";

export const tamilNaduQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "கோயில்",
      back: "Temple",
      pronunciation: "Kovil",
      options: ["Temple", "Market", "School", "House"],
    },
    {
      front: "பொங்கல்",
      back: "Pongal (Harvest Festival)",
      pronunciation: "Pongal",
      options: ["Pongal (Harvest Festival)", "New Year", "Wedding", "Birthday"],
    },
    {
      front: "கலாச்சாரம்",
      back: "Culture",
      pronunciation: "Kalaacharam",
      options: ["Culture", "Language", "Food", "Dance"],
    },
    {
      front: "பரதநாட்டியம்",
      back: "Bharatanatyam (Classical Dance)",
      pronunciation: "Bharatanatyam",
      options: ["Bharatanatyam (Classical Dance)", "Folk Music", "Festival", "Art"],
    },
    {
      front: "திருவிழா",
      back: "Temple Festival",
      pronunciation: "Thiruvizha",
      options: ["Temple Festival", "Birthday Party", "Wedding", "New Year"],
    }
  ],
  intermediate: [
    {
      front: "மரபு கலை",
      back: "Traditional Art",
      pronunciation: "Marabu Kalai",
      options: ["Traditional Art", "Modern Art", "Sculpture", "Painting"],
    },
    {
      front: "கர்நாடக இசை",
      back: "Carnatic Music",
      pronunciation: "Karnataga Isai",
      options: ["Carnatic Music", "Folk Music", "Film Music", "Classical Dance"],
    },
    {
      front: "திருக்குறள்",
      back: "Thirukkural (Ancient Tamil Literature)",
      pronunciation: "Thirukkural",
      options: ["Thirukkural (Ancient Tamil Literature)", "Folk Tale", "Poetry", "Story"],
    },
    {
      front: "கோலம்",
      back: "Kolam (Floor Art)",
      pronunciation: "Kolam",
      options: ["Kolam (Floor Art)", "Wall Painting", "Rangoli", "Decoration"],
    },
    {
      front: "தை பொங்கல்",
      back: "Thai Pongal (Harvest Festival)",
      pronunciation: "Thai Pongal",
      options: ["Thai Pongal (Harvest Festival)", "New Year", "Religious Festival", "Cultural Event"],
    }
  ],
  advanced: [
    {
      front: "மதுரை மீனாட்சி அம்மன் கோயில்",
      back: "Madurai Meenakshi Temple",
      pronunciation: "Madurai Meenakshi Amman Kovil",
      options: [
        "Madurai Meenakshi Temple",
        "Thanjavur Temple",
        "Rameswaram Temple",
        "Kanchipuram Temple"
      ],
    },
    {
      front: "தஞ்சாவூர் பெரிய கோயில்",
      back: "Thanjavur Big Temple",
      pronunciation: "Thanjavur Periya Kovil",
      options: [
        "Thanjavur Big Temple",
        "Madurai Temple",
        "Palani Temple",
        "Tirupati Temple"
      ],
    },
    {
      front: "நவராத்திரி",
      back: "Navaratri (Nine Nights Festival)",
      pronunciation: "Navaratri",
      options: [
        "Navaratri (Nine Nights Festival)",
        "Pongal Festival",
        "New Year Festival",
        "Harvest Festival"
      ],
    },
    {
      front: "ஆடி பெருக்கு",
      back: "Aadi Perukku (River Festival)",
      pronunciation: "Aadi Perukku",
      options: [
        "Aadi Perukku (River Festival)",
        "Temple Festival",
        "Harvest Festival",
        "New Year Festival"
      ],
    },
    {
      front: "மாரியம்மன்",
      back: "Mariamman (Rain Goddess)",
      pronunciation: "Mariamman",
      options: [
        "Mariamman (Rain Goddess)",
        "Sun God",
        "Moon Goddess",
        "Wind God"
      ],
    }
  ],
};