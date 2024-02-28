export type Photo = {
  name: string;
  thumbnail: string;
  type: string;
  url: string;
  order: number;
  _id?: string;
};

// export type Project = {
//   description: string;
//   id: string;
//   images: Photo[];
//   key: string;
//   location: string;
//   opis: string;
//   order?: number;
//   role: string[];
//   tags: string[];
//   title: string;
//   tytul: string;
//   year: string;
// };

export interface Project {
  title: string;
  tytul: string;
  description: string;
  opis: string;
  location: string;
  order?: number;
  images: Photo[];
  role: string[];
  tags: string[];
  yearStart: number;
  yearEnd: number;
  id: string;
  _id?: string;
}
