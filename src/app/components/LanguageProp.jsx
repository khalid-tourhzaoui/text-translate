// components/LanguageProp.js
import React, { useState } from "react";
import LanguageSelector from "./../../components/Inputs/LanguageSelector";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";

function LanguageProp({
  selectedLanguage,
  setSelectedLanguage,
  languages,
  targetText,
}) {
  const [userAction, setUserAction] = useState(null);
  const [copied, setCopied] = useState(false);
  const [favorite, setFavorite] = useState(false);

  const handleCopyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
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
      fallbackCopyToClipboard(targetText);
    }
  };

  const fallbackCopyToClipboard = (text) => {
    try {
      const textArea = document.createElement("textarea");
      textArea.value = text;
      textArea.style.position = "absolute";
      textArea.style.left = "-9999px";

      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Fallback: Unable to copy text", err);
      alert("Failed to copy text to clipboard. Please copy manually.");
    }
  };

  const handleAudioPlayback = (text) => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
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
    // Utilisation d'un état en mémoire au lieu de localStorage
    // car localStorage n'est pas supporté dans les artifacts Claude
    if (!favorite) {
      console.log("Translation added to favorites:", targetText);
    } else {
      console.log("Translation removed from favorites");
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
        
        <IconThumbUp
          size={28}
          onClick={handleLike}
          fill={userAction === "like" ? "#f87315" : "none"}
          color={userAction === "like" ? "#f87315" : "#000000"}
          className="cursor-pointer mt-3 text-black"
        />

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