let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genCompChoice = () => {
    let choiceArray = ['rock', 'paper', 'scissor'];
    let randIdx = Math.floor(Math.random() * 3);
    console.log("comp choice", choiceArray[randIdx]);
    return choiceArray[randIdx];
};

const drawGame = () => {
    msg.innerText = "Game was a Draw. Play again!";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {

    let compChoice = genCompChoice();

    if (userChoice === compChoice) {
        drawGame();
    }
    else {
        let userWin = false;
        if (userChoice === 'rock') {
            //scissor, paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            // scissor, rock
            userWin = compChoice === 'scissor' ? false : true;
        } else {

            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
}

);