
const playAgain = document.querySelector(".playAgain")
const refresh = document.querySelector(".refresh")
const choices = document.querySelectorAll(".img")
let yourScore = document.getElementById("score").innerHTML
let compScore = document.getElementById("comscore")
let finalWinner = document.getElementById("winner")

//Comparing your choice and computer choice to find winner//

let whoWon = (userChoice, computerChoice) => {
  if(userChoice === computerChoice){
  return('It\'s a tie!')
} else if(userChoice === 'hunter') {
  if(computerChoice === 'ninja') {
    return('The computer wins!')
  } else {
    return('You win!')}
} else if(userChoice === 'ninja'){
  if(computerChoice === 'bear'){
    return('The computer wins!')
  } else {
    return('You win!')}
} else if(userChoice === 'bear'){
  if(computerChoice === 'hunter'){
    return('The computer wins!')
  } else {
    return('You win!')}
}
}

//Picking a choice, displaying it and running whoWon()//

choices.forEach(choice => choice.addEventListener('click', () => {
 
  let userChoice = choice.alt
  const cards = document.querySelector(".cards")
  cards.style.display = "none";
  const whoWins = document.querySelector(".whoWins")
  whoWins.style.display = "flex";
  document.getElementById("userPick").src = choice.src

  let computerChoice = getComputerChoice();
  if(computerChoice === 'hunter') {
    document.getElementById("computerPick").src = "assets/hunter.face.png"
  } else if(computerChoice === 'ninja') {
    document.getElementById("computerPick").src = "assets/ninja.face.png"
  } else {document.getElementById("computerPick").src = "assets/bear.face.png"}

  
  let comparison = whoWon(userChoice, computerChoice);
  if(comparison === "You win!"){
    
    finalWinner.append(comparison)
  } else if(comparison === "The computer wins!") {
    finalWinner.append(comparison)
  } else {finalWinner.append(comparison)}
  
  
 
  
  
}))

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

//Play Again button//

playAgain.addEventListener('click', () => {
  const whoWins = document.querySelector(".whoWins")
  whoWins.style.display = "none";
  const cards = document.querySelector(".cards")
  cards.style.display = "flex";
})

