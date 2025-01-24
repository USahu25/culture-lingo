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
      {
        front: "மாலை வணக்கம்",
        back: "Good Evening",
        pronunciation: "Maalai Vanakkam",
        options: ["Good Morning", "Good Evening", "Good Night", "Hello"],
      },
      {
        front: "இரவு வணக்கம்",
        back: "Good Night",
        pronunciation: "Iravu Vanakkam",
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
      {
        front: "எங்கே போகிறீர்கள்?",
        back: "Where are you going?",
        pronunciation: "Enge Poreenga?",
        options: ["How are you?", "What is your name?", "Where are you going?", "Nice to meet you"],
      },
      {
        front: "நீங்கள் எங்கிருந்து வருகிறீர்கள்?",
        back: "Where are you from?",
        pronunciation: "Neengal Engirundhu Varugiringal?",
        options: ["How are you?", "Where are you from?", "What is your name?", "Nice to meet you"],
      },
      {
        front: "உங்களை சந்தித்ததில் மகிழ்ச்சி",
        back: "Nice to meet you",
        pronunciation: "Ungalai Santhithathil Magilchi",
        options: ["How are you?", "Where are you from?", "What is your name?", "Nice to meet you"],
      },
    ],
    advanced: [
      {
        front: "நான் தமிழ் கற்றுக்கொண்டிருக்கிறேன்",
        back: "I am learning Tamil",
        pronunciation: "Naan Tamil Katrukondirukkiren",
        options: ["I am learning Tamil", "I like Tamil food", "I live in Tamil Nadu", "I speak Tamil"],
      },
      {
        front: "எனக்கு தமிழ் நாட்டு உணவு பிடிக்கும்",
        back: "I like Tamil Nadu food",
        pronunciation: "Enakku Tamil Naattu Unavu Pidikkum",
        options: ["I am learning Tamil", "I like Tamil food", "I live in Tamil Nadu", "I speak Tamil"],
      },
      {
        front: "நான் தமிழ்நாட்டில் வசிக்கிறேன்",
        back: "I live in Tamil Nadu",
        pronunciation: "Naan Tamilnattil Vasikkiren",
        options: ["I am learning Tamil", "I like Tamil food", "I live in Tamil Nadu", "I speak Tamil"],
      },
      {
        front: "எனக்கு தமிழ் பேச தெரியும்",
        back: "I can speak Tamil",
        pronunciation: "Enakku Tamil Pesa Theriyum",
        options: ["I am learning Tamil", "I like Tamil food", "I live in Tamil Nadu", "I speak Tamil"],
      },
      {
        front: "நான் இந்தியாவிலிருந்து வருகிறேன்",
        back: "I am from India",
        pronunciation: "Naan Indiyavilirundhu Varugiren",
        options: ["I am from India", "I am going to India", "I like India", "I live in India"],
      },
      {
        front: "உங்களுக்கு தமிழ் தெரியுமா?",
        back: "Do you know Tamil?",
        pronunciation: "Ungalukku Tamil Theriyuma?",
        options: ["Do you know Tamil?", "Do you like Tamil?", "Are you Tamil?", "Can you speak Tamil?"],
      },
      {
        front: "எனக்கு தமிழ் சமையல் மிகவும் பிடிக்கும்",
        back: "I really like Tamil cuisine",
        pronunciation: "Enakku Tamil Samayal Migavum Pidikkum",
        options: ["I really like Tamil cuisine", "I can cook Tamil food", "Tamil food is spicy", "I want Tamil food"],
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
  },
  "Karnataka": {
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
  },
}
