import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import styles from "./Overlay.module.scss";

const Overlay = () => {
  const { hideModal } = useContext(ContextUI);

  const hideModalHandler = () => hideModal();

  return <div className={styles.overlay} onClick={hideModalHandler}></div>;
};

export default Overlay;
