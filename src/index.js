import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

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
          <input type="text" value={this.state.category} onChange={this.handleCategoryChange} id="category" name="category"></input>
        </label>

        <label >
          Description
          <input type="text" value = {this.state.description} onChange={this.handleDescriptionChange} id="description" name="description"></input>
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
        <th className="tableHeaderText dateHeader">Date</th>
        <th className="tableHeaderText categoryHeader">Category</th>
        <th className="tableHeaderText descriptionHeader">Description</th>
      </tr>
    )  
  }
}

class TodoListBodyRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {idx: this.props.id, date: this.props.date, description: this.props.description};
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deleteTodo(this.state.idx);
    e.preventDefault();
  }

  render() {
    return (
      <tr className="todoListRow" key={this.state.idx}>
        <td className="tableText dateField">{this.props.date}</td>
        <td className="tableText categoryField">{this.props.category}</td>
        <td className="tableText descriptionField">{this.props.description}</td>
        <td className="tableText deleteButtonCell deleteTodoButtonCell" id="deleteTodoButtonCell" >
          <input type="submit" className="deleteTodoButton" value="Delete:)" onClick={this.handleDelete}></input>
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
          {return <TodoListBodyRow id={index} date={todo.date} category={todo.category} description={todo.description} deleteTodo={this.props.deleteTodo}/>}
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
    return (
      <div className="TodoListContainer">
        <table className="todoList">
          <TodoListHeader />
          <TodoListBody deleteTodo={this.deleteTodo} todos={this.state.todos}/>
        </table>
        <TodoListAddEntryForm addTodo={this.addTodo}/>,
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