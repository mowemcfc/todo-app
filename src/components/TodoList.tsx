import React, { useState }  from 'react';
import { Todo } from '../index';
import '../index.css';

function TodoListBodyRow(props: {key: number, todo: Todo, id: number, deleteTodo: any}) { 

  const [todoIndex, setIndex] = useState(props.id);
  const [todo, setTodo] = useState(props.todo);

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    props.deleteTodo(todoIndex);
  }

  // not required for now - pending DB integration
  const markTodoCompleted = (e: React.MouseEvent) => {
    return;
  }

  return (
    <tr className="todoListRow" key={todoIndex}>
      <td className="checkboxCell">
        <input type="checkbox" className="completedCheckbox" id="completedCheckbox" onClick={markTodoCompleted}></input>
      </td>
      <td className="tableBodyCell tableCell dateField">{todo.date}</td>
      <td className="tableBodyCell tableCell descriptionField">{todo.description}</td>
      <td className="deleteButtonCell deleteTodoButtonCell" id="deleteTodoButtonCell" >
        <button className="deleteTodoButton" onClick={handleDelete}></button>
      </td>
    </tr> 
  )  
}

function TodoListBody(props: {todos: Todo[], deleteTodo: any}) {
  return (
    <tbody className="todoListBody">
      {props.todos.map((todo, index) => 
        {return <TodoListBodyRow key={index} id={index} todo={todo} deleteTodo={props.deleteTodo}/>}
      )}
    </tbody>
  )
}

export {
    TodoListBody,
    TodoListBodyRow,
}
