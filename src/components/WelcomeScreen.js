"use client";
import React from "react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h1 className="text-4xl font-bold mb-4">Velkommen til orakelet Paolla!</h1>
      <p className="mb-4">
        Svar på noen spørsmål og se hva orakelet Paolla kan fortelle deg om fremtiden.
      </p>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Start
      </button>
    </div>
  );
}
