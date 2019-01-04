import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Lorem praesentium odit nam voluptates tenetur, in aspernatur alias. TODO1',
        completed: false
      },
      {
        id: 2,
        title: 'Lorem praesentium odit nam voluptates tenetur, in aspernatur alias. TODO2',
        completed: false
      },
      {
        id: 3,
        title: 'Lorem praesentium odit nam voluptates tenetur, in aspernatur alias. TODO3',
        completed: false
      },
      {
        id: 4,
        title: 'Lorem praesentium odit nam voluptates tenetur, in aspernatur alias. TODO4',
        completed: false
      },
      {
        id: 5,
        title: 'Lorem praesentium odit nam voluptates tenetur, in aspernatur alias. TODO5',
        completed: false
      },
    ]
  }
  markComplete = (id) => {
    this.setState({
      todo: this.state.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos} markComplete={this.markComplete}></Todos>
      </div>
    );
  }
}

export default App;
