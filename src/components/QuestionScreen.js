"use client";
import React, { useState } from "react";

const generalQuestions = [
  {
    id: "name",
    question: "Hva er navnet ditt?",
    type: "text",
  },
  {
    id: "residence",
    question: "Hvor bor du?",
    type: "text",
  },
  {
    id: "maritalStatus",
    question: "Hva er din sivilstand?",
    type: "select",
    options: ["Singel", "Gift", "Samboer", "Skilt"],
  },
  {
    id: "age",
    question: "Hvor gammel er du?",
    type: "number",
  },
  {
    id: "occupation",
    question: "Hva jobber du som?",
    type: "text",
  },
  {
    id: "education",
    question: "Hva er din utdanningsbakgrunn?",
    type: "text",
  },
  {
    id: "hobbies",
    question: "Hva er dine hobbyer?",
    type: "text",
  },
  {
    id: "children",
    question: "Har du barn?",
    type: "select",
    options: ["Ja", "Nei"],
  },
  {
    id: "pets",
    question: "Har du kjæledyr?",
    type: "select",
    options: ["Ja", "Nei"],
  },
  {
    id: "favoriteFood",
    question: "Hva er din favorittmat?",
    type: "text",
  },
  {
    id: "favoriteMovie",
    question: "Hva er din favorittfilm?",
    type: "text",
  },
  {
    id: "favoriteBook",
    question: "Hva er din favorittbok?",
    type: "text",
  },
  {
    id: "travelDestinations",
    question: "Hva er dine drømmereisemål?",
    type: "text",
  },
  {
    id: "languages",
    question: "Hvilke språk snakker du?",
    type: "text",
  },
  {
    id: "sports",
    question: "Driver du med sport?",
    type: "select",
    options: ["Ja", "Nei"],
  },
  {
    id: "music",
    question: "Hva slags musikk liker du?",
    type: "text",
  },
  {
    id: "dreamJob",
    question: "Hva er drømmejobben din?",
    type: "text",
  },
  {
    id: "techSkills",
    question: "Hvilke teknologiske ferdigheter har du?",
    type: "text",
  },
  {
    id: "volunteering",
    question: "Har du erfaring med frivillig arbeid?",
    type: "select",
    options: ["Ja", "Nei"],
  },
  {
    id: "favoriteSeason",
    question: "Hva er din favorittårstid?",
    type: "text",
  },
];

