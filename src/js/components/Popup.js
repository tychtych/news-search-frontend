export default class Popup {
  constructor(popupContainer, form) {
    this.popupContainer = popupContainer;
    this.popupContainer.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    })
    this.form = form;
  }

  resetForm () {
    this.form.reset()
  }


  open() {
    this.popupContainer.classList.remove('hidden');
  }

  close() {
    this.popupContainer.classList.add('hidden');
    this.resetForm()
  }


}
