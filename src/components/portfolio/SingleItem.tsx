import { useContext } from "react";
import ContextProjects from "../../store/context-projects";
import ContextUI from "../../store/context-ui";
import styles from "./SingleItem.module.scss";
import { Photo } from "../../types";

type Props = {
  imagesArr: Photo[];
  no: number;
  curImgOnHover?: boolean;
  url: string;
  style?: { [key: string]: string };
  name: string;
};

const SingleItem: React.FC<Props> = (props) => {
  const { showModal } = useContext(ContextUI);
  const { curImagesHandler, curImgHandler } = useContext(ContextProjects);

  const onClickHandler = () => {
    curImagesHandler(props.imagesArr);
    curImgHandler(0);
    if (props.no !== undefined) {
      curImgHandler(props.no);
      showModal();
    }
  };

  const onMouseEnterHandler = () => {
    if (props.curImgOnHover) curImgHandler(props.no);
  };

  return (
    <div className={styles.container} style={props.style}>
      <img src={props.url} alt={props.name} onClick={onClickHandler} onMouseEnter={onMouseEnterHandler} />
    </div>
  );
};

export default SingleItem;
