interface Question {
  front: string
  back: string
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
  Japan: {
    beginner: [
      {
        front: "こんにちは (Konnichiwa)",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      // Add more beginner questions
    ],
    intermediate: [
      {
        front: "お元気ですか？ (Ogenki desu ka?)",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      // Add more intermediate questions
    ],
    advanced: [
      {
        front: "日本語を勉強しています (Nihongo wo benkyou shiteimasu)",
        back: "I am studying Japanese",
        options: [
          "I am studying Japanese",
          "I like Japanese food",
          "I live in Japan",
          "I speak Japanese",
        ],
      },
      // Add more advanced questions
    ],
  },
  France: {
    beginner: [
      {
        front: "Bonjour",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      // Add more beginner questions
    ],
    intermediate: [
      {
        front: "Comment allez-vous?",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      // Add more intermediate questions
    ],
    advanced: [
      {
        front: "Je suis en train d'apprendre le français",
        back: "I am learning French",
        options: [
          "I am learning French",
          "I like French food",
          "I live in France",
          "I speak French",
        ],
      },
      // Add more advanced questions
    ],
  },
  // Add similar structure for other regions
  Mexico: {
    beginner: [
      {
        front: "Hola",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "¿Cómo estás?",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "Estoy aprendiendo español",
        back: "I am learning Spanish",
        options: [
          "I am learning Spanish",
          "I like Spanish food",
          "I live in Spain",
          "I speak Spanish",
        ],
      },
    ],
  },
  Italy: {
    beginner: [
      {
        front: "Ciao",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "Come stai?",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "Sto imparando l'italiano",
        back: "I am learning Italian",
        options: [
          "I am learning Italian",
          "I like Italian food",
          "I live in Italy",
          "I speak Italian",
        ],
      },
    ],
  },
  Germany: {
    beginner: [
      {
        front: "Hallo",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "Wie geht es dir?",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "Ich lerne Deutsch",
        back: "I am learning German",
        options: [
          "I am learning German",
          "I like German food",
          "I live in Germany",
          "I speak German",
        ],
      },
    ],
  },
  Brazil: {
    beginner: [
      {
        front: "Olá",
        back: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "Como você está?",
        back: "How are you?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
    ],
    advanced: [
      {
        front: "Estou aprendendo português",
        back: "I am learning Portuguese",
        options: [
          "I am learning Portuguese",
          "I like Brazilian food",
          "I live in Brazil",
          "I speak Portuguese",
        ],
      },
    ],
  },
}