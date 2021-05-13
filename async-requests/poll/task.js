'use strict';

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', (e) => {
  if(xhr.readyState === xhr.DONE && xhr.status === 200) {
    let data = JSON.parse(xhr.responseText).data;
    document.querySelector('.poll__title').innerText = `${data.title}`;
    
    for (let variant of data.answers) {
      document.querySelector('.poll__answers').insertAdjacentHTML('beforeEnd', `<button class="poll__answer">${variant}</button>`);
    }
    
    let answerIndex; 
    
    document.querySelector('.poll__answers').addEventListener('click', e => {
        alert('Спасибо за ваш ответ!');
      if (e.target.classList.contains('poll__answer')) {
        let answers = Array.from(e.target.closest('.poll__answers').querySelectorAll('.poll__answer'));
        answerIndex = answers.indexOf(e.target);
        let id = JSON.parse(xhr.responseText).id;
        let xhr2 = new XMLHttpRequest();
        xhr2.open( 'POST', 'https://netology-slow-rest.herokuapp.com/poll.php' );
        xhr2.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
        xhr2.send( `vote=${id}&answer=${answerIndex}` );
        xhr2.addEventListener('readystatechange', (e) => {
          if(xhr2.readyState === xhr2.DONE && xhr2.status === 200) {
          let data = JSON.parse(xhr2.responseText).stat;
          
          let result = '';
          let allVotes = 0;
          
          for (let index in data) {
            allVotes += data[index].votes;
          }  
            
          for (let index in data) {
            result += `<div> ${data[index].answer}: ${(data[index].votes / allVotes * 100).toFixed(2)}%</div>`;
          }
          document.querySelector('.poll__answers').innerHTML = result;
          
          }});
        
        
      }
    });
  }
});
xhr.send();