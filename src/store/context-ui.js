import React from "react";

const defaultState = {
  isNavVisible: false,
  isModalVisible: false,

  isDropDownVisible: false,
  isEnglish: false,

  areFiltersVisible: false,

  editMode: false,
  addingProjectMode: false,
  deletingMode: false,

  isLoggedIn: false,

  toggleNav: () => {},
  hideNav: () => {},

  showModal: () => {},
  hideModal: () => {},

  showDropDown: () => {},
  hideDropDown: () => {},

  toggleLanguage: () => {},

  toggleFilters: () => {},
  hideFilters: () => {},

  toggleEditMode: () => {},
  addingProjectModeHandler: () => {},
  toggleDeletingMode: () => {},

  login: () => {},
  logout: () => {},
};

const ContextUI = React.createContext(defaultState);

export default ContextUI;
