import { useSelector } from "react-redux";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const { curImages, curImg } = useSelector((state) => state.projects);

  const url = curImages[curImg].url;
  const type = curImages[curImg].type;

  return (
    <div className={styles.container}>
      {!type && <img src={url} alt="big" />}
      {type && <video src={url} alt="big" controls autoPlay muted />}
    </div>
  );
}

export default ImageBig;
