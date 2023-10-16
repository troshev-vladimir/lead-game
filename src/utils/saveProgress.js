import game from "@/api/game";

export default async function saveProgressOnServer() {
  const userMany = +localStorage.getItem("userMany") || 0;
  const step = +localStorage.getItem("step") || 0;
  const quizeStep = +localStorage.getItem("quizeStep") || 0;
  const taskStep = +localStorage.getItem("taskStep") || 0;
  const id = localStorage.getItem("userPhone") || "";
  const token = localStorage.getItem("userToken") || "";
  const userName = localStorage.getItem("userName") || "";
  const finalstep = false;

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
    if (userName.length && step < 1)
      fetch(
        "https://max43.ru:8333/ka_uprbase2/ru_RU/hs/education/v1/candidateupdate",
        {
          method: "PUT",
          body: JSON.stringify({
            id,
            token,
            Name: userName,
          }),
        }
      );
  } catch (error) {
    console.log(error);
  }
}
