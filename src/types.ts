export type Photo = {
  name: string;
  thumbnail: string;
  type: string;
  url: string;
};

export type Project = {
  description: string;
  id: string;
  images: Photo[];
  key: string;
  location: string;
  opis: string;
  order?: number;
  role: string[];
  tags: string[];
  title: string;
  tytul: string;
  year: string;
};
