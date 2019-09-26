import React from 'react'
import {NavLink} from 'react-router-dom'
import Searchbar from '../components/Searchbar.js'

const Navbar = () => {
    return(
        <div>
        <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <img src={require('/Users/ashley/Queer Community App/Queer Community App Frontend/queer-community-app-frontend/src/Untitled.png')} width="30" height="30" alt = "unicorn logo"/>
    </a>

    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>
  <div className = 'container searchbar-container'>
      <Searchbar />
  </div>

  <div id="navbarBasicExample" class="navbar-menu">

    <div className="navbar-end">
        <div className = 'navbar-item'>
            <NavLink className = 'navbar-item' to = "/events">
                <p>Events</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/calendar">
                <p>Calendar</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/profile">
                <p>Profile</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/chat">
                <p>Chat</p>
            </NavLink>
            <NavLink className = 'navbar-item' to = "/safespaces">
                <p>Safe Spaces</p>
            </NavLink>
        </div>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar