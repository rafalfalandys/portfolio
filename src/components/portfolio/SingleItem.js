import { useContext } from "react";
import Context from "../../store/context";
import styles from "./SingleItem.module.scss";

function SingleItem(props) {
  const ctx = useContext(Context);

  const onClickHandler = () => {
    ctx.setCurImgHandler(props.url);
    ctx.toggleModal();
  };

  return (
    <div className={styles.container}>
      <img src={props.url} alt={props.name} onClick={onClickHandler} />
    </div>
  );
}

export default SingleItem;
