import { Fragment, useCallback, useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import Context from "../../store/context";
import ImageBig from "./ImageBig";
import styles from "./Modal.module.scss";

function Modal() {
  const ctx = useContext(Context);

  const hideModalHandler = useCallback(() => ctx.hideModal(), []);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape" && ctx.isModalVisible) {
        hideModalHandler();
        document.removeEventListener("keydown", escHandler);
        return;
      }
    };
    document.addEventListener("keydown", escHandler);
  }, [ctx, hideModalHandler]);

  useEffect(() => {
    const arrowHandler = (e) => {
      console.log(e.key);
      if (e.key === "ArrowRight") ctx.nextImg();
      if (e.key === "ArrowLeft") ctx.prevImg();
    };

    document.addEventListener("keydown", arrowHandler);
  }, []);

  const modalEl = (
    <Fragment>
      <div
        className={`${styles.overlay} ${
          ctx.isModalVisible ? "" : styles.hidden
        }`}
        onClick={hideModalHandler}
      ></div>
      <div
        className={`${styles.modal} ${ctx.isModalVisible ? "" : styles.hidden}`}
      >
        <ImageBig imgNo={ctx.curImg} />
      </div>
    </Fragment>
  );

  if (ctx.isModalVisible) document.body.style.overflow = "hidden";
  if (!ctx.isModalVisible) document.body.style.overflow = "unset";

  const portalEl = document.getElementById("overlays");

  return <Fragment>{createPortal(modalEl, portalEl)}</Fragment>;
}

export default Modal;
