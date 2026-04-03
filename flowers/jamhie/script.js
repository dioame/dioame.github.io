window.onload = () => {
  const audio = document.getElementById("bg-music");
  const openMessageButton = document.getElementById("open-message");
  const flowersStage = document.getElementById("flowers-stage");
  const messageCard = document.getElementById("message-card");

  if (!audio || !openMessageButton || !flowersStage || !messageCard) {
    return;
  }

  const tryPlay = () => {
    const playPromise = audio.play();

    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {});
    }
  };

  openMessageButton.addEventListener("click", () => {
    document.body.classList.remove("not-loaded");
    document.body.classList.add("flowers-only");
    messageCard.classList.remove("is-visible");
    messageCard.classList.add("is-hidden-instant");
    messageCard.setAttribute("aria-hidden", "true");
    flowersStage.classList.remove("is-hidden");
    flowersStage.setAttribute("aria-hidden", "false");
    openMessageButton.classList.add("is-hidden");
    openMessageButton.disabled = true;
    tryPlay();
  });
};
