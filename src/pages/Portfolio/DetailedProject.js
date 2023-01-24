import { Fragment, useContext, useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import { fetchProjects } from "../../store/project-actions";

function DetailedProject() {
  const ctx = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const curProjects = useSelector((state) => state.projects.curProjects);
  const curProject = useSelector((state) => state.projects.curProject);
  const dispatch = useDispatch();
  const params = useParams();
  useKey();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  useEffect(() => {
    const projectIndex = curProjects.findIndex(
      (project) => project.id === params.projectId
    );
    console.log(curProjects);
    dispatch(projectsActions.setCurProject(projectIndex));
    setIsLoading(false);
  }, [curProjects, params.projectId, curProject]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProject]);

  return (
    <Fragment>
      {ctx.isModalVisible && <Modal />}
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          {!isLoading && <ProjectImages />}
          {!isLoading && <ProjectText />}
        </div>

        {!isLoading && <ProjectsNavBar />}
      </main>

      <Footer />
    </Fragment>
  );
}
export default DetailedProject;
