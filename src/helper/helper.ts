import { Photo, Project } from "../types";

export const emptyPhoto: Photo = { type: "img", url: "", name: "", thumbnail: "", order: 0 };

export const emptyProject: Project = {
  title: "",
  id: "",
  location: "",
  role: [],
  tags: [],
  description: "",
  opis: "",
  images: [],
  tytul: "",
  yearStart: 2022,
  yearEnd: 2022,
};
