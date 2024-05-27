"use client";
import React, { useState, useEffect } from "react";

const prefilledValues = {
  name: "Sultan Avtajev",
  residence: "Oslo, Norge",
  maritalStatus: "Samboer",
  age: 30,
  occupation: "Utvikler",
  education: "Dataingeniør",
  hobbies: "Trening, programmering, dokumentarer, eiendomsinvestering",
  children: "Nei",
  pets: "Ja",
  favoriteFood: "Wok med kylling og grønnsaker",
  favoriteMovie: "The Count Of Monte Cristo",
  favoriteBook: "Kunsten å forlise",
  travelDestinations: "En øde øy som jeg kan leve på i en måned",
  languages: "Norsk, Engelsk. Russisk, Tsjetsjensk",
  sports: "Ja",
  music: "Rock, Pop, Reggae",
  dreamJob: "Starte et selskap verdt over en milliard dollar",
  techSkills: "JavaScript, Python, React, Next.js, Node.js, MongoDB, SQL, Git",
  volunteering: "Nei",
  favoriteSeason: "Sommer",
};

const prefilledJungianValues = {
  1: "Innadvent",
  2: "Logikk",
  3: "Sanser",
  4: "Fleksibel",
  5: "Planlegge",
  6: "Nåtid",
  7: "Alene",
  8: "Konkrete fakta",
  9: "Realist",
  10: "Overveie alternativer",
  11: "Med ro",
  12: "Gjennom erfaring",
  13: "Praktisk",
  14: "Direkte",
  15: "Leder",
  16: "Variasjon",
  17: "Bryter dem",
  18: "Tilpasser meg raskt",
  19: "Utforske",
  20: "Prøver igjen",
  21: "Detaljorientert",
  22: "Forandring",
  23: "Tenker",
  24: "Med åpenhet",
  25: "Følge planer",
  26: "Strukturert",
  27: "Fakta",
  28: "Takknemlig",
  29: "Analytisk",
  30: "Alene",
  31: "Fleksibel",
  32: "Selvdrevet",
  33: "Ta ledelsen",
  34: "Personlig oppnåelse",
  35: "Effektivt",
  36: "Resultatorientert",
  37: "Ta initiativ",
  38: "Skeptisk",
  39: "Helhetsbilde",
  40: "Motiverende",
  41: "Uavhengig",
  42: "Verbal",
  43: "Spontan",
  44: "Proaktivt",
  45: "Praktisk",
  46: "Tolerant",
  47: "Tilpasningsdyktig",
  48: "Indre tilfredsstillelse",
  49: "Objektiv",
  50: "Analytisk",
};

