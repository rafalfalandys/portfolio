import { useState } from "react";
import Context from "./context";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curImg, setCurImg] = useState("");

  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  const toggleModal = () => setIsModalVisible((prevState) => !prevState);
  const hideModal = () => setIsModalVisible(false);
  const setCurImgHandler = (url) => setCurImg(url);

  const context = {
    isNavVisible,
    isModalVisible,
    curImg,

    toggleNav,
    hideNav,

    toggleModal,
    hideModal,

    setCurImgHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Provider;
