window.onload = () => {
  const audio = document.getElementById("bg-music");
  const openMessageButton = document.getElementById("open-message");
  const messageCard = document.getElementById("message-card");

  if (!audio || !openMessageButton || !messageCard) {
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
    messageCard.classList.add("is-visible");
    messageCard.setAttribute("aria-hidden", "false");
    openMessageButton.classList.add("is-hidden");
    openMessageButton.disabled = true;
    tryPlay();
  });
};
