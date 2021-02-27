import React, { useState }  from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Todos from './Todos';

function App() {
  const [value, setValue] = useState('home');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange}>
          <Tab value="home" label="Home" />
          <Tab value="todos" label="My Todos" />
        </Tabs>
      </AppBar>
      {value === 'home' && 
      <div>
        <p>Welcome to home page</p>
      </div>}
      {value === 'todos' && 
      <Todos/>}
    </div>
  );
}

export default App;
