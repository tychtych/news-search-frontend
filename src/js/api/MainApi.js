export default class MainApi {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  signup(email, password, name) {
    return fetch(`${this.baseUrl}/signup`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
        name: name
      })
    })
      .then(this._handleResponse)
      .catch(this._handleError)
  }

  signin(email, password) {
    return fetch(`${this.baseUrl}/signin`, {
      method: 'POST',
      headers: {
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
      .then(this._handleResponse)
      .then(res => {
        localStorage.setItem('token', res.token);
      })
      .catch(this._handleError)
  }

  logout() {
    localStorage.removeItem("token")
    return Promise.resolve();
  }

  getUserData() {
    return fetch(`${this.baseUrl}/users/me`, {headers: this._getAuthenticatedHeaders()})
      .then(this._handleResponse)
      .catch(this._handleError)
  }

  getArticles() {
    return fetch(`${this.baseUrl}/articles`, {headers: this._getAuthenticatedHeaders()})
      .then(this._handleResponse)
      .catch(this._handleError)
  }

  createArticle(keyword, title, description, publishedAt, source, url, urlToImage) {
    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: this._getAuthenticatedHeaders(),
      body: JSON.stringify({
        keyword: keyword,
        title: title,
        text: description,
        date: publishedAt,
        source: source,
        link: url,
        image: urlToImage
      })
    })
      .then(this._handleResponse)
      .catch(this._handleError)
  }

  removeArticle(articleId) {
    return fetch(`${this.baseUrl}/articles/${articleId}`, {
      method: 'DELETE',
      headers: this._getAuthenticatedHeaders()
    })
      .then(this._handleResponse)
      .catch(this._handleError)
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else if (res.status === 401) {
      localStorage.removeItem('token');
      return Promise.reject("Пользователь не авторизован в системе");
    }
    return Promise.reject(`Ошибка ${res.status}`);
  }

  _handleError(err) {
    throw new Error(err);
  }

  _getAuthenticatedHeaders() {
    const token = localStorage.getItem('token');

    return {
      "Authorization": token && `Bearer ${token}`,
      "Content-Type": 'application/json'
    }
  }
}
