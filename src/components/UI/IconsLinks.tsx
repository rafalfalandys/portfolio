import styles from "./IconsLinks.module.scss";

import {
  LogoGithub,
  // LogoInstagram,
  LogoLinkedin,
} from "@swiftcarrot/react-ionicons";

const IconsLinks: React.FC<{ height?: string }> = (props) => {
  return (
    <div className={styles.icons} style={{ height: `${props.height}` }}>
      <a href="https://www.linkedin.com/in/weronika-kogut-1a52aa182/" target="_blank" rel="noreferrer">
        <LogoLinkedin />
      </a>
      {/* <a
        href="https://www.instagram.com/rafalfalandys/"
        target="_blank"
        rel="noreferrer"
      >
        <LogoInstagram />
      </a> */}
      <a href="https://github.com/rafalfalandys" target="_blank" rel="noreferrer">
        <LogoGithub />
      </a>
    </div>
  );
};

export default IconsLinks;
