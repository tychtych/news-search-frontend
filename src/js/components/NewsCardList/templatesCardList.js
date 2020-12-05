export const templatesCardList = {
  loader: `<section class="loader">
      <i class="loader__circle"></i>
      <h2 class="loader__title">Идет поиск новостей...</h2>
    </section>`,

  noResults: `<section class="no-results">
      <svg class="no-results__image" width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="43" cy="43" r="36.5" stroke="#D1D2D6"/>
        <path d="M69 69L88.5 88.5" stroke="#D1D2D6"/>
        <path d="M58.3283 55.959C54.6606 51.6979 49.2275 48.9998 43.1642 48.9998C37.1009 48.9998 31.6678 51.6979 28 55.959" stroke="#D1D2D6"/>
        <circle cx="55.5" cy="33.5" r="1.5" fill="#D1D2D6"/>
        <circle cx="30.5" cy="33.5" r="1.5" fill="#D1D2D6"/>
      </svg>
      <h2 class="no-results__title">Ничего не найдено</h2>
      <p class="no-results__subtitle">
        К сожалению по вашему запросу
        ничего не найдено.
      </p>
    </section>`,

  results: `<section class="found-card">
      <h2 class="search-results__title">Результаты поиска</h2>
      <div class="found-card__container">

      </div>
      <button class="button button__more hidden">Показать еще</button>
    </section>`,

  savedResults: `<section class="found-card">
      <div class="found-card__container">

      </div>
      <button class="button button__more hidden">Показать еще</button>
    </section>`,

  error: (errorMessage) => `<div>${errorMessage}</div>`
}
