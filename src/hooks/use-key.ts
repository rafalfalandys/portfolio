import { useCallback, useContext, useEffect } from "react";
import ContextProjects from "../store/context-projects";
import ContextUI from "../store/context-ui";

const useKey = () => {
  const { isModalVisible, hideModal } = useContext(ContextUI);
  const { nextImg, prevImg } = useContext(ContextProjects);

  const arrowHandler = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImg();
      if (e.key === "ArrowLeft") prevImg();
    },
    [nextImg, prevImg]
  );

  const escHandler = useCallback(
    (e: KeyboardEvent) => {
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
};

export default useKey;
