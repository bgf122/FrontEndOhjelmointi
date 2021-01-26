import React, { useState } from 'react';
import './App.css';
import Todolist from './components/Todolist';

function App() {

  const [todo, setTodo] = useState({date: '', desc: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name] : event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (event) => {
    event.preventDefault();
    setTodos(todos.filter((item, index) => index !== parseInt(event.target.value)));
  }

  return (
    <div>
      <div className="App-header">
        <h1>To do list</h1>
      </div>
      <div className="App">
        <form onSubmit={addTodo}> 
          <input type="text" name="date" value={todo.date} onChange={inputChanged}/>
          <input type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
          <input type="submit" value="Add"/>
        </form>
        <Todolist todos={todos} deleteTodo={deleteTodo}/>
      </div>
    </div>
  );
}

export default App;
