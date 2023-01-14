import { useContext } from "react";
import Context from "../../store/context";
import styles from "./SingleItem.module.scss";

function SingleItem(props) {
  const ctx = useContext(Context);

  const onClickHandler = () => {
    if (props.no !== undefined) {
      ctx.curImagesHandler(props.imagesArr);
      ctx.curImgHandler(props.no);
      ctx.showModal();
    }
  };

  return (
    <div className={styles.container}>
      <img src={props.url} alt={props.name} onClick={onClickHandler} />
    </div>
  );
}

export default SingleItem;
