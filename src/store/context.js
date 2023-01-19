import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
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
