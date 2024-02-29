import { Fragment } from "react";
import styles from "./EditArchitecturePanel.module.scss";
import Header from "../../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import ProjectsList from "../../../components/edit-panel/ProjectsList";
import ContextUI from "../../../store/context-ui";

const EditArchitecturePanel = () => {
  const { editMode, toggleEditMode, deletingMode, toggleDeletingMode } = useContext(ContextUI);

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
        <ProjectsList />
        <Outlet />
      </main>
    </Fragment>
  );
};

export default EditArchitecturePanel;
