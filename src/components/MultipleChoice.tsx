import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface MultipleChoiceProps {
  question: string
  options: string[]
  correctAnswer: string
  onCorrect: () => void
  onIncorrect: (selected: string, correct: string) => void
}

const MultipleChoice = ({ question, options, correctAnswer, onCorrect, onIncorrect }: MultipleChoiceProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showFeedback, setShowFeedback] = useState(false)

  const handleAnswer = (option: string) => {
    setSelectedAnswer(option)
    setShowFeedback(true)
    
    setTimeout(() => {
      if (option === correctAnswer) {
        onCorrect()
      } else {
        onIncorrect(option, correctAnswer)
      }
      setSelectedAnswer(null)
      setShowFeedback(false)
    }, 1500)
  }

  return (
    <div className="space-y-4">
      <div className="p-6 bg-card rounded-lg shadow-sm">
        <h3 className="text-xl font-medium mb-4">{question}</h3>
        <div className="grid grid-cols-1 gap-3">
          {options.map((option) => (
            <Button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showFeedback}
              variant={
                showFeedback
                  ? option === correctAnswer
                    ? "default"
                    : option === selectedAnswer
                    ? "destructive"
                    : "outline"
                  : "outline"
              }
              className="w-full justify-start text-left h-auto py-3 px-4"
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showFeedback && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`p-4 rounded-lg ${
              selectedAnswer === correctAnswer ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
            }`}
          >
            {selectedAnswer === correctAnswer ? "Correct!" : `Incorrect. The correct answer is: ${correctAnswer}`}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MultipleChoice