import { AIChatSession } from "@/lib/google-ai-model";
import { useEffect, useState } from "react";

const useTranslate = (sourceText, selectedLanguage) => {
  const [targetText, setTargetText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!sourceText.trim()) return;

    const handleTranslate = async () => {
      setLoading(true);
      setError(null); // Réinitialiser l'erreur

      try {
        // Construire le prompt pour envoyer à Gemini AI
        const prompt = `You will be provided with a sentence. This sentence: "${sourceText}". Your task is to:
              - Detect what language the sentence is in
              - Translate the sentence into ${selectedLanguage}
              Do not return anything other than the translated sentence.`;

        // Envoi du message à l'API de Gemini via AIChatSession
        const result = await AIChatSession.sendMessage(prompt);

        // Récupérer la réponse et l'analyser
        const responseText = await result.response.text();
        const generatedSummary = JSON.parse(responseText);
        console.log(generatedSummary)

        // Vérifier si la réponse contient le texte traduit et le mettre à jour
        if (generatedSummary && generatedSummary.translation) {
          setTargetText(generatedSummary.translation);
        } else {
          setTargetText("Translation failed.");
        }
      } catch (error) {
        console.error("Error translating text:", error);
        setError(error.message); // Mettre à jour l'état d'erreur
        setTargetText(""); // Réinitialiser le texte cible en cas d'erreur
      } finally {
        setLoading(false); // Réinitialiser l'état de chargement
      }
    };

    // Délais pour simuler une pause avant l'envoi de la requête
    const timeoutId = setTimeout(() => {
      handleTranslate();
    }, 2000);

    return () => clearTimeout(timeoutId); // Nettoyer le timeout si le composant est démonté
  }, [sourceText, selectedLanguage]);

  return { targetText, loading, error }; // Retourner l'état de traduction, de chargement et d'erreur
};

export default useTranslate;
