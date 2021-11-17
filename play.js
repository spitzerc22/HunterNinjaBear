
const playAgain = document.querySelector(".playAgain")
const howToBtn = document.querySelector(".howToBtn")
const howToPlay = document.querySelector("#howToPlay")
const refresh = document.querySelector(".refresh")
const choices = document.querySelectorAll(".img")
const cards = document.querySelector(".cards")
const whoWins = document.querySelector(".whoWins")
const directions = document.querySelector(".howToPlay");
const first = document.querySelector(".first");
const second = document.querySelector(".second");
let yourScore = 0;
let compScore = 0;



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
  cards.style.display = "none";
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
    yourScore += 1;
    document.getElementById("score").textContent = yourScore;
    document.getElementById("winner").textContent = comparison;
  } else if(comparison === "The computer wins!") {
    compScore += 1;
    document.getElementById("comScore").textContent = compScore;
    document.getElementById("winner").textContent = comparison;
  } else {document.getElementById("winner").textContent = comparison;}

  
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
  whoWins.style.display = "none";
  cards.style.display = "flex";
  
})

//Refresh button//

refresh.addEventListener('click', () => {
  window.location.reload();
})

//displaying 'how to play' on game page //


howToPlay.addEventListener('click', () => {
  cards.style.display = "none";
  directions.style.display = 'flex';
  first.style.display = "none";
  second.style.display = "flex";
  
})

//Going back to game from directions//

howToBtn.addEventListener('click', () => {
  directions.style.display = 'none';
  cards.style.display = "flex";
  first.style.display = "flex";
  second.style.display = "none";
    
})