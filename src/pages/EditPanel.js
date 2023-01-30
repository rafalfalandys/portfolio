import { Fragment } from "react";
import styles from "./EditPanel.module.scss";
import Header from "../components/Header/Header";
import { redirect } from "react-router-dom";
import { useContext } from "react";
import ContextProjects from "../store/context-projects";
import { useState } from "react";
import EditProjectForm from "../components/edit-panel/EditProjectForm";
import { URL } from "../helper";
import ProjectsList from "../components/edit-panel/ProjectsList";

function EditPanel() {
  const { curProjectHandler } = useContext(ContextProjects);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const showForm = (project) => {
    curProjectHandler(project);
    setIsFormVisible(true);
  };

  return (
    <Fragment>
      <Header />
      <main className={styles.main}>
        <div className={styles.projects}>
          <ProjectsList showFormHandler={showForm} />
        </div>
        {isFormVisible && <EditProjectForm />}
      </main>
    </Fragment>
  );
}

export default EditPanel;

const buildImgsArr = async (data) => {
  const urls = data.getAll("url");
  const types = data.getAll("type");
  return urls.map((el, i) => {
    return { type: types[i], url: el };
  });
};

export async function action({ request }) {
  const data = await request.formData();
  const projects = data.get("projects");
  console.log(projects);

  await fetch(`${URL}/projects.json`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: projects,
  });

  return "nada";

  //   const data = await request.formData();

  //   const images = await buildImgsArr(data);
  //   const projectData = {
  //     location: data.get("location"),
  //     title: data.get("title"),
  //     id: data.get("id"),
  //     role: data.get("role").split(", "),
  //     tags: data.get("tags").split(", "),
  //     description: data.get("description"),
  //     opis: data.get("opis"),
  //     images: images,
  //   };

  //   await fetch(`${URL}/projects/${data.get("key")}.json`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(projectData),
  //   });

  //   return redirect(`/architecture/${data.get("id")}`);
}
