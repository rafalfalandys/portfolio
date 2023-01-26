import { Fragment, useContext, useEffect } from "react";
import styles from "./Architecture.module.scss";
import Footer from "../../components/Footer";
import Header from "../../components/Header/Header";
import Context from "../../store/context";
import { Link, Outlet, useLoaderData, useLocation } from "react-router-dom";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Filters from "../../components/portfolio/Filters";
import { URL } from "../../helper";
import { useCallback } from "react";

function Architecture() {
  const { curImgHandler, curProjects, curProjectsHandler, filters, isEnglish } =
    useContext(Context);
  const loadedProjects = useLoaderData();
  const location = useLocation().pathname;

  // here comes a function, instead of simple array, because without useCallback VSC was screaming for dependencies in useEffect below
  const filterProjects = useCallback(() => {
    return loadedProjects.filter((project) => {
      if (filters.length === 0) return project;
      return filters
        .map((filter) => project.tags?.some((tag) => tag === filter))
        .reduce((acc, boolean) => acc || boolean);
    });
  }, [filters, loadedProjects]);

  // setting current projects context, so from detailed projects view, I only browse filtered ones
  useEffect(() => {
    curProjectsHandler(filterProjects());
  }, [filters, filterProjects, curProjectsHandler]);

  // set big image after mounting component
  useEffect(() => {
    curImgHandler(0);
  }, [curImgHandler]);

  const projectCards = curProjects.map((project) => (
    <Link to={project.id} className={styles.tile} key={project.id}>
      <ProjectCard
        url={project.images[0].url}
        title={project.title}
        location={project.location}
        description={(!isEnglish && project.opis) || project.description}
      />
    </Link>
  ));

  return (
    <Fragment>
      <Header />
      <Outlet />
      {location === "/architecture" && (
        <main className={styles.main}>
          <Filters />
          <div className={styles.tiles}>{projectCards}</div>
        </main>
      )}
      <Footer />
    </Fragment>
  );
}
export default Architecture;

export async function loader() {
  const response = await fetch(`${URL}projects.json`);
  if (!response.ok) {
    throw new Error(`Something went wrong (${response.status})`);
  }
  const data = await response.json();
  return data["-NMPSVcmPcUplf-Wwe-W"];
}
