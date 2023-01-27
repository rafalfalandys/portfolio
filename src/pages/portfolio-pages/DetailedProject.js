import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import useKey from "../../hooks/use-key";
import Context from "../../store/context";
import styles from "./DetailedProject.module.scss";
import ProjectImages from "../../components/portfolio/detailed-project/ProjectImages";
import ProjectText from "../../components/portfolio/detailed-project/ProjectText";
import ProjectsNavBar from "../../components/portfolio/detailed-project/ProjectsNavBar";

function DetailedProject() {
  const [isLoad, setIsLoad] = useState(false);
  const ctx = useContext(Context);
  const {
    curProjects,
    curProject,
    curProjectHandler,
    curProjectNo,
    curProjectNoHandler,
    curImagesHandler,
  } = ctx;
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
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProjectNo]);

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <main className={styles.main}>
        <div className={styles.content}>
          {isLoad && <ProjectImages />}
          {isLoad && <ProjectText />}
        </div>

        {isLoad && <ProjectsNavBar />}
      </main>
    </Fragment>
  );
}
export default DetailedProject;
