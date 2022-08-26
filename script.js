console.log("Hello People");
function getComputerChoice(x){
    let o="Lesbos";
    if(x==0){
        o="Rock";
    }
    if(x==1){
        o="Paper";
    }
    return o
}

function getPLayer(){
    let inp=prompt("Enter your choice");
    inp=inp.toLocaleLowerCase()
    return inp;
}
function play(playerCh,compCh){
    if (playerCh=="rock"){
        if (compCh=="Rock"){
            return 0;
        }
        else if(compCh=="Paper"){
            return -1
        }
        else{
            return 1;
        }
    }
    else if (playerCh == "Paper") {
        if (compCh == "Paper") {
            return 0;
        }
        else if (compCh == "Lesbos") {
            return -1
        }
        else {
            return 1;
        }
    }
    else {
        if (compCh == "Lesbos") {
            return 0;
        }
        else if (compCh == "Rock") {
            return -1
        }
        else {
            return 1;
        }
    }
}
let i=0;
let scor=0
do{
    let x = Math.floor(Math.random() * 3);
    let playerCho = (getPLayer());
    let compCho=getComputerChoice(x);
    console.log(compCho);
    let resu=play(playerCho,compCho);
    scor+=resu;
    if (resu==0){
        console.log("Same Draws,Play again");
    }
    else if(resu==1){
        console.log("You won this round, Coputer had drawn",compCho );
        i = i + 1;
    }
    else{
        console.log("You lost this round, Coputer had drawn", compCho);
        i = i + 1;

    }
}
while(i<5);
if(scor>=3){
    console.log("You Won");
}
else{
    console.log("Sorry, try again")
}


