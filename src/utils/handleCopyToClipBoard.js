import copy from "copy-text-to-clipboard";

export const handleCopyToClipBoard = (text, setMessage) => {
  copy(text);
  setMessage("Copied to clipboard.");
};
