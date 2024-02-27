import { useContext } from "react";
import { NavLink, useSubmit } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./ProjectBar.module.scss";
import useFirebase from "../../hooks/use-firebase";

function ProjectBar({ onSlide, id, title, index, keyValue }) {
  const { deletingMode } = useContext(ContextUI);
  const { curProjects, curProjectsHandler } = useContext(ContextProjects);
  const submit = useSubmit();
  const { user } = useFirebase();

  const slideHandler = (isRight) => {
    if (!deletingMode) onSlide(index, isRight);
  };

  const deleteProjectHandler = () => {
    const proceed = window.confirm(`Delete ${title}?`);
    if (proceed) {
      const updatedProjects = curProjects.filter(
        (project) => project.title !== title
      );
      curProjectsHandler(updatedProjects);
      submit({ key: keyValue, token: user.accessToken }, { method: "delete" });
    }
  };

  return (
    <div className={styles.project}>
      <div
        className={`${styles.left} ${styles.icon}`}
        onClick={slideHandler.bind(null, false)} // false stands for !isRight
      >
        {!deletingMode && <ion-icon name="chevron-back-outline"></ion-icon>}
      </div>
      <NavLink
        to={id}
        className={(navData) => (navData.isActive ? styles.active : "")}
      >
        {title}
      </NavLink>
      <div
        className={`${styles.right} ${styles.icon}`}
        onClick={slideHandler.bind(null, true)} // false stands for isRight
      >
        {!deletingMode && <ion-icon name="chevron-forward-outline"></ion-icon>}
      </div>
      {deletingMode && (
        <div
          className={`${styles.delete} ${styles.icon}`}
          onClick={deleteProjectHandler}
        >
          <ion-icon name="trash-outline" size="large"></ion-icon>
        </div>
      )}
    </div>
  );
}

export default ProjectBar;
