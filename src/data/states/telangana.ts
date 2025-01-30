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
    {
      front: "దేవాలయం",
      back: "Temple",
      pronunciation: "Devalayam",
      options: ["Temple", "Church", "Mosque", "School"],
    },
    {
      front: "పండుగ",
      back: "Festival",
      pronunciation: "Panduga",
      options: ["Festival", "Holiday", "Celebration", "Party"],
    },
    {
      front: "బోనాలు",
      back: "Bonalu",
      pronunciation: "Bonalu",
      options: ["Bonalu", "Diwali", "Sankranti", "Ugadi"],
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
      front: "చార్మినార్ ఎక్కడ ఉంది?",
      back: "Where is Charminar?",
      pronunciation: "Charminar ekkada undi?",
      options: ["Where is Charminar?", "What is Charminar?", "How old is Charminar?", "Who built Charminar?"],
    },
    {
      front: "బతుకమ్మ పండుగ",
      back: "Bathukamma Festival",
      pronunciation: "Bathukamma Panduga",
      options: ["Bathukamma Festival", "Diwali Festival", "Sankranti Festival", "Ugadi Festival"],
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
      front: "రమజాన్ పండుగ శుభాకాంక్షలు",
      back: "Happy Ramadan",
      pronunciation: "Ramazan panduga subhakankshalu",
      options: ["Happy Ramadan", "Happy Diwali", "Happy New Year", "Happy Birthday"],
    },
    {
      front: "గోల్కొండ కోట చరిత్ర చాలా ఆసక్తికరంగా ఉంటుంది",
      back: "The history of Golconda Fort is very interesting",
      pronunciation: "Golkonda kota charitra chaala asaktikaranga untundi",
      options: [
        "The history of Golconda Fort is very interesting",
        "Golconda Fort is very beautiful",
        "Golconda Fort is very old",
        "I want to visit Golconda Fort"
      ],
    },
    {
      front: "హైదరాబాదీ బిర్యానీ ప్రపంచ ప్రసిద్ధి చెందింది",
      back: "Hyderabadi Biryani is world famous",
      pronunciation: "Hyderabadi biryani prapancha prasiddhi chendindi",
      options: [
        "Hyderabadi Biryani is world famous",
        "I like Hyderabadi Biryani",
        "Hyderabadi food is spicy",
        "Let's eat Biryani"
      ],
    },
  ],
};