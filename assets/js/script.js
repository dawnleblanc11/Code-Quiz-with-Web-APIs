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
// Clean screen of Text and startquiz button;
// Initialize array to score value of each question answered
let individualquestionscores = [ ];
let qindex = 0;

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
	// getQuestion();
	quizContainerEl.style.display = "inherit";
	// have question area appear
	nextquestion(0);
};

function nextquestion(qindex) {

	var displayquestion = javaQuestions[qindex].question;
	// pulls question and answers from array
	var multichoiceanswerA = javaQuestions[qindex].answers.a;
	var multichoiceanswerB = javaQuestions[qindex].answers.b;
	var multichoiceanswerC = javaQuestions[qindex].answers.c;
	var multichoiceanswerD = javaQuestions[qindex].answers.d;
		// insert question
   questionhereEl.innerHTML= displayquestion;
   //show the answers
   multichoice1El.innerHTML= multichoiceanswerA;
   multichoice2El.innerHTML= multichoiceanswerB;
   multichoice3El.innerHTML= multichoiceanswerC;
   multichoice4El.innerHTML= multichoiceanswerD;
   
   //listen for click event
   multichoice1El.addEventListener("click", selecteda);
   multichoice2El.addEventListener("click", selectedb);
   multichoice3El.addEventListener("click", selectedc);
   multichoice4El.addEventListener("click", selectedd);
};

// instant feedback
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

function incrementqindex() {
	qindex= qindex+1;
	if (qindex<5) {
		nextquestion(qindex);
	} else {
		alldone();
	}
};

// set up questions and answers in a variable
// need to update for javascript questions
var javaQuestions = [
	{
		question: "What color is a pumpkin?",
		answers: {
			a: 'green',
			b: 'orange',
			c: 'blue',
			d: 'green'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is a witches favorite color",
		answers: {
			a: 'purple',
			b: 'black',
			c: 'orange',
			d: 'white'
		},
		correctAnswer: 'b'
	}, 
    {
		question: "what color are ghosts?",
		answers: {
			a: 'white',
			b: 'blue',
            c: 'pink',
			d: 'purple'
		},
		correctAnswer: 'a'
	},
    {
		question: "what color is candy corn?",
		answers: {
			a: 'green, white, red',
			b: 'pink, blue, white',
            c: "orange,white,yellow",
			d: "purple, orange, green"
		},
		correctAnswer: 'c'
	},
    {
		question: "Do Vampires like blood?",
		answers: {
			a: 'yes',
			b: 'no',
			c: 'maybe',
			d: 'have not met one'
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
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft ;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, set color to red as a warning
      timerEl.style.color = "red";
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = '0';
	  alldone();
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
    }
  }, 1000);
};

//timer = 0 or questions = 0
	//remove question container
	
//all done page- need to find the right place for this
function alldone() {
	quizContainerEl.style.display = "none";
	alldonepageEl.style.display= "inherit";
	finalscore(individualquestionscores);
	
};


// adding up array for each question scores into total scores
// placing on screen
function finalscore (scorearray) {
	let finalscore =0;
	for (let i=0; i< scorearray.length;i++){
		finalscore += scorearray[i];
	};
	finalscoredisplayEl.innerHTML= "Your final score is:"+ finalscore;
	console.log(initialsBoxEl.value);
};


/*

//change the color styles
			
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
// store initals and score to display and use in high score array
// studentgrades.push()([numCorrect, "Initials"]);
// Function Called when Initals are entered time -= 10  

//	showResults(javaQuestions, quizContainer, resultsContainer,initialContainer);
//*/

startQuizEl.addEventListener("click", startQuiz);
console.log(individualquestionscores);
