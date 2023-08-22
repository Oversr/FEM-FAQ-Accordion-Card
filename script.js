// Variables
const questions = document.querySelectorAll(".question");
const answers = document.querySelectorAll(".answer");

// Event listener added to the [i] of the questions variable to toggle classes

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", () => {
        answers[i].classList.toggle("hidden");
        questions[i].classList.toggle("bold");
    });
}