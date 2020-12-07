import React from 'react';
import '../index.css';

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

export default TodoListAddEntryForm;

