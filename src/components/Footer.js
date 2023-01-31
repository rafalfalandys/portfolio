import styles from "./Footer.module.scss";
import IconsLinks from "./UI/IconsLinks";
import Phone from "./UI/ContactData/Phone";
import Email from "./UI/ContactData/Email";
import { useContext } from "react";
import ContextUI from "../store/context-ui";

function Footer(props) {
  const { isEnglish, toggleEditMode } = useContext(ContextUI);
  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <div className={styles.editmode} onClick={toggleEditMode}></div>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br />{" "}
          {isEnglish
            ? "Master of Architecture, Alghorhythmic Design Specialist, Frontend Developer and Senior Designer."
            : "Magister architektury, specjalista projektowania parametrycznego i frontend deweloper."}
        </p>
        <div className={styles.contact}>
          <Phone />
          <Email />
        </div>
        <div className={styles.icons}>
          <IconsLinks />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
