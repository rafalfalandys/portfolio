import { Fragment, useContext } from "react";
import Footer from "../components/UI/Footer";
import Header from "../components/Header";
import SingleItem from "../components/portfolio/SingleItem";
import styles from "./Portfolio.module.scss";
import { photosData } from "../store/photos";
import Modal from "../components/portfolio/Modal";
import Context from "../store/context";

function Portfolio() {
  const ctx = useContext(Context);

  const photos = photosData.map((photo) => (
    <SingleItem url={photo.url} name={photo.img} key={photo.img} />
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
