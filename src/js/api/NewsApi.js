export default class NewsApi {
  constructor(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
  }

  setTodayDate () {
    return new Date(Date.now())
  }

  setLastDay() {
    return new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
  }

  getNews(keyword) {
    return fetch(`${this.url}/news/v2/everything?q=${keyword}&sortBy=popularity&from=${this.setLastDay()}&to=${this.setTodayDate()}&apiKey=${this.apiKey}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      .catch(this._handleError)
  }

  _handleError(err) {
    throw new Error(err);
  }
}
