'use strict';

const timerElement = document.getElementById('timer');
let timerValue = timerElement.textContent;

let timeToSet = {
  hh : 0,
  mm : 0,
  sec : 3,
};
  
let dateToSet = new Date().setHours(timeToSet.hh, timeToSet.mm, timeToSet.sec);
let timeToStop = new Date().setHours(0,0,0);
timerElement.textContent = formatDate(new Date(dateToSet));

function timer() {
  dateToSet = new Date(dateToSet - 1000);
  if (dateToSet.getTime() - timeToStop <= 0) {
    clearInterval(intId);
    alert('Вы выирали!');
    timerElement.textContent = '00:00:00';
    //location.assign("http://www.yaplakal.com");
    const picElem = document.getElementById('picToOpen');
    picElem.href = 'https://s00.yaplakal.com/pics/pics_preview/5/9/0/15475095.jpg';
    picElem.click();
    return;
  }
  timerElement.textContent = formatDate(dateToSet);
  
};

function formatDate(date) {

  let hh = date.getHours();
  if (hh < 10) hh = '0' + hh;

  let mm = date.getMinutes();
  if (mm < 10) mm = '0' + mm;

  let ss = date.getSeconds();
  if (ss < 10) ss = '0' + ss;

  return hh + ':' + mm + ':' + ss;
}

let intId = setInterval(timer, 1000);
