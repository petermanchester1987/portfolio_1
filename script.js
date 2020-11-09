
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


const tl = gsap.timeline({defaults: {
  ease: 'power1.out',
  
}})

tl.to('.text', { y: '0%', duration: 1, stagger: 0.75});

tl.to('.intro', {y: "-100%", duration: 1.5, delay: 2.5});

tl.fromTo('.fade-2', { opacity: 0}, {opacity: 1, duration: 1.5}, "-=0.5");

tl.from('#preview', {
  x: "-30px",
  y: "-30px",
  duration: 6,
  repeat: 3,
  repeatDelay: 8,
  yoyo: true,
  ease:"power2.inOut", 
  force3D: true,
}, "-=0.5")

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.defaults({
  toggleActions: "restart pause resume pause"
});





gsap.from('#social_img', { 
  scrollTrigger: {
      trigger:".social-links",
      markers: true,
      toggleActions: "play none play reset"
  }, 
  x: "200px",
  duration: 3,  
  ease:"power2.inOut", 
  force3D: true,
  anticipatePin: 1,
});
gsap.from('#skills', { 
  scrollTrigger: {
      trigger:"#skills",
      markers: true,
      toggleActions: "play none play reset"
  }, 
  x: "-200px",
  duration: 3,
  ease:"power2.inOut", 
  force3D: true,
  anticipatePin: 1,
});








