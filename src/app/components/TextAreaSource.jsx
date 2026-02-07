
import React from "react";
import TextArea from "@/components/Inputs/TextArea";
import { IconVolume } from "@tabler/icons-react";
import FileUpload from "@/components/Inputs/FileUpload";
import LinkPaste from "@/components/Inputs/LinkPaste";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import { rtfToText } from "@/utils/rtfToText";
import { FileText, Mic, Volume2, Link as LinkIcon, Zap } from "lucide-react";

function TextAreaSource({ sourceText, setSourceText }) {
  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result;
        if (typeof rtfContent === "string") {
          const text = rtfToText(rtfContent);
          setSourceText(text);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleLinkPaste = async (e) => {
    const link = e.target.value;
    try {
      const response = await fetch(link);
      const data = await response.text();
      setSourceText(data);
    } catch (error) {
      console.error("Error fetching link content:", error);
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

  const charCount = sourceText.length;
  const maxChars = 2000;
  const charPercentage = (charCount / maxChars) * 100;

  return (
    <div className="relative z-10 flex flex-col gap-4 p-6 border-4 border-zinc-800 rounded-3xl 
                    shadow-[rgba(0,0,0,0.9)_0px_12px_0px_0px] bg-gradient-to-br from-orange-100 via-yellow-100 to-pink-100
                    transition-all hover:shadow-[rgba(0,0,0,0.9)_0px_16px_0px_0px] hover:-translate-y-1">
      {/* Header */}
      <div className="bg-white border-4 border-zinc-800 rounded-xl px-4 py-3 shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px]">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-black uppercase flex items-center gap-2">
            <FileText className="w-5 h-5 text-orange-500" />
            Source Text
          </h3>
          <span className="text-xs font-mono font-bold text-zinc-600">
            Input language
          </span>
        </div>
      </div>

      {/* Text Area */}
      <div className="bg-white border-3 border-zinc-800 rounded-xl shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] overflow-hidden">
        <TextArea
          id="source-language"
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          placeholder="Type or paste your text here..."
        />
      </div>

      {/* Actions Bar */}
      <div className="flex flex-row justify-between items-center">
        {/* Left Actions */}
        <div className="flex gap-2">
          <SpeechRecognitionComponent setSourceText={setSourceText} />
          
          <button
            onClick={() => handleAudioPlayback(sourceText)}
            className="group bg-white border-3 border-zinc-800 rounded-lg p-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                       hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!sourceText}
          >
            <Volume2 className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
          </button>

          <FileUpload handleFileUpload={handleFileUpload} />
          <LinkPaste handleLinkPaste={handleLinkPaste} />
        </div>

        {/* Character Count */}
        <div className="bg-white border-3 border-zinc-800 rounded-lg px-4 py-2 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px]">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-black ${charCount > maxChars ? 'text-red-600' : 'text-zinc-700'}`}>
              {charCount}
            </span>
            <span className="text-xs font-bold text-zinc-500">/</span>
            <span className="text-xs font-bold text-zinc-500">{maxChars}</span>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-zinc-200 rounded-full mt-1 overflow-hidden">
            <div 
              className={`h-full transition-all duration-300 ${
                charCount > maxChars ? 'bg-red-500' : 'bg-gradient-to-r from-orange-400 to-yellow-400'
              }`}
              style={{ width: `${Math.min(charPercentage, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TextAreaSource;