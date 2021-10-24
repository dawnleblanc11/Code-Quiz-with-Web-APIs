var restartquizButtonEl = document.getElementById('restartquiz');
var clearhighscoresButtonEl = document.getElementById('clearhighscores');

// not sure if relaod is the righ function here


//High Score Link- presents array for stored final scores in higest to lowest numbers

//restartquizButtonEl.addEventListener("click", location.reload());
//clearhighscoresButton.addEventListener("click", initalizescoresarray);
let arr = [{name: "Jack"}, {name: "John"}, {name: "James"}];
      document.getElementById("highscorearrayhere").innerHTML = JSON.stringify(arr.value);

function restart() {
    window.history.back();
    location.reload();
};

function testbuttons() {
    console.log("clickworked");
};

restartquizButtonEl.addEventListener("click", console.log("hit back button"));

clearhighscoresButtonEl.addEventListener("click", console.log("test scores cleared"));

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


  