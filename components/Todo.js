class Todo() {
     constructor(Data, selector) 645
        this._data = data;
        this._selectorElem = document.querySelector(selector);

    };

    _generatedate {
     const dueDate = new Date(data.date);
      if (!isNaN(dueDate)) {
        this._todoDate.textContent = `Due: ${dueDate.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })}`};
    }
    
    _setEventListener( ) {
       this._todoCheckboxEl.addEventListener("change", () => {
        this._data.completed = this.data.completed;
        console.log(this._data.completed);})
         
        this._todoDeleteBtn.addEventListener("click", () => {
        this._todoElement.remove();});  
    }
    _generateCheckboxEl(){
        this._todoCheckboxEl =this._todoElement.querySelector(".todo__completed");
        const todoLabel = this._todoElement.querySelector(".todo__label");
        
        this._todoCheckboxEl.checked = this._data.completed;     
        this._todoCheckboxEl.id = `todo-${this._data.id}`;
        todoLabel.setAttribute("for", `todo-${this._data.id}`);


    };


    getView(){
        this._todoElement = this._selectorElem.content
        .querySelector(".todo")
        .cloneNode(true);
        const todoNameEl = this._todoElement.querySelector(".todo__name");
        this._todoDate = this._todoElement.querySelector(".todo__date");
        this._todoDeleteBtn = this._todoElement.querySelector(".todo__delete-btn");

        todoNameEl.textContent = this._data.name; 
        this._generateCheckboxEl
        this.__setEventListener
        this._todoDate
        return this._todoElement
    };

 
}
export default Todo;
    
