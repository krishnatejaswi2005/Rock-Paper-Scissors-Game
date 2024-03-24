let userscore=0;
let compscore=0;
let choice=document.querySelectorAll('.img');
let result=document.getElementById('winning-result');
let uscore=document.getElementById('userscore');
let cscore=document.getElementById('compscore');
let reset=document.querySelector('.reset');
choice.forEach((img)=>{
    img.addEventListener('click',()=>{
        let userchoice=img.getAttribute("id");
        console.log(userchoice);
        playGame(userchoice);
    })
    
})
const drawgame=()=>{
}
const playGame= (userchoice)=>{
    const compchoice=gencompchoice();
    console.log("user choice is "+userchoice+"\n"+"computer choice is "+compchoice);
    if(userchoice===compchoice){
        result.innerText="Draw";
        result.style.backgroundColor="rgb(52, 52, 52)";

    }
    else if(userchoice==="rock"){
        if(compchoice==="scissors"){
            userscore++;
            result.innerText="You Win against scissors";
            result.style.backgroundColor="green";
        }
        else{
            compscore++;
            result.innerText="You Lose against paper";
            result.style.backgroundColor="red";

        }
    }
    else if(userchoice==="paper"){
        if(compchoice==="rock"){
            userscore++;
            result.innerText="You Win against rock";
            result.style.backgroundColor="green";
        }
        else{
            compscore++;
            result.innerText="You Lose against scissors";
            result.style.backgroundColor="red";

        }
    }
    else if(userchoice==="scissors"){
        if(compchoice==="paper"){
            userscore++;
            result.innerText="You Win against paper";
            result.style.backgroundColor="green";
        }
        else{
            compscore++;
            result.innerText="You Lose against rock";
            result.style.backgroundColor="red";

        }
    }
    uscore.innerText=userscore;
    cscore.innerText=compscore;
    
}
let gencompchoice=()=>{
    const choice=['rock','paper','scissors'];
    let compchoice=Math.floor(Math.random()*3);
    return choice[compchoice];
}
reset.addEventListener('click',()=>{
    userscore=0;
    compscore=0;
    uscore.innerText=userscore;
    cscore.innerText=compscore;
    result.innerText="Play the game";
    result.style.backgroundColor="rgb(52, 52, 52)";
})

