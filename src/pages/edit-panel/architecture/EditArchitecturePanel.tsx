import { Fragment } from "react";
import styles from "./EditArchitecturePanel.module.scss";
import Header from "../../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ContextProjects from "../../../store/context-projects";
import { useState } from "react";
import EditProjectForm from "../../../components/edit-panel/EditProjectForm";
import ProjectsList from "../../../components/edit-panel/ProjectsList";
import ContextUI from "../../../store/context-ui";
import { Project } from "../../../types";

const EditArchitecturePanel = () => {
  const { curProjectHandler } = useContext(ContextProjects);
  const { editMode, toggleEditMode, deletingMode, toggleDeletingMode } = useContext(ContextUI);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = (project: Project) => {
    curProjectHandler(project);
    setIsFormVisible(true);
  };

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.modes}>
          <h1 className={styles.modebtn} onClick={toggleEditMode}>
            Edit mode: <span>{`${editMode ? "on" : "off"}`}</span>
          </h1>
          <h1 className={styles.modebtn} onClick={toggleDeletingMode}>
            Delete mode: <span>{`${deletingMode ? "on" : "off"}`}</span>
          </h1>
        </div>
        <ProjectsList showFormHandler={showForm} />
        <Outlet />

        {isFormVisible && <EditProjectForm />}
      </main>
    </Fragment>
  );
};

export default EditArchitecturePanel;
