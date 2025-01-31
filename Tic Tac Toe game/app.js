let boxes=document.querySelectorAll(".box");
let msg=document.querySelector(".msg");
let container=document.querySelector(".msg-container");
let restartBtns=document.querySelectorAll(".new");

let oInput =true;
const winPattern= [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText =""; //it tells that box is empty 
    }
};

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled =true;
    }
};

boxes.forEach((box)=>{
    box.addEventListener("click",() =>{
        if(oInput) {  //if(oInput==="true")
            box.innerText ="O";
            box.style.color ="#136f63";
            oInput=false;
          } else {
              box.innerText ="X";
              box.style.color ="#450920";
              oInput=true;
          }
          box.disabled= true;

          checkWinner();
    });
 
});


const checkWinner= ()=>{
    for(let pattern of winPattern){
           let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val =boxes[pattern[1]].innerText;
            let pos3Val =boxes[pattern[2]].innerText;

            if(pos1Val!="" && pos2Val!="" &&pos3Val!=""){
                if(pos1Val=== pos2Val &&pos2Val===pos3Val){
                    console.log("Winner",pos1Val);
                    showWinner(pos1Val);
                }
            }
    }
};

const showWinner=(winner)=>{
    msg.innerText = `Congratulations, winner is ${winner}`;
    
    container.classList.remove("hide");//this removes the class hide and all the properties in the class hide is disabled
    disableBoxes();
};

const resetGame =()=>{
    oInput = true;//again o can have first turn to play
    enableBoxes();//this function is called
    container.classList.add("hide");//the class hide will be activated
};

for(restartBtn of restartBtns){
    restartBtn.addEventListener("click",resetGame);
}



 



