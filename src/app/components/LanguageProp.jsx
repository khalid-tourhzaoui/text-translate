import React, { useState } from "react";
import LanguageSelector from "./../../components/Inputs/LanguageSelector";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";

function LanguageProp({ selectedLanguage, setSelectedLanguage, languages,targetText }) {
  const [userAction, setUserAction] = useState(null);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const handleCopyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // API moderne pour copier
      navigator.clipboard
        .writeText(targetText)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        })
        .catch((err) => {
          console.error("Failed to copy text: ", err);
          fallbackCopyToClipboard(targetText);
        });
    } else {
      // Utilisation d'une solution de secours pour les anciens navigateurs
      fallbackCopyToClipboard(targetText);
    }
  };

  // Fonction de secours pour copier le texte (fallback)
  const fallbackCopyToClipboard = (text) => {
    try {
      // Créer un élément textarea temporaire
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // Empêcher l'apparition de la boîte de dialogue
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";

      document.body.appendChild(textArea);
      textArea.select();

      // Exécuter la commande de copie
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback: Unable to copy text", err);
      alert("Failed to copy text to clipboard. Please copy manually.");
    }
  };

  const handleLike = () => {
    if (userAction === "like") {
      setUserAction(null);
    } else {
      setUserAction("like");
    }
  };

  const handleDislike = () => {
    if (userAction === "dislike") {
      setUserAction(null);
    } else {
      setUserAction("dislike");
    }
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    if (!favorite) {
      localStorage.setItem("favoriteTranslation", targetText);
    } else {
      localStorage.removeItem("favoriteTranslation");
    }
  };
  return (
    <div className="flex flex-row justify-between w-full">
      <span className="cursor-pointer flex items-center space-x-2 flex-row">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          languages={languages}
        />
        <IconVolume
          className="text-black mt-3"
          size={25}
          onClick={() => handleAudioPlayback(targetText)}
        />
      </span>
      <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
        <IconCopy
          size={25}
          aria-label="Copy text to clipboard"
          onClick={handleCopyToClipboard}
          className={`text-[#f87315] mt-3 ${copied ? "animate-bounce" : ""}`}
        />
        {copied && <span className="text-xs text-green-500 mt-3">Copied!</span>}
        {/* Icône Like */}
        <IconThumbUp
          size={28}
          onClick={handleLike}
          fill={userAction === "like" ? "#f87315" : "none"}
          color={userAction === "like" ? "#f87315" : "#000000"}
          className="cursor-pointer mt-3 text-black"
        />

        {/* Icône Dislike */}
        <IconThumbDown
          size={28}
          onClick={handleDislike}
          fill={userAction === "dislike" ? "#f87315" : "none"}
          color={userAction === "dislike" ? "#f87315" : "#000000"}
          className="cursor-pointer mt-3 text-black"
        />
        <IconStar
          size={25}
          onClick={handleFavorite}
          className="mt-3"
          fill={favorite ? "#f87315" : "none"}
          color={favorite ? "#f87315" : "#000000"}
        />
      </div>
    </div>
  );
}

export default LanguageProp;
