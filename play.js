//event listeners for card options//
const hunter = document.querySelector(".hunter")
const ninja = document.querySelector(".ninja")
const bear = document.querySelector(".bear")

hunter.addEventListener('click', () => {
  let cards = document.querySelector(".cards")
  cards.style.display = "none";
  
} )




  
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

  let whoWins = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
    console.log('It\'s a tie!')
  } else if(userChoice === 'hunter') {
    if(computerChoice === 'ninja') {
      console.log('The computer wins!')
    } else {console.log('You win!')}
  } else if(userChoice === 'ninja'){
    if(computerChoice === 'bear'){
      console.log('The computer wins!')
    } else {console.log('You win!')}
  } else if(userChoice === 'bear'){
    if(computerChoice === 'hunter'){
      console.log('The computer wins!')
    } else {console.log('You win!')}
  }
  }
  
//calling to play the game//

  let playGame = () => {
    let userChoice = getUserChoice('hunter');
    let computerChoice = getComputerChoice();
    console.log('The computer threw ' + computerChoice)
    console.log('You threw ' + userChoice)
    console.log(whoWins(userChoice, computerChoice))
  }