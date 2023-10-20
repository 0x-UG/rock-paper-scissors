function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    case "Rock":
      switch (computerSelection) {
        case "Rock":
          alert("This is a tie, no winners here! You both picked Rock");
          break;
        case "Paper":
          alert("Computer wins! Paper covers Rock");
          break;
        case "Scissors":
          alert("Player wins! Rock breaks Scissors");
          break;
        default:
          alert("Invalid computer selection.");
      }
      break;
    case "Paper":
      switch (computerSelection) {
        case "Rock":
          alert("Player wins! Paper covers Rock");
          break;
        case "Paper":
          alert("This is a tie, no winners here! You both picked Paper");
          break;
        case "Scissors":
          alert("Computer Wins! Scissors cuts Paper");
          break;
        default:
          alert("Invalid computer selection.");
      }
      break;
    case "Scissors":
      switch (computerSelection) {
        case "Rock":
          alert("Computer Wins! Rock breaks Scissors");
          break;
        case "Paper":
          alert("Player wins! Scissors cuts Paper");
          break;
        case "Scissors":
          alert("This is a tie, no winners here! You both picked Scissors");
          break;
        default:
          alert("Invalid computer selection.");
      }
      break;
    default:
      alert("Invalid player selection.");
  }
}

//function that gets computer choice
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
const computerSelection = getComputerChoice();

const choices = ["Rock", "Paper", "Scissors"];
//array of the available choices

//query selector of all the available choices
const playerChoices = document.querySelectorAll('.choice');

//for each player click/choice add event listener that plays a round of the game 
playerChoices.forEach(playerChoices => {
  playerChoices.addEventListener('click', function () {
    const playerSelection = playerChoices.alt;
    playRound(playerSelection, computerSelection);
  })
})

