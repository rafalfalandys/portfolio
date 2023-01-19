import styles from "./Header.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import Context from "../../store/context";
import NavElements from "../Navigation/NavElements";

function Header() {
  const ctx = useContext(Context);

  const toggleNavHandler = () => ctx.toggleNav();

  const logoEl = (
    <Link className={styles.logo} to="/home">
      <figure>
        <img src={logo} alt="voronoi" />
      </figure>
      <h1 className={styles["logo--text"]}>rafa</h1>
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
          <ion-icon
            name={`${ctx.isNavVisible ? "close" : "menu"}`}
            size="large"
          ></ion-icon>
        </div>
      </header>
      {/* Need to double nav to see shadow of header bar */}
      <nav
        className={`${styles["nav--hideable"]} ${
          ctx.isNavVisible ? "" : styles.hidden
        }`}
      >
        <NavElements mobile />
        <div className={styles["menu__icon--extra"]} onClick={toggleNavHandler}>
          <ion-icon name="chevron-up" size="large"></ion-icon>
        </div>
      </nav>
      {/* <ToggleSwitch /> */}
    </div>
  );
}

export default Header;
