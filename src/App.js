import React from 'react';
import {Route, Switch} from 'react-router-dom'
import './App.scss'
import Login from './containers/Login.js'
import Home from './containers/Home.js'
import EventDetails from './components/EventDetails.js'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path = '/login' component = {Login} />
        <Route exact path = '/events' component = {Home} />
        <Route exact path = {`/events/:eventId`} component = {EventDetails}/>
      </Switch>
    </div>
  );
}

export default App;
