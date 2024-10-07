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

let burgers = [];

function createBurger() {
  const burger = {
    topBun: {
      x: 0,
      y: 0,
      width: 19,
      height: 4,
      color: '#dd9057'
    },
    lettuce: {
      x: 0,
      y: 0,
      width: 17,
      height: 1,
      color: '#0bcb02'
    },
    tomato: {
      x: 0,
      y: 0,
      width: 16,
      height: 1,
      color: '#c91919'
    },
    cheese: {
      x: 0,
      y: 0,
      width: 20,
      height: 1,
      color: '#ffbc53'
    },
    patty: {
      x: 0,
      y: 0,
      width: 19,
      height: 3,
      color: '#7c3f12'
    },
    bottomBun: {
      x: 0,
      y: 0,
      width: 19,
      height: 4,
      color: '#dd9057'
    },
    points: 3,
    gone: 0
  }
  
  burger.lettuce.y = burger.topBun.y + burger.topBun.height;
  burger.tomato.y = burger.lettuce.y + burger.lettuce.height;
  burger.cheese.y = burger.tomato.y + burger.tomato.height;
  burger.patty.y = burger.cheese.y + burger.cheese.height;
  burger.bottomBun.y = burger.patty.y + burger.patty.height;

  return burger;
}

function initBurgers() {
  let numBurgers = Math.ceil(Math.random() * 10);
  numBurgers = numBurgers < 3 ? 3 : numBurgers;
  let distance = canvas.width + Math.ceil(Math.random() * 100);
  while (numBurgers--) {
    const burger = createBurger();
    let w = 0;
    if (burger.topBun.width > w) {
      w = burger.topBun.width;
    }

    if (burger.lettuce.width > w) {
      w = burger.lettuce.width;
    }

    if (burger.tomato.width > w) {
      w = burger.tomato.width;
    }

    if (burger.cheese.width > w) {
      w = burger.cheese.width;
    }

    if (burger.patty.width > w) {
      w = burger.patty.width;
    }

    if (burger.bottomBun.width > w) {
      w = burger.bottomBun.width;
    }

    burger.topBun.x = distance + ((w - burger.topBun.width) / 2);
    burger.lettuce.x = distance + ((w - burger.lettuce.width) / 2);
    burger.tomato.x = distance + ((w - burger.tomato.width) / 2);
    burger.cheese.x = distance + ((w - burger.cheese.width) / 2);
    burger.patty.x = distance + ((w - burger.patty.width) / 2);
    burger.bottomBun.x = distance + ((w - burger.bottomBun.width) / 2);

    burger.topBun.y = (canvas.height - 50) -  Math.ceil(Math.random() * 60);
    burger.lettuce.y = burger.topBun.y + burger.topBun.height;
    burger.tomato.y = burger.lettuce.y + burger.lettuce.height;
    burger.cheese.y = burger.tomato.y + burger.tomato.height;
    burger.patty.y = burger.cheese.y + burger.cheese.height;
    burger.bottomBun.y = burger.patty.y + burger.patty.height;

    burgers.push(burger);

    distance += canvas.width + Math.ceil(Math.random() * 1000);
  }
}

function drawBurgers() {
  let index = 0;
  while (index < burgers.length) {
    const burger = burgers[index];

    if (!burger.gone) {
      const topBun = burger.topBun;
      ctx.fillStyle = topBun.color;
      ctx.fillRect(topBun.x, topBun.y, topBun.width, topBun.height);
  
      const lettuce = burger.lettuce;
      ctx.fillStyle = lettuce.color;
      ctx.fillRect(lettuce.x, lettuce.y, lettuce.width, lettuce.height);
  
      const tomato = burger.tomato;
      ctx.fillStyle = tomato.color;
      ctx.fillRect(tomato.x, tomato.y, tomato.width, tomato.height);
  
      const cheese = burger.cheese;
      ctx.fillStyle = cheese.color;
      ctx.fillRect(cheese.x, cheese.y, cheese.width, cheese.height);
  
      const patty = burger.patty;
      ctx.fillStyle = patty.color;
      ctx.fillRect(patty.x, patty.y, patty.width, patty.height);
  
      const bottomBun = burger.bottomBun;
      ctx.fillStyle = bottomBun.color;
      ctx.fillRect(bottomBun.x, bottomBun.y, bottomBun.width, bottomBun.height);
    }

    index++;
  }
}

function updateBurgers() {
  let index = 0;
  while (index < burgers.length) {
    burgers[index].topBun.x--;
    burgers[index].lettuce.x--;
    burgers[index].tomato.x--;
    burgers[index].cheese.x--;
    burgers[index].patty.x--;
    burgers[index].bottomBun.x--;
    index++;
  }
}