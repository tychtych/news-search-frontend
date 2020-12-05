export default class Preloader {
  constructor(preloaderContainer) {
    this.preloaderContainer = preloaderContainer;
  }
  close()  {
    this.preloaderContainer.classList.add('hidden');
  }
}
