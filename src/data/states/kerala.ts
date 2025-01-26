import { Question } from "../types";

export const keralaQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "നമസ്കാരം",
      back: "Hello",
      pronunciation: "Namaskaram",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
    {
      front: "നന്ദി",
      back: "Thank you",
      pronunciation: "Nandi",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
    {
      front: "സുപ്രഭാതം",
      back: "Good Morning",
      pronunciation: "Suprabhatham",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
    {
      front: "ശുഭ സന്ധ്യ",
      back: "Good Evening",
      pronunciation: "Shubha Sandhya",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
    {
      front: "ശുഭ രാത്രി",
      back: "Good Night",
      pronunciation: "Shubha Rathri",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
    {
      front: "സദ്യ",
      back: "Sadhya (Traditional Feast)",
      pronunciation: "Sadhya",
      options: ["Sadhya (Traditional Feast)", "Breakfast", "Snack", "Dinner"],
    },
    {
      front: "കഥകളി",
      back: "Kathakali (Classical Dance)",
      pronunciation: "Kathakali",
      options: ["Kathakali (Classical Dance)", "Folk Dance", "Music", "Drama"],
    },
    {
      front: "ഓണം",
      back: "Onam (Harvest Festival)",
      pronunciation: "Onam",
      options: ["Onam (Harvest Festival)", "New Year", "Religious Festival", "Cultural Day"],
    },
    {
      front: "വള്ളം കളി",
      back: "Vallam Kali (Boat Race)",
      pronunciation: "Vallam Kali",
      options: ["Vallam Kali (Boat Race)", "Car Race", "Marathon", "Swimming Competition"],
    },
    {
      front: "മുന്തിരി",
      back: "Cashew",
      pronunciation: "Munthiri",
      options: ["Cashew", "Almond", "Peanut", "Pistachio"],
    }
  ],
  intermediate: [
    {
      front: "സുഖമാണോ?",
      back: "How are you?",
      pronunciation: "Sukhamano?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
    {
      front: "നിങ്ങളുടെ പേര് എന്താണ്?",
      back: "What is your name?",
      pronunciation: "Ningalude peru enthanu?",
      options: ["How are you?", "What is your name?", "Where are you from?", "Nice to meet you"],
    },
    {
      front: "എവിടെ പോകുന്നു?",
      back: "Where are you going?",
      pronunciation: "Evide Pokunnu?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Nice to meet you"],
    },
    {
      front: "കണ്ടതിൽ സന്തോഷം",
      back: "Nice to meet you",
      pronunciation: "Kandathil Santhosham",
      options: ["How are you?", "What is your name?", "Where are you from?", "Nice to meet you"],
    },
    {
      front: "എനിക്ക് സഹായം വേണം",
      back: "I need help",
      pronunciation: "Enikku sahayam venam",
      options: ["I need help", "I want food", "I am lost", "Call the police"],
    },
    {
      front: "ആയുർവേദം",
      back: "Ayurveda (Traditional Medicine)",
      pronunciation: "Ayurvedam",
      options: ["Ayurveda (Traditional Medicine)", "Modern Medicine", "Exercise", "Yoga"],
    },
    {
      front: "തേയില തോട്ടം",
      back: "Tea Plantation",
      pronunciation: "Theyila Thottam",
      options: ["Tea Plantation", "Coffee Farm", "Spice Garden", "Rice Field"],
    },
    {
      front: "കായൽ",
      back: "Backwaters",
      pronunciation: "Kayal",
      options: ["Backwaters", "Ocean", "River", "Lake"],
    },
    {
      front: "മോഹിനിയാട്ടം",
      back: "Mohiniyattam (Classical Dance)",
      pronunciation: "Mohiniyattam",
      options: ["Mohiniyattam (Classical Dance)", "Folk Song", "Modern Dance", "Street Performance"],
    },
    {
      front: "പുട്ട്",
      back: "Puttu (Steam Cake)",
      pronunciation: "Puttu",
      options: ["Puttu (Steam Cake)", "Bread", "Rice", "Noodles"],
    }
  ],
  advanced: [
    {
      front: "കേരളത്തിലെ കായലുകൾ ഒരു സമാന്തര സമുദ്രമാണ്",
      back: "Kerala's backwaters form a parallel ocean",
      pronunciation: "Keralathile kayalukal oru samanthara samudramanu",
      options: [
        "Kerala's backwaters form a parallel ocean",
        "Kerala has no backwaters",
        "Kerala's backwaters are artificial",
        "Kerala's backwaters are only for fishing"
      ],
    },
    {
      front: "കേരളത്തിൽ 44 നദികൾ ഉണ്ട്",
      back: "Kerala has 44 rivers",
      pronunciation: "Keralathil nalpathinalu nadikal undu",
      options: [
        "Kerala has 44 rivers",
        "Kerala has no rivers",
        "Kerala has 100 rivers",
        "Kerala has 10 rivers"
      ],
    },
    {
      front: "മലയാളം ദ്രാവിഡ ഭാഷാ കുടുംബത്തിൽ പെടുന്നു",
      back: "Malayalam belongs to the Dravidian language family",
      pronunciation: "Malayalam dravida bhasha kudumbathil pedunnu",
      options: [
        "Malayalam belongs to the Dravidian language family",
        "Malayalam is an Indo-European language",
        "Malayalam is a modern language",
        "Malayalam has no script"
      ],
    },
    {
      front: "വയനാട് കാപ്പി",
      back: "Wayanad Coffee",
      pronunciation: "Wayanad Kappi",
      options: [
        "Wayanad Coffee",
        "Wayanad Tea",
        "Wayanad Spices",
        "Wayanad Rice"
      ],
    },
    {
      front: "തൃശ്ശൂർ പൂരം",
      back: "Thrissur Pooram (Temple Festival)",
      pronunciation: "Thrissur Pooram",
      options: [
        "Thrissur Pooram (Temple Festival)",
        "Thrissur Food Festival",
        "Thrissur Music Festival",
        "Thrissur Art Show"
      ],
    }
  ],
};
