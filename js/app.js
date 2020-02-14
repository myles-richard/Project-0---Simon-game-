console.log('hello there')



//keep track of high score
//change speeds
//set watch to false and appears when its time to watch
// middle says play when its personOnes turn 

// need a varible that checks if number of flashes = score
 
/* setTimeout() calls a function or evaulates an expression 
after a specified number of milliseconds.
the function is only executed once, if you need to repeat 
execution use the setInterval() method.
1000 = 1second 

use clearInterval() method to prevent the function from running.

*/ 
// let id = setInterval(lightUpBox, 1000)
//need to have computer turn and a person turn
let computerTurn;
let playerTurn;
let score = 0;
let speed = 1000;
//keep track of turns 
let turn;
//check array after each input to see if correct
//number of flashes = turn so it can stop on computer turn. 
// need to have an empty array to fill with random numbers
// need to have an array to match with computer to make sure i did the right combo
let flashOrder = [];
let playerArr = [];
// need a value for my interval 
let flashInt;
// need to get all my html box's and give them variables
const redBox = document.getElementById('topleft');
const greenBox = document.getElementById('topright');
const blueBox = document.getElementById('bottomleft');
const yellowBox = document.getElementById('bottomright');
const turnCounter = document.getElementById('countTurn');
const keepScore = document.getElementById('score');
const hightScore = document.getElementById('highscore')
// start function
let strtBtn = document.getElementById('strt');
let slwBtn = document.getElementById('slow');
// slwBtn.addEventListener('click', (event) => {
//     speed = speed * .5;
// })
strtBtn.addEventListener('click', (event) => {
    // i looping through flash order array
    let f = flashBoxes(flashOrder, turn, speed);
    f();
});

function flashBoxes(arr, roundLimiter, delayMillis) {
    let i = 0;
    return function flasher() {
        if (i < roundLimiter) {
            
            if (arr[i] === 1) {
                redBox.style.opacity=('0');
                setTimeout(function() {
                    redBox.style.opacity=('1');
                }, 500);
            }
            //make green box flash
            if (arr[i] === 2) {
                greenBox.style.opacity=('0');
                setTimeout(function() {
                    greenBox.style.opacity=('1');
                }, 500);
            }
            //make blue box flash
            if (arr[i] === 3) {
                blueBox.style.opacity=('0');
                setTimeout(function() {
                    blueBox.style.opacity=('1');
                }, 500);
            }
            //make yellow box flash
            if (arr[i] === 4) {
                yellowBox.style.opacity=('0');
                setTimeout(function() {
                    yellowBox.style.opacity=('1');
                }, 500);
            }
            console.log(arr[i++]);
            setTimeout(flasher, delayMillis);
        }
    }   
}

// After the "display round", swap "watch" with "play"

// During "play", record user clicks into a new array and make color flash
redBox.addEventListener('click', (event) => {
    playerArr.push(1)
    redBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
}) 
greenBox.addEventListener('click', (event) => {
    playerArr.push(2)
    greenBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
})
blueBox.addEventListener('click', (event) => {
    playerArr.push(3)
    blueBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
})
yellowBox.addEventListener('click', (event) => {
    playerArr.push(4)
    yellowBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
})
// clear color and change back after player presses on them
function clearColor() {
    redBox.style.opacity=('1');
    greenBox.style.opacity=('1');
    blueBox.style.opacity=('1');
    yellowBox.style.opacity=('1');
}
// When the player's array is the same length as the turn number, compare player array to turn number of elements in the flashOrder
// If they match, clear the player array, increase the turn, swap "play" with "watch"
const checkForMatch = () => {
    console.log(playerArr.length, flashOrder.length);
    //compare arrays 
    // If they don't match, game over.
    if (playerArr[playerArr.length -1] !== flashOrder[playerArr.length -1]) {
        document.getElementById('round').innerHTML = 'GAME OVER!'
        finallScore = score
        hightScore.innerHTML = 'High Score: ' + finallScore
        clearInterval(flashInt)
        console.log('game over')
    } else if(playerArr.length === turn){
        turn++
        keepScore.innerHTML = 'Score: '+ score++;
        playerArr = [];
        
        document.getElementById('round').innerHTML = 'WATCH'
        let f = flashBoxes(flashOrder, turn, 1000);
        setTimeout(f, 1000);
        console.log('you won the round')
    }
}



function start() {
    // turn switches to one so you can check the amount of flashes
    turn = 1;
    
    turnCounter.innerHTML = turn;
    // need to clear game and colors 
    for (let i = 0; i < 20; i++) {
        // need to generate a number between 1 & 4 and count up to 20
        flashOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    
    console.log(flashOrder)
    //check computer turn 
}


start();

console.log(playerArr)