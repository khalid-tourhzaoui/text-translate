// utils/languageMapping.js
export const languageMapping = {
  "English": "en",
  "Spanish": "es",
  "French": "fr",
  "German": "de",
  "Chinese": "zh",
  "Japanese": "ja",
  "Korean": "ko",
  "Italian": "it",
  "Portuguese": "pt",
  "Russian": "ru",
  "Arabic": "ar",
  "Hindi": "hi",
  "Turkish": "tr",
  "Polish": "pl",
  "Dutch": "nl",
  "Swedish": "sv",
  "Danish": "da",
  "Norwegian": "no",
  "Finnish": "fi"
};

export const getLanguageName = (code) => {
  const entry = Object.entries(languageMapping).find(([name, langCode]) => 
    langCode === code
  );
  return entry ? entry[0] : code;
};

export const getLanguageCode = (name) => {
  return languageMapping[name] || name;
};