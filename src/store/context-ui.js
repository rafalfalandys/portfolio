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
};

const ContextUI = React.createContext(defaultState);

export default ContextUI;
