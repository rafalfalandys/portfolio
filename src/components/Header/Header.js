import styles from "./Header.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import { Fragment, useContext } from "react";
import Context from "../../store/context";
import NavElements from "../UI/Navigation/NavElements";

function Header() {
  const ctx = useContext(Context);

  const toggleNavHandler = () => ctx.toggleNav();

  const logoEl = (
    <Link className={styles.logo} to="/home">
      <img src={logo} alt="voronoi" />
      <h1 className={styles["logo--text"]}>rafa</h1>
    </Link>
  );

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        {logoEl}
        <nav className={styles.nav}>
          <NavElements />
        </nav>
        <div className={styles["menu--icon"]} onClick={toggleNavHandler}>
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
      </nav>
    </div>
  );
}

export default Header;
