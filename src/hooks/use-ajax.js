import { useContext, useState } from "react";
import Context from "../store/context";

const url = `https://portfolio-f338a-default-rtdb.europe-west1.firebasedatabase.app/`;

function useAjax() {
  const [isLoading, setisLoading] = useState(true);
  const { allProjectsHandler } = useContext(Context);

  const fetchProjects = async () => {
    setisLoading(true);
    const response = await fetch(`${url}projects.json`);

    if (!response.ok) {
      throw new Error(`Something went wrong (${response.status})`);
    }

    const data = await response.json();

    allProjectsHandler(data["-NMPSVcmPcUplf-Wwe-W"]);
    setisLoading(false);
  };

  return { fetchProjects, isLoading };
}

export default useAjax;
