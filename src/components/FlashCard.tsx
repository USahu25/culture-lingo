import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
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
  nextQuestion?: string
  previousQuestion?: string
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
  hasPrevious,
  nextQuestion,
  previousQuestion
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
      
      <div className="relative w-[300px] h-[400px] [perspective:1000px]">
        <div 
          className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
            isFlipped ? '[transform:rotateY(180deg)]' : ''
          }`}
        >
          {/* Front of card */}
          <div 
            className="absolute w-full h-full [backface-visibility:hidden]"
            onClick={handleFlip}
          >
            <Card 
              className="w-full h-full p-6 flex flex-col items-center justify-center text-2xl font-semibold bg-card hover:bg-accent/10 transition-colors cursor-pointer"
            >
              <div className="text-center break-words max-w-[250px]">{front}</div>
              {showPronunciation && pronunciation && (
                <span className="text-sm text-muted-foreground mt-2 text-center break-words max-w-[250px]">
                  {pronunciation}
                </span>
              )}
            </Card>
          </div>

          {/* Back of card */}
          <div 
            className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
          >
            <Card className="w-full h-full p-6 flex flex-col items-center justify-center">
              <div className="text-2xl font-semibold mb-8 text-center break-words max-w-[250px]">{back}</div>
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
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div className="flex flex-col items-start">
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={!hasPrevious}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Previous
          </Button>
          {hasPrevious && previousQuestion && (
            <span className="text-sm text-muted-foreground mt-1 ml-2">
              {previousQuestion}
            </span>
          )}
        </div>
        <div className="flex flex-col items-end">
          <Button
            variant="outline"
            onClick={onNext}
            disabled={!hasNext}
            className="flex items-center gap-2"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </Button>
          {hasNext && nextQuestion && (
            <span className="text-sm text-muted-foreground mt-1 mr-2">
              {nextQuestion}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default FlashCard