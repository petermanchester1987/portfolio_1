const loaderHolder = document.querySelector(".loader-holder");
const main = document.querySelector("main");

function loadStart() {
  setTimeout(() => {
    loaderHolder.style.opacity = 0;
    loaderHolder.style.display = "none";

    main.style.display = "block";

    setTimeout(() => (main.style.opacity = 1), 50);
  }, 3000);
}
loadStart();

let theme = localStorage.getItem("theme");

if (theme === null) {
  setTheme("light");
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName("theme-dot");

function setTheme(mode) {
  if (mode === "light") {
    document.getElementById("theme-style").href = "./default.css";
  } else if (mode === "blue") {
    document.getElementById("theme-style").href = "./blue.css";
  } else if (mode === "green") {
    document.getElementById("theme-style").href = "./green.css";
  } else if (mode === "purple") {
    document.getElementById("theme-style").href = "./purple.css";
  }

  localStorage.setItem("theme", mode);
}

for (let i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener("click", function () {
    let mode = this.dataset.mode;
    console.log("option clicked " + mode);
    setTheme(mode);
  });
}
