// lib/groq-ai-model.js
import Groq from "groq-sdk";

const apiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY;
if (!apiKey) {
  throw new Error("GROQ API key is not defined");
}

const groq = new Groq({
  apiKey: apiKey,
  dangerouslyAllowBrowser: true // Nécessaire pour utiliser Groq côté client
});

export const translateText = async (sourceText, targetLanguage) => {
  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "You are a professional translator. You will receive text and translate it to the specified language. Return only the translated text, nothing else."
        },
        {
          role: "user",
          content: `Translate this text to ${targetLanguage}: "${sourceText}"`
        }
      ],
      model: "llama-3.1-8b-instant", // ou "mixtral-8x7b-32768"
      temperature: 0.3,
      max_tokens: 1024,
    });

    return completion.choices[0]?.message?.content || "Translation failed.";
  } catch (error) {
    console.error("Error with Groq translation:", error);
    throw error;
  }
};