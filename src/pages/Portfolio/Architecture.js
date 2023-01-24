import { Fragment, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Filters from "../../components/portfolio/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/project-actions";
import { projectsActions } from "../../store/projects-slice";

function Architecture() {
  const dispatch = useDispatch();
  const { curProjects } = useSelector((state) => state.projects);

  useEffect(() => {
    if (curProjects.length === 0) dispatch(fetchProjects());
  }, [curProjects, dispatch]);

  useEffect(() => {
    dispatch(projectsActions.setImg(0));
  }, [dispatch]);

  const projectCards = curProjects.map((project, i) => (
    <Link to={project.id} className={styles.tile} key={project.id}>
      <ProjectCard
        url={project.images[0].url}
        title={project.title}
        location={project.location}
        description={project.description}
      />
    </Link>
  ));

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <Filters />
        <div className={styles.tiles}>{projectCards}</div>
      </main>
      <Footer />
    </Fragment>
  );
}
export default Architecture;
