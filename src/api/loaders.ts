////////////////////////////////////////////////////////
/////////////////// loader functions ///////////////////
////////////////////////////////////////////////////////

import { LoaderFunction } from "react-router-dom";
import { Photo, Project } from "../types";
import { URL } from "../config";

const apiCall = async (type: "proj" | "photo") => {
  try {
    const isProj = type === "proj";
    const response = await fetch(`${URL}/${isProj ? "projects" : "photos"}`);

    if (!response.ok) {
      throw new Error(`Something went wrong (${response.status})`);
    }
    const data = await response.json();

    return isProj ? (data.data.projects as Project[]) : (data.data as Photo[]);
  } catch (error) {
    console.error(error);
  }
};

export const loadPhotos: LoaderFunction = async () => {
  const projects = await apiCall("photo");
  return projects as Project[];
};

export const loadProjects: LoaderFunction = async () => {
  const photos = await apiCall("proj");
  return photos as Photo[];
};
