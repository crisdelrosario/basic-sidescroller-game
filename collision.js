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

function checkObstacleCollision() {
  if (cooldown > Date.now()) {
    return;
  }

  let index = 0;
  while (index < obstacles.length) {
    const x1 = player.hat.x;
    const x2 = (player.torso.x + player.torso.width);
    const y1 = player.hat.y;
    const y2 = player.torso.y + player.torso.height;

    const ox1 = obstacles[index].x;
    const ox2 = obstacles[index].x + obstacles[index].width;

    const oy1 = obstacles[index].y;
    const oy2 = obstacles[index].y + obstacles[index].height;

    if ((ox1 >= x1 && ox1 <= x2) || (ox2 >= x1 && ox2 <= x2)) {
      if ((oy1 >= y1 && oy1 <= y2) || (oy2 >= y1 && oy2 <= y2)) {
        updateHealth(obstacles[index].damage);
      }
    }
    index++;
  }
}

function checkBurgerCollision() {
  let index = 0;
  while (index < burgers.length) {
    if (!burgers[index].gone) {
      const x1 = player.hat.x;
      const x2 = (player.torso.x + player.torso.width);
      const y1 = player.hat.y;
      const y2 = player.torso.y + player.torso.height;
  
      let bx1 = burgers[index].topBun.x;
      if (burgers[index].lettuce.x < bx1) {
        bx1 = burgers[index].lettuce.x;
      }
  
      if (burgers[index].tomato.x < bx1) {
        bx1 = burgers[index].tomato.x;
      }
  
      if (burgers[index].cheese.x < bx1) {
        bx1 = burgers[index].cheese.x;
      }
  
      if (burgers[index].patty.x < bx1) {
        bx1 = burgers[index].patty.x;
      }
  
      if (burgers[index].bottomBun.x < bx1) {
        bx1 = burgers[index].bottomBun.x;
      }
  
      let bx2 = burgers[index].topBun.x + burgers[index].topBun.width;
      if (burgers[index].lettuce.x + burgers[index].lettuce.width > bx2) {
        bx2 = burgers[index].lettuce.x + burgers[index].lettuce.width;
      }
  
      if (burgers[index].tomato.x + burgers[index].tomato.width > bx2) {
        bx2 = burgers[index].tomato.x + burgers[index].tomato.width;
      }
  
      if (burgers[index].cheese.x + burgers[index].cheese.width > bx2) {
        bx2 = burgers[index].cheese.x + burgers[index].cheese.width;
      }
  
      if (burgers[index].patty.x + burgers[index].patty.width > bx2) {
        bx2 = burgers[index].patty.x + burgers[index].patty.width;
      }
  
      if (burgers[index].bottomBun.x + burgers[index].bottomBun.width > bx2) {
        bx2 = burgers[index].bottomBun.x + burgers[index].bottomBun.width;
      }
  
      let by1 = burgers[index].topBun.y;
      let by2 = burgers[index].bottomBun.y + burgers[index].bottomBun.height;
    
      if ((bx1 >= x1 && bx1 <= x2) || (bx2 >= x1 && bx2 <= x2)) {
        // if ((by1 >= y1 && by1 <= y2) || (by2 >= y1 && by2 <= y2)) {
          updateScore(burgers[index].points);
          burgers[index].gone = 1;
        // }
      }
    }

    index++;
  }
}

function checkFrencFriesCollision() {
  let index = 0;
  while (index < frenchfries.length) {
    if (!frenchfries[index].gone) {
      const x1 = player.hat.x;
      const x2 = (player.torso.x + player.torso.width);
      const y1 = player.hat.y;
      const y2 = player.torso.y + player.torso.height;

      const fries = frenchfries[index];

      let fx1 = fries.potatoes[0].x;
      let fx2 = fries.potatoes[0].x + fries.potatoes[0].width;
      let fy1 = fries.potatoes[0].y;
      let fy2 = fries.potatoes[4].y + fries.potatoes[4].height;

      if (fx2 < fries.potatoes[1].x + fries.potatoes[1].width) {
        fx2 = fries.potatoes[1].x + fries.potatoes[1].width;
      }

      if (fx2 < fries.potatoes[2].x + fries.potatoes[2].width) {
        fx2 = fries.potatoes[2].x + fries.potatoes[2].width;
      }

      if (fx2 < fries.potatoes[3].x + fries.potatoes[3].width) {
        fx2 = fries.potatoes[3].x + fries.potatoes[3].width;
      }

      if (fx2 < fries.potatoes[4].x + fries.potatoes[4].width) {
        fx2 = fries.potatoes[4].x + fries.potatoes[4].width;
      }
      

      if ((fx1 >= x1 && fx1 <= x2) || (fx2 >= x1 && fx2 <= x2)) {
        // if ((fy1 >= y1 && fy1 <= y2) || (fy2 >= y1 && fy2 <= y2)) {
          updateScore(frenchfries[index].points);
          frenchfries[index].gone = 1;
        // }
      }

    }
    index++;
  }
}

function checkCollision() {
  checkObstacleCollision();
  checkBurgerCollision();
  checkFrencFriesCollision();
}
