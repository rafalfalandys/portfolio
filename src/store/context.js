import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
  curImages: [],
  curImg: "",
  projectsData: [],
  bumpLeft: false,
  bumpRight: false,
  isDropDownVisible: false,

  toggleNav: () => {},
  hideNav: () => {},

  showModal: () => {},
  hideModal: () => {},

  curImagesHandler: () => {},
  curImgHandler: () => {},
  nextImg: () => {},
  prevImg: () => {},

  showDropDown: () => {},
  hideDropDown: () => {},
};

const Context = React.createContext(defaultState);

export default Context;
