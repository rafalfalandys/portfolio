import { useContext } from "react";
import { NavLink, useSubmit } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./ProjectBar.module.scss";
import useFirebase from "../../hooks/use-firebase";
import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "@heroicons/react/24/outline";

type Props = {
  onSlide: (index: number, isRight: boolean) => void;
  id: string;
  title: string;
  index: number;
  keyValue: string;
};

const ProjectBar: React.FC<Props> = ({ onSlide, id, title, index, keyValue }) => {
  const { deletingMode } = useContext(ContextUI);
  const { curProjects, curProjectsHandler } = useContext(ContextProjects);
  const submit = useSubmit();
  const { user } = useFirebase();

  const slideHandler = (isRight: boolean) => {
    if (!deletingMode) onSlide(index, isRight);
  };

  const deleteProjectHandler = () => {
    const proceed = window.confirm(`Delete ${title}?`);
    if (proceed) {
      const updatedProjects = curProjects.filter((project) => project.title !== title);
      curProjectsHandler(updatedProjects);
      if (user) submit({ key: keyValue, token: user.accessToken }, { method: "delete" });
    }
  };

  return (
    <div className={styles.project}>
      <div
        className={`${styles.left} ${styles.icon}`}
        onClick={slideHandler.bind(null, false)} // false stands for !isRight
      >
        {!deletingMode && <ChevronLeftIcon />}
      </div>
      <NavLink to={id} className={(navData) => (navData.isActive ? styles.active : "")}>
        {title}
      </NavLink>
      <div
        className={`${styles.right} ${styles.icon}`}
        onClick={slideHandler.bind(null, true)} // false stands for isRight
      >
        {!deletingMode && <ChevronRightIcon />}
      </div>
      {deletingMode && (
        <div className={`${styles.delete} ${styles.icon}`} onClick={deleteProjectHandler}>
          <TrashIcon />
        </div>
      )}
    </div>
  );
};

export default ProjectBar;
