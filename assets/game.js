var startBtn = document.getElementById('start');
var startScreenEl = document.getElementById("start-screen");
var questionsEl = document.getElementById('questions');
var timerEl = document.getElementById('time');
var choicesEl = document.getElementById('choices');
var submitBtn = document.getElementById('submit');
var titleEl = document.getElementById('questions-title');
var timerId;
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
var questionsIndex = 0;
var scoreArr = JSON.parse(localStorage.getItem("scores")) || [];

function startQuiz(){
   
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
showQuestion();
    timerId = setInterval(function () {
      time--;
      timerEl.textContent = time;
    }, 1000)
}

function showQuestion(){
    var currentQuestion = questions[questionsIndex]
    titleEl.textContent = currentQuestion.title
  
    var optionsArr = currentQuestion.choices;
    //console.log(optionsArr);
    choicesEl.innerHTML=""
  
    for (let index = 0; index < optionsArr.length; index++) {
        //console.log(optionsArr[index]);
      
      var choice = optionsArr[index];
      //console.log(choice);
     var buttonEl = document.createElement("button")
     buttonEl.value = choice
      buttonEl.textContent = choice
      choicesEl.appendChild(buttonEl)
    }
  }

choicesEl.addEventListener("click", function(e) {
    console.log(e.target.value);
    if (e.target.value !== questions[questionsIndex].answer){
      time=time-10
    }
    if (questionsIndex<questions.length-1){
      questionsIndex++
      showQuestion()  
    } 
    else{

        clearInterval(timerId);

        localStorage.setItem("lastScore" , time);
        window.location.href = "./hiscores.html"
        //console.log(time);
    }
    });

startBtn.onclick = startQuiz;