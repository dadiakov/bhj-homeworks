'use strict';

document.querySelector('.tasks__list').innerHTML = JSON.parse(localStorage.getItem('myTasks'));

const input = document.getElementsByTagName('input')[0];

document.getElementById('tasks__form').onsubmit = makeElement;
document.addEventListener('keydown', e => {
  if (e.key == 'Enter' && input.value !== '') makeElement(e);
});

let taskList = document.querySelector('.tasks__list');

taskList.addEventListener('click', e => {
    if(e.target.classList.contains('task__remove')) {
      taskList.removeChild(e.target.closest('.task'));
      localStorage.setItem('myTasks', JSON.stringify(taskList.innerHTML));
    }
  });

function makeElement(e) {
  e.preventDefault();
  let value = input.value;
  if (value === '') return;
  let element = document.createElement('div');

  taskList.appendChild(element);
  
  element.outerHTML = `
  <div class="task">
    <div class="task__title">
     ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
  </div>`;

  input.value = '';
  localStorage.setItem('myTasks', JSON.stringify(taskList.innerHTML));
}
