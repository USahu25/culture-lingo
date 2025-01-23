interface Question {
  front: string
  back: string
  options?: string[]
}

interface RegionQuestions {
  beginner: Question[]
  intermediate: Question[]
  advanced: Question[]
}

type QuestionsData = {
  [key: string]: RegionQuestions
}

export const questionsData: QuestionsData = {
  Japan: {
    beginner: [
      { front: "こんにちは", back: "Hello", options: ["Hello", "Goodbye", "Thank you", "Good night"] },
      { front: "ありがとう", back: "Thank you", options: ["Hello", "Please", "Thank you", "Yes"] },
      { front: "はい", back: "Yes", options: ["No", "Maybe", "Yes", "Please"] },
    ],
    intermediate: [
      { front: "お元気ですか", back: "How are you?", options: ["Good morning", "How are you?", "Good night", "Goodbye"] },
      { front: "お名前は何ですか", back: "What is your name?", options: ["How old are you?", "Where are you from?", "What is your name?", "Nice to meet you"] },
      { front: "どこから来ましたか", back: "Where are you from?", options: ["How are you?", "Where are you from?", "What time is it?", "Good evening"] },
    ],
    advanced: [
      { front: "申し訳ございません", back: "I'm very sorry", options: ["Excuse me", "I'm very sorry", "Thank you very much", "Nice to meet you"] },
      { front: "よろしくお願いします", back: "Please take care of me", options: ["Nice to meet you", "Please take care of me", "Thank you very much", "Goodbye"] },
      { front: "失礼いたします", back: "Excuse me (formal)", options: ["I'm sorry", "Thank you", "Excuse me (formal)", "Good evening"] },
    ],
  },
  France: {
    beginner: [
      { front: "Bonjour", back: "Hello", options: ["Hello", "Goodbye", "Thank you", "Please"] },
      { front: "Merci", back: "Thank you", options: ["Please", "Hello", "Thank you", "Goodbye"] },
      { front: "Au revoir", back: "Goodbye", options: ["Hello", "Thank you", "Please", "Goodbye"] },
    ],
    intermediate: [
      { front: "Comment allez-vous?", back: "How are you?", options: ["What's your name?", "How are you?", "Where are you from?", "Good morning"] },
      { front: "Je m'appelle", back: "My name is", options: ["How are you?", "My name is", "Where are you from?", "Nice to meet you"] },
      { front: "S'il vous plaît", back: "Please", options: ["Thank you", "You're welcome", "Please", "Goodbye"] },
    ],
    advanced: [
      { front: "Je ne comprends pas", back: "I don't understand", options: ["I understand", "I don't understand", "Can you repeat?", "I'm sorry"] },
      { front: "Pouvez-vous répéter?", back: "Can you repeat?", options: ["I understand", "I don't understand", "Can you repeat?", "Where is?"] },
      { front: "Enchanté(e)", back: "Nice to meet you", options: ["Goodbye", "Please", "Thank you", "Nice to meet you"] },
    ],
  },
  // ... Add similar structure for other regions
}