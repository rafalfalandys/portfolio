import { useParams } from "react-router-dom";
import useFirebase from "../../hooks/use-firebase";
import styles from "./UploadImgForm.module.scss";
import { useState } from "react";

const UploadImgForm = () => {
  const { uploadFile } = useFirebase();
  const { projectId } = useParams();
  const [textToCopy, setTextToCopy] = useState("");

  const uploadImageHandler = async (e) => {
    e.preventDefault();

    const fileInput = e.target.querySelector("#file-input");
    const file = fileInput.files[0];

    if (!file) {
      console.error("Please select a file");
      return;
    }

    const url = await uploadFile(
      `architecture/${projectId}/${file.name}`,
      file
    );

    console.log(url);

    setTextToCopy(url);
  };

  return (
    <form
      onSubmit={uploadImageHandler}
      id="upload-form"
      encType="multipart/form-data"
      className={styles.form}
    >
      <h3>Upload image:</h3>
      <input type="file" id="file-input" name="file" accept="image/*" />
      <button type="submit" className={styles.btn}>
        Upload
      </button>
      <div className={styles["copy-wrapper"]}>
        <input
          type="text"
          className={styles.copy}
          readOnly
          value={textToCopy || "image url copy"}
        />
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
