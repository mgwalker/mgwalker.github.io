window.toggleUIMode = (mode) => {
  const root = document.querySelector("html");
  root.classList.remove("ui-mode--dark");
  root.classList.remove("ui-mode--light");

  if (mode) {
    root.classList.add(`ui-mode--${mode}`);
  }
};
