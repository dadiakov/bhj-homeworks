'use strict';

const navigation = Array.from(document.querySelectorAll('.tab'));

navigation.forEach(e => e.addEventListener('click', event => {
  let tab = event.currentTarget;
  let tabs = Array.from(tab.closest('.tab__navigation').querySelectorAll('.tab'));
  tabs.forEach(e => e.classList.remove('tab_active'));
  tab.classList.add('tab_active');
  
  let content = Array.from(tab.closest('.tabs').querySelectorAll('.tab__content'));
  content.forEach(e => e.classList.remove('tab__content_active'));
  content[tabs.indexOf(tab)].classList.add('tab__content_active');
}));