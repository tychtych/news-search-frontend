export default class Popup {
  constructor(popupContainer, form) {
    this.popupContainer = popupContainer;
    this.form = form;
    this.popupContainer.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
      this.resetForm();
    })
  }

  resetForm() {
    this.form.reset()
  }

  open() {
    this.popupContainer.classList.remove('hidden');
  }

  close() {
    this._resetContainer();
    this.resetForm();
    this.popupContainer.classList.add('hidden');
  }

  renderError(errorMessage) {
    this._resetContainer();
    this.popupContainer.querySelector('.popup__error-message_center').textContent = errorMessage;
  };

  _resetContainer() {
    const errorMessage = this.popupContainer.querySelector('.popup__error-message_center');
    if (errorMessage) {
      errorMessage.textContent = '';
    }
  }
}
