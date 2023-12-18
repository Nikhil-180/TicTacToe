let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#new");
const win = document.querySelector("#win");
let count = 0;
let turn = true;

const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [1,4,7],
    [0,3,6],
    [2,5,8],
];


const showWinner = (winner) =>{
    win.innerText = `${winner} is winner`;
}

const disableButton = () =>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const checkwinner = () =>{
    for(let pattern of winner){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 !=="" && pos2 !== "" && pos3 !== "")
        {
            
            if(pos1 === pos2 && pos2 === pos3)
            {
                wi = pos1 == "X" ? "Player 1" : "Player 2";
                disableButton();
                showWinner(wi);
                
            }
            else if(count == 9)
            {
                win.innerText = `Match draw`;
                break;
            }
        }
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn)
        {
            box.innerText = "X";
            turn = !turn;
            count++;
        }
        else{
            box.innerText = "0";
            turn = !turn;
            count++;
        }
        box.disabled=true;
        checkwinner();
    });
});

const enableButton = () =>{
    count = 0;
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
    win.innerText = "Result";
}



const newGame = () =>{
    turn = true;
    enableButton();
}
reset.addEventListener("click", newGame);
