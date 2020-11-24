import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


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
  
  renderRow(props) {
    return <TodoListBodyRow date={props.date} category={props.category} description={props.description}/>;  
  }

  render() {
    const rowData1 = {
      date: "08Nov10",
      category: "Uni",
      description: "Clean Car"
    }

    const rowData2 = {
      date: "09Nov20",
      category: "Life",
      description: "Do assignment"

    }
    return (
      <tbody>
        {this.renderRow(rowData1)}
        {this.renderRow(rowData2)}
        {this.renderRow(rowData2)}
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
  render() {
    return (
      <div className="TodoListContainer">
        <table className="todoList">
          <TodoListHeader />
          <TodoListBody />
        </table>
      </div>
    )
  }
}


ReactDOM.render(
    <TodoList />,
    document.getElementById('root')
)