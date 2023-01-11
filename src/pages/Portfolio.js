import { Fragment } from "react";
import Footer from "../components/UI/Footer";
import Header from "../components/Header";
import SingleItem from "../components/portfolio/SingleItem";
import styles from "./Portfolio.module.scss";
import { photosData } from "../store/photos";
import Modal from "../components/portfolio/Modal";

function Portfolio() {
  const photos = photosData.map((photo, i) => (
    <SingleItem url={photo.url} name={photo.img} key={photo.img} no={i} />
  ));

  return (
    <Fragment>
      <Modal />
      <Header />
      <div className={styles.tiles}>{photos}</div>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
