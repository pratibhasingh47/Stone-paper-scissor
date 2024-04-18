let userScore = 0;
let compScore = 0;

const Uscore = document.querySelector("#user_score");
const Cscore = document.querySelector("#com_score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#result");

const genComp = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const drawGame = () => {
    msg.innerText = "Game was Draw.Play Again !";
    msg.style.backgroundColor = "#7c2e41";
};

/*Math.floor(Math.random()*10)---[from 0-9]*/

const showWinner = (userwin, choiceid, comChoice) => {
    if (userwin) {
        userScore++;
        Uscore.innerText = userScore;
        msg.innerText = `You Win ! Your ${choiceid} beats ${comChoice}`;
        msg.style.backgroundColor = "#007f5f";
    } else {
        compScore++;
        Cscore.innerText = compScore;
        msg.innerText = `You Lose. ${comChoice} beats your ${choiceid}`;
        msg.style.backgroundColor = "#3c1642";
    }
};

const playGame = (choiceid) => {
    const comChoice = genComp();

    if (choiceid === comChoice) {
        drawGame();
    } else {
        let userwin = true;
        if (choiceid === "rock") {
            userwin = comChoice === "paper" ? false : true;
        } else if (choiceid === "paper") {
            userwin = comChoice === "scissor" ? false : true;
        } else {
            userwin = comChoice === "rock" ? false : true;
        }
        showWinner(userwin, choiceid, comChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const choiceid = choice.getAttribute("id");
        playGame(choiceid);
    });
});
