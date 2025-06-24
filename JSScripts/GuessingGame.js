const genQuestionButton     = document.getElementById("genQuestionButton");
const submitAnswerButton    = document.getElementById("submitAnswerButton");
const questionPar           = document.getElementById("questionPar");
const correctnessPar        = document.getElementById("correctnessPar");
let correctAnswer;

function checkAnswer(correctAnswer) {
    let answer = document.getElementById("answerTxt").value;
    if (answer.toLowerCase() === correctAnswer) {
        return true;
    } else {
        return false;
    }
}

genQuestionButton.addEventListener("click", () => {
    let randomQuestion = Math.floor(Math.random() * 5);
    if (randomQuestion === 0) {
        questionPar.textContent = "What does www in websites stand for?";
        correctAnswer = "world wide web";
    } else if (randomQuestion === 1) {
        questionPar.textContent = "Who painted the Mona Lisa?";
        correctAnswer = "leonardo davinci";
    } else if (randomQuestion === 2) {
        questionPar.textContent = "The bishop of Rome is known as?";
        correctAnswer = "pope";
    } else if (randomQuestion === 3) {
        questionPar.textContent = "How many star wars movies are there?";
        correctAnswer = "9";
    } else if (randomQuestion === 4) {
        questionPar.textContent = "What is the national sport of Japan?";
        correctAnswer = "sumo wrestling"
    }
})

submitAnswerButton.addEventListener("click", () => {
    if (checkAnswer(correctAnswer)) {
        alert("Your answer was correct!");
    } else {
        alert("Your answer was incorrect!");
    }
})