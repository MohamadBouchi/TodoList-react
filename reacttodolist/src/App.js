import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header';

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
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
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
  addTodo = (title) => {
    const newTodo = {
      id: 6,
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]})
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header></Header>
          <AddTodo addTodo={this.addTodo}></AddTodo>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
        </div>
      </div>
    );
  }
}

export default App;
