import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import { uiActions } from "../../store/ui-slice";
import styles from "./Interface.module.scss";

function Interface() {
  const dispatch = useDispatch();
  const { curImages, curImg, bumpLeft, bumpRight } = useSelector(
    (state) => state.projects
  );

  const onPrevImgHandler = () => dispatch(projectsActions.previousImage());
  const onNextImgHandler = () => dispatch(projectsActions.nextImage());
  const hideModalHandler = () => dispatch(uiActions.controlModal("hide"));

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
      <div className={btnStyle("left")} onClick={onPrevImgHandler}>
        <ion-icon name="chevron-back"></ion-icon>
      </div>
      <div className={btnStyle("right")} onClick={onNextImgHandler}>
        <ion-icon name="chevron-forward"></ion-icon>
      </div>
      <div
        className={`${styles.close} ${styles.btn}`}
        onClick={hideModalHandler}
      >
        <ion-icon name="close" size="large"></ion-icon>
      </div>
    </Fragment>
  );
}

export default Interface;
