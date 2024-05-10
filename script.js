"use strict";

const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");
const icons = document.querySelectorAll(".icon");

const toggleAnswer = function (index) {
  answers[index].classList.toggle("hide-answer");
};

const changeIcon = function (index) {
  icons[index].src = `./assets/images/icon-${
    answers[index].classList.contains("hide-answer") ? "plus" : "minus"
  }.svg`;
};

for (let i = 0; i < questions.length; i++) {
  questions[i].addEventListener("click", function () {
    toggleAnswer(i);
    changeIcon(i);
  });
  icons[i].addEventListener("click", function () {
    toggleAnswer(i);
    changeIcon(i);
  });
}
