// var questions = [
//     {
//         title: "Inside which HTML element is the  .JS file attached?",
//         choices: ["<script>", "<js>", "<java-script>", "<java>"],
//         answer: "<script>"
//     },
//     {
//         title: "Where in the HTML file should external JavaScript be linked?",
//         choices: ["top of <head> element", "bottom of <head> element", "top of <body> element", "bottom of <body> element"],
//         answer: "bottom of <body> element"
//     },
//     {
//         title: "What function would render a box with the message 'Hello World'",
//         choices: ["msg('Hello World')", "alert('Hello World')", "function{'Hello World'}", "alert-box('Hello World')"],
//         answer: "alert('Hello World')"
//     }
//     ]
//variables to reference DOM elements
var timerEl = document.getElementById('time');
var questionsEl = document.getElementById('questions');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var startBtn = document.getElementById('start')
var initialsEl = document.getElementById("initials");
var questionsTitleEl = document.getElementById("questions-title")
var timerId;
var questionsIndex = 0
var questions = [
  {
    title: "Inside which HTML element is the  .JS file attached?",
    choices: ["<script>", "<js>", "<java-script>", "<java>"],
    answer: "<script>"
  },
  {
    title: "Where in the HTML file should external JavaScript be linked?",
    choices: ["top of <head> element", "bottom of <head> element", "top of <body> element", "bottom of <body> element"],
    answer: "bottom of <body> element"
  },
  {
    title: "What function would render a box with the message 'Hello World'",
    choices: ["msg('Hello World')", "alert('Hello World')", "function{'Hello World'}", "alert-box('Hello World')"],
    answer: "alert('Hello World')"
  }
]

var time = questions.length * 20;

function startQuiz() {
  var startScreenEl = document.getElementById("start-screen");
  startScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class")
  timerId = setInterval(function () {
    time--;
    timerEl.textContent = time;
  }, 1000
  )
}
// function getQuestion(){
//   //get current question object from array
//   var currentQuestion = questions[questionsIndex];
//   //update question title
//   var titleEl = document.getElementById("questions-title");
//   titleEl.textContent = currentQuestion.title;
//   choices.innerHTML = "";
//   for(var i = 0; i < currentQuestion.choices.length; i++){
    // var choice = currentQuestion.choices[i];
    // var choiceBtn = document.createElement("button");
    // choiceBtn.setAttribute("class", "choice");
    // choiceBtn.setAttribute("value", choice)
    // choiceBtn.textContent = i + 1 + ". " + choice;
    // choicesEl.appendChild(choiceBtn);
//   }
// }

// function showQuestion(){
//   if ((time <= 0)||(questionsIndex<questions.length-1)){
//     clearInterval(timerId)
//     var endScreenEl = document.getElementById("end-screen")
//     endScreenEl.removeAttribute('class');
//     //show score
//     var finalScoreEl = document.getElementById('final-score')
//   }
//    //quiz to stop
//  }
function showQuestion() {
  var currentQuestion = questions[questionsIndex]
  questionsTitleEl.textContent = currentQuestion.title

  var choicesEl= currentQuestion.choices
  choicesEl.innerHTML=""
  for (let index = 0; index < choice.length; index++) {
    
    var choice = choices[index];
    var buttonEl = document.createElement("button")
    buttonEl.value = choice
    buttonEl.textContent = choice
    choicesEl.appendChild(buttonEl)
  }
}
 choicesEl.addEventListener("click", function(e)){
  console.log(e.target.value);
  if (e.target.value !== questions[questionsIndex].answer){
    time=time-10
  }
  if(questionsIndex<questions.length-1){
    questionsIndex++
    showQuestion()  
  } 
  else
    clearInterval(timerId)
    console.log(time);
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