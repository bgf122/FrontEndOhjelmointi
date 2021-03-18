import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCar from './AddCar';

export default function AppBar(props) {
    return (
        <div>
            <Appbar position="static">
                <Toolbar>
                    <Typography style={{flexGrow: 1}} variant="h6" >
                        Carshop
                    </Typography>
                    <AddCar fetchData={props.fetchData}/>
                </Toolbar>
            </Appbar>
        </div>
    )
}