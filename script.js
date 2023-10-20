function playRound(playerSelection, computerSelection) {
  let resultMessage;

  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Rock":
          resultMessage = "This is a tie, no winners here! You both picked Rock";
          break;
        case "Paper":
          resultMessage = "Computer wins! Paper covers Rock";
          break;
        case "Scissors":
          resultMessage = "Player wins! Rock breaks Scissors";
          break;
        default:
          resultMessage = "Invalid computer selection.";
          break;
      }
      break;

    case "Paper":
      switch (computerSelection) {
        case "Rock":
          resultMessage = "Player wins! Paper covers Rock";
          break;
        case "Paper":
          resultMessage = "This is a tie, no winners here! You both picked Paper";
          break;
        case "Scissors":
          resultMessage = "Computer Wins! Scissors cuts Paper";
          break;
        default:
          resultMessage = "Invalid computer selection.";
          break;
      }
      break;

    case "Scissors":
      switch (computerSelection) {
        case "Rock":
          resultMessage = "Computer Wins! Rock breaks Scissors";
          break;
        case "Paper":
          resultMessage = "Player wins! Scissors cuts Paper";
          break;
        case "Scissors":
          resultMessage = "This is a tie, no winners here! You both picked Scissors";
          break;
        default:
          resultMessage = "Invalid computer selection.";
          break;
      }
      break;

    default:
      resultMessage = "Invalid player selection.";
      break;
  }
return resultMessage;
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

const game = playRound(playerSelection, computerSelection);
alert (game);