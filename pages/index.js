import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector("#add-todo-form");
export const newTodoValidate = new FormValidator(validationConfig, addTodoForm);

const sectionStuff = new Section({
  items: initialTodos,
  renderer: () => {
    const itemTodo = renderItems(initialTodos);
    addItem.append(itemTodo);
  },
  containerSelector: ".todo__list",
});

sectionStuff.renderItems();

const addTodoWindowPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (evt) => {
    evt.preventDefault();
    const name = evt.target.name.value;
    const dateInput = evt.target.date.value;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
    const values = { name, date, id: uuidv4() };

    newTodoValidate._resetValidation();
    renderTodo(values);
    addTodoWindowPopup.close();
  },
});

addTodoWindowPopup.addEventListeners("click");
//extra stuff so i dont go nuts to deal with later

//this is fir later for confetti

const closeModal = (modal) => {};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todoNew = new Todo(data, "#todo-template");
  return todoNew.getView();
};

addTodoButton.addEventListener("click", () => {
  addTodoWindowPopup.open();
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  newTodoValidate.resetValidation();

  addTodoWindowPopup.close();
});

newTodoValidate.enableValidation();

//add confeti class and add buttons for diffrent types of confetti?
