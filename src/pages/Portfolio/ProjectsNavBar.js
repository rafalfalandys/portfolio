import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../store/context";
import styles from "./ProjectsNavBar.module.scss";

function ProjectsNavBar() {
  const ctx = useContext(Context);

  const { curProjects, curProject, curImgHandler } = ctx;

  const onClickHandler = () => curImgHandler(0);

  const nextProject =
    curProject === curProjects.length - 1
      ? curProjects[0]
      : curProjects[curProject + 1];

  const prevProject =
    curProject === 0
      ? curProjects[curProjects.length - 1]
      : curProjects[curProject - 1];

  return (
    <div className={styles["projects-nav"]}>
      <Link
        to={`/portfolio/architecture/${prevProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <ion-icon name="arrow-back"></ion-icon>
        <span>Previous project</span>
      </Link>
      <Link to="/portfolio/architecture" className={styles.btn}>
        <ion-icon name="chevron-back" size="large"></ion-icon>
        <span>Back to all projects</span>
      </Link>
      <Link
        to={`/portfolio/architecture/${nextProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <span>Next project</span>
        <ion-icon name="arrow-forward"></ion-icon>
      </Link>
    </div>
  );
}

export default ProjectsNavBar;
