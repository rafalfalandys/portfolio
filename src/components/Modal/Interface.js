import { Fragment, useContext } from "react";
import Context from "../../store/context";
import styles from "./Interface.module.scss";

function Interface() {
  const ctx = useContext(Context);

  const dotEls = ctx.photosData.map((name, i) => {
    const isActive = i === ctx.curImg;
    return (
      <ion-icon
        name={`ellipse${isActive ? "" : "-outline"}`}
        size="small"
        key={`${i}`}
      ></ion-icon>
    );
  });

  const btnStyle = (whichBtn) => {
    if (whichBtn === "left")
      return `${styles.btn} ${styles.arrows} ${styles[`${whichBtn}`]} ${
        ctx.bumpLeft ? styles.bump : ""
      }`;

    if (whichBtn === "right")
      return `${styles.btn} ${styles.arrows} ${styles[`${whichBtn}`]} ${
        ctx.bumpRight ? styles.bump : ""
      }`;
  };

  return (
    <Fragment>
      <div className={styles.dots}>{dotEls}</div>
      <div className={btnStyle("left")} onClick={ctx.prevImg}>
        <ion-icon name="chevron-back"></ion-icon>
      </div>
      <div className={btnStyle("right")} onClick={ctx.nextImg}>
        <ion-icon name="chevron-forward"></ion-icon>
      </div>
      <div className={`${styles.close} ${styles.btn}`} onClick={ctx.hideModal}>
        <ion-icon name="close"></ion-icon>
      </div>
    </Fragment>
  );
}

export default Interface;
