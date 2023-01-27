import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,

  isDropDownVisible: false,
  isEnglish: false,

  areFiltersVisible: false,

  toggleNav: () => {},
  hideNav: () => {},

  showModal: () => {},
  hideModal: () => {},

  showDropDown: () => {},
  hideDropDown: () => {},

  toggleLanguage: () => {},

  toggleFilters: () => {},
  hideFilters: () => {},
};

const ContextUI = React.createContext(defaultState);

export default ContextUI;
