import { Fragment, useContext } from "react";
import { createPortal } from "react-dom";
import Context from "../../store/context";

import styles from "./Modal.module.scss";

import ImageBig from "./ImageBig";
import Interface from "./Interface";
import Overlay from "./Overlay";

function Modal() {
  const ctx = useContext(Context);

  //   if (ctx.isModalVisible) document.body.style.overflow = "hidden";
  //   if (!ctx.isModalVisible) document.body.style.overflow = "unset";

  const modalEl = (
    <div className={styles.modal}>
      <Overlay />
      <ImageBig imgNo={ctx.curImg} />
      <Interface />
    </div>
  );

  const portalEl = document.getElementById("overlays");

  return <Fragment>{createPortal(modalEl, portalEl)}</Fragment>;
}

export default Modal;
