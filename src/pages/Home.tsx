import Footer from "../components/Footer";
import logo from "../img/logo.png";
import styles from "./Home.module.scss";
import NavElements from "../components/Navigation/NavElements";
import { textCommon } from "../assets/texts";

const Home = () => {
  return (
    <>
      <main className={styles.main}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
          <h1 className={styles["logo--text"]}>{textCommon.logo}</h1>
        </div>
        <nav className={styles.nav}>
          <NavElements homeEdition />
        </nav>
      </main>
      <Footer />
    </>
  );
};

export default Home;
