import { Question } from "../types";

export const karnatakaQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "ನಮಸ್ಕಾರ",
      back: "Hello",
      pronunciation: "Namaskara",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
    {
      front: "ಶುಭ ಬೆಳಗು",
      back: "Good Morning",
      pronunciation: "Shubha Belagu",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
    {
      front: "ಶುಭ ಸಂಜೆ",
      back: "Good Evening",
      pronunciation: "Shubha Sanje",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
    {
      front: "ಶುಭ ರಾತ್ರಿ",
      back: "Good Night",
      pronunciation: "Shubha Ratri",
      options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
    },
  ],
  intermediate: [
    {
      front: "ಹೇಗಿದ್ದೀರಾ?",
      back: "How are you?",
      pronunciation: "Hegiddira?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
    {
      front: "ನಿಮ್ಮ ಹೆಸರೇನು?",
      back: "What is your name?",
      pronunciation: "Nimma Hesarenu?",
      options: ["How are you?", "What is your name?", "Where are you from?", "Nice to meet you"],
    },
    {
      front: "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾದದ್ದು ಸಂತೋಷ",
      back: "Nice to meet you",
      pronunciation: "Nimmannu Bhetiyadaddu Santhosa",
      options: ["How are you?", "What is your name?", "Where are you from?", "Nice to meet you"],
    },
  ],
  advanced: [
    {
      front: "ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ",
      back: "I am learning Kannada",
      pronunciation: "Naanu Kannada kaliyuttiddene",
      options: ["I am learning Kannada", "I like Kannada food", "I live in Karnataka", "I speak Kannada"],
    },
    {
      front: "ನಾನು ಕರ್ನಾಟಕದಲ್ಲಿ ಹುಟ್ಟಿದೆ",
      back: "I was born in Karnataka",
      pronunciation: "Naanu Karnatakadalli huttide",
      options: ["I was born in Karnataka", "I live in Karnataka", "I like Karnataka", "I am from Karnataka"],
    },
    {
      front: "ನನಗೆ ಕನ್ನಡ ಸಿನಿಮಾ ತುಂಬಾ ಇಷ್ಟ",
      back: "I really like Kannada movies",
      pronunciation: "Nanage Kannada cinema tumba ishta",
      options: ["I really like Kannada movies", "I watch Kannada movies", "Kannada movies are good", "I understand Kannada movies"],
    },
  ],
};
