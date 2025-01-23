import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Checkbox } from "@/components/ui/checkbox"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface FlashCardProps {
  front: string
  back: string
  pronunciation?: string
  onCorrect: () => void
  onIncorrect: (selected: string, correct: string) => void
  onNext: () => void
  onPrevious: () => void
  hasNext: boolean
  hasPrevious: boolean
}

const FlashCard = ({ 
  front, 
  back, 
  pronunciation, 
  onCorrect, 
  onIncorrect,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious
}: FlashCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [showPronunciation, setShowPronunciation] = useState(true)

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
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="pronunciation"
          checked={showPronunciation}
          onCheckedChange={(checked) => setShowPronunciation(checked as boolean)}
        />
        <label
          htmlFor="pronunciation"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Show pronunciation guide
        </label>
      </div>
      
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
                className="w-full h-full p-6 flex flex-col items-center justify-center text-2xl font-semibold bg-card hover:bg-accent/10 transition-colors"
                onClick={handleFlip}
              >
                <span>{front}</span>
                {showPronunciation && pronunciation && (
                  <span className="text-sm text-muted-foreground mt-2">
                    {pronunciation}
                  </span>
                )}
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

      <div className="flex justify-between items-center mt-4">
        <Button
          variant="outline"
          onClick={onPrevious}
          disabled={!hasPrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </Button>
        <Button
          variant="outline"
          onClick={onNext}
          disabled={!hasNext}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}

export default FlashCard