const generalQuestions = [
  {
    id: "name",
    question: "Hva er navnet ditt?",
    type: "text",
    value: prefilledValues.name,
  },
  {
    id: "residence",
    question: "Hvor bor du?",
    type: "text",
    value: prefilledValues.residence,
  },
  {
    id: "maritalStatus",
    question: "Hva er din sivilstand?",
    type: "select",
    options: ["Singel", "Gift", "Samboer", "Skilt"],
    value: prefilledValues.maritalStatus,
  },
  {
    id: "age",
    question: "Hvor gammel er du?",
    type: "number",
    value: prefilledValues.age,
  },
  {
    id: "occupation",
    question: "Hva jobber du som?",
    type: "text",
    value: prefilledValues.occupation,
  },
  {
    id: "education",
    question: "Hva er din utdanningsbakgrunn?",
    type: "text",
    value: prefilledValues.education,
  },
  {
    id: "hobbies",
    question: "Hva er dine hobbyer?",
    type: "text",
    value: prefilledValues.hobbies,
  },
  {
    id: "children",
    question: "Har du barn?",
    type: "select",
    options: ["Ja", "Nei"],
    value: prefilledValues.children,
  },
  {
    id: "pets",
    question: "Har du kjæledyr?",
    type: "select",
    options: ["Ja", "Nei"],
    value: prefilledValues.pets,
  },
  {
    id: "favoriteFood",
    question: "Hva er din favorittmat?",
    type: "text",
    value: prefilledValues.favoriteFood,
  },
  {
    id: "favoriteMovie",
    question: "Hva er din favorittfilm?",
    type: "text",
    value: prefilledValues.favoriteMovie,
  },
  {
    id: "favoriteBook",
    question: "Hva er din favorittbok?",
    type: "text",
    value: prefilledValues.favoriteBook,
  },
  {
    id: "travelDestinations",
    question: "Hva er dine drømmereisemål?",
    type: "text",
    value: prefilledValues.travelDestinations,
  },
  {
    id: "languages",
    question: "Hvilke språk snakker du?",
    type: "text",
    value: prefilledValues.languages,
  },
  {
    id: "sports",
    question: "Driver du med sport?",
    type: "select",
    options: ["Ja", "Nei"],
    value: prefilledValues.sports,
  },
  {
    id: "music",
    question: "Hva slags musikk liker du?",
    type: "text",
    value: prefilledValues.music,
  },
  {
    id: "dreamJob",
    question: "Hva er drømmejobben din?",
    type: "text",
    value: prefilledValues.dreamJob,
  },
  {
    id: "techSkills",
    question: "Hvilke teknologiske ferdigheter har du?",
    type: "text",
    value: prefilledValues.techSkills,
  },
  {
    id: "volunteering",
    question: "Har du erfaring med frivillig arbeid?",
    type: "select",
    options: ["Ja", "Nei"],
    value: prefilledValues.volunteering,
  },
  {
    id: "favoriteSeason",
    question: "Hva er din favorittårstid?",
    type: "text",
    value: prefilledValues.favoriteSeason,
  },
];

