import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todofnct.js";
import FormValidator from "../components/FormValidator.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = addTodoPopup.querySelector("#add-todo-form");
const addTodoCloseBtn = addTodoPopup.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");
const newTodoValidate = new FormValidator(validationConfig, addTodoForm);
//extra stuff so i dont go nuts to deal with later

const openModal = (modal) => {
  modal.classList.add("popup_visible");
};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todoNew = new Todo(data, "#todo-template");
  return todoNew._getView();
};

addTodoButton.addEventListener("click", () => {
  openModal(addTodoPopup);
});

addTodoCloseBtn.addEventListener("click", () => {
  closeModal(addTodoPopup);
});

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;
  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
  const values = { name, date, id: uuidv4() };

  newTodoValidate._resetValidation();
  renderTodo(values);
  closeModal(addTodoPopup);
});

const renderTodo = (item) => {
  const todo = generateTodo(item);
  todosList.append(todo);
};
initialTodos.forEach((item) => {
  renderTodo(item);
});

newTodoValidate.enableValidation();
