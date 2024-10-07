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

const gravity = 1;
let jumping = false;
let jumpHeight = 0;

let player = {
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

player.hat.x += 20;
player.head.x += 20;
player.body.x += 20;
player.torso.x += 20;

let ground = player.torso.y;

function drawPlayer() {
  let inv = cooldown > Date.now() ? true : false;
  if (jumping) {
    player.hat.y -= jumpHeight;
    player.head.y -= jumpHeight;
    player.body.y -= jumpHeight;
    player.torso.y -= jumpHeight;

    jumpHeight -= gravity;
  }

  if (jumpHeight < -15) {
    jumping = false;
    jumpHeight = 0;
  }

  ctx.save();

  if (inv) {
    ctx.globalAlpha = 0.2;
  }

  ctx.fillStyle = player.hat.color;
  ctx.fillRect(player.hat.x, player.hat.y, player.hat.width, player.hat.height);

  ctx.fillStyle = player.head.color;
  ctx.fillRect(player.head.x, player.head.y, player.head.width, player.head.height);

  ctx.fillStyle = player.body.color;
  ctx.fillRect(player.body.x, player.body.y, player.body.width, player.body.height);

  ctx.fillStyle = player.torso.color;
  ctx.fillRect(player.torso.x, player.torso.y, player.torso.width, player.torso.height);


  if (inv) {
    ctx.globalAlpha = 1.0;
  }

  ctx.restore();
}

function jump() {
  if (gameOver) {
    return;
  }

  if (!jumping) {
    jumping = true;
    jumpHeight = 15;
  }
}
