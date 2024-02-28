import { useContext } from "react";
import ContextUI from "../../store/context-ui";
import styles from "./ToggleSwitch.module.scss";
import useText from "../../hooks/use-text";

const ToggleSwitch: React.FC<{ homeEdition: boolean }> = (props) => {
  const { isEnglish, toggleLanguage } = useContext(ContextUI);
  const text = useText();

  const toggleLanguageHandler = () => toggleLanguage();

  return (
    <div
      className={`${styles.wrapper} ${props.homeEdition ? styles[`home-edition`] : ""}`}
      onClick={toggleLanguageHandler}
    >
      {props.homeEdition || (
        <div className={`${styles.switch} ${isEnglish ? styles.active : ""}`}>
          <div className={`${styles.slider} ${isEnglish ? styles.right : styles.left} `}></div>
        </div>
      )}
      {props.homeEdition && (
        <li className={styles.words}>
          <span className={isEnglish ? styles.weak : ""}>{text.nav.lang} </span> &nbsp;/&nbsp;
          <span className={!isEnglish ? styles.weak : ""}>{text.nav.lang} </span>
        </li>
      )}
    </div>
  );
};

export default ToggleSwitch;
