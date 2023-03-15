alert("Made By Horizone")

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// Set up the initial state of the game
let worm = [{ x: 10, y: 10 }];
let food = { x: 200, y: 200 };
let direction = "right";

// Define the game loop
function gameLoop() {
  // Move the worm
  let head = { x: worm[0].x, y: worm[0].y };
  if (direction === "right") {
    head.x++;
  } else if (direction === "left") {
    head.x--;
  } else if (direction === "up") {
    head.y--;
  } else if (direction === "down") {
    head.y++;
  }
  worm.unshift(head);
  worm.pop();

  // Check for collisions
  if (head.x === food.x && head.y === food.y) {
    // The worm ate the food
    food.x = Math.floor(Math.random() * canvas.width);
    food.y = Math.floor(Math.random() * canvas.height);
    worm.push({});
  } else if (head.x < 0 || head.x >= canvas.width || head.y < 0 || head.y >= canvas.height) {
    // The worm hit a wall
    clearInterval(intervalId);
    alert("Game over!");
  } else {
    for (let i = 1; i < worm.length; i++) {
      if (worm[i].x === head.x && worm[i].y === head.y) {
        // The worm hit its own body
        clearInterval(intervalId);
        alert("Game over!");
      }
    }
  }

  // Draw the game
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, 10, 10);
  ctx.fillStyle = "green";
  for (let i = 0; i < worm.length; i++) {
    ctx.fillRect(worm[i].x, worm[i].y, 10, 10);
  }
}

// Start the game loop
let intervalId = setInterval(gameLoop, 100);

// Set up the keyboard controls
document.addEventListener("keydown", function(event)    {
  if (event.key === "ArrowRight" && direction !== "left") {
    direction = "right";
  } else if (event.key === "ArrowLeft" && direction !== "right") {
    direction = "left";
  } else if (event.key === "ArrowUp" && direction !== "down") {
    direction = "up";
  } else