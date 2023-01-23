import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
  allProjects: [],
  curProjects: [],
  curProject: 0,
  curImages: [],
  curImg: 0,
  projectsData: [],
  bumpLeft: false,
  bumpRight: false,
  isDropDownVisible: false,
  isEnglish: false,
  areFiltersVisible: false,
  filters: [],

  toggleNav: () => {},
  hideNav: () => {},

  showModal: () => {},
  hideModal: () => {},

  allProjectsHandler: () => {},
  curProjectsHandler: () => {},
  curProjectHandler: () => {},

  curImagesHandler: () => {},
  curImgHandler: () => {},
  nextImg: () => {},
  prevImg: () => {},

  showDropDown: () => {},
  hideDropDown: () => {},

  toggleLanguage: () => {},

  toggleFilters: () => {},
  hideFilters: () => {},
  filtersHandler: () => {},
};

const Context = React.createContext(defaultState);

export default Context;
