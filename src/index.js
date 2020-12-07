import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import deleteImg from './static/images/dlticon.png';
import TodoListAddEntryForm from './components/Form.js';
import {TodoListBody} from './components/TodoList.js'

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