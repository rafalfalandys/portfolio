import { useEffect } from "react";
import { useCallback, useState } from "react";
import Context from "./context-projects";

function ProviderProjects(props) {
  const [allProjects, setAllProjects] = useState([]);
  const [curProjects, setCurProjects] = useState([]);
  const [curProjectNo, setCurProjectNo] = useState(0);
  const [curProject, setCurProject] = useState({});

  const [curImages, setCurImages] = useState([]);
  const [curImg, setCurImg] = useState(0);

  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);

  const [filters, setFilters] = useState([]);

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

  // Images control
  useEffect(() => {
    if (curProject && curProject !== {}) setCurImages(curProject.images);
  }, [curProject]);

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
    allProjects,
    curProjects,
    curProject,
    curProjectNo,

    curImages,
    curImg,

    bumpLeft,
    bumpRight,

    filters,

    allProjectsHandler,
    curProjectsHandler,
    curProjectHandler,
    curProjectNoHandler,

    curImagesHandler,
    curImgHandler,
    nextImg,
    prevImg,

    filtersHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default ProviderProjects;
