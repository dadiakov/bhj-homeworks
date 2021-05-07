'use strict';

Array.from(document.querySelectorAll('.interest__check')).forEach(e => e.addEventListener('change', e => checkCurrent(e)));

function checkCurrent(e) {
  let checkBox = e.target;
  let allChildren = Array.from(checkBox.closest('.interest').querySelectorAll('.interest__check'));
 allChildren.forEach(e => { 
   e.checked = checkBox.checked});
  checkAllChecked(checkBox);
}

function checkAllChecked(e) {
  let allChildrenElements = Array.from(e.closest('ul.interests').querySelectorAll('.interest__check'));
  
  let closestParent;
  if (e.closest('.interests').closest('.interest').querySelector('.interest__check')) {
    closestParent = e.closest('.interests').closest('.interest').querySelector('.interest__check');
  } else {
    closestParent = e;
  }
  if (allChildrenElements.every(e => e.checked == true)) {
    closestParent.checked = true;
    closestParent.indeterminate = false;
  } else if (allChildrenElements.some(e => e.checked == true)) {
    closestParent.checked = false;
    closestParent.indeterminate = true;
  } else if (allChildrenElements.every(e => e.checked == false)) {
    closestParent.checked = false;
    closestParent.indeterminate = false;
  }
  if (closestParent) {
    checkAllChecked(closestParent);
  }
}
   
