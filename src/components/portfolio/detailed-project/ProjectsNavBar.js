import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../../../store/context";
import styles from "./ProjectsNavBar.module.scss";

function ProjectsNavBar() {
  const ctx = useContext(Context);

  const { curProjects, curProject, curImgHandler, isEnglish } = ctx;

  // need to stop here because react renders this components before useEffects set the context
  if (curProjects.length === 0 || curProject === -1) return;

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