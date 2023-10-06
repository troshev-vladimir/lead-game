import axios from "../axios";

class GameMethods {
  saveProgress(step) {
    return axios
      .post("/CandidateProgress", { step })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  restoreProgress() {
    return axios
      .get("/CandidateCurrentProgress")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        // throw new Error(error);
        return {
          sum: 0,
          slide: -1,
          quizeStep: 0,
          taskStep: 0,
        };
      });
  }
}

export default new GameMethods();
