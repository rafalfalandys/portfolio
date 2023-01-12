import { useCallback, useEffect, useState } from "react";
import Context from "./context";
import { photosData } from "./photos";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curImg, setCurImg] = useState(0);

  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);

  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  /////////////////// Event listener functions //////////////////

  const arrowHandler = useCallback((e) => {
    if (e.key === "ArrowRight") nextImg();
    if (e.key === "ArrowLeft") prevImg();
  }, []);

  const escHandler = useCallback((e) => {
    if (e.key === "Escape") {
      console.log("czesc");
      hideModal();
    }
  });

  useEffect(() => {
    if (isModalVisible) {
      console.log("listener added");
      document.addEventListener("keydown", escHandler);
      document.addEventListener("keydown", arrowHandler);
    }
    if (!isModalVisible) {
      console.log("listener removed");
      document.removeEventListener("keydown", escHandler);
      document.removeEventListener("keydown", arrowHandler);
    }
  }, [isModalVisible]);
  /////////////////// Event listener functions //////////////////

  const showModal = () => {
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  const setCurImgHandler = (no) => {
    setCurImg(no);
  };

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

  // useEffect(() => {
  //   setBump(true);
  //   const timer = setTimeout(() => {
  //     setBump(false);
  //   }, 300);

  //   return () => clearTimeout(timer);
  // }, [ctx.curImg]);

  const context = {
    isNavVisible,
    isModalVisible,
    curImg,
    photosData,
    bumpLeft,
    bumpRight,

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
