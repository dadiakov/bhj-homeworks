'use strict';

const links = document.querySelectorAll('.font-size');
for (let link of links) {
  link.addEventListener('click', event => {
    event.preventDefault();
    clearSizes();
    if (link.classList.contains('font-size_small')) {
      link.closest('.book').classList.add('book_fs-small');
    } else if (link.classList.contains('font-size_big')) {
      link.closest('.book').classList.add('book_fs-big');
    }
    activateLink(link);
  })}

function clearSizes() {
  let book = document.querySelector('.book');
  book.classList.remove('book_fs-big');
  book.classList.remove('book_fs-small');
}

function activateLink(link) {
  Array.from(link.closest('.book__control_font-size').querySelectorAll('.font-size')).forEach((e) => {e.classList.remove('font-size_active')});
  link.classList.add('font-size_active');
}

const textColor = document.querySelectorAll('.book__control_color a');
for (let link of textColor) {
  link.addEventListener('click', event => {
    event.preventDefault();
    clearBookText();
    if (link.classList.contains('text_color_black')) {
      link.closest('.book').classList.add('book_color-black');
    } else if (link.classList.contains('text_color_gray')) {
      link.closest('.book').classList.add('book_color-gray');
    } else {
      link.closest('.book').classList.add('book_color-whitesmoke');
    }
    activateColor(link);
  })}

function clearBookText() {
  let book = document.querySelector('.book');
  book.classList.remove('book_color-black');
  book.classList.remove('book_color-gray');
  book.classList.remove('book_color-whitesmoke');
}

function activateColor(link) {
  Array.from(link.closest('.book__control').querySelectorAll('.color')).forEach((e) => {e.classList.remove('color_active')});
  link.classList.add('color_active');
}

const bgColor = document.querySelectorAll('.book__control_background a');
for (let link of bgColor) {
  link.addEventListener('click', event => {
    event.preventDefault();
    clearBg();
    if (link.classList.contains('bg_color_black')) {
      link.closest('.book').classList.add('book_bg-black');
    } else if (link.classList.contains('bg_color_gray')) {
      link.closest('.book').classList.add('book_bg-gray');
    } else {
      link.closest('.book').classList.add('book_bg-white');
    }
    activateColor(link);
  })}

function clearBg() {
  let book = document.querySelector('.book');
  book.classList.remove('book_bg-gray');
  book.classList.remove('book_bg-black');
  book.classList.remove('book_bg-white');
}