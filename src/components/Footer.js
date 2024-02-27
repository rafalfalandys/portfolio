import styles from "./Footer.module.scss";
import IconsLinks from "./UI/IconsLinks";
import Phone from "./UI/ContactData/Phone";
import Email from "./UI/ContactData/Email";
import { useContext } from "react";
import ContextUI from "../store/context-ui";
import useText from "../hooks/use-text";
import { textCommon } from "../assets/texts";

function Footer(props) {
  const { toggleEditMode } = useContext(ContextUI);
  const text = useText();

  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <div className={styles.editmode} onClick={toggleEditMode}></div>
        <p className={styles.text}>
          <strong>{textCommon.name}</strong> <br /> {text.aboutPage.desc}
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
