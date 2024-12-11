import React from "react";
import TextArea from "@/components/Inputs/TextArea";
import {IconVolume} from "@tabler/icons-react";
import FileUpload from "@/components/Inputs/FileUpload";
import LinkPaste from "@/components/Inputs/LinkPaste";
import SpeechRecognitionComponent from "@/components/SpeechRecognition/SpeechRecognition";
import { rtfToText } from "@/utils/rtfToText";
function TextAreaSource({sourceText, setSourceText}) {
    
    const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const rtfContent = reader.result;
        if (typeof rtfContent === 'string') {
          const text = rtfToText(rtfContent);
          setSourceText(text);
        }
        const text = rtfToText(rtfContent);
        setSourceText(text);
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
  return (
    <div className="relative z-10 flex flex-col space-x-3 p-3  border-2 rounded-lg shadow-lg bg-white border-neutral-700 shadow-gray-900/20">
      <TextArea
        id="source-language"
        value={sourceText}
        onChange={(e) =>
          setSourceText(e.target.value)
        }
        placeholder="Source Language"
      />
      <div className="flex flex-row justify-between w-full">
        <span className="cursor-pointer flex space-x-2 flex-row">
          <SpeechRecognitionComponent setSourceText={setSourceText} />
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
  );
}

export default TextAreaSource;
