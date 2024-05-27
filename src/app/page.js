"use client";
import React, { useState } from "react";
import WelcomeScreen from "../components/WelcomeScreen";
import Questionnaire from "../components/QuestionScreen";
import PredictionScreen from "../components/PredictionScreen";

export default function Home() {
  const [stage, setStage] = useState("welcome");
  const [answers, setAnswers] = useState({});
  const [timeFrame, setTimeFrame] = useState("dag");

  const handleStart = () => {
    setStage("questionnaire");
  };

  const handleSubmit = (answers, timeFrame) => {
    setAnswers(answers);
    setTimeFrame(timeFrame);
    setStage("prediction");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {stage === "welcome" && <WelcomeScreen onStart={handleStart} />}
      {stage === "questionnaire" && <Questionnaire onSubmit={handleSubmit} />}
      {stage === "prediction" && (
        <PredictionScreen answers={answers} timeFrame={timeFrame} />
      )}
    </div>
  );
}
