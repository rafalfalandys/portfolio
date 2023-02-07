import { Fragment } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

import ImageBig from "./ImageBig";
import Interface from "./Interface";
import Overlay from "./Overlay";

function Modal() {
  const modalEl = (
    <div className={styles.modal}>
      <Overlay />
      <ImageBig />
      <Interface />
    </div>
  );

  const portalEl = document.getElementById("overlays");

  return <Fragment>{createPortal(modalEl, portalEl)}</Fragment>;
}

export default Modal;
