let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.scoreboard');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
// This is caching the DOM which is basically using the elements for future use.

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}
function win(user, computer){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    userScore++;
    userScore_span.innerHTML = userScore; 
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} covers ${convertToWord(computer)}${smallCompWord} which makes you the winner!`;
    document.getElementById(user).classList.add('green-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('green-glow'), 300);
}

function lose(user, computer){
    smallUserWord = "user".fontsize(3).sub();
    smallCompWord = "comp".fontsize(3).sub();
    compScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(computer)}${smallUserWord} covers ${convertToWord(user)}${smallCompWord} which makes the computer the winner!`;
    document.getElementById(user).classList.add('red-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('red-glow'), 300);
}

function draw(user, computer){
    smallUserWord = "user".fontsize(3).sub();
    smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(computer)}${smallUserWord} equals ${convertToWord(user)}${smallCompWord}. It's a draw! `;
    document.getElementById(user).classList.add('grey-glow');
    setTimeout(()=> document.getElementById(user).classList.remove('grey-glow'), 300);
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice ){
        case "pr":
        case "sp":
        case "rs":
            win(userChoice, computerChoice);
            break;
        
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        
        case "pp":
        case "ss":
        case "rr":
            draw(userChoice, computerChoice);
            break;
    }
}


function main(){
    rock_div.addEventListener('click', ()=> game('r'));

    paper_div.addEventListener('click', ()=> game('p'));

    scissors_div.addEventListener('click', ()=> game('s'));
}

main();