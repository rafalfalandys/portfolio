import { Fragment, useContext } from "react";
import styles from "./Portfolio.module.scss";
import Footer from "../../components/UI/Footer";
import Header from "../../components/Header/Header";
import Context from "../../store/context";
import { Link } from "react-router-dom";
import SingleItem from "../../components/portfolio/SingleItem";

function Portfolio() {
  const ctx = useContext(Context);

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.card}>
          <h1>Architecture</h1>
          <Link to="architecture">
            <SingleItem url={ctx.photosData[1].url} />
          </Link>
        </div>
        <div className={styles.card}>
          <h1>Photography</h1>
          <Link to="photography" className={styles.card}>
            <SingleItem url={ctx.photosData[10].url} />
          </Link>
        </div>
      </main>
      <Footer fixed />
    </Fragment>
  );
}
export default Portfolio;
