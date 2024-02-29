import { textsEN, textsPL } from "../assets/texts";
import { URL } from "../config";
import { buildImgsArr } from "../helper/helper";
import { Photo, Project } from "../types";
import { ActionFunction, redirect } from "react-router-dom";

////////////////////////////////////////////////////////
/////////////////////// api calls //////////////////////
////////////////////////////////////////////////////////

const updateSingleEl = (el: Photo | Project, order: number, all?: boolean) => {
  return new Promise((resolve, reject) => {
    const isProject = "title" in el;
    const data = all ? { ...el, order } : { order };

    fetch(`${URL}/${isProject ? "projects" : "photos"}/${el._id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to patch (${isProject ? el.title : el.url})`);
        }
        resolve(`Patched (${isProject ? el.title : el.url})`);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const createSingleEl = (el: Photo | Project, i: number) => {
  return new Promise((resolve, reject) => {
    const isProject = "title" in el;
    fetch(`${URL}/${isProject ? "projects" : "photos"}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...el, order: i }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to create (${isProject ? el.title : el.url})`);
        }
        resolve(`Created (${isProject ? el.title : el.url})`);
      })
      .catch((error) => {
        reject(`Upload failed (${isProject ? el.title : el.url}): ${error.message}`);
      });
  });
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

////////////////// Photos //////////////////

export const updatePhotos: ActionFunction = async ({ request }) => {
  try {
    const data = await request.formData();

    if (request.method !== "DELETE") {
      const images = await buildImgsArr(data);

      const promises = images.map((img, i) => {
        if (img._id) return () => updateSingleEl(img, i);
        else return () => createSingleEl(img, i);
      });

      await Promise.all(promises.map((promise) => promise()));

      return null;
    } else {
      // deleting projects
      await fetch(`${URL}photos/${data.get("_id")}`, {
        method: "DELETE",
      });

      return null;
    }
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

////////////////// Projects //////////////////

export const updateAllProjects: ActionFunction = async ({ request }) => {
  const data = await request.formData();

  // updating order of projects
  if (data.has("projects")) {
    const projectsJson = data.get("projects") as string;
    const projects = JSON.parse(projectsJson) as Project[];

    const promises = projects.map((project, i: number) => {
      if (project._id) return () => updateSingleEl(project, i);
      else return () => createSingleEl(project, i);
    });

    await Promise.all(promises.map((promise) => promise()));

    return null;
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
      _id: data.get("projId") as string,
    };

    const order = +data.get("order")! as number;

    if (request.method === "POST") {
      await createSingleEl(projectData, order);
      return null;
    } else {
      await updateSingleEl(projectData, order, true);

      return redirect(`/architecture/${projectData.id}`);
    }
  }

  // deleting projects
  if (request.method === "DELETE") {
    await fetch(`${URL}/projects/${data.get("_id")}`, {
      method: "DELETE",
    });
    return null;
  } else return null;
};
