window.onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);

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

  setTimeout(() => {
    openMessageButton.classList.add("is-visible");
  }, 6500);

  openMessageButton.addEventListener("click", () => {
    messageCard.classList.add("is-visible");
    messageCard.setAttribute("aria-hidden", "false");
    openMessageButton.classList.remove("is-visible");
    openMessageButton.disabled = true;
    tryPlay();
  });
};
