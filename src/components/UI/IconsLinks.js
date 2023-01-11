import styles from "./IconsLinks.module.scss";

import {
  LogoGithub,
  LogoInstagram,
  LogoLinkedin,
} from "@swiftcarrot/react-ionicons";

function IconsLinks(props) {
  return (
    <div className={styles.icons} style={{ height: `${props.height}` }}>
      <a
        href="https://www.linkedin.com/in/rafal-falandys"
        target="_blank"
        rel="noreferrer"
      >
        <LogoLinkedin />
      </a>
      <a
        href="https://www.instagram.com/rafalfalandys/"
        target="_blank"
        rel="noreferrer"
      >
        <LogoInstagram />
      </a>
      <a
        href="https://github.com/rafalfalandys"
        target="_blank"
        rel="noreferrer"
      >
        <LogoGithub />
      </a>
    </div>
  );
}

export default IconsLinks;
