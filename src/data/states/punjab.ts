import { Question } from "../types";

export const punjabQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
  beginner: [
    {
      front: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ",
      back: "Hello",
      pronunciation: "Sat Sri Akal",
      options: ["Hello", "Goodbye", "Thank you", "Please"],
    },
  ],
  intermediate: [
    {
      front: "ਤੁਸੀ ਕਿਵੇਂ ਹੋ?",
      back: "How are you?",
      pronunciation: "Tusi kive ho?",
      options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
    },
    {
      front: "ਮੈਨੂੰ ਮਦਦ ਚਾਹੀਦੀ ਹੈ",
      back: "I need help",
      pronunciation: "Mainu madad chahidi hai",
      options: ["I need help", "I want food", "I am lost", "Call the police"],
    },
    {
      front: "ਮੈਨੂੰ ਰਸਤਾ ਨਹੀਂ ਪਤਾ",
      back: "I don't know the way",
      pronunciation: "Mainu rasta nahi pata",
      options: ["I don't know the way", "I am lost", "Where is this?", "Help me"],
    },
    {
      front: "ਕੀ ਤੁਸੀਂ ਅੰਗਰੇਜ਼ੀ ਜਾਣਦੇ ਹੋ?",
      back: "Do you know English?",
      pronunciation: "Ki tusi angrezi jaande ho?",
      options: ["Do you know English?", "Can you help me?", "What language do you speak?", "Do you understand me?"],
    }
  ],
  advanced: [
    {
      front: "ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖ ਰਿਹਾ ਹਾਂ",
      back: "I am learning Punjabi",
      pronunciation: "Main Punjabi sikh reha haan",
      options: ["I am learning Punjabi", "I like Punjabi food", "I live in Punjab", "I speak Punjabi"],
    },
    {
      front: "ਮੈਂ ਪੰਜਾਬੀ ਗੀਤ ਸੁਣਦਾ ਹਾਂ",
      back: "I listen to Punjabi songs",
      pronunciation: "Main Punjabi geet sunda haan",
      options: ["I listen to Punjabi songs", "I like Punjabi music", "I sing Punjabi songs", "I understand Punjabi songs"],
    },
    {
      front: "ਪੰਜਾਬੀ ਭੋਜਨ ਬਹੁਤ ਸਵਾਦੀ ਹੈ",
      back: "Punjabi food is very tasty",
      pronunciation: "Punjabi bhojan bahut swadi hai",
      options: ["Punjabi food is very tasty", "I like Punjabi food", "I want Punjabi food", "Punjabi food is spicy"],
    },
  ],
};
