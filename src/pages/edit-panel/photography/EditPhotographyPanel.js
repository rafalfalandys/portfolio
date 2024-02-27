import { Fragment, useEffect } from "react";
import styles from "./EditPhotographyPanel.module.scss";
import Header from "../../../components/Header/Header";
import { Form, useLoaderData } from "react-router-dom";
import { useContext } from "react";
import ContextUI from "../../../store/context-ui";
import ImagesPanel from "../../../components/edit-panel/ImagesPanel";
import useFirebase from "../../../hooks/use-firebase";
import ContextProjects from "../../../store/context-projects";
import UploadImgForm from "../../../components/edit-panel/UploadImgForm";

function EditPhotographyPanel() {
  const { editMode, toggleEditMode, deletingMode, toggleDeletingMode } =
    useContext(ContextUI);
  const { curImagesHandler } = useContext(ContextProjects);
  const { user } = useFirebase();
  const photosData = useLoaderData();

  useEffect(() => {
    curImagesHandler(photosData.photos);
  }, [curImagesHandler, photosData]);

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
        <div className={styles["form__wrapper"]}>
          <Form method="post" className={styles.form}>
            <ImagesPanel />
            <button type="submit" className={styles.btn}>
              Wyślij
            </button>
            {user && (
              <input name="token" readOnly hidden value={user.accessToken} />
            )}
            <input name="key" readOnly hidden value={photosData.photosKey} />
          </Form>
          <div className={styles.upload}>
            <UploadImgForm />
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default EditPhotographyPanel;