const jungianQuestions = [
  {
    id: 1,
    question: "Er du en utadvendt eller innadvendt person?",
    type: "radio",
    options: ["Utadvendt", "Innadvendt"],
    value: prefilledJungianValues[1],
  },
  {
    id: 2,
    question: "Hvordan foretrekker du å ta beslutninger?",
    type: "radio",
    options: ["Logikk", "Følelser"],
    value: prefilledJungianValues[2],
  },
  {
    id: 3,
    question: "Hvordan foretrekker du å motta informasjon?",
    type: "radio",
    options: ["Sanser", "Intuisjon"],
    value: prefilledJungianValues[3],
  },
  {
    id: 4,
    question: "Hvordan håndterer du ytre verden?",
    type: "radio",
    options: ["Organisert", "Fleksibel"],
    value: prefilledJungianValues[4],
  },
  {
    id: 5,
    question: "Foretrekker du å planlegge eller improvisere?",
    type: "radio",
    options: ["Planlegge", "Improvisere"],
    value: prefilledJungianValues[5],
  },
  {
    id: 6,
    question: "Er du mer fokusert på nåtid eller fremtid?",
    type: "radio",
    options: ["Nåtid", "Fremtid"],
    value: prefilledJungianValues[6],
  },
  {
    id: 7,
    question: "Liker du å være alene eller sammen med andre?",
    type: "radio",
    options: ["Alene", "Sammen med andre"],
    value: prefilledJungianValues[7],
  },
  {
    id: 8,
    question: "Foretrekker du konkrete fakta eller abstrakte ideer?",
    type: "radio",
    options: ["Konkrete fakta", "Abstrakte ideer"],
    value: prefilledJungianValues[8],
  },
  {
    id: 9,
    question: "Er du en realist eller en drømmer?",
    type: "radio",
    options: ["Realist", "Drømmer"],
    value: prefilledJungianValues[9],
  },
  {
    id: 10,
    question: "Liker du å ta raske beslutninger eller overveie alternativene?",
    type: "radio",
    options: ["Raske beslutninger", "Overveie alternativer"],
    value: prefilledJungianValues[10],
  },
  {
    id: 11,
    question: "Hvordan håndterer du stress?",
    type: "radio",
    options: ["Med ro", "Med uro"],
    value: prefilledJungianValues[11],
  },
  {
    id: 12,
    question: "Hvordan foretrekker du å lære?",
    type: "radio",
    options: ["Gjennom erfaring", "Gjennom teori"],
    value: prefilledJungianValues[12],
  },
  {
    id: 13,
    question: "Er du en praktisk eller teoretisk person?",
    type: "radio",
    options: ["Praktisk", "Teoretisk"],
    value: prefilledJungianValues[13],
  },
  {
    id: 14,
    question: "Hvordan håndterer du konflikter?",
    type: "radio",
    options: ["Direkte", "Indirekte"],
    value: prefilledJungianValues[14],
  },
  {
    id: 15,
    question: "Er du en leder eller en tilhenger?",
    type: "radio",
    options: ["Leder", "Tilhenger"],
    value: prefilledJungianValues[15],
  },
  {
    id: 16,
    question: "Foretrekker du rutiner eller variasjon?",
    type: "radio",
    options: ["Rutiner", "Variasjon"],
    value: prefilledJungianValues[16],
  },
  {
    id: 17,
    question: "Hvordan forholder du deg til regler?",
    type: "radio",
    options: ["Følger dem", "Bryter dem"],
    value: prefilledJungianValues[17],
  },
  {
    id: 18,
    question: "Hvordan reagerer du på nye situasjoner?",
    type: "radio",
    options: ["Tilpasser meg raskt", "Bruker tid på å tilpasse meg"],
    value: prefilledJungianValues[18],
  },
  {
    id: 19,
    question: "Liker du å utforske eller holde deg til det kjente?",
    type: "radio",
    options: ["Utforske", "Holde meg til det kjente"],
    value: prefilledJungianValues[19],
  },
  {
    id: 20,
    question: "Hvordan håndterer du mislykkede forsøk?",
    type: "radio",
    options: ["Gir opp", "Prøver igjen"],
    value: prefilledJungianValues[20],
  },
  {
    id: 21,
    question: "Er du mer intuitiv eller detaljorientert?",
    type: "radio",
    options: ["Intuitiv", "Detaljorientert"],
    value: prefilledJungianValues[21],
  },
  {
    id: 22,
    question: "Foretrekker du stabilitet eller forandring?",
    type: "radio",
    options: ["Stabilitet", "Forandring"],
    value: prefilledJungianValues[22],
  },
  {
    id: 23,
    question: "Er du en tenker eller en føler?",
    type: "radio",
    options: ["Tenker", "Føler"],
    value: prefilledJungianValues[23],
  },
  {
    id: 24,
    question: "Hvordan håndterer du kritikk?",
    type: "radio",
    options: ["Med åpenhet", "Med forsvar"],
    value: prefilledJungianValues[24],
  },
  {
    id: 25,
    question: "Liker du å følge planer eller ta ting som de kommer?",
    type: "radio",
    options: ["Følge planer", "Ta ting som de kommer"],
    value: prefilledJungianValues[25],
  },
  {
    id: 26,
    question: "Hvordan oppfatter du tid?",
    type: "radio",
    options: ["Strukturert", "Flytende"],
    value: prefilledJungianValues[26],
  },
  {
    id: 27,
    question: "Er du mer påvirket av fakta eller følelser?",
    type: "radio",
    options: ["Fakta", "Følelser"],
    value: prefilledJungianValues[27],
  },
  {
    id: 28,
    question: "Hvordan reagerer du på komplimenter?",
    type: "radio",
    options: ["Takknemlig", "Skeptisk"],
    value: prefilledJungianValues[28],
  },
  {
    id: 29,
    question: "Er du mer analytisk eller kreativ?",
    type: "radio",
    options: ["Analytisk", "Kreativ"],
    value: prefilledJungianValues[29],
  },
  {
    id: 30,
    question: "Foretrekker du å arbeide i grupper eller alene?",
    type: "radio",
    options: ["Grupper", "Alene"],
    value: prefilledJungianValues[30],
  },
  {
    id: 31,
    question: "Hvordan reagerer du på endringer i planer?",
    type: "radio",
    options: ["Fleksibel", "Urolig"],
    value: prefilledJungianValues[31],
  },
  {
    id: 32,
    question: "Er du mer selvdrevet eller teamdrevet?",
    type: "radio",
    options: ["Selvdrevet", "Teamdrevet"],
    value: prefilledJungianValues[32],
  },
  {
    id: 33,
    question: "Liker du å ta ledelsen eller følge instruksjoner?",
    type: "radio",
    options: ["Ta ledelsen", "Følge instruksjoner"],
    value: prefilledJungianValues[33],
  },
  {
    id: 34,
    question: "Hvordan vurderer du suksess?",
    type: "radio",
    options: ["Personlig oppnåelse", "Ekstern anerkjennelse"],
    value: prefilledJungianValues[34],
  },
  {
    id: 35,
    question: "Hvordan håndterer du multitasking?",
    type: "radio",
    options: ["Effektivt", "Med utfordringer"],
    value: prefilledJungianValues[35],
  },
  {
    id: 36,
    question: "Er du mer resultatorientert eller prosessorientert?",
    type: "radio",
    options: ["Resultatorientert", "Prosessorientert"],
    value: prefilledJungianValues[36],
  },
  {
    id: 37,
    question: "Foretrekker du å ta initiativ eller å vente på instruksjoner?",
    type: "radio",
    options: ["Ta initiativ", "Vente på instruksjoner"],
    value: prefilledJungianValues[37],
  },
  {
    id: 38,
    question: "Hvordan oppfatter du autoritet?",
    type: "radio",
    options: ["Respektfull", "Skeptisk"],
    value: prefilledJungianValues[38],
  },
  {
    id: 39,
    question: "Er du mer fokusert på detaljer eller helhetsbilde?",
    type: "radio",
    options: ["Detaljer", "Helhetsbilde"],
    value: prefilledJungianValues[39],
  },
  {
    id: 40,
    question: "Hvordan oppfatter du konkurranse?",
    type: "radio",
    options: ["Motiverende", "Stressende"],
    value: prefilledJungianValues[40],
  },
  {
    id: 41,
    question: "Er du mer uavhengig eller samarbeidsvillig?",
    type: "radio",
    options: ["Uavhengig", "Samarbeidsvillig"],
    value: prefilledJungianValues[41],
  },
  {
    id: 42,
    question: "Hvordan foretrekker du å kommunisere?",
    type: "radio",
    options: ["Verbal", "Skriftlig"],
    value: prefilledJungianValues[42],
  },
  {
    id: 43,
    question: "Er du mer spontan eller planlagt?",
    type: "radio",
    options: ["Spontan", "Planlagt"],
    value: prefilledJungianValues[43],
  },
  {
    id: 44,
    question: "Hvordan håndterer du ansvar?",
    type: "radio",
    options: ["Proaktivt", "Reaktivt"],
    value: prefilledJungianValues[44],
  },
  {
    id: 45,
    question: "Er du mer praktisk eller fantasifull?",
    type: "radio",
    options: ["Praktisk", "Fantasifull"],
    value: prefilledJungianValues[45],
  },
  {
    id: 46,
    question: "Hvordan oppfatter du risiko?",
    type: "radio",
    options: ["Tolerant", "Avventende"],
    value: prefilledJungianValues[46],
  },
  {
    id: 47,
    question: "Er du mer tilpasningsdyktig eller rigid?",
    type: "radio",
    options: ["Tilpasningsdyktig", "Rigid"],
    value: prefilledJungianValues[47],
  },
  {
    id: 48,
    question: "Hvordan oppfatter du suksess?",
    type: "radio",
    options: ["Indre tilfredsstillelse", "Ytre anerkjennelse"],
    value: prefilledJungianValues[48],
  },
  {
    id: 49,
    question: "Er du mer objektiv eller subjektiv?",
    type: "radio",
    options: ["Objektiv", "Subjektiv"],
    value: prefilledJungianValues[49],
  },
  {
    id: 50,
    question: "Hvordan håndterer du beslutningsprosesser?",
    type: "radio",
    options: ["Analytisk", "Impulsiv"],
    value: prefilledJungianValues[50],
  },
];

export default function Questionnaire({ onSubmit }) {
  const [answers, setAnswers] = useState({
    ...prefilledValues,
    ...prefilledJungianValues,
  });
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
          <option value="dag">Neste dag</option>
          <option value="uke">En uke frem</option>
          <option value="måned">En måned frem</option>
          <option value="år">Et år frem</option>
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
