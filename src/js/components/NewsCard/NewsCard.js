import formatDate from "../../utils/dateFormatter";

export default class NewsCard {
  constructor(cardContainer, cardData, eventHandlers, input) {
    this.cardContainer = cardContainer;
    this.eventHandlers = eventHandlers;
    this.id = cardData._id;
    this.title = cardData.title;
    this.description = cardData.description;
    this.text = cardData.text;
    this.publishedAt = cardData.publishedAt;
    this.date = cardData.date;
    this.source = cardData.source.name;
    this.savedSource = cardData.source;
    this.url = cardData.url;
    this.link = cardData.link;
    this.image = cardData.image;
    this.urlToImage = cardData.urlToImage;
    this.keyword = input;
    this.savedKeyword = cardData.keyword;

    this.card = `<a href="${this.url}" class="found-card__item" id="card" target="_blank">
          <div class="found-card__media" id="media">
            <img src="${this.urlToImage}" alt="violet plants" class="found-card__image">
            <p class="found-card__info"></p>

             <div class="found-card__save-icon"></div>
            <div class="found-card__trashIcon hidden"></div>
          </div>
          <blockquote class="found-card__description">
            <time datetime="${formatDate(this.publishedAt)}" class="found-card__date">${formatDate(this.publishedAt)}</time>
            <h3 class="found-card__title">${this.title}</h3>
            <p class="found-card__text">${this.description}</p>
          </blockquote>
          <cite class="found-card__source"> ${this.source}</cite>
        </a>`;
    this.savedCard = `<a href="${this.link}" class="found-card__item" id="card" target="_blank">
          <div class="found-card__media" id="media">
            <img src="${this.image}" alt="violet plants" class="found-card__image">
            <p class="found-card__info"></p>
            <p class="found-card__theme"> ${this.savedKeyword} </p>
             <div class="found-card__save-icon"></div>
            <div class="found-card__trashIcon hidden"></div>
          </div>
          <blockquote class="found-card__description">
            <time datetime="" class="found-card__date">${formatDate(this.date)}</time>
            <h3 class="found-card__title">${this.title}</h3>
            <p class="found-card__text">${this.text}</p>
          </blockquote>
          <cite class="found-card__source"> ${this.savedSource}</cite>
        </a>`;
  }

  renderCard(isLoggedIn) {
    this.cardContainer.insertAdjacentHTML('beforeend', this.card);
    if (window.location.pathname === '/articles.html') {
      this.cardContainer.insertAdjacentHTML('beforeend', this.savedCard);
      this._setDeleteHandlers();
    }
    this._setHandlers(isLoggedIn);
  }

  renderSavedCard() {
    this.cardContainer.insertAdjacentHTML('beforeend', this.savedCard);
    this._setDeleteHandlers();
  }

  renderIcon(isLoggedIn) {
    if (!isLoggedIn) {
      this.cardContainer.querySelectorAll('.found-card__info').forEach(item => item.textContent = '');
      this.cardContainer.querySelectorAll('.found-card__save-icon').forEach(item => {
        item.setAttribute('disabled', true);
      });
      this.cardContainer.querySelectorAll('.found-card__info').forEach(item => item.textContent = 'Войдите, чтобы сохранять статьи');
      this._renderTooltip()
    } else {
      this._renderTooltip()
      this.cardContainer.querySelectorAll('.found-card__info').forEach(item => item.textContent = '');
      this.cardContainer.querySelectorAll('.found-card__save-icon').forEach(item => item.removeAttribute('disabled'));
      this.cardContainer.querySelectorAll('.found-card__info').forEach(item => item.textContent = 'Сохранить статью');
    }
  }

  _renderTooltip() {
    this.cardContainer.querySelectorAll('.found-card__save-icon').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const infoDiv = item.closest('#media');
        infoDiv.querySelector('.found-card__info').classList.add('visible');
      })
      item.addEventListener('mouseleave', () => {
        const infoDiv = item.closest('#media');
        infoDiv.querySelector('.found-card__info').classList.remove('visible');
      })
    });
  }

  _renderSavedArticlesTooltip() {
    this.cardContainer.querySelectorAll('.found-card__trashIcon').forEach(item => {
      item.addEventListener('mouseenter', () => {
        const infoDiv = item.closest('#media');
        infoDiv.querySelector('.found-card__info').classList.add('visible');
      })
      item.addEventListener('mouseleave', () => {
        const infoDiv = item.closest('#media');
        infoDiv.querySelector('.found-card__info').classList.remove('visible');
      })
    });
  }

  renderDeleteIcon() {
    if (window.location.pathname === '/articles.html') {
      this.cardContainer.querySelectorAll('.found-card__save-icon').forEach(item => item.classList.add('hidden'))
      this.cardContainer.querySelectorAll('.found-card__trashIcon').forEach(item => item.classList.remove('hidden'));
      this.cardContainer.querySelectorAll('.found-card__info').forEach(item => item.textContent = 'Убрать из сохраненных');
      this._renderSavedArticlesTooltip();
    }
  }

  _setHandlers(isLoggedIn) {
    const saveButton = this.cardContainer.querySelectorAll('.found-card__save-icon');

    if(!isLoggedIn) {
      saveButton.forEach(button => {
        button.addEventListener('click', () => {
          button.setAttribute('disabled', true);
          button.classList.add('disabled')
        })
      })
    }

    saveButton.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        button.classList.add('active');
        this.eventHandlers.saveButton(this.keyword, this.title, this.description, this.publishedAt, this.source, this.url, this.urlToImage);
      });
    })
  };

  _setDeleteHandlers() {
    const deleteButton = this.cardContainer.querySelectorAll('.found-card__trashIcon');

    deleteButton.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        this.eventHandlers.deleteButton(this.id)
          .then(() => {
            const cardToDelete = e.target.closest('#card');
            if (cardToDelete.parentNode) {
              cardToDelete.parentNode.removeChild(cardToDelete)
            }
          })
      })
    })
  }
}
