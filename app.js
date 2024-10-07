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

const canvas = document.getElementById('canvas');
// 390 x 884
canvas.width = (window.innerWidth / window.devicePixelRatio) * 0.9;
canvas.height = (window.innerHeight / window.devicePixelRatio) * 0.7;

const ctx = canvas.getContext('2d');

let level = 1;
let gameSpeed = 1;
let health = 100;
let score = 0;
let cooldown = 0;
let gameOver = false;
let distance = 0;

/**
 * @function drawHealth
 * 
 */
function drawHealth() {
  const width = 100;
  const height = 10;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(5, 5, width, height);

  const remaining = (width-2) * (health / 100);

  ctx.fillStyle = '#FF0000';
  ctx.fillRect(5+1, 5+1, remaining, (height - 2));
}

/**
 * @function setLabel
 * 
 */
function setLabel() {
  const e = document.getElementById('level');
  e.innerText = `${level}`;
}

/**
 * @function updateLevel
 * 
 */
function updateLevel() {
  const e = document.getElementById('level');
  e.innerText = `${level}`;
}

/**
 * @function updateDistance
 * 
 */
function updateDistance() {
  let unit = 'm';
  let conversion = 39.3701;
  if (distance > 1000) {
    unit = 'km';
    conversion = 1000;
  }

  const e = document.getElementById('distance');
  e.innerText = `${(distance / conversion).toFixed(2)}${unit}`;
}

/**
 * @function drawGameOver
 * 
 */
function drawGameOver() {
  const width = canvas.width/2;
  const height = canvas.height/2;
  const x = (canvas.width - width) / 2;
  const y = (canvas.height - height) / 2;

  ctx.globalAlpha = 0.8;
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(x, y, width, height);
  ctx.globalAlpha = 1.0;

  const img = document.getElementById('game-over');
  ctx.drawImage(img, x, y, width, height);
}

/**
 * @function updateHealth
 * @param {*} damage 
 * 
 */
function updateHealth(damage) {
  health -= damage;
  cooldown = Date.now() + (1000 / 3);
  if (health < 0) {
    health = 0;
    gameOver = true;
  }
}

/**
 * @function updateScore
 * @param {*} points 
 * 
 */
function updateScore(points) {
  score += points;

  const e = document.getElementById('score');
  e.innerText = `${score}`;
}
