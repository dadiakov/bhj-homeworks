'use strict';

Array.from(document.querySelectorAll('.menu__link')).forEach(elem => 
    elem.onclick = () => {
        let subMenu = elem.closest('.menu__item').querySelector('a + ul');
        if (subMenu.classList.contains('menu_active')) {
          subMenu.classList.remove('menu_active');
          return false;
        }
        if (subMenu) {
            Array.from(elem.closest('.menu').querySelectorAll('.menu_active')).forEach(e => e.classList.remove('menu_active'));
            subMenu.classList.add('menu_active');
            return false;
        }
    }
);
