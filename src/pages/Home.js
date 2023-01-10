import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import NavItem from "../components/Header/NavItem";
import logo from "../img/logo.png";

import styles from "./Home.module.scss";

function Home() {
  return (
    <Fragment>
      <div className={styles.content}>
        <img src={logo} />
        <h1 className={styles["logo--text"]}>rafa</h1>
      </div>
      <ul className={styles.list}>
        <NavItem linkTo="/about">About me</NavItem>
        <NavItem linkTo="/portfolio">Porfolio</NavItem>
        <NavItem linkTo="/contact">Contact</NavItem>
      </ul>
      <div className={styles.container}>{/* <Logo /> */}</div>
      <Footer fixed />
    </Fragment>
  );
}

export default Home;
