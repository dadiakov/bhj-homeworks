'use strict';

const dropDownLists = Array.from(document.querySelectorAll('.dropdown__value'));
dropDownLists.forEach(e => e.addEventListener('click', event => {
  let dropDownValueDiv = event.currentTarget;
  let dropDownList = dropDownValueDiv.closest('.dropdown').querySelector('.dropdown__list');
  if (!dropDownList.classList.contains('dropdown__list_active')) { 
    dropDownList.classList.add('dropdown__list_active');
  } else {
    dropDownList.classList.remove('dropdown__list_active');
  }
}))

const linksList = Array.from(document.querySelectorAll('.dropdown__link'));
linksList.forEach(e => e.addEventListener('click', event => {
  event.preventDefault();
  let link = event.currentTarget;
  link.closest('.dropdown').querySelector('.dropdown__value').textContent = link.textContent;
  link.closest('.dropdown').querySelector('.dropdown__list').classList.remove('dropdown__list_active');
}));