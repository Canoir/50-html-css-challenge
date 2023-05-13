const introButton = document.querySelector(".full-screen button");
const form = document.querySelector("form");
const wrapper = document.querySelector(".wrapper");

introButton.addEventListener("click", () => {
  wrapper.classList.toggle("change");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  wrapper.classList.toggle("change");
});
