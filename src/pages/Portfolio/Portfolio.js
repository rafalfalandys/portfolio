import { Fragment } from "react";
import styles from "./Portfolio.module.scss";
import Footer from "../../components/UI/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import SingleItem from "../../components/portfolio/SingleItem";
import { photosData } from "../../store/photos";
import projectsData from "../../store/projects-data";

function Portfolio() {
  return (
    <Fragment>
      <Header fixed />
      <main className={styles.main}>
        <div className={styles.card}>
          <Link to="architecture">
            <SingleItem
              url={projectsData[3].images[0].url}
              style={{ transform: "scale(1)" }}
            />
          </Link>
          <h1>Architecture</h1>
        </div>

        <div className={styles.card}>
          <Link to="photography">
            <SingleItem
              url={photosData[10].url}
              style={{ transform: "scale(1)" }}
            />
          </Link>
          <h1>Photography</h1>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
