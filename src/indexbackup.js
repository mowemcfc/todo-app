import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import 'materialize-css';
import {Modal, Button, Card, Row, Col} from 'react-materialize';

//TODO: fix 'each child in a list should have a unique key prop' issue

class TodoListAddEntryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {category: '', description: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }  


  handleSubmit(e) {
    const todo = {
      date: new Date().toDateString(),
      category: this.state.category,
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
      <form className="todoListAddEntryForm Form" onSubmit={this.handleSubmit}>
        <label>
          Category
          <input type="text" className="addEntryFormCatInput" value={this.state.category} onChange={this.handleCategoryChange} id="category" name="category"></input>
        </label>

        <label >
          Description
          <input type="text" className="addEntryFormDescInput" value = {this.state.description} onChange={this.handleDescriptionChange} id="description" name="description"></input>
         </label>

        <input type="submit" value="Add" />
      </form>
    )
  }
}

class TodoListHeaderRow extends React.Component {
  render() {
    return (
      <tr className="todoListHeaderRow">
        <th className="tableHeaderText tableCell checkboxHeaderCell"></th>
        <th className="tableHeaderText tableCell dateHeaderCell">Date</th>
        <th className="tableHeaderText tableCell categoryHeaderCell">Category</th>
        <th className="tableHeaderText tableCell descriptionHeaderCell">Description</th>
        <th className="tableHeaderInvis tableCell deleteHeaderCell"></th>
      </tr>
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

  markTodoCompleted(e) {
    return;
  }

  render() {
    let todo = this.state.todo;
    return (
      <tr className="todoListRow" key={this.state.idx}>
        <td className="tableBodyCell tableCell completedCheckboxCell">
          <input type="checkbox" className="completedCheckbox" id="completedCheckbox" onClick={this.markTodoCompleted}></input>
        </td>
        <td className="tableBodyCell tableCell dateField">{todo.date}</td>
        <td className="tableBodyCell tableCell categoryField">{todo.category}</td>
        <td className="tableBodyCell tableCell descriptionField">{todo.description}</td>
        <td className="tableBodyCell tableCell deleteButtonCell deleteTodoButtonCell" id="deleteTodoButtonCell" >
          <input type="image" src="/static/redcross.png" alt="Delete" className="deleteTodoButton" onClick={this.handleDelete}></input>
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
          {return <TodoListBodyRow id={index} todo={todo} deleteTodo={this.props.deleteTodo}/>}
        )}
      </tbody>
    )
  }
}


class TodoListHeader extends React.Component 
{
  render() {
    return (
      <thead>
        <TodoListHeaderRow />
      </thead>
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
    reload(this.state.todos);
  }

  deleteTodo(index) {
    console.log(index);
    delete this.state.todos[index];
    this.setState({todos: this.state.todos});
    reload(this.state.todos);
  }

  render() {
    const trigger = <Button>Open Modal</Button>
    return (
      <div className="todoListContainer">
        <Modal header="Modal Header" trigger={trigger}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal>
        <div className="todoListDiv">
          <table className="todoListTable">
            <TodoListHeader />
            <TodoListBody deleteTodo={this.deleteTodo} todos={this.state.todos}/>
          </table>
        </div>
        <div className="entryFormDiv">
          <TodoListAddEntryForm addTodo={this.addTodo}/>
        </div>
      </div>
    )
  }
}

function reload(todos) {
  ReactDOM.render(
    <TodoList todos={todos}/>,
    document.getElementById('root')
  )
}


ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
)