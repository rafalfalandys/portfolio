import { Fragment, useContext } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./Interface.module.scss";

function Interface() {
  const { curImages, curImg, bumpLeft, bumpRight, prevImg, nextImg } =
    useContext(ContextProjects);

  const { hideModal } = useContext(ContextUI);

  const dotEls = curImages.map((_, i) => {
    const isActive = i === curImg;
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
        bumpLeft ? styles.bump : ""
      }`;

    if (whichBtn === "right")
      return `${styles.btn} ${styles.arrows} ${styles[`${whichBtn}`]} ${
        bumpRight ? styles.bump : ""
      }`;
  };

  return (
    <Fragment>
      <div className={styles.dots}>{dotEls}</div>
      <div className={btnStyle("left")} onClick={prevImg}>
        <ion-icon name="chevron-back"></ion-icon>
      </div>
      <div className={btnStyle("right")} onClick={nextImg}>
        <ion-icon name="chevron-forward"></ion-icon>
      </div>
      <div className={`${styles.close} ${styles.btn}`} onClick={hideModal}>
        <ion-icon name="close" size="large"></ion-icon>
      </div>
    </Fragment>
  );
}

export default Interface;
