var score, currentScore, activePlayer, gamePlaying;
init();

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn--roll").addEventListener("click", function () {
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6 + 1);
    var dicePic = document.querySelector(".dice");
    dicePic.style.display = "block";
    dicePic.src = "dice-" + dice + ".png";

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector("#current--" + activePlayer).textContent =
        currentScore;
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".btn--hold").addEventListener("click", function () {
  if (gamePlaying) {
    score[activePlayer] += currentScore;
    document.querySelector("#score--" + activePlayer).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 20) {
      document.querySelector("#name--" + activePlayer).textContent = "winner";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player--" + activePlayer)
        .classList.add("winner");
      gamePlaying = false;
    } else {
      nextPlayer();
    }
  }
});
document.querySelector(".btn--new").addEventListener("click", init);

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  currentScore = 0;
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
  document.querySelector(".dice").style.display = "none";
}

function init() {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.getElementById("score--0").textContent = "0";
  document.getElementById("score--1").textContent = "0";
  document.getElementById("current--0").textContent = "0";
  document.getElementById("current--1").textContent = "0";
  document.querySelector("#name--0").textContent = "player 1";
  document.querySelector("#name--1").textContent = "player 2";
}
