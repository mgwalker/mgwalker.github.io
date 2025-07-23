window.toggleUIMode = (mode) => {
  const root = document.querySelector("html");
  root.classList.remove("ui-mode--dark");
  root.classList.remove("ui-mode--light");

  if (mode) {
    root.classList.add(`ui-mode--${mode}`);
  }
  document.cookie = `darklightmode=${mode}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT`;
};

window.toggleUIMode(
  document.cookie.match("(^|;)\\s*darklightmode\\s*=\\s*([^;]+)")?.pop() || "",
);
