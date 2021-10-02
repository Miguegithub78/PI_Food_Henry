import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx'
import Home from './components/home/Home.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Food</h1>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
