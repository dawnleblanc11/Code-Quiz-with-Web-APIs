var restartquizButtonEl = document.getElementById('restartquiz');
var clearhighscoresButton = document.getElementById('clearhighscores');

// not sure if relaod is the righ function here
restartquizButtonEl.addEventListener("click", testbuttons);
clearhighscoresButton.addEventListener("click", testbuttons);

//restartquizButtonEl.addEventListener("click", location.reload());
//clearhighscoresButton.addEventListener("click", initalizescoresarray);

function restart() {
    window.history.back();
    location.reload();
}

function testbuttons() {
    console.log("clickworked");
}