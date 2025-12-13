import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { newTodoValidate } from "../pages";

class Section {
  constructor({ items, renderer, containerSelector }) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach((item) => {
      return this._renderer(item);
    });
  }

  addItem(element) {
    return this._container.append(element);
  }
}

export default Section;
