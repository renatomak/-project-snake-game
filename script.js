// https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API
const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");
const RIGHT = "right";
const LEFT = "left";
const UP = "up";
const DOWN = "down";

const box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box,
};

let direction = RIGHT;
let food = {
  x: Math.floor(Math.random() * 15 + 1) * box,
  y: Math.floor(Math.random() * 15 + 1) * box,
};

function criarBR() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
  for (let index = 0; index < snake.length; index++) {
    context.fillStyle = "green";
    context.fillRect(snake[index].x, snake[index].y, box, box);
  }
}

function drawFood() {
  context.fillStyle = "red";
  context.fillRect(food.x, food.y, box, box);
}

document.addEventListener("keydown", update);

function update(event) {
  if (event.keyCode == 37 && direction != RIGHT) direction = LEFT;
  if (event.keyCode == 38 && direction != DOWN) direction = UP;
  if (event.keyCode == 39 && direction != LEFT) direction = RIGHT;
  if (event.keyCode == 40 && direction != UP) direction = DOWN;
}

function iniciarJogo() {
  if (snake[0].x > 15 * box && direction === RIGHT) snake[0].x = 0;
  if (snake[0].x < 0 && direction === LEFT) snake[0].x = 16 * box;
  if (snake[0].y > 15 * box && direction === DOWN) snake[0].y = 0;
  if (snake[0].y < 0 && direction === UP) snake[0].y = 16 * box;

  for (index = 1; index < snake.length; index++) {
    if (snake[0].x == snake[index].x && snake[0].y == snake[index].y) {
      clearInterval(jogo);
      alert("Game Over :(");
    }
  }

  criarBR();
  criarCobrinha();
  drawFood();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == RIGHT) snakeX += box;
  if (direction == LEFT) snakeX -= box;
  if (direction == UP) snakeY -= box;
  if (direction == DOWN) snakeY += box;

  if (snakeX != food.x || snakeY != food.y) {
    snake.pop();
  } else {
    (food.x = Math.floor(Math.random() * 15 + 1) * box),
      (food.y = Math.floor(Math.random() * 15 + 1) * box);
  }

  let newHead = {
    x: snakeX,
    y: snakeY,
  };

  snake.unshift(newHead);
}

let jogo = setInterval(iniciarJogo, 100);
