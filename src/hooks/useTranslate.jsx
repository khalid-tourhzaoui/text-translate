// Importing necessary hooks from React
import { useEffect, useState } from "react";
// Importing the OpenAI library for API interaction
import { OpenAI } from "openai";

// Initializing the OpenAI client with the API key from environment variables
// `dangerouslyAllowBrowser` is set to true, which allows usage in the browser (use with caution in production)
const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_API_KEY, // API key for authentication
  dangerouslyAllowBrowser: true, // Enables browser usage of the OpenAI client
});

// Custom hook for translating text using OpenAI's API
// `sourceText` is the input text to be translated
// `selectedLanguage` is the target language for the translation
const useTranslate = (sourceText, selectedLanguage) => {
  // State to store the translated text
  const [targetText, setTargetText] = useState("");

  // Effect hook to perform the translation when `sourceText` or `selectedLanguage` changes
  useEffect(() => {
    // Function to handle the translation request
    const handleTranslate = async (sourceText) => {
      try {
        // Sending a chat completion request to the OpenAI API
        const response = await openai.chat.completions.create({
          model: "gpt-4o", // Specifies the model to use
          messages: [
            {
              role: "user", // User role for the prompt
              content: `You will be provided with a sentence. This sentence: 
              ${sourceText}. Your tasks are to:
              - Detect what language the sentence is in
              - Translate the sentence into ${selectedLanguage}
              Do not return anything other than the translated sentence.`,
            },
          ],
        });

        // Extracting the translated text from the API response
        const data = response.choices[0].message.content;
        setTargetText(data); // Updating the state with the translated text
      } catch (error) {
        console.error("Error translating text:", error); // Logging any errors
      }
    };

    // Only perform translation if the source text is not empty
    if (sourceText.trim()) {
      // Adding a delay (debounce) to avoid multiple API calls for rapid input changes
      const timeoutId = setTimeout(() => {
        handleTranslate(sourceText);
      }, 500); // Delay of 500 milliseconds (can be adjusted)

      // Cleanup function to cancel pending translations if the input changes
      return () => clearTimeout(timeoutId);
    }
  }, [sourceText, selectedLanguage]); // Dependencies: effect runs when these values change

  // Returning the translated text
  return targetText;
};

// Exporting the custom hook for use in other components
export default useTranslate;
