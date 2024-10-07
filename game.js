/**
 * 
 * MIT License
 * 
 * Copyright (c) 2024 Cris del Rosario
 * 
 * Developed by Cris del Rosario
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */

'use strict';

function resetGame() {
  level = 1;
  gameSpeed = 1;
  health = 100;
  score = 0;
  cooldown = 0;
  gameOver = false;
  distance = 0;

  jumping = false;
  jumpHeight = 0;

  obstacles = [];
  buildings = [];

  player = {
    hat: {
      x: ((10 + 6) / 2) + 2,
      y: canvas.height - 30,
      width: 6,
      height: 2,
      color: '#b70000'
    },
    head: {
      x: ((10 + 6) / 2) + 2,
      y: 0,
      width: 6,
      height: 6,
      color: '#ffe8d2'
    },
    body: {
      x: ((10 + 8) / 2),
      y: 0,
      width: 8,
      height: 10,
      color: '#333333'
    },
    torso: {
      x: ((10 + 11) / 2) - 2,
      y: 0,
      width: 9,
      height: 2,
      color: '#000000'
    }
  }
  
  player.head.y = player.hat.y + player.hat.height;
  player.body.y = player.head.y + player.head.height;
  player.torso.y = player.body.y + player.body.height;
  
  ground = player.torso.y;

  initBuildings();
  initObstacles();
  initBurgers();
  initFrenchFries();
}

initBuildings();
initObstacles();
initBurgers();
initFrenchFries();

registerEventKeys();

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // const ratio = Math.min(canvas.clientWidth / canvas.width, canvas.clientHeight / canvas.height);
  // ctx.scale(ratio, ratio);

  drawWorld();
  drawObstacles();
  drawBurgers();
  drawFrenchFries();
  drawPlayer();
  drawHealth();

  if (!gameOver) {
    updateBuildings();
    updateObstacles();
    updateBurgers();
    updateFrenchFries();
  
    checkCollision();

    updateLevel();
    updateDistance();
    distance++;

    if ((distance % 1000) === 0) {
      level+=1;
      gameSpeed += 1;
    }
  } else {
    drawGameOver();
  }

  requestAnimationFrame(update);
}

update();