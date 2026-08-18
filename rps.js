let choices=["rock","paper","scissor"];
let rockbutton = document.getElementById("rock");
let paperbutton = document.getElementById("Paper");
let scissorsbutton = document.getElementById("Scissors");

let playerChoice = document.getElementById("player_choice");
let CoputerChoice = document.getElementById("computer_choice");
let scoreC=0;
let scoreP=0;

let playermove="";
let computermove="";

let computer_score=document.getElementById("computer_score");
let player_score=document.getElementById("player_score");

let play_again = document.querySelector("#again");
play_again.style.display="none";

rockbutton.addEventListener("click",function(){
    playerChoice.src = "0rock.png";
    playermove="rock";
    computerMove();
    checkWinner();
    computer_score.innerHTML="Computer Score : "+scoreC;
    player_score.innerHTML="Player Score : "+scoreP;
})
paperbutton.addEventListener("click",function(){
    playerChoice.src = "0paper.png";
    playermove="paper";
    computerMove();
     checkWinner();
     computer_score.innerHTML="Computer Score : "+scoreC;
    player_score.innerHTML="Player Score : "+scoreP;
})
scissorsbutton.addEventListener("click",function(){
    playerChoice.src = "0Scissors.png";
    playermove="scissor";
    computerMove();
     checkWinner();
      computer_score.innerHTML="Computer Score : "+scoreC;
    player_score.innerHTML="Player Score : "+scoreP;
})

function computerMove() {
    let random = Math.floor(Math.random() * 3);
    computermove=choices[random];
    if (computermove=="rock") {
    CoputerChoice.src = "0rock.png";
}
else if (computermove=="paper") {
    CoputerChoice.src = "0paper.png";
}
else{
    CoputerChoice.src = "0Scissors.png";
}
}

let result=document.getElementById("result");
function checkWinner(){
if (computermove==playermove) {
    result.innerHTML="It's a Draw!"
}
else if (computermove=="rock"&&playermove=="paper") {
    result.innerHTML="You Win this round!"
    scoreP++
}
else if (computermove=="rock"&&playermove=="scissor") {
    result.innerHTML="Computer Wins this round!"
    scoreC++
}

else if (computermove=="paper"&&playermove=="scissor") {
    result.innerHTML="You Win this round!"
    scoreP++
}
else if (computermove=="paper"&&playermove=="rock") {
    result.innerHTML="Computer Wins this round!"
    scoreC++
}

else if (computermove=="scissor"&&playermove=="rock") {
    result.innerHTML="You Win this round!"
    scoreP++
}
else if (computermove=="scissor"&&playermove=="paper") {
    result.innerHTML="Computer Wins this round!"
    scoreC++
}
play_again.style.display="inline-block";
 rockbutton.style.display="none";
 paperbutton.style.display="none";
 scissorsbutton.style.display="none";
}

function PlayAgain() {
 play_again.style.display="none";
 rockbutton.style.display="inline-block";
 paperbutton.style.display="inline-block";
 scissorsbutton.style.display="inline-block";
 playerChoice.src = "qmark.jpg";
 CoputerChoice.src = "qmark.jpg";
 result.innerHTML="Waiting for the winner.."
}
