import { useDispatch } from "react-redux";
import { projectsActions } from "../../store/projects-slice";
import { uiActions } from "../../store/ui-slice";
import styles from "./SingleItem.module.scss";

function SingleItem(props) {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(projectsActions.setImages(props.imagesArr));
    dispatch(projectsActions.setImg(0));
    if (props.no !== undefined) {
      dispatch(projectsActions.setImg(props.no));
      dispatch(uiActions.controlModal("show"));
    }
  };

  const onMouseOverHandler = () => {
    if (props.curImgOnHover) dispatch(projectsActions.setImg(props.no));
  };

  return (
    <div className={styles.container}>
      {!props.type && (
        <img
          src={props.url}
          alt={props.name}
          onClick={onClickHandler}
          onMouseOver={onMouseOverHandler}
          style={props.style}
        />
      )}
      {props.type && (
        <video
          src={props.url}
          alt={props.name}
          onClick={onClickHandler}
          onMouseOver={onMouseOverHandler}
          style={props.style}
        />
      )}
    </div>
  );
}

export default SingleItem;
