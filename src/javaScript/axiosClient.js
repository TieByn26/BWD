const { default: axios } = require("axios");

const configAxios = {
  baseURL: "http://26.190.212.183:3978/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
};

const axiosClient = axios.create(configAxios);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

module.exports = { axiosClient };
