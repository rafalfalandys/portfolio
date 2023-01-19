import { useCallback, useState } from "react";
import Context from "./context";
import projectsData from "./projects-data/projects-data";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [curProject, setCurProject] = useState(0);
  const [curImages, setCurImages] = useState([]);
  const [curImg, setCurImg] = useState(0);
  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [filters, setFilters] = useState([]);

  // Navigation controls
  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  // Modal controls
  const showModal = () => setIsModalVisible(true);
  const hideModal = useCallback(() => setIsModalVisible(false), []);

  // Current Project controls
  const curProjectHandler = (no) => setCurProject(no);

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

  // portfolio dropdown control
  const showDropDown = () => setIsDropDownVisible(true);
  const hideDropDown = () => setIsDropDownVisible(false);

  //language control
  const toggleLanguage = () => setIsEnglish((prevState) => !prevState);

  // filters control
  const toggleFilters = () => setAreFiltersVisible((prev) => !prev);
  const hideFilters = () => setAreFiltersVisible(false);
  const filtersHandler = (filter) => {
    if (filter === "all") setFilters([]);
    else
      setFilters((prev) => {
        const updatedFilters = prev.slice(0);
        if (prev.includes(filter)) {
          updatedFilters.splice(prev.indexOf(filter), 1);
        } else {
          updatedFilters.push(filter);
        }
        return updatedFilters;
      });
  };

  const context = {
    isNavVisible,
    isModalVisible,
    curProject,
    curImages,
    curImg,
    projectsData,
    bumpLeft,
    bumpRight,
    isDropDownVisible,
    isEnglish,
    areFiltersVisible,
    filters,

    toggleNav,
    hideNav,

    curProjectHandler,

    showModal,
    hideModal,

    curImagesHandler,
    curImgHandler,
    nextImg,
    prevImg,

    hideDropDown,
    showDropDown,

    toggleLanguage,

    toggleFilters,
    hideFilters,
    filtersHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default Provider;
