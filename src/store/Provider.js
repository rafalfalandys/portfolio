import { useState } from "react";
import Context from "./context";
import { photosData } from "./photos";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curImg, setCurImg] = useState(0);

  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  const showModal = () => setIsModalVisible(true);
  const hideModal = () => {
    setIsModalVisible(false);
  };

  const setCurImgHandler = (no) => {
    console.log(no, curImg);
    setCurImg(no);
  };

  const nextImg = () =>
    setCurImg((prev) => {
      if (prev === photosData.length - 1) return 0;
      else return prev + 1;
    });
  const prevImg = () =>
    setCurImg((prev) => {
      if (prev === 0) return photosData.length - 1;
      else return prev - 1;
    });

  const context = {
    isNavVisible,
    isModalVisible,
    curImg,
    photosData,

    toggleNav,
    hideNav,

    showModal,
    hideModal,

    setCurImgHandler,
    nextImg,
    prevImg,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Provider;
