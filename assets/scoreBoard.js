var scoreArr = JSON.parse(localStorage.getItem("scores")) || [];
var scoresUl = document.getElementById("scores")
document.getElementById("submit").addEventListener("click", function(e){
    e.preventDefault();
    var userScore = {
        user: document.getElementById("initials").value ,
        score : localStorage.getItem("lastScore")

    }
    console.log(userScore);
    scoreArr.push(userScore);

    localStorage.setItem("scores", JSON.stringify(scoreArr))
    renderScore();
})

function renderScore(){
scoresUl.innerHTML = "";
    for (var i = 0; i < scoreArr.length; i++) {
       var liEl = document.createElement("li");
       liEl.textContent = scoreArr[i].user + " : " + scoreArr[i].score
        console.log(scoreArr[i]);
        scoresUl.appendChild(liEl);
    }
}

renderScore();