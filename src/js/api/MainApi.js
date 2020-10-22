export default class MainApi {
  constructor(baseUrl, token) {
    this.baseUrl = baseUrl;
    this.token = token;
  }

  //successHandler = (response) => {
    //if (response.ok) {
      //return response.json();
    //}
    //return Promise.reject(`Ошибка ${response.status}`)
  //}

  signup(data) {
    const {email, password, name} =  data;

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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

  signin(data) {
    const {email, password} = data;
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
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

  getUserData(token) {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${token}`,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

  getArticles() {
    return fetch (`${this.baseUrl}/articles`, {
      headers: {
        "Content-Type": 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

  createArticle(data) {
    const { keyword, title, description, publishedAt, source, url, urlToImage} = data;

    return fetch(`${this.baseUrl}/articles`, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": 'application/json'
      },
      body: JSON.stringify({
        keyword : keyword,
        title :  title,
        text : description,
        date : publishedAt,
        source: source.name,
        link : url,
        image : urlToImage
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

  removeArticle(articleId) {
    return fetch(`${this.baseUrl}/articles/articleId`,{
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": 'application/json'
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      .catch(errorMessage => {
        throw new Error(errorMessage)
      })
  }

}
