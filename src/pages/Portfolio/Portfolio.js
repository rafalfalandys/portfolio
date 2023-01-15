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
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>Architecture</h1>
          <Link to="architecture">
            <SingleItem url={projectsData[3].images[0].url} />
          </Link>
        </div>
        <div className={styles.card}>
          <h1>Photography</h1>
          <Link to="photography" className={styles.card}>
            <SingleItem url={photosData[10].url} />
          </Link>
        </div>
      </main>
      <Footer fixed />
    </Fragment>
  );
}
export default Portfolio;
