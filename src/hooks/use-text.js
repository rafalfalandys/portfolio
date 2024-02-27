import { useContext } from "react";
import { textsPL, textsEN } from "../assets/texts";
import ContextUI from "../store/context-ui";

const useText = () => {
  const { isEnglish } = useContext(ContextUI);
  const text = isEnglish ? textsEN : textsPL;

  return text;
};

export default useText;
