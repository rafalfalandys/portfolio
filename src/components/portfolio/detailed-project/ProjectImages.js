import { Fragment, useContext } from "react";
import SingleItem from "../SingleItem";
import Context from "../../../store/context";
import styles from "./ProjectImages.module.scss";

function ProjectImages() {
  const ctx = useContext(Context);
  const { curProject, curImg, curImages } = ctx;

  const images = curImages.map((image, i) => (
    <div className={styles.thumbnail} key={image.url}>
      <SingleItem
        url={image.url}
        no={i}
        imagesArr={curProject.images}
        curImgOnHover
        type={image.type}
      />
    </div>
  ));

  return (
    <Fragment>
      <div className={styles.images}>
        <div className={styles["image-big"]}>
          {!curProject.images[curImg]?.type && (
            <img src={curProject.images[curImg].url} alt="architecture" />
          )}
          {curProject.images[curImg].type && (
            <video
              src={curProject.images[curImg].url}
              alt="architecture"
              autoPlay
              muted
            />
          )}
        </div>

        <div className={styles.thumbnails}>{images}</div>
      </div>
      <div className={styles["image-big--mobile"]}>
        <img src={curProject.images[0].url} alt="architecture" />
      </div>
    </Fragment>
  );
}

export default ProjectImages;
