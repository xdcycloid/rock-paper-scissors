function getComputerChoice()
{
    let choices= Math.random();
    let object;

    if(choices<0.33)
    {
        object="rock";
    }
    else if(choices >=0.33 && choices<=0.66)
    {
        object="paper";
    }
    else
    {
        object="scissors";
    }
    console.log(object) //remove this after finishing
    return object;
}
// getComputerChoice()

function getHumanChoice()
{
    let choice= window.prompt("What is your choice?");
    choices= ['rock','paper','scissors'];
    if(!choices.includes(choice)){
        alert('Error, please choose either rock, paper or scissors. Refresh page to continue.')
    }
    
    console.log(choice); //remove this after finishing
    return choice;
}
// getHumanChoice()

let humanScore= 0;
let computerScore= 0;

function playRound(humanChoice,computerChoice)
{
    let result; 
    if (humanChoice == computerChoice) 
        {
            console.log(`You both selected ${humanChoice}.`)
        } 
    else if (humanChoice=="paper" && computerChoice=="scissors") 
        {
            result = "lose";
        } 
    else if (humanChoice=="paper" && computerChoice=="rock") 
        {
            result = 'win';
        }
    else if (humanChoice=="scissors" && computerChoice=="paper") 
        {
            result = 'win';
        }
    else if (humanChoice=="scissors" && computerChoice=="rock") 
        {
            result = 'lose';
        }
     
    else if (humanChoice=='rock' && computerChoice=='scissors') 
        {
            result = 'win';
        } 
    else if (humanChoice=='rock' && computerChoice=='paper') 
        {
            result = 'lose';
        }

    switch(result){
        case 'win':
            humanScore =humanScore+1;
            console.log(`You WON! Your ${humanChoice} beats ${computerChoice}.`);
            break;
        case 'lose':
            computerScore =computerScore+1;
            console.log(`You LOSE! ${computerChoice} beats your ${humanChoice}.`);
            break;
        default:
            console.log("This is a TIE!");
    }
}

function playGame()
{
    for(i=0;i<=5;i++)
    {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);

        console.log(`Computer: ${computerScore}, You: ${humanScore}`)
    }
}

playGame();

