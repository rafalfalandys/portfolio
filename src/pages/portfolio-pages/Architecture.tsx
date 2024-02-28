import { useContext, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Filters from "../../components/portfolio/Filters";
import { useCallback } from "react";
import ContextUI from "../../store/context-ui";
import ContextProjects from "../../store/context-projects";
import { Project } from "../../types";

const Architecture = () => {
  const { isEnglish, hideModal } = useContext(ContextUI);
  const { curImgHandler, curProject, curProjects, curProjectsHandler, filters, sorting } = useContext(ContextProjects);
  const loadedProjects = useLoaderData() as Project[];
  const location = useLocation().pathname;

  // here comes a function, instead of simple array, because without useCallback VSC was screaming for dependencies in useEffect below
  const filterProjects = useCallback(() => {
    return loadedProjects
      .filter((project) => {
        if (filters.length === 0) return project;
        return filters
          .map((filter) => project.tags?.some((tag) => tag === filter))
          .reduce((acc, boolean) => acc || boolean);
      })
      .sort((a, b) => {
        if (sorting === "year") {
          return b.yearEnd - a.yearEnd;
        } else if (sorting === "year-reverse") {
          return a.yearEnd - b.yearEnd;
        } else {
          return a.order! - b.order!;
        }
      });
  }, [filters, loadedProjects, sorting]);

  // setting current projects context, so from detailed projects view, I only browse filtered ones
  useEffect(() => {
    curProjectsHandler(filterProjects());
  }, [filters, filterProjects, curProjectsHandler]);

  // set big image to 0 after mounting component anytime we enter this page
  useEffect(() => {
    curImgHandler(0);
  }, [curImgHandler, location]);

  // hiding modal window because if man enter detailed project, than click back to projects, and than jump to another project - it opens with modal on
  useEffect(() => {
    hideModal();
  }, [curProject, hideModal]);

  const projectCards = curProjects.map((project) => (
    <Link to={project.id} className={styles.tile} key={project.id}>
      <ProjectCard
        url={project.images[0].url}
        thumbnail={project.images[0].thumbnail}
        title={project.title}
        tytul={project.tytul}
        year={
          project.yearStart === project.yearEnd ? project.yearStart + "" : `${project.yearStart} - ${project.yearEnd}`
        }
        location={project.location}
        description={(!isEnglish && project.opis) || project.description}
      />
    </Link>
  ));

  return (
    <>
      <Header />
      <Outlet />
      {location === "/architecture" && (
        <main className={styles.main}>
          <Filters />
          {/* <h1 onClick={onClickHandler}>Load backup</h1> */}
          <div className={styles.tiles}>{projectCards}</div>
        </main>
      )}
      <Footer />
    </>
  );
};
export default Architecture;
