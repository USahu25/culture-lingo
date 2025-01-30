import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { Question } from "@/data/types";

export const useGameLogic = (questions: Question[]) => {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const { toast } = useToast();

  const handleCorrectAnswer = () => {
    setScore((prev) => prev + 1);
    toast({
      title: "Correct!",
      description: "Great job! Keep going!",
      duration: 2000,
    });
  };

  const handleIncorrectAnswer = (selectedAnswer: string, correctAnswer: string) => {
    toast({
      title: "Incorrect",
      description: `The correct answer was: ${correctAnswer}`,
      duration: 3000,
      variant: "destructive",
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const getCurrentQuestion = () => questions[currentQuestionIndex];
  const getNextQuestion = () => questions[currentQuestionIndex + 1]?.front;
  const getPreviousQuestion = () => questions[currentQuestionIndex - 1]?.front;
  const hasNextQuestion = () => currentQuestionIndex < questions.length - 1;
  const hasPreviousQuestion = () => currentQuestionIndex > 0;

  return {
    score,
    currentQuestion: getCurrentQuestion(),
    nextQuestion: getNextQuestion(),
    previousQuestion: getPreviousQuestion(),
    hasNext: hasNextQuestion(),
    hasPrevious: hasPreviousQuestion(),
    handleCorrectAnswer,
    handleIncorrectAnswer,
    handleNext,
    handlePrevious,
  };
};