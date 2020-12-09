import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoListAddEntryForm from './components/Form.js';
import {TodoListBody} from './components/TodoList'

export interface Todo {
  date:string,
  category:string,
  description:string,
}

function TodoList() { 

  const [todos, setTodos] = useState(
    [
      {
        date: 'Nov 3',
        category: 'Uni',
        description: 'Sample Task'
      }
    ]
  );

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (index: number) => {
    let todosCopy = [...todos];
    todosCopy.splice(index, 1);
    setTodos(todosCopy);
  };

  return (
    <div className="todoListContainer">
      <div className="entryFormDiv">
        <TodoListAddEntryForm addTodo={addTodo}/>
      </div>
      <table className="todoListTable">
        <TodoListBody deleteTodo={deleteTodo} todos={todos}/>
      </table>
    </div>
  )
}

const todoList = <TodoList />;
ReactDOM.render(
    todoList,
    document.getElementById('root')
)