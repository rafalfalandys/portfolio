import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextProjects from "../../../store/context-projects";
import ContextUI from "../../../store/context-ui";
import styles from "./ProjectsNavBar.module.scss";

function ProjectsNavBar() {
  const { isEnglish } = useContext(ContextUI);
  const { curProjects, curProjectNo, curImgHandler } =
    useContext(ContextProjects);

  const onClickHandler = () => curImgHandler(0);

  const nextProject =
    curProjectNo === curProjects.length - 1
      ? curProjects[0]
      : curProjects[curProjectNo + 1];

  const prevProject =
    curProjectNo === 0
      ? curProjects[curProjects.length - 1]
      : curProjects[curProjectNo - 1];

  return (
    <div className={styles["projects-nav"]}>
      <Link
        to={`/architecture/${prevProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <ion-icon name="arrow-back"></ion-icon>
        <span>{isEnglish ? "Previous project" : "Poprzedni projekt"}</span>
      </Link>
      <Link to=".." relative="path" className={styles.btn}>
        <ion-icon name="chevron-back" size="large"></ion-icon>
        <span>{isEnglish ? "Back to projects" : "Powrót do projektów"}</span>
      </Link>
      <Link
        to={`/architecture/${nextProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <span>{isEnglish ? "Next project" : "Następny projekt"}</span>
        <ion-icon name="arrow-forward"></ion-icon>
      </Link>
    </div>
  );
}

export default ProjectsNavBar;
