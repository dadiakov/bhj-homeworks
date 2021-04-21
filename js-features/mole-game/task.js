'use strict';

let killCounter = 0;
let missCounter = 0;

function getHole(index) {
  return document.getElementById('hole' + index);
}

for (let i=1; i < 10; i++) {
  let hole = getHole(i);
  hole.onclick = function() {
    if (hole.classList.contains('hole_has-mole')) {
      killCounter++;
    } else {
        missCounter++;
      }
    document.getElementById('dead').textContent = killCounter;
    document.getElementById('lost').textContent = missCounter;
    if (missCounter === 10) {
       alert('Вы проиграли!');
       location.reload();
    } else if (killCounter === 5) {
        alert('Вы выиграли!');
        location.reload();
    }
  }
}