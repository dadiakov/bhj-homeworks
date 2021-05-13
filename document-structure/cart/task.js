'use strict';

const products = document.querySelector('.products');
document.querySelector('.cart__products').innerHTML = JSON.parse(localStorage.getItem('myCart'));
checkCart();


products.addEventListener('click', e => {
  if(e.target.classList.contains('product__quantity-control_inc')) {
    incr(e); 
  } else if (e.target.classList.contains('product__quantity-control_dec')) {
    decr(e);
  } else if (e.target.classList.contains('product__add')) {
    addToCart(e);
  }
})

function incr(e) {
  e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value').innerText++;
}

function decr(e) {
  let valueDiv = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
  if (valueDiv.innerText === '1') return;
  valueDiv.innerText--;
}

function addToCart(e) {
  let src = e.target.closest('.product').querySelector('img').src;
  let id = e.target.closest('.product').dataset.id;
  let value = Number(e.target.closest('.product__quantity').querySelector('.product__quantity-value').innerText);
  
  let goodsInBox = Array.from(document.querySelectorAll('.cart__products .cart__product'));
  
  let element = `<div class="cart__product" data-id="${id}">
                <img class="cart__product-image" src="${src}">
                <div class="cart__product-count">${value}</div>
                </div>`;
  if (!goodsInBox.some(e => e.dataset.id === id)) {
    document.querySelector('.cart__products').insertAdjacentHTML('beforeEnd', element);
  } else {
    let index = goodsInBox.findIndex(e => e.dataset.id === id);
    goodsInBox[index].querySelector('.cart__product-count').innerText = Number(goodsInBox[index].querySelector('.cart__product-count').innerText) + value;
  }
  checkCart();
  localStorage.setItem('myCart', JSON.stringify(document.querySelector('.cart__products').innerHTML));
}

document.querySelector('.cart__products').addEventListener('click', e => {
  if (e.target.classList.contains('cart__product-image')) {
    e.target.closest('.cart__products').removeChild(e.target.closest('.cart__product'));
  }
  checkCart();
  localStorage.setItem('myCart', JSON.stringify(document.querySelector('.cart__products').innerHTML));
})

function checkCart() {
  if (!document.querySelectorAll('.cart__products .cart__product').length > 0) {
    document.querySelector('.cart').classList.add('hide__box');
  } else {
    document.querySelector('.cart').classList.remove('hide__box');
  }
}