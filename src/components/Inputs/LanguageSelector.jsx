import React from "react";
import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className="bg-transparent font-black uppercase text-sm text-zinc-800 border-none focus:ring-0 focus:ring-offset-0 h-auto p-0 w-[140px]">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent className="border-3 border-zinc-800 shadow-[rgba(0,0,0,0.9)_4px_4px_0px_0px]">
            {languages.map((language) => (
              <SelectItem 
                key={language} 
                value={language}
                className="font-bold uppercase text-sm focus:bg-orange-100 cursor-pointer"
              >
                {language}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  </div>
);

export default LanguageSelector;