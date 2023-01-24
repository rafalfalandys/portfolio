import { projectsActions } from "./projects-slice";

const URL = `https://portfolio-f338a-default-rtdb.europe-west1.firebasedatabase.app/`;

export const fetchProjects = () => {
  return async (dispatch) => {
    // fetch data
    const fetchData = async () => {
      const response = await fetch(`${URL}projects.json`);
      if (!response.ok)
        throw new Error(`Something went wrong (${response.status})`);
      const data = await response.json();
      return data["-NMPSVcmPcUplf-Wwe-W"];
    };

    // action
    try {
      const projectsData = await fetchData();
      dispatch(projectsActions.setAllProjects(projectsData));
      dispatch(projectsActions.filterProjects());
    } catch (error) {
      console.log(error);
    }
  };
};
