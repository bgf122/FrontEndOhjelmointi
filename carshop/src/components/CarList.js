import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { Button } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import AppBar from './AppBar';
import EditCar from './EditCar';

export default function Carlist() {    
    const [cars, setCars] = useState([]);
    const [open, setOpen] = useState(false);

    const Alert = (props) => {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const deleteButton = (props) => {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => deleteCar(props.value)}>Delete</Button>
            </div>
        )
    }

    const editButton = (props) => {
        return (
            <div>
                <EditCar car={props.data} saveCar={saveCar}/>
            </div>
        )
    }

    const saveCar = (car, link) => {
        fetch(link, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            })
            .then(res => fetchData())
            .catch(err => console.log(err));
    }
    
    const fetchData = () => {
        fetch('https://carstockrest.herokuapp.com/cars')
        .then(response => response.json())
        .then(data => setCars(data._embedded.cars))
    } 

    const deleteCar = (props) => {
        if (window.confirm('Are you sure?')){
            fetch(props, {method: 'DELETE'})
            .then(res => fetchData())
            .then(handleClick())
            .catch(err => console.log(err));
        }
        
    }
    
    

    const gridOptions = {
        columnDefs: [
            { headerName:'Brand', field:'brand'},
            { headerName:'Model', field:'model'},
            { headerName:'Color', field:'color'},
            { headerName:'Fuel', field:'fuel'},
            { headerName:'Year', field:'year'},
            { headerName:'Price', field:'price'},
            { headerName: '', field: '', cellRendererFramework: editButton, cellRendererParams: '', filter: false, sortable: false, width: 85},
            { headerName: '', field: '_links.self.href', cellRendererFramework: deleteButton, cellRendererParams: '_links.self.href', filter: false, sortable: false, width: 110}
        ],
        defaultColDef: {
            width: 175,
            editable: true,
            filter: 'agTextColumnFilter',
            sortable: true,
        },        
    }
    useEffect(() => fetchData(), []);

    return (
        <div style={{height: '100%', width: '100%', margin: 'auto'}}>
            <AppBar fetchData={fetchData}/>
            <div style={{display: 'flex', justifyContent:'center'}}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert severity="warning">Car deleted!</Alert>
                </Snackbar>
                <div className="ag-theme-alpine">
                    <AgGridReact
                        gridOptions={gridOptions}
                        domLayout='print'
                        rowData={cars}>
                    </AgGridReact>
                </div>
            </div>
        </div>
    );
}