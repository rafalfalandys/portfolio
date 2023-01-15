import { useContext } from "react";
import Context from "../../store/context";
import styles from "./SingleItem.module.scss";

function SingleItem(props) {
  const ctx = useContext(Context);

  const onClickHandler = () => {
    ctx.curImagesHandler(props.imagesArr);
    ctx.curImgHandler(0);
    if (props.no !== undefined) {
      ctx.curImgHandler(props.no);
      ctx.showModal();
    }
  };

  const onMouseOverHandler = () => {
    if (props.curImgOnHover) ctx.curImgHandler(props.no);
  };

  return (
    <div className={styles.container}>
      <img
        src={props.url}
        alt={props.name}
        onClick={onClickHandler}
        onMouseOver={onMouseOverHandler}
        style={props.style}
      />
    </div>
  );
}

export default SingleItem;
