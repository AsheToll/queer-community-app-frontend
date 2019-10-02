import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.scss'
import Login from './containers/Login.js'
import Home from './containers/Home.js'
import EventDetails from './components/EventDetails.js'
import Profile from './containers/Profile.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      user: null
    }
  }

  updateUser = user => {
    this.setState({
      user: user
    })
  }

  componentDidMount() {
    if (localStorage.getItem('token')) {
      fetch('http://localhost:4000/profile', {
        headers: {
          "Authorization" : `Bearer ${localStorage.getItem('token')}`
        }
      })
      .then(resp => resp.json())
      .then(user => {
        this.updateUser(user)
      })
    }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path = '/login' render = {() => {
            return this.state.user ? 
            <Redirect to = '/profile' /> : 
            <Login updateUser = {this.updateUser} />
          }} />
          <Route exact path = '/profile' render = {() => {
            return this.state.user ? <Profile {...this.state.user} /> : 
            <Redirect to = '/login' />
          }
          }/>
          <Route exact path = '/events' component = {Home} />
          {/* <Route exact path = '/profile' component = {Profile} /> */}
          <Route exact path = {`/events/:eventId`} component = {EventDetails}/>
        </Switch>
      </div>
    );
  }
}

export default App;
