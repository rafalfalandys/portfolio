import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import ContextProjects, { emptyProject } from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import ProjectBar from "./ProjectBar";
import styles from "./ProjectsList.module.scss";

function ProjectsList() {
  const loaderData = useLoaderData().sort((a, b) => a.order - b.order);
  const { curProjects, curProjectsHandler, changeProjectsOrder } =
    useContext(ContextProjects);
  const [isOrderChanged, setIsOrderChanged] = useState(false);
  const submit = useSubmit();
  const navigate = useNavigate();

  useEffect(() => {
    curProjectsHandler(loaderData);
  }, []);

  const slideProject = (i, isRight) => {
    setIsOrderChanged(true);
    changeProjectsOrder(i, isRight);
  };

  const confirmHandler = () => {
    submit({ projects: JSON.stringify(curProjects) }, { method: "patch" });
  };

  const addProjectHandler = () => {
    const title = "New Project";
    const id = title.replace(" ", "-").toLowerCase();
    curProjectsHandler((prev) => [
      ...prev,
      {
        ...emptyProject,
        title: title,
        id: id,
      },
    ]);
    navigate(id);
  };

  const projects = curProjects.map((project, i) => {
    return (
      <ProjectBar
        id={project.id}
        title={project.title}
        index={i}
        key={project.id}
        keyValue={project.key}
        onSlide={slideProject}
      />
    );
  });
  return (
    <div className={styles.projects}>
      {projects}
      <div className={styles["add-project"]} onClick={addProjectHandler}>
        <ion-icon name="add-circle-outline" size="large"></ion-icon>
      </div>
      {isOrderChanged && (
        <div className={styles.confirm} onClick={confirmHandler}>
          Confirm changes
        </div>
      )}
    </div>
  );
}

export default ProjectsList;
