import NewsCard from "../NewsCard/NewsCard";
import {templatesCardList} from "./templatesCardList";

export default class NewsCardList {
  constructor(cardListContainer, cardsArray, pageSize, eventHandlers) {
    this.cardListContainer = cardListContainer;
    this.pageSize = pageSize;
    this.eventHandlers =  eventHandlers;
    this.cardsArray = cardsArray;
    this.cardIndexToRender = 0;
  }

  renderLoader() {
    this._resetContainer();
    this.cardListContainer.insertAdjacentHTML('afterbegin', templatesCardList.loader);
  }

  renderResults(cardsArray,isLoggedIn, input) {
    this._resetContainer();
    this.cardsArray = cardsArray;
    this.cardIndexToRender = 0;

    if (cardsArray.length !== 0) {
      this.cardListContainer.insertAdjacentHTML('afterbegin', templatesCardList.results);
      this.showMoreButton = this.cardListContainer.querySelector('.button__more');
      this.showMoreButton.addEventListener('click', () => {
        this.showMore()
      });
      this.resultContainer = this.cardListContainer.querySelector('.found-card__container');

      this._renderPage(isLoggedIn, input);
    } else {
      this.cardListContainer.insertAdjacentHTML('afterbegin', templatesCardList.noResults);
    }
  }

  renderSavedResults(cardsArray,isLoggedIn, input) {
    console.log(cardsArray)
    if (cardsArray.length !== 0) {
      this.cardsArray = cardsArray;
      this.cardListContainer.insertAdjacentHTML('afterbegin', templatesCardList.savedResults);
      this.resultContainer = this.cardListContainer.querySelector('.found-card__container');
      //const cardHtml = new NewsCard(this.resultContainer, this.cardsArray, this.eventHandlers, input);
      this.cardsArray.forEach(card => {
        const cardHtml = new NewsCard(this.resultContainer, card, this.eventHandlers, input)
        cardHtml.renderSavedCard();
        cardHtml.renderDeleteIcon();
      })
    } else {
      this.cardListContainer.insertAdjacentHTML('afterbegin', templatesCardList.noResults);
    }
  }

  renderError(errorMessage) {
    this._resetContainer();
    this.cardListContainer.insertAdjacentHTML('afterend', templatesCardList.error(errorMessage));
  }

  showMore() {
    this._renderPage();
  }

  _renderPage(isLoggedIn,input) {
    const nextPageIndex = this.cardIndexToRender + this.pageSize;

    while (this.cardIndexToRender < nextPageIndex && this.cardIndexToRender < this.cardsArray.length) {
      const cardHtml = new NewsCard(this.resultContainer, this.cardsArray[this.cardIndexToRender], this.eventHandlers, input);
      cardHtml.renderCard();
      cardHtml.renderIcon(isLoggedIn);
      cardHtml.renderDeleteIcon();
      this.cardIndexToRender++;
    }
    this._renderShowMoreButton();
  }

  _renderShowMoreButton() {
    if (this.cardIndexToRender < this.cardsArray.length) {
      this.showMoreButton.classList.remove('hidden');
    } else {
      this.showMoreButton.classList.add('hidden');
    }
  }

  _resetContainer() {
    this.cardListContainer.innerHTML = '';
  }
}
