const randomNumber: number = Math.floor(Math.random() * 7 + 1);

function playGame(): void {
    const userGuessedNumber: number = parseInt((document.getElementById('guessInput') as HTMLInputElement).value);
    const result: HTMLElement = document.getElementById('result') as HTMLElement;

    if (isNaN(userGuessedNumber)) {
        result.textContent = "Please enter a valid number.";
        result.style.color = "orange";
    } else if (userGuessedNumber === randomNumber) {
        result.textContent = "CONGRATULATIONS! YOUR GUESSED NUMBER IS CORRECT.";
        result.style.color = "green";
    } else {
        result.textContent = "YOU GUESSED A WRONG NUMBER.";
        result.style.color = "red";
    }
}
