import { useEffect } from "react";
import { useContext } from "react";
import { Form, useLoaderData, useParams } from "react-router-dom";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./EditProjectForm.module.scss";
import ImagesPanel from "./ImagesPanel";
import useFirebase from "../../hooks/use-firebase";
import UploadImgForm from "./UploadImgForm";
import { Project } from "../../types";

const EditProjectForm = () => {
  const { projectId } = useParams();
  const loaderData = useLoaderData() as Project[];
  const { curProject, curProjectNoHandler, curProjectHandler, curProjects } = useContext(ContextProjects);
  const { addingProjectMode, addingProjectModeHandler } = useContext(ContextUI);
  const { user } = useFirebase();

  useEffect(() => {
    const projectIndex = (curProjects.length !== 0 ? curProjects : loaderData).findIndex(
      (proj) => proj.id === projectId
    );

    curProjectNoHandler(projectIndex);
    curProjectHandler(curProjects[projectIndex]);
  }, [curProject, projectId, curProjectHandler, curProjectNoHandler, curProjects, loaderData]);

  useEffect(() => {
    if (projectId === "new-project") addingProjectModeHandler(true);
    else addingProjectModeHandler(false);
  }, [projectId, addingProjectModeHandler]);

  if (curProjects.length === 0 || curProject === undefined) return;

  return (
    <div className={styles["form__wrapper"]}>
      <Form className={styles.form} method={addingProjectMode ? "post" : "patch"}>
        <label>Location:</label>
        {/* need these divs so react updates form when change projects. Why also string? With empty keys errors accured */}
        <div key={`location-${curProject.location}`}>
          <input type="text" name="location" defaultValue={curProject.location} className={styles.text} />
        </div>
        <label>Title:</label>
        <div key={`title-${curProject.title}`}>
          <input type="text" name="title" defaultValue={curProject.title} className={styles.text} />
        </div>
        <label>Tytuł:</label>
        <div key={`title-${curProject.tytul}`}>
          <input type="text" name="tytul" defaultValue={curProject.tytul} className={styles.text} />
        </div>
        <label>Year:</label>
        <div key={`id-${curProject.id}`}>
          <input type="text" name="year" defaultValue={curProject.yearStart} className={styles.text} />
        </div>
        <label>My role:</label>
        <div key={`role-${curProject.role?.join("")}`}>
          <input type="text" name="role" defaultValue={curProject.role?.join(", ")} className={styles.text} />
        </div>
        <label>Tags:</label>
        <div key={`tags-${curProject.tags?.join("")}`}>
          <input type="text" name="tags" defaultValue={curProject.tags?.join(", ")} className={styles.text} />
        </div>
        <label>Description:</label>
        <div key={`description-${curProject.description}`} className={styles.wrapper}>
          <textarea
            name="description"
            defaultValue={curProject.description}
            className={`${styles.text} ${styles.description}`}
          />
        </div>
        <label>Opis:</label>
        <div key={`opis-${curProject.opis}`} className={styles.wrapper}>
          <textarea name="opis" defaultValue={curProject.opis} className={`${styles.text} ${styles.description}`} />
        </div>
        {/* <label>Images:</label> */}
        <ImagesPanel />
        <div key={`key-${curProject.id}`}>
          <input style={{ display: "none" }} type="text" name="key" defaultValue={curProject.id} />
        </div>
        <button className={styles.btn}>{addingProjectMode ? "Add Project" : "Confirm changes"}</button>
        {user && <input name="token" readOnly hidden value={user.accessToken} />}
      </Form>
      <div className={styles.uploadImgForm}>
        <UploadImgForm />
      </div>
    </div>
  );
};

export default EditProjectForm;
