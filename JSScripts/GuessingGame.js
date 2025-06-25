const genQuestionButton     = document.getElementById("genQuestionButton");
const submitAnswerButton    = document.getElementById("submitAnswerButton");
const questionPar           = document.getElementById("questionPar");
const correctnessPar        = document.getElementById("correctnessPar");
let correctAnswer;

genQuestionButton.addEventListener("click", () => {
    let randomQuestion = Math.floor(Math.random() * 5);
    if (randomQuestion === 0) {
        questionPar.textContent = "What does www in websites stand for?";
        correctAnswer = "world wide web";
    } else if (randomQuestion === 1) {
        questionPar.textContent = "Who painted the Mona Lisa?";
        correctAnswer = ["leonardo da vinci" , "leonardo davinci"];
    } else if (randomQuestion === 2) {
        questionPar.textContent = "The bishop of Rome is known as?";
        correctAnswer = ["pope", "the pope"];
    } else if (randomQuestion === 3) {
        questionPar.textContent = "How many star wars movies are there?";
        correctAnswer = ["9", "nine"];
    } else if (randomQuestion === 4) {
        questionPar.textContent = "What is the national sport of Japan?";
        correctAnswer = ["sumo", "sumo wrestling"];
    }
})

submitAnswerButton.addEventListener("click", () => {
    let answer = document.getElementById("answerTxt").value.toLowerCase().trim();
    if (correctAnswer === undefined) {
        alert("Generate a question first!");
    } else if (correctAnswer.includes(answer)) {
        alert("Your answer was correct!");
    } else {
        alert("Your answer was incorrect!");
    }
})