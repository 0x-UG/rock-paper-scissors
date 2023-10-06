function playRound(playerSelection, computerSelection) {

      if (playerSelection === "Rock") {
      if (computerSelection === "Rock") {
        alert("This is a tie, no winners here! You both picked Rock");
      } else if (computerSelection === "Paper") {
        alert("Computer wins! Paper covers Rock");
      } else if (computerSelection === "Scissors") {
        alert("Player wins! Rock breaks Scissors");
      } else {
        alert("Invalid computer selection.");
      }
    } else if (playerSelection === "Paper") {
      if (computerSelection === "Rock") {
        alert("Player wins! Paper covers Rock");
      } else if (computerSelection === "Paper") {
        alert("This is a tie, no winners here! You both picked Paper");
      } else if (computerSelection === "Scissors") {
        alert("Computer Wins! Scissors cuts Paper");
      } else {
        alert("Invalid computer selection.");
      }
    } else if (playerSelection === "Scissors") {
      if (computerSelection === "Rock") {
        alert("Computer Wins! Rock breaks Scissors");
      } else if (computerSelection === "Paper") {
        alert("Player wins! Scissors cuts Paper");
      } else if (computerSelection === "Scissors") {
        alert("This is a tie, no winners here! You both picked Scissors");
      } else {
        alert("Invalid computer selection.");
      }
    } else {
      alert("Invalid player selection.");
    }
  }
  


//code to ask user to input string between rock paper and scissors
let playerInput = prompt("Pick one between rock, paper and scissors: ");
//code to make player selection upper case only at the first letter to compare with the computer choice
let playerSelection = playerInput.charAt(0).toUpperCase() + playerInput.slice(1).toLowerCase();

//created fxn that picks a random word btw rock paper and scissors using random index
function getComputerChoice () {
    const cpuIndex = Math.floor(Math.random() * 3);
    if (cpuIndex === 0){
        return "Rock";
    } else if (cpuIndex === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

//calls the get computer choice fxn so the computer can select a random choice
const computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));