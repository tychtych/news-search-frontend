import MainApi from "../api/MainApi";
import NewsApi from "../api/NewsApi";

//API
const MAIN_API = new MainApi('https://api.tychpress.ga');
const NEWS_API = new NewsApi('https://newsapi.org', 'abfd7572d42a46a1922889a2580248d3');

//web elements

//popups
const popupLogIn = document.getElementById('popup-login');
const popupSignUp = document.getElementById('popup-signup');
const popupSuccess = document.getElementById('popup-success');

//forms
const popupSignUpForm = document.forms.signup;
const popupSignInForm = document.forms.login;
const searchForm = document.forms.search;
const successForm = document.forms.success;

//inputs
const nameInput = document.querySelector('.popup__input_type_name');
const emailInput = document.querySelector('.popup__input_type_email');
const passwordInput = document.querySelector('.popup__input_type_password');
const searchInput = document.querySelector('.intro__searchInput');


//redirect
const redirectToSignUp = document.querySelector('.popup__link');
const redirectToSignIn = document.querySelector('.popup__link_type_success');


//loader
const loaderContainer = document.querySelector('.loader');

//cards
const cardContainer = document.querySelector('.cardsList__wrap');
const cardContainerSaved = document.querySelector('.found-card__container');


//buttons
const buttonSignUp = document.querySelector('.button__signin');

const buttonShowMore = document.querySelector('.button__more');

//header
const header = document.querySelector('.header');
const headerMenu = document.querySelector('.header__menu')

//saved intro
const introInfoContainer = document.querySelector('.articles-intro')


export {
  MAIN_API,
  NEWS_API,
  header,
  popupLogIn,
  buttonSignUp,
  popupSignUp,
  popupSignUpForm,
  popupSignInForm,
  redirectToSignUp,
  nameInput,
  emailInput,
  passwordInput,
  searchInput,
  searchForm,
  loaderContainer,
  cardContainer,
  buttonShowMore,
  redirectToSignIn,
  popupSuccess,
  successForm,
  headerMenu,
  introInfoContainer,
  cardContainerSaved
}
