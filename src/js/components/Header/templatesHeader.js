export const templatesHeader = {
  headerBlackNotLogged:
    `<li class="header__item header__item_select"><a href="#" class="header__link"> Главная </a></li>
          <li class="header__item">
            <button class="button button__signin"> Авторизоваться</button>
    </li>`,

  headerBlackLogged:
    `<li class="header__item header__item_select"><a href="#" class="header__link"> Главная </a></li>
     <li class="header__item"><a href="articles.html" class="header__link">Сохраненные статьи </a></li>
     <li class="header__item">
            <button class="button button__user button__user_white"><span class="user-name user-name_white"></span>
              <svg class="header__icon-user" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z" fill="white"/>
            </svg>
            </button>
          </li>
        </template>`,

    headerWhite: `<li class="header__item header__item_dark"><a href="index.html" class="header__link header__link_dark"> Главная </a></li>
        <li class="header__item header__item_dark header__item_select_dark" id="currentSelect"><a href="articles.html" class="header__link header__link_dark"> Сохраненные статьи</a></li>
        <li class="header__item">
        <button class="button button__user">
        <span class="user-name"></span>
        <svg class="header__icon-user" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z" fill="#1A1B22"/>
    </svg>
</button></li>`

}
