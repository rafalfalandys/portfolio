import { Photo, Project } from "../types";

export const buildImgsArr = (data: FormData) => {
  const urls = data.getAll("url");
  const types = data.getAll("type");
  const thumbnails = data.getAll("thumbnail");
  const names = data.getAll("name");

  return urls.map((el, i) => {
    return {
      type: types[i],
      url: el,
      thumbnail: thumbnails[i],
      name: names[i],
    };
  }) as Array<Photo>;
};

export const emptyProject: Project = {
  title: "",
  id: "",
  location: "",
  role: [],
  tags: [],
  description: "",
  opis: "",
  images: [{ type: "img", url: "", name: "", thumbnail: "" }],
  tytul: "",
  yearStart: 2022,
  yearEnd: 2022,
};
