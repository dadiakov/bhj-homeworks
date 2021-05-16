'use strict';

if (localStorage.text) {
    document.getElementById('editor').value = localStorage.text;
  }
  
  document.getElementById('editor').addEventListener('input', (e) => {
    let text = e.target.value;
    localStorage.text = text;
  });
  
  document.getElementsByClassName('clear')[0].onclick = () => {
    document.getElementById('editor').value = '';
    delete localStorage.text;
  }