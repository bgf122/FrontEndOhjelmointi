import React, { useState, useRef } from 'react';
import{ AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Todolist = () => {
    const [todo, setTodo] = useState({description: '', date: '', priority:''});
    const [todos, setTodos] = useState([]);
    const gridRef = useRef();

    const columns = [
        { headerName: "Description", field:"description", sortable: true },
        { headerName: "Date", field:"date", sortable: true },
        { headerName: "Priority", field:"priority", sortable: true, cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}}
    ]

    const inputChanged = (event) => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const deleteTodo = () => {
        if (gridRef.current.getSelectedNodes().length> 0) {
            setTodos(todos.filter((todo, index) => 
            index !== gridRef.current.getSelectedNodes()[0].childIndex))
        } else {
            alert('Selectrowfirst');
        }
    }

  return (
    <div style={{flex: 1, justifyContent: 'center'}}>
        <div style={{flex: 1, margin: 'auto', width: '50%'}}>
            <input type="text" onChange={inputChanged} placeholder="Description" name="description" value={todo.description}/>
            <input type="text" onChange={inputChanged} placeholder="Date" name="date" value={todo.date}/>
            <input type="text" onChange={inputChanged} placeholder="Priority" name="priority" value={todo.priority}/>
            <button onClick={addTodo}>Add</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
        <div className="ag-theme-material" style={{width: '60%', margin: 'auto', flex: 1, height: '700px'}}>
            <AgGridReact 
                defaultColDef={{
                filter: true,
                sortable: true,
                floatingFilter: true,
                }}
                ref={gridRef}
                onGridReady={ params => gridRef.current = params.api }
                rowSelection="single"
                columnDefs={columns} 
                animateRows={true}
                rowData={todos}/>
        </div>
    </div>
  );
};

export default Todolist;