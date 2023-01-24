import styles from "./Footer.module.scss";
import IconsLinks from "./UI/IconsLinks";
import Phone from "./UI/ContactData/Phone";
import Email from "./UI/ContactData/Email";
import { useSelector } from "react-redux";

function Footer(props) {
  const { isEnglish } = useSelector((state) => state.ui);

  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br />{" "}
          {isEnglish
            ? "Master of Architecture, Alghorhythmic Design Specialist, Frontend Developer and Senior Designer"
            : "Magister architektury, specjalista projektowania parametrycznego i deweloper frontend"}
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
