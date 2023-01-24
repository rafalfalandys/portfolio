import { Fragment } from "react";
import Footer from "../../components/Footer";
import SingleItem from "../../components/portfolio/SingleItem";
import styles from "./Photography.module.scss";
import { photosData } from "../../store/photos";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import useKey from "../../hooks/use-key";
import { useSelector } from "react-redux";

function Photography() {
  const { isModalVisible } = useSelector((state) => state.ui);
  useKey();

  const photos = photosData.map((photo, i) => (
    <SingleItem
      url={photo.url}
      name={photo.img}
      key={photo.img}
      no={i}
      imagesArr={photosData}
    />
  ));

  return (
    <Fragment>
      {isModalVisible && <Modal />}
      <Header />
      <main className={styles.tiles}>{photos}</main>
      <Footer />
    </Fragment>
  );
}
export default Photography;
