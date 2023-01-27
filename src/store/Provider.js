import { useCallback, useState } from "react";
import Context from "./context";

function Provider(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [allProjects, setAllProjects] = useState([]);
  const [curProjects, setCurProjects] = useState([]);
  const [curProjectNo, setCurProjectNo] = useState(0);
  const [curProject, setCurProject] = useState({});

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

  // Project controls
  const allProjectsHandler = useCallback(
    (projects) => setAllProjects(projects),
    []
  );
  const curProjectsHandler = useCallback((projects) => {
    setCurProjects(projects);
  }, []);
  const curProjectNoHandler = (no) => setCurProjectNo(no);
  const curProjectHandler = (project) => setCurProject(project);

  const curImagesHandler = (arr) => setCurImages(arr);
  const curImgHandler = useCallback((no) => setCurImg(no), []);

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
  const hideFilters = useCallback(() => setAreFiltersVisible(false), []);
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

    allProjects,
    curProjects,
    curProject,
    curProjectNo,

    curImages,
    curImg,

    bumpLeft,
    bumpRight,
    isDropDownVisible,
    isEnglish,
    areFiltersVisible,
    filters,

    toggleNav,
    hideNav,

    allProjectsHandler,
    curProjectsHandler,
    curProjectHandler,
    curProjectNoHandler,

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
