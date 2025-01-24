import { Question } from "../types";

export const bengalQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "নমস্কার",
      back: "Hello",
      pronunciation: "Nomoshkar",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
  ],
  intermediate: [
    {
      front: "কেমন আছেন?",
      back: "How are you?",
      pronunciation: "Kemon aachhen?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
  ],
  advanced: [
    {
      front: "আমি বাংলা শিখছি",
      back: "I am learning Bengali",
      pronunciation: "Ami Bangla shikhchi",
      options: ["I am learning Bengali", "I like Bengali food", "I live in Bengal", "I speak Bengali"],
    },
    {
      front: "আমি বাংলা গান গাই",
      back: "I sing Bengali songs",
      pronunciation: "Ami Bangla gaan gai",
      options: ["I sing Bengali songs", "I like Bengali music", "I listen to Bengali songs", "I understand Bengali songs"],
    },
    {
      front: "বাংলা সাহিত্য খুব সমৃদ্ধ",
      back: "Bengali literature is very rich",
      pronunciation: "Bangla sahityo khub samriddho",
      options: ["Bengali literature is very rich", "I read Bengali literature", "I like Bengali books", "Bengali is beautiful"],
    },
  ],
};
