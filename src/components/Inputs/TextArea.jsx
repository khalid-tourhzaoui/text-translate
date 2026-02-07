
import React from "react";

const TextArea = ({ id, value, onChange, placeholder, disabled, className }) => (
  <textarea
    rows={6}
    id={id}
    className={`py-4 px-4 border-none focus:outline-none focus:ring-2 focus:ring-orange-500 block w-full 
                rounded-xl bg-white text-zinc-800 font-medium placeholder:text-zinc-400 resize-none
                transition-all ${className || ""}`}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    disabled={disabled}
  />
);

export default TextArea;