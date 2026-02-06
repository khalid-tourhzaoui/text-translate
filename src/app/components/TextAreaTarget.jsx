import React from "react";
import { Rings } from "react-loader-spinner";
import TextArea from "./../../components/Inputs/TextArea";

function TextAreaTarget({ targetText, loading, selectedLanguage }) {
  return (
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
  );
}

export default TextAreaTarget;