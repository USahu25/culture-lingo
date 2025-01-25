import { Question } from "../types";

export const maharashtraQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "नमस्कार",
      back: "Hello",
      pronunciation: "Namaskar",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
  ],
  intermediate: [
    {
      front: "कसे आहात?",
      back: "How are you?",
      pronunciation: "Kase aahat?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
    {
      front: "तुम्ही कुठे राहता?",
      back: "Where do you live?",
      pronunciation: "Tumhi kuthe rahata?",
      options: ["Where do you live?", "Where are you from?", "Where are you going?", "Where were you born?"],
    },
    {
      front: "मला मराठी खाना आवडतो",
      back: "I like Marathi food",
      pronunciation: "Mala Marathi khana aavadto",
      options: ["I like Marathi food", "I can cook Marathi food", "Marathi food is good", "I want Marathi food"],
    },
    {
      front: "मला मदत हवी आहे",
      back: "I need help",
      pronunciation: "Mala madat havi aahe",
      options: ["I need help", "I want food", "I am lost", "Call the police"],
    },
    {
      front: "मला रस्ता माहित नाही",
      back: "I don't know the way",
      pronunciation: "Mala rasta mahit nahi",
      options: ["I don't know the way", "I am lost", "Where is this?", "Help me"],
    },
    {
      front: "तुम्हाला इंग्रजी येते का?",
      back: "Do you know English?",
      pronunciation: "Tumhala Ingraji yete ka?",
      options: ["Do you know English?", "Can you help me?", "What language do you speak?", "Do you understand me?"],
    }
  ],
  advanced: [
    {
      front: "मी मराठी शिकत आहे",
      back: "I am learning Marathi",
      pronunciation: "Mi Marathi shikat aahe",
      options: ["I am learning Marathi", "I like Marathi food", "I live in Maharashtra", "I speak Marathi"],
    },
  ],
};
