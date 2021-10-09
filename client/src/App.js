import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx'
import Home from './components/home/Home.jsx'
import Form from './components/form/Form.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Henry Food</h1>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/recipes' component={Form}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
