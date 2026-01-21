import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElem.querySelector(".popup__Form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputlist = this._popupForm.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const values = {};
    this._inputlist.forEach((input) => {
      values[("input.name", "input.name.date")] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("Submit", (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._handleFormSubmit(evt);
    });
  }
}
export default PopupWithForm;
