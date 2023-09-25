import axios from "../axios";

class GameMethods {
  sendCurrentStep(step) {
    return axios
      .post("/step", { step })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }

  getCurrentStep() {
    return axios
      .get("/step")
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  }
}

export default new GameMethods();
