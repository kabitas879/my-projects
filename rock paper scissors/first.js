let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");
const reset =document.querySelector("#reset-btn");

choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice =choice.getAttribute("id");
        playGame(userChoice);
    });
});

const generateCompChoice=() =>{
    //rock,paper,scissors
    const options = ["rock", "paper" ,"scissor"]; //having index from 0-2
    //we are creating array of strings 
     const randIdx = Math.floor(Math.random()*3);
     return options[randIdx];

}

const drawGame =() =>{
    console.log("Game was draw.");
    msg.innerText =`Game was draw.`;
    msg.style.backgroundColor= "#004e98";
};

const showWinner =(userwin, userChoice, compChoice)=>{
    if(userwin){
        console.log("You win");
        msg.innerText= `Congratulations! You win.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor= "#036666";
        userScore++;
        userScorePara.innerText= userScore;
    }
    else{
        console.log("You lose");
        msg.innerText= `Oops!You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor= " #880d1e";
        compScore++;
        compScorePara.innerText= compScore;
    }
}
const playGame=(userChoice) =>{
    console.log("User Choice = ",userChoice);
    //Generate computer choice ->modular
    const compChoice =generateCompChoice();
    console.log("computer Choice =", compChoice);

    
if(userChoice=== compChoice){
    //draw game
    drawGame();
} else{
   let userwin=true;
   if(userChoice==="rock"){
    //computer choooses paper of scissor
    userwin= compChoice==="scissor"?true:false;
    }
    else if(userChoice==="paper"){
        //rock or scissor
        userwin= compChoice==="rock"? true: false;
    }
    else{
        //computer chooses rock or paper
        userwin= compChoice==="paper"? true: false;
    }
    showWinner(userwin,userChoice,compChoice);
  }

};

reset.addEventListener("click",()=>{
    userScorePara.innerText ="0";
    compScorePara.innerText ="0";
    msg.innerText= `Pick your move`;
    msg.style.backgroundColor= "#000000";
    userScore=0;
    compScore=0;
})






