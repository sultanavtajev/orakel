"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function PredictionScreen({ answers, timeFrame }) {
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

    fetchPrediction();
  }, [answers, timeFrame]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        Laster spådom...
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

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-200 p-4">
      <h1 className="text-4xl font-bold mb-4">Din spådom</h1>
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-7xl space-y-4">
        <h2 className="text-2xl font-semibold">For {timeFrame}:</h2>
        <div className="space-y-6 w-full">
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-xl font-bold">Helse</h3>
            <p className="text-lg">
              {prediction.helse || "Ingen spådom tilgjengelig"}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-xl font-bold">Karriere</h3>
            <p className="text-lg">
              {prediction.karriere || "Ingen spådom tilgjengelig"}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-xl font-bold">Forhold</h3>
            <p className="text-lg">
              {prediction.forhold || "Ingen spådom tilgjengelig"}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-xl font-bold">Sexliv</h3>
            <p className="text-lg">
              {prediction.sexliv || "Ingen spådom tilgjengelig"}
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg w-full">
            <h3 className="text-xl font-bold">Personlig vekst</h3>
            <p className="text-lg">
              {prediction["personlig vekst"] || "Ingen spådom tilgjengelig"}
            </p>
          </div>
        </div>
      </div>
      <button
        onClick={() => (window.location.href = "/")}
        className="bg-green-500 text-white px-4 py-2 rounded mt-6"
      >
        Start på nytt
      </button>
    </div>
  );
}
