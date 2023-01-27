import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,

  allProjects: [],
  curProjects: [],
  curProjectNo: 0,
  curProject: {},

  curImages: [],
  curImg: 0,

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
  curProjectNoHandler: () => {},
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
