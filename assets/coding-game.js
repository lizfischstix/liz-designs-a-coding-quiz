//TODO: Timer
// variables to track state of our quiz
var currentQuestion = 0;
var time = questions.length * 20;
//variables to reference DOM elements
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start')
var initialsEl = document.getElementById("initials");
var timerId;

// function setTime() {
//     var timerInterval = setInterval(function() {
//       secondsLeft--;
//       timeEl.textContent = secondsLeft + " seconds";
  
//       if((secondsLeft === 0) ||  {
//         clearInterval(timerInterval);
//         sendMessage();
//       }
//     }, 6000);
//   }
function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class")
    timerId = setInterval(function(){
      time--;
      timerEl.textContent = time;
    }, 1000)

    if(time <= 0){ //|| all questions answered
      //quiz to stop
      clearInterval(timerId)
      var endScreenEl = document.getElementById("end-screen")
      endScreenEl.removeAttribute('class');
      //show score
      var finalScoreEl = document.getElementById('final-score')
    }
}

//FOR hiscore.html
var player = document.getElementById("player-names");
var score = document.getElementById("score");

// function SaveHiScore() {
// var hiScore = {
//     player: player.value,
//     score: score.value,
// }
//     localStorage.setItem('hiScore', JSON.stringify(hiScore));
// }
// //TODO:attach js to html
// function renderHiScore() {
//     var lastScore = JSON.parse(localStorage.getItem('hiScore'));
//     // Check if data is returned, if not exit out of the function
//     if (lastScore !== null) {
//       document.getElementById('saved-name').innerHTML = lastScore.player;
//       document.getElementById('saved-score').innerHTML = lastScore.score;
//     }
//   }

//   saveButton.addEventListener('click', function (event) {
//     event.preventDefault();
//     SaveHiScore();
//     renderHiScore();
//   });

//   function init() {
//     renderHiScore();
//   }
//   init();

  startBtn.onclick = startQuiz;