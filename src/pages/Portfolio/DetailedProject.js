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
    <SingleItem
      url={image.url}
      no={i}
      key={image.url}
      imagesArr={project.images}
    />
  ));

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <Header />
      <main className={styles.main}>
        <h1>{project.title}</h1>
        <div className={styles.content}>
          <div className={styles.images}>{images}</div>
          <p>{project.description}</p>
        </div>
      </main>
      ;
      <Footer fixed />
    </Fragment>
  );
}
export default DetailedProject;
