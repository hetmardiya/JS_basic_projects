let random_number = parseInt(Math.random() * (100 + 1));

let user_input = document.querySelector("#input_value");
let submit = document.querySelector("#submit");
let previous_number = document.querySelector(".previous");
let remaining_attempt = document.querySelector(".attempt");
let lowOrHigh = document.querySelector(".lowOrHigh");
let hide_content = document.querySelector(".hide_content");

let button = document.createElement("button");

let previous_guess_numbers = [];
let attempt_remaining = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        let input_number = user_input.value;
        validation(input_number)
    })
}

// for check the number is valid or not
function validation(guess){
    if (guess < 1) {
        alert("enter a number between 1 to 100");
        user_input.value = null;
    }else if (guess > 100) {
        alert("enter a number between 1 to 100");
        user_input.value = null;
    }else{
        previous_guess_numbers.push(guess);
        if (attempt_remaining == 10) {
            displayGuess(guess);
            displayMessage(`Game Over...`)
            endGame()
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// for sow the number is low or high
function checkGuess(guess) { 
    if (guess ===random_number) {
        displayMessage(`You Guess It Right`);
        endGame()
    }else if (guess < random_number) {
        displayMessage(`The Number Is Low `)
    }else if (guess > random_number) {
        displayMessage(`The Number Is High`)
    }
 }

//  for clear a input field , update a previous number , update a remaining attempts
function displayGuess(guess) { 
    user_input.value = null;
    previous_number.innerHTML += `${guess}  `;
    attempt_remaining++;
    remaining_attempt.innerHTML = `${11 - attempt_remaining}`;
 }

// for print the value is low or high
function displayMessage(message) { 
    lowOrHigh.innerHTML = `${message}`
 }

// for end the game
function endGame() { 
    user_input.value = null;
    user_input.setAttribute("disabled" , "");
    button.classList.add("endButton");
    button.innerHTML = `start new game ?`
    hide_content.appendChild(button);
    playGame = false;
    startGame()
 }

// for start a new game
function startGame() { 
    let new_game_button = document.querySelector(".endButton");
    new_game_button.addEventListener("click" , function (e) { 
        let random_number = parseInt(Math.random() * (100 + 1));
        previous_guess_numbers = [];
        attempt_remaining = 1;
        previous_number.innerHTML = '';
        remaining_attempt.innerHTML = `${11 - attempt_remaining}`;
        user_input.removeAttribute("disabled");
        hide_content.removeChild(button)
        playGame = true;
     })
 }