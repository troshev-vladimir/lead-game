import axios from "../axios";
const event = new Event("server-error");

class CandidateMethods {
  candidateUpdate(user) {
    return axios
      .put("candidateupdate", user)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        window.dispatchEvent(event);
        throw error;
      });
  }

  candidateCurrentProgress(id, token, programPromocode) {
    return axios
      .get("candidatecurrentprogress", {
        params: { id, token, promo: programPromocode },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        window.dispatchEvent(event);
        throw error;
      });
  }
}

export default new CandidateMethods();
