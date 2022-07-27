
function play(player){
    if(player.charAt(0) === "s"){
        return check(getcomputerchoice(),"p", "r", "s");
    }else if(player.charAt(0) === "p"){
        return check(getcomputerchoice(),"r", "s", "p");
    }else{
        return check(getcomputerchoice(),"s", "p", "r");
    }
}

function check(comp,win,loser,tie){
    if(comp === win){
        return "you win!";
    }else if(comp === loser){
        return "You loze.";
    }else{
        return "It's a tie.";
    }
}

function getcomputerchoice(){
    let a = Math.floor(Math.random() * 3);
    let b = "";
    if(a === 0){
        b = "s";
    }else if(a === 1){
        b ="r";
    }else{
        b = "p";
    }
    return b;
}