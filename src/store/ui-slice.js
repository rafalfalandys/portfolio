import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isMobileNavVisible: false,
    isModalVisible: false,
    isPortfolioDropDownVisible: false,
    isEnglish: false,
    isFiltersBarVisible: false,
    bumpLeft: false,
    bumpRight: false,
  },
  reducers: {
    controlMobileNav(state, action) {
      if (action.payload === "toggle")
        state.isMobileNavVisible = !state.isMobileNavVisible;
      else state.isMobileNavVisible = !!action.payload;
    },

    controlModal(state, action) {
      if (action.payload === "show") state.isModalVisible = true;
      if (action.payload === "hide") state.isModalVisible = false;
    },

    controlPortfolioDropDown(state, action) {
      if (action.payload === "hide") state.isPortfolioDropDownVisible = false;
      if (action.payload === "show") state.isPortfolioDropDownVisible = true;
    },

    toggleLanguage(state) {
      state.isEnglish = !state.isEnglish;
    },

    controlFiltersBar(state, action) {
      if (action.payload === "toggle")
        state.isFiltersBarVisible = !state.isFiltersBarVisible;
      if (action.payload === "hide") state.isFiltersBarVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
