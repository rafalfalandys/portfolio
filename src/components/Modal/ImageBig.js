import { useContext } from "react";
import Context from "../../store/context";

import styles from "./ImageBig.module.scss";

function ImageBig(props) {
  const ctx = useContext(Context);

  const url = ctx.curImages[props.imgNo].url;
  const type = ctx.curImages[props.imgNo].type;

  return (
    <div className={styles.container}>
      {!type && <img src={url} alt="big" />}
      {type && <video src={url} alt="big" controls autoPlay muted />}
    </div>
  );
}

export default ImageBig;
