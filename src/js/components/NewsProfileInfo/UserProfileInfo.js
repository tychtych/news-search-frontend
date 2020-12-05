import {templatesUserProfile} from './templatesUserProfile';

export class UserProfileInfo {
  constructor(container) {
    this.container = container;
  }

  renderProfile(username) {
    this.container.insertAdjacentHTML('afterbegin', templatesUserProfile.userProfile);
    this.container.querySelector('.articles-intro__title').textContent = username + ', у вас';
    //this.container.querySelector('.articles-intro__keywords-bold').textContent = articles;
  }

  renderArticlesAmount(articles) {
    if  (articles ===  1) {
      this.container.querySelector('.articles-intro__amount').textContent = articles +  ' сохраненная статья';
    } else if (articles > 1) {
      this.container.querySelector('.articles-intro__amount').textContent = articles + ' сохраненных статей';
    }
    //this.container.querySelector('.articles-intro__amount').textContent = articles;
  }

  setKeyWords(keyWords) {
    this.keyWords = keyWords;

    if (!keyWords || keyWords.length === 0) {
      this.container.querySelector('.articles-intro__keywords').textContent = 'Сохраните статьи, чтобы увидеть ключевые слова';
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
      this.container.querySelector('.articles-intro__keywords-count').textContent = 'и ' + keyWords.slice(2).length + ' другому'
    }

    if (keyWords.length > 3) {
      this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
      this.container.querySelector('.articles-intro__keywords-second').textContent = ', ' + keyWords[1];
      this.container.querySelector('.articles-intro__keywords-count').textContent = 'и ' + keyWords.slice(2).length + ' другим'
    }




    //this.container.querySelector('.articles-intro__keywords-first').textContent = keyWords[0];
    //this.container.querySelector('.articles-intro__keywords-second').textContent = keyWords[1];
    //this.container.querySelector('.articles-intro__keywords-count').textContent = keyWords.slice(2).length;
  }
}
