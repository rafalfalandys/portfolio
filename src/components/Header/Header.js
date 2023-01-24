import styles from "./Header.module.scss";
import logo from "../../img/logo.png";
import { Link } from "react-router-dom";
import NavElements from "../Navigation/NavElements";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";

function Header() {
  const dispatch = useDispatch();
  const isMobileNavVisible = useSelector(
    (state) => state.ui.isMobileNavVisible
  );

  const toggleNavHandler = () => dispatch(uiActions.controlMobileNav("toggle"));

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
            name={`${isMobileNavVisible ? "close" : "menu"}`}
            size="large"
          ></ion-icon>
        </div>
      </header>
      {/* Need to double nav to see shadow of header bar */}
      <nav
        className={`${styles["nav--hideable"]} ${
          isMobileNavVisible ? "" : styles.hidden
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
