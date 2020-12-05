import {templatesHeader} from "./templatesHeader";

export default class Header {

  constructor(headerContainer, location, eventHandlers) {
    this.headerContainer = headerContainer;
    this.location = location;
    this.eventHandlers = eventHandlers;
  }

  render(isLoggedIn, username) {
    const headerMenu = this.headerContainer.querySelector('.header__menu');
    const renderBlackOrWhite = this.location === '/articles.html' ? templatesHeader.headerWhite : templatesHeader.headerBlackLogged;
    //render the color based on the user logged in or not
    if (!isLoggedIn) {
      headerMenu.innerHTML = '';
      headerMenu.insertAdjacentHTML('afterbegin', templatesHeader.headerBlackNotLogged);
    } else {
      headerMenu.innerHTML = '';
      headerMenu.insertAdjacentHTML('afterbegin', renderBlackOrWhite);
      headerMenu.querySelector('.user-name').textContent = username;
    }
    this._setHandlers();
  }

  _setHandlers() {
    const signInButton = this.headerContainer.querySelector('.button__signin');
    const logoutButton = this.headerContainer.querySelector('.button__user');
    if (signInButton) {
      signInButton.addEventListener('click', this.eventHandlers.signInButton);
    }
    if(logoutButton) {
      logoutButton.addEventListener('click', this.eventHandlers.logoutButton);
    }
  }
}
