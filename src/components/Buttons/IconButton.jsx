
import React from "react";

const IconButton = ({ Icon, onClick, className, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group bg-white border-3 border-zinc-800 rounded-lg p-2 
               shadow-[rgba(0,0,0,0.9)_2px_3px_0px_0px] hover:shadow-[rgba(0,0,0,0.9)_4px_5px_0px_0px] 
               hover:-translate-y-0.5 transition-all
               disabled:opacity-50 disabled:cursor-not-allowed
               ${className || ""}`}
  >
    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
  </button>
);

export default IconButton;