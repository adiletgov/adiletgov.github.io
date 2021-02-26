var player1 = "Player 1";
var player2 = "Player 2";

function edit() {
  player1 = prompt("Player 1 name?");
  player2 = prompt("Player 2 name?");

  document.getElementById("p1").innerHTML = player1;
  document.getElementById("p2").innerHTML = player2;
}

function play() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document.querySelector(".img1").setAttribute("src",
    "images/dice" + randomNumber1 + ".png");

  document.querySelector(".img2").setAttribute("src",
    "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = (player2 + " WINS!");
  } else {
    document.querySelector("h1").innerHTML = (player1 + " WINS!");
  }
}
