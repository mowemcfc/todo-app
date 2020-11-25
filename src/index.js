import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

//TODO: fix 'each child in a list shoudl have a unique key prop' issue

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
  render() {
    return (
      <tr className="todoListRow">
        <td className="tableText dateField">{this.props.date}</td>
        <td className="tableText categoryField">{this.props.category}</td>
        <td className="tableText descriptionField">{this.props.description}</td>
      </tr> 
    )  
  }
}

class TodoListBody extends React.Component {
  render() {
    return (
      <tbody className="todoListBody">
        {this.props.todos.map((todo, index) => 
          {return <TodoListBodyRow date={todo.date} category={todo.category} description={todo.description}/>}
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
    super(props)
    this.state = {todos: []}
    this.addTodo = this.addTodo.bind(this)
  }  

  addTodo(todo) {
    this.state.todos.push(todo)
    this.setState({todos: this.state.todos})
    reload(this.state.todos);
  }

  render() {
    return (
      <div className="TodoListContainer">
        <table className="todoList">
          <TodoListHeader />
          <TodoListBody todos={this.state.todos}/>
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