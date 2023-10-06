let playerSelection = prompt("Pick one between rock, paper and scissors: ");


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

const computerSelection = getComputerChoice();
console.log(computerSelection);