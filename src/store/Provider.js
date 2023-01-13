import { useState } from "react";
import Context from "./context";
import { photosData } from "./photos";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curImg, setCurImg] = useState(0);
  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => setIsModalVisible(false);

  const setCurImgHandler = (no) => setCurImg(no);

  const nextImg = () => {
    setCurImg((prev) => {
      if (prev === photosData.length - 1) return 0;
      else return prev + 1;
    });

    setBumpRight(true);
    setTimeout(() => {
      setBumpRight(false);
    }, 300);
  };

  const prevImg = () => {
    setCurImg((prev) => {
      if (prev === 0) return photosData.length - 1;
      else return prev - 1;
    });

    setBumpLeft(true);
    setTimeout(() => {
      setBumpLeft(false);
    }, 300);
  };

  const showDropDown = () => setIsDropDownVisible(true);
  const hideDropDown = () => setIsDropDownVisible(false);

  const context = {
    isNavVisible,
    isModalVisible,
    curImg,
    photosData,
    bumpLeft,
    bumpRight,
    isDropDownVisible,

    toggleNav,
    hideNav,

    showModal,
    hideModal,

    setCurImgHandler,
    nextImg,
    prevImg,

    hideDropDown,
    showDropDown,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Provider;
