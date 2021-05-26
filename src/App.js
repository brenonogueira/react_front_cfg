import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { useSelector } from 'react-redux'

function App() {

  const reducer = useSelector(state => state.userReducer)

  return (
    <div className="App">
      <Router>
        {reducer.isLogged ?
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Redirect to="/"></Redirect>
          </Switch>
          :
          <Switch>
           <Route exact path="/" component={Home} />
           <Redirect to="/"></Redirect>
          </Switch>}
      </Router>
    </div>
  );
}

export default App;
