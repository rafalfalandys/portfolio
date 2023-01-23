import Footer from "../components/Footer";
import logo from "../img/logo.png";
import styles from "./Home.module.scss";
import { Fragment } from "react";
import NavElements from "../components/Navigation/NavElements";

function Home() {
  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h1 className={styles["logo--text"]}>rafa</h1>
        </div>
        <nav className={styles.nav}>
          <NavElements homeEdition />
        </nav>
      </main>
      <Footer />
    </Fragment>
  );
}

export default Home;
