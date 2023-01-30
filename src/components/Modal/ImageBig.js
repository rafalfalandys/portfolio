import { useContext } from "react";
import ContextProjects from "../../store/context-projects";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const { curImages, curImg } = useContext(ContextProjects);

  const url = curImages[curImg].url;
  const type = curImages[curImg].type;

  return (
    <div className={styles.container}>
      {type !== "video" && <img src={url} alt="big" />}
      {type === "video" && (
        <video src={url} alt="big" controls autoPlay muted />
      )}
    </div>
  );
}

export default ImageBig;
