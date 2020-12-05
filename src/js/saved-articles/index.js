import {
  header,
  MAIN_API,
  introInfoContainer,
  cardContainer
} from "../constants/constants";
import Header from "../components/Header/Header";
import {UserProfileInfo} from "../components/NewsProfileInfo/UserProfileInfo"
import extractKeyWords from "../utils/keyWordUtil";
import NewsCardList from "../components/NewsCardList/NewsCardList";

const currentLocation = window.location.pathname;

let userLoggedIn = false;

// header manipulations
const headerEventHandlers = {
  logoutButton: () => {
    MAIN_API.logout()
      .then((res) => {
        window.location.href = '/'
      });
  }
}

//card manipulations
const cardEventHandlers = {
  deleteButton: (id) => MAIN_API.removeArticle(id)
}

const headerObj = new Header(header, currentLocation, headerEventHandlers);
headerObj.render(userLoggedIn);

// intro rendering
const introObj = new UserProfileInfo(introInfoContainer);
//news card rendering
const newsCards = new NewsCardList(cardContainer, [], 3, cardEventHandlers);

MAIN_API.getUserData()
  .then(user => {
    userLoggedIn = true;
    headerObj.render(userLoggedIn, user.name);
    introObj.renderProfile(user.name);

    MAIN_API.getArticles()
      .then(articles => {
        introObj.renderArticlesAmount(articles.data.length);
        const data = articles.data;
        introObj.setKeyWords(extractKeyWords(data));
        newsCards.renderSavedResults(data, userLoggedIn, extractKeyWords(data))
      })
  })
  .catch((err) => {
    //redirect
    window.location.href = '/';
  });




