import {
  MAIN_API,
  NEWS_API,
  popupLogIn,
  buttonSignUp,
  popupSignInForm,
  popupSignUpForm,
  redirectToSignUp,
  popupSignUp,
  passwordInput,
  emailInput,
  nameInput,
  searchInput,
  searchForm,
  loaderContainer,
  cardContainer,
  buttonShowMore,
  redirectToSignIn,
  popupSuccess,
  successForm,
  headerMenu
} from "./constants/constants";

import {header} from "./constants/constants";
import Popup from "./components/Popup/Popup";
import Form from "./components/Form";
import Header from './components/Header/Header';
import NewsCard from "./components/NewsCard/NewsCard";
import NewsCardList from "./components/NewsCardList/NewsCardList";
import NewsApi from "./api/NewsApi";
import Preloader from "./components/Preloader";

//initialize
const signinPopup = new Popup(popupLogIn, popupSignInForm);
const signUpPopup = new Popup(popupSignUp, popupSignUpForm);
const successPopup = new Popup(popupSuccess, successForm);

const signInForm = new Form(popupSignInForm);
const signUpForm = new Form(popupSignUpForm);
signInForm.setEventListeners();
signUpForm.setEventListeners();

const loader = new Preloader(loaderContainer);

//window location href
const currentLocation = window.location.pathname;

//set user to false
let userLoggedIn = false;

// header manipulations with sign in and logout
const headerEventHandlers = {
  signInButton: () => signinPopup.open(),
  logoutButton: () => {
    MAIN_API.logout()
      .then((res) => {
        location.reload();
        headerObj.render(!userLoggedIn);
      });
  }
}

//initialize header
const headerObj = new Header(header, currentLocation, headerEventHandlers);

//render current header in based on user logged in or not
headerObj.render(userLoggedIn);


//event handler for saving the article
const cardEventHandlers = {
  saveButton: (keyword, title, description, publishedAt, source, url, urlToImage) => {
    console.log(keyword, title, description, publishedAt, source, url, urlToImage)
    MAIN_API.createArticle(keyword, title, description, publishedAt, source, url, urlToImage)
      .then(data => console.log(data))
  }
}

//render user's data  in the header
MAIN_API.getUserData()
  .then(user => {
    userLoggedIn = true;
    headerObj.render(userLoggedIn, user.name);
  });

//sign in process - form submission
popupSignInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const {email, password} = popupSignInForm.elements;
  MAIN_API.signin(email.value, password.value)
    .then(() => {
      signinPopup.close();
      location.reload();
      MAIN_API.getUserData()
        .then(user => {
          userLoggedIn = true;
          headerObj.render(userLoggedIn, user.name);
        });
    })
    .catch(err => {
      signinPopup.renderError(err.message)
    });
})

//sign up process - sign up form submission
popupSignUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const {email, password, name} = popupSignUpForm.elements;
  MAIN_API.signup(email.value, password.value, name.value)
    .then(res => {
      signUpPopup.close();
      successPopup.open();
    })
    .catch(err => {
      signUpPopup.renderError(err.message);
    })
})

//listeners for popups
popupLogIn.querySelector('.popup__close').addEventListener('click', () => {
  signinPopup.close();
  signInForm._clear();
})
popupSignUp.querySelector('.popup__close').addEventListener('click', () => {
  signinPopup.close();
  signInForm._clear();
})
redirectToSignUp.addEventListener('click', (e) => {
  signinPopup.close();
  signUpPopup.open();
  e.preventDefault();
})
redirectToSignIn.addEventListener('click', () => {
  successPopup.close();
  signinPopup.open();
})

//initialize the card list
const newsCards = new NewsCardList(cardContainer, [], 3, cardEventHandlers);

//search process
searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchedKeyword = searchInput.value;
  newsCards.renderLoader();
  NEWS_API.getNews(searchedKeyword)
    .then(data => {
      newsCards.renderResults(data.articles, userLoggedIn, searchedKeyword);
    })
    .catch(error => {
      newsCards.renderError(error);
    })
})
