import React, { useState } from 'react';
import './App.css';

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
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
