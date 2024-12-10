import React from "react";
import { IconLanguage } from "@tabler/icons-react";

const LanguageSelector = ({
  selectedLanguage,
  setSelectedLanguage,
  languages,
}) => (
  <span
    className="cursor-pointer rounded-full space-x-1 pl-2 text-[#f87315] mt-3 flex items-center flex-row">
      <IconLanguage size={20} />
    <select
      value={selectedLanguage}
      onChange={(e) => setSelectedLanguage(e.target.value)}
      className="bg-white flex flex-row rounded-full px-3 py-1 text-dark"
    >
      {languages.map((language) => (
        <option key={language} value={language} className="rounded-full">
          {language}
        </option>
      ))}
    </select>
  </span>
);

export default LanguageSelector;
