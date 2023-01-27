import React from "react";

const defaultState = {
  allProjects: [],
  curProjects: [],
  curProjectNo: 0,
  curProject: {},

  curImages: [],
  curImg: 0,

  bumpLeft: false,
  bumpRight: false,

  filters: [],

  allProjectsHandler: () => {},
  curProjectsHandler: () => {},
  curProjectNoHandler: () => {},
  curProjectHandler: () => {},

  curImagesHandler: () => {},
  curImgHandler: () => {},
  nextImg: () => {},
  prevImg: () => {},

  filtersHandler: () => {},
};

const ContextProjects = React.createContext(defaultState);

export default ContextProjects;
