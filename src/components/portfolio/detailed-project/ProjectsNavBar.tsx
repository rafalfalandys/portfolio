import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextProjects from "../../../store/context-projects";
import styles from "./ProjectsNavBar.module.scss";
import useText from "../../../hooks/use-text";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const ProjectsNavBar = () => {
  const { curProjects, curProjectNo, curImgHandler } = useContext(ContextProjects);
  const text = useText();

  const onClickHandler = () => curImgHandler(0);

  const nextProject = curProjectNo === curProjects.length - 1 ? curProjects[0] : curProjects[curProjectNo + 1];

  const prevProject = curProjectNo === 0 ? curProjects[curProjects.length - 1] : curProjects[curProjectNo - 1];

  return (
    <div className={styles["projects-nav"]}>
      <Link
        to={`/architecture/${prevProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <ArrowLeftIcon />
        <span>{text.projNav.prev}</span>
      </Link>
      <Link to=".." relative="path" className={styles.btn}>
        <div className={styles.bigIcon}>
          <ChevronLeftIcon />
        </div>
        <span>{text.projNav.back}</span>
      </Link>
      <Link
        to={`/architecture/${nextProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <span>{text.projNav.next}</span>
        <ArrowRightIcon />
      </Link>
    </div>
  );
};

export default ProjectsNavBar;
