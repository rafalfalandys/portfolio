import { ChevronDownIcon, ChevronUpIcon, MinusCircleIcon } from "@heroicons/react/24/outline";
import { Photo } from "../../types";
import styles from "./ImgBar.module.scss";

type Props = {
  image: Photo;
  i: number;
  moveUpHandler: (i: number) => void;
  moveDownHandler: (i: number) => void;
  removeImgHandler: (i: number) => void;
};

const ImgBar: React.FC<Props> = ({ image, i, moveUpHandler, moveDownHandler, removeImgHandler }) => {
  const clickUpHandler = () => moveUpHandler(i);
  const clickDownHandler = () => moveDownHandler(i);
  const clickRemoveHandler = () => removeImgHandler(i);

  return (
    <div key={image.url} className={styles.bar}>
      <label className={styles.number}>{i}</label>

      <figure className={styles.image}>
        <img src={image.thumbnail ? image.thumbnail : image.url} alt="architecture" />
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
      <textarea className={`${styles.url} ${styles["url--value"]}`} name="url" defaultValue={image.url}></textarea>

      <label className={`${styles.thumbnail} ${styles["thumbnail--label"]}`}>Thumb.:</label>
      <textarea
        className={`${styles.thumbnail} ${styles["thumbnail--value"]}`}
        name="thumbnail"
        defaultValue={image.thumbnail}
      ></textarea>

      <input name="_id" readOnly hidden value={image._id} />

      <div className={styles.buttons}>
        <div className={`${styles.icon} ${styles["icon--up"]}`} onClick={clickUpHandler}>
          <ChevronUpIcon />
        </div>
        <div className={`${styles.icon} ${styles["icon--remove"]}`} onClick={clickRemoveHandler}>
          <MinusCircleIcon />
        </div>
        <div className={`${styles.icon} ${styles["icon--down"]}`} onClick={clickDownHandler}>
          <ChevronDownIcon />
        </div>
      </div>
    </div>
  );
};

export default ImgBar;
