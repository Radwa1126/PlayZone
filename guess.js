let play_again = document.querySelector("#play_again");
play_again.style.display="none";
let button = document.querySelector("#guess");
let input = document.querySelector("#user_input");
let random = Math.floor(Math.random() * 10)+1;
let tries=5;
let score=0;
let welcome=document.querySelectorAll("p");
let guess_the_number=function(){
    welcome.forEach(w => {
        w.innerHTML="";
    });
 document.getElementById("user_guess").innerHTML="Your Guess: "+ input.value;
    if ( input.value===""||input.value<1 || input.value >10) {
        alert("please enter a number between 1 and 10")
        return 0;
        
    }
    if (input.value==random) {
        score++;
        document.getElementById("winner").innerHTML="Congratulations! "+ input.value + " is the secret number!!";
        document.getElementById("score").innerHTML="Your Score : "+score;
        button.style.display="none";
        play_again.style.display="inline-block";
    }
    else{
        tries--;
        document.getElementById("winner").innerHTML="Try again! you have "+tries+" tries left";
        if (tries==0) {
            document.getElementById("winner").innerHTML="Sorry! the secret number is : "+ random;
            button.style.display="none";
            play_again.style.display="inline-block";
        }
    }
}
play_again.addEventListener("click",function() {
    tries=5
    random = Math.floor(Math.random() * 10)+1;
    document.getElementById("user_guess").innerHTML="";
    document.getElementById("winner").innerHTML="New game started! You have " + tries + " tries left.";
    input.value = "";
    button.style.display="inline-block";
    play_again.style.display="none";
    document.getElementById("score").innerHTML="Your Score : "+score;
})
