'use strict';

document.querySelector('.slider__arrow_next').onclick = showNextPic;
document.querySelector('.slider__arrow_prev').onclick = showPrevPic;

const allPics = Array.from(document.querySelectorAll('.slider__item'));

function showNextPic() {
  for (let i = 0; i < allPics.length; i++) {
    if (allPics[i].classList.contains('slider__item_active')) {
      allPics[i].classList.remove('slider__item_active');
      i++;
      if (i === allPics.length) {
        allPics[0].classList.add('slider__item_active');
        showActiveDot(0);
        return;
      }
      allPics[i].classList.add('slider__item_active');
      showActiveDot(i);
    }
  }
}

function showPrevPic() {
  for (let i = 0; i < allPics.length; i++) {
    if (allPics[i].classList.contains('slider__item_active')) {
      allPics[i].classList.remove('slider__item_active');
      i--;
      if (i < 0) {
        i = allPics.length - 1;
        allPics[i].classList.add('slider__item_active');
        showActiveDot(i);
        return;
      }
      allPics[i].classList.add('slider__item_active');
      showActiveDot(i);
    }
  }
}

const allDots = Array.from(document.querySelectorAll('.slider__dot'));
function showActiveDot(i) {
  allDots.forEach( elem => elem.classList.remove('slider__dot_active'));
  allDots[i].classList.add('slider__dot_active');
}

function showPic(i) {
  allPics.forEach(elem => elem.classList.remove('slider__item_active'));
  allPics[i].classList.add('slider__item_active');
}

allDots.forEach( dot => dot.onclick = () => {
  let i = allDots.indexOf(dot);
  showPic(i);
  showActiveDot(i);
});
