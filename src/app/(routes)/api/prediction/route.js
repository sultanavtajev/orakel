import OpenAI from "openai";
import { NextResponse } from "next/server";

export const maxDuration = 50; // Denne funksjonen kan kjøre i maksimalt 30 sekunder
export const dynamic = "force-dynamic";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchPrediction = async (prompt) => {
  const maxRetries = 5;
  let retries = 0;

  while (retries < maxRetries) {
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          { role: "system", content: "Du er en spåmann." },
          { role: "user", content: prompt },
        ],
        max_tokens: 1000,
        temperature: 0.7,
        top_p: 0.9,
        frequency_penalty: 0.5,
        presence_penalty: 0.5,
      });
      return response.choices[0].message.content;
    } catch (error) {
      if (error.code === "rate_limit_exceeded") {
        const retryAfter = parseInt(
          error.headers?.get("retry-after") || "10000",
          10
        );
        await delay(retryAfter);
        retries += 1;
      } else if (error.code === "ETIMEDOUT" || error.code === "ECONNABORTED") {
        // Handle timeouts specifically
        await delay(10000); // wait 10 seconds before retrying
        retries += 1;
      } else {
        throw error;
      }
    }
  }

  throw new Error("Max retries reached");
};

export async function GET(req) {
  return NextResponse.json(
    { error: "GET-metoden er ikke tillatt" },
    { status: 405 }
  );
}

export async function POST(req) {
  try {
    const { answers, timeFrame } = await req.json();
    const generalAnswers = {
      name: answers.name,
      residence: answers.residence,
      maritalStatus: answers.maritalStatus,
      age: answers.age,
      occupation: answers.occupation,
      education: answers.education,
      hobbies: answers.hobbies,
      children: answers.children,
      pets: answers.pets,
      favoriteFood: answers.favoriteFood,
      favoriteMovie: answers.favoriteMovie,
      favoriteBook: answers.favoriteBook,
      travelDestinations: answers.travelDestinations,
      languages: answers.languages,
      sports: answers.sports,
      music: answers.music,
      dreamJob: answers.dreamJob,
      techSkills: answers.techSkills,
      volunteering: answers.volunteering,
      favoriteSeason: answers.favoriteSeason,
    };

    const jungianAnswers = Object.keys(answers).reduce((acc, key) => {
      if (!generalAnswers.hasOwnProperty(key)) {
        acc[key] = answers[key];
      }
      return acc;
    }, {});

    const prompts = {
      helse: `Lag en spådom for helse basert på følgende informasjon om brukeren: ${JSON.stringify(
        generalAnswers
      )}, Jungiansk Typeindeks: ${JSON.stringify(
        jungianAnswers
      )} og periode: ${timeFrame}. Skriv minst 200 ord. Teksten må være en sammenhengende tekst. Bruk gjerne relevante metaforer, visdom, quotes og lignende. Tilpass svaret som om det skulle vært en spådom fra en spåmkone. Beskriv hvordan brukeren kan forbedre helsen sin, hva som kan være utfordringer og hvordan de kan overkomme disse. Beskriv også hva som kan skje i fremtiden hvis brukeren følger rådene dine. Inkluder gjerne historier og eksempler. Avslutt svaret ditt alltid med hilser fra "din spåkone Paolla". Ekskluder hilsninger og bruk kun fornavnet til brukeren.`,
      karriere: `Lag en spådom for karriere basert på følgende informasjon om brukeren: ${JSON.stringify(
        generalAnswers
      )}, Jungiansk Typeindeks: ${JSON.stringify(
        jungianAnswers
      )} og periode: ${timeFrame}. Skriv minst 200 ord. Teksten må være en sammenhengende tekst. Bruk gjerne relevante metaforer, visdom, quotes og lignende. Tilpass svaret som om det skulle vært en spådom fra en spåkone. Beskriv hvordan brukeren kan forbedre karrieren sin, hva som kan være utfordringer og hvordan de kan overkomme disse. Beskriv også hva som kan skje i fremtiden hvis brukeren følger rådene dine. Inkluder gjerne historier og eksempler. Avslutt svaret ditt alltid med hilser fra "din spåkone Paolla". Ekskluder hilsninger og bruk kun fornavnet til brukeren.`,
      forhold: `Lag en spådom for forhold basert på følgende informasjon om brukeren: ${JSON.stringify(
        generalAnswers
      )}, Jungiansk Typeindeks: ${JSON.stringify(
        jungianAnswers
      )} og periode: ${timeFrame}. Skriv minst 200 ord. Teksten må være en sammenhengende tekst. Bruk gjerne relevante metaforer, visdom, quotes og lignende. Tilpass svaret som om det skulle vært en spådom fra en spåkone. Beskriv hvordan brukeren kan forbedre forholdene sin, hva som kan være utfordringer og hvordan de kan overkomme disse. Beskriv også hva som kan skje i fremtiden hvis brukeren følger rådene dine. Inkluder gjerne historier og eksempler. Avslutt svaret ditt alltid med hilser fra "din spåkone Paolla". Ekskluder hilsninger og bruk kun fornavnet til brukeren.`,
      sexliv: `Lag en spådom for sexliv basert på følgende informasjon om brukeren: ${JSON.stringify(
        generalAnswers
      )}, Jungiansk Typeindeks: ${JSON.stringify(
        jungianAnswers
      )} og periode: ${timeFrame}. Skriv minst 200 ord. Teksten må være en sammenhengende tekst. Bruk gjerne relevante metaforer, visdom, quotes og lignende. Tilpass svaret som om det skulle vært en spådom fra en spåkone. Beskriv hvordan brukeren kan forbedre sexlivet sitt, hva som kan være utfordringer og hvordan de kan overkomme disse. Beskriv også hva som kan skje i fremtiden hvis brukeren følger rådene dine. Inkluder gjerne historier og eksempler. Avslutt svaret ditt alltid med hilser fra "din spåkone Paolla". Ekskluder hilsninger og bruk kun fornavnet til brukeren.`,
      "personlig vekst": `Lag en spådom for personlig vekst basert på følgende informasjon om brukeren: ${JSON.stringify(
        generalAnswers
      )}, Jungiansk Typeindeks: ${JSON.stringify(
        jungianAnswers
      )} og periode: ${timeFrame}. Skriv minst 200 ord. Teksten må være en sammenhengende tekst. Bruk gjerne relevante metaforer, visdom, quotes og lignende. Tilpass svaret som om det skulle vært en spådom fra en spåkone. Beskriv hvordan brukeren kan forbedre sin personlige vekst, hva som kan være utfordringer og hvordan de kan overkomme disse. Beskriv også hva som kan skje i fremtiden hvis brukeren følger rådene dine. Inkluder gjerne historier og eksempler. Avslutt svaret ditt alltid med hilser fra "din spåkone Paolla". Ekskluder hilsninger og bruk kun fornavnet til brukeren.`,
    };

    const results = await Promise.all(
      Object.entries(prompts).map(async ([key, prompt]) => {
        const result = await fetchPrediction(prompt);
        return [key, result];
      })
    );

    const prediction = results.reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {});

    return NextResponse.json({ data: { prediction } });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Det oppsto en feil. Vennligst prøv igjen." },
      { status: 500 }
    );
  }
}
