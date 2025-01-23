import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

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
    <div className="perspective-1000">
      <motion.div
        className={`relative w-full h-64 cursor-pointer transform-style-3d transition-transform duration-500 ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        onClick={handleFlip}
      >
        <Card className="absolute w-full h-full p-6 backface-hidden flex items-center justify-center text-2xl font-semibold">
          {front}
        </Card>
        <Card className="absolute w-full h-full p-6 backface-hidden rotate-y-180 flex flex-col items-center justify-center">
          <div className="text-2xl font-semibold mb-4">{back}</div>
          <div className="flex gap-2">
            <Button onClick={() => handleResponse(true)} variant="default">
              I knew it!
            </Button>
            <Button onClick={() => handleResponse(false)} variant="outline">
              Still learning
            </Button>
          </div>
        </Card>
      </motion.div>
    </div>
  )
}

export default FlashCard