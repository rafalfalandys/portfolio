import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/use-firebase";
import styles from "./UploadImgForm.module.scss";
import { FormEvent, useState } from "react";

const UploadImgForm = () => {
  const { uploadFile } = useFirebase();
  const { projectId } = useParams();
  const [textToCopy, setTextToCopy] = useState("");

  const uploadImageHandler = async (e: FormEvent) => {
    e.preventDefault();

    const targetEl = e.target as HTMLElement;
    const fileInput = targetEl.querySelector("#file-input") as HTMLInputElement;
    const file = fileInput.files ? fileInput.files[0] : null;

    if (!file) return;
    const path = projectId ? `architecture/${projectId}` : `photos`;
    const url = await uploadFile(`${path}/${file.name}`, file);

    if (url) setTextToCopy(url);
  };

  return (
    <form onSubmit={uploadImageHandler} id="upload-form" encType="multipart/form-data" className={styles.form}>
      <h3>Upload image:</h3>
      <input type="file" id="file-input" name="file" accept="image/*" />
      <button type="submit" className={styles.btn}>
        Upload
      </button>
      <div className={styles["copy-wrapper"]}>
        <input type="text" className={styles.copy} readOnly value={textToCopy || "image url copy"} />
        <button
          type="button"
          onClick={() => {
            navigator.clipboard.writeText(textToCopy);
          }}
          className={`${styles.btn} ${styles["copy-btn"]}`}
        >
          copy
        </button>
      </div>
    </form>
  );
};

export default UploadImgForm;
