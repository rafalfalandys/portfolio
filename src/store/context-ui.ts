import React from "react";

export type PhotosState = {
  isNavVisible: boolean;
  isModalVisible: boolean;

  isDropDownVisible: boolean;
  isEnglish: boolean;

  areFiltersVisible: boolean;

  editMode: boolean;
  addingProjectMode: boolean;
  deletingMode: boolean;

  isLoggedIn: boolean;

  toggleNav: () => void;
  hideNav: () => void;

  showModal: () => void;
  hideModal: () => void;

  showDropDown: () => void;
  hideDropDown: () => void;

  toggleLanguage: () => void;

  toggleFilters: () => void;
  hideFilters: () => void;

  toggleEditMode: () => void;
  addingProjectModeHandler: (boolean: boolean) => void;
  toggleDeletingMode: () => void;

  login: () => void;
  logout: () => void;
};

const defaultState: PhotosState = {
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
