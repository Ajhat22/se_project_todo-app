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
    this._errorElementId = `#${inputElement.id}-error`;
    this._errorElement = formElement.querySelector(this._errorElementId);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  _checkInputValidity = (inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(
        this._formElem,
        inputElement,
        inputElement.validationMessage
      );
    } else {
      hideInputError(inputElement);
    }
  };

  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = (buttonElement) => {
    if (hasInvalidInput(this_.inputList)) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }
  };

  _setEventListeners() {
    this._inputList = Array.from(
      formElem.querySelectorAll(this_.inputSelector)
    );
    const buttonElement = formElem.querySelector(this_.submitButtonSelector);

    toggleButtonState(buttonElement, this_.inputList);

    this_.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        checkInputValidity(formElem, this._inputSelector);
        toggleButtonState(buttonElement, this_.inputList);
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
