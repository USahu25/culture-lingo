import { Button } from "@/components/ui/button"

interface DifficultySelectorProps {
  onSelect: (difficulty: string) => void
}

const DifficultySelector = ({ onSelect }: DifficultySelectorProps) => {
  const difficulties = ["Beginner", "Intermediate", "Advanced"]

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-center mb-6">Select Difficulty Level</h2>
      <div className="flex flex-col gap-3">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty}
            onClick={() => onSelect(difficulty)}
            variant="outline"
            className="w-full py-6 text-lg"
          >
            {difficulty}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default DifficultySelector