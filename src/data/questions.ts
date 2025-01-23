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
  Japan: {
    beginner: [
      {
        front: "こんにちは",
        back: "Hello",
        pronunciation: "Konnichiwa",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "さようなら",
        back: "Goodbye",
        pronunciation: "Sayounara",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "ありがとう",
        back: "Thank you",
        pronunciation: "Arigatou",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "お願いします",
        back: "Please",
        pronunciation: "Onegaishimasu",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "お元気ですか？",
        back: "How are you?",
        pronunciation: "Ogenki desu ka?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      {
        front: "何時ですか？",
        back: "What time is it?",
        pronunciation: "Nanji desu ka?",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      {
        front: "お名前は？",
        back: "What is your name?",
        pronunciation: "Onamae wa?",
        options: ["What is your name?", "How old are you?", "Where are you from?", "Nice to meet you"],
      },
      {
        front: "どこから来ましたか？",
        back: "Where are you from?",
        pronunciation: "Doko kara kimashita ka?",
        options: ["What is your name?", "How old are you?", "Where are you from?", "Nice to meet you"],
      },
    ],
    advanced: [
      {
        front: "日本語を勉強しています",
        back: "I am studying Japanese",
        pronunciation: "Nihongo wo benkyou shiteimasu",
        options: ["I am studying Japanese", "I like Japanese food", "I live in Japan", "I speak Japanese"],
      },
      {
        front: "日本に住んでいます",
        back: "I live in Japan",
        pronunciation: "Nihon ni sundeimasu",
        options: ["I am studying Japanese", "I like Japanese food", "I live in Japan", "I speak Japanese"],
      },
      {
        front: "日本料理が好きです",
        back: "I like Japanese food",
        pronunciation: "Nihon ryouri ga suki desu",
        options: ["I am studying Japanese", "I like Japanese food", "I live in Japan", "I speak Japanese"],
      },
      {
        front: "来年日本に行きたいです",
        back: "I want to go to Japan next year",
        pronunciation: "Rainen nihon ni ikitai desu",
        options: ["I want to go to Japan next year", "I went to Japan last year", "I am going to Japan tomorrow", "I live in Japan"],
      },
    ],
  },
  France: {
    beginner: [
      {
        front: "Bonjour",
        back: "Hello",
        pronunciation: "bohn-ZHOOR",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "Au revoir",
        back: "Goodbye",
        pronunciation: "oh ruh-VWAR",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "Merci",
        back: "Thank you",
        pronunciation: "mair-SEE",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        front: "S'il vous plaît",
        back: "Please",
        pronunciation: "seel voo PLEH",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
    ],
    intermediate: [
      {
        front: "Comment allez-vous?",
        back: "How are you?",
        pronunciation: "koh-mahn tah-lay VOO",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      {
        front: "Quelle heure est-il?",
        back: "What time is it?",
        pronunciation: "kel er eh-TEEL",
        options: ["How are you?", "Where are you?", "What time is it?", "Good morning"],
      },
      {
        front: "Comment vous appelez-vous?",
        back: "What is your name?",
        pronunciation: "koh-mahn voo zah-play VOO",
        options: ["What is your name?", "How old are you?", "Where are you from?", "Nice to meet you"],
      },
      {
        front: "D'où venez-vous?",
        back: "Where are you from?",
        pronunciation: "doo veh-nay VOO",
        options: ["What is your name?", "How old are you?", "Where are you from?", "Nice to meet you"],
      },
    ],
    advanced: [
      {
        front: "J'étudie le français",
        back: "I am studying French",
        pronunciation: "zhay-too-dee luh frahn-SEH",
        options: ["I am studying French", "I like French food", "I live in France", "I speak French"],
      },
      {
        front: "J'habite en France",
        back: "I live in France",
        pronunciation: "zhah-beet ahn FRAHNSS",
        options: ["I am studying French", "I like French food", "I live in France", "I speak French"],
      },
      {
        front: "J'aime la cuisine française",
        back: "I like French food",
        pronunciation: "zhem lah kwee-ZEEN frahn-SEZ",
        options: ["I am studying French", "I like French food", "I live in France", "I speak French"],
      },
      {
        front: "Je veux aller en France l'année prochaine",
        back: "I want to go to France next year",
        pronunciation: "zhuh veh ah-LAY ahn FRAHNSS lah-NEH pro-SHEN",
        options: ["I want to go to France next year", "I went to France last year", "I am going to France tomorrow", "I live in France"],
      },
    ],
  },
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
