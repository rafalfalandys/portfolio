import { Fragment, useContext } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./Interface.module.scss";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Interface = () => {
  const { curImages, curImg, bumpLeft, bumpRight, prevImg, nextImg } = useContext(ContextProjects);

  const { hideModal } = useContext(ContextUI);

  const dotEls = curImages.map((_, i) => {
    const isActive = i === curImg;
    return <div className={`${styles.dot} ${isActive ? styles.fill : ""}`} key={`${i}`}></div>;
  });

  const btnStyle = (whichBtn: "left" | "right") => {
    if (whichBtn === "left")
      return `${styles.btn} ${styles.arrows} ${styles[`${whichBtn}`]} ${bumpLeft ? styles.bump : ""}`;

    if (whichBtn === "right")
      return `${styles.btn} ${styles.arrows} ${styles[`${whichBtn}`]} ${bumpRight ? styles.bump : ""}`;
  };

  return (
    <Fragment>
      <div className={styles.dots}>{dotEls}</div>
      <div className={btnStyle("left")} onClick={prevImg}>
        <div className={styles.icon}>
          <ChevronLeftIcon />
        </div>
      </div>
      <div className={btnStyle("right")} onClick={nextImg}>
        <div className={styles.icon}>
          <ChevronRightIcon />
        </div>
      </div>
      <div className={`${styles.close} ${styles.btn}`} onClick={hideModal}>
        <div className={styles.icon}>
          <XMarkIcon />
        </div>
      </div>
    </Fragment>
  );
};

export default Interface;
