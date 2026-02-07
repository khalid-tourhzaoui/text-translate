
import React, { useState } from "react";
import LanguageSelector from "./../../components/Inputs/LanguageSelector";
import {
  Copy,
  Star,
  ThumbsDown,
  ThumbsUp,
  Volume2,
  Check,
  Zap,
  Heart
} from "lucide-react";

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
    setUserAction(userAction === "like" ? null : "like");
  };

  const handleDislike = () => {
    setUserAction(userAction === "dislike" ? null : "dislike");
  };

  const handleFavorite = () => {
    setFavorite(!favorite);
    console.log(favorite ? "Removed from favorites" : "Added to favorites:", targetText);
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-3 w-full">
      {/* Left Side - Language Selector & Audio */}
      <div className="flex items-center gap-2">
        <LanguageSelector
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          languages={languages}
        />
        
        <button
          onClick={() => handleAudioPlayback(targetText)}
          disabled={!targetText}
          className="group bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                     hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Volume2 className="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Right Side - Actions */}
      <div className="flex items-center gap-2">
        {/* Copy Button */}
        <button
          onClick={handleCopyToClipboard}
          disabled={!targetText}
          className="group relative bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                     hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {copied ? (
            <Check className="w-5 h-5 text-green-500 animate-bounce" />
          ) : (
            <Copy className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
          )}
          {copied && (
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-green-500 text-white text-xs font-black uppercase px-2 py-1 rounded border-2 border-zinc-800">
              Copied!
            </span>
          )}
        </button>

        {/* Like Button */}
        <button
          onClick={handleLike}
          disabled={!targetText}
          className={`group bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                     hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed
                     ${userAction === "like" ? "bg-green-100" : ""}`}
        >
          <ThumbsUp 
            className={`w-5 h-5 transition-all ${
              userAction === "like" 
                ? "fill-green-500 text-green-500 scale-110" 
                : "text-zinc-600 group-hover:scale-110"
            }`}
          />
        </button>

        {/* Dislike Button */}
        <button
          onClick={handleDislike}
          disabled={!targetText}
          className={`group bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                     hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed
                     ${userAction === "dislike" ? "bg-red-100" : ""}`}
        >
          <ThumbsDown 
            className={`w-5 h-5 transition-all ${
              userAction === "dislike" 
                ? "fill-red-500 text-red-500 scale-110" 
                : "text-zinc-600 group-hover:scale-110"
            }`}
          />
        </button>

        {/* Favorite Button */}
        <button
          onClick={handleFavorite}
          disabled={!targetText}
          className={`group bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                     hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                     disabled:opacity-50 disabled:cursor-not-allowed
                     ${favorite ? "bg-pink-100" : ""}`}
        >
          <Star 
            className={`w-5 h-5 transition-all ${
              favorite 
                ? "fill-yellow-400 text-yellow-400 scale-110 animate-pulse" 
                : "text-zinc-600 group-hover:scale-110"
            }`}
          />
        </button>
      </div>
    </div>
  );
}

export default LanguageProp;