const jungianQuestions = [
  {
    id: 1,
    question: "Er du en utadvendt eller innadvendt person?",
    type: "radio",
    options: ["Utadvendt", "Innadvendt"],
  },
  {
    id: 2,
    question: "Hvordan foretrekker du å ta beslutninger?",
    type: "radio",
    options: ["Logikk", "Følelser"],
  },
  {
    id: 3,
    question: "Hvordan foretrekker du å motta informasjon?",
    type: "radio",
    options: ["Sanser", "Intuisjon"],
  },
  {
    id: 4,
    question: "Hvordan håndterer du ytre verden?",
    type: "radio",
    options: ["Organisert", "Fleksibel"],
  },
  {
    id: 5,
    question: "Foretrekker du å planlegge eller improvisere?",
    type: "radio",
    options: ["Planlegge", "Improvisere"],
  },
  {
    id: 6,
    question: "Er du mer fokusert på nåtid eller fremtid?",
    type: "radio",
    options: ["Nåtid", "Fremtid"],
  },
  {
    id: 7,
    question: "Liker du å være alene eller sammen med andre?",
    type: "radio",
    options: ["Alene", "Sammen med andre"],
  },
  {
    id: 8,
    question: "Foretrekker du konkrete fakta eller abstrakte ideer?",
    type: "radio",
    options: ["Konkrete fakta", "Abstrakte ideer"],
  },
  {
    id: 9,
    question: "Er du en realist eller en drømmer?",
    type: "radio",
    options: ["Realist", "Drømmer"],
  },
  {
    id: 10,
    question: "Liker du å ta raske beslutninger eller overveie alternativene?",
    type: "radio",
    options: ["Raske beslutninger", "Overveie alternativer"],
  },
  {
    id: 11,
    question: "Hvordan håndterer du stress?",
    type: "radio",
    options: ["Med ro", "Med uro"],
  },
  {
    id: 12,
    question: "Hvordan foretrekker du å lære?",
    type: "radio",
    options: ["Gjennom erfaring", "Gjennom teori"],
  },
  {
    id: 13,
    question: "Er du en praktisk eller teoretisk person?",
    type: "radio",
    options: ["Praktisk", "Teoretisk"],
  },
  {
    id: 14,
    question: "Hvordan håndterer du konflikter?",
    type: "radio",
    options: ["Direkte", "Indirekte"],
  },
  {
    id: 15,
    question: "Er du en leder eller en tilhenger?",
    type: "radio",
    options: ["Leder", "Tilhenger"],
  },
  {
    id: 16,
    question: "Foretrekker du rutiner eller variasjon?",
    type: "radio",
    options: ["Rutiner", "Variasjon"],
  },
  {
    id: 17,
    question: "Hvordan forholder du deg til regler?",
    type: "radio",
    options: ["Følger dem", "Bryter dem"],
  },
  {
    id: 18,
    question: "Hvordan reagerer du på nye situasjoner?",
    type: "radio",
    options: ["Tilpasser meg raskt", "Bruker tid på å tilpasse meg"],
  },
  {
    id: 19,
    question: "Liker du å utforske eller holde deg til det kjente?",
    type: "radio",
    options: ["Utforske", "Holde meg til det kjente"],
  },
  {
    id: 20,
    question: "Hvordan håndterer du mislykkede forsøk?",
    type: "radio",
    options: ["Gir opp", "Prøver igjen"],
  },
  {
    id: 21,
    question: "Er du mer intuitiv eller detaljorientert?",
    type: "radio",
    options: ["Intuitiv", "Detaljorientert"],
  },
  {
    id: 22,
    question: "Foretrekker du stabilitet eller forandring?",
    type: "radio",
    options: ["Stabilitet", "Forandring"],
  },
  {
    id: 23,
    question: "Er du en tenker eller en føler?",
    type: "radio",
    options: ["Tenker", "Føler"],
  },
  {
    id: 24,
    question: "Hvordan håndterer du kritikk?",
    type: "radio",
    options: ["Med åpenhet", "Med forsvar"],
  },
  {
    id: 25,
    question: "Liker du å følge planer eller ta ting som de kommer?",
    type: "radio",
    options: ["Følge planer", "Ta ting som de kommer"],
  },
  {
    id: 26,
    question: "Hvordan oppfatter du tid?",
    type: "radio",
    options: ["Strukturert", "Flytende"],
  },
  {
    id: 27,
    question: "Er du mer påvirket av fakta eller følelser?",
    type: "radio",
    options: ["Fakta", "Følelser"],
  },
  {
    id: 28,
    question: "Hvordan reagerer du på komplimenter?",
    type: "radio",
    options: ["Takknemlig", "Skeptisk"],
  },
  {
    id: 29,
    question: "Er du mer analytisk eller kreativ?",
    type: "radio",
    options: ["Analytisk", "Kreativ"],
  },
  {
    id: 30,
    question: "Foretrekker du å arbeide i grupper eller alene?",
    type: "radio",
    options: ["Grupper", "Alene"],
  },
  {
    id: 31,
    question: "Hvordan reagerer du på endringer i planer?",
    type: "radio",
    options: ["Fleksibel", "Urolig"],
  },
  {
    id: 32,
    question: "Er du mer selvdrevet eller teamdrevet?",
    type: "radio",
    options: ["Selvdrevet", "Teamdrevet"],
  },
  {
    id: 33,
    question: "Liker du å ta ledelsen eller følge instruksjoner?",
    type: "radio",
    options: ["Ta ledelsen", "Følge instruksjoner"],
  },
  {
    id: 34,
    question: "Hvordan vurderer du suksess?",
    type: "radio",
    options: ["Personlig oppnåelse", "Ekstern anerkjennelse"],
  },
  {
    id: 35,
    question: "Hvordan håndterer du multitasking?",
    type: "radio",
    options: ["Effektivt", "Med utfordringer"],
  },
  {
    id: 36,
    question: "Er du mer resultatorientert eller prosessorientert?",
    type: "radio",
    options: ["Resultatorientert", "Prosessorientert"],
  },
  {
    id: 37,
    question: "Foretrekker du å ta initiativ eller å vente på instruksjoner?",
    type: "radio",
    options: ["Ta initiativ", "Vente på instruksjoner"],
  },
  {
    id: 38,
    question: "Hvordan oppfatter du autoritet?",
    type: "radio",
    options: ["Respektfull", "Skeptisk"],
  },
  {
    id: 39,
    question: "Er du mer fokusert på detaljer eller helhetsbilde?",
    type: "radio",
    options: ["Detaljer", "Helhetsbilde"],
  },
  {
    id: 40,
    question: "Hvordan oppfatter du konkurranse?",
    type: "radio",
    options: ["Motiverende", "Stressende"],
  },
  {
    id: 41,
    question: "Er du mer uavhengig eller samarbeidsvillig?",
    type: "radio",
    options: ["Uavhengig", "Samarbeidsvillig"],
  },
  {
    id: 42,
    question: "Hvordan foretrekker du å kommunisere?",
    type: "radio",
    options: ["Verbal", "Skriftlig"],
  },
  {
    id: 43,
    question: "Er du mer spontan eller planlagt?",
    type: "radio",
    options: ["Spontan", "Planlagt"],
  },
  {
    id: 44,
    question: "Hvordan håndterer du ansvar?",
    type: "radio",
    options: ["Proaktivt", "Reaktivt"],
  },
  {
    id: 45,
    question: "Er du mer praktisk eller fantasifull?",
    type: "radio",
    options: ["Praktisk", "Fantasifull"],
  },
  {
    id: 46,
    question: "Hvordan oppfatter du risiko?",
    type: "radio",
    options: ["Tolerant", "Avventende"],
  },
  {
    id: 47,
    question: "Er du mer tilpasningsdyktig eller rigid?",
    type: "radio",
    options: ["Tilpasningsdyktig", "Rigid"],
  },
  {
    id: 48,
    question: "Hvordan oppfatter du suksess?",
    type: "radio",
    options: ["Indre tilfredsstillelse", "Ytre anerkjennelse"],
  },
  {
    id: 49,
    question: "Er du mer objektiv eller subjektiv?",
    type: "radio",
    options: ["Objektiv", "Subjektiv"],
  },
  {
    id: 50,
    question: "Hvordan håndterer du beslutningsprosesser?",
    type: "radio",
    options: ["Analytisk", "Impulsiv"],
  },
];

