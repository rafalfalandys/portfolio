import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import styles from "./ToggleSwitch.module.scss";

function ToggleSwitch(props) {
  const { isEnglish, toggleLanguage } = useContext(ContextUI);

  const toggleLanguageHandler = () => toggleLanguage();

  return (
    <div
      className={`${styles.wrapper} ${
        props.homeEdition ? styles[`home-edition`] : ""
      }`}
      onClick={toggleLanguageHandler}
    >
      {props.homeEdition || (
        <div className={`${styles.switch} ${isEnglish ? styles.active : ""}`}>
          <div
            className={`${styles.slider} ${
              isEnglish ? styles.right : styles.left
            } `}
          ></div>
        </div>
      )}
      {props.homeEdition && (
        <li className={styles.words}>
          <span className={isEnglish ? styles.weak : ""}>Polski </span>{" "}
          &nbsp;/&nbsp;
          <span className={!isEnglish ? styles.weak : ""}>English </span>
        </li>
      )}
    </div>
  );
}

export default ToggleSwitch;
