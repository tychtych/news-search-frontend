import "../src/styles/articles.css";
import "../src/js/saved-articles/index";

const hamburger = document.getElementById('hamburgerWhite');
const navigationMenu = document.querySelector('.header__menu');
const header = document.querySelector('.header');
const headerItems = document.querySelectorAll('.header__item_dark');
const mql = window.matchMedia('(min-width:708px)');


hamburger.addEventListener('click', (e) =>{
  header.classList.toggle('white')
  headerItems.forEach(item => item.classList.remove('header__item_select_dark'));
  navigationMenu.classList.toggle('show');

})

function removeHamburger(e) {
  if (e.matches) {
    header.classList.remove('black')
    headerItems.forEach(item => item.classList.remove('header__item_select_dark'));
    navigationMenu.classList.remove('show');
  }
}

mql.addEventListener('change', removeHamburger);
