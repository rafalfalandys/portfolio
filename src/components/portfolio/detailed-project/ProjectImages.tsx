import { Fragment, useContext } from "react";
import SingleItem from "../SingleItem";
import styles from "./ProjectImages.module.scss";
import ContextProjects from "../../../store/context-projects";
import ReactPlayer from "react-player";

const ProjectImages = () => {
  const { curProject, curImg, curImages } = useContext(ContextProjects);

  const images = curImages.map((image, i) => (
    <div className={styles.thumbnail} key={image.url}>
      <SingleItem
        url={image.thumbnail ? image.thumbnail : image.url}
        no={i}
        imagesArr={curProject.images}
        curImgOnHover
        style={{ borderRadius: "5px" }}
        name={image.name}
      />
    </div>
  ));

  const imgThumbnail = curProject.images[curImg].thumbnail;
  const imgUrl = curProject.images[curImg].url;

  return (
    <Fragment>
      <div className={styles.images}>
        <div className={styles["image-big"]}>
          {curImages[curImg].type === "img" && <img src={imgThumbnail ? imgThumbnail : imgUrl} alt="architecture" />}
          {curImages[curImg].type === "video" && <video src={curProject.images[curImg].url} autoPlay muted />}
          {curImages[curImg].type === "youtube" && (
            // <iframe
            //   src={`https://youtube.com/embed/${curImages[curImg].url}?autoplay=1&mute=1`}
            //   allow="autoplay"
            //   title={curImages[curImg].name}
            // ></iframe>
            <ReactPlayer url={`https://youtube.com/embed/${curImages[curImg].url}`} playing={true} muted />
          )}
        </div>

        <div className={styles.thumbnails}>{images}</div>
      </div>
      <div className={styles["image-big--mobile"]}>
        <img src={curProject.images[0].url} alt="architecture" />
      </div>
    </Fragment>
  );
};

export default ProjectImages;
