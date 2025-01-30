import { Question } from "../types";

export const telanganaQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "నమస్కారం",
      back: "Hello",
      pronunciation: "Namaskaram",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
  ],
  intermediate: [
    {
      front: "మీరు ఎలా ఉన్నారు?",
      back: "How are you?",
      pronunciation: "Meeru ela unnaru?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
    {
      front: "నాకు సహాయం కావాలి",
      back: "I need help",
      pronunciation: "Naaku sahaayam kaavaali",
      options: ["I need help", "I want food", "I am lost", "Call the police"],
    },
    {
      front: "నాకు దారి తెలియదు",
      back: "I don't know the way",
      pronunciation: "Naaku daari teliyadu",
      options: ["I don't know the way", "I am lost", "Where is this?", "Help me"],
    },
  ],
  advanced: [
    {
      front: "నేను తెలుగు నేర్చుకుంటున్నాను",
      back: "I am learning Telugu",
      pronunciation: "Nenu Telugu nerchukuntunaanu",
      options: ["I am learning Telugu", "I like Telugu food", "I live in Telangana", "I speak Telugu"],
    },
    {
      front: "తెలంగాణ వంటకాలు చాలా రుచిగా ఉంటాయి",
      back: "Telangana food is very tasty",
      pronunciation: "Telangana vantakaalu chaala ruchigaa untaayi",
      options: ["Telangana food is very tasty", "I like Telangana food", "I want Telangana food", "Telangana food is spicy"],
    },
  ],
};