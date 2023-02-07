import { Fragment, useContext, useState } from "react";
import ReactPlayer from "react-player";
import ContextProjects from "../../store/context-projects";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const { curImages, curImg, curImgHandler } = useContext(ContextProjects);

  //////////////////// slide gesture //////////////////////
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe || isRightSwipe)
      // add your conditional logic here
      isLeftSwipe
        ? curImgHandler(curImg === curImages.length ? 0 : curImg + 1)
        : curImgHandler(curImg === 0 ? curImages.length : curImg - 1);
  };
  //////////////////// slide gesture //////////////////////

  const url = curImages[curImg].url;
  const type = curImages[curImg].type;

  return (
    <Fragment>
      {type !== "youtube" && (
        <div
          className={styles.container}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {(!type || type === "img") && <img src={url} alt="big" />}
          {type === "video" && (
            <video src={url} alt="big" controls autoPlay playsinline />
          )}
        </div>
      )}
      {type === "youtube" && (
        <div
          className={`${styles.container} ${styles["container--youtube"]}`}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <ReactPlayer
            url={`https://youtube.com/embed/${url}`}
            playing={true}
            muted
            height="100%"
            width="100%"
            controls
          />
        </div>
      )}
    </Fragment>
  );
}

export default ImageBig;
