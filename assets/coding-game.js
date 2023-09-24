//TODO: Timer
//TODO: Start button on index
//TODO: picture carusel with answer buttons/-10sec for false selection
var player = document.getElementById("player-names");
var score = document.getElementById("score");

function SaveHiScore() {
var hiScore = {
    player: player.value,
    score: score.value,
}
    localStorage.setItem('hiScore', JSON.stringify(hiScore));
}
//TODO:add getter to complete leader board