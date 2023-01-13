import { useCallback, useContext, useEffect } from "react";
import Context from "../store/context";

function useKey() {
  const ctx = useContext(Context);
  const { isModalVisible } = ctx;
  const arrowHandler = useCallback((e) => {
    if (e.key === "ArrowRight") ctx.nextImg();
    if (e.key === "ArrowLeft") ctx.prevImg();
  }, []);
  const escHandler = useCallback((e) => {
    if (e.key === "Escape") {
      ctx.hideModal();
    }
  }, []);
  useEffect(() => {
    console.log(isModalVisible);
    if (isModalVisible) {
      console.log("added");
      document.addEventListener("keydown", escHandler);
      document.addEventListener("keydown", arrowHandler);
    }
    if (!isModalVisible) {
      document.removeEventListener("keydown", escHandler);
      document.removeEventListener("keydown", arrowHandler);
    }
  }, [isModalVisible, escHandler, arrowHandler]);
}

export default useKey;
