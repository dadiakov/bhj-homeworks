'use strict';

document.querySelector('.slider__arrow_next').onclick = showNextPic;
document.querySelector('.slider__arrow_prev').onclick = showPrevPic;

const allPics = Array.from(document.querySelectorAll('.slider__item'));
const allDots = Array.from(document.querySelectorAll('.slider__dot'));

let indexToRemove = 0;

allDots.forEach( dot => dot.onclick = () => {
  let i = allDots.indexOf(dot);
  showActive(i);
});

function showActive(i) {
  indexToRemove = allPics.findIndex(item => item.classList.contains('slider__item_active'));
  allPics[indexToRemove].classList.remove('slider__item_active');
  allPics[i].classList.add('slider__item_active');
  allDots[indexToRemove].classList.remove('slider__dot_active');
  allDots[i].classList.add('slider__dot_active');
}

function showNextPic() {
  let i = allPics.findIndex(item => item.classList.contains('slider__item_active'));
  i++;
  if (i === allPics.length) {
    showActive(0);
    return;
  }
  showActive(i);
}

function showPrevPic() {
  let i = allPics.findIndex(item => item.classList.contains('slider__item_active'));
  i--;
  if (i < 0) {
    i = allPics.length - 1;
    showActive(i);
    return;
  }
  showActive(i);
}