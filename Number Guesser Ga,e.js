let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessCount = 0;

function guessNumber() {
  let guessInput = document.getElementById("guessInput");
  let guess = parseInt(guessInput.value);
  let result = document.getElementById("result");
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    result.innerText = "Please enter a valid number between 1 and 100.";
    return;
  }
  
  guessCount++;
  
  if (guess === randomNumber) {
    result.innerText = "Congratulations, you guessed the number in " + guessCount + " tries!";
  } else if (guess < randomNumber) {
    result.innerText = "The number is higher. Try again.";
  } else {
    result.innerText = "The number is lower. Try again.";
  }
}
