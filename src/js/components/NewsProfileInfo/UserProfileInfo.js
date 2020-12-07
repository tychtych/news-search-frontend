import {templatesUserProfile} from './templatesUserProfile';

export class UserProfileInfo {
  constructor(container) {
    this.container = container;
  }

  renderProfile(username) {
    this.container.insertAdjacentHTML('afterbegin', templatesUserProfile.userProfile);
    this.container.querySelector('.articles-intro__title').textContent = username + ', you have';
    //this.container.querySelector('.articles-intro__keywords-bold').textContent = articles;
  }

  renderArticlesAmount(articles) {
    if  (articles ===  1) {
      this.container.querySelector('.articles-intro__amount').textContent = articles +  ' saved article';
    } else if (articles > 1) {
      this.container.querySelector('.articles-intro__amount').textContent = articles + ' saved articles';
    }
  }

  setKeyWords(keyWords) {
    this.keyWords = keyWords;

    if (!keyWords || keyWords.length === 0) {
      this.container.querySelector('.articles-intro__keywords').textContent = 'Start saving articles to see keywords';
    }

    if (keyWords.length === 1) {
      this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
    }

    if (keyWords.length === 2) {
      this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
      this.container.querySelector('.articles-intro__keywords-second').textContent = ', ' + keyWords[1];
    }

    if (keyWords.length === 3) {
      this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
      this.container.querySelector('.articles-intro__keywords-second').textContent = ', ' + keyWords[1];
      this.container.querySelector('.articles-intro__keywords-count').textContent = 'and ' + keyWords.slice(2).length + ' more'
    }

    if (keyWords.length > 3) {
      this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
      this.container.querySelector('.articles-intro__keywords-second').textContent = ', ' + keyWords[1];
      this.container.querySelector('.articles-intro__keywords-count').textContent = 'and ' + keyWords.slice(2).length + ' more'
    }
  }
}
