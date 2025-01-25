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
      front: "എനിക്ക് വഴി അറിയില്ല",
      back: "I don't know the way",
      pronunciation: "Enikku vazhi ariyilla",
      options: ["I don't know the way", "I am lost", "Where is this?", "Help me"],
    },
    {
      front: "നിങ്ങൾക്ക് ഇംഗ്ലീഷ് അറിയാമോ?",
      back: "Do you know English?",
      pronunciation: "Ningalkku English ariyamo?",
      options: ["Do you know English?", "Can you help me?", "What language do you speak?", "Do you understand me?"],
    }
  ],
  advanced: [
    {
      front: "ഞാൻ മലയാളം പഠിക്കുകയാണ്",
      back: "I am learning Malayalam",
      pronunciation: "Njan Malayalam padikkukayanu",
      options: ["I am learning Malayalam", "I like Kerala food", "I live in Kerala", "I speak Malayalam"],
    },
    {
      front: "എനിക്ക് കേരള ഭക്ഷണം ഇഷ്ടമാണ്",
      back: "I like Kerala food",
      pronunciation: "Enikku Kerala bhakshanam ishtamanu",
      options: ["I am learning Malayalam", "I like Kerala food", "I live in Kerala", "I speak Malayalam"],
    },
    {
      front: "എനിക്ക് മലയാളം സംസാരിക്കാൻ കഴിയും",
      back: "I can speak Malayalam",
      pronunciation: "Enikku Malayalam samsarikkan kazhiyum",
      options: ["I can speak Malayalam", "I am learning Malayalam", "I like Malayalam", "I understand Malayalam"],
    },
    {
      front: "കേരളം എന്റെ സ്വന്തം നാടാണ്",
      back: "Kerala is my homeland",
      pronunciation: "Kerala ente swantham naadanu",
      options: ["Kerala is my homeland", "I live in Kerala", "I like Kerala", "I am from Kerala"],
    },
  ],
};
