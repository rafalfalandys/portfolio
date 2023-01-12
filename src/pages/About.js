import { Fragment } from "react";
import Footer from "../components/UI/Footer";
import styles from "./About.module.scss";
import Header from "../components/Header/Header";
import IconsLinks from "../components/UI/IconsLinks";

function About() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            <strong>Rafał Falandys</strong> <br /> Master of Architecture,
            Alghorhythmic Design Specialist, Frontend developer and Senior
            Designer
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
