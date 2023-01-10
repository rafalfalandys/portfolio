import styles from "./Footer.module.scss";
import { Call, Mail } from "@swiftcarrot/react-ionicons";
import IconsLinks from "./IconsLinks";
import ContactData from "./ContactData";

function Footer(props) {
  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br /> Master of Architecture,
          Alghorhythmic Design Specialist, Frontend developer and Senior
          Designer
        </p>
        <ContactData height="2.5rem" />
        <IconsLinks height="2.5rem" />
      </div>
    </footer>
  );
}

export default Footer;
