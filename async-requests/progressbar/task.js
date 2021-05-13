'use strict';

let form = document.getElementById('form');

form.addEventListener('submit', e => {
    let formData = new FormData(form);
    let xhr = new XMLHttpRequest();
    xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
            document.getElementById('progress').value = e.loaded / e.total;
        } else {
            console.log('невычисляемое значение');
        }
    });
    xhr.upload.addEventListener('load', () => console.log('Закачка закончилась'));

    xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    xhr.send(formData);
    
    e.preventDefault();
})


    


