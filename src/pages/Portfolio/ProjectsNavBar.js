import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { projectsActions } from "../../store/projects-slice";
import styles from "./ProjectsNavBar.module.scss";

function ProjectsNavBar() {
  const dispatch = useDispatch();
  const { curProjects, curProject } = useSelector((state) => state.projects);
  const { isEnglish } = useSelector((state) => state.ui);

  const onClickHandler = () => dispatch(projectsActions.setImg(0));

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
        <span>{isEnglish ? "Previous project" : "Poprzedni projekt"}</span>
      </Link>
      <Link to="/portfolio/architecture" className={styles.btn}>
        <ion-icon name="chevron-back" size="large"></ion-icon>
        <span>{isEnglish ? "Back to projects" : "Powrót do projektów"}</span>
      </Link>
      <Link
        to={`/portfolio/architecture/${nextProject.id}`}
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
