import { createSlice } from "@reduxjs/toolkit";

const projectsSlice = createSlice({
  name: "projects",
  initialState: {
    allProjects: [],
    curProjects: [],
    curProject: 0,
    filters: [],
  },
  reducers: {
    setAllProjects(state, action) {
      state.allProjects = action.payload;
      state.curProjects = action.payload;
    },

    setCurProject(state, action) {
      state.curProject = action.payload.curProject;
    },

    filterProjects(state, action) {
      if (action.payload === "all" || action.payload === undefined) {
        state.filters = [];
      } else {
        if (state.filters.includes(action.payload.filter))
          state.filters.splice(state.filters.indexOf(action.payload.filter));
        else state.filters.push(action.payload.filter);
      }

      state.allProjects.filter((project) => {
        if (state.filters.length === 0) return project;
        return state.filters
          .map((filter) => project.tags?.some((tag) => tag === filter))
          .reduce((acc, boolean) => acc || boolean);
      });
    },
  },
});

export const projectsActions = projectsSlice.actions;

export default projectsSlice.reducer;
