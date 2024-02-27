import { URL } from "../config";
import { buildImgsArr } from "../helper/helper";

export async function loadPhotos() {
  const response = await fetch(`${URL}photos.json`);
  if (!response.ok) {
    throw new Error(`Something went wrong (${response.status})`);
  }
  const data = await response.json();

  let photos;
  let photosKey;

  for (const key in data) {
    photosKey = key;
    photos = data[key];
  }

  return { photos, photosKey };
}

////////////////////////////////////////////////////////
/////////////////// action functions ///////////////////
////////////////////////////////////////////////////////

const loadPhotosToStorage = async (photos, token, key) => {
  const photosData = { [key]: photos };
  try {
    await fetch(`${URL}/photos.json?auth=${token}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(photosData),
    });
  } catch (error) {
    console.log(error);
  }
};

export async function updatePhotos({ request }) {
  const data = await request.formData();
  const token = await data.get("token");
  const key = await data.get("key");

  const images = await buildImgsArr(data);

  loadPhotosToStorage(images, token, key);

  return null;
}
