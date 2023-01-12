import { useContext } from "react";
import Context from "../../../store/context";

import styles from "./ImageBig.module.scss";

function ImageBig(props) {
  const ctx = useContext(Context);

  const url = ctx.photosData[props.imgNo].url;

  return (
    <div className={styles.modal}>
      <img src={url} alt="big" />
    </div>
  );
}

export default ImageBig;
