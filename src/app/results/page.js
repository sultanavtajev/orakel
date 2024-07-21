"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
 

function PredictionComponent() {
  const searchParams = useSearchParams();
  const answersParam = searchParams.get("answers");
  const timeFrameParam = searchParams.get("timeFrame");
  const router = useRouter();

  const [answers] = useState(answersParam ? JSON.parse(answersParam) : {});
  const [timeFrame] = useState(timeFrameParam || "dag");
  const [prediction, setPrediction] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        const response = await axios.post("/api/prediction", {
          answers,
          timeFrame,
        });
        setPrediction(response.data.data.prediction);
      } catch (error) {
        setError(
          error.response?.data?.error?.message ||
            "Det oppsto en feil. Vennligst prøv igjen."
        );
      } finally {
        setLoading(false);
      }
    };

    if (Object.keys(answers).length > 0 && timeFrame) {
      fetchPrediction();
    }
  }, [answers, timeFrame]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm"></div>
        <div className="relative w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
        <div className="flex items-center justify-center h-screen">
          Laster spådom...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-red-100 text-red-800">
        {error}
      </div>
    );
  }

  const handleNewAnalysis = () => {
    router.push("/question"); // Oppdater denne ruten til riktig rute for opplastingssiden
  };

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-2xl font-medium text-gray-900 dark:text-gray-100">
              Resultater fra analysen
            </h2>
            <h2 className="text-lg font-semibold">
              For periode: 1 {timeFrame}
            </h2>
          </div>
          <div className="border-t border-gray-200 dark:border-gray-700 px-4 py-5 sm:p-0">
            <div className="p-4 rounded-lg w-full items-center justify-center">
              <h3 className="text-xl font-bold">Helse</h3>
              <p className="text-lg">
                {prediction.helse || "Ingen spådom tilgjengelig"}
              </p>
            </div>

            <div className="p-4 rounded-lg w-full">
              <h3 className="text-xl font-bold">Karriere</h3>
              <p className="text-lg">
                {prediction.karriere || "Ingen spådom tilgjengelig"}
              </p>
            </div>

            <div className="p-4 rounded-lg w-full">
              <h3 className="text-xl font-bold">Forhold</h3>
              <p className="text-lg">
                {prediction.forhold || "Ingen spådom tilgjengelig"}
              </p>
            </div>

            <div className="p-4 rounded-lg w-full">
              <h3 className="text-xl font-bold">Sexliv</h3>
              <p className="text-lg">
                {prediction.sexliv || "Ingen spådom tilgjengelig"}
              </p>
            </div>

            <div className="p-4 rounded-lg w-full">
              <h3 className="text-xl font-bold">Personlig vekst</h3>
              <p className="text-lg">
                {prediction["personlig vekst"] || "Ingen spådom tilgjengelig"}
              </p>
            </div>
          </div>
          <div className="px-4 py-5 sm:px-6">
            <Button className="w-full" onClick={handleNewAnalysis}>
              Lag en ny spådom{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Prediction() {
  return (
    <Suspense fallback={<div>Laster innhold...</div>}>
      <PredictionComponent />
    </Suspense>
  );
}