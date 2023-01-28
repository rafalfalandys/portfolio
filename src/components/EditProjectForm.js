import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { Form } from "react-router-dom";
import ContextProjects from "../store/context-projects";
import styles from "./EditProjectForm.module.scss";

function EditProjectForm() {
  const [project, setProject] = useState({});
  const { curProject } = useContext(ContextProjects);

  useEffect(() => {
    setProject(curProject);
  }, [curProject]);

  return (
    <Form className={styles.form}>
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
        defaultValue={project.role}
        className={styles.text}
      />
      <label>Tags</label>
      <input
        type="text"
        name="tags"
        defaultValue={project.tags}
        className={styles.text}
      />
      <label>Description</label>
      <textarea
        type="text"
        name="description"
        defaultValue={project.description}
        className={styles.text}
      />
      <label>Opis</label>
      <textarea
        type="text"
        name="opis"
        defaultValue={project.opis}
        className={styles.text}
      />
      <label>Images</label>
      <input
        type="text"
        name="images"
        defaultValue={project.images}
        className={styles.text}
      />
    </Form>
  );
}

export default EditProjectForm;
