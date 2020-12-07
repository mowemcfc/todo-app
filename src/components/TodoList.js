import React from 'react';
import '../index.css';

class TodoListBodyRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {idx: this.props.id, todo: this.props.todo};
    this.handleDelete = this.handleDelete.bind(this);
    this.markTodoCompleted = this.markTodoCompleted.bind(this);
  }

  handleDelete(e) {
    this.props.deleteTodo(this.state.idx);
    e.preventDefault();
  }

  // not required for now - pending DB integration
  markTodoCompleted(e) {
    return;
  }

  render() {
    let todo = this.state.todo;
    return (
      <tr className="todoListRow" key={this.state.idx}>
        <td className="checkboxCell">
          <input type="checkbox" className="completedCheckbox" id="completedCheckbox" onClick={this.markTodoCompleted}></input>
        </td>
        <td className="tableBodyCell tableCell dateField">{todo.date}</td>
        <td className="tableBodyCell tableCell descriptionField">{todo.description}</td>
        <td className="deleteButtonCell deleteTodoButtonCell" id="deleteTodoButtonCell" >
          <button className="deleteTodoButton" onClick={this.handleDelete}></button>
        </td>
      </tr> 
    )  
  }
}

class TodoListBody extends React.Component {
  render() {
    return (
      <tbody className="todoListBody">
        {this.props.todos.map((todo, index) => 
          {return <TodoListBodyRow key={index} id={index} todo={todo} deleteTodo={this.props.deleteTodo}/>}
        )}
      </tbody>
    )
  }
}

export {
    TodoListBody,
    TodoListBodyRow,
}
