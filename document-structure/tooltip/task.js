'use strict';

Array.from(document.querySelectorAll('.has-tooltip')).forEach(e => {
  e.insertAdjacentHTML('beforeEnd', `<div class="tooltip" data-position='bottom'>${e.title}</div>`)
});

Array.from(document.querySelectorAll('.has-tooltip')).forEach(elem => elem.addEventListener('click', e => {
  e.preventDefault();
  let link = e.target.querySelector('.tooltip');
  if (link.classList.contains('tooltip_active')) {
      link.classList.remove('tooltip_active');
} else { 
    Array.from(document.querySelectorAll('.tooltip')).forEach(e => e.classList.remove('tooltip_active'));
    link.classList.add('tooltip_active');
    switch(link.dataset.position) {
      case 'top':
        link.style.left = e.target.getBoundingClientRect().left + 'px';
        link.style.top = e.target.getBoundingClientRect().top - 1.7 * (e.target.offsetHeight) + 'px';
        break;
      case 'right':
        link.style.left = e.target.getBoundingClientRect().right + 'px';
        link.style.top = e.target.getBoundingClientRect().top + 'px';
        break;
      case 'left':
        link.style.left = e.target.getBoundingClientRect().left - link.offsetWidth + 'px';
        link.style.top = e.target.getBoundingClientRect().top + 'px';
        break;
      default:
        link.style.left = e.target.getBoundingClientRect().left + 'px';
        link.style.top = e.target.getBoundingClientRect().top + e.target.offsetHeight + 'px';
    }
}
}));