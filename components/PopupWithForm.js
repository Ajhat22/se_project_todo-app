import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._popupForm = this._popupElem.querySelector(".popup__Form");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputlist = this._popupForm.querySelectorAll(".popup__input");
    const values = {};
    this._inputlist.forEach((input) => {
      values["input.name"] = ["input.value"];
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("Submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit();
      const inpitValues = this._getInputValues();
    });
  }
}
export default PopupWithForm;
