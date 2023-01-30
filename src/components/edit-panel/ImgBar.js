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
      <figure>
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

      <label>URL:</label>
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
          <ion-icon name="chevron-up" size="large"></ion-icon>
        </div>
        <div
          className={`${styles.icon} ${styles["icon--remove"]}`}
          onClick={clickRemoveHandler}
        >
          <ion-icon name="remove-circle-outline" size="large"></ion-icon>
        </div>
        <div
          className={`${styles.icon} ${styles["icon--down"]}`}
          onClick={clickDownHandler}
        >
          <ion-icon name="chevron-down" size="large"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default ImgBar;
