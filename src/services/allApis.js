import { base_url } from "./baseurl";
import { commonstructure } from "./commonstructure";

export const getBooks = async () => {
  return await commonstructure("GET", `${base_url}/books`, {});
};

export const addBooks = async (body) => {
  return await commonstructure("POST", `${base_url}/books`, body);
};

export const updateBooks = async (body) => {
  return await commonstructure("PUT", `${base_url}/books/${body.id}`, body);
};

export const deleteBooks = async (id) => {
  return await commonstructure("DELETE", `${base_url}/books/${id}`, {});
};
