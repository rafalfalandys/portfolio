import styles from "./Footer.module.scss";
import IconsLinks from "./UI/IconsLinks";
import Phone from "./UI/ContactData/Phone";
import Email from "./UI/ContactData/Email";
import { useContext } from "react";
import Context from "../store/context";

function Footer(props) {
  const ctx = useContext(Context);
  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br />{" "}
          {ctx.isEnglish
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
