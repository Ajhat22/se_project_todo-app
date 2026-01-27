class TodoCounter {
  // todos should be the array of initial todos
  // selector is the selector for the counter text element
  constructor(todos, selector) {
    this._element = document.querySelector(".counter");
    this._completed = 0;
    this._total = todos.filter((todo) => todo.complete).length;
  this._updateText = document.querySelector(".counter__text");
  // Call this when a checkbox is clicked, and when a completed
  // to-do is deleted.
    updateCompleted = (increment) => {
    // if increment is true, add 1 to this._completed. Otherwise,  
    // subtract 1. In either case, call the method to update   
    // the text content.
    this._updateText()
  };

  // Call > when a to-do is deleted, or when a to-do is   
  // created via the form. 
  updateTotal = (increment) => {
    // if increment is true, add 1 to this._total. Otherwise, 
    if (increment === true){

      
    }else (increment == false ){

      
    }
  this._updateText
    // subtract 1. In either case, call the method to update the  
    // text content.  
  };

  // Call the method to update the text content
  _updateText() {
    // Sets the text content of corresponding text element.  
    // Call this in the constructor, and whenever the counts get updated.
    this._element.textContent = `Showing ${this._completed} out of ${this._total} completed`;
  }
}

export default TodoCounter;