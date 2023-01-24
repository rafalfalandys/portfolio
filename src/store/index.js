import { configureStore } from "@reduxjs/toolkit";
import projectsReducer from "./projects-slice";

const store = configureStore({
  reducer: { projects: projectsReducer },
});

export default store;
