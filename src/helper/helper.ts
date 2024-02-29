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

export const buildImgsArr = (data: FormData) => {
  const urls = data.getAll("url");
  const types = data.getAll("type");
  const thumbnails = data.getAll("thumbnail");
  const names = data.getAll("name");
  const _ids = data.getAll("_id");

  return urls.map((el, i) => {
    return {
      name: names[i],
      thumbnail: thumbnails[i],
      type: types[i],
      url: el,
      _id: _ids[i] || undefined,
    };
  }) as Array<Photo>;
};
