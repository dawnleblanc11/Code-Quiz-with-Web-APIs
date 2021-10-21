var quizContainer = document.getElementById('question-here');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('grade');
var timerEl = document.getElementById('timer');
var startQuizEl = document.getElementById('startQuiz');
var initialContainer = document.getElementById('initials-box')

// set up questions and answers in a variable
var javaQuestions = [
	{
		question: "What color is a pumpkin?",
		answers: {
			a: 'green',
			b: 'orange',
			c: 'blue'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is a witches favorite color",
		answers: {
			a: 'purple',
			b: 'black',
			c: 'orange'
		},
		correctAnswer: 'b'
	}, 
    {
		question: "what color are ghosts?",
		answers: {
			a: 'white',
			b: 'blue',
            c: 'pink',
		},
		correctAnswer: 'a'
	},
    {
		question: "what color is candy corn?",
		answers: {
			a: 'green, white, red',
			b: 'pink, blue, white',
            c: "orange,white,yellow"
		},
		correctAnswer: 'c'
	},
    {
		question: "Do Vampires like blood?",
		answers: {
			a: 'yes',
			b: 'no',
		},
		correctAnswer: 'a'
	},
];
// a countdown timer which decreases from starting point
// do we need to allow a reset?
function timer() {
  var timeLeft = 10;
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = "Timer: " + timeLeft ;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, set color to red as a warning
      timerEl.style.color = "red";
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

function showQuestions(questions, quizContainer){
	// we'll need a place to store the output and the answer choices
	var output = [];
	var answers;

	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}

		// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
            //add timer decrement here
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
    ioutput.push(
        '<label for="example">Enter your intials:'+
        '</label>'+ 
        '<input id="example" type="text" name="text">'+
        '<input type="submit" value="send"></input>'
    );
    initialContainer.innerHTML= ioutput.join('');

    
    //var initials = "cd"
    //  var initals = document.createElement("INPUT");
   // initals.setAttribute("type","text"); 
    //initialContainer.innerHTML = (initials);

//function createNewElement() {
    // First create a DIV element.
//	var txtNewInputBox = document.createElement('div');

    // Then add the content (a new input box) of the element.
//	txtNewInputBox.innerHTML = "<input type='text' id='newInputBox'>";

    // Finally put it where it is supposed to appear.
//	document.getElementById("newElementId").appendChild(txtNewInputBox);

};

//document.createElement("INPUT");
//   initials.setAttribute("type","text");
    // ask initials
  //function askinitals() {
   // var initals = document.createElement("INPUT");
   //initals.setAttribute("type","text");
//   const studentrecord = {
 //   grade: numCorrect,
 //   initials: initials, };

    
    
 //   window.localStorage.setItem('studentscores', JSON.stringify(studentrecord));
    //ask for initials
   //var lbl=document.createElement("label");
    //   lbl.setAttribute("Iniials");
   //    lbl.setAttribute("Please enter your initials: ");
  //     document.body.appendChild(lbl);
// dynamically set up input for initals after results

   //store initals and score to display
 //  studentgrades.push()([numCorrect, "Initials"]);
//HighScore Tracking
//initalize a blank array
//populate array
//var studentgrades = [ [5,"ab"], [2,"js"], [3, "mk"]];
//sort array
//var sort1 = studentgrades.sort();
//create leader board
//var studentgradesSorted = reverse(sort1);

//watch for click to start quiz
startQuizEl.onclick= function (){
    timer();
    showQuestions(javaQuestions, quizContainer);
};
// on submit, show results
submitButton.onclick = function(){
	showResults(javaQuestions, quizContainer, resultsContainer,initialContainer);
};