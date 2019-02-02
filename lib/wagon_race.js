// TODO: write your code here
let player1 = document.querySelector("#player1_race .active");
let player2 = document.querySelector("#player2_race .active");
const finishLine1 = document.querySelector("#player1_race td:last-child");
const finishLine2 = document.querySelector("#player2_race td:last-child");
function playerTwoWins() {
  alert("You crushed player 1");
}

function playerOneWins() {
  alert("You stomped player 2");
}


// document.addEventListener("click", (event) => {
//   player1.classList.remove("active");
//   player1 = player1.nextElementSibling;
//   player1.classList.add("active");
// });

document.addEventListener("keyup", (event) => {
  if (event.key === "q") {
    player1.classList.remove("active");
    player1 = player1.nextElementSibling;
    if (player1 === finishLine1) {
      playerOneWins();
      location.reload();
    }
    player1.classList.add("active");
  } else if (event.key === "p") {
    player2.classList.remove("active");
    player2 = player2.nextElementSibling;
    if (player2 === finishLine2) {
      playerTwoWins();
      location.reload();
    }
    player2.classList.add("active");
  }
});

