const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const box = 20; // size of each square
const canvasSize = 400;

let snake = [{ x: 160, y: 160 }];
let direction = "RIGHT";
let food = spawnFood();
let score = 0;
let gameOver = false;

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  const key = event.key;
  if (key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (key === "ArrowDown" && direction !== "UP") direction = "DOWN";
  else if (key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
}

function spawnFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / box)) * box,
    y: Math.floor(Math.random() * (canvas.height / box)) * box
  };
}

function draw() {
  if (gameOver) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw snake
  ctx.fillStyle = "lime";
  snake.forEach(segment => ctx.fillRect(segment.x, segment.y, box, box));

  // Draw food
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);

  // Move snake
  const head = { ...snake[0] };

  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;

  // Collision detection
  if (
    head.x < 0 || head.x >= canvasSize ||
    head.y < 0 || head.y >= canvasSize ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    document.getElementById("gameOverMessage").textContent = "💀 Game Over!";
    gameOver = true;
    return;
  }

  snake.unshift(head);

  // Eat food
  if (head.x === food.x && head.y === food.y) {
    food = spawnFood();
    score++;
    document.getElementById("score").textContent = "Score: " + score;
  } else {
    snake.pop();
  }
}
let speed=250
setInterval(draw, speed);