export default function Questionnaire({ onSubmit }) {
  const [answers, setAnswers] = useState({});
  const [timeFrame, setTimeFrame] = useState("dag");

  const handleChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    onSubmit(answers, timeFrame);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Svar på spørsmålene:</h2>
      <h3 className="text-xl mb-4">Generelle Spørsmål:</h3>
      {generalQuestions.map((q) => (
        <div key={q.id} className="mb-4">
          <p>{q.question}</p>
          {q.type === "text" && (
            <input
              type="text"
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="p-2 border rounded w-full"
            />
          )}
          {q.type === "select" && (
            <select
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="p-2 border rounded w-full"
            >
              <option value="">Velg</option>
              {q.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
          {q.type === "number" && (
            <input
              type="number"
              value={answers[q.id] || ""}
              onChange={(e) => handleChange(q.id, e.target.value)}
              className="p-2 border rounded w-full"
            />
          )}
        </div>
      ))}
      <h3 className="text-xl mb-4">Jungiansk Typeindeks:</h3>
      {jungianQuestions.map((q) => (
        <div key={q.id} className="mb-4">
          <p>{q.question}</p>
          {q.type === "radio" &&
            q.options.map((option) => (
              <label key={option} className="block">
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={option}
                  checked={answers[q.id] === option}
                  onChange={() => handleChange(q.id, option)}
                  className="mr-2"
                />
                {option}
              </label>
            ))}
        </div>
      ))}
      <div className="mb-4">
        <label className="block mb-2">Velg tidsramme:</label>
        <select
          value={timeFrame}
          onChange={(e) => setTimeFrame(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="neste dag">Neste dag</option>
          <option value="en uke frem">En uke frem</option>
          <option value="en måned frem">En måned frem</option>
          <option value="et år frem">Et år frem</option>
        </select>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Få spådom
      </button>
    </div>
  );
}
