'use strict';

let rotators = document.querySelectorAll('.rotator');
for (let rotator of rotators) {
    let phrases = rotator.querySelectorAll('.rotator__case');
    for (let phrase of phrases) {
        phrase.style.color = phrase.dataset.color;
    }
    let time = 1000;

    function showPhrase(phrase) {
            if (phrase.classList.contains('rotator__case_active')) {
                phrase.classList.remove('rotator__case_active');
                if (phrase == phrases[phrases.length - 1]) {
                    phrases[0].classList.add('rotator__case_active');
                } else {
                    phrase.nextElementSibling.classList.add('rotator__case_active');
                }
                time = phrase.dataset.speed;
                return true;
            }
    }
    
    function searchElement() {
        for (let phrase of phrases) {
            if (showPhrase(phrase)) {
                clearInterval(int);
                int = setInterval(searchElement, time);
                break;
            };
        }
    }
    let int = setInterval(searchElement, time);
}