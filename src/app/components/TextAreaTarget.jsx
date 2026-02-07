import React from "react";
import TextArea from "./../../components/Inputs/TextArea";
import { CheckCircle2 } from "lucide-react";
import { Hourglass } from 'ldrs/react'
import 'ldrs/react/Hourglass.css'

function TextAreaTarget({ targetText, loading, selectedLanguage }) {
  return (
    <div className="relative bg-white border-3 border-zinc-800 rounded-xl shadow-[rgba(0,0,0,0.9)_0px_4px_0px_0px] overflow-hidden">
      {/* Loading Overlay */}
      {loading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/90 backdrop-blur-sm z-20 border-3 border-zinc-800 rounded-xl">
          <div className="bg-orange-100 border-3 border-zinc-800 rounded-xl p-6 shadow-[rgba(0,0,0,0.9)_4px_4px_0px_0px]">
            <div className="flex justify-center mb-3">
             
              <Hourglass
  size="40"
  bgOpacity="0.1"
  speed="1.75"
  color="black" 
/>
            </div>
            <p className="text-sm font-black uppercase text-zinc-800">Translating...</p>
          </div>
        </div>
      )}

      {/* Success Indicator */}
      {!loading && targetText && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-green-100 border-2 border-green-500 rounded-full p-1">
            <CheckCircle2 className="w-4 h-4 text-green-600" />
          </div>
        </div>
      )}

      <TextArea
        id="target-language"
        value={targetText}
        onChange={() => {}}
        placeholder={`Translation will appear here (${selectedLanguage})...`}
        disabled={loading}
        className={`w-full transition-all ${
          loading ? "cursor-not-allowed opacity-50" : ""
        }`}
      />
    </div>
  );
}

export default TextAreaTarget;