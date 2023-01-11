import { useContext } from "react";
import Context from "../../store/context";

function ImageBig(props) {
  const ctx = useContext(Context);

  const url = ctx.photosData[props.imgNo].url;

  return <img src={url} alt="big" />;
}

export default ImageBig;
