import axios from "axios";

const instance = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "https://max43.ru:12244/ka_uprbase2/ru_RU/hs/education/v1"
      : "https://max43.ru:12233/ka_uprbase2/ru_RU/hs/education/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default instance;
