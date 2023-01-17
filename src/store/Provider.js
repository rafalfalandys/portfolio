import { useCallback, useState } from "react";
import Context from "./context";
import projectsData from "./projects-data/projects-data";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curImages, setCurImages] = useState([]);
  const [curImg, setCurImg] = useState(0);
  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);

  // Navigation controls
  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  // Modal controls
  const showModal = () => setIsModalVisible(true);
  const hideModal = useCallback(() => setIsModalVisible(false), []);

  const curImagesHandler = (arr) => setCurImages(arr);
  const curImgHandler = (no) => setCurImg(no);

  const nextImg = useCallback(() => {
    setCurImg((prev) => {
      if (prev === curImages.length - 1) return 0;
      else return prev + 1;
    });

    setBumpRight(true);
    setTimeout(() => {
      setBumpRight(false);
    }, 300);
  }, [curImages]);

  const prevImg = useCallback(() => {
    setCurImg((prev) => {
      if (prev === 0) return curImages.length - 1;
      else return prev - 1;
    });

    setBumpLeft(true);
    setTimeout(() => {
      setBumpLeft(false);
    }, 300);
  }, [curImages]);

  const showDropDown = () => setIsDropDownVisible(true);
  const hideDropDown = () => setIsDropDownVisible(false);

  const context = {
    isNavVisible,
    isModalVisible,
    curImages,
    curImg,
    // photosData,
    projectsData,
    bumpLeft,
    bumpRight,
    isDropDownVisible,

    toggleNav,
    hideNav,

    showModal,
    hideModal,

    curImagesHandler,
    curImgHandler,
    nextImg,
    prevImg,

    hideDropDown,
    showDropDown,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Provider;
