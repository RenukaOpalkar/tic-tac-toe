let boxes=document.querySelectorAll('.box');
let reset_button=document.querySelector('#reset-btn');
let newGameBtn=document.querySelector('#new-btn');
let msgContainer=document.querySelector('.msg-container');
let msg=document.querySelector('#msg');
// two player x and o
let turn_o=true;
// array which can store winning pattern
const winPattern=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],
    [2,4,6],[2,5,8],
    [3,4,5],
    [6,7,8],

];

// reset game

const resetGame=()=>{
    turn_o=true;
    enableBoxes();
    msgContainer.classList.add("hide");

};
// event lister---when we click button it happens

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        // if player o turn then x will false 
        if(turn_o==true){
            box.innerText="O";
            turn_o=false;

        }else{
        // if x turn then o will false
            box.innerText="X"
            turn_o=true;
        }
        box.disabled=true;
        // check winner 
        checkWinner();
    });
});
// disable box
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
//enable boxes
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}; 
// show winner
const showWinnner =(winner)=>{
    msg.innerText=`Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") {
            return false; // There are still empty boxes, the game is not a draw
        }
    }
    return true; // All boxes are filled, it's a draw
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        // checking winner condition
        if(pos1val!="" && pos2val!=""&& pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
               console.log("winner",pos1val);

               showWinnner(pos1val);
            }
        }
    }
    if (checkDraw()) {
        msg.innerText = "You Loose The Game!";
        msgContainer.classList.remove("hide");
        disableBoxes();
    }
};

// new game button
newGameBtn.addEventListener("click",resetGame);

reset_button.addEventListener("click",resetGame);