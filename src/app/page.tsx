"use client";
import "regenerator-runtime/runtime";
import React, { useState, ChangeEvent } from "react";
// import { BackgroundLines } from "@/components/ui/background-lines";
import TextArea from "@/components/Inputs/TextArea";
import {IconCopy,IconStar,IconThumbDown,IconThumbUp,IconVolume} from "@tabler/icons-react";
import SpeechRecognitionComponent from "./../components/SpeechRecognition/SpeechRecognition";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import useTranslate from './../hooks/useTranslate';
import LanguageSelector from './../components/Inputs/LanguageSelector';
import { rtfToText } from './../utils/rtfToText';
import FileUpload from './../components/Inputs/FileUpload';
import LinkPaste from './../components/Inputs/LinkPaste';
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
  const [selectedLanguage, setSelectedLanguage] = useState<string>("Spanish");

  const targetText = useTranslate(sourceText, selectedLanguage);

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
    navigator.clipboard.writeText(targetText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
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
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };
  return (
    <div className="w-full bg-black bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative overflow-hidden h-screen">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
          <div className="text-center">
            {/* <BackgroundBeamsWithCollision>
              <BackgroundLines> */}
                <h1 className="text-4xl sm:text-6xl font-bold  text-neutral-200">
                  Smart Language{" "}
                  <span className="text-[#ccc]">Converter</span>
                </h1>
                <p className="mt-3 text-neutral-400">
                  Smart Language Converter: Innovating Communication Across
                  Borders.
                </p>
                <div className="mt-7 sm:mt-12 mx-auto max-w-3xl relative">
                  <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border-2 rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
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
                            className="text-[#ccc] mt-3"
                            size={22}
                            onClick={() => handleAudioPlayback(sourceText)}
                          />
                          <FileUpload handleFileUpload={handleFileUpload} />
                          <LinkPaste handleLinkPaste={handleLinkPaste} />
                        </span>
                        <span className="text-sm pr-4 text-white">
                          {sourceText.length} / 2000
                        </span>
                      </div>
                    </div>
                    {/* **************************************************************************** */}
                    <div className="relative z-10 flex flex-col space-x-3 p-3  border rounded-lg shadow-lg  bg-neutral-900 border-neutral-700 shadow-gray-900/20">
                      <TextArea
                        id="target-language"
                        value={targetText}
                        onChange={() => {}}
                        placeholder="Target Language"
                      />
                      <div className="flex flex-row justify-between w-full">
                        <span className="cursor-pointer flex items-center space-x-2 flex-row">
                          <LanguageSelector
                            selectedLanguage={selectedLanguage}
                            setSelectedLanguage={setSelectedLanguage}
                            languages={languages}
                          />
                          <IconVolume
                            className="text-[#ccc] mt-3"
                            size={22}
                            onClick={() => handleAudioPlayback(targetText)}
                          />
                        </span>
                        <div className="flex flex-row items-center space-x-2 pr-4 cursor-pointer">
                          <IconCopy 
                            size={22} 
                            onClick={handleCopyToClipboard}
                            className="text-[#ccc] mt-3"
                          />
                          {copied && (
                            <span className="text-xs text-green-500 mt-3">Copied!</span>
                          )}
                            {/* Icône Like */}
                            <IconThumbUp
                              size={22}
                              onClick={handleLike}
                              fill={userAction === "like" ? "#f87315" : "none"} // Remplir si "like"
                              color={userAction === "like" ? "#f87315" : "#ccc"} // Couleur de contour
                              className="cursor-pointer mt-3"
                            />

                            {/* Icône Dislike */}
                            <IconThumbDown
                              size={22}
                              onClick={handleDislike}
                              fill={userAction === "dislike" ? "#f87315" : "none"} // Remplir si "dislike"
                              color={userAction === "dislike" ? "#f87315" : "#ccc"} // Couleur de contour
                              className="cursor-pointer mt-3"
                            />
                          <IconStar
                              size={22}
                              onClick={handleFavorite}
                              className="mt-3"
                              fill={favorite ? "#f87315" : "none"} // Remplit l'icône si "favorite" est vrai
                              color={favorite ? "#f87315" : "#ccc"} // Couleur des contours
                            />

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </BackgroundLines>
            </BackgroundBeamsWithCollision> */}
          </div>
        </div>
      </div>
    </div>
  );
}
