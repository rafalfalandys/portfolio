import styles from "./Header.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import NavElements from "../Navigation/NavElements";
import ContextUI from "../../store/context-ui";
import { textCommon } from "../../assets/texts";
import { Bars3Icon, ChevronUpIcon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const { toggleNav, isNavVisible } = useContext(ContextUI);

  const toggleNavHandler = () => toggleNav();

  const logoEl = (
    <Link className={styles.logo} to="/">
      <figure>
        <img src={logo} alt="voronoi" />
      </figure>
      <h1 className={styles["logo--text"]}>{textCommon.logo}</h1>
    </Link>
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {logoEl}
        <nav className={styles.nav}>
          <NavElements hover />
        </nav>
        <div className={styles["menu__icon"]} onClick={toggleNavHandler}>
          {isNavVisible ? <XMarkIcon /> : <Bars3Icon />}
        </div>
      </header>
      {/* Need to double nav to see shadow of header bar */}
      <nav className={`${styles["nav--hideable"]} ${isNavVisible ? "" : styles.hidden}`}>
        <NavElements mobile />
        <div className={styles["menu__icon--extra"]} onClick={toggleNavHandler}>
          <ChevronUpIcon />
        </div>
      </nav>
      {/* <ToggleSwitch /> */}
    </div>
  );
};

export default Header;
