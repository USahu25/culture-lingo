import { Button } from "@/components/ui/button";
import FlashCard from "@/components/FlashCard";
import MultipleChoice from "@/components/MultipleChoice";
import ChatBot from "@/components/ChatBot";
import { Question } from "@/data/types";

interface GameInterfaceProps {
  selectedRegion: string;
  difficulty: string;
  gameMode: "flashcard" | "quiz";
  score: number;
  currentQuestion: Question;
  onReset: () => void;
  onToggleGameMode: () => void;
  onCorrect: () => void;
  onIncorrect: (selected: string, correct: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  hasNext: boolean;
  hasPrevious: boolean;
  nextQuestion?: string;
  previousQuestion?: string;
}

const GameInterface = ({
  selectedRegion,
  difficulty,
  gameMode,
  score,
  currentQuestion,
  onReset,
  onToggleGameMode,
  onCorrect,
  onIncorrect,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
  nextQuestion,
  previousQuestion,
}: GameInterfaceProps) => {
  return (
    <div className="container max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={onReset}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Change Region
        </button>
        <div className="text-xl font-semibold">Score: {score}</div>
        <Button onClick={onToggleGameMode}>
          Switch to {gameMode === "flashcard" ? "Quiz" : "Flashcard"}
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">
            {selectedRegion} - {difficulty}
          </h2>
          {currentQuestion && gameMode === "flashcard" ? (
            <FlashCard
              front={currentQuestion.front}
              back={currentQuestion.back}
              pronunciation={currentQuestion.pronunciation}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              onNext={onNext}
              onPrevious={onPrevious}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              nextQuestion={nextQuestion}
              previousQuestion={previousQuestion}
            />
          ) : currentQuestion ? (
            <MultipleChoice
              question={currentQuestion.front}
              options={currentQuestion.options!}
              correctAnswer={currentQuestion.back}
              onCorrect={onCorrect}
              onIncorrect={onIncorrect}
              onNext={onNext}
              onPrevious={onPrevious}
              hasNext={hasNext}
              hasPrevious={hasPrevious}
              nextQuestion={nextQuestion}
              previousQuestion={previousQuestion}
            />
          ) : null}
        </div>
        <ChatBot region={selectedRegion} />
      </div>
    </div>
  );
};

export default GameInterface;