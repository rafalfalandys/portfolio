import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import Context from "../../store/context";
import styles from "./Modal.module.scss";

function Modal(props) {
  const ctx = useContext(Context);

  const hideModalHandler = () => ctx.hideModal();

  const modalEl = (
    <div
      className={`${styles.overlay} ${ctx.isModalVisible ? "" : styles.hidden}`}
      onClick={hideModalHandler}
    >
      <div className={styles.modal}>
        <div className={styles.container}>
          <img src={ctx.curImg} alt="big" />
        </div>
      </div>
    </div>
  );

  if (ctx.isModalVisible) document.body.style.overflow = "hidden";
  if (!ctx.isModalVisible) document.body.style.overflow = "unset";

  const portalEl = document.getElementById("overlays");

  return (
    <Fragment>
      {/* {createPortal(overlayEl, portalEl)} */}
      {createPortal(modalEl, portalEl)}
    </Fragment>
  );
}

export default Modal;
