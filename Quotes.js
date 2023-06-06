//we want to style the slider class
const slider = document.querySelector(".slider");

const leftArrow = document.querySelector(".left");
const rightArrow = document.querySelector(".right");
//
const sections = document.querySelectorAll(".slider section");
var sectionIndex = 0;

rightArrow.addEventListener('click',function(){
 //if statement to help us not go over the length of the sections
  if (sectionIndex < sections.length - 1)
    {
      //if less than the section length then its incremented.just goes to the next section
      sectionIndex = sectionIndex + 1;
       //enables us to move to the next section(clockwise)
  const translateValue = -sectionIndex * 20;
  slider.style.transform = "translateX(" + translateValue + "%)";
    }
});

leftArrow.addEventListener('click',function(){
 //if statement to help us not go over the length of the sections
  if (sectionIndex > 0)
    {
      //if less than the section length then its incremented.just goes to the next section
      sectionIndex = sectionIndex - 1;
       //enables us to move to the next section(clockwise)
  const translateValue = -sectionIndex * 20;
  slider.style.transform = "translateX(" + translateValue + "%)";
    }
});