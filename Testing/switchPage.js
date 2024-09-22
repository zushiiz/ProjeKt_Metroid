function toggleSection(sectionId, buttonId){
  const allSections = document.querySelectorAll(".button-section");
  const allButtons = document.querySelectorAll(".sec-button");

  allSections.forEach((section) => {
    if (section.id === sectionId){
      section.style.display = "block";      
    } else {
      section.style.display = "none";
    }
  })

  allButtons.forEach((button) => {
    if (button.id === buttonId){
      button.classList.add("scale-up");
    } else {
      button.classList.remove("scale-up");
    }
  })
}


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