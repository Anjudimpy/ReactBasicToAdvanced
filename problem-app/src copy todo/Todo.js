import { Component } from "react";

export class Todo extends Component {
  render() {
    let {deleteTodo, todo} = this.props
    return (
      <div className="todo">
        <p>{todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={() => deleteTodo(todo)}>x</button>
      </div>
    );
  }
}
