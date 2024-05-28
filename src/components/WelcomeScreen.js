"use client";
import React from "react";

export default function WelcomeScreen({ onStart }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <div className="shadow-md rounded-lg p-6 max-w-2xl w-full text-center border border-gray-300">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Velkommen til Orakelet Paolla!
        </h1>
        <p className="mb-6 text-lg text-gray-700">
          Svar på noen spørsmål og se hva orakelet Paolla kan fortelle deg om
          fremtiden.
        </p>
        <button
          onClick={onStart}
          className="bg-gray-800 text-white px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:bg-gray-900 hover:scale-105"
        >
          Start
        </button>
      </div>
    </div>
  );
}
