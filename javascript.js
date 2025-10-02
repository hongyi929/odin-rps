
console.log("Hello World")

/* Randomly gets a choice */
function getComputerChoice() {
    let comnum = Math.random()
    if (comnum <= 1 / 3) {
        comchoice = 'rock'
    }
    else if (comnum <= 2 / 3) {
        comchoice = 'paper'
    }
    else {
        comchoice = 'scissors'
    }
    return comchoice
}

/* Prompts user for a choice */
function getHumanChoice() {
    prompt("What would you like to pick? (Rock, Paper, Scissors)").toLowerCase()
}

/* Plays the actual game, updates the score variables and prints results */
function playRound(humanChoice, computerChoice) {
    let human = ''
    if (humanChoice == "rock") {
        if (computerChoice == 'paper') {
            human = 'lose'
        }
        else if (computerChoice == 'scissors') {
            human = 'win'
        }
        else {
            human = 'tie'
        }
    }
    else if (humanChoice == 'paper') {
        if (computerChoice == 'scissors') {
            human = 'lose'
        }
        else if (computerChoice == 'rock') {
            human = 'lose'
        }
        else {
            human = 'tie'
        }
    }
    else {
        if (computerChoice == 'rock') {
            human = 'lose'
        }
        else if (computerChoice == 'paper') {
            human = 'win'
        }
        else {
            human = 'tie'
        }
    }

    if (human == 'lose') {
        console.log("The human has lost!")
    }
    else if (human == 'win') {
        console.log("The human has won!")
    }
    else {
        console.log("A tie indeed!")
    }
    return human
}

/* Calls playRound 5x*/
function playGame() {
    let humanScore = 0
    let computerScore = 0
    for (i = 0; i < 5; i++) {
        let humanChoice = getHumanChoice()
        let computerChoice = getComputerChoice()
        human = playRound(humanChoice, computerChoice)
        if (human == 'win') {
            humanScore++
        }
        else if (human == 'lose') {
            computerScore++
        }
        else {
        }
    }
    if (humanScore > computerScore) {
        console.log("The human has won the entire game!")
    }
    else if (computerScore > humanScore) {
        console.log("The computer has won the entire match!")
    }
    else {
        console.log("It's a tie for the entire game, ladies and gents!")
    }

}




/* For game interface 
<h2>Choose wisely, warrior.</h2>
            <div>
                <div class="rock">
                    <img src="rock.png">
                </div>
                <div class="paper">
                    <img src="paper.png">
                </div>
                <div class="scissors">
                    <img src="scissors.png">
                </div>
            </div>
            <img src="default_frieza.png"></img> */


let menuBtn = document.querySelector(".begin");
let gokuPanel = document.querySelector(".goku");
let vegetaPanel = document.querySelector(".vegeta");
let video = document.querySelector(".video")
let skipButton = document.querySelector(".skip")
let rpsBody = document.querySelector(".rpsBody")
let myVideo = video.firstElementChild;

menuBtn.addEventListener("click", () => {

    gokuPanel.style.display = "block";
    vegetaPanel.style.display = "block";


    gokuPanel.style.left = "0vw";
    vegetaPanel.style.left = "50vw"

    setTimeout(() => {
        myVideo.play();
        skipButton.style.display = "block";
        video.style.display = "block";
        gokuPanel.style.left = "-50vw";
        vegetaPanel.style.left = "100vw";
    }, 2000);
});


skipButton.addEventListener("click", () => {
    myVideo.src=""
    rpsSetup();
})

myVideo.addEventListener("ended", () => {
    rpsSetup();

})

function rpsSetup() {
    rpsBody.style.display = "none";
    skipButton.style.display="none";
    video.style.display = "none";

}
