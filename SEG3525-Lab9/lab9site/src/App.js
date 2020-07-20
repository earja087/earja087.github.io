import React from 'react';
import NavigationBar from './Pages/NavigationBar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Team from './Pages/Team'
import History from './Pages/History'
import Booking from './Pages/Booking'
import Main from './Pages/Main'
import AboutUs from './Pages/AboutUs'
import './App.css'

function App() {
  return (
    <div className="App">
    <Router>
    <NavigationBar />
      <Switch>
        <Route path="/Team" component = {Team}>
          <Team />
        </Route>
        <Route path="/History" component = {History}>
          <History />
        </Route>
        <Route path="/Booking" component = {Booking}>
          <Booking />
        </Route>
        <Route path="/AboutUs" component = {Booking}>
          <AboutUs />
        </Route>
        <Route path="/" component = {this}>
          <Main />
        </Route>
      </Switch>
    </Router>
    </div>
    );
  }

  export default App;
