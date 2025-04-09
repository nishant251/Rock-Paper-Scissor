let userScore=0;
let compscore=0;
const msg=document.querySelector("#msg");
 
const choices=document.querySelectorAll(".choice");

const  userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const genCompChoice=()=>{
let opt=["rock","paper","scissor"];
const random=Math.floor(Math.random()*3);
return opt[random];
}

const drawGame=()=>{
    console.log("game is draw");
    msg.innerText="game draw"
}

const showWinner=(userwin,userChoice,compchoice)=>{
    if(userwin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("user win!");
        msg.innerText=`you win! your ${userChoice} beats ${compchoice}`;
    }
    else{
        compscore++;
        compScorepara.innerText=compscore;
        console.log("you lost");
        msg.innerText=`you loss! ${comChoice} beats your ${userchoice}`;
    }
}


const playGame=(userChoice)=>{
console.log("user choice =",userChoice);
const compchoice=genCompChoice();
console.log("comp choice =",compchoice);
if(userChoice==compchoice)
{
    //Draw
    drawGame()
}
else{
    let userwin=true;
    if(userChoice==="rock"){
        userwin=compchoice==="paper" ? false:true;
    }
    else if(userChoice==="paper")
    {
        userwin=compchoice==="scissor"?false:true;
    }
    else{
        userwin=compchoice==="rock"?false:true;
    }
    showWinner(userwin,userChoice,compchoice);
}
}
choices.forEach((choice)=>{
    console.log(choice);
 choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    //console.log("choice was clicked");
    playGame(userChoice);
 });
});