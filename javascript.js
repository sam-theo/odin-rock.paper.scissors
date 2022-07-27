



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