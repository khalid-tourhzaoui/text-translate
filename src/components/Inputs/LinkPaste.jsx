import React from "react";
import { IconLink } from "@tabler/icons-react";

const LinkPaste = ({ handleLinkPaste }) => (
  <label htmlFor="link-input" className="cursor-pointer">
    <IconLink size={25} className="text-black mt-3" />
    <input
      type="text"
      id="link-input"
      className="hidden "
      onChange={handleLinkPaste}
    />
  </label>
);

export default LinkPaste;