const genQuestionButton = document.getElementById("genQuestionButton");
const submitAnswerButton = document.getElementById("submitAnswerButton");
const questionPar = document.getElementById("questionPar");
const correctnessPar = document.getElementById("correctnessPar");

genQuestionButton.addEventListener("click", () => {
    Math.floor(Math.random() * 11);
})

submitAnswerButton.addEventListener("click", () => {

})