let board = ["", "", "", "", "", "", "", "", ""];
let player = "X";
let gameOver = false;

let scoreX = 0;
let scoreO = 0;

let playerX_score = document.getElementById("playerX");
let playerO_score = document.getElementById("playerO");

let play_again = document.querySelector("#play_again");
play_again.style.display = "none";

function Switch() {
    if (player == "X") {
        player = "O";
    }
    else {
        player = "X"
    }
}

let buttons = document.querySelectorAll(".btn")
buttons.forEach(function (button, index) {

    button.addEventListener("click", function () {
        if (board[index] == "" && gameOver == false) {
            board[index] = player;
            button.innerHTML = player;
            if (player == "X") {
                button.style.color = "#00ffff";
            }
            else {
                button.style.color = "#ff00ff";
            }
            checkWinner();
            Switch();
        }
    });

});

let winner = document.getElementById("winner")

function checkWinner() {

    if (
        board[0] != "" && board[0] == board[1] && board[1] == board[2]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[3] != "" && board[3] == board[4] && board[4] == board[5]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[6] != "" && board[6] == board[7] && board[7] == board[8]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[0] != "" && board[0] == board[3] && board[3] == board[6]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[1] != "" && board[1] == board[4] && board[4] == board[7]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[2] != "" && board[2] == board[5] && board[5] == board[8]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[0] != "" && board[0] == board[4] && board[4] == board[8]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    else if (board[2] != "" && board[2] == board[4] && board[4] == board[6]) {
        winner.innerHTML = "Player " + player + " Wins!";
        gameOver = true;
    }
    if (
        board[0] != "" && board[1] != "" && board[2] != "" && board[3] != "" && board[4] != "" && board[5] != "" && board[6] != "" && board[7] != "" && board[8] != "" && winner.innerHTML == "") {
        winner.innerHTML = "It's a Draw!";
        gameOver = true;
    }

    if (gameOver == true && winner.innerHTML != "It's a Draw!") {
        if (player == "X") {
            scoreX++;
            playerX_score.innerHTML = "Player X Score: " + scoreX;
        }
        else {
            scoreO++;
            playerO_score.innerHTML = "Player O Score: " + scoreO;
        }
    }

    if (gameOver == true) {
        play_again.style.display = "inline-block";
    }
}

function PlayAgain() {
    play_again.style.display = "none";
    board = ["", "", "", "", "", "", "", "", ""];
    player = "X";
    gameOver = false;
    winner.innerHTML = "";
    buttons.forEach(function (button) {
        button.innerHTML = "";

    });
}
