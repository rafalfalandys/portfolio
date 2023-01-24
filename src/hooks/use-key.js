import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../store/projects-slice";
import { uiActions } from "../store/ui-slice";

function useKey() {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.ui);

  const arrowHandler = useCallback(
    (e) => {
      if (e.key === "ArrowRight") dispatch(projectsActions.nextImage());
      if (e.key === "ArrowLeft") dispatch(projectsActions.previousImage());
    },
    [dispatch]
  );

  const escHandler = useCallback(
    (e) => {
      if (e.key === "Escape") dispatch(uiActions.controlModal("hide"));
    },
    [dispatch]
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
