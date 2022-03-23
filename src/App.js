import './App.css';
import Home from './components/home';
import Login from './components/login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// import Calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      { 
      <Router>
      <Switch>
        <Route exact path={["/"]} element={<Home />}>
          <Home />
        </Route>
        {/* <Route exact path={["/calendar"]} element={<Calendar />}>
          <Calendar />
        </Route> */}
        <Route exact path={["/login", "/signup"] } element={<Login />}>
          <Login />
        </Route>     
      </Switch>
      </Router> }
      {/* <Home />
      <Login /> */}

        
    </div>
  );
}

export default App;
