import { ReactNode, useEffect } from "react";
import Context, { ProjectsState } from "./context-projects";
import { useCallback, useState } from "react";
import { Photo, Project } from "../types";
import { emptyProject } from "../helper/helper";

const ProviderProjects: React.FC<{ children: ReactNode | ReactNode[] }> = (props) => {
  const [curProjects, setCurProjects] = useState<Project[]>([]);
  const [curProjectNo, setCurProjectNo] = useState(0);
  const [curProject, setCurProject] = useState<Project>(emptyProject);

  const [curImages, setCurImages] = useState<Photo[]>([]);
  const [curImg, setCurImg] = useState(0);

  const [bumpLeft, setBumpLeft] = useState(false);
  const [bumpRight, setBumpRight] = useState(false);

  const [filters, setFilters] = useState<string[]>([]);
  const [sorting, setSorting] = useState("default");

  // Projects Control
  const curProjectsHandler = useCallback((projects: Project[]) => {
    setCurProjects(projects);
  }, []);
  const curProjectNoHandler = useCallback((no: number) => setCurProjectNo(no), []);
  const curProjectHandler = useCallback((project: Project) => setCurProject(project), []);
  const changeProjectsOrder = (i: number, isRight: boolean) => {
    setCurProjects((prev) => {
      // checking extremes first
      return i === (isRight ? prev.length - 1 : 0)
        ? prev.map((_, index) => {
            if (isRight) {
              return index === 0 ? prev[prev.length - 1] : prev[index - 1];
            } else {
              return index === prev.length - 1 ? prev[0] : prev[index + 1];
            }
          })
        : // normal cases now
          prev.map((project, index) => {
            if (index === i) return prev[i + (isRight ? 1 : -1)];
            if (index === i + (isRight ? 1 : -1)) return prev[i];
            else return project;
          });
    });
  };

  // Images control
  useEffect(() => {
    if (curProject) setCurImages(curProject.images);
  }, [curProject]);

  const curImagesHandler = (arr: Photo[]) => setCurImages(arr);
  const curImgHandler = useCallback((no: number) => setCurImg(no), []);

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

  const filtersHandler = (filter: string) => {
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

  const sortingHandler = (value: string) => setSorting(value);

  const context: ProjectsState = {
    curProjects,
    curProject,
    curProjectNo,

    curImages,
    curImg,

    bumpLeft,
    bumpRight,

    filters,
    sorting,

    curProjectsHandler,
    curProjectHandler,
    curProjectNoHandler,
    changeProjectsOrder,

    curImagesHandler,
    curImgHandler,
    nextImg,
    prevImg,

    filtersHandler,
    sortingHandler,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default ProviderProjects;
