import './App.css';
import Catalog from './Catalog';
import About from './About';
import {Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">The Catalog App</h1>
        <nav>
            <ul>
              <li><Link to='/'>Catalog</Link></li>
              <li><Link to='/about'>About</Link></li>
            </ul>
          </nav>
      </header>
      <Switch>
        <Route exact path='/' component={Catalog} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
