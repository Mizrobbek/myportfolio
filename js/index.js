let elTheme = document.getElementById("theme");
let elBody = document.getElementById("body");
let header = document.querySelector(".header");
let menuBtn = document.querySelector(".header__menu");
let closeBtn = document.querySelector(".header__close");

elTheme.addEventListener("change", function () {
  if (elTheme.checked === true) {
    elBody.className = "dark";
  } else {
    elBody.className = "";
  }
});

menuBtn.addEventListener("click", () => {
  header.classList.add("visual");
  menuBtn.classList.add("hidden");
  closeBtn.classList.add("visual");
});

closeBtn.addEventListener("click", () => {
  header.classList.remove("visual");
  menuBtn.classList.remove("hidden");
  closeBtn.classList.remove("visual");
});
