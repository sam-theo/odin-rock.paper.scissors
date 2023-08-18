const result = document.getElementById('result');
const playerWin = document.getElementById('playerWin');
const compWin = document.getElementById('compWin');
let playerWins = 0;
let compWins = 0;

function play(player) {
    let comp = getcomputerchoice();
    if (player.charAt(0) === "s") {
        result.innerHTML = check(comp, "paper", "rock", "scissors");
    } else if (player.charAt(0) === "p") {
        result.innerHTML = check(comp, "rock", "scissors", "paper");
    } else {
        result.innerHTML = check(comp, "scissors", "paper", "rock");
    }
    playerWin.textContent = "Player: " + playerWins + "/5";
    compWin.textContent = "Computer: " + compWins + "/5";
}

function check(comp, win, loser, tie) {
    if (comp === win && playerWins < 4) {
        playerWins = playerWins + 1;
        return "You picked " + tie + ", the computer picked " + comp + " thus:<br><span style='color: green;'>YOU WIN!</span>";
    } else if (comp === loser && compWins < 4) {
        compWins = compWins + 1;
        return "You picked " + tie + ", the computer picked " + comp + " thus:<br><span style='color: red;'>YOU LOSE!</span>";
    } else if (comp === loser && compWins == 4) {
        let player = playerWins;
        playerWins = 0;
        compWins = 0;
        return "<span style='color: red;'>THE COMPUTER HAS 5 YOU LOST THE ENTIRE GAME </span> <br> YOU HAD " + player;
    } else if (comp === win && playerWins == 4) {
        let comp = compWins;
        playerWins = 0;
        compWins = 0;
        return "<span style='color: green;'>YOU HAVE 5 YOU WON THE ENTIRE GAME</span><br> THE COMPUTER HAD " + comp;
    } else {
        return "You picked " + tie + ", the computer picked " + comp + " thus:<br>IT'S A TIE";
    }
}

function getcomputerchoice() {
    let a = Math.floor(Math.random() * 3);
    let b = "";
    if (a === 0) {
        b = "scissors";
    } else if (a === 1) {
        b = "rock";
    } else {
        b = "paper";
    }
    return b;
}
