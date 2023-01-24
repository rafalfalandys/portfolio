import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects-slice";
import uiReducer from "./ui-slice";

const store = configureStore({
  reducer: { projects: projectsReducer, ui: uiReducer },
});

export default store;
