import styles from "./Footer.module.scss";
import IconsLinks from "./UI/IconsLinks";
import Phone from "./UI/ContactData/Phone";
import Email from "./UI/ContactData/Email";

function Footer(props) {
  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br /> Master of Architecture,
          Alghorhythmic Design Specialist, Frontend developer and Senior
          Designer
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
