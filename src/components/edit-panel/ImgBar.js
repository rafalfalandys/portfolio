import styles from "./ImgBar.module.scss";

function ImgBar({
  image,
  i,
  moveUpHandler,
  moveDownHandler,
  removeImgHandler,
}) {
  const clickUpHandler = () => moveUpHandler(i);
  const clickDownHandler = () => moveDownHandler(i);
  const clickRemoveHandler = () => removeImgHandler(i);

  return (
    <div key={image.url} className={styles.bar}>
      <label className={styles.number}>{i}</label>
      <figure className={styles.image}>
        <img src={image.url} alt="architecture" />
      </figure>

      <label>Type:</label>

      <select
        className={styles.type}
        name="type"
        defaultValue={image.type ? image.type : "img"}
      >
        <option value="img">Image</option>
        <option value="video">Video</option>
      </select>

      <label className={styles["url-label"]}>URL:</label>
      <textarea
        className={styles.url}
        type="url"
        name="url"
        defaultValue={image.url}
      ></textarea>
      <div className={styles.buttons}>
        <div
          className={`${styles.icon} ${styles["icon--up"]}`}
          onClick={clickUpHandler}
        >
          <ion-icon name="chevron-up"></ion-icon>
        </div>
        <div
          className={`${styles.icon} ${styles["icon--remove"]}`}
          onClick={clickRemoveHandler}
        >
          <ion-icon name="remove-circle-outline"></ion-icon>
        </div>
        <div
          className={`${styles.icon} ${styles["icon--down"]}`}
          onClick={clickDownHandler}
        >
          <ion-icon name="chevron-down"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ImgBar;
