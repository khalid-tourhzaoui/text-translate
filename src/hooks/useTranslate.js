// hooks/useTranslate.js
import { translateText } from "@/lib/groq-ai-model";
import { useEffect, useState } from "react";

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sourceText.trim()) {
      setTargetText("");
      return;
    }

    const handleTranslate = async () => {
      setLoading(true);
      setError(null);

      try {
        const translation = await translateText(sourceText, selectedLanguage);
        setTargetText(translation);
      } catch (error) {
        console.error("Error translating text:", error);
        setError(error.message || "Translation failed");
        setTargetText("");
      } finally {
        setLoading(false);
      }
    };

    // Délai pour éviter trop de requêtes
    const timeoutId = setTimeout(() => {
      handleTranslate();
    }, 1000); // Réduit à 1 seconde pour une meilleure UX

    return () => clearTimeout(timeoutId);
  }, [sourceText, selectedLanguage]);

  return { targetText, loading, error };
};

export default useTranslate;