import React, { useState } from 'react';
import '../index.css';

function TodoListAddEntryForm(props) { 
  const [category, setCategory] = useState('School');
  const [description, setDescription] = useState('Sample task');

  const handleSubmit = (e) => {
    const todo = {
      date: new Date().toDateString().substr(3,7),
      description: description
    }
    props.addTodo(todo)
    e.preventDefault();
  }

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

    return (
        <form className="addEntryForm Form" onSubmit={handleSubmit} >
            <input type="text" className="addEntryDescInput" onChange={handleDescriptionChange} id="description" name="description"></input>
            <button className="formSubmitButton" type="submit"> Add </button>
        </form>
    )
}

export default TodoListAddEntryForm;

