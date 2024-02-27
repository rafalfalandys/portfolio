export const buildImgsArr = async (data) => {
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
  });
};
