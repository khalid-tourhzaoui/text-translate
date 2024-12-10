import React from "react";

const TextArea = ({ id, value, onChange, placeholder }) => (
  <textarea
    rows={5}
    id={id}
    className="py-2.5 px-4 border-none focus:outline-none block w-full border-5 
    rounded-lg bg-black text-white"
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default TextArea;