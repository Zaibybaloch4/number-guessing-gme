var randomNumber = Math.floor(Math.random() * 7 + 1);
function playGame() {
    var userGuessedNumber = parseInt(document.getElementById('guessInput').value);
    var result = document.getElementById('result');
    if (isNaN(userGuessedNumber)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "orange";
    }
    else if (userGuessedNumber === randomNumber) {
        result.textContent = "CONGRATULATIONS! YOUR GUESSED NUMBER IS CORRECT.";
        result.style.color = "green";
    }
    else {
        result.textContent = "YOU GUESSED A WRONG NUMBER.";
        result.style.color = "red";
    }
}
