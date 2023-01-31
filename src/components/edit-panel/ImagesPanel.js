import { Fragment, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContextProjects from "../../store/context-projects";
import styles from "./ImagesPanel.module.scss";
import ImgBar from "./ImgBar";

function ImagesPanel() {
  const [images, setImages] = useState([]);
  const { curImages } = useContext(ContextProjects);

  useEffect(() => {
    setImages(curImages);
  }, [curImages]);

  const removeImg = (i) =>
    setImages((prev) => prev.filter((_, index) => index !== i));

  const moveImgUp = (i) => {
    if (i === 0) {
      setImages((prev) =>
        prev.map((_, index) => {
          if (index === prev.length - 1) return prev[0];
          else return prev[index + 1];
        })
      );
    } else {
      setImages((prev) =>
        prev.map((img, index) => {
          if (index === i) return prev[i - 1];
          if (index === i - 1) return prev[i];
          else return img;
        })
      );
    }
  };

  const moveImgDown = (i) => {
    if (i === images.length - 1) {
      setImages((prev) =>
        prev.map((_, index) => {
          if (index === 0) return prev[prev.length - 1];
          else return prev[index - 1];
        })
      );
    } else {
      setImages((prev) =>
        prev.map((img, index) => {
          if (index === i) return prev[i + 1];
          if (index === i + 1) return prev[i];
          else return img;
        })
      );
    }
  };

  const addImgHandler = () =>
    setImages((prev) => {
      const updatedImages = prev.slice(0);
      updatedImages.push({ type: "img", url: "" });
      return updatedImages;
    });

  return (
    <Fragment>
      <div className={styles.images}>
        {images?.map((image, i) => (
          <ImgBar
            image={image}
            i={i}
            key={i}
            removeImgHandler={removeImg}
            moveUpHandler={moveImgUp}
            moveDownHandler={moveImgDown}
          />
        ))}
      </div>
      <div className={styles.icon} onClick={addImgHandler}>
        Add Image
        <ion-icon name="add-circle-outline"></ion-icon>
      </div>
    </Fragment>
  );
}

export default ImagesPanel;
