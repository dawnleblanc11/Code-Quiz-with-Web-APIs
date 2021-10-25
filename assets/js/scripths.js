var restartquizButtonEl = document.getElementById('restartquiz');
var clearhighscoresButtonEl = document.getElementById('clearhighscores');

// not sure if reload is the right function here

//High Score Link- presents array for stored final scores in higest to lowest numbers

//restartquizButtonEl.addEventListener("click", location.reload());
//clearhighscoresButton.addEventListener("click", initalizescoresarray);

//pulls stored score from local storage and parses
var studentarray = localStorage.getItem('studentscores');
var studentarrayparsed = JSON.parse(studentarray);
var newstudentscore= studentarrayparsed[0];
var newstudentinitials= studentarrayparsed[2];
//places the new data at the end of the historic file of data


var newstudentrecord = [
    {score: newstudentscore,initials:  newstudentinitials} ];

var historicstudentscores = [
        {score: 4,initials: 'aa'},
        {score: 7,initials: 'bb'},
        {score: 10,initials: 'fs'},
        {score: -10,initials: 'mr'} ];

var updatedstudentscores = newstudentrecord.concat(historicstudentscores);
// resorts all the data to create a leaderboard
updatedstudentscores.sort(function (a,b) {
    return b.score - a.score;
});
   
// displays leaderboard
function populateLeaderboard () {
      document.getElementById("leader1").innerHTML = updatedstudentscores[0].initials + " with a score of " + updatedstudentscores[0].score;
      document.getElementById("leader2").innerHTML = updatedstudentscores[1].initials + " with a score of " + updatedstudentscores[1].score;
      document.getElementById("leader3").innerHTML = updatedstudentscores[2].initials + " with a score of " + updatedstudentscores[2].score;
      document.getElementById("leader4").innerHTML = updatedstudentscores[3].initials + " with a score of " + updatedstudentscores [3].score;
      document.getElementById("leader5").innerHTML = updatedstudentscores[4].initials + " with a score of " + updatedstudentscores[4].score;
  };  

// restarts the game on click
// function restart() {
    console.log("restart clicked")
//    ;
//    location.reload();
//};

//clears the historical data
//function clearhighscores () {
//   updatedstudentscores= [];
//};

restartquizButtonEl.addEventListener("click", window.history.back());

clearhighscoresButtonEl.addEventListener("click", console.log("test scores cleared"));

populateLeaderboard();



  