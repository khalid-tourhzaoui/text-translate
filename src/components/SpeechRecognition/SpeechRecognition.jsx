
import React, { useEffect } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Mic, MicOff } from "lucide-react";

const SpeechRecognitionComponent = ({ setSourceText }) => {
  const { transcript, listening } = useSpeechRecognition();

  useEffect(() => {
    setSourceText(transcript);
  }, [transcript, setSourceText]);

  const handleVoiceRecording = () => {
    if (listening) {
      SpeechRecognition.stopListening();
    } else {
      SpeechRecognition.startListening({ continuous: true });
    }
  };

  return (
    <button
      onClick={handleVoiceRecording}
      className={`group relative bg-white border-3 border-zinc-800 rounded-lg p-2 
                 shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] 
                 hover:-translate-y-0.5 transition-all
                 ${listening ? "bg-red-100 animate-pulse" : ""}`}
    >
      {listening ? (
        <>
          <MicOff className="w-5 h-5 text-red-500" />
          <span className="absolute -top-2 -right-2 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
        </>
      ) : (
        <Mic className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
      )}
    </button>
  );
};

export default SpeechRecognitionComponent;