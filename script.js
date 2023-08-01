let winOrLose;
function getComputerChoice(){
    // We need to get a random choice between 0 to 2
    let randomNumber = Math.floor(Math.random()*3);
    switch (randomNumber){
        case 0: return "Scissors";
        case 1: return "Rock";
        default: return "Paper";
    }

}
function playRound(playerChoice, computerSelection){

    let playerSelection = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if(playerSelection === computerSelection)
            winOrLose = 'Tie';
    else if( (playerSelection === 'Rock' && computerSelection ==='Scissors') || 
             (playerSelection ==='Paper' && computerSelection === 'Rock' ) ||
             (playerSelection ==='Scissors' && computerSelection ==='Paper'))
            winOrLose= 'Win';
    else winOrLose='Lose';
    // if(winOrLose === 'Tie') return `It's a tie between ${computerSelection} and ${playerSelection}`; 
    // if(winOrLose === 'Win') return `You Win! ${playerSelection} beats ${computerSelection}`;
    // else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
function game(){
    
    let score = 0;
    let times = 5;~
    let statement ;
    while(times--){
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
}

if(score<=2) console.log(`Your Score: ${score} \nYou lost the game!\n`);
else console.log(`You Win the Game!\nYour Score: ${score}`);    
}
game();
