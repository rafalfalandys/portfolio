import { Fragment, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ContextProjects from "../../store/context-projects";
import styles from "./ImagesPanel.module.scss";
import ImgBar from "./ImgBar";
import { Photo } from "../../types";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { emptyPhoto } from "../../helper/helper";
import { useSubmit } from "react-router-dom";

const ImagesPanel = () => {
  const [images, setImages] = useState<Photo[]>([]);
  const { curImages } = useContext(ContextProjects);
  const submit = useSubmit();

  useEffect(() => {
    setImages(curImages);
  }, [curImages]);

  const removeImg = (i: number, _id?: string) => {
    const proceed = window.confirm(`Are you sure you want to delete this image?`);

    if (proceed) {
      if (_id) submit({ _id }, { method: "delete" });
      setImages((prev) => prev.filter((_, index) => index !== i));
    }
  };

  const moveImgUp = (i: number) => {
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

  const moveImgDown = (i: number) => {
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
      updatedImages.push(emptyPhoto);
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
        <PlusCircleIcon />
      </div>
    </Fragment>
  );
};

export default ImagesPanel;
