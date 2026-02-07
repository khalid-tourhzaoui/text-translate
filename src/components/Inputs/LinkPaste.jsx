
import React, { useState } from "react";
import { Link as LinkIcon, ExternalLink } from "lucide-react";

const LinkPaste = ({ handleLinkPaste }) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setShowInput(!showInput)}
        className="group bg-white border-3 border-zinc-800 rounded-lg p-2 
                   shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] 
                   hover:-translate-y-0.5 transition-all"
      >
        <LinkIcon className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
      </button>

      {showInput && (
        <div className="absolute top-12 left-0 z-50 bg-white border-3 border-zinc-800 rounded-xl 
                        shadow-[rgba(0,0,0,0.9)_6px_6px_0px_0px] p-4 min-w-[300px]">
          <div className="flex items-center gap-2 mb-2">
            <ExternalLink className="w-4 h-4 text-orange-500" />
            <h4 className="font-black uppercase text-sm">Paste Link</h4>
          </div>
          <input
            type="url"
            id="link-input"
            className="w-full px-3 py-2 border-2 border-zinc-800 rounded-lg focus:outline-none 
                       focus:ring-2 focus:ring-orange-500 font-medium"
            placeholder="https://example.com"
            onChange={handleLinkPaste}
            onBlur={() => setTimeout(() => setShowInput(false), 200)}
          />
        </div>
      )}
    </div>
  );
};

export default LinkPaste;