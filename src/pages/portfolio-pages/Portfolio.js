import { Fragment, useContext } from "react";
import styles from "./Portfolio.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { photosData } from "../../store/photos";
import projectsData from "../../store/projects-data/projects-data";
import BigCard from "../../components/portfolio/BigCard";
import ContextUI from "../../store/context-ui";

function Portfolio() {
  const { isEnglish } = useContext(ContextUI);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Link to="/architecture">
          <BigCard
            url={projectsData[3].images[0].url}
            text={isEnglish ? "Architecture" : "Architektura"}
          />
        </Link>
        <Link to="/photography">
          <BigCard
            url={photosData[10].url}
            text={isEnglish ? "Photography" : "Fotografia"}
          />
        </Link>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
