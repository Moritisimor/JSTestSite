const genQuestionButton     = document.getElementById("genQuestionButton");
const submitAnswerButton    = document.getElementById("submitAnswerButton");
const questionPar           = document.getElementById("questionPar");
const correctnessPar        = document.getElementById("correctnessPar");
let correctAnswer;

function makeQuiz(functionQuestion, functionCorrectAnswers){
    questionPar.textContent = functionQuestion;
    correctAnswer = functionCorrectAnswers;
}

genQuestionButton.addEventListener("click", () => {
    let randomQuestion = Math.floor(Math.random() * 5);
    if (randomQuestion === 0) {
        makeQuiz("What does www in websites stand for?", "world wide web");
    } else if (randomQuestion === 1) {
        makeQuiz("Who painted the Mona Lisa?", ["leonardo da vinci", "leonardo davinci", "da vinci"]);
    } else if (randomQuestion === 2) {
        makeQuiz("What is the Bishop of Rome known as also?", ["pope", "the pope"]);
    } else if (randomQuestion === 3) {
        makeQuiz("How many Star Wars movies are there?", ["9", "nine"]);
    } else if (randomQuestion === 4) {
        makeQuiz("What is the national sport of Japan?", ["sumo", "sumo wrestling"]);
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