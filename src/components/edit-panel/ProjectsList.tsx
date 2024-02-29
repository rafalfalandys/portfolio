import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useNavigate, useSubmit } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import ProjectBar from "./ProjectBar";
import styles from "./ProjectsList.module.scss";
import { emptyProject } from "../../helper/helper";
import { Project } from "../../types";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const ProjectsList = () => {
  const loaderData = useLoaderData() as Project[];
  const { curProjects, curProjectsHandler, changeProjectsOrder } = useContext(ContextProjects);
  const [isOrderChanged, setIsOrderChanged] = useState(false);
  const submit = useSubmit();
  const navigate = useNavigate();

  useEffect(() => {
    curProjectsHandler(loaderData);
  }, [curProjectsHandler, loaderData]);

  const slideProject = (i: number, isRight: boolean) => {
    setIsOrderChanged(true);
    changeProjectsOrder(i, isRight);
  };

  const confirmHandler = () => {
    submit({ projects: JSON.stringify(curProjects) }, { method: "patch" });
  };

  const addProjectHandler = () => {
    const title = "New Project";
    const id = title.replace(" ", "-").toLowerCase();
    const newProject: Project = { ...emptyProject, title: title, id, order: curProjects.length };
    curProjectsHandler([...loaderData, newProject]);
    navigate(id);
  };

  const projects = curProjects.map((project, i) => {
    return (
      <ProjectBar id={project.id} title={project.title} index={i} key={i} _id={project._id!} onSlide={slideProject} />
    );
  });

  return (
    <div className={styles.projects}>
      {projects}
      <div className={styles["add-project"]} onClick={addProjectHandler}>
        <PlusCircleIcon />
      </div>
      {isOrderChanged && (
        <div className={styles.confirm} onClick={confirmHandler}>
          Confirm changes
        </div>
      )}
    </div>
  );
};

export default ProjectsList;
