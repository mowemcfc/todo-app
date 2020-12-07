import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import deleteImg from './static/images/dlticon.png'

class TodoListAddEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: '', description: 'New task'};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }  


  handleSubmit(e) {
    const todo = {
      date: new Date().toDateString().substr(3,7),
      description: this.state.description
    }
    this.props.addTodo(todo)
    e.preventDefault();
  }

  handleCategoryChange(e) {
    this.setState({category: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value})
  }

  render() {
    return (
      <form className="addEntryForm Form" onSubmit={this.handleSubmit} >
        <input type="text" className="addEntryDescInput" value={this.state.description} onChange={this.handleDescriptionChange} id="description" name="description"></input>
        <button className="formSubmitButton" type="submit"> Add </button>
      </form>
    )
  }
}


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

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {todos: []};
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }  

  addTodo(todo) {
    this.state.todos.push(todo);
    this.setState({todos: this.state.todos});
  }

  deleteTodo(index) {
    delete this.state.todos[index];
    this.setState({todos: this.state.todos});
  }

  render() {
    return (
      <div className="todoListContainer">
        <div className="entryFormDiv">
          <TodoListAddEntryForm addTodo={this.addTodo}/>
        </div>
        <table className="todoListTable">
          <TodoListBody deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        </table>
      </div>
    )
  }
}

ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
)