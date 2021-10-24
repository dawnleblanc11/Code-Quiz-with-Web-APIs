//reference to elements in HTML
var timerEl = document.getElementById('timer');
var startQuizEl = document.getElementById('startQuiz');
var quizContainerEl = document.getElementById('question-box');
var resultsContainerEl = document.getElementById('results');
var submitButton = document.getElementById('grade');
var initialContainer = document.getElementById('initials-box')
var welcomepageEl = document.getElementById("welcomepage");
var questionhereEl = document.getElementById("question-here")
var multichoice1El = document.getElementById("multiple-choice1");
var multichoice2El = document.getElementById("multiple-choice2");
var multichoice3El = document.getElementById("multiple-choice3");
var multichoice4El = document.getElementById("multiple-choice4");
var instantfeedbackEl = document.getElementById("instant-feedback");
var alldonepageEl = document.getElementById("alldonepage");
var finalscoredisplayEl=document.getElementById("finalscoredisplay");
var initialsBoxEl=document.getElementById("initals-box");

// Nav bar appears on login View High Scores Choice Timer: 0
// Start timer upon click of Start Quiz
// Initialize Question Index
// Clean screen of Welecome Text and startquiz button;
// Initialize array to score value of each question answered
let individualquestionscores = [ ];
let qindex = 0;
let leaderboardarray = [ ];
let quizInProgress = "true";



function startQuiz (){
	//start timer at 70 seconds
		timer();
		displayquestion=[ ];
		multichoiceanswerA=[ ];
		multichoiceanswerB=[ ];
		multichoiceanswerC=[ ];
		multichoiceanswerD=[ ];
	//clear out any old questions
	questionhereEl.innerHTML = "";
	// clear out any old answers
	multichoice1El.innerHTML= "";
	multichoice2El.innerHTML= "";
	multichoice3El.innerHTML= "";
	multichoice4El.innerHTML= "";
	// clearout instant feedback section
	instantfeedbackEl.innerHTML = "";
	//hide welcomepage
	welcomepageEl.remove();
	// remove startbutton
	startQuizEl.remove();
	// have question area appear
	quizContainerEl.style.display = "inherit";
	// have first question appear
	nextquestion(0);
};

function nextquestion(qindex) {

	var displayquestion = javaQuestions[qindex].question;
	// pulls question and answers from array
	var multichoiceanswerA = javaQuestions[qindex].answers.a;
	var multichoiceanswerB = javaQuestions[qindex].answers.b;
	var multichoiceanswerC = javaQuestions[qindex].answers.c;
	var multichoiceanswerD = javaQuestions[qindex].answers.d;
	// insert question into the html area
   questionhereEl.innerHTML= displayquestion;
   // place the answers into the html area
   multichoice1El.innerHTML= multichoiceanswerA;
   multichoice2El.innerHTML= multichoiceanswerB;
   multichoice3El.innerHTML= multichoiceanswerC;
   multichoice4El.innerHTML= multichoiceanswerD;
   //wait for a click event to register user selected answer
   multichoice1El.addEventListener("click", selecteda);
   multichoice2El.addEventListener("click", selectedb);
   multichoice3El.addEventListener("click", selectedc);
   multichoice4El.addEventListener("click", selectedd);
};

// create diversified and instant feedback to encourage users
// adds 10 points for correct anwer
// subtracts 5 points for incorrect answer
// to DO: decrements time for incorrect answer
function selecteda() {
	var finalanswera = "a";
	if (finalanswera == javaQuestions[qindex].correctAnswer) {
    instantfeedbackEl.innerHTML = "Correct";
	individualquestionscores.push(10);
	incrementqindex();

} else {
	instantfeedbackEl.innerHTML = "You will get the next one";
	individualquestionscores.push(-5);
	//timer decrement
	incrementqindex();
};
};

function selectedb() {
	var finalanswerb = "b";
	if (finalanswerb == javaQuestions[qindex].correctAnswer) {
    instantfeedbackEl.innerHTML = "Correct";
	individualquestionscores.push(10);
	incrementqindex();
	} else {
	instantfeedbackEl.innerHTML = "Choose better next time";
	individualquestionscores.push(-5);
	incrementqindex()
	//timer decrement
}
};

function selectedc() {
	var finalanswerc = "c";
	if (finalanswerc == javaQuestions[qindex].correctAnswer) {
    instantfeedbackEl.innerHTML = "Correct";
	individualquestionscores.push(10);
	incrementqindex();
	
} else {
	instantfeedbackEl.innerHTML = "Close but not Exactly Correct";
	individualquestionscores.push(-5);
	//timer decrement
	incrementqindex();
};
};

