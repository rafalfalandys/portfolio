import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import styles from "./EditProjectForm.module.scss";
import ImagesPanel from "./ImagesPanel";

function EditProjectForm() {
  const [project, setProject] = useState({});
  const { curProject } = useContext(ContextProjects);

  useEffect(() => {
    setProject(curProject);
  }, [curProject]);

  return (
    <Form className={styles.form} method="post">
      <label>Location</label>
      <input
        type="text"
        name="location"
        defaultValue={project.location}
        className={styles.text}
      />
      <label>Title</label>
      <input
        type="text"
        name="title"
        defaultValue={project.title}
        className={styles.text}
      />
      <label>ID</label>
      <input
        type="text"
        name="id"
        defaultValue={project.id}
        className={styles.text}
      />
      <label>My role</label>
      <input
        type="text"
        name="role"
        defaultValue={project.role?.join(", ")}
        className={styles.text}
      />
      <label>Tags</label>
      <input
        type="text"
        name="tags"
        defaultValue={project.tags?.join(", ")}
        className={styles.text}
      />
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        defaultValue={project.description}
        className={`${styles.text} ${styles.description}`}
      />
      <label>Opis</label>
      <textarea
        type="text"
        name="opis"
        defaultValue={project.opis}
        className={`${styles.text} ${styles.description}`}
      />
      <label>Images</label>
      <ImagesPanel />
      <input
        style={{ display: "none" }}
        type="text"
        name="key"
        defaultValue={project.key}
      />
      <button className={styles.btn}>Confirm Changes</button>
    </Form>
  );
}

export default EditProjectForm;
