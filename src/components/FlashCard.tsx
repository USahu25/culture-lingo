import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface FlashCardProps {
  front: string
  back: string
  onCorrect: () => void
  onIncorrect: (selected: string, correct: string) => void
}

const FlashCard = ({ front, back, onCorrect, onIncorrect }: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  const handleResponse = (correct: boolean) => {
    if (correct) {
      onCorrect()
    } else {
      onIncorrect("", back)
    }
    setIsFlipped(false)
  }

  return (
    <div className="relative w-[300px] h-[400px] cursor-pointer perspective-1000">
      <AnimatePresence initial={false} mode="wait">
        {!isFlipped ? (
          <motion.div
            key="front"
            className="absolute w-full h-full"
            initial={{ rotateY: 180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: -180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <Card 
              className="w-full h-full p-6 flex items-center justify-center text-2xl font-semibold bg-card hover:bg-accent/10 transition-colors"
              onClick={handleFlip}
            >
              {front}
            </Card>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            className="absolute w-full h-full"
            initial={{ rotateY: -180 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 180 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
          >
            <Card className="w-full h-full p-6 flex flex-col items-center justify-center">
              <div className="text-2xl font-semibold mb-8">{back}</div>
              <div className="flex gap-4">
                <Button 
                  onClick={() => handleResponse(true)}
                  className="bg-green-500 hover:bg-green-600"
                >
                  I knew it!
                </Button>
                <Button 
                  onClick={() => handleResponse(false)}
                  variant="outline"
                >
                  Still learning
                </Button>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FlashCard