import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (newTodo) => {
    if (newTodo.trim() === "") return; // Prevent empty input
    const newItem = { text: newTodo }; // No ID now
  
    this.setState((prevState) => ({
      todos: [...prevState.todos, newItem]
    }));
  };
  

  handleRemove = (deleteT) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo !== deleteT)
    }));
  };
  render() {
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form newTodo={this.handleAdd}/>
        <List todos={this.state.todos} deleteTodo={this.handleRemove}/>
      </div>
    );
  }
}
