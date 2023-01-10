import styles from "./Header.module.scss";
import NavItem from "./NavItem";
import logo from "../../img/logo.png";
import { Link, Route, Routes } from "react-router-dom";

function Header() {
  const logoEl = (
    <Link className={styles.logo} to="/home">
      <img src={logo} />
      <h1 className={styles["logo--text"]}>rafa</h1>
    </Link>
  );

  return (
    <header className={styles.header}>
      {logoEl}
      <nav>
        <ul>
          <NavItem linkTo="/about">About</NavItem>
          <NavItem linkTo="/portfolio">Porfolio</NavItem>
          <NavItem linkTo="/contact">Contact</NavItem>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
