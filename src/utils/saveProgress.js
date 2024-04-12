import game from "@/api/game";
import CandidateMethods from "@/api/candidate";

export default async function saveProgressOnServer(isFinal = false) {
  const userMany = +localStorage.getItem("userMany") || 0;
  const step = +localStorage.getItem("step") || 0;
  const quizeStep = +localStorage.getItem("quizeStep") || 0;
  const taskStep = +localStorage.getItem("taskStep") || 0;
  const id = localStorage.getItem("userPhone") || "";
  const token = localStorage.getItem("userToken") || "";
  const email = localStorage.getItem("userEmail") || "";
  const userName = localStorage.getItem("userName") || "";
  const finalstep = isFinal;

  const progres = {
    quizestep: quizeStep,
    taskstep: taskStep,
    step,
    sum: userMany,
    id,
    token,
    finalstep,
  };

  try {
    await game.saveProgress(progres);
  } catch (error) {
    console.log(error);
  }

  try {
    if (userName.length && step == 15)
      CandidateMethods.candidateUpdate({
        id,
        token,
        Name: userName,
        Email: email
      });
  } catch (error) {
    console.log(error);
  }
}
