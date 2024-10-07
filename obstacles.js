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

const OBSTACLE_1 = 0;
const OBSTACLE_2 = 1;
const OBSTACLE_3 = 2;

const obstacleTypes = [
  OBSTACLE_1,
  OBSTACLE_2,
  OBSTACLE_3
];

let obstacles = [];

function createObstacle() {
  let damage = Math.ceil(Math.random() * 30);
  if (damage < 1) {
    damage = 1;
  }

  let speed = Math.ceil(Math.random() * 5);
  if (speed < 1) {
    speed = 1;
  }

  let width = Math.ceil(Math.random() * 20);
  if (width < 5) {
    width = 5;
  }

  let height = Math.ceil(Math.random() * 30);
  if (height < 10) {
    height = 10;
  }

  return {
    x: 0,
    y: 0,
    width: width,
    height: height,
    color: '#000000',
    speed: speed,
    damage: damage
  }
}

function initObstacles() {
  let numObstacles = Math.ceil(Math.random() * 10);
  if (numObstacles < 2) {
    numObstacles = 2;
  }

  let distance = canvas.width * 2;
  distance += Math.ceil(Math.random() * 1000);
  
  while (numObstacles--) {
    const obstacle = createObstacle();
    obstacle.x += distance;
    obstacle.y = (canvas.height - (road.height / 2)) - obstacle.height;
    obstacles.push(obstacle);

    distance += Math.ceil(Math.random() * 100);
  }
}

function drawObstacles() {
  let index = 0;
  while (index < obstacles.length) {
    ctx.fillStyle = obstacles[index].color;
    ctx.fillRect(obstacles[index].x, obstacles[index].y, obstacles[index].width, obstacles[index].height);
    index++;
  }
}

function updateObstacles() {
  let index = 0;
  while (index < obstacles.length) {
    obstacles[index].x -= obstacles[index].speed + gameSpeed;
    if (obstacles[index].x < (-obstacles[index].width)) {
      let distance = canvas.width * 2;
      distance += Math.ceil(Math.random() * 100);

      const obstacle = createObstacle();
      let y = Math.ceil(Math.random() * 50);
  
      obstacle.x += distance;
      obstacle.y = (canvas.height - (road.height / 2)) - obstacle.height;
      obstacles[index] = obstacle;
    }
    index++;
  }
}