'use strict';

let modals = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    modals.forEach( e => {
        if (e.getBoundingClientRect().bottom < window.innerHeight) {
            e.classList.add('reveal_active');
        }
        if (e.getBoundingClientRect().top < 0 || e.getBoundingClientRect().bottom > window.innerHeight) {
            e.classList.remove('reveal_active');
        }
    })});
