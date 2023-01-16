import { Fragment } from "react";
import styles from "./Portfolio.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import { photosData } from "../../store/photos";
import projectsData from "../../store/projects-data";
import BigCard from "../../components/portfolio/BigCard";

function Portfolio() {
  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Link to="architecture">
          <BigCard url={projectsData[3].images[0].url} text="Architecture" />
        </Link>
        <Link to="photography">
          <BigCard url={photosData[10].url} text="Photography" />
        </Link>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
