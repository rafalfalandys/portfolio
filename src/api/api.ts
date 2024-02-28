import { textsEN, textsPL } from "../assets/texts";
import { URL } from "../config";
import { Photo, Project } from "../types";
import { ActionFunction, LoaderFunction, redirect } from "react-router-dom";

////////////////////////////////////////////////////////
/////////////////// loader functions ///////////////////
////////////////////////////////////////////////////////

export const loadPhotos: LoaderFunction = async () => {
  const response = await fetch(`${URL}photos?limit=200`);

  if (!response.ok) {
    throw new Error(`Something went wrong (${response.status})`);
  }
  const data = await response.json();

  return data.data;
};

export const loadProjects: LoaderFunction = async () => {
  try {
    const response = await fetch(`${URL}projects`);
    if (!response.ok) {
      throw new Error(`Something went wrong (${response.status})`);
    }
    const data = await response.json();

    return data.data.projects as Project[];
  } catch (error) {
    console.error(error);
    return null;
  }
};

////////////////////////////////////////////////////////
/////////////////// action functions ///////////////////
////////////////////////////////////////////////////////

// export const loadPhotosToStorage = async (photos: Photo[], token: string, key: string) => {
//   const photosData = { [key]: photos };
//   try {
//     await fetch(`${URL}/photos`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(photosData),
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const buildImgsArr = (data: FormData) => {
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

const updatePhoto = (img: Photo, i: number) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}photos/${img._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...img, order: i }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to patch image (${img.url})`);
        }
        resolve(`Image patched (${img.url})`);
      })
      .catch((error) => {
        reject(`Failed patching image (${img.url}): ${error.message}`);
      });
  });
};

const createPhoto = (img: Photo, i: number) => {
  return new Promise((resolve, reject) => {
    fetch(`${URL}photos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...img, order: i }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to create image (${img.url})`);
        }
        resolve(`Image created (${img.url})`);
      })
      .catch((error) => {
        reject(`Failed creating image (${img.url}): ${error.message}`);
      });
  });
};

export const updatePhotos: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData();
    const images = await buildImgsArr(data);

    const promises = images.map((img, i) => {
      if (img._id) return updatePhoto(img, i);
      else return createPhoto(img, i);
    });

    await Promise.all(promises);

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const sendMessage: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  // generating date
  const now = new Date();
  const date = new Intl.DateTimeFormat("pl-PL", {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "numeric",
    year: "numeric",
    weekday: "long",
  }).format(now);

  const formData = {
    name: data.get("name"),
    contact: data.get("contact"),
    msg: data.get("msg"),
    date,
  };

  const response = await fetch(URL + "messages.json", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  if (!response.ok) {
    return {
      msg: textsEN.contactPage.actionError,
      pl: textsPL.contactPage.actionError,
      ok: response.ok,
    };
  }
  return {
    msg: textsEN.contactPage.actionOk,
    pl: textsPL.contactPage.actionOk,
    ok: response.ok,
  };
};

export const patchProject = async (project: Project, method = "PATCH") => {
  await fetch(`${URL}/projects/${project._id}`, {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(project),
  });
};

export const updateAllProjects: ActionFunction = async ({ request }) => {
  const data = await request.formData();
  const token = await data.get("token");

  // updating order of projects
  if (data.has("projects")) {
    const projectsJson = data.get("projects") as string;
    const projects = JSON.parse(projectsJson);

    projects.forEach(async (project: Project, i: number) => {
      const updatedProject = { ...project, order: +`${i}`.padStart(2, "0") };
      await patchProject(updatedProject);
    });

    return redirect("/architecture");
  }

  // editing/adding project
  if (data.has("title")) {
    const images = await buildImgsArr(data);
    const projectData: Project = {
      location: data.get("location") as string,
      title: data.get("title") as string,
      tytul: data.get("tytul") as string,
      id: (data.get("title") as string).replaceAll(" ", "-").toLowerCase(),
      yearStart: +data.get("year")! as number,
      yearEnd: +data.get("year")! as number,
      role: (data.get("role") as string).split(", "),
      tags: (data.get("tags") as string).split(", "),
      description: data.get("description") as string,
      opis: data.get("opis") as string,
      images: images,
    };

    await patchProject(projectData, request.method);

    if (request.method === "POST") return null;
    else return redirect(`/architecture/${projectData.id}`);
  }

  // deleting projects
  if (request.method === "DELETE") {
    await fetch(`${URL}/projects/${data.get("key")}.json?auth=${token}`, {
      method: "DELETE",
    });
    return null;
  } else return null;
};
