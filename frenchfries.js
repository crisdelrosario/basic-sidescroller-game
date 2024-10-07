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

let frenchfries = [];
function createFries() {
  const fries = {
    potatoes: [
      {
        x: 0,
        y: 0,
        width: 2,
        height: 6,
        color: '#e8b86e'
      },
      {
        x: 0,
        y: 0,
        width: 2,
        height: 3,
        color: '#e39f4a'
      },
      {
        x: 0,
        y: 0,
        width: 2,
        height: 8,
        color: '#e1a140'
      },
      {
        x: 0,
        y: 0,
        width: 2,
        height: 10,
        color: '#e8b86e'
      },
      {
        x: 0,
        y: 0,
        width: 2,
        height: 4,
        color: '#e8b86e'
      }
    ],

    cardboardBagTop: {
      x: 0,
      y: 0,
      width: 14,
      height: 2,
      color: '#f1c03d'
    },
    cardboardBag: {
      x: 0,
      y: 0,
      width: 14,
      height: 13,
      color: '#bf070f'
    },
    gone: 0,
    points: 1
  }

  fries.potatoes[0].x = 0;
  fries.potatoes[1].x = fries.potatoes[0].x + fries.potatoes[0].width + 1;
  fries.potatoes[2].x = fries.potatoes[1].x + fries.potatoes[1].width + 1;
  fries.potatoes[3].x = fries.potatoes[2].x + fries.potatoes[2].width + 1;
  fries.potatoes[4].x = fries.potatoes[3].x + fries.potatoes[3].width + 1;

  let h = fries.potatoes[0].height;
  if (fries.potatoes[1].height > h) {
    h = fries.potatoes[1].height;
  }

  if (fries.potatoes[2].height > h) {
    h = fries.potatoes[2].height;
  }

  if (fries.potatoes[3].height > h) {
    h = fries.potatoes[3].height;
  }

  if (fries.potatoes[4].height > h) {
    h = fries.potatoes[4].height;
  }

  let y = fries.potatoes[0].height;
  if (fries.potatoes[1].height < y) {
    y = fries.potatoes[1].height;
  }

  if (fries.potatoes[2].height < y) {
    y = fries.potatoes[2].height;
  }

  if (fries.potatoes[3].height < y) {
    y = fries.potatoes[3].height;
  }

  if (fries.potatoes[4].height < y) {
    y = fries.potatoes[4].height;
  }

  fries.potatoes[0].y = (y < fries.potatoes[0].height ? y - fries.potatoes[0].height : y) + fries.potatoes[0].height;
  fries.potatoes[1].y = (y < fries.potatoes[1].height ? y - fries.potatoes[1].height : y) + fries.potatoes[1].height;
  fries.potatoes[2].y = (y < fries.potatoes[2].height ? y - fries.potatoes[2].height : y) + fries.potatoes[2].height;
  fries.potatoes[3].y = (y < fries.potatoes[3].height ? y - fries.potatoes[3].height : y) + fries.potatoes[3].height;
  fries.potatoes[4].y = (y < fries.potatoes[4].height ? y - fries.potatoes[4].height : y) + fries.potatoes[4].height;

  fries.cardboardBagTop.y = h;
  fries.cardboardBag.y = fries.cardboardBagTop.y + fries.cardboardBagTop.height;

  return fries;
}

function initFrenchFries() {
  let numFrenchFries = Math.ceil(Math.random() * 10);
  let distance = canvas.width + Math.ceil(Math.random() * canvas.width);
  while (numFrenchFries--) {
    const fries = createFries();
    let y = (canvas.height - 50) - Math.ceil(Math.random() * 20);
    fries.potatoes[0].x += distance;
    fries.potatoes[1].x += distance;
    fries.potatoes[2].x += distance;
    fries.potatoes[3].x += distance;
    fries.potatoes[4].x += distance;

    fries.cardboardBagTop.x += distance;
    fries.cardboardBag.x += distance;

    fries.potatoes[0].y += y;
    fries.potatoes[1].y += y;
    fries.potatoes[2].y += y;
    fries.potatoes[3].y += y;
    fries.potatoes[4].y += y;

    fries.cardboardBagTop.y += y;
    fries.cardboardBag.y += y;

    frenchfries.push(fries);
    distance += Math.ceil(Math.random() * canvas.width);
  }
}

function drawFrenchFries() {
  let index = 0;
  while (index < frenchfries.length) {
    const fries = frenchfries[index];
    if (!fries.gone) {
      ctx.fillStyle = fries.potatoes[0].color;
      ctx.fillRect(fries.potatoes[0].x, fries.potatoes[0].y, fries.potatoes[0].width, fries.potatoes[0].height);
  
      ctx.fillStyle = fries.potatoes[1].color;
      ctx.fillRect(fries.potatoes[1].x, fries.potatoes[1].y, fries.potatoes[1].width, fries.potatoes[1].height);
  
      ctx.fillStyle = fries.potatoes[2].color;
      ctx.fillRect(fries.potatoes[2].x, fries.potatoes[2].y, fries.potatoes[2].width, fries.potatoes[2].height);
  
      ctx.fillStyle = fries.potatoes[3].color;
      ctx.fillRect(fries.potatoes[3].x, fries.potatoes[3].y, fries.potatoes[3].width, fries.potatoes[3].height);
  
      ctx.fillStyle = fries.potatoes[4].color;
      ctx.fillRect(fries.potatoes[4].x, fries.potatoes[4].y, fries.potatoes[4].width, fries.potatoes[4].height);
  
      ctx.fillStyle = fries.cardboardBagTop.color;
      ctx.fillRect(fries.cardboardBagTop.x, fries.cardboardBagTop.y, fries.cardboardBagTop.width, fries.cardboardBagTop.height);
  
      ctx.fillStyle = fries.cardboardBag.color;
      ctx.fillRect(fries.cardboardBag.x, fries.cardboardBag.y, fries.cardboardBag.width, fries.cardboardBag.height);
    }

    index++;
  }
}


function updateFrenchFries() {
  let index = 0;
  while (index < frenchfries.length) {
    frenchfries[index].potatoes[0].x--;
    frenchfries[index].potatoes[1].x--;
    frenchfries[index].potatoes[2].x--;
    frenchfries[index].potatoes[3].x--;
    frenchfries[index].potatoes[4].x--;

    frenchfries[index].cardboardBagTop.x--;
    frenchfries[index].cardboardBag.x--;
    index++;
  }
}