'use strict';

let welcome = document.getElementById('welcome');
let userIdElem = document.getElementById('user_id');
let logoutBtn = document.getElementById('logout_btn');
let singInElem = document.getElementById('signin');

if (localStorage.userID) {
    welcome.classList.add('welcome_active');
    userIdElem.textContent = localStorage.userID;
    logoutBtn.classList.remove('hide_btn');
} else {
    singInForm();
}

function singInForm() {
    singInElem.classList.add('signin_active');
    logoutBtn.classList.add('hide_btn');

    document.getElementById('signin__btn').onclick = (e) => {
        e.preventDefault();
    
        let formData = new FormData(document.getElementById('signin__form'));

        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
        xhr.addEventListener('readystatechange', (e) => {
           if(xhr.readyState === xhr.DONE && xhr.status === 200) {
                if (!JSON.parse(xhr.responseText).success) {
                  alert('Неверный логин/пароль');
                  document.getElementById('signin__form').reset();
                  return;
                 } else {
                    let userID = JSON.parse(xhr.responseText).user_id;
                    localStorage.userID = userID;
                    singInElem.classList.remove('signin_active');
                    welcome.classList.add('welcome_active');
                    userIdElem.textContent = userID;
                    logoutBtn.classList.remove('hide_btn');
                }
            }
        });
        xhr.send(formData);
    }
}

document.getElementById('logout_btn').onclick = () => {
    delete localStorage.userID;
    welcome.classList.remove('welcome_active');
    singInForm();
}