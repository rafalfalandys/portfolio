import { useContext } from "react";
import Context from "../../store/context";

import styles from "./ImageBig.module.scss";

function ImageBig() {
  const ctx = useContext(Context);

  const url = ctx.curImages[ctx.curImg].url;
  const type = ctx.curImages[ctx.curImg].type;

  return (
    <div className={styles.container}>
      {!type && <img src={url} alt="big" />}
      {type && <video src={url} alt="big" controls autoPlay muted />}
    </div>
  );
}

export default ImageBig;
