import React from "react";
import { Photo, Project } from "../types";
import { emptyProject } from "../helper/helper";

export type ProjectsState = {
  curProjects: Project[];
  curProjectNo: number;
  curProject: Project;

  curImages: Photo[];
  curImg: number;

  bumpLeft: boolean;
  bumpRight: boolean;

  filters: string[];
  sorting: string;

  curProjectsHandler: (projects: Project[]) => void;
  curProjectNoHandler: (no: number) => void;
  curProjectHandler: (project: Project) => void;
  changeProjectsOrder: (i: number, isRight: boolean) => void;

  curImagesHandler: (arr: Photo[]) => void;
  curImgHandler: (no: number) => void;
  nextImg: () => void;
  prevImg: () => void;

  filtersHandler: (filter: string) => void;
  sortingHandler: (value: string) => void;
};

const defaultState: ProjectsState = {
  curProjects: [],
  curProjectNo: 0,
  curProject: emptyProject,

  curImages: [],
  curImg: 0,

  bumpLeft: false,
  bumpRight: false,

  filters: [],
  sorting: "default",

  curProjectsHandler: () => {},
  curProjectNoHandler: () => {},
  curProjectHandler: () => {},
  changeProjectsOrder: () => {},

  curImagesHandler: () => {},
  curImgHandler: () => {},
  nextImg: () => {},
  prevImg: () => {},

  filtersHandler: () => {},
  sortingHandler: () => {},
};

const ContextProjects = React.createContext(defaultState);

export default ContextProjects;
