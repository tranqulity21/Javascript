"use strict";
const content = [
  {
    id:1,
    question:"1.Inside which HTML element do we put the JavaScript?",
    answer:"A.<script> B.<scripting> C.<javascript>",
  },
  {
    id:2,
    question:"correct Answer!",
    answer:"<script>",
  },
  {
  id:3,
    question:"2.How do you create a function in JavaScript?",
    answer:"",
  },
  {
    id:4,
    question:"Correct Answer!",
    answer:" function myFunction()",
  },
  {
  id:5,
    question:"3.What is the difference between == and === in JavaScript?",
    answer:"",
  },
  {
  id:6,
    question:"Correct answer!",
    answer:"== is used to compare whether two values are equal while === is used to compare both the values and the data type",
  },
  {
  id:7,
    question:"4.What is the difference between let, const, and var in JavaScript?",
  },
  {
    id:8,
    question:"CORRECT ANSWER!",
    answer:"let - const - var -",
  },
  {
  id:9,
    question:"5.How do you loop through an array in JavaScript?",
    answer:"",
  },
  {
  id:10,
    question:"correct answer",
    answer:" for(i=0;i<varname;i++)",
  },
];
//fetching the value by id and then storing it in a variable

const question = document.getElementById("question");
const answer = document.getElementById("answer");
const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const slideContainer = document.querySelector(".carousel-slide")
//first declare a variable to use in the for loop,the variable is for the first page
let current = 0;
//then create a function that will be used to change the content of the slides
const showReview = function(){
  //create a variable to put in the item accessed by the array
  const item = content[current]
  question.textContent = item.question;
  answer.textContent = item.answer;
  
}
rightButton.addEventListener('click',function(){
  current = current + 1;
  if(current > content.length-1)
  {
    current = 0;
  }
 showReview(); 
})

leftButton.addEventListener('click',function(){
  current = current - 1;
  if(current > content.length-1)
  {
    current = 0;
  }
 showReview(); 
})
showReview(); 