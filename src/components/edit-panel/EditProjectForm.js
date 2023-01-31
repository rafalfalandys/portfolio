import { useEffect } from "react";
import { useContext } from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./EditProjectForm.module.scss";
import ImagesPanel from "./ImagesPanel";

function EditProjectForm() {
  const { projectId } = useParams();
  const loaderData = useLoaderData();
  const { curProject, curProjectNoHandler, curProjectHandler, curProjects } =
    useContext(ContextProjects);
  const { addingProjectMode, addingProjectModeHandler } = useContext(ContextUI);

  useEffect(() => {
    const projectIndex = (
      curProjects.length !== 0 ? curProjects : loaderData
    ).findIndex((proj) => proj.id === projectId);

    curProjectNoHandler(projectIndex);
    curProjectHandler(curProjects[projectIndex]);
  }, [curProject, projectId]);

  useEffect(() => {
    if (projectId === "new-project") addingProjectModeHandler(true);
    else addingProjectModeHandler(false);
  }, [projectId]);

  if (curProjects.length === 0 || curProject === undefined) return;

  return (
    <Form className={styles.form} method={addingProjectMode ? "post" : "patch"}>
      <label>Location</label>
      {/* need these divs so react updates form when change projects. Why also string? With empty keys errors accured */}
      <div key={`location-${curProject.location}`}>
        <input
          type="text"
          name="location"
          defaultValue={curProject.location}
          className={styles.text}
        />
      </div>
      <label>Title</label>
      <div key={`title-${curProject.title}`}>
        <input
          type="text"
          name="title"
          defaultValue={curProject.title}
          className={styles.text}
        />
      </div>
      <label>ID</label>
      <div key={`id-${curProject.id}`}>
        <input
          type="text"
          name="id"
          defaultValue={curProject.id}
          className={styles.text}
        />
      </div>
      <label>My role</label>
      <div key={`role-${curProject.role?.join("")}`}>
        <input
          type="text"
          name="role"
          defaultValue={curProject.role?.join(", ")}
          className={styles.text}
        />
      </div>
      <label>Tags</label>
      <div key={`tags-${curProject.tags?.join("")}`}>
        <input
          type="text"
          name="tags"
          defaultValue={curProject.tags?.join(", ")}
          className={styles.text}
        />
      </div>
      <label>Description</label>
      <div key={`description-${curProject.description}`}>
        <textarea
          type="text"
          name="description"
          defaultValue={curProject.description}
          className={`${styles.text} ${styles.description}`}
        />
      </div>
      <label>Opis</label>
      <div key={`opis-${curProject.opis}`}>
        <textarea
          type="text"
          name="opis"
          defaultValue={curProject.opis}
          className={`${styles.text} ${styles.description}`}
        />
      </div>
      <label>Images</label>
      <ImagesPanel />
      <div key={`key-${curProject.key}`}>
        <input
          style={{ display: "none" }}
          type="text"
          name="key"
          defaultValue={curProject.key}
        />
      </div>
      <button className={styles.btn}>
        {addingProjectMode ? "Add Project" : "Confirm changes"}
      </button>
    </Form>
  );
}

export default EditProjectForm;
