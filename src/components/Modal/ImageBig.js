import { useContext } from "react";
import ContextProjects from "../../store/context-projects";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const { curImages, curImg } = useContext(ContextProjects);

  const url = curImages[curImg].url;
  const type = curImages[curImg].type;

  return (
    <div className={styles.container}>
      {/* {type !== "video" && <img src={url} alt="big" />}
      {type === "video" && (
        <video src={url} alt="big" controls autoPlay playsinline />
      )} */}
      {/* <iframe
        width="360px"
        height="240px"
        src="https://youtube.com/shorts/IQGd9C6v9Ac"
      ></iframe> */}
      <iframe
        // width="560"
        // height="315"
        // src="https://www.youtube.com/embed/Q3FUpkUTSOQ"
        src="https://youtube.com/embed/IQGd9C6v9Ac"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default ImageBig;
