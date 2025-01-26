import { Question } from "../types";

export const tamilNaduQuestions: {
  beginner: Question[];
  intermediate: Question[];
  advanced: Question[];
} = {
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
    {
      front: "கோயில்",
      back: "Temple",
      pronunciation: "Kovil",
      options: ["Temple", "Market", "School", "House"],
    },
    {
      front: "பொங்கல்",
      back: "Pongal (Harvest Festival)",
      pronunciation: "Pongal",
      options: ["Pongal (Harvest Festival)", "New Year", "Wedding", "Birthday"],
    },
    {
      front: "கலாச்சாரம்",
      back: "Culture",
      pronunciation: "Kalaacharam",
      options: ["Culture", "Language", "Food", "Dance"],
    },
    {
      front: "பரதநாட்டியம்",
      back: "Bharatanatyam (Classical Dance)",
      pronunciation: "Bharatanatyam",
      options: ["Bharatanatyam (Classical Dance)", "Folk Music", "Festival", "Art"],
    },
    {
      front: "வேஷ்டி",
      back: "Veshti (Traditional Garment)",
      pronunciation: "Veshti",
      options: ["Veshti (Traditional Garment)", "Saree", "Shirt", "Scarf"],
    }
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
    {
      front: "ನನಗೆ ಸಹಾಯ ಬೇಕು",
      back: "I need help",
      pronunciation: "Nanage sahaaya beku",
      options: ["I need help", "I want food", "I am lost", "Call the police"],
    },
    {
      front: "ನನಗೆ ದಾರಿ ಗೊತ್ತಿಲ್ಲ",
      back: "I don't know the way",
      pronunciation: "Nanage daari gottilla",
      options: ["I don't know the way", "I am lost", "Where is this?", "Help me"],
    },
    {
      front: "ನಿಮಗೆ ಇಂಗ್ಲಿಷ್ ಗೊತ್ತಾ?",
      back: "Do you know English?",
      pronunciation: "Nimage English gotta?",
      options: ["Do you know English?", "Can you help me?", "What language do you speak?", "Do you understand me?"],
    },
    {
      front: "மரபு கலை",
      back: "Traditional Art",
      pronunciation: "Marabu Kalai",
      options: ["Traditional Art", "Modern Art", "Sculpture", "Painting"],
    },
    {
      front: "கர்நாடக இசை",
      back: "Carnatic Music",
      pronunciation: "Karnataga Isai",
      options: ["Carnatic Music", "Folk Music", "Film Music", "Classical Dance"],
    },
    {
      front: "திருக்குறள்",
      back: "Thirukkural (Ancient Tamil Literature)",
      pronunciation: "Thirukkural",
      options: ["Thirukkural (Ancient Tamil Literature)", "Folk Tale", "Poetry", "Story"],
    },
    {
      front: "கோலம்",
      back: "Kolam (Floor Art)",
      pronunciation: "Kolam",
      options: ["Kolam (Floor Art)", "Wall Painting", "Rangoli", "Decoration"],
    },
    {
      front: "சாதம்",
      back: "Rice (Staple Food)",
      pronunciation: "Saatham",
      options: ["Rice (Staple Food)", "Bread", "Curry", "Snack"],
    }
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
    {
      front: "மெரினா கடற்கரை உலகின் இரண்டாவது மிக நீளமான கடற்கரை",
      back: "Marina Beach is the world's second-longest beach",
      pronunciation: "Marina kadarkkarai ulagin irandavathu miga neelamana kadarkkarai",
      options: [
        "Marina Beach is the world's second-longest beach",
        "Marina Beach is the oldest beach in India",
        "Marina Beach is the most visited beach in Asia",
        "Marina Beach is famous for its lighthouse"
      ],
    },
    {
      front: "தமிழ் மொழி உலகின் மிகப் பழமையான மொழிகளில் ஒன்று",
      back: "Tamil is one of the oldest languages in the world",
      pronunciation: "Tamil mozhi ulagin miga pazhamayana mozhigalil ondru",
      options: [
        "Tamil is one of the oldest languages in the world",
        "Tamil is spoken only in Tamil Nadu",
        "Tamil was created in the 19th century",
        "Tamil has no ancient literature"
      ],
    },
    {
      front: "மதுரை மீனாட்சி அம்மன் கோயில் பன்னிரண்டு கோபுரங்களைக் கொண்டுள்ளது",
      back: "Madurai Meenakshi Temple has twelve towers",
      pronunciation: "Madurai Meenakshi Amman Kovil pannirandu gopurangalai kondullathu",
      options: [
        "Madurai Meenakshi Temple has twelve towers",
        "Madurai Meenakshi Temple is the oldest temple",
        "Madurai Meenakshi Temple is made of marble",
        "Madurai Meenakshi Temple was built in 1900"
      ],
    },
    {
      front: "கும்பகோணம் காபி",
      back: "Kumbakonam Coffee (Famous Filter Coffee)",
      pronunciation: "Kumbakonam Kaapi",
      options: [
        "Kumbakonam Coffee (Famous Filter Coffee)",
        "Kumbakonam Tea",
        "Kumbakonam Milk",
        "Kumbakonam Juice"
      ],
    },
    {
      front: "கஞ்சிபுரம் பட்டு புடவை",
      back: "Kanchipuram Silk Saree",
      pronunciation: "Kanchipuram Pattu Pudavai",
      options: [
        "Kanchipuram Silk Saree",
        "Kanchipuram Cotton Dress",
        "Kanchipuram Modern Wear",
        "Kanchipuram Traditional Jewelry"
      ],
    }
  ],
};
