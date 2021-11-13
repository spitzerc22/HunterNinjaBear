//event listeners options//
const playAgain = document.querySelector(".playAgain")
const choices = document.querySelectorAll(".img")


choices.forEach(choice => choice.addEventListener('click', () => {
  
  const cards = document.querySelector(".cards")
  const whoWins = document.querySelector(".whoWins")
  cards.style.display = "none";
  whoWins.style.display = "flex";
  
  document.getElementById("userPickImage").src = choice.src
  
  let computerChoice = getComputerChoice();
    //displays who won//
    let whoWins = (whoWins(userChoice, computerChoice))
    let winner = document.getElementById("#winner")
    winner.textcontent = whoWins;
}))



//Play Again button//

playAgain.addEventListener('click', () => {
  const whoWins = document.querySelector(".whoWins")
  whoWins.style.display = "none";
  const cards = document.querySelector(".cards")
  cards.style.display = "flex";
})




  
//getting computer choice// 
  
  let getComputerChoice = () => {
    let choice = Math.floor(Math.random()*3)
    switch(choice){
      case 0:
        return 'hunter'
        break;
      case 1:
        return 'ninja'
        break;
      case 2:
        return 'bear'
        break;
    }
  }
  
//comparison, who wins each round// 

let yourScore = document.querySelector(".score")
let compScore = document.querySelector(".comscore")

  let whoWins = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
    return('It\'s a tie!')
  } else if(userChoice === 'hunter') {
    if(computerChoice === 'ninja') {
      compScore += 1;
      return('The computer wins!')
    } else {
      yourScore += 1;
      return('You win!')}
  } else if(userChoice === 'ninja'){
    if(computerChoice === 'bear'){
      compScore += 1;
      return('The computer wins!')
    } else {
      yourScore += 1;
      return('You win!')}
  } else if(userChoice === 'bear'){
    if(computerChoice === 'hunter'){
      compScore += 1;
      return('The computer wins!')
    } else {
      yourScore += 1;
      return('You win!')}
  }
  }
  
//calling to play the game//

  let playGame = () => { //run with event
    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    console.log('The computer threw ' + computerChoice)
    console.log('You threw ' + userChoice)
    //displays who won//
    let whoWins = (whoWins(userChoice, computerChoice))
    let winner = document.getElementById("#winner")
    winner.textcontent = whoWins;
  }