'use strict';

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
modalMain.classList.add('modal_active');

Array.from(document.querySelectorAll('.modal__close')).forEach( e => e.onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.remove('modal_active')
});

document.querySelector('.show-success').onclick = () => {
  modalMain.classList.remove('modal_active');
  modalSuccess.classList.add('modal_active');
}