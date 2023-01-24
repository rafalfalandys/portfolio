import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import styles from "./Overlay.module.scss";

function Overlay() {
  const dispatch = useDispatch();

  const hideModalHandler = () => dispatch(uiActions.controlModal("hide"));

  return <div className={styles.overlay} onClick={hideModalHandler}></div>;
}

export default Overlay;
