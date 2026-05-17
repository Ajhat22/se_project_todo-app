class TodoCounter {
  constructor(todos, selector) {
    this._element = document.querySelector(".counter");
    this._completed = todos.filter((todo) => todo.complete).length;
    this._total = todos.length;
  this._updateText = document.querySelector(".counter__text");
  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
    updateCompleted = (increment) => {
   this._completed += increment ? 1 : -1; 
     return this._updateText();
  };

  // Call > when a to-do is deleted, or when a to-do is   
  // created via the form. 
  updateTotal = (increment) => {
    // if increment is true, add 1 to this._total. Otherwise, 
    if (increment === true){

      
    }else (increment == false ){

      
    }
    
  return this._updateText();
    // subtract 1. In either case, call the method to update the  
    // text content.  
  };

  // Call the method to update the text content
  _updateText() {
    
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  return this._element
  }
}

export default TodoCounter;