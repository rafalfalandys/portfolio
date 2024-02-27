import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useKey from "../../hooks/use-key";
import styles from "./DetailedProject.module.scss";
import ProjectImages from "../../components/portfolio/detailed-project/ProjectImages";
import ProjectText from "../../components/portfolio/detailed-project/ProjectText";
import ProjectsNavBar from "../../components/portfolio/detailed-project/ProjectsNavBar";
import ContextUI from "../../store/context-ui";
import ContextProjects from "../../store/context-projects";

function DetailedProject() {
  const [isLoad, setIsLoad] = useState(false);
  const { isModalVisible } = useContext(ContextUI);
  const {
    curProjects,
    curProjectHandler,
    curProjectNo,
    curProjectNoHandler,
    curImagesHandler,
  } = useContext(ContextProjects);
  const params = useParams();
  useKey();

  useEffect(() => {
    const projectIndex = curProjects.findIndex(
      (project) => project.id === params.projectId
    );
    curProjectNoHandler(projectIndex);
    curProjectHandler(curProjects[projectIndex]);
    curImagesHandler(curProjects[projectIndex]?.images);

    if (curProjects.length !== 0) setIsLoad(true);
  }, [
    curProjects,
    curProjectNoHandler,
    params.projectId,
    curImagesHandler,
    curProjectNo,
    curProjectHandler,
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProjectNo]);

  return (
    <>
      {isModalVisible && <Modal />}
      <main className={styles.main}>
        <div className={styles.content}>
          {isLoad && <ProjectImages />}
          {isLoad && <ProjectText />}
        </div>

        {isLoad && <ProjectsNavBar />}
      </main>
    </>
  );
}
export default DetailedProject;
