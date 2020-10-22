import {
  isLoggedIn,
  MAIN_API,
  NEWS_API,
  popupLogIn,
  buttonSignUp,
  popupSignInForm,
  popupSignUpForm,
  redirectToSignUp,
  popupSignUp
} from "./constants/constants";

import {header} from "./constants/constants";
import Popup from "./components/Popup";

const signinPopup = new Popup(popupLogIn, popupSignInForm);
const signUpPopup = new Popup(popupSignUp, popupSignUpForm)




//listeners
buttonSignUp.addEventListener('click',  () => {
  signinPopup.open();
});

//popupLogIn.querySelector('.popup__close').addEventListener('click', (e) => {
  //signinPopup.close();
//});

redirectToSignUp.addEventListener('click', (e) => {
  signinPopup.close()
  signUpPopup.open();
  e.preventDefault();
})


console.log(isLoggedIn);
