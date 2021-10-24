var restartquizButtonEl = document.getElementById('restartquiz');
var clearhighscoresButtonEl = document.getElementById('clearhighscores');

// not sure if reload is the right function here


//High Score Link- presents array for stored final scores in higest to lowest numbers

//restartquizButtonEl.addEventListener("click", location.reload());
//clearhighscoresButton.addEventListener("click", initalizescoresarray);
let arr = [
        {score: 5,initials: 'aa'},
        {score: 7,initials: 'bb'},
        {score: 10,initials: 'fs'},
        {score: 20,initials: 'rw'},
        {score: 23,initials: 'jd'},
        {score: -5,initials: 'ex'},
        {score: -10,initials: 'mr'} ];

arr.sort(function (a,b) {
    return b.score - a.score;
});
console.table(arr);
   
    
function populateLeaderboard () {
    document.getElementById("leader1").innerHTML = arr[0].initials + " with a score of " + arr[0].score;
      document.getElementById("leader2").innerHTML = arr[1].initials + " with a score of " + arr[1].score;
      document.getElementById("leader3").innerHTML = arr[2].initials + " with a score of " + arr[2].score;
      document.getElementById("leader4").innerHTML = arr[3].initials + " with a score of " + arr [3].score;
      document.getElementById("leader5").innerHTML = arr[4].initials + " with a score of " + arr [4].score;
  };  

function restart() {
    window.history.back();
    location.reload();
};

function testbuttons() {
    console.log("clickworked");
};

restartquizButtonEl.addEventListener("click", console.log("hit back button"));

clearhighscoresButtonEl.addEventListener("click", console.log("test scores cleared"));// let arr =[];

populateLeaderboard();
// function for using list> var list = JSON.parse(localStorage.getItem("list") || "[]");
// function for clearing list >window.localStorage.clear();
// HighScore Tracking
//initalize a blank array
//populate array
//var studentgrades = [ [5,"ab"], [2,"js"], [3, "mk"]];
//sort array
//var sort1 = studentgrades.sort();
//create leader board
//var studentgradesSorted = reverse(sort1);


  