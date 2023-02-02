import React from "react";

export const emptyProject = {
  title: "",
  id: "",
  location: "",
  role: [],
  tags: [],
  description: "",
  opis: "",
  images: [{ type: "img", url: "" }],
};

const defaultState = {
  curProjects: [],
  curProjectNo: 0,
  curProject: {},

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
