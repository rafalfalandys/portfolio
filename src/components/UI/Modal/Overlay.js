import { useContext } from "react";
import Context from "../../../store/context";
import styles from "./Overlay.module.scss";

function Overlay() {
  const ctx = useContext(Context);

  const hideModalHandler = () => ctx.hideModal();

  return <div className={styles.overlay} onClick={hideModalHandler}></div>;
}

export default Overlay;
