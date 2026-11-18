class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(".counter");
    this._completed = todos.filter((todo) => todo.complete).length;
    this._total = todos.length;
  this._updateText = document.querySelector(".counter__text");

    this._updateCompleted = (increment) => {
   this._completed += increment ? 1 : -1; 
     return this._updateText();
  };

  this._updateTotal = (increment) => {
    // if increment is true, add 1 to this._total. Otherwise, 
    if (increment === true){
     this._total +=  1;
      
    }else (increment == false ) {
     this._total -= -1;
      
    }
    
  return this._updateText();
      
  };

  // Call the method to update the text content
  _updateText() {
    
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  return this._element
  }
}

}

export default TodoCounter;