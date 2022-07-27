let player = prompt("Pick: rock, paper or scissors?").toLowerCase();
let comp = getcomputerchoice();
alert("You picked "+ player + ", the computer picked "+ comp +" thus " + play(player))


function play(player){
    if(player.charAt(0) === "s"){
        return check(comp.charAt(0),"p", "r", "s");
    }else if(player.charAt(0) === "p"){
        return check(comp.charAt(0),"r", "s", "p");
    }else{
        return check(comp.charAt(0),"s", "p", "r");
    }
}

function check(comp,win,loser,tie){
    if(comp === win){
        return "you win!";
    }else if(comp === loser){
        return "you loze.";
    }else{
        return "it's a tie.";
    }
}

function getcomputerchoice(){
    let a = Math.floor(Math.random() * 3);
    let b = "";
    if(a === 0){
        b = "scissors";
    }else if(a === 1){
        b ="rock";
    }else{
        b = "paper";
    }
    return b;
}