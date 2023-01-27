import { Fragment, useContext } from "react";
import Footer from "../components/Footer";
import styles from "./About.module.scss";
import Header from "../components/Header/Header";
import IconsLinks from "../components/UI/IconsLinks";
import Context from "../store/context";

function About() {
  const ctx = useContext(Context);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            <strong>Rafał Falandys</strong>
            <br />
            {ctx.isEnglish
              ? "Master of Architecture, Alghorhythmic Design Specialist, Frontend Developer and Senior Designer."
              : "Magister architektury, specjalista projektowania parametrycznego i frontend deweloper."}
          </p>
          <IconsLinks height="3rem" />
        </div>
        <figure className={styles.photo}>
          <img src={require("../img/about-photo.png")} alt="person" />
        </figure>
      </main>
      <Footer />
    </Fragment>
  );
}

export default About;
