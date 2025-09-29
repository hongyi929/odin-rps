
console.log("Hello World")

/* Randomly gets a choice */
function getComputerChoice() {
    let comnum = Math.random()
    if (comnum <= 1/3) {
        comchoice = 'rock'
    }
    else if (comnum <= 2/3) {
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
function playRound(humanChoice,computerChoice){
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
function playGame(){
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


function isEven(num) {
    if (num % 2 == 0) {
        return true
    }
    else {
        return false
    }
}

/* Sum of tripled items in array: Triple the item, get the sum as 1 value */
let numbArray = [1,2,3,4,5]
console.log(numbArray)
let filteredArray = numbArray.filter(isEven);
let multipliedArray = filteredArray.map((num) => num * 3)
let total = multipliedArray.reduce((total, currentItem) => {return total + currentItem}) 
console.log(total)

// Sort in decreasing order
// Numbers need to be able to compare with one another and sort accordingly.
// First loop to iterate through all items, so all items compare with each other at least once
// Second loop is to reposition after they compare with the item beside them. Length - 1 times.
let replaced = 0
let arr = [5,2,1,-10,8];
for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-1; j++)
    {
        if (arr[j] > arr[j+1]) {
            continue
        } else {
            replaced = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = replaced
        }
    }
}
console.log(arr)