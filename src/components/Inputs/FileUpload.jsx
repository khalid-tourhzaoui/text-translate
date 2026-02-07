
import React from "react";
import { Paperclip, Upload } from "lucide-react";

const FileUpload = ({ handleFileUpload }) => (
  <label 
    htmlFor="file-upload" 
    className="group cursor-pointer bg-white border-3 border-zinc-800 rounded-lg p-2 
               shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] 
               hover:-translate-y-0.5 transition-all"
  >
    <Paperclip className="w-5 h-5 text-orange-500 group-hover:scale-110 group-hover:rotate-12 transition-all" />
    <input
      type="file"
      id="file-upload"
      onChange={handleFileUpload}
      accept=".txt,.rtf,.doc,.docx"
      className="hidden"
    />
  </label>
);

export default FileUpload;