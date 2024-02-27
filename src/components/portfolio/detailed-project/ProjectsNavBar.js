import { useContext } from "react";
import { Link } from "react-router-dom";
import ContextProjects from "../../../store/context-projects";
import styles from "./ProjectsNavBar.module.scss";
import useText from "../../../hooks/use-text";

function ProjectsNavBar() {
  const { curProjects, curProjectNo, curImgHandler } =
    useContext(ContextProjects);
  const text = useText();

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
        <span>{text.projNav.prev}</span>
      </Link>
      <Link to=".." relative="path" className={styles.btn}>
        <ion-icon name="chevron-back" size="large"></ion-icon>
        <span>{text.projNav.back}</span>
      </Link>
      <Link
        to={`/architecture/${nextProject.id}`}
        className={`${styles.btn} ${styles["btn--nav"]}`}
        onClick={onClickHandler}
      >
        <span>{text.projNav.next}</span>
        <ion-icon name="arrow-forward"></ion-icon>
      </Link>
    </div>
  );
}

export default ProjectsNavBar;
