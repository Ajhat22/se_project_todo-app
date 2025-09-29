class FormValidator {
  constructor(settings, formElem) {
    this._formElem = formElem;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
  }

  _showInputError = (inputElement, errorMessage) => {
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    const errorElem = this._formElem.querySelector(`#${inputElement.id}-error`);
    this._errorElement = this._formElem.querySelector(this._errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (buttonElement) => {
    if (hasInvalidInput(_inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(
      this._formElem.querySelectorAll(this_.inputSelector)
    );
    const buttonElement = this.formElem.querySelector(
      this_.submitButtonSelector
    );

    _toggleButtonState(buttonElement, this_.inputList);

    this_.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(this._formElem, this._inputSelector);
        _toggleButtonState(buttonElement, this_.inputList);
      });
    });
  }

  enableValidation() {
    this._formElem.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
