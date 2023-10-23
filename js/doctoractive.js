const icons = document.querySelectorAll(".material-symbols-outlined");

icons.forEach((iconact) => {
  iconact.addEventListener("click", () => {
    const currentlyActive = document.querySelector(
      ".material-symbols-outlined.actives"
    );
    if (currentlyActive) {
      currentlyActive.classList.remove("actives");
    }
    iconact.classList.add("actives");
  });
});
