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
};
