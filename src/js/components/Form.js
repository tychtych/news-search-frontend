export default class Form {
  constructor(formElem) {
    this.formElem = formElem;
    this.inputElems = this.formElem.querySelectorAll('input');
    this.submitButton = this.formElem.querySelector('button');
    this.setSubmitButtonState();
  }

  _validateInputElement(inputElem) {
    const errorElem = this.formElem.querySelector(`#error-${inputElem.id}`);

    const errorMessages = {
      valueMissing: 'This field is required',
      tooShort: 'Please enter from 2 to 30 characters',
      typeMismatch: 'Invalid type'
    }

    if (inputElem.validity.valueMissing) {
      errorElem.classList.remove('popup__error-message_hidden');
      errorElem.textContent = errorMessages.valueMissing;
    }
    else if (inputElem.validity.tooShort || inputElem.validity.tooLong) {
      errorElem.classList.remove('popup__error-message_hidden');
      errorElem.textContent = errorMessages.tooShort;
    }
    else if (inputElem.validity.typeMismatch || inputElem.validity.patternMismatch) {
      errorElem.classList.remove('popup__error-message_hidden');
      errorElem.textContent = errorMessages.typeMismatch;
    } else {
      errorElem.textContent = '';
      errorElem.classList.add('error-message__hidden');
    }
  }

  setSubmitButtonState() {
    if (this.formElem.checkValidity()) {
      this.submitButton.classList.remove('popup_button-disabled');
      this.submitButton.removeAttribute('disabled');
    } else {
      this.submitButton.classList.add('popup_button-disabled');
      this.submitButton.setAttribute('disabled', true);
    }
  }

  _validateAllForm() {
    this.inputElems.forEach(inputElem => this._validateInputElement(inputElem));
    this.setSubmitButtonState();
  }

  _clear() {
    this.inputElems.forEach(inputElem => {
      const errorElem = this.formElem.querySelector(`#error-${inputElem.id}`);
      errorElem.textContent = '';
      inputElem.textContent = '';
      errorElem.classList.add('error-message__hidden');
    });
  }

  setEventListeners() {
    this.inputElems.forEach(inputElem => {
      inputElem.addEventListener('input', (e) => {
        this._validateInputElement(e.target);
      });
    });
    this.formElem.addEventListener('input', this.setSubmitButtonState.bind(this));
  }

}
