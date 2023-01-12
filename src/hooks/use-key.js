import { useContext, useEffect } from "react";
import Context from "../store/context";

function useKey() {
  const ctx = useContext(Context);

  const escHandler = useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape" && ctx.isModalVisible) {
        ctx.hideModal();
        document.removeEventListener("keydown", escHandler);
        return;
      }
    };
    document.addEventListener("keydown", escHandler);
  }, [ctx]);

  const arrowHandler = useEffect(() => {
    const arrowHandler = (e) => {
      if (e.key === "ArrowRight") ctx.nextImg();
      if (e.key === "ArrowLeft") ctx.prevImg();
    };

    document.addEventListener("keydown", arrowHandler);
  }, []);

  // return {
  //   escHandler,
  //   arrowHandler,
  // };
}

export default useKey;
