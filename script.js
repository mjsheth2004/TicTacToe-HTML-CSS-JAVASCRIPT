console.log("Welcome to Tic Tac Toe")

let boxtext = document.querySelectorAll(".box");
let wel = document.querySelector(".welcome")
let msgContainer  = document.querySelector(".winner");
let msg = document.querySelector(".msg");
let img = document.querySelector(".imgbox");
let reset = document.querySelector(".reset");
let newgame= document.querySelector(".newgame");
let Mygame = document.querySelector(".game");
let count = 0;
let win = false;
let audioTurn = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let congratulation = new Audio("congratulation.mp3")

let turnx=true;


const checkWin = ()=>{
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
     ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            winmessage(boxtext[e[0]].innerText);
        }                

        else
            {
                count=count+1;
            }
        
        if(count===72 && !win)
                {
                    drawmessage();
                }     
    })
}

const drawmessage = () =>
    {
        gameover.play();
        wel.classList.add("hide");
        reset.classList.add("hide");
        msgContainer.classList.remove("hide");
        msg.innerText=`GAME DRAW`;
        newgame.classList.remove("hide");
    }

const winmessage = (winner) =>
    {
        congratulation.play();
        msg.innerText=`CONGRATULATIONS, WINNER IS : ${winner}`;
        win = true;
        wel.classList.add("hide");
        msgContainer.classList.remove("hide");
        img.classList.remove("hide");
        newgame.classList.remove("hide");
        Mygame.classList.add("hide");
        reset.classList.add("hide");

    };

boxtext.forEach((box) =>
{
    box.addEventListener("click", ()=>{
    audioTurn.play();
        if(turnx)
        {
            box.innerText="X";
            turnx=false;
        }
    else
        {
            box.innerText="O";
            turnx=true;
        }
    box.disabled = true;
    checkWin()
    })
}
)

const reset1 =()=>
    {
        turnx=true;
        win=false;
        count=0;
        msgContainer.classList.add("hide");
        img.classList.add("hide");
        newgame.classList.add("hide");
        
        for(let i of boxtext)
        {
            i.disabled=false;
            i.innerText="";
        }
        wel.classList.remove("hide");
        Mygame.classList.remove("hide");
        reset.classList.remove("hide");

    }

reset.addEventListener("click", reset1);
newgame.addEventListener("click", reset1);