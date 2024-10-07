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

let buildings = [];
let lastRandomValue = 0;

/**
 * @function getRandom
 * @returns 
 * 
 */
function getRandom() {
  let n = (Math.ceil(Math.random() * 1000) + lastRandomValue) % 1000;
  if (n < 10) {
    n = 10;
  }

  let v = 0;
  while (n--) {
    v = Math.ceil(Math.random() * 100);
  }

  lastRandomValue = v + Math.ceil(Math.random() * 1000);

  return v;
}

/**
 * @function createBuilding
 * @returns 
 * 
 */
function createBuilding() {
  let thickness = 10;
  let width = 30;
  let height = getRandom();
  if (height < 30) {
    height = 30;
  }

  return {
    wall1: {
      x: 0,
      y: 0,
      width: thickness,
      height: height,
      color: '#aabac2'
    },
    wall2: {
      x: thickness,
      y: 0,
      width: width,
      height: height,
      color: '#b5c9d2'
    }
  }
}

/**
 * @function initBuildings
 * 
 */
function initBuildings() {
  let buildingCount = Math.ceil(Math.random() * 100);
  let distance = canvas.width;

  if (buildingCount < 5) {
    buildingCount = 5;
  }

  while (buildingCount--) {
    const building = createBuilding();
    building.wall1.x = distance;
    building.wall2.x += distance;

    buildings.push(building);

    distance += (building.wall1.width + building.wall2.width) + Math.ceil(Math.random() * 30);
  }
}

/**
 * @function drawBuilding
 * 
 */
function drawBuilding() {
  building.wall1.y = (road.y + (canvas.height - (road.height + platform.layer1.height + platform.layer2.height + 80)));
  building.wall2.y = (road.y + (canvas.height - (road.height + platform.layer1.height + platform.layer2.height + 80)));

  ctx.fillStyle = building.wall1.color;
  ctx.fillRect(building.wall1.x, building.wall1.y, building.wall1.width, building.wall1.height);

  ctx.fillStyle = building.wall2.color;
  ctx.fillRect(building.wall2.x, building.wall2.y, building.wall2.width, building.wall2.height);
}

/**
 * @function drawBuildings
 * 
 */
function drawBuildings() {
  let index = 0;
  while (index < buildings.length) {
    const building = buildings[index];
    building.wall1.y = (road.y + (canvas.height - (road.height + platform.layer1.height + platform.layer2.height + building.wall1.height)));
    building.wall2.y = (road.y + (canvas.height - (road.height + platform.layer1.height + platform.layer2.height + building.wall1.height)));
  
    ctx.fillStyle = building.wall1.color;
    ctx.fillRect(building.wall1.x, building.wall1.y, building.wall1.width, building.wall1.height);
  
    ctx.fillStyle = building.wall2.color;
    ctx.fillRect(building.wall2.x, building.wall2.y, building.wall2.width, building.wall2.height);
  
    index++;
  }
}

/**
 * @function updateBuildings
 * 
 */
function updateBuildings() {
  let index = 0;
  while (index < buildings.length) {
    buildings[index].wall1.x-=gameSpeed;
    buildings[index].wall2.x-=gameSpeed;

    if (buildings[index].wall2.x < (-buildings[index].wall2.width)) {
      const building = createBuilding();
      let distance = canvas.width + (building.wall1.width + building.wall2.width) + Math.ceil(Math.random() * 30);
  
      building.wall1.x = distance;
      building.wall2.x += distance;
    
      buildings[index] = building;
    }

    index++;
  }
}