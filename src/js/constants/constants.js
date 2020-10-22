import MainApi from "../api/MainApi";
import NewsApi from "../api/NewsApi";

const CURRENT_TIME = Date.now()

//API
const MAIN_API = new MainApi('https://api.tychpress.ga')
const NEWS_API = new NewsApi('https://newsapi.org', 'abfd7572d42a46a1922889a2580248d3', '2020-10-21', CURRENT_TIME);

//web elements
//popups
const popupLogIn = document.getElementById('popup-login');
const popupSignUp = document.getElementById('popup-signup');


//forms
const popupSignUpForm  =  document.forms.signup;
const popupSignInForm = document.forms.login;


//redirect
const redirectToSignUp = document.querySelector('.popup__link');


//buttons
const buttonSignUp = document.querySelector('.button__signin');

//User and local storage
//TODO fix
let isLoggedIn = !!localStorage.getItem("token")


//header
const header = document.querySelector('.header');




export {
  MAIN_API,
  NEWS_API,
  isLoggedIn,
  header,
  popupLogIn,
  buttonSignUp,
  popupSignUp,
  popupSignUpForm,
  popupSignInForm,
  redirectToSignUp
}
