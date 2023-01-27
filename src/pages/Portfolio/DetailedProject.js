import { Fragment, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useKey from "../../hooks/use-key";
import Context from "../../store/context";
import styles from "./DetailedProject.module.scss";
import ProjectImages from "../../components/portfolio/detailed-project/ProjectImages";
import ProjectText from "../../components/portfolio/detailed-project/ProjectText";
import { fetchAllProjects } from "../../hooks/use-ajax";
import ProjectsNavBar from "../../components/portfolio/detailed-project/ProjectsNavBar";

function DetailedProject() {
  const ctx = useContext(Context);
  const { curProjects, curProject, curProjectHandler, curImagesHandler } = ctx;
  const params = useParams();
  useKey();

  useEffect(() => {
    const projectIndex = curProjects.findIndex(
      (project) => project.id === params.projectId
    );
    curProjectHandler(projectIndex);
    curImagesHandler(curProject);
  }, [
    curProjects,
    curProjectHandler,
    params.projectId,
    curImagesHandler,
    curProject,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProject]);

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <main className={styles.main}>
        <div className={styles.content}>
          <ProjectImages />
          <ProjectText />
        </div>

        <ProjectsNavBar />
      </main>
    </Fragment>
  );
}
export default DetailedProject;

export function loader() {
  return fetchAllProjects();
}
