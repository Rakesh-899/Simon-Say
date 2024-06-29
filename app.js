let gamesequence=[];
let usersequence=[];
let buttons=["red", "green", "yellow", "blue"];
let started=false;
let level=0;
let h2=document.querySelector("h3");
document.addEventListener("keypress", function () {
    if (!started) {
        started=true;
        console.log("game is started");
        levelup();
    }
});


function gameFlash (btn) {
    btn.classList.add("flash");
    console.log(btn.classList);
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function userflash (btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 300);
}


function levelup () {
    usersequence=[];
    level++;
    h2.innerText=`level : ${level}`;
    let randomind=Math.floor(Math.random()*3);
    // console.log(randomind);
    let randomcolor=buttons[randomind];
    gamesequence.push(randomcolor);
    // console.log(randomcolor);
    let randombutton=document.querySelector(`.${randomcolor}`);
    // console.log(randombutton);
    gameFlash(randombutton);
}

function checkAns (ind) {
    console.log(`${level}`);
    // let ind=level-1;
    if (usersequence[ind]==gamesequence[ind]) {
        console.log("value is same");
        if (usersequence.length==gamesequence.length) {
            setTimeout(levelup, 1000);
        }
    }
    else {
        h2.innerHTML=`Game over your score was <b>${level}</b> <br> Press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        }, 500);
        reset();
    }
}

function reset () {
    level=0;
    usersequence=[];
    gamesequence=[];
    started=false;
}

function btnpress () {
    console.log("button was pressed");
    userflash(this);
    let btn=this;
    let usercolor=btn.getAttribute("id");
    console.log(usercolor);
    usersequence.push(usercolor);
    checkAns(usersequence.length-1);
}

let allbuttons=document.querySelectorAll(".btn");
for (i of allbuttons) {
    i.addEventListener("click", btnpress);
}