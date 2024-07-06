function AddTodo(){
    return  <div class="container text-center">
    <div class="row">
      <div class="col">
        <input type ="text"placeholder="Enter Todo Here"></input>
      </div>
      <div class="col">
        <input type="date"></input>
      </div>
      <div class="col todo-button">
      <button type="button" class="btn btn-success">Add</button>
      </div>
    </div>
  </div>

}
export default AddTodo;