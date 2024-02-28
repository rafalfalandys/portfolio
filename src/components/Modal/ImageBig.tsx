import { Fragment, useContext } from "react";
import ReactPlayer from "react-player";
import ContextProjects from "../../store/context-projects";

import styles from "./ImageBig.module.scss";

const ImageBig = () => {
  const { curImages, curImg } = useContext(ContextProjects);
  const { url, type } = curImages[curImg];

  return (
    <Fragment>
      {type !== "youtube" && (
        <div className={styles.container}>
          {(!type || type === "img") && <img src={url} alt="big" />}
          {type === "video" && <video src={url} controls autoPlay playsInline />}
        </div>
      )}
      {type === "youtube" && (
        <div className={`${styles.container} ${styles["container--youtube"]}`}>
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
};

export default ImageBig;
