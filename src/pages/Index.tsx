import { useState, useEffect } from "react"
import RegionCard from "@/components/RegionCard"
import DifficultySelector from "@/components/DifficultySelector"
import ChatBot from "@/components/ChatBot"
import FlashCard from "@/components/FlashCard"
import MultipleChoice from "@/components/MultipleChoice"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { questionsData } from "@/data/questions"
import { useToast } from "@/components/ui/use-toast"

const regions = [
  {
    name: "Tamil Nadu",
    image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220",
    description: "Learn Tamil and explore the rich Dravidian culture",
  },
  {
    name: "Kerala",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    description: "Master Malayalam and discover God's own country",
  },
  {
    name: "Karnataka",
    image: "https://images.unsplash.com/photo-1600100598297-89f0ae6c3b99",
    description: "Study Kannada and experience the Silicon Valley of India",
  },
  {
    name: "Maharashtra",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f",
    description: "Learn Marathi and explore the land of warriors",
  },
  {
    name: "Punjab",
    image: "https://images.unsplash.com/photo-1623051425306-70cfe23c3639",
    description: "Master Punjabi and discover the heart of India's culture",
  },
  {
    name: "Bengal",
    image: "https://images.unsplash.com/photo-1558431382-27e303142255",
    description: "Study Bengali and explore the cultural capital",
  },
]

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null)
  const [difficulty, setDifficulty] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [gameMode, setGameMode] = useState<"flashcard" | "quiz" | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const { toast } = useToast()

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region)
    setGameMode("flashcard")
  }

  const handleDifficultySelect = (level: string) => {
    setDifficulty(level.toLowerCase())
  }

  const resetGame = () => {
    setSelectedRegion(null)
    setDifficulty(null)
    setScore(0)
    setGameMode(null)
    setCurrentQuestionIndex(0)
  }

  const handleCorrectAnswer = () => {
    setScore((prev) => prev + 1)
    toast({
      title: "Correct!",
      description: "Great job! Keep going!",
      duration: 2000,
    })
  }

  const handleIncorrectAnswer = (selectedAnswer: string, correctAnswer: string) => {
    toast({
      title: "Incorrect",
      description: `The correct answer was: ${correctAnswer}`,
      duration: 3000,
      variant: "destructive",
    })
  }

  const handleNext = () => {
    if (selectedRegion && difficulty) {
      const questions = questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]]
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const toggleGameMode = () => {
    setGameMode((prev) => (prev === "flashcard" ? "quiz" : "flashcard"))
    setCurrentQuestionIndex(0)
  }

  const getCurrentQuestion = () => {
    if (!selectedRegion || !difficulty) return null
    const questions = questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]]
    return questions[currentQuestionIndex]
  }

  const getNextQuestion = () => {
    if (!selectedRegion || !difficulty) return null
    const questions = questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]]
    return questions[currentQuestionIndex + 1]?.front
  }

  const getPreviousQuestion = () => {
    if (!selectedRegion || !difficulty) return null
    const questions = questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]]
    return questions[currentQuestionIndex - 1]?.front
  }

  const hasNextQuestion = () => {
    if (!selectedRegion || !difficulty) return false
    const questions = questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]]
    return currentQuestionIndex < questions.length - 1
  }

  const hasPreviousQuestion = () => {
    return currentQuestionIndex > 0
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <AnimatePresence mode="wait">
        {!selectedRegion ? (
          <motion.div
            key="region-selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-center mb-8">Choose Your Learning Region</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region) => (
                <RegionCard key={region.name} {...region} onClick={() => handleRegionSelect(region.name)} />
              ))}
            </div>
          </motion.div>
        ) : !difficulty ? (
          <motion.div
            key="difficulty-selection"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container max-w-md mx-auto"
          >
            <DifficultySelector onSelect={handleDifficultySelect} />
          </motion.div>
        ) : (
          <motion.div
            key="game-interface"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="container max-w-4xl mx-auto"
          >
            <div className="flex justify-between items-center mb-8">
              <button
                onClick={resetGame}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                ← Change Region
              </button>
              <div className="text-xl font-semibold">Score: {score}</div>
              <Button onClick={toggleGameMode}>
                Switch to {gameMode === "flashcard" ? "Quiz" : "Flashcard"}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">
                  {selectedRegion} - {difficulty}
                </h2>
                {getCurrentQuestion() && gameMode === "flashcard" ? (
                  <FlashCard
                    front={getCurrentQuestion()!.front}
                    back={getCurrentQuestion()!.back}
                    pronunciation={getCurrentQuestion()!.pronunciation}
                    onCorrect={handleCorrectAnswer}
                    onIncorrect={handleIncorrectAnswer}
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    hasNext={hasNextQuestion()}
                    hasPrevious={hasPreviousQuestion()}
                    nextQuestion={getNextQuestion()}
                    previousQuestion={getPreviousQuestion()}
                  />
                ) : getCurrentQuestion() ? (
                  <MultipleChoice
                    question={getCurrentQuestion()!.front}
                    options={getCurrentQuestion()!.options!}
                    correctAnswer={getCurrentQuestion()!.back}
                    onCorrect={handleCorrectAnswer}
                    onIncorrect={handleIncorrectAnswer}
                  />
                ) : null}
              </div>
              <ChatBot region={selectedRegion} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Index