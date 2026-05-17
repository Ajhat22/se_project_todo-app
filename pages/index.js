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
const todoCounter = new TodoCounter(initialTodos, ".counter__text");

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
  handleFormSubmit: (Inpvalues) => {
    return Inpvalues;
  },
});
addTodoWindowPopup.addEventListeners("click");
//extra stuff so i dont go nuts to deal with later

function handleCheck(completed) {
  TodoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}
// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todoNew = new Todo(data, "#todo-template", handleCheck, handleDelete);
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
