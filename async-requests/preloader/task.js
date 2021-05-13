'use strict';

if (localStorage.getItem('myVault')) {
    document.getElementById('loader').classList.remove('loader_active');
    document.getElementById('items').innerHTML = localStorage.getItem('myVault');
  }
  
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://netology-slow-rest.herokuapp.com');
  
  xhr.addEventListener('readystatechange', (e) => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
      document.getElementById('loader').classList.remove('loader_active');
      let valutes = JSON.parse(xhr.responseText).response.Valute;
      let contentToInsert = '';
      for (let valute in valutes) {
        contentToInsert += 
          `<div class="item"> 
             <div class="item__code">${valute}</div>
              <div class="item__value">${valutes[valute].Value}</div>
              <div class="item__currency">руб.</div>
          </div>`;
      }
      document.getElementById('items').innerHTML = contentToInsert;
      localStorage.setItem('myVault', contentToInsert);
    }
  }); 
  xhr.send();