import Footer from "../components/Footer";
import styles from "./About.module.scss";
import Header from "../components/Header/Header";
import IconsLinks from "../components/UI/IconsLinks";
import useText from "../hooks/use-text";

function About() {
  const text = useText();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            <strong>{text.aboutPage.name}</strong>
            <br />
            {text.aboutPage.desc}
          </p>
          <IconsLinks height="3rem" />
        </div>
        <figure className={styles.photo}>
          <img src={require("../img/about-photo.png")} alt="person" />
        </figure>
      </main>
      <Footer />
    </>
  );
}

export default About;
