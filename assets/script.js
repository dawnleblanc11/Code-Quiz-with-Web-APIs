var timerEl = document.getElementById('timer');
var gradeEl = document.getElementById('grade');
var questionHereEl = document.getElementById('question-here');
var startquizEl= document.getElementById('start-quiz');

var quizscore= 0;
const quizquestions = [
    {Question :"What month is Halloween?"},
    {Question :"What color are ghosts?"},
    {Question :"What is a witches favorite color?"},
    {Question :"Do vampire like blood?"},
    {Question :"Are pumkins orange?"},
];

const quizanswers = [
    {answer1: "Oct", correct:true},
    {answer2: "White", correct:true},
    {answer3: "Black", correct: true},
    {answer4: "Yes", correct:true},
    {answer5: "Yes", correct: true},   
];

startquizEl.addEventListener("click",startQuiz);
// Timer that counts down from seconds given to complete

function startQuiz() {
    for (i=0; i<6; i++) {
 console.log (quizquestions[i]);
 console.log (quizanswers[i]);
}};


function countdown() {
  var timeLeft = 5;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Timer: " + timeLeft ;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = "Timer: " + timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '';
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
}
countdown();
// create an array of quiz questions