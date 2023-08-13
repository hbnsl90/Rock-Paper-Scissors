let winOrLose;
function getComputerChoice(){
    // We need to get a random choice between 0 to 2
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0: return "scissors";
        case 1: return "rock";
        default: return "paper";
    }

}
function playRound(playerMove, computerMove){

    // let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if(playerMove == computerMove)
            winOrLose = 'Tie';
    else if( (playerMove == 'rock' && computerMove =='scissors') || 
             (playerMove =='paper' && computerMove == 'rock' ) ||
             (playerMove =='scissors' && computerMove =='paper'))
            winOrLose= 'Win';
    else winOrLose='Lose';
    // if(winOrLose === 'Tie') return `It's a tie between ${computerSelection} and ${playerSelection}`; 
    // if(winOrLose === 'Win') return `You Win! ${playerSelection} beats ${computerSelection}`;
    // else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
function game(){
    
    let score = 0;
    // let times = 5;
    let statement;
    // while(times--){
    const computerSelection = getComputerChoice();
    const playerSelection = prompt("Enter your choice",'rock');
    playRound(playerSelection, computerSelection);
    if(winOrLose === 'Win') {
        score ++;
        statement = `You Win! ${playerSelection} Beats ${computerSelection}`;
    }
    else if(winOrLose === 'Lose'){
        statement = `You Lose! ${computerSelection} Beats ${playerSelection}`;
    }
    else statement = `It's a tie between ${computerSelection} and ${playerSelection}`;   
    
    console.log(statement);

if(score<=2) console.log(`Your Score: ${score} \nYou lost the game!\n`);
else console.log(`You Win the Game!\nYour Score: ${score}`);    
}


const heroSection = document.getElementsByClassName('hero');
const output = document.querySelector('.output');
const buttons = document.getElementsByTagName('button');
let yourScore = 0;
let computerScore = 0;
for( const button of buttons)
{
button.addEventListener("click", function Game(event) { 
    let computerChoice = getComputerChoice();
    let playerSelection = event.target.id;
    playRound(playerSelection, computerChoice);
    if(winOrLose == 'Win'){
        yourScore++;
    output.textContent =` \n You ${winOrLose}. ${playerSelection} beats ${computerChoice}.`;
  
    }
    else if( winOrLose == 'Lose'){
        output.textContent =` \n You ${winOrLose}. ${computerChoice} beats ${playerSelection}. `;
        computerScore++;
    }
    else{
        output.textContent = `\n It is a tie. You both played ${computerChoice}`;
    }
    output.textContent += ` Your Score is ${yourScore}.`;
    if(computerScore == 5 || yourScore == 5){
        if(computerScore==5) winOrLose = 'lose' 
        else winOrLose = 'won';
        output.textContent = `You ${winOrLose} the game. Your Score was ${yourScore}. `
        for( const b of buttons) b.removeEventListener('click', Game);

    } 
    

});
}