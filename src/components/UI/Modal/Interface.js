import { Fragment, useContext, useEffect, useState } from "react";
import Context from "../../../store/context";
import styles from "./Interface.module.scss";

function Interface() {
  const ctx = useContext(Context);

  const dotEls = ctx.photosData.map((photo) => <p>o</p>);

  const btnStyle = (whichBtn) => {
    if (whichBtn === "left")
      return `${styles.btn} ${styles[`${whichBtn}`]} ${
        ctx.bumpLeft ? styles.bump : ""
      }`;

    if (whichBtn === "right")
      return `${styles.btn} ${styles[`${whichBtn}`]} ${
        ctx.bumpRight ? styles.bump : ""
      }`;
  };

  return (
    <Fragment>
      <div className={btnStyle("left")} onClick={ctx.prevImg}>
        <ion-icon name="chevron-back"></ion-icon>
      </div>
      <div className={styles.dots}>{dotEls}</div>
      <div className={btnStyle("right")} onClick={ctx.nextImg}>
        <ion-icon name="chevron-forward"></ion-icon>
      </div>
    </Fragment>
  );
}

export default Interface;
