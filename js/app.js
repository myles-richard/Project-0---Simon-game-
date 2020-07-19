console.log('hello there')

let score = 0;
//speed of game

//keep track of turns 
let turn;
// need to have an empty array to fill with random numbers
// need to have an array to match with computer to make sure i did the right combo
let flashOrder = [];
let playerArr = [];
let speed = 1000;
// need a value for my interval 
let flashInt;
// need to get all my html box's and give them variables
const redBox = document.getElementById('topleft');
const greenBox = document.getElementById('topright');
const blueBox = document.getElementById('bottomleft');
const yellowBox = document.getElementById('bottomright');
//counter for turns
const turnCounter = document.getElementById('count-turn');
//keep score variable
const keepScore = document.getElementById('score');
//keep track of high score
const hightScore = document.getElementById('highscore')
// start button
let strtBtn = document.getElementById('strt');
let slwBtn = document.getElementById('slow');
let rstBtn = document.getElementById('reset')

slwBtn.addEventListener('click', (event) => {
    let f = flashBoxes(flashOrder, turn, (speed * .75));
    f();
})
// start function
strtBtn.addEventListener('click', (event) => {
    // i looping through flash order array
    let f = flashBoxes(flashOrder, turn, speed);
    f();
});
//reset button
rstBtn.addEventListener('click', (event) => {
    resetGame();
});

//make boxes flash
function flashBoxes(arr, roundLimiter, delayMillis) {
    let i = 0;
    return function flasher() {
       // After the "display round", swap "watch" with "play" 
            document.getElementById('round').innerHTML = 'PLAY'
            //number of flashes = turn so it can stop on computer turn.   
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
            //go to next element in array
            arr[i++];
            console.log(delayMillis)
            setTimeout(flasher, delayMillis);
        }
    }   
}



// During "play", record user clicks into a new array and make color flash back to normal with clearcolor. 
// check for match after every click
redBox.addEventListener('click', (event) => {
    playerArr.push(1)
    redBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
}) 
greenBox.addEventListener('click', (event) => {
    //push number to array
    playerArr.push(2)
    greenBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
})
blueBox.addEventListener('click', (event) => {
    //push number to array
    playerArr.push(3)
    blueBox.style.opacity=('0');
    setTimeout(() => {
        clearColor();
    }, 200);
    checkForMatch();
})
yellowBox.addEventListener('click', (event) => {
    //push number to array
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
    
    //compare arrays 
    // If they don't match, game over.
  //check array after each input to see if correct
    if ((playerArr[playerArr.length -1] == flashOrder[playerArr.length -1]) && (playerArr.length === 20)) {
        document.getElementById('round').innerHTML = 'YOU WIN!'
    }
    //check array after each input to see if correct
    if (playerArr[playerArr.length -1] !== flashOrder[playerArr.length -1]) {
        document.getElementById('round').innerHTML = 'GAME OVER!'
        finallScore = score
        hightScore.innerHTML = 'High Score: ' + finallScore
        // If they match, clear the player array, increase the turn, swap "play" with "watch"
    } else if(playerArr.length === turn){
        turn++
        turnCounter.innerHTML = turn
        score++
        keepScore.innerHTML = 'Score: '+ score;
        playerArr = [];
        document.getElementById('round').innerHTML = 'WATCH'
        let f = flashBoxes(flashOrder, turn, speed);
        //run f again wait a second though
        setTimeout(f, speed);
       
    }
}



//Reset game
function resetGame() {
    playerArr = [];
    flashOrder = [];
    score = 0;
    keepScore.innerHTML = 'Score: '+ 0;
    turn = 1;
    turnCounter.innerHTML = turn
    start()
    document.getElementById('round').innerHTML = 'Press Start!'
  
    
}

//Start function
function start() {
    // turn switches to one so you can check the amount of flashes
    turn = 1;
    
    turnCounter.innerHTML = turn;
    // need to clear game and colors 
    for (let i = 0; i < 20; i++) {
        // need to generate a number between 1 & 4 and count up to 20
        flashOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    
    
    //check computer turn 
}


start();
