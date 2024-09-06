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