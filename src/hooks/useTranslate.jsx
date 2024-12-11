import { useEffect, useState } from "react";

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // useEffect(() => {
  //   if (!sourceText.trim()) return;

  //   const handleTranslate = async () => {
  //     setLoading(true);

  //     try {
  //       console.log("Sending request to API...");
        
  //       const data = {
  //         messages: [
  //           {
  //             role: "user",
  //             content: `You will be provided with a sentence. This sentence: 
  //             ${sourceText}. Your tasks are to:
  //             - Detect what language the sentence is in
  //             - Translate the sentence into ${selectedLanguage}
  //             Do not return anything other than the translated sentence.`,
  //           },
  //         ],
  //         model: "gpt-4o",
  //         max_tokens: 100,
  //         temperature: 0.9,
  //       };

  //       const response = await fetch("https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions", {
  //         method: "POST",
  //         headers: {
  //           "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
  //           "x-rapidapi-host": "cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com",
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify(data),
  //       });

  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }

  //       const result = await response.json();
  //       if (result.choices && result.choices.length > 0) {
  //         setTargetText(result.choices[0].message.content);
  //       } else {
  //         setTargetText("Translation failed.");
  //       }
  //     } catch (error) {
  //       console.error("Error translating text:", error);
  //       setTargetText("Error translating text.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   const timeoutId = setTimeout(() => {
  //     handleTranslate();
  //   }, 500);

  //   return () => clearTimeout(timeoutId);
  // }, [sourceText, selectedLanguage]);

  // return { targetText, loading };
  useEffect(() => {
    if (!sourceText.trim()) return;

    const handleTranslate = async () => {
      setLoading(true);
      setError(null); // Réinitialiser l'erreur au début

      try {
        console.log("Sending request to API...");

        const data = {
          messages: [
            {
              role: "user",
              content: `You will be provided with a sentence. This sentence: 
              ${sourceText}. Your tasks are to:
              - Detect what language the sentence is in
              - Translate the sentence into ${selectedLanguage}
              Do not return anything other than the translated sentence.`,
            },
          ],
          model: "gpt-4o",
          max_tokens: 100,
          temperature: 0.9,
        };

        const response = await fetch("https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "x-rapidapi-key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
            "x-rapidapi-host": "cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          if (response.status === 429) {
            // Gestion spécifique pour l'erreur 429
            throw new Error("Too many requests. Please try again later.");
          }
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        if (result.choices && result.choices.length > 0) {
          setTargetText(result.choices[0].message.content);
        } else {
          setTargetText("Translation failed.");
        }
      } catch (error) {
        console.error("Error translating text:", error);
        setError(error.message); // Afficher le message d'erreur spécifique
        setTargetText(""); // Réinitialiser le texte cible en cas d'erreur
      } finally {
        setLoading(false);
      }
    };

    const timeoutId = setTimeout(() => {
      handleTranslate();
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [sourceText, selectedLanguage]);

  return { targetText, loading, error }; // Retourner l'erreur
};

export default useTranslate;
