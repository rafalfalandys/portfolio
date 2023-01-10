import styles from "./Footer.module.scss";
import {
  Call,
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
  Mail,
} from "@swiftcarrot/react-ionicons";

function Footer(props) {
  return (
    <footer className={`${styles.footer} ${props.fixed ? styles.fixed : ""}`}>
      <div className={styles.container}>
        <p className={styles.text}>
          <strong>Rafał Falandys</strong> <br /> Master of Architecture,
          Alghorhythmic Design Specialist, Frontend developer, Photographer and
          Senior Designer
        </p>
        <div className={styles.contact}>
          <Call />
          <p>+48 736 250 545</p>
          <Mail />
          <p>rafalfalandys@gmail.com</p>
        </div>
        <div className={styles.icons}>
          <a href="https://www.linkedin.com/in/rafal-falandys" target="_blank">
            <LogoLinkedin />
          </a>
          <a href="https://www.instagram.com/rafalfalandys/" target="_blank">
            <LogoInstagram />
          </a>
          <a href="https://github.com/rafalfalandys" target="_blank">
            <LogoGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
