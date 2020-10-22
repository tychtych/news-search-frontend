export default class NewsApi {
  constructor(url, apiKey, oldestDate, newestDate) {
    this.url = url;
    this.apiKey = apiKey;
    this.oldestDate = oldestDate;
    this.newestDate = newestDate;
    //abfd7572d42a46a1922889a2580248d3
    //`https://newsapi.org/v2/everything?q=${keyword}&apiKey=abfd7572d42a46a1922889a2580248d3`

  }

  getNews(keyword) {
    return fetch(`${this.url}/v2/everything?q=${keyword}&from=${this.oldestDate}&to=${this.newestDate}&sortBy=popularity&apiKey=${this.apiKey}`)
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка ${res.status}`)
      })
      //.then((articles) => {
        //articles.keyword = keyword;
        //return articles;
     // })

  }
}
