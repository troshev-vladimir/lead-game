import axios from "axios";

const instance = axios.create({
  baseURL: "https://max43.ru:12233/ka_uprbase2/ru_RU/hs/education/v1",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json;charset=UTF-8",
  },
});

export default instance;
