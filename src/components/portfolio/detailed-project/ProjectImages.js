import { Fragment, useContext } from "react";
import SingleItem from "../SingleItem";
import Context from "../../../store/context";
import styles from "./ProjectImages.module.scss";

function ProjectImages() {
  const ctx = useContext(Context);

  const { curProjects, curProject, curImg } = ctx;

  // need to stop here because react renders this components before useEffects set the context
  if (curProjects.length === 0 || curProject === -1) return;

  const project = curProjects[curProject];

  const images = project.images.map((image, i) => (
    <div className={styles.thumbnail} key={image.url}>
      <SingleItem
        url={image.url}
        no={i}
        imagesArr={project.images}
        curImgOnHover
        type={image.type}
      />
    </div>
  ));

  return (
    <Fragment>
      <div className={styles.images}>
        <div className={styles["image-big"]}>
          {!project.images[curImg].type && (
            <img src={project.images[curImg].url} alt="architecture" />
          )}
          {project.images[curImg].type && (
            <video
              src={project.images[curImg].url}
              alt="architecture"
              autoPlay
              muted
            />
          )}
        </div>

        <div className={styles.thumbnails}>{images}</div>
      </div>
      <div className={styles["image-big--mobile"]}>
        <img src={project.images[0].url} alt="architecture" />
      </div>
    </Fragment>
  );
}

export default ProjectImages;
