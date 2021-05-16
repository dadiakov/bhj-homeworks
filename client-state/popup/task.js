'use strict';

const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');

if (getCookie('toClose')) {
    modalMain.classList.remove('modal_active');
    modalSuccess.classList.remove('modal_active');
} else {
    modalMain.classList.add('modal_active');

    Array.from(document.querySelectorAll('.modal__close')).forEach( e => e.onclick = () => {
         modalMain.classList.remove('modal_active');
         modalSuccess.classList.remove('modal_active');
         setCookie('toClose', 'true');
    });

    document.querySelector('.show-success').onclick = () => {
        modalMain.classList.remove('modal_active');
        modalSuccess.classList.add('modal_active');
    }
}


function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value) {
    document.cookie = name + "=" + value;
}