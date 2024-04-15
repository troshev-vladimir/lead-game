import axios from "../axios";

class GameMethods {
  saveProgress(progress) {
    return axios
      .post("/candidateprogress", progress)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  // restoreProgress() {
  //   const id = localStorage.getItem("userPhone") || "";
  //   const token = localStorage.getItem("userToken") || "";

  //   return axios
  //     .get("/candidatecurrentprogress", {
  //       params: {
  //         id,
  //         token,
  //       },
  //     })
  //     .then((response) => {
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       throw new Error(error);
  //     });
  // }
}

export default new GameMethods();