function selectedd() {
	var finalanswerd = "d";
	if (finalanswerd == javaQuestions[0].correctAnswer) {
	instantfeedbackEl.innerHTML = "Correct";
	individualquestionscores.push(10);
	incrementqindex();
	
} else {
	instantfeedbackEl.innerHTML = "Keep Trying, You Will Get It";
	individualquestionscores.push(-5);
	//timer decrement
	incrementqindex();
}
};

// created an index to increment the questions and exit when all questions are completed
function incrementqindex() {
	qindex= qindex+1;
	if (qindex<5) {
		nextquestion(qindex);
	} else {
		alldone();
		quizInProgress = "false";
	}
};

// set up questions and answers in a variable
// to DO: update for javascript questions
var javaQuestions = [
	{
		question: "Arrays in Javascript can be used to store",
		answers: {
			a: 'numbers and strings',
			b: 'other arrays',
			c: 'booleans',
			d: 'all of the above'
		},
		correctAnswer: 'd'
	},
	{
		question: "The condition in an if / else statement is enclosed within ____",
		answers: {
			a: 'curly brackets',
			b: 'quotes',
			c: 'square brackets',
			d: 'parenthesis'
		},
		correctAnswer: 'b'
	}, 
    {
		question: "Easy tool for development debugging along the way is ______",
		answers: {
			a: 'javascript',
			b: 'terminal/bash',
            c: 'console log',
			d: 'for loops'
		},
		correctAnswer: 'c'
	},
    {
		question: "Commonly used datatypes DO NOT include:",
		answers: {
			a: 'alerts',
			b: 'strings',
            c: 'booleans',
			d: 'numbers'
		},
		correctAnswer: 'a'
	},
    {
		question: "What is meant by 'this' keyword in javascript?",
		answers: {
			a: 'the current object',
			b: 'the previous object',
			c: 'variable containing a value',
			d: 'none of the above'
		},
		correctAnswer: 'a'
	},
];
// a countdown timer which decreases from starting point
// to DO: allow for  a restart
// create a decrement for wrong answers
function timer(timetotal) {
  var timeLeft = 70;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1 && (quizInProgress === "true" )) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft ;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1 && (quizInProgress === "true" )) {
      // When `timeLeft` is equal to 1, set color to red as a warning
      timerEl.style.color = "red";
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
       // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '0';
	  quizInProgress = "false";
	  alldone(quizInProgress);

	  //create a different version of all done
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
};

//timer = 0 or questions = 0
	//remove question container
	

//	window.localStorage.setItem('studentscores', JSON.stringify(leaderboardarray));	


// adding up array for each question scores into total scores
// placing on screen

function finalscore (scorearray) {
	let finalscorevalue=0;
	console.log(scorearray);
	for (let i=0; i< scorearray.length;i++){
		finalscorevalue += scorearray[i];
	};
	finalscoredisplayEl.innerHTML= "Your final score is:   "+ finalscorevalue;
	console.log(finalscorevalue);
	leaderboardarray.push(finalscorevalue);
	
	// store initals and score to display and use in high score array
};

function getInitials(){
	// Selecting the input element and get its value 
	var initials = document.getElementById("inputInitials").value;
	leaderboardarray.push(initials);
	console.log(leaderboardarray);	
};
//all done page- need to find the right place for this
function alldone(quizStatus) {
	quizContainerEl.style.display = "none";
	alldonepageEl.style.display= "inherit";
	if (quizStatus = "false") {
		finalscore(individualquestionscores);
	} else {
		alert("quiz over");
	}
	
	//console.log('studentscores',JSON.stringify(leaderboardarray));
	//window.localStorage.setItem('studentscores', JSON.stringify(leaderboardarray));	
};
/*

// nice to haves :change the color styles
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong 
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
   
    // localStorage.setItem(numCorrect,value);
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    const studentrecord = {
        grade: numCorrect,
        initials: "dl", 
    };
    storeResults(studentrecord);
}; 

 // storing grade and initals
function storeResults(studentrecord) {
window.localStorage.setItem('studentscores', JSON.stringify(studentrecord));
};
function askstudentInitals () {
    var ioutput = [];
    ioutput.push( );
    initialContainer.innerHTML= ioutput.join('');
};  
 //   window.localStorage.setItem('studentscores', JSON.stringify(studentrecord));
    //ask for initials
   //var lbl=document.createElement("label");
   // lbl.setAttribute("Iniials");
//    lbl.setAttribute("Please enter your initials: ");
//     document.body.appendChild(lbl);
// dynamically set up input for initals after results
// on last answer, show results

// studentgrades.push()([numCorrect, "Initials"]);
// Function Called when Initals are entered time -= 10  

//*/

startQuizEl.addEventListener("click", startQuiz);

