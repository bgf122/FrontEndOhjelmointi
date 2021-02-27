import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MomentUtils from '@date-io/moment';
import {
  DatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import "moment/locale/fi";
import moment from 'moment';


function Todos() {
    const [todo, setTodo] = useState({desc: '', date: moment().format('l')});
    const [todos, setTodos] = useState([]);
    const [date, setDate] = useState(moment());
    const locale = 'fi';

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }
    
      const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }
    

    return (
        <div style={{marginTop: '1vh'}}>
        <MuiPickersUtilsProvider utils={MomentUtils} locale={locale}>
          <DatePicker label="Date" value={date} onChange={newDate =>  setTodo({...todo, date: newDate.format('l')}, setDate(newDate))}/>
        </MuiPickersUtilsProvider> 
        <TextField label="Description" name="desc" value={todo.desc} onChange={inputChanged}/>
        <Button style={{marginTop: '1vh'}}variant="contained" color="primary" onClick={addTodo}>Add</Button>
        <table>
          <tbody>
            {todos.map((todo, index) => 
              <tr key={index}>
                <td>{todo.date}</td>
                <td>{todo.desc}</td>
              </tr>)}
          </tbody>
        </table>
      </div>
    )
}

export default Todos;