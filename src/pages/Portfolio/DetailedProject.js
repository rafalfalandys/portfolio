import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer";
import useKey from "../../hooks/use-key";
import styles from "./DetailedProject.module.scss";
import ProjectsNavBar from "./ProjectsNavBar";
import ProjectImages from "../../components/portfolio/detailed-project/ProjectImages";
import ProjectText from "../../components/portfolio/detailed-project/ProjectText";
import { useDispatch, useSelector } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import { fetchProjects } from "../../store/project-actions";
import Spinner from "../../components/UI/Spinner";

function DetailedProject() {
  const dispatch = useDispatch();
  const { isModalVisible } = useSelector((state) => state.ui);
  const { curProjects, curProject } = useSelector((state) => state.projects);
  const [isLoad, setIsLoad] = useState(false);
  const params = useParams();
  useKey();

  useEffect(() => {
    if (curProjects.length === 0) dispatch(fetchProjects());
  }, [curProjects, dispatch]);

  useEffect(() => {
    const projectIndex = curProjects.findIndex(
      (project) => project.id === params.projectId
    );
    dispatch(projectsActions.setCurProject(projectIndex));
    if (curProjects.length !== 0) setIsLoad(true);
  }, [curProjects, params.projectId, curProject, dispatch]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [curProject]);

  return (
    <Fragment>
      {isModalVisible && <Modal />}
      <Header />
      <main className={styles.main}>
        {!isLoad && <Spinner />}
        <div className={styles.content}>
          {isLoad && <ProjectImages />}
          {isLoad && <ProjectText />}
        </div>

        {isLoad && <ProjectsNavBar />}
      </main>

      <Footer />
    </Fragment>
  );
}
export default DetailedProject;
