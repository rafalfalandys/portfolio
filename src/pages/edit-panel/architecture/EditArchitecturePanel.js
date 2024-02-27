import { Fragment } from "react";
import styles from "./EditArchitecturePanel.module.scss";
import Header from "../../../components/Header/Header";
import { Outlet, redirect } from "react-router-dom";
import { useContext } from "react";
import ContextProjects from "../../../store/context-projects";
import { useState } from "react";
import EditProjectForm from "../../../components/edit-panel/EditProjectForm";
import { URL } from "../../../config";
import ProjectsList from "../../../components/edit-panel/ProjectsList";
import ContextUI from "../../../store/context-ui";
import { buildImgsArr } from "../../../helper/helper";

function EditArchitecturePanel() {
  const { curProjectHandler } = useContext(ContextProjects);
  const { editMode, toggleEditMode, deletingMode, toggleDeletingMode } =
    useContext(ContextUI);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = (project) => {
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
}

export default EditArchitecturePanel;

////////////////////////////////////////////////////////
/////////////////// action functions ///////////////////
////////////////////////////////////////////////////////

const loadProject = async (project, token, method = "PATCH") => {
  await fetch(`${URL}/projects/${project.key}.json?auth=${token}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
};

export async function action({ request }) {
  const data = await request.formData();
  const token = await data.get("token");

  // updating order of projects
  if (data.has("projects")) {
    const projects = JSON.parse(data.get("projects"));

    projects.forEach(async (project, i) => {
      const updatedProject = { ...project, order: `${i}`.padStart(2, "0") };
      await loadProject(updatedProject, token);
    });

    return redirect("/architecture");
  }

  // editing/adding project
  if (data.has("title")) {
    const images = await buildImgsArr(data);
    const projectData = {
      location: data.get("location"),
      title: data.get("title"),
      tytul: data.get("tytul"),
      id: data.get("title").replaceAll(" ", "-").toLowerCase(),
      year: data.get("year"),
      role: data.get("role").split(", "),
      tags: data.get("tags").split(", "),
      description: data.get("description"),
      opis: data.get("opis"),
      key: data.get("key"),
      images: images,
    };

    await loadProject(projectData, token, request.method);
    console.log("project loaded");

    if (request.method === "POST") return null;
    else return redirect(`/architecture/${projectData.id}`);
  }

  // deleting projects
  if (request.method === "DELETE") {
    await fetch(`${URL}/projects/${data.get("key")}.json?auth=${token}`, {
      method: "DELETE",
    });
    return null;
  } else return null;
}
