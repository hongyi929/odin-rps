// 1. Constants 
let optionList = ['rock', 'paper', 'scissors'];
let imageList = ['rock.png', 'paper.png', 'scissors.png'];
let loseOption = ['scissors', 'rock', 'paper'];

let triggered = false;
let kamehamehaWidth = 0.5;
let galickGunWidth = 0.5;

// 2. DOM References   

// 2.1 Menu Section
let menuBtn = document.querySelector(".begin");

// 2.2 Panel Section
let gokuPanel = document.querySelector(".goku");
let vegetaPanel = document.querySelector(".vegeta");
let beginVideoDiv = document.querySelector(".video") // Haven't updated other areas
let skipButton = document.querySelector(".skip")
let beginVideo = beginVideoDiv.firstElementChild; // Changed variable name but not references in code 
let whiteOverlay = document.querySelector(".whiteOverlay")

// 2.3 Rock Paper Scissors Section

let rpsBody = document.querySelector(".rpsBody")
let options = document.querySelectorAll(".iconButton > div  ");
let rock = options[0];
let paper = options[1];
let scissors = options[2];
let kamehamehaDiv = document.querySelector(".kamehameha");
let kamehamehaBeam = document.querySelector(".kamehameha .beam")
let galickGunDiv = document.querySelector(".galickGun")
let gokuIcon = document.querySelector(".gokuIcon>div>img")
let vegetaIcon = document.querySelector(".vegetaIcon>div>img")
let gokuReaction = document.querySelector(".gokuReaction");
let vegetaReaction = document.querySelector(".vegetaReaction");
let kamehamehaLines = document.querySelector(".kamehameha .lines");
let kaioken = document.querySelector(".kaioken")
let sfx = document.querySelector(".sfx");

// Beam Effects
let blueSplash1 = document.querySelector(".blueSplash.one")
let blueSplash2 = document.querySelector(".blueSplash.two")
let middleBeam = document.querySelector(".middleBeam")
let purpleSplash1 = document.querySelector(".purpleSplash.one")
let purpleSplash2 = document.querySelector(".purpleSplash.two")

// 2.4 Credits Section
let replayDiv = document.querySelector(".replay")
let endingVideo = document.querySelector(".replay video")
let credits = replayDiv.lastElementChild;
let playAgainBtn = document.querySelector(".replay button")

