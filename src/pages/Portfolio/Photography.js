import { Fragment, useContext } from "react";
import Footer from "../../components/UI/Footer";
import SingleItem from "../../components/portfolio/SingleItem";
import styles from "./Photography.module.scss";
import { photosData } from "../../store/photos";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import Context from "../../store/context";
import useKey from "../../hooks/use-key";

function Photography() {
  const ctx = useContext(Context);
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
      {ctx.isModalVisible && <Modal />}
      <Header fixed />
      <main className={styles.tiles}>{photos}</main>
      <Footer />
    </Fragment>
  );
}
export default Photography;
