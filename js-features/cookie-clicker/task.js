'use strict';

const cookiePic = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');
const average = document.getElementById('clicker__average');
let startTime = 0;

cookiePic.onclick = function() {
  counter.textContent % 2 === 0 ? cookiePic.width = 200 : cookiePic.width = 210;
  if (counter.textContent === "0") startTime = new Date().getTime();
  counter.textContent++;
  average.textContent = (((new Date().getTime() - startTime) / 1000) / counter.textContent).toFixed(2);
}