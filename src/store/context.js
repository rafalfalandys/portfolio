import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
  curProject: 0,
  curImages: [],
  curImg: 0,
  projectsData: [],
  bumpLeft: false,
  bumpRight: false,
  isDropDownVisible: false,
  isEnglish: false,
  areFilterVisible: false,
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
  filtersHandler: () => {},
};

const Context = React.createContext(defaultState);

export default Context;
