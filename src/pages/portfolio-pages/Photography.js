import { useContext } from "react";
import Footer from "../../components/Footer";
import SingleItem from "../../components/portfolio/SingleItem";
import styles from "./Photography.module.scss";
import Modal from "../../components/Modal/Modal";
import Header from "../../components/Header/Header";
import useKey from "../../hooks/use-key";
import ContextUI from "../../store/context-ui";
import { URL } from "../../config";
import { useLoaderData } from "react-router-dom";

function Photography() {
  const { isModalVisible } = useContext(ContextUI);
  useKey();
  const photosData = useLoaderData();

  const photos = photosData.photos.map((photo, i) => (
    <SingleItem
      url={photo.thumbnail}
      name={photo.name}
      key={photo.url}
      no={i}
      imagesArr={photosData.photos}
    />
  ));

  return (
    <>
      {isModalVisible && <Modal />}
      <Header />
      <main className={styles.tiles}>{photos}</main>
      <Footer />
    </>
  );
}
export default Photography;

export async function loader() {
  const response = await fetch(`${URL}photos.json`);
  if (!response.ok) {
    throw new Error(`Something went wrong (${response.status})`);
  }
  const data = await response.json();

  let photos;
  let photosKey;
  for (const key in data) {
    photosKey = key;
    photos = data[key];
  }

  return { photos, photosKey };
}
