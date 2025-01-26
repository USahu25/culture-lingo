import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface MultipleChoiceProps {
  question: string
  options: string[]
  correctAnswer: string
  onCorrect: () => void
  onIncorrect: (selected: string, correct: string) => void
  onNext?: () => void
  onPrevious?: () => void
  hasNext?: boolean
  hasPrevious?: boolean
  nextQuestion?: string
  previousQuestion?: string
}

const MultipleChoice = ({
  question,
  options,
  correctAnswer,
  onCorrect,
  onIncorrect,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  nextQuestion,
  previousQuestion
}: MultipleChoiceProps) => {
  const handleOptionClick = (option: string) => {
    if (option === correctAnswer) {
      onCorrect()
    } else {
      onIncorrect(option, correctAnswer)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-2xl font-semibold text-center mb-8">{question}</div>
      <div className="space-y-4">
        {options.map((option) => (
          <Button
            key={option}
            variant="outline"
            className="w-full text-left justify-start h-auto py-4 px-6"
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </Button>
        ))}
      </div>

      <div className="flex justify-between items-center mt-8">
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

export default MultipleChoice