// JavaScript - Switching sections on Mobile
function toggleSection(sectionId, buttonId){
  const allSections = document.querySelectorAll(".button-section");
  const allButtons = document.querySelectorAll(".sec-button");

  allButtons.forEach((button) => {

    console.log(button.id, buttonId)

    if (button.id === buttonId){
      button.classList.add("scale-up");
    } else {
      button.classList.remove("scale-up");
    }
  });

  

  allSections.forEach((section) => {

    const h = section.querySelector("h1");
    const p = section.querySelector("p");
    const i = section.querySelector("img");

    if (section.id === sectionId){

      setTimeout(() => {
        console.log("time-in")
        section.style.display = "flex";
        h.classList.add("transition-top-in");
        p.classList.add("transition-left-in");
        i.classList.add("transition-left-in-img");
      }, 2000);


    } else {

      console.log("click")

      h.classList.remove("transition-top-in");
      p.classList.remove("transition-left-in");
      i.classList.remove("transition-left-in-img");

      h.classList.add("transition-top-out");
      p.classList.add("transition-left-out");
      i.classList.add("transition-left-out-img");
      

      setTimeout(() => {
        console.log("time")
        h.classList.remove("transition-top-out");
        p.classList.remove("transition-left-out");
        i.classList.remove("transition-left-out-img");
        section.style.display = "none";
      }, 2000);

    }
  });
}

const mediaQuery = window.matchMedia("(min-width:600px)");

function desktopSection(e) {
  const allSections = document.querySelectorAll(".button-section");
  const firstSection = document.getElementById("prkt-section");
  allSections.forEach((section) => {
    if (e.matches) {
      section.style.display = "flex";
    } else {
      section.style.display = "none";
      firstSection.style.display = "flex";
    }    
  });
}

desktopSection(mediaQuery);

mediaQuery.addEventListener("change", desktopSection);


// JavaScript - Drag and Click for Slider
const slider = document.querySelector(".cards");
let isDown = false;
let startX;
let scrollLeft;
const sliderCards = document.querySelector("li");

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  slider.style.scrollSnapType = "none";
  sliderCards.style.scrollSnapType = "none";
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener("mouseleave", () => {
  isDown = false;
  slider.classList.remove("active");
  slider.style.scrollSnapType = "x mandatory";
  sliderCards.style.scrollSnapType = "center";
});

slider.addEventListener("mouseup", () => {
  isDown = false;
  slider.classList.remove("active");
  slider.style.scrollSnapType = "x mandatory";
  sliderCards.style.scrollSnapType = "center";
});

slider.addEventListener("mousemove", (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  slider.scrollLeft = scrollLeft - walk;
});