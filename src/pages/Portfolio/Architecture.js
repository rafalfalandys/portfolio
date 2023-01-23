import { Fragment, useContext, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Context from "../../store/context";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Filters from "../../components/portfolio/Filters";
import useAjax from "../../hooks/use-ajax";
import Spinner from "../../components/UI/Spinner";

function Architecture() {
  const ctx = useContext(Context);
  const {
    curImgHandler,
    allProjects,
    curProjects,
    curProjectsHandler,
    filters,
  } = ctx;

  const { fetchProjects, isLoading } = useAjax();

  useEffect(() => {
    fetchProjects().catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    if (!isLoading)
      curProjectsHandler(
        allProjects.filter((project) => {
          if (filters.length === 0) return project;
          return filters
            .map((filter) => project.tags.some((tag) => tag === filter))
            .reduce((acc, boolean) => acc || boolean);
        })
      );
  }, [filters, allProjects, isLoading]);

  useEffect(() => {
    curImgHandler(0);
  }, [curImgHandler]);

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
        {isLoading && <Spinner />}
        {!isLoading && <div className={styles.tiles}>{projectCards}</div>}
      </main>
      <Footer />
    </Fragment>
  );
}
export default Architecture;
