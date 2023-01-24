import { Fragment, useContext, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Context from "../../store/context";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Filters from "../../components/portfolio/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjects } from "../../store/project-actions";
import { projectsActions } from "../../store/projects-slice";

function Architecture() {
  const allProjects = useSelector((state) => state.projects.allProjects);
  const curProjects = useSelector((state) => state.projects.curProjects);
  const ctx = useContext(Context);
  const { curImgHandler, filters } = ctx;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  useEffect(() => {
    curImgHandler(0);
  }, [curImgHandler]);

  console.log(curProjects);
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
