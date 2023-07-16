
let score={
    win :0,
    lose:0,
    draw:0
}
let p;
let pick;
play = (x)=>{
    pick = x;
    const scoreboard = ["stone","paper","scissor"];
    const random_index = Math.floor(Math.random() *10 %3);
    let pc_pick = scoreboard[random_index];
    console.log(x);
    console.log(pc_pick);

    if(x === pc_pick){
        const draw_point = document.querySelector("#draw");
        draw_point.innerHTML = `DRAW : ${++(score.draw)}`;
        p = 0
    }
    else if(x !== pc_pick){
        if((pc_pick ==="stone" && x==="scissor") || (pc_pick ==="paper" && x==="stone") || (pc_pick ==="scissor" && x==="paper")){
            const lose_point = document.querySelector("#lose");
            lose_point.innerHTML = `LOSE : ${++(score.win)}`;
            p = -1;
        }
        else{
            const win_point = document.querySelector("#win");
            win_point.innerHTML = `WIN : ${++(score.win)}`;
            p = 1; 
        }
    }
    let Element = document.querySelector(`#${pick}`);
    let str;
    activeElement = (s)=>{
        str=s;
        Element.classList.add(s);
    }
    if(p===1){
        activeElement("is-win")
    }
    if(p===-1){
        activeElement("is-lose")
    }
    if(p===0){
        activeElement("is-draw")
    }
    deactivateElement = (s) => {
        Element.classList.remove(str);
    }
    setTimeout(deactivateElement,400)
}