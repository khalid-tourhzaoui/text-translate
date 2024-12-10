"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent,useEffect } from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { Rings } from "react-loader-spinner";
import TextArea from "@/components/Inputs/TextArea";
import {
  IconCopy,
  IconStar,
  IconThumbDown,
  IconThumbUp,
  IconVolume,
} from "@tabler/icons-react";
import SpeechRecognitionComponent from "./../components/SpeechRecognition/SpeechRecognition";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import useTranslate from "./../hooks/useTranslate";
import LanguageSelector from "./../components/Inputs/LanguageSelector";
import { rtfToText } from "./../utils/rtfToText";
import FileUpload from "./../components/Inputs/FileUpload";
import LinkPaste from "./../components/Inputs/LinkPaste";
import CategoryLinks from "@/components/categoryLinks";
import Swal from "sweetalert2"; 
import "react-toastify/dist/ReactToastify.css";
import SvgDecorations from "@/components/SvgDecorations";
export default function Home() {
  const [sourceText, setSourceText] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [favorite, setFavorite] = useState<boolean>(false);
  const [languages] = useState<string[]>([
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
  ]);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("en");

  const { targetText, loading ,error } = useTranslate(sourceText, selectedLanguage);
  console.log(targetText);

  const [userAction, setUserAction] = useState(null); // 'like', 'dislike', ou null

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result as string;
        const text = rtfToText(rtfContent);
        setSourceText(text);
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e: ChangeEvent<HTMLInputElement>) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
    }
  };

 
  const handleCopyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      // API moderne pour copier
      navigator.clipboard.writeText(targetText)
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

  const handleAudioPlayback = (text: string) => {
    if (!window.speechSynthesis) {
      console.error("Speech synthesis is not supported in this browser.");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  useEffect(() => {
    if (error) {
      // Afficher l'erreur avec SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error, // Le message d'erreur
        confirmButtonText: 'OK',
      });
    }
  }, [error]); 
  return (
    <div className="w-full bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            <BackgroundBeamsWithCollision>
              <BackgroundLines>
                <h1 className="text-4xl sm:text-6xl font-bold  text-neutral-200">
                  Smart Language <span className="text-[#f87315]">Converter</span>
                </h1>
                <p className="mt-3 text-neutral-400">
                  Smart Language Converter: Innovating Communication Across
                  Borders.
                </p>
                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border-2 rounded-lg shadow-lg bg-white border-neutral-700 shadow-gray-900/20">
                      <TextArea
                        id="source-language"
                        value={sourceText}
                        onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                          setSourceText(e.target.value)
                        }
                        placeholder="Source Language"
                      />
                      <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex space-x-2 flex-row">
                          <SpeechRecognitionComponent
                            setSourceText={setSourceText}
                          />
                          <IconVolume
                            className="text-black mt-3"
                            size={25}
                            onClick={() => handleAudioPlayback(sourceText)}
                          />
                          <FileUpload handleFileUpload={handleFileUpload} />
                          <LinkPaste handleLinkPaste={handleLinkPaste} />
                        </span>
                        <span className="text-sm pr-4 pt-2 text-white">
                          {sourceText.length} / 2000
                        </span>
                      </div>
                    </div>
                    {/* **************************************************************************** */}
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-white border-neutral-700 shadow-gray-900/20">
                      <div className="relative">
                        {loading && (
                          <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 z-10">
                            <Rings
                              height="50"
                              width="50"
                              color="#4fa94d"
                              radius="6"
                              ariaLabel="rings-loading"
                            />
                          </div>
                        )}
                        <TextArea
                          id="target-language"
                          value={targetText}
                          onChange={() => {}}
                          placeholder={`Translated Text (${selectedLanguage})`}
                          disabled={loading} 
                          className={`w-full h-32 p-3 rounded-lg ${
                            loading ? "cursor-not-allowed" : "bg-white"
                          } text-white`}
                        />
                      </div>
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
                            className={`text-[#f87315] mt-3 ${
                              copied ? "animate-bounce" : ""
                            }`}
                          />
                          {copied && (
                            <span className="text-xs text-green-500 mt-3">
                              Copied!
                            </span>
                          )}
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
                    </div>
                  </div>
                  <SvgDecorations />
                </div>
                <CategoryLinks />
              </BackgroundLines>
            </BackgroundBeamsWithCollision>
          </div>
        </div>
      </div>
    </div>
  );
}
