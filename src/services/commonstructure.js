import axios from "axios";

export const commonstructure = async (method, url, data) => {
  let config = {
    method,
    url,
    data,
  };
  return await axios(config)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
