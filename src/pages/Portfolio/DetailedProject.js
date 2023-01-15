import { Fragment, useContext } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import SingleItem from "../../components/portfolio/SingleItem";
import Footer from "../../components/UI/Footer";
import useKey from "../../hooks/use-key";
import Context from "../../store/context";
import styles from "./DetailedProject.module.scss";

function DetailedProject(props) {
  const ctx = useContext(Context);
  useKey();

  const params = useParams();

  const project =
    ctx.projectsData[
      ctx.projectsData.findIndex((project) => project.id === params.projectId)
    ];

  const images = project.images.map((image, i) => (
    <div className={styles.wrapper}>
      <SingleItem
        url={image.url}
        no={i}
        key={image.url}
        imagesArr={project.images}
        curImgOnHover
      />
    </div>
  ));

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <Header fixed />
      <main className={styles.main}>
        <h1>{`${project.location} - ${project.title}`}</h1>

        <div className={styles.content}>
          <div className={styles.images}>
            <div className={styles["image-big"]}>
              <img src={project.images[ctx.curImg].url} alt="architecture" />
            </div>
            <div className={styles.thumbnails}>{images}</div>
          </div>

          <div className={styles["image-big--mobile"]}>
            <img src={project.images[0].url} alt="architecture" />
          </div>

          <div className={styles.text}>
            <p>{project.description}</p>
          </div>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
export default DetailedProject;
