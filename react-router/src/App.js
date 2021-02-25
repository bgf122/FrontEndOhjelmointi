import './App.css';
import { BrowserRouter as Router, Switch, Route, Link }  from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Welcome to React Router</h2>
      </header>
      <Router>
        <div>
          <Link to='/'>HOME</Link>{' '}
          <Link to='/about'>ABOUT</Link>{' '}
          <Link to='/contact'>CONTACT</Link>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/> 
            <Route path='/contact' component={Contact}/>
         </Switch>
        </div>          
      </Router>
    </div>
  );
}

export default App;
