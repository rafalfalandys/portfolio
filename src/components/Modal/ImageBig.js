import { Fragment, useContext } from "react";
import ReactPlayer from "react-player";
import ContextProjects from "../../store/context-projects";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const { curImages, curImg } = useContext(ContextProjects);

  const url = curImages[curImg].url;
  const type = curImages[curImg].type;

  return (
    <Fragment>
      {type !== "youtube" && (
        <div className={styles.container}>
          {(!type || type === "img") && <img src={url} alt="big" />}
          {type === "video" && (
            <video src={url} alt="big" controls autoPlay playsinline />
          )}
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
}

export default ImageBig;
