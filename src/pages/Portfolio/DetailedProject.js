import { Fragment, useContext } from "react";
import { Link, useParams } from "react-router-dom";
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

  const projectIndex = ctx.projectsData.findIndex(
    (project) => project.id === params.projectId
  );

  const project = ctx.projectsData[projectIndex];

  const nextProject =
    projectIndex === ctx.projectsData.length - 1
      ? ctx.projectsData[0]
      : ctx.projectsData[projectIndex + 1];

  const prevProject =
    projectIndex === 0
      ? ctx.projectsData[ctx.projectsData.length - 1]
      : ctx.projectsData[projectIndex - 1];

  const images = project.images.map((image, i) => (
    <div className={styles.thumbnail} key={image.url}>
      <SingleItem
        url={image.url}
        no={i}
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

        <div className={styles["projects-nav"]}>
          <Link
            to={`/portfolio/architecture/${prevProject.id}`}
            className={`${styles.btn} ${styles["btn--nav"]}`}
          >
            <ion-icon name="arrow-back"></ion-icon>
            <span>Previous project</span>
          </Link>
          <Link to="/portfolio/architecture" className={styles.btn}>
            <ion-icon name="chevron-back" size="large"></ion-icon>
            <span>Back to all projects</span>
          </Link>
          <Link
            to={`/portfolio/architecture/${nextProject.id}`}
            className={`${styles.btn} ${styles["btn--nav"]}`}
          >
            <span>Next project</span>
            <ion-icon name="arrow-forward"></ion-icon>
          </Link>
        </div>
      </main>

      <Footer />
    </Fragment>
  );
}
export default DetailedProject;
