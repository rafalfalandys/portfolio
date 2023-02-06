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
        <img
          src={image.thumbnail ? image.thumbnail : image.url}
          alt="architecture"
        />
      </figure>

      <label className={`${styles.name} ${styles["name--label"]}`}>Name:</label>
      <span className={`${styles.name} ${styles["name--value"]}`}>
        <input type="text" name="name" defaultValue={image.name}></input>
      </span>

      <label className={`${styles.type} ${styles["type--label"]}`}>Type:</label>
      <select
        className={`${styles.type} ${styles["type--value"]}`}
        name="type"
        defaultValue={image.type ? image.type : "img"}
      >
        <option value="img">Image</option>
        <option value="video">Video</option>
        <option value="youtube">YouTube</option>
      </select>

      <label className={`${styles.url} ${styles["url--label"]}`}>URL:</label>
      <textarea
        className={`${styles.url} ${styles["url--value"]}`}
        type="url"
        name="url"
        defaultValue={image.url}
      ></textarea>

      <label className={`${styles.thumbnail} ${styles["thumbnail--label"]}`}>
        Thumb.:
      </label>
      <textarea
        className={`${styles.thumbnail} ${styles["thumbnail--value"]}`}
        type="url"
        name="thumbnail"
        defaultValue={image.thumbnail}
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
