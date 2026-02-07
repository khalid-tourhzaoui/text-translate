
import React from "react";
import { Languages, ChevronDown } from "lucide-react";

const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => (
  <div className="relative group">
    <div className="bg-white border-3 border-zinc-800 rounded-lg shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] 
                    hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] hover:-translate-y-0.5 transition-all overflow-hidden">
      <div className="flex items-center gap-2 px-3 py-2">
        <Languages className="w-5 h-5 text-blue-500" />
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="bg-transparent font-black uppercase text-sm text-zinc-800 focus:outline-none cursor-pointer pr-6 appearance-none"
        >
          {languages.map((language) => (
            <option key={language} value={language} className="font-bold">
              {language}
            </option>
          ))}
        </select>
        <ChevronDown className="w-4 h-4 text-zinc-600 absolute right-2 pointer-events-none" />
      </div>
    </div>
  </div>
);

export default LanguageSelector;