import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer";
import useKey from "../../hooks/use-key";
import Context from "../../store/context";
import styles from "./DetailedProject.module.scss";
import ProjectsNavBar from "./ProjectsNavBar";
import ProjectImages from "../../components/portfolio/detailed-project/ProjectImages";
import ProjectText from "../../components/portfolio/detailed-project/ProjectText";

function DetailedProject() {
  const ctx = useContext(Context);
  const { curProjects, curProject, curProjectHandler } = ctx;
  const params = useParams();

  useKey();
  useEffect(() => {
    console.log(projectIndex);
    const projectIndex = curProjects.findIndex(
      (project) => project.id === params.projectId
    );
    curProjectHandler(projectIndex);
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProject]);

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <ProjectImages />
          <ProjectText />
        </div>

        <ProjectsNavBar />
      </main>

      <Footer />
    </Fragment>
  );
}
export default DetailedProject;
