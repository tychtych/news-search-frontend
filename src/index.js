'use strict'

import "../src/styles/index.css";

const hamburger = document.getElementById('hamburger');
const navigationMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const headerItem = document.querySelector('.header__item');
const mql = window.matchMedia('(min-width:708px)');

hamburger.addEventListener('click', () =>{
  header.classList.toggle('black')
  headerItem.classList.toggle('header__item_select')
  navigationMenu.classList.toggle('show');

})

function removeHamburger(e) {
  if (e.matches) {
    header.classList.remove('black')
    headerItem.classList.add('header__item_select')
    navigationMenu.classList.remove('show');
  }
}

mql.addEventListener('change', removeHamburger);


