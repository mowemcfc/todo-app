import React, { useState } from 'react';
import '../index.css';

function TodoListAddEntryForm(props: any) { 
  const [category, setCategory] = useState('School');
  const [description, setDescription] = useState('Sample task');

  const handleSubmit = (e: React.FormEvent) => {
    const todo = {
      date: new Date().toDateString().substr(3,7),
      description: description
    }
    props.addTodo(todo)
    e.preventDefault();
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategory(e.target.value);
  }

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

    return (
        <form className="addEntryForm Form" onSubmit={handleSubmit} >
            <input type="text" className="addEntryDescInput" onChange={handleDescriptionChange} id="description" name="description"></input>
            <button className="formSubmitButton" type="submit"> Add </button>
        </form>
    )
}

export default TodoListAddEntryForm;

