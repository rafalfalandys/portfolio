import Footer from "../components/Footer";
import styles from "./About.module.scss";
import Header from "../components/Header/Header";
import IconsLinks from "../components/UI/IconsLinks";
import useText from "../hooks/use-text";
import { textCommon } from "../assets/texts";
import aboutPhoto from "../img/about-photo.png";

const About = () => {
  const text = useText();

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.text}>
          <p>
            <strong>{textCommon.name}</strong>
            <br />
            {text.aboutPage.desc}
          </p>
          <IconsLinks height="3rem" />
        </div>
        <figure className={styles.photo}>
          <img src={aboutPhoto} alt="person" />
        </figure>
      </main>
      <Footer />
    </>
  );
};

export default About;
