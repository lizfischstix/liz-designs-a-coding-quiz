//TODO: Timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage();
      }
  
    }, 1000);
  }
}
//TODO: Start button on index
//TODO: picture carusel with answer buttons/-10sec for false selection

//FOR hiscore.html
var player = document.getElementById("player-names");
var score = document.getElementById("score");

function SaveHiScore() {
var hiScore = {
    player: player.value,
    score: score.value,
}
    localStorage.setItem('hiScore', JSON.stringify(hiScore));
}
//TODO:attach js to html
function renderHiScore() {
    var lastScore = JSON.parse(localStorage.getItem('hiScore'));
    // Check if data is returned, if not exit out of the function
    if (lastScore !== null) {
      document.getElementById('saved-name').innerHTML = lastScore.player;
      document.getElementById('saved-score').innerHTML = lastScore.score;
    }
  }

  saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    SaveHiScore();
    renderHiScore();
  });

  function init() {
    renderHiScore();
  }
  init();