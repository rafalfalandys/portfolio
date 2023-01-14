import { useCallback, useContext, useEffect } from "react";
import Context from "../store/context";

function useKey() {
  const ctx = useContext(Context);
  const { isModalVisible, nextImg, prevImg, hideModal } = ctx;

  const arrowHandler = useCallback(
    (e) => {
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    },
    [nextImg, prevImg]
  );

  const escHandler = useCallback(
    (e) => {
      if (e.key === "Escape") {
        hideModal();
      }
    },
    [hideModal]
  );

  useEffect(() => {
    if (isModalVisible) {
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
