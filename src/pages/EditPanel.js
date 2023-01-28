import { Fragment } from "react";
import styles from "./EditPanel.module.scss";
import Header from "../components/Header/Header";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import ContextProjects from "../store/context-projects";
import { useState } from "react";
import EditProjectForm from "../components/EditProjectForm";

function EditPanel() {
  const loaderData = useLoaderData();
  const { curProjectHandler } = useContext(ContextProjects);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showFormHandler = (project) => {
    curProjectHandler(project);
    setIsFormVisible(true);
  };

  const projects = loaderData.map((project) => {
    return (
      <p
        className={styles.project}
        key={project.id}
        onClick={showFormHandler.bind(null, project)}
      >
        {project.title}
      </p>
    );
  });

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.projects}>{projects}</div>
        {isFormVisible && <EditProjectForm />}
      </main>
    </Fragment>
  );
}

export default EditPanel;
