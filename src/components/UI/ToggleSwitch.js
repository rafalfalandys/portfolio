import { useContext } from "react";
import Context from "../../store/context";
import styles from "./ToggleSwitch.module.scss";

function ToggleSwitch(props) {
  const ctx = useContext(Context);

  const toggleLanguageHandler = () => ctx.toggleLanguage();

  return (
    <div
      className={`${styles.wrapper} ${
        props.homeEdition ? styles[`home-edition`] : ""
      }`}
      onClick={toggleLanguageHandler}
    >
      {props.homeEdition || (
        <div
          className={`${styles.switch} ${ctx.isEnglish ? styles.active : ""}`}
        >
          <div
            className={`${styles.slider} ${
              ctx.isEnglish ? styles.right : styles.left
            } `}
          ></div>
        </div>
      )}
      {props.homeEdition && (
        <li className={styles.words}>
          <span className={ctx.isEnglish ? styles.weak : ""}>Polski </span>{" "}
          &nbsp;/&nbsp;
          <span className={!ctx.isEnglish ? styles.weak : ""}>English </span>
        </li>
      )}
    </div>
  );
}

export default ToggleSwitch;
