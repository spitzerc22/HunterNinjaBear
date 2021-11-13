//event listeners options//
const playAgain = document.querySelector(".playAgain")
const choices = document.querySelectorAll(".img")
let yourScore = document.querySelector(".score")
let compScore = document.querySelector(".comscore")

choices.forEach(choice => choice.addEventListener('click', () => {
  let userChoice = choice.alt
  const cards = document.querySelector(".cards")
  cards.style.display = "none";
  const whoWins = document.querySelector(".whoWins")
  whoWins.style.display = "flex";
  console.log(choices)
  document.getElementById("userPick").src = choice.src

  let computerChoice = getComputerChoice();
  if(computerChoice === 'hunter') {
    document.getElementById("computerPick").src = "assets/hunter.face.png"
  } else if(computerChoice === 'ninja') {
    document.getElementById("computerPick").src = "assets/ninja.face.png"
  } else {document.getElementById("computerPick").src = "assets/bear.face.png"}

  whoWins(userChoice, computerChoice)
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

  // let playGame = () => { //run with event
  //   let userChoice = getUserChoice();
  //   let computerChoice = getComputerChoice();
  //   console.log('The computer threw ' + computerChoice)
  //   console.log('You threw ' + userChoice)
  //   //displays who won//
  //   let whoWins = (whoWins(userChoice, computerChoice))
  //   let winner = document.getElementById("#winner")
  //   winner.textcontent = whoWins;
  // }