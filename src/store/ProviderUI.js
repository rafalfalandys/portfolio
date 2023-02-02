import { useCallback, useState } from "react";
import Context from "./context-ui";

function ProviderUI(props) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isDropDownVisible, setIsDropDownVisible] = useState(false);
  const [areFiltersVisible, setAreFiltersVisible] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [addingProjectMode, setAddingProjectMode] = useState(false);
  const [deletingMode, setDeletingMode] = useState(false);

  // Navigation controls
  const toggleNav = () => setIsNavVisible((prevState) => !prevState);
  const hideNav = () => setIsNavVisible(false);

  // Modal controls
  const showModal = () => setIsModalVisible(true);
  const hideModal = useCallback(() => setIsModalVisible(false), []);

  // portfolio dropdown control
  const showDropDown = () => setIsDropDownVisible(true);
  const hideDropDown = () => setIsDropDownVisible(false);

  // filters control
  const toggleFilters = () => setAreFiltersVisible((prev) => !prev);
  const hideFilters = useCallback(() => setAreFiltersVisible(false), []);

  //language control
  const toggleLanguage = () => setIsEnglish((prevState) => !prevState);

  // Edit mode control
  const toggleEditMode = () => setEditMode((prev) => !prev);
  const addingProjectModeHandler = useCallback(
    (boolean) => setAddingProjectMode(boolean),
    []
  );
  const toggleDeletingMode = () => setDeletingMode((prev) => !prev);

  const context = {
    isNavVisible,
    isModalVisible,
    isDropDownVisible,
    areFiltersVisible,
    isEnglish,
    editMode,
    addingProjectMode,
    deletingMode,

    toggleNav,
    hideNav,

    showModal,
    hideModal,

    hideDropDown,
    showDropDown,

    toggleLanguage,

    toggleFilters,
    hideFilters,

    toggleEditMode,
    addingProjectModeHandler,
    toggleDeletingMode,
  };

  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}

export default ProviderUI;
