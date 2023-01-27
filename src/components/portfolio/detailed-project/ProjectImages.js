import { Fragment, useContext } from "react";
import SingleItem from "../SingleItem";
import styles from "./ProjectImages.module.scss";
import ContextProjects from "../../../store/context-projects";

function ProjectImages() {
  const { curProject, curImg, curImages } = useContext(ContextProjects);

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
