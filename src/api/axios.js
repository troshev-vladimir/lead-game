import axios from "axios";

const instance = axios.create({
  baseURL: "https://max43.ru:12233/ka_uprbase2/ru_RU/hs/education/v1",
  // process.env.NODE_ENV === "development"
  //   ? "https://max43.ru:12244/ka_uprbase2/ru_RU/hs/education/v1"
  //   : "https://max43.ru:12233/ka_uprbase2/ru_RU/hs/education/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      window.dispatchEvent(
        new CustomEvent("unauthorized", {
          detail: { message: "unauthorized" }, //error.response.data.error.message },
        })
      );
    }
    return Promise.reject(error.response.data);
  }
);

export default instance;