// 3. Game Logic (Separate from UI, to allow for easy linkage and reusability)
function getComputerChoice() { // Returns the comchoice in string format (e.g. 'rock')
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

function playRound(humanChoice, computerChoice) { // Returns the game outcome in string format (e.g. 'win', 'tie')
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
            human = 'win'
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

// Main Rock Paper Scissors Logic
function playGame() { // May need to add condition for win so I blast the fella OFF

    options.forEach((button) => {
        button.addEventListener("click", () => {
            if (triggered == false) {
                let humanChoice = button.className;
                let computerChoice = getComputerChoice();
                human = playRound(humanChoice, computerChoice)
                normalBeamChange(human, humanChoice, computerChoice);

                if (kamehamehaWidth >= 0.98) {
                    powerUpChange();
                }

                if (kamehamehaWidth >= 0.99) {
                    winBeamClash();
                }

                if (kamehamehaWidth <= 0.02) {
                    powerUpChange();

                }
            }
            else {
                let humanChoice = button.className;
                let computerIndex = optionList.indexOf(humanChoice);
                let computerChoice = loseOption[computerIndex];
                let imageIndex = optionList.indexOf(computerChoice);

                human = playRound(humanChoice, computerChoice);

                normalBeamChange(human, humanChoice, computerChoice);

                if (kamehamehaWidth >= 0.99) {
                    winBeamClash();
                }

            }

        }
        );



    })
}

// 4. UI Logic and Changes
function normalBeamChange(winCondition, humanChoice, computerChoice) {
    if (winCondition == 'win') {
        kamehamehaWidth += 0.16;
        galickGunWidth -= 0.16;

        console.log("Test")
    }
    else if (winCondition == 'lose') {
        kamehamehaWidth -= 0.16;
        galickGunWidth += 0.16;
    }
    else {

    }

    gokuIndex = optionList.indexOf(humanChoice);
    gokuIcon.src = imageList[gokuIndex];

    vegetaIndex = optionList.indexOf(computerChoice);
    vegetaIcon.src = imageList[vegetaIndex];

    kamehamehaDiv.style.width = (100 * kamehamehaWidth) + "%";
    galickGunDiv.style.width = 100 * galickGunWidth + "%";
    console.log(kamehamehaWidth);
}

function winBeamClash() {
    kamehamehaDiv.style.width = "100%"
    galickGunDiv.style.width = "0%";
    whiteOverlay.style.opacity = "1";
    endingVideo.src = "credits rps.mp4"
    setTimeout(() => {
        endingVideo.play();
        kamehamehaWidth = 0.5;
        galickGunWidth = 0.5;
        triggered = false;
        gokuReaction.style.backgroundImage = "url(gokugif.gif)"
        vegetaReaction.style.backgroundImage = "url(vegetagif.gif)"
        showCredits();
    }, 1500);
}

function reactionChange(triggeredCondition) {

}

function powerUpChange() {
    kamehamehaBeam.style.height = '8vh';
    kamehamehaDiv.style.boxShadow = "inset 10px 0px 10px 30px #1CA7D9, 10px 0px 30px 5px #1CA7D9"
    kamehamehaLines.style.animation = "kameFlow 0.1s linear infinite"
    setTimeout(() => {
        kaioken.style.left = "0vw";
        sfx.play();
        // Play audio of kaioken
        setTimeout(() => {
            kaioken.style.left = '-100vw';
            gokuReaction.style.backgroundImage = "url(gokugif2.gif)";
            vegetaReaction.style.backgroundImage = "url(vegetagif2.gif)";
            triggered = true;
        }, 1200)

    }, 400)
}

function rpsSetup() {
    whiteOverlay.style.opacity = "0";
    rpsBody.style.display = "flex";
    rpsBody.style.flexDirection = "column";
    rpsBody.style.alignItems = "center";
    skipButton.style.opacity = "0";
    skipButton.style.pointerEvents = "none";
    beginVideo.style.display = "none";
    kamehamehaDiv.style.height = '10vh';
    kamehamehaDiv.style.boxShadow = "null";
    kamehamehaLines.style.animation = "kameFlow 0.3s linear infinite";
    kamehamehaDiv.style.width = "50%";
    galickGunDiv.style.width = "50%";
    playGame();
}

function rpsSetup2() {
    kamehamehaBeam.style.height = '1vh';
    whiteOverlay.style.opacity = "0";
    rpsBody.style.display = "flex";
    rpsBody.style.flexDirection = "column";
    rpsBody.style.alignItems = "center";
    skipButton.style.opacity = "0";
    skipButton.style.pointerEvents = "none";
    beginVideo.style.display = "none";
    kamehamehaDiv.style.height = '10vh';
    kamehamehaDiv.style.boxShadow = "null";
    kamehamehaLines.style.animation = "kameFlow 0.3s linear infinite";
    kamehamehaDiv.style.width = "50%";
    galickGunDiv.style.width = "50%";
}

function showCredits() {
    whiteOverlay.style.opacity = "0";
    replayDiv.style.display = "flex";
}


// 5. Event Functions
function menuBtnEvent() {
    gokuPanel.style.display = "block";
    vegetaPanel.style.display = "block";

    gokuPanel.style.left = "0vw";
    vegetaPanel.style.left = "50vw"

    setTimeout(() => {
        beginVideo.play();
        skipButton.style.display = "block";
        beginVideoDiv.style.display = "block";
        gokuPanel.style.left = "-50vw";
        vegetaPanel.style.left = "100vw";
        whiteOverlay.style.display = "block";
            setTimeout(() => {
            vegetaPanel.style.display = "none";
        }, 400)
    }, 2000);
}

function skipButtonEvent() {
    beginVideo.src = ""
    whiteOverlay.style.display = "block";
    rpsSetup();
}

function endBeginVideoEvent() {
    whiteOverlay.style.display = "block";
    rpsSetup();
}

function playAgainBtnEvent() {
    endingVideo.src = ""
    replayDiv.style.display = "none";
    rpsSetup2();
}

function endEndVideo() {
    credits.style.opacity = 1;
    credits.style.pointerEvents = "auto"
}

// 6. Event Listeners

menuBtn.addEventListener("click", () => menuBtnEvent());

skipButton.addEventListener("click", () => skipButtonEvent());

beginVideo.addEventListener("ended", () => endBeginVideoEvent());

playAgainBtn.addEventListener("click", () => playAgainBtnEvent());

endingVideo.addEventListener(("ended"), () => endEndVideo());
