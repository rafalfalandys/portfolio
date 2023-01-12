import { Fragment, useContext } from "react";
import Footer from "../components/UI/Footer";
import SingleItem from "../components/portfolio/SingleItem";
import styles from "./Portfolio.module.scss";
import { photosData } from "../store/photos";
import Modal from "../components/UI/Modal/Modal";
import Header from "../components/Header/Header";
import Context from "../store/context";

function Portfolio() {
  const ctx = useContext(Context);
  const photos = photosData.map((photo, i) => (
    <SingleItem url={photo.url} name={photo.img} key={photo.img} no={i} />
  ));

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <Header />
      <div className={styles.tiles}>{photos}</div>
      <Footer />
    </Fragment>
  );
}
export default Portfolio;
