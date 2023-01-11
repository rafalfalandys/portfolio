import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,
  curImg: "",

  toggleNav: () => {},
  hideNav: () => {},

  toggleModal: () => {},
  hideModal: () => {},

  setCurImgHandler: () => {},
};

const Context = React.createContext(defaultState);

export default Context;
