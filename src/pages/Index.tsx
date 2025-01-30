import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import RegionSelector from "@/components/RegionSelector";
import DifficultySelector from "@/components/DifficultySelector";
import GameInterface from "@/components/GameInterface";
import { questionsData } from "@/data/questions";
import { useGameLogic } from "@/hooks/useGameLogic";

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [gameMode, setGameMode] = useState<"flashcard" | "quiz" | null>(null);

  const questions = selectedRegion && difficulty ? questionsData[selectedRegion][difficulty as keyof typeof questionsData[string]] : [];
  const gameLogic = useGameLogic(questions);

  const handleRegionSelect = (region: string) => {
    setSelectedRegion(region);
    setGameMode("flashcard");
  };

  const handleDifficultySelect = (level: string) => {
    setDifficulty(level.toLowerCase());
  };

  const resetGame = () => {
    setSelectedRegion(null);
    setDifficulty(null);
    setGameMode(null);
  };

  const toggleGameMode = () => {
    setGameMode((prev) => (prev === "flashcard" ? "quiz" : "flashcard"));
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <AnimatePresence mode="wait">
        {!selectedRegion ? (
          <RegionSelector onRegionSelect={handleRegionSelect} />
        ) : !difficulty ? (
          <DifficultySelector onSelect={handleDifficultySelect} />
        ) : (
          <GameInterface
            selectedRegion={selectedRegion}
            difficulty={difficulty}
            gameMode={gameMode!}
            score={gameLogic.score}
            currentQuestion={gameLogic.currentQuestion}
            onReset={resetGame}
            onToggleGameMode={toggleGameMode}
            onCorrect={gameLogic.handleCorrectAnswer}
            onIncorrect={gameLogic.handleIncorrectAnswer}
            onNext={gameLogic.handleNext}
            onPrevious={gameLogic.handlePrevious}
            hasNext={gameLogic.hasNext}
            hasPrevious={gameLogic.hasPrevious}
            nextQuestion={gameLogic.nextQuestion}
            previousQuestion={gameLogic.previousQuestion}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;