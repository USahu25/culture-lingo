interface Question {
  front: string
  back: string
  pronunciation?: string
  options?: string[]
}

interface RegionQuestions {
  [key: string]: {
    beginner: Question[]
    intermediate: Question[]
    advanced: Question[]
  }
}

export const questionsData: RegionQuestions = {
  "Tamil Nadu": {
    beginner: [
      {
        front: "வணக்கம்",
        back: "Hello",
        pronunciation: "Vanakkam",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "நன்றி",
        back: "Thank you",
        pronunciation: "Nandri",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "காலை வணக்கம்",
        back: "Good Morning",
        pronunciation: "Kaalai Vanakkam",
        options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
      },
    ],
    intermediate: [
      {
        front: "எப்படி இருக்கிறீர்கள்?",
        back: "How are you?",
        pronunciation: "Eppadi Irukeenga?",
        options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
      },
      {
        front: "உங்கள் பெயர் என்ன?",
        back: "What is your name?",
        pronunciation: "Ungal Peyar Enna?",
        options: ["How are you?", "What is your name?", "Where are you from?", "Nice to meet you"],
      },
    ],
    advanced: [
      {
        front: "நான் தமிழ் கற்றுக்கொண்டிருக்கிறேன்",
        back: "I am learning Tamil",
        pronunciation: "Naan Tamil Katrukondirukkiren",
        options: ["I am learning Tamil", "I like Tamil food", "I live in Tamil Nadu", "I speak Tamil"],
      },
    ],
  },
  "Kerala": {
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
    ],
    intermediate: [
      {
        front: "സുഖമാണോ?",
        back: "How are you?",
        pronunciation: "Sukhamano?",
        options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "ഞാൻ മലയാളം പഠിക്കുകയാണ്",
        back: "I am learning Malayalam",
        pronunciation: "Njan Malayalam padikkukayanu",
        options: ["I am learning Malayalam", "I like Kerala food", "I live in Kerala", "I speak Malayalam"],
      },
    ],
  },
  "Karnataka": {
    beginner: [
      {
        front: "ನಮಸ್ಕಾರ",
        back: "Hello",
        pronunciation: "Namaskara",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "ಹೇಗಿದ್ದೀರಾ?",
        back: "How are you?",
        pronunciation: "Hegiddira?",
        options: ["How are you?", "What is your name?", "Where are you going?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "ನಾನು ಕನ್ನಡ ಕಲಿಯುತ್ತಿದ್ದೇನೆ",
        back: "I am learning Kannada",
        pronunciation: "Naanu Kannada kaliyuttiddene",
        options: ["I am learning Kannada", "I like Kannada food", "I live in Karnataka", "I speak Kannada"],
      },
    ],
  },
  "Maharashtra": {
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
    ],
    advanced: [
      {
        front: "मी मराठी शिकत आहे",
        back: "I am learning Marathi",
        pronunciation: "Mi Marathi shikat aahe",
        options: ["I am learning Marathi", "I like Marathi food", "I live in Maharashtra", "I speak Marathi"],
      },
    ],
  },
  "Punjab": {
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
    ],
    advanced: [
      {
        front: "ਮੈਂ ਪੰਜਾਬੀ ਸਿੱਖ ਰਿਹਾ ਹਾਂ",
        back: "I am learning Punjabi",
        pronunciation: "Main Punjabi sikh reha haan",
        options: ["I am learning Punjabi", "I like Punjabi food", "I live in Punjab", "I speak Punjabi"],
      },
    ],
  },
  "Bengal": {
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
    ],
  },
}