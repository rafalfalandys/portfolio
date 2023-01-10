import { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header/Header";
import SingleItem from "../components/portfolio/SingleItem";
import styles from "./Portfolio.module.scss";
import { photosData } from "../store/photos";

function Portfolio() {
  const photos = photosData.map((photo) => <SingleItem name={photo.img} />);
  console.log(photos);
  return (
    <Fragment>
      <Header />
      <div className={styles.tiles}>{photos}</div>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
