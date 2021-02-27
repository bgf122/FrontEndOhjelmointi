import React, { useState }  from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

function App() {
  const [todo, setTodo] = useState({desc: '', date: ''});
  const [todos, setTodos] = useState([]);
  const [date, setDate] = useState(new Date());


  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  } 

  return (
    <div className="App">
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePicker name="date" value={date} onChange={date => setTodo({...todo, date: date.toISOString().slice(0,10)}, setDate(date))}/>
      </MuiPickersUtilsProvider> 
      <TextField label="Description" type="text" name="desc" value={todo.desc} onChange={inputChanged}/>
      <Button variant="contained" color="secondary" onClick={addTodo}>Add</Button>
      <table><tbody>
      {
      todos.map((todo, index) => 
        <tr key={index}>
          <td>{todo.date}</td>
          <td>{todo.desc}</td>
        </tr>)
      }
      </tbody></table>
    </div>
  );
}

export default App;
