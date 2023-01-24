import { Fragment, useEffect } from "react";
import SingleItem from "../SingleItem";
import styles from "./ProjectImages.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../../store/projects-slice";

function ProjectImages() {
  const dispatch = useDispatch();
  const { curProjects, curProject, curImg } = useSelector(
    (state) => state.projects
  );

  const projectObj = curProjects[curProject];
  const imagesArr = projectObj.images;

  useEffect(() => {
    dispatch(projectsActions.setImages(imagesArr));
  }, [dispatch, imagesArr]);

  const images = imagesArr.map((image, i) => (
    <div className={styles.thumbnail} key={image.url}>
      <SingleItem
        url={image.url}
        no={i}
        imagesArr={imagesArr}
        curImgOnHover
        type={image.type}
      />
    </div>
  ));

  return (
    <Fragment>
      <div className={styles.images}>
        <div className={styles["image-big"]}>
          {!imagesArr[curImg].type && (
            <img src={imagesArr[curImg].url} alt="architecture" />
          )}
          {imagesArr[curImg].type && (
            <video
              src={imagesArr[curImg].url}
              alt="architecture"
              autoPlay
              muted
            />
          )}
        </div>

        <div className={styles.thumbnails}>{images}</div>
      </div>
      <div className={styles["image-big--mobile"]}>
        <img src={projectObj.images[0].url} alt="architecture" />
      </div>
    </Fragment>
  );
}

export default ProjectImages;
