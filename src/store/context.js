import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
  curImg: "",
  photosData: [],
  bumpLeft: false,
  bumpRight: false,
  isDropDownVisible: false,

  toggleNav: () => {},
  hideNav: () => {},

  showModal: () => {},
  hideModal: () => {},

  setCurImgHandler: () => {},
  nextImg: () => {},
  prevImg: () => {},

  showDropDown: () => {},
  hideDropDown: () => {},
};

const Context = React.createContext(defaultState);

export default Context;
