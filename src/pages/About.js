import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import styles from "./About.module.scss";

function About() {
  return (
    <Fragment>
      <Header />
      <div className={styles.main}>
        <div className={styles.text}></div>
        <figure className={styles.photo}>
          <img src={require("../img/about-photo.png")} />
        </figure>
      </div>
    </Fragment>
  );
}

export default About;
