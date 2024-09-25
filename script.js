let userscore = 0;
let compscore = 0;
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");

const genComputerChoice = ()=>{
  let options = ["rock","paper","scissors"];
  const randIdx = Math.floor(Math.random()*3);
  return options[randIdx];
}

const drawGame = ()=>{
  msg.innerText = "game was Draw";
  // console.log("Game was Draw");
}

const showWinner = (userWin)=>{
  if(userWin){
    userscore++;
    userScore.innerText = userscore;
    msg.innerText = "You Win!";
    // console.log("You Win!");
  }else{
    compscore++;
    compScore.innerText = compscore;
    msg.innerText = "You Lose!";
    // console.log("You Lose!");
  }
}

const playGame = (userChoice)=>{
  // Generate Computer Choice
  const compChoice = genComputerChoice();
  if(userChoice=== compChoice){
    drawGame();
  }else{
    let userWin = true;
    if(userChoice==="rock"){
      userWin = compChoice==="paper" ? false :true;
    }
    else if(userChoice==="paper"){
      userWin = compChoice==="scissors" ? false : true;
    }else{
      userWin = compChoice==="rock" ? false : true;
    }
    showWinner(userWin);
  }
}

choices.forEach((choice)=>{
  choice.addEventListener("click",()=>{
    const userChoice = choice.getAttribute("id");
    // console.log("Chooice Clicked",userChoice);
    playGame(userChoice);
  });
});