// JavaScript - Switching sections on Mobile
function toggleSection(sectionId, buttonId){
  const allSections = document.querySelectorAll(".button-section");
  const allButtons = document.querySelectorAll(".sec-button");

  allButtons.forEach((button) => {
    if (button.id === buttonId){
      button.classList.add("scale-up");
    } else {
      button.classList.remove("scale-up");
    }

  });

  allSections.forEach((section) => {

    const up = section.querySelector("h2");
    const leftEarly = section.querySelectorAll("p");
    const leftLate = section.querySelectorAll(".left-late");

    if (section.id === sectionId){
      setTimeout(() => {
        section.style.display = "flex";
        leftEarly.forEach((e) => {
          e.classList.add("transition-left-in");
        });
        leftLate.forEach((e) => {
          e.classList.add("transition-left-in-img");
        });
        up.classList.add("transition-top-in");
      }, 900);

    } else {
      
      up.classList.remove("transition-top-in");
      leftEarly.forEach((e) => {
        e.classList.remove("transition-left-in");
      });
      leftLate.forEach((e) => {
        e.classList.remove("transition-left-in-img");
      });

      up.classList.add("transition-top-out");
      leftEarly.forEach((e) => {
        e.classList.add("transition-left-out");
      });
      leftLate.forEach((e) => {
        e.classList.add("transition-left-out-img");
      });

      
      setTimeout(() => {
        up.classList.remove("transition-top-out");
        leftEarly.forEach((e) => {
          e.classList.remove("transition-left-out");
        });
        leftLate.forEach((e) => {
          e.classList.remove("transition-left-out-img");
        });
        section.style.display = "none";
      }, 900);

    }
  });
}

const mediaQuery = window.matchMedia("(min-width:769px)");

function desktopSection(e) {
  const allSections = document.querySelectorAll(".button-section");
  const firstSection = document.getElementById("prkt-section");
  allSections.forEach((section) => {
    if (e.matches) {
      section.style.display = "none";
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


//scroll
function scrollSection(a) {
  const element = document.getElementById(a);
  element.scrollIntoView({ behavior: "smooth", block: "start" });
}