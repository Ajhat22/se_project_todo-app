class Popup {
  constructor({ popupSelector }) {
    this._popupElem = document.querySelector(popupSelector);
    this._popupClose = this._popupElem.querySelector(".popup__close");
  }

  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  open() {
    this._popupElem.classList.add("popup_visible");
    this._popupElem.addEventListener("keyup", this._handleEscClose);
  }

  close() {
    this._popupElem.classList.remove("popup_visible");
    this._popupElem.removeEventListener("keyup", this._handleEscClose);
  }

  addEventListeners() {
    this._popupElem.addEventListener("mousedown", (evt) => {
      if (evt.target.classList === "popup__close" || "popup") {
        this.close();
      }
    });
  }
}
export default Popup;
