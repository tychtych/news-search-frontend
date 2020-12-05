export default class NewsApi {
  constructor(url, apiKey) {
    this.url = url;
    this.apiKey = apiKey;
  }

  getNews(keyword) {
    return fetch(`${this.url}/news/v2/everything?q=${keyword}&sortBy=popularity&apiKey=${this.apiKey}`)
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
