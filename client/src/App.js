import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LandingPage from './components/landingPage/LandingPage.jsx'
import Home from './components/home/Home.jsx'
import Form from './components/form/Form.jsx'
import Detail from './components/detail/Detail.jsx'
import NotFound from './components/notfound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/home' component={Home}/>
          <Route path='/recipes' component={Form}/>
          <Route path='/detail' component={Detail}/>
          <Route component = {() => (<NotFound />)}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
