import { useContext } from "react";
import Context from "../../store/context";

import styles from "./ImageBig.module.scss";

function ImageBig(props) {
  const ctx = useContext(Context);

  const url = ctx.curImages[props.imgNo].url;

  return (
    <div className={styles.container}>
      <img src={url} alt="big" />
    </div>
  );
}

export default ImageBig;